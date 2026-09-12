import { Link } from "react-router-dom"
import Button from "../components/Button"
import SectionHeading from "../components/SectionHeading"
import SpecSheet from "../components/SpecSheet"
import BlueprintCard from "../components/BlueprintCard"
import DuotoneImage from "../components/DuotoneImage"
import CtaBand from "../components/CtaBand"
import { home, audienceTags, services } from "../data/content"
import heroPhoto from "../assets/photos/hero.jpg"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-0">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {home.hero.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.92] max-w-4xl">
          <span className="text-ink">{home.hero.headlineTop}</span>{" "}
          <span className="text-primary">{home.hero.headlineAccent}</span>
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mt-8">{home.hero.body}</p>
        <div className="flex flex-wrap gap-4 mt-8 mb-12">
          <Button to="/services" variant="primary">
            {home.hero.ctaPrimary}
          </Button>
          <Button to="/contact" variant="secondary">
            {home.hero.ctaSecondary}
          </Button>
        </div>
      </section>

      <DuotoneImage
        src={heroPhoto}
        alt="Field research and evaluation in progress"
        ratio="aspect-[16/9] md:aspect-[21/9]"
      />

      {/* Credibility spec sheet */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SpecSheet
          title={home.credibility.title}
          meta={home.credibility.meta}
          sheet={home.credibility.sheet}
          rows={home.credibility.rows}
        />
      </section>

      {/* Who we are */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading eyebrow={home.whoWeAre.eyebrow} title={home.whoWeAre.title} />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-neutral-700 text-lg">
            {home.whoWeAre.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {audienceTags.map((tag) => (
              <span
                key={tag}
                className="border border-primary-300 text-primary-700 px-4 py-2 font-heading uppercase text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading eyebrow="02 · Featured Services" title="What we help you do" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <BlueprintCard key={service.slug} className="p-6">
              <p className="font-heading text-sm font-bold text-primary-500 mb-3">{service.number}</p>
              <Link
                to={`/services/${service.slug}`}
                className="font-heading uppercase text-xl font-bold leading-tight hover:text-primary-700 transition-colors block"
              >
                {service.title}
              </Link>
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
