"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins once, on the client only.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/** True when the user has asked the OS to minimise motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Shared, restrained defaults so every animation feels like one system.
export const EASE = "power3.out";
export const DURATION = 0.7;
export const STAGGER = 0.08;

export { gsap, ScrollTrigger, useGSAP };
