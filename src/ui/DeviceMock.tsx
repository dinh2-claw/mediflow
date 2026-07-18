export type DeviceMockField = { k: string; v: string };

export type DeviceMockProps = {
  /** Title shown in the device chrome bar. */
  title?: string;
  /** Extracted OCR fields listed beside the scanning sticker. */
  fields?: DeviceMockField[];
  /** Verified-amount shown in the green footer row. */
  amount?: string;
  className?: string;
};

const DEFAULT_FIELDS: DeviceMockField[] = [
  { k: "Patient", v: "A. Whitfield · DOB 04/12/58" },
  { k: "Procedure", v: "Arthroscopy · 29881" },
  { k: "Medicare no.", v: "3142 778 215 1" },
];

/**
 * The BillingFlow product mock: a framed "device" showing a patient sticker
 * being scanned (animated scan line) into extracted OCR fields and a
 * Medicare-verified claim total. The scan line honours reduced-motion.
 */
export default function DeviceMock({
  title = "BillingFlow · Live capture",
  fields = DEFAULT_FIELDS,
  amount = "$1,284.00",
  className,
}: DeviceMockProps) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_30px_60px_-28px_oklch(0.4_0.05_50/0.4),0_2px_0_oklch(1_0_0/0.6)_inset] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-bg-2 px-4 py-[13px]">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 text-[13px] font-semibold text-ink-soft">
          {title}
        </span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-[96px_1fr] items-stretch gap-4">
          <div className="relative grid min-h-[128px] place-items-center rounded-[10px] border-[1.5px] border-dashed border-clay text-center [background:repeating-linear-gradient(45deg,oklch(0.94_0.03_60)_0_7px,oklch(0.91_0.04_58)_7px_14px)]">
            <div className="absolute left-[6%] right-[6%] top-[14%] h-0.5 rounded-[2px] bg-clay shadow-[0_0_10px_var(--color-clay)] [animation:var(--animate-scan)] motion-reduce:animate-none" />
            <div className="p-1.5 font-mono text-[10px] leading-tight text-clay-deep">
              PATIENT
              <br />
              STICKER
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            {fields.map((f) => (
              <div
                key={f.k}
                className="rounded-[9px] border border-line bg-bg px-3 py-[9px]"
              >
                <div className="text-[10.5px] uppercase tracking-[0.08em] text-ink-soft">
                  {f.k}
                </div>
                <div className="mt-0.5 text-[14px] font-semibold">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3.5 flex items-center justify-between rounded-[11px] bg-[oklch(0.95_0.04_152)] px-3.5 py-3 text-[14px] font-semibold text-[oklch(0.4_0.09_152)]">
          <span className="inline-flex items-center gap-[7px]">
            <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-sage text-[11px] text-white">
              ✓
            </span>
            Verified with Medicare
          </span>
          <span className="font-serif text-[22px] text-ink">{amount}</span>
        </div>
      </div>
    </div>
  );
}
