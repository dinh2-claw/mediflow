import Eyebrow from "./Eyebrow";
import Reveal from "./motion/Reveal";

const STEPS = [
  {
    no: "01",
    title: "Snap the sticker",
    body: "Point any device at the patient label. No special hardware, no manual entry.",
  },
  {
    no: "02",
    title: "AI reads it",
    body: "Agentic OCR extracts patient, procedure and payer details — and checks them against your records.",
  },
  {
    no: "03",
    title: "Verify with Medicare",
    body: "Eligibility and item numbers are confirmed in real time, flagging gaps before they bounce.",
  },
  {
    no: "04",
    title: "Bill, hands-free",
    body: "A clean, coded claim is assembled and queued for one-tap submission.",
  },
];

export default function HowItWorks() {
  return (
    <Reveal as="section" id="how" className="py-24">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="max-w-[38rem]">
          <div data-reveal>
            <Eyebrow>How BillingFlow works</Eyebrow>
          </div>
          <h2
            data-reveal
            className="mt-[18px] font-serif text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.04] tracking-[-0.01em]"
          >
            From sticker to settled claim — without a keyboard.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-4 border-t border-line max-[860px]:grid-cols-2">
          {STEPS.map((s, i) => (
            <div
              key={s.no}
              data-reveal
              className={`border-line py-[30px] pr-6 max-[860px]:border-b max-[860px]:py-6 max-[860px]:pr-0 ${
                i < STEPS.length - 1
                  ? "border-r max-[860px]:border-r-0"
                  : "pr-0"
              }`}
            >
              <div className="font-serif text-[40px] leading-none text-clay">
                {s.no}
              </div>
              <h3 className="mb-2 mt-4 text-[19px] tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="text-[15px] text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
