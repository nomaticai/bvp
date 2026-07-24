/**
 * iCal availability sync logic (Section 7).
 *
 * SCAFFOLD ONLY for Session 1 — not wired to a live schedule yet. This file
 * documents the intended shape so a later session can drop in a real iCal
 * parser (node-ical / ical.js) and a Supabase service-role client.
 *
 * Contract per the brief:
 *   - Fetch each property's private Airbnb `.ics` URL (properties.airbnb_ical_url)
 *   - Parse VEVENT blocks → busy date ranges
 *   - DELETE existing availability_blocks for that property, INSERT fresh ranges
 *   - On failure (feed unreachable / malformed): keep last-known-good data.
 *     NEVER clear the calendar to an "all available" state — that's misleading.
 */

export interface ParsedBlock {
  startDate: string; // YYYY-MM-DD, inclusive
  endDate: string; // YYYY-MM-DD, inclusive
}

export interface SyncResult {
  propertyId: string;
  ok: boolean;
  blocks: ParsedBlock[];
  error?: string;
}

/**
 * Parse an Airbnb iCal (.ics) payload into busy date ranges.
 * TODO: implement with node-ical/ical.js. Airbnb VEVENTs use DTSTART/DTEND
 * where DTEND is exclusive — normalize to inclusive end dates here.
 */
export function parseIcalToBlocks(_ics: string): ParsedBlock[] {
  throw new Error("parseIcalToBlocks not implemented — Session 1 scaffold only.");
}

/**
 * Sync a single property. Fetches its feed, parses, and returns the result.
 * The caller (Edge Function / cron route) is responsible for the
 * delete-then-insert transaction and for preserving last-known-good on failure.
 */
export async function syncProperty(
  _propertyId: string,
  _icalUrl: string,
): Promise<SyncResult> {
  throw new Error("syncProperty not implemented — Session 1 scaffold only.");
}
