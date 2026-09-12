import { useState } from "react"
import BlueprintCard from "../components/BlueprintCard"
import { resources, faq } from "../data/content"

export default function Resources() {
  const [tab, setTab] = useState(0)

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {resources.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">{resources.title}</h1>
        <p className="text-lg text-neutral-600 max-w-2xl mb-8">{resources.intro}</p>

        <div className="inline-flex border border-primary-200/70">
          {resources.tabs.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setTab(i)}
              className={`px-4 py-2.5 font-heading uppercase text-sm font-semibold transition-colors ${
                i !== 0 ? "border-l border-primary-200/70" : ""
              } ${tab === i ? "bg-primary text-white" : "hover:bg-primary-50"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {tab === 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold uppercase mb-8">Publications &amp; reports</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {resources.publications.map((p) => (
              <BlueprintCard key={p.title} className="p-6">
                <h3 className="text-2xl font-bold uppercase font-heading mb-3">{p.title}</h3>
                <p className="text-neutral-600 mb-5">{p.body}</p>
                <span className="inline-block border border-primary text-primary px-3 py-1 font-heading uppercase text-xs font-semibold">
                  {p.status}
                </span>
              </BlueprintCard>
            ))}
          </div>
          <p className="text-neutral-500 max-w-3xl">
            {resources.publicationsNote.split("info@ametrine.tz")[0]}
            <a href="mailto:info@ametrine.tz" className="text-primary hover:underline">
              info@ametrine.tz
            </a>
            {resources.publicationsNote.split("info@ametrine.tz")[1]}
          </p>
        </section>
      )}

      {tab === 1 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold uppercase mb-2">Blog / insights</h2>
          <p className="text-neutral-600 max-w-2xl mb-8">
            Our Insights series examines practical questions in monitoring, evaluation, research, learning and data
            use.
          </p>
          <div className="border-t border-primary-200/50">
            {resources.articles.map((title, i) => (
              <div key={title} className="grid sm:grid-cols-[60px_1fr] gap-4 py-6 border-b border-primary-200/50">
                <span className="font-heading font-bold text-primary-500">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
                  <p className="font-heading uppercase text-xs tracking-widest text-neutral-400">
                    {resources.articlesTag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {tab === 2 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold uppercase mb-8">Frequently asked questions</h2>
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
      )}

      <section className="bg-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-200 mb-4">
            {resources.closingCta.title}
          </p>
          <p className="text-primary-100 text-lg max-w-2xl mb-8">{resources.closingCta.body}</p>
          <a
            href="mailto:info@ametrine.tz?subject=Resources%20topic%20suggestion"
            className="inline-flex items-center justify-center bg-primary-200 text-primary-900 px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-white transition-colors"
          >
            {resources.closingCta.cta}
          </a>
        </div>
      </section>
    </div>
  )
}
