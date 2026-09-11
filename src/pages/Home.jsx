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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-0">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SpecSheet
          title={home.credibility.title}
          meta={home.credibility.meta}
          sheet={home.credibility.sheet}
          rows={home.credibility.rows}
        />
      </section>

      {/* Who we are */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading eyebrow="02 · Featured Services" title="What we help you do" />
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <BlueprintCard key={service.slug}>
              <p className="font-heading text-sm font-bold text-primary-500 mb-2">{service.number}</p>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-5">{service.short}</p>
              <Link
                to={`/services/${service.slug}`}
                className="font-heading uppercase text-sm font-semibold text-primary hover:text-primary-700 inline-flex items-center gap-2"
              >
                Read the service <span aria-hidden>→</span>
              </Link>
            </BlueprintCard>
          ))}
        </div>
      </section>

      {/* Our difference */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading eyebrow={home.difference.eyebrow} title={home.difference.title} />
        <div className="divide-y divide-primary-200/50 border-t border-primary-200/50">
          {home.difference.items.map((item, i) => (
            <div key={item.title} className="grid sm:grid-cols-[60px_1fr] gap-4 py-6">
              <span className="font-heading font-bold text-primary-500">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-bold uppercase font-heading mb-1">{item.title}</h3>
                <p className="text-neutral-600">{item.text}</p>
              </div>
            </div>
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
