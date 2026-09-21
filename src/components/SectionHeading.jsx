export default function SectionHeading({ eyebrow, title, subtitle, align = "left", dark = false }) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <p className={`font-heading uppercase tracking-widest text-sm font-semibold mb-3 ${dark ? "text-brandBlue-100" : "text-brandBlue-600"}`}>
          {eyebrow}
        </p>
      )}
      <div className={`h-px w-full mb-6 ${dark ? "bg-brandBlue-300/30" : "bg-brandBlue-200/70"}`} />
      {title && (
        <h2 className={`text-4xl md:text-5xl font-bold leading-[0.95] ${dark ? "text-white" : "text-primary-600"}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`font-body normal-case tracking-normal text-lg mt-5 ${dark ? "text-primary-100" : "text-neutral-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
