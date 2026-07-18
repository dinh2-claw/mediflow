"use client";

import Eyebrow from "./Eyebrow";
import Reveal from "./motion/Reveal";

const INFO = [
  { k: "Sales & demos", v: "hello@mediflow.ai" },
  { k: "Investors", v: "investors@mediflow.ai" },
  { k: "Phone", v: "+1 (800) 555-0142" },
];

const fieldClass =
  "w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-[15px] text-ink outline-none transition-colors focus:border-clay";
const labelClass =
  "mb-1.5 block text-[13px] font-semibold text-ink-soft";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <Reveal className="grid grid-cols-[0.9fr_1.1fr] items-start gap-14 max-[860px]:grid-cols-1 max-[860px]:gap-[34px]">
          <div>
            <div data-reveal>
              <Eyebrow>Get in touch</Eyebrow>
            </div>
            <h2
              data-reveal
              className="mt-4 font-serif text-[clamp(34px,4.4vw,52px)] font-normal leading-[1.04] tracking-[-0.01em]"
            >
              Let&apos;s talk about your practice.
            </h2>
            <p data-reveal className="mt-4 max-w-[26em] text-[17px] text-ink-soft">
              Whether you run a single clinic or a surgical group, we&apos;ll show
              you exactly how BillingFlow fits your workflow.
            </p>
            <div className="mt-2.5 flex flex-col gap-[22px]">
              {INFO.map((i) => (
                <div key={i.k} data-reveal>
                  <div className="text-[13px] uppercase tracking-[0.08em] text-ink-soft">
                    {i.k}
                  </div>
                  <div className="mt-1 font-serif text-[24px]">{i.v}</div>
                </div>
              ))}
            </div>
          </div>

          <form
            data-reveal
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-2 gap-4 rounded-[18px] border border-line bg-surface p-[30px] shadow-[0_24px_50px_-30px_oklch(0.4_0.05_50/0.3)] max-[860px]:grid-cols-1"
          >
            <div>
              <label htmlFor="fn" className={labelClass}>
                First name
              </label>
              <input id="fn" type="text" placeholder="Jane" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="ln" className={labelClass}>
                Last name
              </label>
              <input id="ln" type="text" placeholder="Smith" className={fieldClass} />
            </div>
            <div className="col-span-full">
              <label htmlFor="em" className={labelClass}>
                Work email
              </label>
              <input
                id="em"
                type="email"
                placeholder="jane@clinic.com"
                className={fieldClass}
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="role" className={labelClass}>
                Your role
              </label>
              <select id="role" className={fieldClass}>
                <option>Doctor / clinician</option>
                <option>Surgical assistant</option>
                <option>Practice manager</option>
                <option>Billing &amp; admin</option>
                <option>Investor</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-span-full">
              <label htmlFor="msg" className={labelClass}>
                How can we help?
              </label>
              <textarea
                id="msg"
                placeholder="Tell us a little about your billing workflow…"
                className={`${fieldClass} min-h-[110px] resize-y`}
              />
            </div>
            <div className="col-span-full">
              <button
                type="submit"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border-[1.5px] border-transparent bg-clay px-[22px] py-[15px] text-[15px] font-semibold text-[oklch(0.99_0.01_80)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-clay-deep"
              >
                Request a demo →
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
