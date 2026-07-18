export type StepCardProps = {
  /** Two-digit step number, e.g. "01". Rendered large in the serif face. */
  no: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * A numbered "how it works" step: a serif clay numeral, a title, and a short
 * description. Meant to sit in a divided horizontal row of steps.
 */
export default function StepCard({
  no,
  title,
  children,
  className,
}: StepCardProps) {
  return (
    <div className={className}>
      <div className="font-serif text-[40px] leading-none text-clay">{no}</div>
      <h3 className="mb-2 mt-4 text-[19px] tracking-[-0.01em]">{title}</h3>
      <p className="text-[15px] text-ink-soft">{children}</p>
    </div>
  );
}
