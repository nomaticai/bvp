import { Icon } from "./Icon";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { telLink, whatsappLink, whatsappPrefill } from "@/lib/config";

/**
 * Primary conversion CTAs (Section 8): WhatsApp deep link + Call.
 * No "Reserve"/payment anywhere — direct contact only.
 *
 * `propertyName` personalizes the WhatsApp prefill message.
 */
export function ContactCTA({
  propertyName,
  showMicrocopy = true,
}: {
  propertyName?: string;
  showMicrocopy?: boolean;
}) {
  return (
    <div className="space-y-3">
      <a
        href={whatsappLink(whatsappPrefill(propertyName))}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-whatsapp-green text-white py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
      >
        <WhatsAppIcon className="w-5 h-5" />
        Message on WhatsApp
      </a>
      <a
        href={telLink()}
        className="w-full border-2 border-primary text-primary py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container transition-all active:scale-[0.98]"
      >
        <Icon name="call" />
        Call Now
      </a>
      {showMicrocopy && (
        <p className="text-caption text-on-surface-variant text-center pt-3">
          Direct booking · No service fees · Fast response
        </p>
      )}
    </div>
  );
}
