import SpecSheet from "../components/SpecSheet"
import CtaBand from "../components/CtaBand"
import DuotoneImage from "../components/DuotoneImage"
import { useContent } from "../data/contentApi.jsx"
import impactPhoto from "../assets/photos/impact.jpg"
import Icon from "../components/Icon"
import Reveal from "../components/Reveal"

export default function Impact() {
  const { content: { impact, home, images } } = useContent()
  return (
    <div>
      <section className="max-w-[90rem] mx-auto px-6 pt-10 pb-8 md:pt-14">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {impact.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <p className="font-heading uppercase tracking-[0.24em] text-xs text-neutral-500 mb-5">MEL / Contribution / Learning</p>
        <div className="flex items-center gap-4 mb-7"><Icon name="target" className="h-9 w-9 text-brandBlue-600" /><h1 className="text-5xl md:text-7xl font-bold leading-[0.9]">{impact.title}</h1></div>
        <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-8 md:gap-14 items-start">
          <p className="text-lg text-neutral-700 max-w-2xl leading-relaxed">{impact.narrative}</p>
          <p className="border-l-2 border-primary-400 pl-5 text-neutral-500 leading-relaxed">{impact.note}</p>
        </div>
        <DuotoneImage
          src={images?.impact || impactPhoto}
          alt="Sunset light over a landscape, representing the lasting contribution of evidence and learning"
          ratio="aspect-[16/6]"
          className="mt-10"
        />
      </section>

      <section className="max-w-[90rem] mx-auto px-6 py-12 md:py-16">
        <Reveal>
          <SpecSheet
            title={impact.proofPoints.title}
            rows={impact.proofPoints.rows}
            footnote={impact.proofPoints.footnote}
            icon="target"
          />
        </Reveal>
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
