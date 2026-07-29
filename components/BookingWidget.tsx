import { Icon } from "./Icon";
import { AvailabilityCalendar, type AvailabilityBlock } from "./AvailabilityCalendar";
import { ContactCTA } from "./ContactCTA";
import type { Property } from "@/lib/types";

/**
 * Sticky sidebar widget: placeholder rate, availability calendar, contact CTAs,
 * and the "Direct with Owner" reassurance card. Matches the property page.
 */
export function BookingWidget({
  property,
  blocks = [],
}: {
  property: Property;
  blocks?: AvailabilityBlock[];
}) {
  return (
    <aside className="sticky top-28">
      <div className="bg-white rounded-2xl shadow-card p-6 border border-outline-variant/20">
        <div className="flex justify-between items-start mb-6">
          <div>
            {/* TODO(placeholder rate): replace with the client's real nightly rate. */}
            <span className="font-headline-sm text-headline-sm">
              ${property.placeholderNightlyRate}
            </span>
            <span className="text-on-surface-variant"> / night</span>
          </div>
          {property.rating != null && (
            <div className="flex items-center gap-1 font-label-md text-label-md">
              <Icon name="star" className="text-[16px] text-primary" filled />
              <span>{property.rating.toFixed(2)}</span>
            </div>
          )}
        </div>

        <div className="mb-6">
          <AvailabilityCalendar blocks={blocks} />
        </div>

        <ContactCTA propertyName={property.displayTitle} />
      </div>

      <div className="mt-6 p-6 border border-outline-variant/30 rounded-2xl flex items-center gap-4">
        <Icon name="verified_user" className="text-3xl text-primary" />
        <div>
          <p className="font-label-md text-label-md">Direct with Beach View Properties</p>
          <p className="text-caption text-on-surface-variant">
            You're booking directly with the owner for the best possible rate.
          </p>
        </div>
      </div>
    </aside>
  );
}
