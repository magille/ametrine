import { Link } from "react-router-dom"
import Button from "../components/Button"
import SectionHeading from "../components/SectionHeading"
import BlueprintCard from "../components/BlueprintCard"
import DuotoneImage from "../components/DuotoneImage"
import CtaBand from "../components/CtaBand"
import { home, audienceTags, services } from "../data/content"
import heroPhoto from "../assets/photos/hero.jpg"
import whoWeArePhoto from "../assets/photos/impact.jpg"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-10 md:pt-14 md:pb-12">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-16 items-center">
          <div>
            <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
              {home.hero.eyebrow}
            </p>
            <div className="h-px w-full bg-primary-200/60 mb-8" />
            <p className="font-heading uppercase tracking-[0.24em] text-xs text-neutral-500 mb-5">
              MEL / Research / Data
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9]">
              <span className="text-ink">{home.hero.headlineTop}</span>{" "}
              <span className="text-primary">{home.hero.headlineAccent}</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-xl mt-7">{home.hero.body}</p>
            <div className="flex flex-wrap gap-4 mt-7">
              <Button to="/services" variant="primary">
                {home.hero.ctaPrimary}
              </Button>
              <Button to="/contact" variant="secondary">
                {home.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <DuotoneImage src={heroPhoto} alt="Monitoring and evaluation professionals working with communities in Africa" ratio="aspect-[4/5]" />
        </div>
      </section>

      {/* Who we are */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          <div>
            <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
              {home.whoWeAre.eyebrow}
            </p>
            <div className="h-px w-full bg-primary-200/60 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] text-ink">{home.whoWeAre.title}</h2>
            <DuotoneImage src={whoWeArePhoto} alt="Team at work in the field" ratio="aspect-[4/3]" className="mt-6" />
          </div>
          <div className="md:pt-14">
            <div className="space-y-5 text-neutral-700 text-lg leading-relaxed">
              {home.whoWeAre.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap content-start gap-2.5 mt-7">
              {audienceTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-primary-300/80 text-primary-700 px-3.5 py-2 font-heading uppercase text-xs tracking-wide font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
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
