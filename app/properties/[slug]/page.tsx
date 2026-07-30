import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingConcierge } from "@/components/FloatingConcierge";
import { Icon } from "@/components/Icon";
import { PropertyGallery } from "@/components/PropertyGallery";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BookingWidget } from "@/components/BookingWidget";
import type { AvailabilityBlock } from "@/components/AvailabilityCalendar";

import { getProperty, getAllSlugs, getRelatedProperties } from "@/lib/data";
import { IMG } from "@/lib/images";
import { HOST, SITE } from "@/lib/config";

// Static generation with hourly ISR — availability stays fresh once the iCal
// sync writes to `availability_blocks`, without full rebuilds (Section 4).
export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const property = getProperty(params.slug);
  if (!property) return {};
  return {
    title: property.displayTitle,
    description: property.description[0],
    openGraph: {
      title: `${property.displayTitle} · Beach View Properties`,
      description: property.description[0],
      images: [{ url: property.heroImage.url }],
      type: "website",
    },
  };
}

/**
 * Availability blocks for this property.
 *
 * Session 1: static seed = empty (all-available placeholder). Later, this is
 * where the page reads `availability_blocks` for the property (via Supabase)
 * and passes them to <BookingWidget> — no component changes required.
 */
function getAvailabilityBlocks(_slug: string): AvailabilityBlock[] {
  return [];
}

