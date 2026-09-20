import CtaBand from "../components/CtaBand"
import BlueprintCard from "../components/BlueprintCard"
import SectionHeading from "../components/SectionHeading"
import DuotoneImage from "../components/DuotoneImage"
import { useContent } from "../data/contentApi.jsx"

export default function Sectors() {
  const { content: { sectors, home, images } } = useContent()

  return (
    <div>
      <section className="max-w-[90rem] mx-auto px-6 pt-10 pb-12 md:pt-14 md:pb-14">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">{sectors.eyebrow}</p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-7">{sectors.title}</h1>
        <p className="text-lg text-neutral-700 max-w-3xl leading-relaxed">{sectors.intro}</p>
      </section>

      <section className="max-w-[90rem] mx-auto px-6 pb-8">
        <DuotoneImage
          src={images?.sectors || ""}
          alt="Consultants facilitating sector-focused learning and programme design sessions"
          ratio="aspect-[16/7]"
        />
      </section>

      <section className="max-w-[90rem] mx-auto px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Cross-sector methods, local context" title="Where our practice meets real-world decisions" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.items.map((sector) => (
            <BlueprintCard key={sector.title} className="p-6">
              <h2 className="text-xl font-bold uppercase mb-3">{sector.title}</h2>
              <p className="text-neutral-600">{sector.text}</p>
            </BlueprintCard>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow={home.closingCta.eyebrow}
        title={home.closingCta.title}
        body={home.closingCta.body}
        ctaPrimary={home.closingCta.ctaPrimary}
        ctaPrimaryTo="/contact"
        ctaSecondary={home.closingCta.ctaSecondary}
        ctaSecondaryTo="/impact"
      />
    </div>
  )
}
