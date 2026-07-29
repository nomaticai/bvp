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
        <Link href={href}>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-1 line-clamp-1 hover:text-secondary transition-colors">
            {property.displayTitle}
          </h3>
        </Link>
        <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mb-4">
          <Icon name="location_on" className="text-sm" /> {property.community}, HHI
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-outline-variant/30">
          <div className="flex gap-4 text-outline text-sm">
            <span className="flex items-center gap-1">
              <Icon name="bed" className="text-base" /> {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="bathtub" className="text-base" /> {property.baths}
            </span>
            {property.rating != null && (
              <span className="flex items-center gap-1">
                <Icon name="star" className="text-base text-primary" filled />{" "}
                {property.rating.toFixed(2)}
              </span>
            )}
          </div>
          <Link
            href={href}
            className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-secondary transition-all"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
