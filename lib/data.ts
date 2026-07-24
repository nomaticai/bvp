/**
 * Seed content for all 6 properties (Section 6 of the technical brief).
 *
 * This is real content pulled from the live Airbnb listings — names, ratings,
 * amenities, descriptions, host bio. It is the single source Session 1 renders
 * from. A later session can move this into Supabase and read it live; the
 * component tree is shaped to match `lib/types.ts` so nothing needs rewriting.
 *
 * Photos are Stitch placeholders (see lib/images.ts) — TODO: swap for real
 * muscache photos before launch.
 */
import type { Property } from "./types";
import { IMG } from "./images";

export const properties: Property[] = [
  {
    slug: "unit-248-seaside-villas",
    name: "Beach Getaway Special! Cozy 1BR steps from beach",
    subtitle: "Unit 248 — your beachside haven, bikes included",
    community: "Seaside Villas",
    location: "Seaside Villas, Hilton Head Island, SC",
    description: [
      "Unit 248 is an ocean-view condo in the gated, beachfront Seaside Villas community — just steps from the sand, Coligny Plaza, and Celebration Park. Wake up to the sound of the surf and spend your days walking to the island's best shops, dining, and entertainment.",
      "Your stay includes complimentary bikes, access to the community pool, and 1–2 parking passes. It's the effortless island basecamp for couples and small families who want the beach at their doorstep without the resort price tag.",
    ],
    guests: 4,
    bedrooms: 1,
    beds: 4,
    baths: 1,
    rating: 4.96,
    reviewCount: 23,
    isGuestFavorite: true,
    strPermit: "STR #040674",
    airbnbRoomId: "1500898289351367407",
    airbnbIcalUrl: null,
    heroImage: IMG.sunsetPoolVilla,
    gallery: [
      IMG.sunsetPoolVilla,
      IMG.livingRoomOcean,
      IMG.kitchenLight,
      IMG.bedroomDrift,
      IMG.balconyDusk,
    ],
    bedGroups: [
      { room: "Bedroom 1", detail: "1 Queen bed · 1 Bunk bed", iconKey: "king_bed" },
      { room: "Living room", detail: "1 Sofa bed", iconKey: "living" },
    ],
    amenities: [
      { label: "Beach access", iconKey: "beach_access" },
      { label: "Wifi", iconKey: "wifi" },
      { label: "Free parking on premises", iconKey: "local_parking" },
      { label: "Pool", iconKey: "pool" },
      { label: "TV", iconKey: "tv" },
      { label: "Complimentary bikes", iconKey: "pedal_bike" },
    ],
    amenityCount: 48,
    reviews: [
      {
        reviewerName: "Amanda",
        rating: 5,
        body: "\"The location is unbeatable — we walked to the beach in under two minutes and to Coligny Plaza for dinner. The bikes were a fun bonus.\"",
        dateLabel: "August 2024",
      },
      {
        reviewerName: "David",
        rating: 5,
        body: "\"Clean, cozy, and exactly as pictured. Kacey was quick to answer every question. We'd book Unit 248 again in a heartbeat.\"",
        dateLabel: "July 2024",
      },
      {
        reviewerName: "Priya",
        rating: 5,
        body: "\"Perfect little beach getaway. The pool was great for the kids and parking was easy with the passes provided.\"",
        dateLabel: "June 2024",
      },
    ],
    ratingBreakdown: { cleanliness: 5.0, accuracy: 4.9, communication: 5.0, location: 5.0 },
    highlights: [
      { iconKey: "beach_access", title: "Steps from beach", subtitle: "Ocean-view, gated community." },
      { iconKey: "pedal_bike", title: "Bikes included", subtitle: "Explore the island on two wheels." },
      { iconKey: "workspace_premium", title: "Guest Favorite", subtitle: "4.96 across 23 reviews." },
    ],
    locationBlurb:
      "Set inside the gated Seaside Villas community on South Forest Beach, you're steps from the sand and a short stroll from Coligny Plaza's dining and shopping.",
    placeholderNightlyRate: 285,
    sortOrder: 1,
  },
  {
    slug: "bikes-and-chairs-seaside-villas",
    name: "Beach Getaway Special! With Bikes & Chairs",
    subtitle: "Ocean-view condo with bikes and beach chairs included",
    community: "Seaside Villas",
    location: "Seaside Villas, Hilton Head Island, SC",
    description: [
      "An ocean-view condo in a beachfront complex, steps from the sand and the public pool. Beach chairs and bikes are provided, so you can head straight to the water or explore the island the moment you arrive.",
      "You're minutes from Coligny Plaza and close to golf, jet skiing, and fishing — everything that makes Hilton Head a favorite. It's a relaxed, well-equipped base for a classic beach vacation.",
    ],
    guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    rating: 5.0,
    reviewCount: 18,
    isGuestFavorite: true,
    strPermit: "STR Permit #5310",
    airbnbRoomId: "1601754149851919852",
    airbnbIcalUrl: null,
    heroImage: IMG.kitchenNavy,
    gallery: [
      IMG.kitchenNavy,
      IMG.livingRoomOcean,
      IMG.bedroomKing,
      IMG.balconyDusk,
      IMG.sunsetPoolVilla,
    ],
    bedGroups: [
      { room: "Bedroom 1", detail: "1 Queen bed", iconKey: "king_bed" },
      { room: "Living room", detail: "1 Sofa bed", iconKey: "living" },
    ],
    amenities: [
      { label: "Beach access", iconKey: "beach_access" },
      { label: "Kitchen", iconKey: "countertops" },
      { label: "Wifi", iconKey: "wifi" },
      { label: "Free parking on premises", iconKey: "local_parking" },
      { label: "Pool", iconKey: "pool" },
      { label: "Beach chairs provided", iconKey: "chair" },
    ],
    amenityCount: 44,
    reviews: [
      {
        reviewerName: "Rachel",
        rating: 5,
        body: "\"The bikes and beach chairs made everything so easy — we didn't have to rent a thing. Spotless condo, wonderful stay.\"",
        dateLabel: "September 2024",
      },
      {
        reviewerName: "Tom",
        rating: 5,
        body: "\"Five stars all around. Great ocean views, super close to the pool and beach, and Kacey responded within minutes.\"",
        dateLabel: "July 2024",
      },
      {
        reviewerName: "Nina",
        rating: 5,
        body: "\"Loved being able to bike to Coligny for dinner. The place was exactly what we hoped for.\"",
        dateLabel: "June 2024",
      },
    ],
    ratingBreakdown: { cleanliness: 5.0, accuracy: 5.0, communication: 5.0, location: 5.0 },
    highlights: [
      { iconKey: "beach_access", title: "Steps from beach", subtitle: "Beachfront complex with pool." },
      { iconKey: "chair", title: "Bikes & chairs", subtitle: "Everything for the beach, included." },
      { iconKey: "workspace_premium", title: "Guest Favorite", subtitle: "Perfect 5.0 across 18 reviews." },
    ],
    locationBlurb:
      "In a beachfront Seaside Villas complex steps from the sand and public pool, close to Coligny Plaza, golf, and watersports.",
    placeholderNightlyRate: 295,
    sortOrder: 2,
  },
  {
    slug: "seaside-villas-ii-direct-access",
    name: "Direct Beach & Pool Access – Seaside Villas II",
    subtitle: "Newly furnished ocean-view condo with a private balcony",
    community: "Seaside Villas",
    location: "Seaside Villas, Hilton Head Island, SC",
    description: [
      "A newly furnished ocean-view condo on South Forest Beach, inside the gated Seaside Villas complex. Step out to direct beach and pool access, or take in the water from your private balcony with ocean views.",
      "It's a short, easy walk to Coligny Plaza, making this a polished, low-effort retreat for guests who want the beach and the island's best amenities within reach.",
    ],
    guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    rating: 5.0,
    reviewCount: 8,
    isGuestFavorite: true,
    favoriteQualifier: "Top 5%",
    strPermit: "STR Permit #040730",
    airbnbRoomId: "1689173181958444712",
    airbnbIcalUrl: null,
    heroImage: IMG.livingRoomOcean,
    gallery: [
      IMG.livingRoomOcean,
      IMG.bedroomKing,
      IMG.kitchenNavy,
      IMG.balconyDusk,
      IMG.sunsetPoolVilla,
    ],
    bedGroups: [
      { room: "Bedroom 1", detail: "1 King bed", iconKey: "king_bed" },
      { room: "Living room", detail: "1 Sofa bed", iconKey: "living" },
    ],
    amenities: [
      { label: "Shared beach access", iconKey: "beach_access" },
      { label: "Kitchen", iconKey: "countertops" },
      { label: "Wifi", iconKey: "wifi" },
      { label: "Free parking on premises", iconKey: "local_parking" },
      { label: "Outdoor pool (year-round)", iconKey: "pool" },
      { label: "Private balcony", iconKey: "balcony" },
    ],
    amenityCount: 41,
    reviews: [
      {
        reviewerName: "Caroline",
        rating: 5,
        body: "\"Brand-new furnishings and a balcony with real ocean views. Direct pool and beach access made it feel like a private resort.\"",
        dateLabel: "August 2024",
      },
      {
        reviewerName: "Mark",
        rating: 5,
        body: "\"Immaculate and beautifully updated. The king bed was incredibly comfortable and the location could not be better.\"",
        dateLabel: "July 2024",
      },
      {
        reviewerName: "Sofia",
        rating: 5,
        body: "\"One of the nicest condos we've stayed in on Hilton Head. Quiet, gated, and steps from everything.\"",
        dateLabel: "May 2024",
      },
    ],
    ratingBreakdown: { cleanliness: 5.0, accuracy: 5.0, communication: 5.0, location: 5.0 },
    highlights: [
      { iconKey: "military_tech", title: "Top 5% of homes", subtitle: "Highly rated Guest Favorite." },
      { iconKey: "pool", title: "Direct pool access", subtitle: "Year-round outdoor pool." },
      { iconKey: "balcony", title: "Private balcony", subtitle: "Ocean views from your own space." },
    ],
    locationBlurb:
      "On South Forest Beach inside the gated Seaside Villas II complex, with direct beach and pool access and a short walk to Coligny Plaza.",
    placeholderNightlyRate: 320,
    sortOrder: 3,
  },
  {
    slug: "ocean-view-retreat-seaside-villas",
    name: "Ocean View Retreat! With Chairs & Bikes",
    subtitle: "Ocean-view condo with central air, bikes, and chairs",
    community: "Seaside Villas",
    location: "Seaside Villas, Hilton Head Island, SC",
    description: [
      "An ocean-view condo in a beachfront complex, kept cool with central air and stocked with two complimentary bikes for exploring the island. It's a comfortable, breezy retreat with the water just outside.",
      "A 5–10 minute walk brings you to Coligny's shops and restaurants, so you get the quiet of the beach with the buzz of the plaza close at hand.",
    ],
    guests: 4,
    bedrooms: 1,
    beds: 4,
    baths: 1,
    rating: 4.9,
    reviewCount: 20,
    isGuestFavorite: true,
    airbnbRoomId: "1626990849898070003",
    airbnbIcalUrl: null,
    heroImage: IMG.bedroomDrift,
    gallery: [
      IMG.bedroomDrift,
      IMG.livingRoomOcean,
      IMG.kitchenLight,
      IMG.loungeNight,
      IMG.balconyDusk,
    ],
    bedGroups: [
      { room: "Bedroom 1", detail: "1 Queen bed · 1 Bunk bed", iconKey: "king_bed" },
      { room: "Living room", detail: "1 Sofa bed", iconKey: "living" },
    ],
    amenities: [
      { label: "Beach access", iconKey: "beach_access" },
      { label: "Kitchen", iconKey: "countertops" },
      { label: "Wifi", iconKey: "wifi" },
      { label: "Free parking on premises", iconKey: "local_parking" },
      { label: "Pool", iconKey: "pool" },
      { label: "Central air conditioning", iconKey: "ac_unit" },
    ],
    amenityCount: 45,
    reviews: [
      {
        reviewerName: "Greg",
        rating: 5,
        body: "\"Loved the ocean views and the easy walk to Coligny. The bikes were perfect for morning rides along the beach path.\"",
        dateLabel: "September 2024",
      },
      {
        reviewerName: "Hannah",
        rating: 5,
        body: "\"Comfortable, cool, and close to everything. Great for our family — the kids slept great in the bunk.\"",
        dateLabel: "August 2024",
      },
      {
        reviewerName: "Luis",
        rating: 4,
        body: "\"Solid ocean-view condo with a great location. Central AC was a lifesaver in July.\"",
        dateLabel: "July 2024",
      },
    ],
    ratingBreakdown: { cleanliness: 4.9, accuracy: 4.9, communication: 5.0, location: 4.9 },
    highlights: [
      { iconKey: "beach_access", title: "Ocean views", subtitle: "Beachfront complex retreat." },
      { iconKey: "pedal_bike", title: "Bikes & chairs", subtitle: "Two bikes included for your stay." },
      { iconKey: "ac_unit", title: "Central air", subtitle: "Cool and comfortable all summer." },
    ],
    locationBlurb:
      "In a beachfront Seaside Villas complex with ocean views, a 5–10 minute walk from Coligny Plaza's shops and restaurants.",
    placeholderNightlyRate: 275,
    sortOrder: 4,
  },
  {
    slug: "sea-pines-bungalow",
    name: "Sea Pines Escape 2BR Bungalow Walk to Beach & Pool",
    subtitle: "Charming 2-bedroom bungalow with lagoon-view porches",
    community: "Sea Pines",
    location: "Sea Pines, Hilton Head Island, SC",
    description: [
      "A charming two-bedroom bungalow tucked inside Sea Pines, with a short private walk to the beach and pool. Two screened-in porches overlook a tranquil lagoon — the perfect spot for morning coffee or an evening breeze.",
      "You're close to Harbour Town, South Beach Marina, and Lawton Stables, with room for up to six guests. It's the standout of the collection for travelers who want more space and Sea Pines' famous seclusion.",
    ],
    guests: 6,
    bedrooms: 2,
    beds: 3,
    baths: 2,
    rating: 4.5,
    reviewCount: 8,
    isGuestFavorite: false,
    airbnbRoomId: "1627016694947617075",
    airbnbIcalUrl: null,
    heroImage: IMG.seaPinesEstate,
    gallery: [
      IMG.seaPinesEstate,
      IMG.livingRoomVaulted,
      IMG.kitchenLight,
      IMG.bedroomDrift,
      IMG.bathroomSpa,
    ],
    bedGroups: [
      { room: "Bedroom 1", detail: "1 Queen bed", iconKey: "king_bed" },
      { room: "Bedroom 2", detail: "1 Queen bed", iconKey: "king_bed" },
      { room: "Living room", detail: "1 Sofa bed", iconKey: "living" },
    ],
    amenities: [
      { label: "Beach access", iconKey: "beach_access" },
      { label: "Kitchen", iconKey: "countertops" },
      { label: "Wifi", iconKey: "wifi" },
      { label: "Free parking on premises", iconKey: "local_parking" },
      { label: "Pool", iconKey: "pool" },
      { label: "Two screened-in porches", iconKey: "deck" },
    ],
    amenityCount: 45,
    importantNotice:
      "Sea Pines gate pass required: guests must purchase their own pass on arrival — $10/day or $20/week, payable by cash or card at the gate. This is separate from your booking.",
    reviews: [
      {
        reviewerName: "Beth",
        rating: 5,
        body: "\"The screened porches over the lagoon were our favorite spot. So peaceful, and just a short walk to the beach and pool.\"",
        dateLabel: "August 2024",
      },
      {
        reviewerName: "Carlos",
        rating: 4,
        body: "\"Great space for our family of six and a lovely quiet setting in Sea Pines. Note you'll need to buy a gate pass on arrival.\"",
        dateLabel: "July 2024",
      },
      {
        reviewerName: "Megan",
        rating: 5,
        body: "\"Charming bungalow close to Harbour Town. Loved the extra room and the two bathrooms made mornings easy.\"",
        dateLabel: "June 2024",
      },
    ],
    ratingBreakdown: { cleanliness: 4.6, accuracy: 4.5, communication: 4.8, location: 4.6 },
    highlights: [
      { iconKey: "cottage", title: "Standout 2BR", subtitle: "More space, sleeps up to 6." },
      { iconKey: "deck", title: "Lagoon-view porches", subtitle: "Two screened-in porches." },
      { iconKey: "forest", title: "Sea Pines seclusion", subtitle: "Near Harbour Town & the marina." },
    ],
    locationBlurb:
      "Tucked inside Sea Pines with a short private walk to the beach and pool, near Harbour Town, South Beach Marina, and Lawton Stables.",
    placeholderNightlyRate: 450,
    sortOrder: 5,
  },
  {
    slug: "unit-292-seaside-villas",
    name: "Steps From the Beach! Close to Restaurants & Shops",
    subtitle: "Unit 292 — personally hosted king suite steps from the sand",
    community: "Seaside Villas",
    location: "Seaside Villas, Hilton Head Island, SC",
    description: [
      "Unit 292 is personally owned, managed, and cleaned by your host — a king suite with a pull-out couch, kitchenette, and walk-in shower. The balcony sits just steps from the beach, so the ocean is always close.",
      "You're within easy reach of restaurants and shops, and bikes are available on request. It's a lovingly maintained, hands-on hosted stay for guests who appreciate the personal touch.",
    ],
    guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    rating: 5.0,
    reviewCount: 19,
    isGuestFavorite: true,
    favoriteQualifier: "Top 5%",
    strPermit: "Unit 292",
    airbnbRoomId: "1609796746527794552",
    airbnbIcalUrl: null,
    heroImage: IMG.balconyDusk,
    gallery: [
      IMG.balconyDusk,
      IMG.bedroomKing,
      IMG.kitchenNavy,
      IMG.bathroomSpa,
      IMG.sunsetPoolVilla,
    ],
    bedGroups: [
      { room: "Bedroom 1", detail: "1 King bed", iconKey: "king_bed" },
      { room: "Living room", detail: "1 Sofa bed (pull-out couch)", iconKey: "living" },
    ],
    amenities: [
      { label: "Beach access", iconKey: "beach_access" },
      { label: "Kitchenette", iconKey: "countertops" },
      { label: "Wifi", iconKey: "wifi" },
      { label: "Free parking on premises", iconKey: "local_parking" },
      { label: "Pool", iconKey: "pool" },
      { label: "Walk-in shower", iconKey: "shower" },
    ],
    amenityCount: 33,
    reviews: [
      {
        reviewerName: "Jennifer",
        rating: 5,
        body: "\"You can tell the host takes personal care of this place. Spotless, comfortable king bed, and the balcony is genuinely steps from the beach.\"",
        dateLabel: "September 2024",
      },
      {
        reviewerName: "Chris",
        rating: 5,
        body: "\"Kacey was fantastic — responded instantly and even arranged bikes for us. The location is as close to the sand as it gets.\"",
        dateLabel: "August 2024",
      },
      {
        reviewerName: "Dana",
        rating: 5,
        body: "\"Loved the walk-in shower and the kitchenette. Everything was thoughtfully stocked. Highly recommend Unit 292.\"",
        dateLabel: "July 2024",
      },
    ],
    ratingBreakdown: { cleanliness: 5.0, accuracy: 5.0, communication: 5.0, location: 5.0 },
    highlights: [
      { iconKey: "military_tech", title: "Top 5% of homes", subtitle: "Highly rated Guest Favorite." },
      { iconKey: "verified_user", title: "Personally hosted", subtitle: "Owned, managed & cleaned by Kacey." },
      { iconKey: "beach_access", title: "Steps from beach", subtitle: "Balcony feet from the sand." },
    ],
    locationBlurb:
      "In the Seaside Villas complex with a balcony steps from the beach, close to restaurants and shops, with bikes available on request.",
    placeholderNightlyRate: 310,
    sortOrder: 6,
  },
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return properties.map((p) => p.slug);
}

/** Properties other than the given slug, for "You might also like". */
export function getRelatedProperties(slug: string, limit = 3): Property[] {
  return properties.filter((p) => p.slug !== slug).slice(0, limit);
}
