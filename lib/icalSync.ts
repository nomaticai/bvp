/**
 * iCal availability sync (Section 7).
 *
 * Parses an Airbnb `.ics` export into busy date ranges and fetches feeds
 * server-side. Airbnb VEVENTs use all-day DATE values where DTEND is the
 * checkout day (EXCLUSIVE), so the last blocked night is DTEND - 1 day.
 *
 * No external dependency: Airbnb's iCal is simple and well-formed, so a small
 * purpose-built parser is more robust here than pulling in node-ical.
 */

export interface ParsedBlock {
  /** YYYY-MM-DD, inclusive (first unavailable night). */
  startDate: string;
  /** YYYY-MM-DD, inclusive (last unavailable night). */
  endDate: string;
}

/** "20260907" (or "20260907T000000Z") -> "2026-09-07". Returns null if unparseable. */
function toIso(rawValue: string): string | null {
  const m = rawValue.match(/(\d{4})(\d{2})(\d{2})/);
  if (!m) return null;
  return `${m[1]}-${m[2]}-${m[3]}`;
}

/** Shift a YYYY-MM-DD date string by `days` (can be negative), returning YYYY-MM-DD. */
function shiftIso(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

/**
 * Parse an Airbnb iCal payload into inclusive busy date ranges.
 * Every VEVENT (reservation or owner block) counts as unavailable.
 */
export function parseIcalToBlocks(ics: string): ParsedBlock[] {
  // Unfold RFC 5545 folded lines (continuation lines start with space/tab).
  const unfolded = ics.replace(/\r?\n[ \t]/g, "");
  const lines = unfolded.split(/\r\n|\n|\r/);

  const blocks: ParsedBlock[] = [];
  let inEvent = false;
  let startRaw: string | null = null;
  let endRaw: string | null = null;

  for (const line of lines) {
    if (line.startsWith("BEGIN:VEVENT")) {
      inEvent = true;
      startRaw = null;
      endRaw = null;
      continue;
    }
    if (line.startsWith("END:VEVENT")) {
      if (startRaw && endRaw) {
        const start = toIso(startRaw);
        const endExclusive = toIso(endRaw);
        if (start && endExclusive) {
          // DTEND is the checkout day (exclusive) -> last blocked night is -1.
          const end = shiftIso(endExclusive, -1);
          if (end >= start) blocks.push({ startDate: start, endDate: end });
        }
      }
      inEvent = false;
      continue;
    }
    if (!inEvent) continue;

    // Property lines can carry params, e.g. "DTSTART;VALUE=DATE:20260907".
    if (/^DTSTART[:;]/.test(line)) startRaw = line.slice(line.indexOf(":") + 1);
    else if (/^DTEND[:;]/.test(line)) endRaw = line.slice(line.indexOf(":") + 1);
  }

  return blocks;
}

/**
 * Fetch and parse one property's iCal feed. Throws on network/HTTP failure so
 * the caller can decide how to degrade (we do NOT invent availability).
 */
export async function fetchAvailabilityForUrl(
  url: string,
): Promise<ParsedBlock[]> {
  const res = await fetch(url, {
    // Align with the property page's ISR window; cached at build/revalidate.
    next: { revalidate: 3600 },
    headers: { Accept: "text/calendar" },
  });
  if (!res.ok) {
    throw new Error(`iCal fetch failed (${res.status} ${res.statusText})`);
  }
  const text = await res.text();
  return parseIcalToBlocks(text);
}
