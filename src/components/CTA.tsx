import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Reveal from "./motion/Reveal";

export default function CTA() {
  return (
    <Reveal as="section" id="cta" className="py-[110px] text-center" stagger={0.1}>
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div data-reveal>
          <Eyebrow center>Care flows, paperwork follows</Eyebrow>
        </div>
        <h2
          data-reveal
          className="mt-[18px] font-serif text-[clamp(40px,5.4vw,76px)] font-normal leading-[1.04] tracking-[-0.01em]"
        >
          See your first claim
          <br />
          file itself.
        </h2>
        <p
          data-reveal
          className="mx-auto mb-[34px] mt-[22px] max-w-[32em] text-[19px] text-ink-soft"
        >
          Book a 20-minute walkthrough and watch BillingFlow read a sticker and
          clear a Medicare claim live.
        </p>
        <div data-reveal className="flex justify-center">
          <Button variant="primary" href="#contact" className="px-[30px] py-4 text-[16px]">
            Book a demo →
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
