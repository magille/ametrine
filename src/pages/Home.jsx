import { Link } from "react-router-dom"
import Button from "../components/Button"
import SectionHeading from "../components/SectionHeading"
import BlueprintCard from "../components/BlueprintCard"
import DuotoneImage from "../components/DuotoneImage"
import CtaBand from "../components/CtaBand"
import SpecSheet from "../components/SpecSheet"
import { useContent } from "../data/contentApi.jsx"
import heroPhoto from "../assets/photos/hero.jpg"
import whoWeArePhoto from "../assets/photos/impact.jpg"
import Icon from "../components/Icon"

export default function Home() {
  const { content: { home, audienceTags, services, images } } = useContent()
  return (
    <div>
      {/* Hero */}
      <section className="max-w-[90rem] mx-auto px-6 pt-10 pb-10 md:pt-14 md:pb-12">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-16 items-center">
          <div>
            <p className="font-heading uppercase tracking-widest text-sm font-semibold text-brandBlue-600 mb-3">
              {home.hero.eyebrow}
            </p>
            <div className="h-px w-full bg-brandBlue-200/70 mb-8" />
            <p className="font-heading uppercase tracking-[0.24em] text-xs text-neutral-500 mb-5">
              MEL / Research / Data
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9]">
              <span className="text-primary-600">{home.hero.headlineTop}</span>{" "}
              <span className="text-brandBlue-600">{home.hero.headlineAccent}</span>
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
          <DuotoneImage src={images?.hero || heroPhoto} alt="Sunrise over a landscape, symbolising fresh insight and new possibilities" ratio="aspect-[4/5]" />
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-6 py-10 md:py-12">
        <SpecSheet
          title={home.credibility.title}
          meta={home.credibility.meta}
          rows={home.credibility.rows}
          icon="chart"
        />
      </section>

      {/* Who we are */}
      <section className="max-w-[90rem] mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          <div>
            <p className="font-heading uppercase tracking-widest text-sm font-semibold text-brandBlue-600 mb-3">
              {home.whoWeAre.eyebrow}
            </p>
            <div className="h-px w-full bg-brandBlue-200/70 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] text-primary-600">{home.whoWeAre.title}</h2>
            <DuotoneImage src={images?.impact || whoWeArePhoto} alt="Warm evening light across a landscape, reflecting thoughtful and grounded advisory work" ratio="aspect-[4/3]" className="mt-6" />
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
                  className="border border-brandBlue-300/80 text-brandBlue-700 px-3.5 py-2 font-heading uppercase text-xs tracking-wide font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-6 py-12 md:py-16">
        <SectionHeading eyebrow={home.difference.eyebrow} title={home.difference.title} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {home.difference.items.map((item, index) => (
            <BlueprintCard key={item} className="p-6">
              <p className="text-neutral-700">{item}</p>
            </BlueprintCard>
          ))}
        </div>
      </section>

      {/* Featured services */}
      <section className="max-w-[90rem] mx-auto px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Featured Services" title="What we help you do" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <BlueprintCard key={service.slug} className="p-6">
              <Link
                to={`/services/${service.slug}`}
                className="font-heading uppercase text-xl font-bold leading-tight hover:text-brandBlue-700 transition-colors flex items-start gap-3"
              >
                <Icon name={service.slug.includes("research") ? "compass" : service.slug.includes("data") ? "database" : service.slug.includes("talent") ? "users" : service.slug.includes("training") ? "graduation" : service.slug.includes("proposal") ? "lightbulb" : "chart"} className="h-6 w-6 shrink-0 text-brandBlue-600" />
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
