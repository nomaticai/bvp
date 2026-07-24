/**
 * Supabase client init.
 *
 * Session 1 does NOT connect a live database — property content is served from
 * `lib/data.ts` seed data. This client is scaffolded so a later session can
 * swap seed reads for live queries (and wire the iCal availability sync)
 * without restructuring anything.
 *
 * Env vars live in `.env.local` (see `.env.local.example`). The client is only
 * constructed when both values are present, so builds succeed without them.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Not configured yet — callers should fall back to seed data.
    return null;
  }
  if (!cached) {
    cached = createClient(url, anonKey);
  }
  return cached;
}
