export default function SpecSheet({ title, meta, sheet, rows, footnote }) {
  return (
    <div className="blueprint border border-primary-200/70 text-primary-600">
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
      <div
        className={`grid grid-cols-1 border-b border-primary-200/70 ${
          meta ? "sm:grid-cols-[1.4fr_1fr_0.6fr]" : "sm:grid-cols-[1fr_0.6fr]"
        }`}
      >
        <div className="p-5 sm:border-r border-primary-200/70">
          <p className="font-heading uppercase text-sm font-bold text-ink leading-tight">{title}</p>
        </div>
        {meta && (
          <div className="p-5 sm:border-r border-primary-200/70 border-t sm:border-t-0 border-primary-200/70">
            <p className="font-heading uppercase text-sm font-semibold text-neutral-500">{meta}</p>
          </div>
        )}
        <div className="p-5 border-t sm:border-t-0 border-primary-200/70">
          <p className="font-heading uppercase text-sm font-semibold text-neutral-400">Sheet {sheet}</p>
        </div>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-[auto_1fr] sm:grid-cols-[60px_260px_1fr] gap-4 sm:gap-6 p-5 items-baseline border-b border-primary-200/50"
        >
          <span className="font-heading font-bold text-primary-500 text-sm">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-heading font-bold text-2xl text-ink col-span-2 sm:col-span-1">{row.value}</span>
          <span className="text-neutral-600 col-span-2 sm:col-span-1">{row.label}</span>
        </div>
      ))}
      {footnote && <p className="p-5 text-sm text-neutral-500">{footnote}</p>}
    </div>
  )
}
