import { Icon } from "./Icon";
import type { Amenity } from "@/lib/types";

/** "What this place offers" grid with a "Show all N amenities" affordance. */
export function AmenitiesGrid({
  amenities,
  totalCount,
}: {
  amenities: Amenity[];
  totalCount: number;
}) {
  return (
    <div id="amenities" className="border-t border-outline-variant/20 pt-stack-lg scroll-mt-28">
      <h3 className="font-headline-sm text-headline-sm mb-6">What this place offers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
        {amenities.map((a) => (
          <div
            key={a.label}
            className="flex items-center gap-4 text-on-surface-variant"
          >
            <Icon name={a.iconKey} className="text-primary" />
            <span>{a.label}</span>
          </div>
        ))}
      </div>
      <button className="border border-on-surface px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors">
        Show all {totalCount} amenities
      </button>
    </div>
  );
}
