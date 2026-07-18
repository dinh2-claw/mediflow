import type { ReactNode } from "react";

export type EyebrowProps = {
  children: ReactNode;
  className?: string;
  /** Center the leading rule + text (used above centered headings). */
  center?: boolean;
};

/**
 * Small uppercase kicker with a short clay rule, sits above a section heading.
 * Override the colour via `className` (e.g. on a dark band).
 */
export default function Eyebrow({ children, className, center }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-[9px] text-[13px] font-semibold uppercase tracking-[0.14em] text-clay-deep ${
        center ? "justify-center" : ""
      } ${className ?? ""}`}
    >
      <span className="h-[1.5px] w-[22px] bg-clay" aria-hidden />
      {children}
    </span>
  );
}
