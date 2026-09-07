import SectionHeading from "../components/SectionHeading"
import { insights, faq } from "../data/content"

export default function Insights() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {insights.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">{insights.title}</h1>
        <p className="text-lg text-neutral-600 max-w-2xl">{insights.intro}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="border-t border-primary-200/50">
          {insights.articles.map((title, i) => (
            <div key={title} className="grid sm:grid-cols-[60px_1fr] gap-4 py-6 border-b border-primary-200/50">
              <span className="font-heading font-bold text-primary-500">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
                <p className="font-heading uppercase text-xs tracking-widest text-neutral-400">{insights.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-200 mb-4">
            {insights.resourceCta.title}
          </p>
          <p className="text-primary-100 text-lg max-w-2xl mb-8">{insights.resourceCta.body}</p>
          <a
            href="mailto:info@ametrine.tz?subject=Insights%20topic%20suggestion"
            className="inline-flex items-center justify-center bg-primary-200 text-primary-900 px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-white transition-colors"
          >
            {insights.resourceCta.cta}
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading eyebrow="Helpful Answers" title="Frequently Asked Questions" />
        <div className="border-t border-primary-200/50">
          {faq.map((item, i) => (
            <details key={item.q} className="group border-b border-primary-200/50 py-5">
              <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                <span className="flex gap-4">
                  <span className="font-heading font-bold text-primary-500 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-bold">{item.q}</span>
                </span>
                <span className="font-heading text-2xl text-primary-500 shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-neutral-600 mt-4 sm:ml-[52px] max-w-2xl">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
