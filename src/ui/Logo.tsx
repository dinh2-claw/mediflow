export type LogoProps = {
  /** Brand text shown next to the mark. */
  label?: string;
  href?: string;
  className?: string;
};

/**
 * Brand wordmark: a rounded clay tile holding an ECG/heartbeat glyph, followed
 * by the product name. Used in the nav and footer.
 */
export default function Logo({
  label = "MediFlow",
  href = "#",
  className,
}: LogoProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2.5 text-[20px] font-bold tracking-[-0.02em] text-ink ${className ?? ""}`}
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-clay text-white">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M4 13h4l2-6 4 12 2-6h4"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label}
    </a>
  );
}
