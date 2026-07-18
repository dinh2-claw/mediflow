import Logo from "./Logo";

const LINKS = ["Product", "Security", "For investors", "Careers", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-line py-[46px]">
      <div className="mx-auto flex w-[min(1180px,92vw)] flex-wrap items-center justify-between gap-5">
        <Logo />
        <div className="flex gap-[26px] text-[14px] text-ink-soft">
          {LINKS.map((l) => (
            <a key={l} href="#" className="transition-colors hover:text-ink">
              {l}
            </a>
          ))}
        </div>
        <div className="text-[13px] text-ink-soft">
          © 2026 MediFlow · Medicine and practice, agentically reimagined.
        </div>
      </div>
    </footer>
  );
}
