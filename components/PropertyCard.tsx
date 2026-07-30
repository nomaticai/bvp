import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";
import type { Property } from "@/lib/types";

/**
 * Homepage property card (matches the "Curated Coastal Residences" grid).
 * 16px radius, white surface, blue-tinted ambient shadow, image scales on hover.
 *
 * The "From $X/nt" badge uses a PLACEHOLDER rate (confirmed with client) — see
 * `placeholderNightlyRate` in lib/data.ts. TODO: swap for real rates.
 */
export function PropertyCard({ property }: { property: Property }) {
  const href = `/properties/${property.slug}`;
  return (
    <div className="group bg-surface-container-lowest rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover">
      <Link href={href} className="block relative h-64 overflow-hidden">
        <Image
          src={property.heroImage.url}
          alt={property.heroImage.altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* TODO(placeholder rate): replace with real nightly rate from client. */}
        <div className="absolute top-4 right-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full text-label-md font-label-md">
          From ${property.placeholderNightlyRate}/nt
        </div>
        {property.isGuestFavorite && (
          <div className="absolute top-4 left-4 bg-surface-container-lowest/95 text-primary px-3 py-1 rounded-full text-caption font-label-md flex items-center gap-1">
            <Icon name="workspace_premium" className="text-[14px]" filled />
            Guest Favorite
          </div>
        )}
      </Link>
      <div className="p-6">
        {/* Title + rating (Airbnb-style) */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <Link href={href} className="min-w-0">
            <h3 className="font-headline-sm text-[19px] leading-tight text-primary hover:text-secondary transition-colors">
              {property.displayTitle}
            </h3>
          </Link>
          {property.rating != null && (
            <span className="flex items-center gap-1 shrink-0 font-label-md text-label-md text-on-surface">
              <Icon name="star" className="text-[16px] text-primary" filled />
              {property.rating.toFixed(2)}
              {property.reviewCount != null && (
                <span className="text-on-surface-variant font-normal">
                  ({property.reviewCount})
                </span>
              )}
            </span>
          )}
        </div>

        {/* Location */}
        <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mb-2">
          <Icon name="location_on" className="text-sm" /> {property.community}, HHI
        </p>

        {/* Small description */}
        <p className="text-body-md text-on-surface-variant line-clamp-2 mb-4">
          {property.subtitle}
        </p>

        {/* Details: bedrooms · beds · baths */}
        <div className="flex justify-between items-center gap-3 pt-4 border-t border-outline-variant/30">
          <p className="text-sm text-on-surface-variant">
            {property.bedrooms} Bedroom{property.bedrooms > 1 ? "s" : ""} ·{" "}
            {property.beds} Bed{property.beds > 1 ? "s" : ""} · {property.baths}{" "}
            Bath{property.baths > 1 ? "s" : ""}
          </p>
          <Link
            href={href}
            className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shrink-0"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
