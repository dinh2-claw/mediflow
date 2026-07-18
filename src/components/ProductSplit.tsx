import Eyebrow from "./Eyebrow";
import Reveal from "./motion/Reveal";

const FEATURES = [
  {
    strong: "OCR that understands stickers",
    rest: " — handwriting, smudges and angled scans included.",
  },
  {
    strong: "Live database sync",
    rest: " — patient, provider and item numbers reconciled automatically.",
  },
  {
    strong: "Medicare-aware",
    rest: " — eligibility and item checks happen before submission, not after.",
  },
  {
    strong: "Audit-ready trail",
    rest: " — every agent decision is logged and reversible.",
  },
];

export default function ProductSplit() {
  return (
    <Reveal as="section" id="product" className="bg-bg-2 py-24">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="grid grid-cols-2 items-center gap-[60px] max-[860px]:grid-cols-1 max-[860px]:gap-8">
          <div>
            <div data-reveal>
              <Eyebrow>Meet BillingFlow</Eyebrow>
            </div>
            <h2
              data-reveal
              className="mt-4 font-serif text-[clamp(34px,4.4vw,52px)] font-normal leading-[1.04] tracking-[-0.01em]"
            >
              The billing teammate that never fat-fingers a code.
            </h2>
            <p data-reveal className="mt-4 text-[17px] text-ink-soft">
              Our first agent reads the patient sticker, fills the claim,
              reconciles it against your databases, and clears it with Medicare —
              so your front desk stops chasing rejections.
            </p>
            <ul className="mt-[26px] flex flex-col gap-4">
              {FEATURES.map((f) => (
                <li
                  key={f.strong}
                  data-reveal
                  className="flex items-start gap-[13px] text-[16px]"
                >
                  <span className="mt-px grid h-[26px] w-[26px] flex-none place-items-center rounded-lg bg-[oklch(0.94_0.04_60)] text-clay-deep">
                    ✓
                  </span>
                  <span>
                    <strong>{f.strong}</strong>
                    {f.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl border border-line [background:repeating-linear-gradient(135deg,var(--color-bg-2)_0_12px,var(--color-bg)_12px_24px)]">
              <span className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[12px] text-ink-soft">
                screenshot — BillingFlow claim review
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
