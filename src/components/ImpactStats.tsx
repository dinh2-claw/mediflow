import Eyebrow from "./Eyebrow";
import Reveal from "./motion/Reveal";
import CountUp from "./motion/CountUp";

const STATS = [
  {
    render: <CountUp value={1.2} decimals={1} prefix="$" suffix="T" />,
    label: "spent annually on US healthcare admin — the waste MediFlow targets.",
  },
  {
    render: <CountUp value={11} suffix="%" />,
    label: "of claims are denied on first pass; BillingFlow cuts that to near zero.",
  },
  {
    render: <CountUp value={3} suffix="×" />,
    label: "faster reimbursement cycles in early pilot practices.",
  },
];

export default function ImpactStats() {
  return (
    <section id="impact" className="py-24">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <Reveal className="rounded-[26px] bg-ink px-14 py-16 text-[oklch(0.95_0.01_80)] max-[860px]:px-7 max-[860px]:py-10">
          <div data-reveal>
            <Eyebrow className="!text-[oklch(0.8_0.1_55)]">Why it matters</Eyebrow>
          </div>
          <h2
            data-reveal
            className="mt-3.5 max-w-[18em] font-serif text-[clamp(32px,4vw,48px)] font-normal leading-[1.04] tracking-[-0.01em]"
          >
            A category that touches every visit — and most of the friction in it.
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-10 max-[860px]:grid-cols-1 max-[860px]:gap-7">
            {STATS.map((s, i) => (
              <div key={i} data-reveal>
                <div className="font-serif text-[clamp(48px,6vw,72px)] leading-none text-[oklch(0.8_0.1_55)]">
                  {s.render}
                </div>
                <div className="mt-2.5 text-[15px] text-[oklch(0.78_0.01_80)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
