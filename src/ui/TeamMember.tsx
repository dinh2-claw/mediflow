export type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  /** Optional headshot URL. Falls back to a dashed placeholder tile. */
  photo?: string;
  className?: string;
};

/**
 * A team member card: a square avatar (photo or placeholder), a serif name, a
 * clay role label, and a short bio.
 */
export default function TeamMember({
  name,
  role,
  bio,
  photo,
  className,
}: TeamMemberProps) {
  return (
    <div className={className}>
      <div className="grid aspect-square place-items-center overflow-hidden rounded-[14px] border border-line [background:repeating-linear-gradient(135deg,var(--color-bg-2)_0_12px,var(--color-bg)_12px_24px)]">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="font-mono text-[11px] text-ink-soft">photo</span>
        )}
      </div>
      <h3 className="mt-4 font-serif text-[24px] leading-[1.05]">{name}</h3>
      <div className="mt-[3px] text-[14px] font-semibold text-clay-deep">
        {role}
      </div>
      <p className="mt-[9px] text-[14px] text-ink-soft">{bio}</p>
    </div>
  );
}
