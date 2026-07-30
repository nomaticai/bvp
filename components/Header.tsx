import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";
import { SITE } from "@/lib/config";

/**
 * Fixed, blurred top nav matching both Stitch screens.
 * `variant` swaps the link set: the homepage shows section anchors, property
 * pages show in-page section anchors (Overview / Amenities / Reviews / Location).
 */
export function Header({
  variant = "home",
}: {
  variant?: "home" | "property";
}) {
  const links =
    variant === "home"
      ? [
          { label: "Destinations", href: "/#residences" },
          { label: "Experiences", href: "/#why-direct" },
          { label: "Gallery", href: "/#residences" },
          { label: "About Us", href: "/#why-direct" },
        ]
      : [
          { label: "Overview", href: "#overview" },
          { label: "Amenities", href: "#amenities" },
          { label: "Reviews", href: "#reviews" },
          { label: "Location", href: "#location" },
        ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 shadow-card">
      <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link href="/" className="flex items-center" aria-label={SITE.name}>
          <Image
            src="/logo-light-bg.png"
            alt={SITE.name}
            width={3051}
            height={2259}
            priority
            className="h-14 w-auto"
          />
        </Link>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-on-surface-variant hover:text-secondary transition-colors duration-200 font-body-md text-body-md"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="/#residences"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-md text-label-md hover:bg-secondary transition-all active:scale-95 flex items-center gap-2"
        >
          <Icon name="event_available" className="text-[18px]" />
          <span className="hidden sm:inline">Check Availability</span>
        </a>
      </nav>
    </header>
  );
}
