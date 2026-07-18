import Reveal from "./motion/Reveal";

const CLIENTS = [
  "Northgate Surgical",
  "Riverstone Health",
  "Bayside Clinics",
  "Meridian Ortho",
  "Coastal Care Group",
];

export default function TrustBar() {
  return (
    <Reveal className="mx-auto w-[min(1180px,92vw)] pb-2 pt-[30px]" stagger={0.05}>
      <div
        data-reveal
        className="text-center text-[13px] uppercase tracking-[0.08em] text-ink-soft"
      >
        Trusted across surgical and primary care practices
      </div>
      <div className="mt-[22px] flex flex-wrap justify-center gap-3.5">
        {CLIENTS.map((c) => (
          <span
            key={c}
            data-reveal
            className="text-[19px] font-bold tracking-[-0.01em] text-[oklch(0.55_0.02_60)] opacity-70"
          >
            {c}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
