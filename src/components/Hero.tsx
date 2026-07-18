import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Reveal from "./motion/Reveal";
import CountUp from "./motion/CountUp";

/** Product-mock "device" that shows a patient sticker being scanned into a claim. */
function DeviceMock() {
  return (
    <div
      data-reveal
      className="overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_30px_60px_-28px_oklch(0.4_0.05_50/0.4),0_2px_0_oklch(1_0_0/0.6)_inset]"
    >
      <div className="flex items-center gap-2 border-b border-line bg-bg-2 px-4 py-[13px]">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 text-[13px] font-semibold text-ink-soft">
          BillingFlow · Live capture
        </span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-[96px_1fr] items-stretch gap-4">
          {/* Scanning sticker */}
          <div className="relative grid min-h-[128px] place-items-center rounded-[10px] border-[1.5px] border-dashed border-clay text-center [background:repeating-linear-gradient(45deg,oklch(0.94_0.03_60)_0_7px,oklch(0.91_0.04_58)_7px_14px)]">
            <div className="absolute left-[6%] right-[6%] top-[14%] h-0.5 rounded-[2px] bg-clay shadow-[0_0_10px_var(--color-clay)] [animation:var(--animate-scan)] motion-reduce:animate-none" />
            <div className="p-1.5 font-mono text-[10px] leading-tight text-clay-deep">
              PATIENT
              <br />
              STICKER
            </div>
          </div>
          {/* OCR fields */}
          <div className="flex flex-col gap-[9px]">
            {[
              { k: "Patient", v: "A. Whitfield · DOB 04/12/58" },
              { k: "Procedure", v: "Arthroscopy · 29881" },
              { k: "Medicare no.", v: "3142 778 215 1" },
            ].map((f) => (
              <div
                key={f.k}
                className="rounded-[9px] border border-line bg-bg px-3 py-[9px]"
              >
                <div className="text-[10.5px] uppercase tracking-[0.08em] text-ink-soft">
                  {f.k}
                </div>
                <div className="mt-0.5 text-[14px] font-semibold">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Verified row */}
        <div className="mt-3.5 flex items-center justify-between rounded-[11px] bg-[oklch(0.95_0.04_152)] px-3.5 py-3 text-[14px] font-semibold text-[oklch(0.4_0.09_152)]">
          <span className="inline-flex items-center gap-[7px]">
            <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-sage text-[11px] text-white">
              ✓
            </span>
            Verified with Medicare
          </span>
          <span className="font-serif text-[22px] text-ink">$1,284.00</span>
        </div>
      </div>
    </div>
  );
}

const STATS = [
  { render: <CountUp value={9} suffix=" min" />, label: "saved per claim" },
  {
    render: <CountUp value={98.6} decimals={1} suffix="%" />,
    label: "first-pass accuracy",
  },
  { render: "HIPAA", label: "compliant by design" },
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden pb-16 pt-[92px]">
      <Reveal
        mode="load"
        y={28}
        stagger={0.09}
        className="mx-auto grid w-[min(1180px,92vw)] grid-cols-[1.05fr_0.95fr] items-center gap-14 max-[860px]:grid-cols-1 max-[860px]:gap-10"
      >
        <div>
          <div data-reveal>
            <Eyebrow>AI-first healthcare</Eyebrow>
          </div>
          <h1
            data-reveal
            className="mt-5 font-serif text-[clamp(52px,6.6vw,92px)] font-normal leading-[1.04] tracking-[-0.01em]"
          >
            Care flows,
            <br />
            <em className="italic text-clay-deep">paperwork follows.</em>
          </h1>
          <p
            data-reveal
            className="mb-8 mt-[26px] max-w-[30em] text-[19px] text-ink-soft"
          >
            MediFlow puts agentic AI to work behind the scenes — so doctors,
            surgical teams and patients spend their time on care, not clipboards.
            Medicine and practice, agentically reimagined.
          </p>
          <div data-reveal className="flex flex-wrap gap-3.5">
            <Button variant="primary" href="#cta">
              Book a demo →
            </Button>
            <Button variant="ghost" href="#product">
              See BillingFlow
            </Button>
          </div>
          <div
            data-reveal
            className="mt-[38px] flex flex-wrap items-center gap-7"
          >
            {STATS.map((s, i) => (
              <div key={i} className="flex items-center gap-7">
                {i > 0 && <span className="h-[38px] w-px bg-line" />}
                <div>
                  <div className="font-serif text-[34px] leading-none">
                    {s.render}
                  </div>
                  <div className="mt-1 text-[13px] text-ink-soft">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* note: each stat carries its own left divider except the first,
              so the flex gap only spaces stat↔divider pairs. */}
        </div>
        <DeviceMock />
      </Reveal>
    </header>
  );
}
