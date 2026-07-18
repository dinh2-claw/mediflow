"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

type CountUpProps = {
  /** Final numeric value to count to. */
  value: number;
  /** Decimal places to render. */
  decimals?: number;
  /** Text before the number, e.g. "$". */
  prefix?: string;
  /** Text after the number, e.g. "%", "T", " min". */
  suffix?: string;
  duration?: number;
  className?: string;
};

function format(n: number, decimals: number, prefix: string, suffix: string) {
  return `${prefix}${n.toFixed(decimals)}${suffix}`;
}

/**
 * Counts a number from 0 to `value` when it scrolls into view. Renders the
 * final value immediately under reduced-motion so nothing is ever missing.
 */
export default function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const counter = { n: 0 };
      el.textContent = format(0, decimals, prefix, suffix);

      gsap.to(counter, {
        n: value,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(counter.n, decimals, prefix, suffix);
        },
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {format(value, decimals, prefix, suffix)}
    </span>
  );
}
