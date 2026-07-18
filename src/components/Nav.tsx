import Logo from "./Logo";
import Button from "./Button";

const LINKS = [
  { href: "#product", label: "BillingFlow" },
  { href: "#how", label: "How it works" },
  { href: "#who", label: "For your team" },
  { href: "#impact", label: "Impact" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex h-[70px] w-[min(1180px,92vw)] items-center justify-between">
        <Logo />
        <div className="hidden gap-8 text-[15px] font-medium text-ink-soft min-[861px]:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="primary" href="#cta">
            Book a demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
