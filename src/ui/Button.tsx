import type { ComponentPropsWithoutRef } from "react";

export type ButtonProps = {
  /** Visual style. `primary` is the clay pill; `ghost` is the outlined pill. */
  variant?: "primary" | "ghost";
  className?: string;
} & ComponentPropsWithoutRef<"a">;

const base =
  "inline-flex items-center gap-2.5 rounded-full border-[1.5px] px-[22px] py-[13px] text-[15px] font-semibold transition-all duration-200 ease-out cursor-pointer";

const variants = {
  primary:
    "border-transparent bg-clay text-[oklch(0.99_0.01_80)] hover:bg-clay-deep hover:-translate-y-px",
  ghost: "border-line bg-transparent text-ink hover:border-ink",
} as const;

/**
 * Pill-shaped call-to-action link. The `primary` clay fill is the page's main
 * action; `ghost` is the quieter secondary. Renders an `<a>` — pass `href`.
 */
export default function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className ?? ""}`} {...rest}>
      {children}
    </a>
  );
}
