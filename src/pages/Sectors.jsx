import BlueprintCard from "../components/BlueprintCard"
import CtaBand from "../components/CtaBand"
import { sectors, home } from "../data/content"

export default function Sectors() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          Where We Contribute
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">Sector Experience</h1>
        <p className="text-lg text-neutral-600 max-w-2xl">
          Ametrine's methods are cross-sectoral, while its deepest experience lies in health and nutrition,
          education, gender and inclusion, child protection, governance, community systems and institutional
          strengthening.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-6">
        {sectors.map((sector) => (
          <BlueprintCard key={sector.number}>
            <p className="font-heading font-bold text-primary-500 mb-2">{sector.number}</p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">{sector.title}</h2>
            <p className="text-neutral-600 max-w-3xl">{sector.text}</p>
          </BlueprintCard>
        ))}
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
