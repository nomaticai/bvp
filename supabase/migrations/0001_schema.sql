-- Beach View Properties — schema (Section 5 of the technical brief).
-- v1: property content + reviews + amenities + cached availability.
-- No guest accounts, no payments, no admin CMS.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- properties
-- ---------------------------------------------------------------------------
create table if not exists properties (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  subtitle text,                    -- e.g. "Unit 248 – Your Beachside Haven with Bikes Included!"
  community text not null,          -- "Seaside Villas" | "Sea Pines"
  description text not null,
  guests int not null,
  bedrooms int not null,
  beds int not null,
  baths numeric not null,
  rating numeric,
  review_count int,
  is_guest_favorite boolean default false,
  str_permit text,                  -- e.g. "STR #040674"
  airbnb_room_id text not null,     -- e.g. "1500898289351367407"
  airbnb_ical_url text,             -- private export URL, added once client supplies it
  hero_image_url text,
  sort_order int,
  created_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- property_photos
-- ---------------------------------------------------------------------------
create table if not exists property_photos (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete cascade,
  url text not null,
  alt_text text,
  sort_order int
);
create index if not exists property_photos_property_id_idx
  on property_photos (property_id);

-- ---------------------------------------------------------------------------
-- property_amenities
-- ---------------------------------------------------------------------------
create table if not exists property_amenities (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete cascade,
  label text not null,              -- "Beach access", "Free parking on premises", etc.
  icon_key text                     -- maps to a frontend icon set
);
create index if not exists property_amenities_property_id_idx
  on property_amenities (property_id);

-- ---------------------------------------------------------------------------
-- property_reviews
-- ---------------------------------------------------------------------------
create table if not exists property_reviews (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete cascade,
  reviewer_name text,
  rating int,
  body text,
  review_date date
);
create index if not exists property_reviews_property_id_idx
  on property_reviews (property_id);

-- ---------------------------------------------------------------------------
-- availability_blocks (populated by the iCal sync job; treat as replaceable)
-- ---------------------------------------------------------------------------
create table if not exists availability_blocks (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete cascade,
  start_date date not null,
  end_date date not null,
  source text default 'airbnb_ical',
  synced_at timestamptz default now()
);
create index if not exists availability_blocks_property_id_idx
  on availability_blocks (property_id);
create index if not exists availability_blocks_range_idx
  on availability_blocks (property_id, start_date, end_date);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- Public site reads everything anonymously; writes are service-role only
-- (the iCal sync job uses the service key and bypasses RLS).
-- ---------------------------------------------------------------------------
alter table properties          enable row level security;
alter table property_photos     enable row level security;
alter table property_amenities  enable row level security;
alter table property_reviews    enable row level security;
alter table availability_blocks enable row level security;

create policy "public read properties"
  on properties for select using (true);
create policy "public read property_photos"
  on property_photos for select using (true);
create policy "public read property_amenities"
  on property_amenities for select using (true);
create policy "public read property_reviews"
  on property_reviews for select using (true);
create policy "public read availability_blocks"
  on availability_blocks for select using (true);
