import SpecSheet from "../components/SpecSheet"
import DuotoneImage from "../components/DuotoneImage"
import CtaBand from "../components/CtaBand"
import { impact, home } from "../data/content"
import impactPhoto from "../assets/photos/impact.jpg"

export default function Impact() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {impact.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">{impact.title}</h1>
        <p className="text-lg text-neutral-700 max-w-2xl mb-3">{impact.narrative}</p>
        <p className="text-neutral-500 max-w-2xl">{impact.note}</p>
      </section>

      <DuotoneImage src={impactPhoto} alt="Communities and programmes across Tanzania" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SpecSheet
          title={impact.proofPoints.title}
          meta={impact.proofPoints.meta}
          sheet={impact.proofPoints.sheet}
          rows={impact.proofPoints.rows}
        />
      </section>

      <CtaBand
        eyebrow={home.closingCta.eyebrow}
        title={home.closingCta.title}
        body={home.closingCta.body}
        ctaPrimary={home.closingCta.ctaPrimary}
        ctaPrimaryTo="/contact"
        ctaSecondary="Explore our services"
        ctaSecondaryTo="/services"
      />
    </div>
  )
}
