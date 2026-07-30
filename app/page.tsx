import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingConcierge } from "@/components/FloatingConcierge";
import { PropertyCard } from "@/components/PropertyCard";
import { Icon } from "@/components/Icon";
import { properties } from "@/lib/data";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/config";

const trustItems = [
  { icon: "verified", label: "Airbnb Superhost" },
  { icon: "star", label: `${SITE.aggregateRating} Guest Rating` },
  { icon: "reviews", label: `${SITE.reviewCount}+ Verified Reviews` },
  { icon: "security", label: "Book Direct with the Owner" },
];

const whyDirect = [
  {
    icon: "no_accounts",
    title: "No Service Fees",
    body: "Avoid the 15–20% service fees charged by major platforms. Book direct and save significantly on your stay.",
  },
  {
    icon: "chat",
    title: "Direct Communication",
    body: "Speak directly with the local Beach View Properties team. We know every property inside-out and answer within the hour.",
  },
  {
    icon: "local_activity",
    title: "Local Recommendations",
    body: "Get a curated island guide with our favorite hidden gems, from quiet beach spots to the best local seafood.",
  },
];

export default function HomePage() {
  const seaPines = properties.filter((p) => p.community === "Sea Pines");

  return (
    <>
      <Header variant="home" />
      <main>
        {/* Hero */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={IMG.heroSunset.url}
              alt={IMG.heroSunset.altText}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/10 to-surface" />
          </div>
          <div className="relative z-10 w-full max-w-container-max px-margin-mobile md:px-margin-desktop text-center">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary drop-shadow-lg mb-stack-md">
              Your Hilton Head Island
              <br />
              Beach Escape
            </h1>
            <p className="text-on-primary/90 text-body-lg max-w-2xl mx-auto mb-8 drop-shadow">
              Six boutique short-term rentals, steps from the sand. Book direct
              with the owner — no service fees, fast response.
            </p>

            {/* Landing page — single CTA into the property showcase (no search/booking engine). */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#residences"
                className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-label-md text-label-md hover:bg-secondary transition-all inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <Icon name="apartment" />
                Explore Our Properties
              </a>
              <a
                href="#why-direct"
                className="bg-surface/90 text-primary px-8 py-3.5 rounded-xl font-label-md text-label-md hover:bg-surface transition-all inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Why Book Direct
              </a>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-stack-md bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-wrap justify-center md:justify-between items-center gap-gutter">
            {trustItems.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <Icon name={t.icon} className="text-secondary text-3xl" filled />
                <span className="font-label-md text-label-md text-on-surface">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Property grid */}
        <section
          id="residences"
          className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-24"
        >
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Curated Coastal Residences
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Explore our six hand-picked oceanfront condos and bungalows on
              Hilton Head Island, each designed for the perfect island getaway.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {properties.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </section>

        {/* Two communities */}
        <section className="py-stack-lg bg-surface-container">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Two Communities, One Island
              </h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Beachfront resort living in Seaside Villas, or private seclusion
                in Sea Pines — choose the Hilton Head experience that fits you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <CommunityCard
                title="Seaside Villas Collection"
                blurb="Ocean-view condos in a gated, beachfront community — steps from the sand, pools, and the shops and dining of Coligny Plaza."
                imageUrl={IMG.seasideAerial.url}
                imageAlt={IMG.seasideAerial.altText}
                exploreHref="#residences"
              />
              <CommunityCard
                title="Sea Pines Bungalow"
                blurb="A charming 2-bedroom bungalow tucked into the maritime forest of Sea Pines, with lagoon-view porches near Harbour Town."
                imageUrl={IMG.seaPinesEstate.url}
                imageAlt={IMG.seaPinesEstate.altText}
                exploreHref={`/properties/${seaPines[0]?.slug ?? ""}`}
              />
            </div>
          </div>
        </section>

        {/* Why book direct */}
        <section
          id="why-direct"
          className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-24"
        >
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Why Book Direct with Us?
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyDirect.map((w) => (
              <div key={w.title} className="text-center">
                <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={w.icon} className="text-primary text-3xl" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">
                  {w.title}
                </h4>
                <p className="text-body-md text-on-surface-variant px-4">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="contact" className="py-stack-lg bg-primary">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <h2 className="font-headline-md text-headline-md text-on-primary mb-4">
                  What Our Guests Say
                </h2>
                <p className="text-on-primary-container text-body-lg">
                  Real stories from travelers who experienced the perfect beach
                  escape with us.
                </p>
              </div>
              <div className="md:w-2/3">
                <div className="glass-panel p-10 rounded-2xl">
                  <div className="flex text-secondary mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" filled />
                    ))}
                  </div>
                  <p className="text-on-surface italic text-body-lg mb-8 leading-relaxed">
                    &ldquo;The condo was exactly like the photos — maybe better.
                    Direct beach access, spotless, and the Beach View team
                    answered every question within minutes. The easiest booking
                    we&rsquo;ve ever made.&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary font-label-md">
                      A
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">
                        Amanda R.
                      </p>
                      <p className="text-caption text-on-surface-variant">
                        Stayed August 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="#residences"
                className="inline-block bg-on-primary text-primary px-10 py-4 rounded-xl font-headline-sm text-headline-sm hover:bg-secondary-container transition-all shadow-lg"
              >
                Ready to Escape? Explore Our Stays
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingConcierge />
    </>
  );
}

function CommunityCard({
  title,
  blurb,
  imageUrl,
  imageAlt,
  exploreHref,
}: {
  title: string;
  blurb: string;
  imageUrl: string;
  imageAlt: string;
  exploreHref: string;
}) {
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden group shadow-lg">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent flex flex-col justify-end p-10">
        <h3 className="font-headline-md text-headline-md text-white mb-2">
          {title}
        </h3>
        <p className="text-white mb-6 text-body-md max-w-md drop-shadow">
          {blurb}
        </p>
        <Link
          href={exploreHref}
          className="bg-on-primary text-primary px-8 py-3 rounded-xl font-label-md text-label-md self-start hover:bg-secondary-container transition-all"
        >
          Explore &amp; Book
        </Link>
      </div>
    </div>
  );
}
