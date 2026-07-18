export type FieldProps = {
  /** Field label text. */
  label: string;
  /** id wired to the label's `htmlFor` and the control. */
  id: string;
  /** Control kind. `select` renders `options`; `textarea` is multi-line. */
  control?: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  /** Options for `control="select"`. */
  options?: string[];
  className?: string;
};

const controlClass =
  "w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-[15px] text-ink outline-none transition-colors focus:border-clay";

/**
 * A labelled form control — text input, email input, textarea, or select —
 * styled to the design system. Wire it into your own `<form>`.
 */
export default function Field({
  label,
  id,
  control = "text",
  placeholder,
  options = [],
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-ink-soft">
        {label}
      </label>
      {control === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={`${controlClass} min-h-[110px] resize-y`}
        />
      ) : control === "select" ? (
        <select id={id} className={controlClass}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={control}
          placeholder={placeholder}
          className={controlClass}
        />
      )}
    </div>
  );
}
