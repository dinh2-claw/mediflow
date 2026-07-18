import Eyebrow from "./Eyebrow";
import Reveal from "./motion/Reveal";

const CARDS = [
  {
    ic: "◐",
    title: "Surgical assistants",
    body: "Capture at the point of care between cases — no end-of-day data backlog.",
  },
  {
    ic: "✦",
    title: "Doctors",
    body: "Coding handled in the background so notes stay clinical, not clerical.",
  },
  {
    ic: "❖",
    title: "Patients",
    body: "Fewer surprise bills and faster, clearer statements they can trust.",
  },
  {
    ic: "◇",
    title: "Practice staff",
    body: "Rejections drop, cash flow speeds up, and reconciliation runs itself.",
  },
];

export default function Audience() {
  return (
    <Reveal as="section" id="who" className="py-24">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="max-w-[38rem]">
          <div data-reveal>
            <Eyebrow>Built for the whole practice</Eyebrow>
          </div>
          <h2
            data-reveal
            className="mt-[18px] font-serif text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.04] tracking-[-0.01em]"
          >
            One flow, every role.
          </h2>
        </div>
        <div className="mt-[52px] grid grid-cols-4 gap-[18px] max-[860px]:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              data-reveal
              className="rounded-2xl border border-line bg-surface px-[22px] py-[26px] transition-transform duration-200 hover:-translate-y-[3px]"
            >
              <div className="mb-[18px] grid h-10 w-10 place-items-center rounded-[11px] bg-bg-2 text-clay-deep">
                {c.ic}
              </div>
              <h3 className="text-[17px] tracking-[-0.01em]">{c.title}</h3>
              <p className="mt-[7px] text-[14px] text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
