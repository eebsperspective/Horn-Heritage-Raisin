import clsx from "clsx";

const inputClasses =
  "focus-ring w-full border border-sand-300 bg-white px-3.5 py-2.5 text-sm text-brown-900 placeholder:text-brown-400";

export function Field({
  label,
  htmlFor,
  required,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="tracked mb-1.5 block text-xs font-medium uppercase text-brown-900">
        {label}
        {required && <span className="text-terracotta-500"> *</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-brown-500">{hint}</p>}
    </div>
  );
}

export function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { className?: string },
) {
  const { className, ...rest } = props;
  return <input className={clsx(inputClasses, className)} {...rest} />;
}

export function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string },
) {
  const { className, ...rest } = props;
  return <textarea className={clsx(inputClasses, className)} rows={4} {...rest} />;
}

export function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { className?: string },
) {
  const { className, children, ...rest } = props;
  return (
    <select className={clsx(inputClasses, "bg-white", className)} {...rest}>
      {children}
    </select>
  );
}

export function HoneypotFields({ startedAt }: { startedAt: number }) {
  return (
    <>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
    </>
  );
}

export function CheckboxGroup({
  name,
  options,
  selected,
  onChange,
}: {
  name: string;
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {options.map((opt) => {
        const checked = selected.includes(opt.value);
        return (
          <label
            key={opt.value}
            className="flex items-center gap-2 border border-sand-300 bg-white px-3 py-2 text-sm text-brown-800"
          >
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={(e) => {
                if (e.target.checked) onChange([...selected, opt.value]);
                else onChange(selected.filter((v) => v !== opt.value));
              }}
              className="focus-ring h-4 w-4 border-sand-400 text-brown-900"
            />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}
