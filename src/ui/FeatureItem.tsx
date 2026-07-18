import type { ReactNode } from "react";

export type FeatureItemProps = {
  /** Bolded lead phrase for the feature. */
  title: string;
  /** Remaining description shown after the title. */
  children: ReactNode;
  className?: string;
};

/**
 * A single checklist feature: a clay check tile, a bold lead phrase, and its
 * description. Stacks into a feature list.
 */
export default function FeatureItem({
  title,
  children,
  className,
}: FeatureItemProps) {
  return (
    <li className={`flex items-start gap-[13px] text-[16px] ${className ?? ""}`}>
      <span className="mt-px grid h-[26px] w-[26px] flex-none place-items-center rounded-lg bg-[oklch(0.94_0.04_60)] text-clay-deep">
        ✓
      </span>
      <span>
        <strong>{title}</strong>
        {children}
      </span>
    </li>
  );
}
