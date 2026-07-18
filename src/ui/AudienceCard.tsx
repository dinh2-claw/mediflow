import type { ReactNode } from "react";

export type AudienceCardProps = {
  /** Small glyph or icon shown in the tinted tile. */
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * A surface card describing one audience/role: a tinted icon tile, a title, and
 * a short line. Lifts slightly on hover.
 */
export default function AudienceCard({
  icon,
  title,
  children,
  className,
}: AudienceCardProps) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface px-[22px] py-[26px] transition-transform duration-200 hover:-translate-y-[3px] ${className ?? ""}`}
    >
      <div className="mb-[18px] grid h-10 w-10 place-items-center rounded-[11px] bg-bg-2 text-clay-deep">
        {icon}
      </div>
      <h3 className="text-[17px] tracking-[-0.01em]">{title}</h3>
      <p className="mt-[7px] text-[14px] text-ink-soft">{children}</p>
    </div>
  );
}
