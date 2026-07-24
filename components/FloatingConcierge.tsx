import { Icon } from "./Icon";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { telLink, whatsappLink, whatsappPrefill } from "@/lib/config";

/**
 * Floating Call + WhatsApp buttons (bottom-right), matching the homepage
 * "concierge" aside. Present site-wide as the always-available contact path.
 */
export function FloatingConcierge({ propertyName }: { propertyName?: string }) {
  return (
    <aside className="fixed bottom-8 right-6 md:right-8 flex flex-col space-y-4 z-50">
      <a
        href={telLink()}
        aria-label="Call us"
        className="bg-secondary text-on-secondary rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 active:scale-95 flex items-center justify-center group relative"
      >
        <Icon name="call" />
        <span className="absolute right-full mr-4 bg-primary text-on-primary px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>
      <a
        href={whatsappLink(whatsappPrefill(propertyName))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        className="bg-whatsapp-green text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 active:scale-95 flex items-center justify-center group relative"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-primary text-on-primary px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
