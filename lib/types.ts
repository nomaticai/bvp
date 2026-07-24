/**
 * Domain types mirroring the Supabase schema in `supabase/migrations`.
 * Kept in sync with Section 5 of the technical brief so the frontend can be
 * wired to live data later without reshaping components.
 */

export type Community = "Seaside Villas" | "Sea Pines";

export interface PropertyPhoto {
  url: string;
  altText: string;
  /** Placeholder demo image (Stitch) vs. a real listing photo. */
  isPlaceholder?: boolean;
}

export interface Amenity {
  label: string;
  /** Maps to a Material Symbols icon name (see components/Icon). */
  iconKey: string;
}

export interface BedGroup {
  /** e.g. "Bedroom 1", "Living room" */
  room: string;
  /** e.g. "1 King bed", "1 Sofa bed" */
  detail: string;
  iconKey: string;
}

export interface Review {
  reviewerName: string;
  rating: number;
  body: string;
  /** Human-readable date label, e.g. "November 2023". */
  dateLabel: string;
}

export interface RatingBreakdown {
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
}

export interface Property {
  slug: string;
  /** Airbnb listing title. */
  name: string;
  /** Short marketing subtitle. */
  subtitle: string;
  community: Community;
  location: string;
  description: string[];
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  rating: number | null;
  reviewCount: number | null;
  isGuestFavorite: boolean;
  /** e.g. "Top 5%" badge qualifier, when applicable. */
  favoriteQualifier?: string;
  strPermit?: string;
  airbnbRoomId: string;
  /** Populated later once the client supplies private iCal export URLs. */
  airbnbIcalUrl?: string | null;
  heroImage: PropertyPhoto;
  gallery: PropertyPhoto[];
  bedGroups: BedGroup[];
  amenities: Amenity[];
  amenityCount: number;
  reviews: Review[];
  ratingBreakdown: RatingBreakdown;
  highlights: { iconKey: string; title: string; subtitle: string }[];
  locationBlurb: string;
  /**
   * Prominent guest-facing notice shown above the fold on the property page
   * (e.g. the Sea Pines gate-pass requirement). Not fine print.
   */
  importantNotice?: string;
  /** Placeholder nightly rate — TODO: replace with real rates from client. */
  placeholderNightlyRate: number;
  sortOrder: number;
}
