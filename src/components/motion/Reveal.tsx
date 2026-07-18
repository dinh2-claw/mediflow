"use client";

import { useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import {
  gsap,
  useGSAP,
  prefersReducedMotion,
  EASE,
  DURATION,
  STAGGER,
} from "@/lib/motion";

type RevealProps<T extends ElementType> = {
  /** Element to render (default: div). Use "section" for anchor targets. */
  as?: T;
  /** CSS selector for the children to animate. Default: [data-reveal]. */
  selector?: string;
  /** Vertical travel in px. */
  y?: number;
  /** Stagger between targets, in seconds. */
  stagger?: number;
  /**
   * "scroll" (default): reveal as the block enters the viewport.
   * "load": reveal immediately on mount (hero above the fold).
   */
  mode?: "scroll" | "load";
  /** Extra delay before a "load" reveal starts. */
  delay?: number;
  /** ScrollTrigger start position. */
  start?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Reveals its `[data-reveal]` descendants with a small fade + upward drift.
 * Elements start hidden only when motion is allowed (set in a pre-paint
 * layout effect), so reduced-motion / no-JS users see everything immediately.
 */
export default function Reveal<T extends ElementType = "div">({
  as,
  selector = "[data-reveal]",
  y = 24,
  stagger = STAGGER,
  mode = "scroll",
  delay = 0,
  start = "top 82%",
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scope.current) return;
      const targets = gsap.utils.toArray<HTMLElement>(
        scope.current.querySelectorAll(selector),
      );
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: DURATION,
        ease: EASE,
        stagger,
        delay: mode === "load" ? delay : 0,
        scrollTrigger:
          mode === "scroll"
            ? { trigger: scope.current, start, once: true }
            : undefined,
      });
    },
    { scope },
  );

  return (
    <Tag ref={scope} {...rest}>
      {children}
    </Tag>
  );
}
