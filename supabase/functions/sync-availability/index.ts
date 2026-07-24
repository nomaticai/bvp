// Supabase Edge Function — sync-availability (Section 7).
//
// SCAFFOLD ONLY (Session 1). Deploy + schedule in a later session once the
// client supplies the 6 private Airbnb iCal export URLs.
//
// Intended behavior when implemented:
//   1. Load all properties with a non-null airbnb_ical_url (service-role client).
//   2. For each: fetch the .ics, parse VEVENT busy ranges (node-ical/ical.js).
//   3. In a transaction: delete existing availability_blocks for that property,
//      insert the freshly parsed ranges (source = 'airbnb_ical').
//   4. On failure for a property: log and SKIP it — keep last-known-good rows.
//      Never wipe a property's blocks to an empty ("all available") state.
//
// Schedule: every 60–120 minutes via Supabase scheduled functions or a Vercel
// Cron Job hitting this endpoint. Auth via a shared secret / service role.
//
// deno-lint-ignore-file
// @ts-nocheck  (Deno runtime types are provided at deploy time, not in this repo)

Deno.serve(async (_req: Request) => {
  return new Response(
    JSON.stringify({
      ok: false,
      message:
        "sync-availability is a Session 1 scaffold. Implement iCal fetch/parse " +
        "and delete+reinsert before scheduling. See lib/icalSync.ts.",
    }),
    { status: 501, headers: { "content-type": "application/json" } },
  );
});
