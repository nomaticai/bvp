import Image from "next/image";
import { Icon } from "./Icon";
import type { PropertyPhoto } from "@/lib/types";

/**
 * 5-image mosaic (1 large + 4 small) matching the property page.
 * Falls back gracefully if fewer than 5 photos are supplied.
 */
export function PropertyGallery({
  photos,
  totalCount,
}: {
  photos: PropertyPhoto[];
  totalCount?: number;
}) {
  const [hero, ...rest] = photos;
  const small = rest.slice(0, 4);
  const count = totalCount ?? photos.length;

  const roundings = [
    "", // top-left small
    "md:rounded-tr-2xl", // top-right small
    "", // bottom-left small
    "md:rounded-br-2xl", // bottom-right small
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[300px] md:h-[560px] relative mb-stack-md">
      <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl md:rounded-l-2xl md:rounded-r-none">
        {hero && (
          <Image
            src={hero.url}
            alt={hero.altText}
            width={1200}
            height={1120}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        )}
      </div>
      {small.map((photo, i) => (
        <div
          key={i}
          className={`hidden md:block overflow-hidden ${roundings[i] ?? ""}`}
        >
          <Image
            src={photo.url}
            alt={photo.altText}
            width={600}
            height={560}
            sizes="25vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}
      <button className="absolute bottom-6 right-6 bg-white border border-outline-variant px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container shadow-md transition-colors">
        <Icon name="grid_view" className="text-[18px]" />
        View all {count} photos
      </button>
    </section>
  );
}