export default function PropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = getProperty(params.slug);
  if (!property) notFound();

  const related = getRelatedProperties(property.slug);
  const blocks = getAvailabilityBlocks(property.slug);

  return (
    <>
      <Header variant="property" />
      <main
        id="overview"
        className="pt-24 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-24"
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-stack-sm text-on-surface-variant font-label-md text-label-md">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Icon name="chevron_right" className="text-[16px]" />
          <Link href="/#residences" className="hover:text-primary transition-colors">
            Properties
          </Link>
          <Icon name="chevron_right" className="text-[16px]" />
          <span className="text-on-surface font-semibold line-clamp-1">
            {property.subtitle}
          </span>
        </nav>

        <PropertyGallery photos={property.gallery} />

        {/* Title block */}
        <section className="mb-stack-lg">
          <h1 className="font-headline-md text-headline-md md:text-display-lg font-bold text-on-surface mb-2">
            {property.displayTitle}
          </h1>
          {/* Small description under the title */}
          <p className="text-on-surface-variant font-body-lg max-w-3xl mb-4">
            {property.subtitle}
          </p>
          {/* Rating + stars row (Airbnb-style), with badges */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {property.rating != null && (
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      filled={i < Math.round(property.rating!)}
                      className={
                        i < Math.round(property.rating!)
                          ? "text-primary text-[18px]"
                          : "text-outline-variant text-[18px]"
                      }
                    />
                  ))}
                </div>
                <span className="font-label-md text-label-md">
                  {property.rating.toFixed(2)}
                </span>
                <span className="text-on-surface-variant text-caption">
                  · {property.reviewCount} reviews
                </span>
              </div>
            )}
            {property.isGuestFavorite && (
              <div className="bg-primary-fixed text-on-primary-fixed px-3 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-2">
                <Icon name="workspace_premium" className="text-[18px]" />
                {property.favoriteQualifier
                  ? `Guest Favorite · ${property.favoriteQualifier}`
                  : "Guest Favorite"}
              </div>
            )}
            {property.strPermit && (
              <div className="text-on-surface-variant text-caption flex items-center gap-1">
                <Icon name="verified_user" className="text-[16px]" />
                {property.strPermit}
              </div>
            )}
          </div>
          {/* Details row: guests · bedrooms · beds · baths */}
          <div className="flex flex-wrap gap-4 md:gap-6 mt-4 border-y border-outline-variant/20 py-4 text-on-surface-variant font-label-md text-label-md">
            <span className="flex items-center gap-1">
              <Icon name="person" className="text-[20px]" />
              {property.guests} Guests
            </span>
            <span className="flex items-center gap-1">
              <Icon name="bed" className="text-[20px]" />
              {property.bedrooms} Bedroom{property.bedrooms > 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="king_bed" className="text-[20px]" />
              {property.beds} Bed{property.beds > 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="bathtub" className="text-[20px]" />
              {property.baths} Bath{property.baths > 1 ? "s" : ""}
            </span>
          </div>
        </section>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left column */}
          <div className="lg:col-span-8 space-y-stack-lg">
            {/* Important notice (e.g. Sea Pines gate pass) — prominent, not fine print */}
            {property.importantNotice && (
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-secondary-container/40 border border-secondary/30">
                <Icon name="info" className="text-secondary mt-0.5" filled />
                <p className="text-body-md text-on-surface">
                  <span className="font-semibold">Good to know: </span>
                  {property.importantNotice}
                </p>
              </div>
            )}

            {/* Operator intro — brand-forward (no individual host name) */}
            <div className="flex items-center justify-between p-4 border border-outline-variant/20 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary relative shrink-0 flex items-center justify-center">
                  <Icon name="cottage" className="text-on-primary text-2xl" />
                  <div className="absolute bottom-0 right-0 bg-primary text-white p-0.5 rounded-full ring-2 ring-white">
                    <Icon name="verified" className="text-[14px]" filled />
                  </div>
                </div>
                <div>
                  <p className="font-headline-sm text-[18px]">By {SITE.name}</p>
                  <p className="text-on-surface-variant text-caption">
                    {HOST.responseRate} response rate · Responds{" "}
                    {HOST.responseTime}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex gap-2 text-primary">
                <Icon name="award_star" />
                <Icon name="chat_bubble" />
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {property.highlights.map((h) => (
                <div
                  key={h.title}
                  className="flex items-start gap-3 p-4 bg-surface-container-low rounded-xl"
                >
                  <Icon
                    name={h.iconKey}
                    className="text-primary p-2 bg-white rounded-lg"
                  />
                  <div>
                    <p className="font-label-md text-label-md">{h.title}</p>
                    <p className="text-caption text-on-surface-variant">
                      {h.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <article className="max-w-none">
              {property.description.map((para, i) => (
                <p
                  key={i}
                  className="font-body-lg text-on-surface-variant leading-relaxed mt-4 first:mt-0"
                >
                  {para}
                </p>
              ))}
            </article>

            {/* Where you'll sleep */}
            <div>
              <h3 className="font-headline-sm text-headline-sm mb-4">
                Where you&rsquo;ll sleep
              </h3>
              <div className="flex flex-wrap gap-4">
                {property.bedGroups.map((b) => (
                  <div
                    key={b.room}
                    className="w-full sm:w-64 p-6 border border-outline-variant/30 rounded-2xl hover:border-primary transition-colors"
                  >
                    <Icon
                      name={b.iconKey}
                      className="text-3xl mb-4 text-primary block"
                    />
                    <p className="font-label-md text-label-md mb-1">{b.room}</p>
                    <p className="text-on-surface-variant">{b.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <AmenitiesGrid
              amenities={property.amenities}
              totalCount={property.amenityCount}
            />

            {/* Reviews */}
            <ReviewsSection
              rating={property.rating}
              reviewCount={property.reviewCount}
              breakdown={property.ratingBreakdown}
              reviews={property.reviews}
            />

            {/* Location */}
            <div
              id="location"
              className="border-t border-outline-variant/20 pt-stack-lg scroll-mt-28"
            >
              <h3 className="font-headline-sm text-headline-sm mb-6">
                Where you&rsquo;ll be
              </h3>
              <p className="text-on-surface-variant mb-6">
                {property.locationBlurb}
              </p>
              <div className="w-full h-80 rounded-2xl overflow-hidden bg-surface-container shadow-inner grayscale contrast-75 relative">
                <Image
                  src={IMG.mapPlaceholder.url}
                  alt="Map of the Hilton Head Island area (community-level location for privacy)."
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <p className="text-caption text-on-surface-variant mt-3">
                Exact address shared after booking. Map shows the general
                community area for your privacy.
              </p>
            </div>
          </div>

          {/* Right column — sticky booking widget */}
          <div className="lg:col-span-4">
            <BookingWidget property={property} blocks={blocks} />
          </div>
        </div>

        {/* You might also like */}
        <section className="mt-stack-lg pt-stack-lg border-t border-outline-variant/20">
          <h3 className="font-headline-md text-headline-md mb-8">
            You might also like
          </h3>
          <div className="flex overflow-x-auto gap-gutter pb-6 no-scrollbar snap-x">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/properties/${r.slug}`}
                className="min-w-[280px] md:min-w-[320px] group snap-start"
              >
                <div className="h-64 overflow-hidden rounded-2xl mb-4 relative">
                  <Image
                    src={r.heroImage.url}
                    alt={r.heroImage.altText}
                    fill
                    sizes="320px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface line-clamp-1">
                      {r.displayTitle}
                    </p>
                    <p className="text-on-surface-variant text-caption">
                      {r.bedrooms} Bedroom · {r.community}
                    </p>
                    {/* TODO(placeholder rate) */}
                    <p className="font-label-md text-label-md mt-1">
                      ${r.placeholderNightlyRate} / night
                    </p>
                  </div>
                  {r.rating != null && (
                    <div className="flex items-center gap-1 font-label-md text-label-md shrink-0">
                      <Icon name="star" className="text-[14px] text-primary" filled />
                      <span>{r.rating.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingConcierge propertyName={property.displayTitle} />
    </>
  );
}
