import { useParams, Link, Navigate } from "react-router-dom"
import SectionHeading from "../components/SectionHeading"
import CtaBand from "../components/CtaBand"
import { services, home } from "../data/content"

export default function Services() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to={`/services/${services[0].slug}`} replace />
  }

  const active = services.find((s) => s.slug === slug) || services[0]

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          Our Offer
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">Six services, one results cycle</h1>
        <p className="text-lg text-neutral-600 max-w-2xl">
          Select a service to read what it covers, how we deliver it and what you receive.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid lg:grid-cols-[340px_1fr] gap-12">
        <nav className="lg:sticky lg:top-24 self-start border-t border-primary-200/60">
          {services.map((service) => {
            const isActive = service.slug === active.slug
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`flex gap-4 items-baseline py-5 border-b border-primary-200/60 px-2 -mx-2 transition-colors ${
                  isActive ? "bg-primary-50 border-l-4 border-l-primary pl-3" : "hover:bg-primary-50/60"
                }`}
              >
                <span className="font-heading font-bold text-primary-500 text-sm">{service.number}</span>
                <span className="font-heading uppercase font-bold text-lg leading-tight">{service.title}</span>
              </Link>
            )
          })}
        </nav>

        <article>
          <p className="font-heading font-bold text-primary-500 mb-2">{active.number}</p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">{active.title}</h2>
          <p className="text-lg text-neutral-700 mb-10 max-w-2xl">{active.intro}</p>

          <div className="space-y-12">
            {active.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-2xl font-bold uppercase font-heading mb-5 pb-3 border-b border-primary-200/60">
                  {section.heading}
                </h3>
                {section.type === "list" ? (
                  <ul>
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 py-3 border-b border-primary-200/40 text-neutral-700"
                      >
                        <span className="text-primary-500 font-bold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-4 text-neutral-700">
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>
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
