"use client";

import { useEffect, useState } from "react";

/**
 * Fixed clay circle bottom-right that fades in after scrolling ~400px and
 * smooth-scrolls back to the top. Honours prefers-reduced-motion.
 */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={toTop}
      className={`fixed bottom-6 right-6 z-[60] grid h-12 w-12 place-items-center rounded-full border border-line bg-clay text-[20px] text-[oklch(0.99_0.01_80)] shadow-[0_10px_24px_-10px_oklch(0.4_0.05_50/0.5)] transition-all duration-200 ease-out hover:bg-clay-deep ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
