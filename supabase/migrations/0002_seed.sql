-- Beach View Properties — seed data for all 6 properties (Section 6).
-- Mirrors lib/data.ts so the DB-backed path renders identical content.
-- Idempotent: re-running upserts properties and refreshes child rows.
--
-- Photos: hero_image_url left NULL here — Session 1 renders placeholder imagery
-- from lib/images.ts. TODO(pre-launch): populate real, re-hosted photo URLs.

insert into properties
  (slug, name, subtitle, community, description, guests, bedrooms, beds, baths,
   rating, review_count, is_guest_favorite, str_permit, airbnb_room_id, sort_order)
values
  ('unit-248-seaside-villas',
   'Beach Getaway Special! Cozy 1BR steps from beach',
   'Unit 248 — your beachside haven, bikes included',
   'Seaside Villas',
   'Ocean-view condo in the gated, beachfront Seaside Villas community — steps from the sand, Coligny Plaza, and Celebration Park. Includes complimentary bikes, community pool, and 1–2 parking passes.',
   4, 1, 4, 1, 4.96, 23, true, 'STR #040674', '1500898289351367407', 1),

  ('bikes-and-chairs-seaside-villas',
   'Beach Getaway Special! With Bikes & Chairs',
   'Ocean-view condo with bikes and beach chairs included',
   'Seaside Villas',
   'Ocean-view condo in a beachfront complex, steps from the sand and public pool. Beach chairs and bikes provided; minutes from Coligny Plaza, golf, jet skiing, and fishing.',
   4, 1, 2, 1, 5.0, 18, true, 'STR Permit #5310', '1601754149851919852', 2),

  ('seaside-villas-ii-direct-access',
   'Direct Beach & Pool Access – Seaside Villas II',
   'Newly furnished ocean-view condo with a private balcony',
   'Seaside Villas',
   'Newly furnished ocean-view condo on South Forest Beach in the gated Seaside Villas complex, with direct beach and pool access and a private balcony. Short walk to Coligny Plaza.',
   4, 1, 2, 1, 5.0, 8, true, 'STR Permit #040730', '1689173181958444712', 3),

  ('ocean-view-retreat-seaside-villas',
   'Ocean View Retreat! With Chairs & Bikes',
   'Ocean-view condo with central air, bikes, and chairs',
   'Seaside Villas',
   'Ocean-view condo in a beachfront complex with central air and two complimentary bikes. A 5–10 minute walk to Coligny''s shops and restaurants.',
   4, 1, 4, 1, 4.9, 20, true, null, '1626990849898070003', 4),

  ('sea-pines-bungalow',
   'Sea Pines Escape 2BR Bungalow Walk to Beach & Pool',
   'Charming 2-bedroom bungalow with lagoon-view porches',
   'Sea Pines',
   'Charming 2BR bungalow inside Sea Pines, a short private walk to beach and pool, near Harbour Town, South Beach Marina, and Lawton Stables. Two screened-in porches overlook a lagoon. NOTE: guests must purchase their own Sea Pines gate pass on arrival ($10/day or $20/week, cash or card).',
   6, 2, 3, 2, 4.5, 8, false, null, '1627016694947617075', 5),

  ('unit-292-seaside-villas',
   'Steps From the Beach! Close to Restaurants & Shops',
   'Unit 292 — personally hosted king suite steps from the sand',
   'Seaside Villas',
   'Personally owned, managed, and cleaned by the host. King bed, pull-out couch, kitchenette, walk-in shower, and a balcony steps from the beach. Bikes available on request.',
   4, 1, 2, 1, 5.0, 19, true, 'Unit 292', '1609796746527794552', 6)
on conflict (slug) do update set
  name = excluded.name,
  subtitle = excluded.subtitle,
  community = excluded.community,
  description = excluded.description,
  guests = excluded.guests,
  bedrooms = excluded.bedrooms,
  beds = excluded.beds,
  baths = excluded.baths,
  rating = excluded.rating,
  review_count = excluded.review_count,
  is_guest_favorite = excluded.is_guest_favorite,
  str_permit = excluded.str_permit,
  airbnb_room_id = excluded.airbnb_room_id,
  sort_order = excluded.sort_order;

-- Refresh child rows for a clean re-seed.
delete from property_amenities
  where property_id in (select id from properties);
delete from property_reviews
  where property_id in (select id from properties);

-- Amenities (the highlighted set per listing; full counts live in the app).
insert into property_amenities (property_id, label, icon_key)
select p.id, a.label, a.icon_key
from properties p
join (values
  ('unit-248-seaside-villas', 'Beach access', 'beach_access'),
  ('unit-248-seaside-villas', 'Wifi', 'wifi'),
  ('unit-248-seaside-villas', 'Free parking on premises', 'local_parking'),
  ('unit-248-seaside-villas', 'Pool', 'pool'),
  ('unit-248-seaside-villas', 'TV', 'tv'),
  ('unit-248-seaside-villas', 'Complimentary bikes', 'pedal_bike'),
  ('bikes-and-chairs-seaside-villas', 'Beach access', 'beach_access'),
  ('bikes-and-chairs-seaside-villas', 'Kitchen', 'countertops'),
  ('bikes-and-chairs-seaside-villas', 'Wifi', 'wifi'),
  ('bikes-and-chairs-seaside-villas', 'Free parking on premises', 'local_parking'),
  ('bikes-and-chairs-seaside-villas', 'Pool', 'pool'),
  ('bikes-and-chairs-seaside-villas', 'Beach chairs provided', 'chair'),
  ('seaside-villas-ii-direct-access', 'Shared beach access', 'beach_access'),
  ('seaside-villas-ii-direct-access', 'Kitchen', 'countertops'),
  ('seaside-villas-ii-direct-access', 'Wifi', 'wifi'),
  ('seaside-villas-ii-direct-access', 'Free parking on premises', 'local_parking'),
  ('seaside-villas-ii-direct-access', 'Outdoor pool (year-round)', 'pool'),
  ('seaside-villas-ii-direct-access', 'Private balcony', 'balcony'),
  ('ocean-view-retreat-seaside-villas', 'Beach access', 'beach_access'),
  ('ocean-view-retreat-seaside-villas', 'Kitchen', 'countertops'),
  ('ocean-view-retreat-seaside-villas', 'Wifi', 'wifi'),
  ('ocean-view-retreat-seaside-villas', 'Free parking on premises', 'local_parking'),
  ('ocean-view-retreat-seaside-villas', 'Pool', 'pool'),
  ('ocean-view-retreat-seaside-villas', 'Central air conditioning', 'ac_unit'),
  ('sea-pines-bungalow', 'Beach access', 'beach_access'),
  ('sea-pines-bungalow', 'Kitchen', 'countertops'),
  ('sea-pines-bungalow', 'Wifi', 'wifi'),
  ('sea-pines-bungalow', 'Free parking on premises', 'local_parking'),
  ('sea-pines-bungalow', 'Pool', 'pool'),
  ('sea-pines-bungalow', 'Two screened-in porches', 'deck'),
  ('unit-292-seaside-villas', 'Beach access', 'beach_access'),
  ('unit-292-seaside-villas', 'Kitchenette', 'countertops'),
  ('unit-292-seaside-villas', 'Wifi', 'wifi'),
  ('unit-292-seaside-villas', 'Free parking on premises', 'local_parking'),
  ('unit-292-seaside-villas', 'Pool', 'pool'),
  ('unit-292-seaside-villas', 'Walk-in shower', 'shower')
) as a(slug, label, icon_key) on a.slug = p.slug;
