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
import type { Property, PropertyPhoto } from "./types";
import { IMG } from "./images";

/** Real, locally-hosted listing photo served from public/images/<folder>/<file>. */
function local(folder: string, file: string, altText: string): PropertyPhoto {
  return { url: `/images/${folder}/${file}`, altText };
}

const propertiesSeed: Property[] = [
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
    sortOrder: 3,
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
    heroImage: local(
      "bikes-and-chairs-seaside-villas",
      "8a348339-bd47-4a3c-a39f-4b173bfea59d.jpeg",
      "Two complimentary tan beach-cruiser bikes parked by the lawn with the ocean beyond.",
    ),
    gallery: [
      local("bikes-and-chairs-seaside-villas", "8a348339-bd47-4a3c-a39f-4b173bfea59d.jpeg", "Two complimentary tan beach-cruiser bikes parked by the lawn with the ocean beyond."),
      local("bikes-and-chairs-seaside-villas", "6f43bd9a-8cd6-41f0-895f-85ae14955c4d.jpeg", "Living area with a navy sofa, coastal pillows, surfboard decor, and a full kitchenette."),
      local("bikes-and-chairs-seaside-villas", "cb66a94e-026d-4880-93d8-5208bd9ef009.jpeg", "King bedroom with a coral quilt, greenery wall art, and a farmhouse clock."),
      local("bikes-and-chairs-seaside-villas", "92d82b9f-056a-4fa9-a001-e5d61da8fb8f.jpeg", "View from the balcony over the palms and parking toward the ocean."),
      local("bikes-and-chairs-seaside-villas", "3c42af14-a900-4f68-b1d3-93bad04b19c2.jpeg", "Living room with a navy sofa, ceiling fan, and shuttered doors to the balcony."),
      local("bikes-and-chairs-seaside-villas", "df879980-7a37-4dc4-af9d-60aef3d4d5b9.jpeg", "Navy sofa with coastal accent pillows, a framed mirror, and surfboard decor."),
      local("bikes-and-chairs-seaside-villas", "c40d0d4d-cce5-410a-a201-a05c5eb3fe9f.jpeg", "Kitchenette with stainless fridge, a round dining table, and a wall-mounted TV."),
      local("bikes-and-chairs-seaside-villas", "72105d7a-c958-467a-8d22-4066b91bc8c5.jpeg", "Kitchenette with white cabinetry, tile backsplash, and a surfboard leaning by the sofa."),
      local("bikes-and-chairs-seaside-villas", "ca3e4b01-a39f-4d97-b959-f0e1cf3c4492.jpeg", "Dining table and leather recliner beside the balcony door."),
      local("bikes-and-chairs-seaside-villas", "a016b091-3625-4962-8e66-19b14bdb7d62.jpeg", "Cozy leather recliner with ottoman beside the dining table."),
      local("bikes-and-chairs-seaside-villas", "0a8297e9-f5c6-4f3c-883f-306d4c092d67.jpeg", "Shuttered sliding doors opening onto the private balcony."),
      local("bikes-and-chairs-seaside-villas", "d79546e1-9f96-4030-ad8e-c08046695c29.jpeg", "King bedroom with a coral quilt and coastal wall decor."),
      local("bikes-and-chairs-seaside-villas", "8a82eb54-421e-4b93-8b4a-e94e008a2674.jpeg", "Bedroom with a dresser, TV, and full-length mirror near the entry door."),
      local("bikes-and-chairs-seaside-villas", "fc06241a-f10d-419d-a8b7-1bfb0eb0421c.jpeg", "Bedroom with rustic barn-door accents and a dresser with a TV."),
      local("bikes-and-chairs-seaside-villas", "afbe3b1e-2a08-4e77-9c89-e5ba522a5e87.jpeg", "Sliding barn doors opening from the bedroom toward the living area."),
      local("bikes-and-chairs-seaside-villas", "e686c5e0-6ad4-41cd-89bb-9df2d6b7d579.jpeg", "Dining nook with a wall-mounted TV and a recliner."),
      local("bikes-and-chairs-seaside-villas", "5bfef4bf-aa52-46c4-946b-f9b522f31a1d.jpeg", "Decorative framed mirror reflecting the kitchen and living space."),
      local("bikes-and-chairs-seaside-villas", "7a4e95c6-3d53-4f0c-ae57-92776e3bcf63.jpeg", "Community picnic tables and grill area shaded by live oaks."),
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
    sortOrder: 4,
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
    heroImage: local(
      "seaside-villas-ii-direct-access",
      "8b08d0e5-54bc-4e32-82bd-12f1777d9cc5.jpeg",
      "Seaside Villas II building set among tall pines, with the beach boardwalk under a clear blue sky.",
    ),
    gallery: [
      local("seaside-villas-ii-direct-access", "8b08d0e5-54bc-4e32-82bd-12f1777d9cc5.jpeg", "Seaside Villas II building set among tall pines, with the beach boardwalk under a clear blue sky."),
      local("seaside-villas-ii-direct-access", "0af88002-db90-4144-a506-7dfde093dad9.jpeg", "Living room with a grey sofa, leather recliner, and shuttered doors to the private balcony."),
      local("seaside-villas-ii-direct-access", "31d7eac6-da73-477c-8203-647b0c2993f0.jpeg", "Newly furnished kitchen with dark cabinetry, stainless appliances, and a dining bar."),
      local("seaside-villas-ii-direct-access", "d7a52845-5ca7-4610-a25e-334fb961cc31.jpeg", "King bedroom with a black iron bed frame, palm-print art, and matching bedside lamps."),
      local("seaside-villas-ii-direct-access", "91258b54-f0a1-4b41-a927-03c1e4a3ce64.jpeg", "Renovated bathroom with a sliding glass shower and coastal starfish decor."),
      local("seaside-villas-ii-direct-access", "9de86b29-19d1-4922-90f9-233aff2ce3b9.jpeg", "Kitchen with dark cabinetry and stainless fridge beside the living-room sofa."),
      local("seaside-villas-ii-direct-access", "83cc7aff-8a18-436c-9d9c-e31ea4a04380.jpeg", "King bedroom with a full-length mirror and palm-print art near the entry door."),
      local("seaside-villas-ii-direct-access", "5c625058-c044-4678-9f48-36b9aa38f188.jpeg", "Dining bar with stools and a wall-mounted TV looking down the entry hallway."),
      local("seaside-villas-ii-direct-access", "fe854034-ad6b-4e14-8bdf-0c59d17e6e0e.jpeg", "Leather swivel recliner beside a high-top bar table and palm-print art."),
      local("seaside-villas-ii-direct-access", "47193a75-f18c-4cc6-9d7d-1387bc4dca44.jpeg", "Bathroom vanity with a marble top, black cabinetry, and a lighted mirror."),
      local("seaside-villas-ii-direct-access", "ca4c5d45-2c79-4e37-8cc1-58f4fc3092b3.jpeg", "Second view of the renovated bathroom with sliding shower and black vanity."),
      local("seaside-villas-ii-direct-access", "6f0e16ba-dc48-4c1c-9bde-e85c02c8aebb.jpeg", "Exterior staircase leading up through the villas toward the pool."),
      local("seaside-villas-ii-direct-access", "d6568450-288c-46c9-98e8-03f20c05056b.jpeg", "Ground-floor building elevator at Seaside Villas II."),
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
    sortOrder: 5,
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
    heroImage: local(
      "ocean-view-retreat-seaside-villas",
      "b3d28a2f-4f61-4818-94e1-bf34e322f5f4.jpeg",
      "Ocean view from the private balcony, framed by palms over the dunes and the Atlantic.",
    ),
    gallery: [
      local("ocean-view-retreat-seaside-villas", "b3d28a2f-4f61-4818-94e1-bf34e322f5f4.jpeg", "Ocean view from the private balcony, framed by palms over the dunes and the Atlantic."),
      local("ocean-view-retreat-seaside-villas", "991ed3ee-ca26-4dbf-b1d8-b6664d698f19.jpeg", "Bright open-plan living room and kitchen with a coastal patterned area rug."),
      local("ocean-view-retreat-seaside-villas", "2a29ae74-bf7f-4a71-92ef-bbb27fa48aec.jpeg", "Queen bedroom with a soft blue duvet, ceiling fan, and a crab accent pillow."),
      local("ocean-view-retreat-seaside-villas", "0feb7b38-94e1-4033-9d21-ad2d82e202d9.jpeg", "Two complimentary blue beach-cruiser bikes ready by the palms."),
      local("ocean-view-retreat-seaside-villas", "94e149d5-ab47-46c4-839b-41f2bbee6732.jpeg", "Aerial view of the beachfront complex, dunes, and the beach lined with umbrellas."),
      local("ocean-view-retreat-seaside-villas", "0e2ed310-65c2-42e6-bb11-754019b20cd6.jpeg", "Living room with a grey sofa, navy storage ottoman, and adjoining kitchenette."),
      local("ocean-view-retreat-seaside-villas", "6a8fcbb2-8f0c-4507-ba0d-d761cbc2ae83.jpeg", "Sitting area with two accent armchairs, a bookshelf, and a high-top dining table."),
      local("ocean-view-retreat-seaside-villas", "37701b7d-c3bb-4c62-8b72-6e30a2f601f8.jpeg", "Balcony with black rocking chairs overlooking the palms and grounds."),
      local("ocean-view-retreat-seaside-villas", "58cdfe70-845b-4002-98b4-960479743282.jpeg", "Resort-style community pool beside the villas."),
      local("ocean-view-retreat-seaside-villas", "791e0400-c991-469f-a86b-0f32285f30c7.jpeg", "Built-in bunk beds, ideal for children."),
      local("ocean-view-retreat-seaside-villas", "2fbb6719-e248-40db-bfd3-000f4e677e62.jpeg", "Bedroom view with a closet-nook TV and dresser."),
      local("ocean-view-retreat-seaside-villas", "d371e4f4-4741-4510-96f2-9400ded03577.jpeg", "Full bathroom with a coastal fish-print shower curtain and round mirror."),
      local("ocean-view-retreat-seaside-villas", "8208d930-3b78-47b0-af99-3eefc74bd145.jpeg", "Grassy lawn and boardwalk leading toward the beach."),
      local("ocean-view-retreat-seaside-villas", "2450f516-7f52-47ca-be2c-da91c5445c65.jpeg", "Interior corridor leading to the units."),
      local("ocean-view-retreat-seaside-villas", "f65b7384-58ae-4e50-88c5-ac0206155d61.jpeg", "Hallway leading past the bunk nook to the bedrooms."),
      local("ocean-view-retreat-seaside-villas", "db16244c-aea1-4ab2-847c-177c10cd47fe.jpeg", "Interior hallway with coastal decor."),
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
    sortOrder: 2,
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
    sortOrder: 6,
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
    heroImage: local(
      "unit-292-seaside-villas",
      "fb29d70c-4727-4c49-ba0a-de170308282e.jpeg",
      "Seaside Villas building exterior framed by palms, with the beach boardwalk under a clear blue sky.",
    ),
    gallery: [
      local("unit-292-seaside-villas", "fb29d70c-4727-4c49-ba0a-de170308282e.jpeg", "Seaside Villas building exterior framed by palms, with the beach boardwalk under a clear blue sky."),
      local("unit-292-seaside-villas", "f9f975bc-56bf-4206-83e1-b732a72572df.jpeg", "Open living area with a sofa, coffee table, and full kitchenette with black appliances."),
      local("unit-292-seaside-villas", "db0fe985-d675-4bce-b85e-401eb3bcbccc.jpeg", "Kitchen with a stainless range, microwave, and a coastal blue-tile 'Seaside' backsplash."),
      local("unit-292-seaside-villas", "c2e63dec-10fc-4766-9eee-e175593134ef.jpeg", "King bedroom with a coral shell-print quilt and coastal accent pillows."),
      local("unit-292-seaside-villas", "a7d6f879-0677-401a-800d-2485eddfbf0f.jpeg", "Boardwalk over the dunes and sea oats leading to the beach and ocean."),
      local("unit-292-seaside-villas", "0bc4bcc1-c39f-4224-961c-dc38b3b453eb.jpeg", "Community swimming pool in the sunny central courtyard."),
      local("unit-292-seaside-villas", "f09d4528-198c-42a2-8d27-047672b837c0.jpeg", "Private balcony with cushioned wicker chairs overlooking the grounds."),
      local("unit-292-seaside-villas", "222d968c-e088-4259-8a65-4335b926f3bf.jpeg", "Living room sofa with a blue crab accent pillow beneath a framed mirror."),
      local("unit-292-seaside-villas", "4c0113c9-67c3-4172-a32e-610008d9a829.jpeg", "Kitchen and dining nook with a wall-mounted TV and a rustic round table."),
      local("unit-292-seaside-villas", "c450c1e2-320e-4952-a120-6befa296eaf7.jpeg", "King bedroom with blackout curtains and coastal decor near the entry door."),
      local("unit-292-seaside-villas", "b5ebc101-50a6-4c59-b6f5-2d5524061f0e.jpeg", "Walk-in glass shower with a wood-look tile surround."),
      local("unit-292-seaside-villas", "7c618749-515a-4746-9a0f-e65e7c214135.jpeg", "Sandy path and boardwalk through the sea oats to the beach."),
      local("unit-292-seaside-villas", "4c6dd886-084c-40f0-b962-243d6bb1ce64.jpeg", "Galley kitchen looking toward the entry hallway."),
      local("unit-292-seaside-villas", "c7c78fe2-0e39-4fd1-ba35-774b04b3a35c.jpeg", "Dining table for two beside the kitchen and wall-mounted TV."),
      local("unit-292-seaside-villas", "9d0631bd-c206-486e-bc7d-d6b6a356c18f.jpeg", "Shaded picnic tables beneath live oaks in the community grounds."),
      local("unit-292-seaside-villas", "341ae9f0-d690-46b5-84b4-70e04724eda4.jpeg", "Community picnic and grill area among the trees."),
      local("unit-292-seaside-villas", "9b321777-9e0b-4b6b-ad75-9037f4b46e1d.jpeg", "Exterior staircase leading up through the villas."),
      local("unit-292-seaside-villas", "86c39696-5889-42fa-a6ce-8a9e884c1e18.jpeg", "Ground-floor building elevator."),
      local("unit-292-seaside-villas", "78520bf3-a461-40bf-b374-e404639074ff.jpeg", "Kitchen refrigerator and pantry area."),
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
    sortOrder: 1,
  },
];

/** Public listing order follows `sortOrder` (1 = first). */
export const properties: Property[] = [...propertiesSeed].sort(
  (a, b) => a.sortOrder - b.sortOrder,
);

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
