export type StatItemProps = {
  /** The headline figure, e.g. "98.6%" or "9 min". Rendered in the serif face. */
  value: string;
  /** Caption beneath the figure. */
  label: string;
  className?: string;
};

/**
 * A single serif statistic with a muted caption — used in hero meta rows and
 * impact bands.
 */
export default function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div className={className}>
      <div className="font-serif text-[34px] leading-none">{value}</div>
      <div className="mt-1 text-[13px] text-ink-soft">{label}</div>
    </div>
  );
}
