import Button from "./Button"

export default function CtaBand({ eyebrow, title, body, ctaPrimary, ctaPrimaryTo, ctaSecondary, ctaSecondaryTo }) {
  return (
    <section className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-200 mb-4">
          {eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] max-w-3xl mb-6">{title}</h2>
        <p className="text-primary-100 text-lg max-w-2xl mb-10">{body}</p>
        <div className="flex flex-wrap gap-4">
          {ctaPrimary && (
            <Button to={ctaPrimaryTo} variant="onDark">
              {ctaPrimary}
            </Button>
          )}
          {ctaSecondary && (
            <Button to={ctaSecondaryTo} variant="ghostDark">
              {ctaSecondary}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
