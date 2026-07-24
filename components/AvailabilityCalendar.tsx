"use client";

import { useMemo, useState } from "react";
import { Icon } from "./Icon";

/**
 * Availability calendar.
 *
 * Shape matches the `availability_blocks` table (Section 5): each block is a
 * date range that is UNAVAILABLE. Session 1 renders from static seed data
 * (empty = all available placeholder). When the iCal sync lands, pass the
 * property's real blocks — no rewrite needed.
 *
 * Display-only by design: v1 has no booking engine, so the calendar greys out
 * blocked dates and routes guests to WhatsApp/Call to confirm (per Section 8).
 */
export interface AvailabilityBlock {
  /** ISO date (YYYY-MM-DD), inclusive. */
  startDate: string;
  /** ISO date (YYYY-MM-DD), inclusive. */
  endDate: string;
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function startOfDay(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

function toKeySet(blocks: AvailabilityBlock[]): Set<number> {
  const set = new Set<number>();
  for (const b of blocks) {
    const start = new Date(b.startDate + "T00:00:00");
    const end = new Date(b.endDate + "T00:00:00");
    for (let t = startOfDay(start); t <= startOfDay(end); t += 86_400_000) {
      set.add(t);
    }
  }
  return set;
}

export function AvailabilityCalendar({
  blocks = [],
}: {
  blocks?: AvailabilityBlock[];
}) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [cursor, setCursor] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const blockedDays = useMemo(() => toKeySet(blocks), [blocks]);
  const hasRealData = blocks.length > 0;

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const canGoBack =
    year > new Date().getFullYear() ||
    (year === new Date().getFullYear() && month > new Date().getMonth());

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="border border-outline-variant/50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => canGoBack && setCursor(new Date(year, month - 1, 1))}
          disabled={!canGoBack}
          aria-label="Previous month"
          className="w-8 h-8 rounded-full flex items-center justify-center text-primary hover:bg-surface-container disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <Icon name="chevron_left" className="text-[20px]" />
        </button>
        <p className="font-label-md text-label-md text-on-surface">
          {MONTHS[month]} {year}
        </p>
        <button
          type="button"
          onClick={() => setCursor(new Date(year, month + 1, 1))}
          aria-label="Next month"
          className="w-8 h-8 rounded-full flex items-center justify-center text-primary hover:bg-surface-container transition-colors"
        >
          <Icon name="chevron_right" className="text-[20px]" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="text-center text-caption text-on-surface-variant py-1"
          >
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={`e${i}`} />;
          const ts = startOfDay(new Date(year, month, day));
          const isPast = ts < today;
          const isBlocked = blockedDays.has(ts);
          const unavailable = isPast || isBlocked;
          return (
            <div
              key={day}
              aria-label={
                isBlocked ? `${MONTHS[month]} ${day}, unavailable` : undefined
              }
              className={[
                "text-center text-body-md py-1.5 rounded-lg select-none",
                isPast && "text-outline-variant line-through",
                isBlocked && "text-outline line-through bg-surface-container/60",
                !unavailable && "text-on-surface hover:bg-surface-container cursor-default",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {day}
            </div>
          );
        })}
      </div>

      <p className="text-caption text-on-surface-variant mt-3 flex items-center gap-1.5">
        <Icon name="info" className="text-[16px] text-secondary" />
        {hasRealData
          ? "Greyed dates are unavailable. Message us to confirm your stay."
          : "Live availability syncing soon — confirm your dates via WhatsApp or a call."}
      </p>
    </div>
  );
}
