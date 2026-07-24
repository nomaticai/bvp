/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Airbnb CDN — real listing photos (per Section 7 of the brief).
      // TODO(pre-launch): migrate hot-linked Airbnb photos to Supabase Storage / own CDN.
      { protocol: "https", hostname: "a0.muscache.com" },
      // Stitch-generated demo imagery used as placeholders until real muscache
      // URLs are supplied. TODO(pre-launch): remove once real photos are in seed data.
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
