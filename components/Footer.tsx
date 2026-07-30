import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";
import { SITE } from "@/lib/config";

const explore = [
  { label: "About Our Portfolio", href: "/#residences" },
  { label: "Destinations", href: "/#residences" },
  { label: "Experiences", href: "/#why-direct" },
  { label: "Contact Us", href: "/#contact" },
];

const support = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Booking Policy", href: "#" },
  { label: "FAQ", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo-dark-bg.png"
              alt=""
              width={4500}
              height={4500}
              className="h-12 w-12 object-contain"
            />
            <span className="font-headline-md text-headline-md text-on-primary">
              {SITE.name}
            </span>
          </div>
          <p className="text-on-primary/70 font-body-md text-body-md max-w-xs mb-8">
            Providing elite vacation experiences on {SITE.location} since{" "}
            {SITE.hostSinceLabel}. Book direct with the owner — no service fees.
          </p>
          <div className="flex gap-4">
            <a
              className="text-on-primary/70 hover:text-secondary-container transition-all"
              href="#"
              aria-label="Facebook"
            >
              <Icon name="facebook" />
            </a>
            <a
              className="text-on-primary/70 hover:text-secondary-container transition-all"
              href="#"
              aria-label="Instagram"
            >
              <Icon name="photo_camera" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-on-primary font-label-md text-label-md uppercase tracking-wider mb-2">
            Explore
          </h4>
          {explore.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-on-primary/70 font-body-md text-body-md hover:text-secondary-container transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-on-primary font-label-md text-label-md uppercase tracking-wider mb-2">
            Support
          </h4>
          {support.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-on-primary/70 font-body-md text-body-md hover:text-secondary-container transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-on-primary/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
          <p className="text-on-primary/50 text-caption">
            © {new Date().getFullYear()} {SITE.name}. Coastal luxury redefined.
          </p>
        </div>
      </div>
    </footer>
  );
}
