/**
 * Site-wide constants.
 *
 * CONTACT_PHONE (E.164) drives every WhatsApp deep link and Call CTA on the
 * site — change it here and it updates everywhere.
 */
export const CONTACT_PHONE = "+15136801128";

/** Human-friendly rendering of the phone number for display. */
export const CONTACT_PHONE_DISPLAY = "+1 (513) 680-1128";

export const SITE = {
  name: "Beach View Properties",
  shortName: "BVP",
  location: "Hilton Head Island, SC",
  tagline: "Your Hilton Head Island Beach Escape",
  description:
    "Boutique short-term rentals on Hilton Head Island. Book direct with the owner — no service fees, fast response.",
  // Aggregate trust stats (from host bio, Section 6).
  superhost: true,
  aggregateRating: 4.93,
  reviewCount: 96,
  hostSinceLabel: "2012",
} as const;

/** Host bio, shown across all property pages (Section 6). */
export const HOST = {
  name: "Kacey",
  isSuperhost: true,
  reviewCount: 96,
  rating: 4.93,
  monthsHosting: 10,
  location: "Hilton Head Island",
  responseRate: "100%",
  responseTime: "within an hour",
} as const;

/**
 * Builds a WhatsApp deep link with a URL-encoded prefill message.
 * `wa.me` requires the number without the leading "+" or any punctuation.
 */
export function whatsappLink(prefill: string): string {
  const digits = CONTACT_PHONE.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(prefill)}`;
}

/** Builds a `tel:` link from the configured contact number. */
export function telLink(): string {
  return `tel:${CONTACT_PHONE}`;
}

/** Default WhatsApp prefill for a given property (or the brand generally). */
export function whatsappPrefill(propertyName?: string): string {
  return propertyName
    ? `Hi! I'm interested in ${propertyName}. Is it available?`
    : `Hi! I'm interested in booking a stay with Beach View Properties. Can you help?`;
}
