import { useParams, Link, Navigate } from "react-router-dom"
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
          What Ametrine Offers
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
          <p className="font-heading font-bold text-primary-500 mb-2">Service {active.number}</p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">{active.title}</h2>
          <p className="text-lg text-neutral-700 mb-10 max-w-2xl">{active.lede}</p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold uppercase font-heading mb-5 pb-3 border-b border-primary-200/60">
                {active.listTitle}
              </h3>
              <ul>
                {active.items.map((item, i) => (
                  <li key={i} className="flex gap-3 py-3 border-b border-primary-200/40 text-neutral-700">
                    <span className="text-primary-500 font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {active.note && (
              <div>
                <h3 className="text-2xl font-bold uppercase font-heading mb-5 pb-3 border-b border-primary-200/60">
                  {active.noteTitle}
                </h3>
                <p className="text-neutral-700 max-w-3xl">{active.note}</p>
              </div>
            )}

            {active.deliverables.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold uppercase font-heading mb-5">Typical deliverables</h3>
                <div className="blueprint border border-primary-200/70">
                  <i className="corner tl text-primary-300" />
                  <i className="corner tr text-primary-300" />
                  <i className="corner bl text-primary-300" />
                  <i className="corner br text-primary-300" />
                  <table className="w-full text-sm">
                    <tbody>
                      {active.deliverables.map((d, i) => (
                        <tr key={i} className="border-b border-primary-200/40 last:border-0">
                          <td className="w-16 py-3 pl-5 font-heading font-bold text-primary-600 align-top">
                            {String(i + 1).padStart(2, "0")}
                          </td>
                          <td className="py-3 pr-5 text-neutral-700">{d}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              Discuss this service
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center bg-transparent text-ink border border-ink px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-ink hover:text-white transition-colors"
            >
              Browse resources
            </Link>
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
