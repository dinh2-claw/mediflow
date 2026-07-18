import Eyebrow from "./Eyebrow";
import Reveal from "./motion/Reveal";
import { withBasePath } from "@/lib/base-path";

type Member = {
  name: string;
  role: string;
  bio: string;
  /** Photo in /public; falls back to the placeholder tile when omitted. */
  photo?: string;
};

const MEMBERS: Member[] = [
  {
    name: "Dr. Goomba",
    role: "Co-founder & CEO",
    bio: "Surgical lead for 12 years; built MediFlow to give that time back to patients.",
    photo: "/goomba.jpg",
  },
  {
    name: "Marcus Reyes",
    role: "Co-founder & CTO",
    bio: "Shipped large-scale ML systems; leads the BillingFlow agent architecture.",
  },
  {
    name: "Dr. Priya Nair",
    role: "Chief Medical Officer",
    bio: "Practising GP; keeps every workflow clinically honest.",
  },
  {
    name: "Sam Whitfield",
    role: "Head of Product",
    bio: "Designed clinical tools used daily by tens of thousands of staff.",
  },
];

export default function Team() {
  return (
    <Reveal as="section" id="team" className="bg-bg-2 py-24">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="max-w-[38rem]">
          <div data-reveal>
            <Eyebrow>The people behind it</Eyebrow>
          </div>
          <h2
            data-reveal
            className="mt-[18px] font-serif text-[clamp(34px,4.4vw,56px)] font-normal leading-[1.04] tracking-[-0.01em]"
          >
            Clinicians and builders, in one room.
          </h2>
        </div>
        <div className="mt-[52px] grid grid-cols-4 gap-[22px] max-[860px]:grid-cols-2">
          {MEMBERS.map((m) => (
            <div key={m.name} data-reveal className="member">
              <div className="grid aspect-square place-items-center overflow-hidden rounded-[14px] border border-line [background:repeating-linear-gradient(135deg,var(--color-bg-2)_0_12px,var(--color-bg)_12px_24px)]">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={withBasePath(m.photo)}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-[11px] text-ink-soft">
                    photo
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.05]">
                {m.name}
              </h3>
              <div className="mt-[3px] text-[14px] font-semibold text-clay-deep">
                {m.role}
              </div>
              <p className="mt-[9px] text-[14px] text-ink-soft">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
