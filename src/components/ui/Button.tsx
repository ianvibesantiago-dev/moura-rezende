import type { ComponentProps } from "react";

// Espelha o componente "Button" do Figma (Type = Primary | Gold | Outline).
type Variant = "primary" | "gold" | "outline";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-paper hover:bg-forest-deep",
  gold: "bg-gold text-ink hover:bg-paper",
  outline: "border border-forest text-ink hover:bg-forest hover:text-paper",
};

type ButtonProps = ComponentProps<"a"> & { variant?: Variant; arrow?: boolean };

export function Button({ variant = "primary", arrow = true, className = "", children, ...props }: ButtonProps) {
  return (
    <a className={`label group inline-flex items-center gap-3 rounded-[2px] px-8 py-4 transition-colors duration-300 ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
    </a>
  );
}
