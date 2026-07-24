import { clsx } from "@/lib/clsx";

/**
 * Thin wrapper over Material Symbols Outlined (loaded in app/layout).
 * `filled` toggles the FILL axis; `className` controls size/color via Tailwind.
 */
export function Icon({
  name,
  filled = false,
  className,
}: {
  name: string;
  filled?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={clsx("material-symbols-outlined", filled && "filled", className)}
    >
      {name}
    </span>
  );
}
