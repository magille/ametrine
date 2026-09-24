import { useEffect, useState } from "react"
import Icon from "./Icon"
import Reveal from "./Reveal"
import fieldworkPhoto from "../assets/gallery/fieldwork.jpeg"
import workshopPhoto from "../assets/gallery/workshop.jpeg"
import leadershipPhoto from "../assets/gallery/leadership.jpeg"
import communityPhoto from "../assets/gallery/community.jpeg"

const items = [
  { label: "Fieldwork and data collection", icon: "compass", photo: fieldworkPhoto },
  { label: "Client workshops and training", icon: "graduation", photo: workshopPhoto },
  { label: "Team and leadership", icon: "users", photo: leadershipPhoto },
  { label: "Evaluation and learning sessions", icon: "chart" },
  { label: "Community and stakeholder engagement", icon: "network", photo: communityPhoto },
  { label: "Reporting and dissemination", icon: "database" },
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (openIndex === null) return undefined
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null)
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % items.length)
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + items.length) % items.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [openIndex])

  const active = openIndex !== null ? items[openIndex] : null

  return (
    <section className="max-w-[90rem] mx-auto px-6 py-12 md:py-16" aria-labelledby="gallery-title">
      <p className="font-heading uppercase tracking-widest text-sm font-semibold text-brandBlue-600 mb-3">
        Behind the work
      </p>
      <div className="h-px w-full bg-brandBlue-200/70 mb-6" />
      <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold leading-[0.95] mb-3">Gallery</h2>
      <p className="text-neutral-600 max-w-2xl mb-8">
        A look at Ametrine at work: fieldwork, client workshops and team moments from recent assignments.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 70}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className={`duotone light group relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden border border-primary-200/70 px-5 text-center ${item.photo ? "" : "bg-white/45"}`}
              aria-label={item.photo ? `View photo: ${item.label}` : `View placeholder for ${item.label}`}
            >
              {item.photo ? (
                <>
                  <img
                    src={item.photo}
                    alt={item.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <p className="relative font-heading uppercase tracking-wide text-sm font-semibold text-white drop-shadow">{item.label}</p>
                </>
              ) : (
                <>
                  <Icon name={item.icon} className="h-10 w-10 text-brandBlue-600 transition-transform group-hover:scale-110" />
                  <p className="font-heading uppercase tracking-wide text-sm font-semibold text-primary-700">{item.label}</p>
                </>
              )}
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 px-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col items-center justify-center gap-5 border border-brandBlue-300 bg-paper p-6 md:p-10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute right-3 top-3 font-heading text-sm font-bold uppercase text-primary-600 hover:text-brandBlue-700"
            >
              Close
            </button>
            {active.photo ? (
              <img src={active.photo} alt={active.label} className="max-h-[55vh] w-auto object-contain" />
            ) : (
              <Icon name={active.icon} className="h-16 w-16 text-brandBlue-600" />
            )}
            <p className="font-heading uppercase tracking-wide text-lg font-bold text-primary-700">{active.label}</p>
            {!active.photo && (
              <p className="text-sm text-neutral-500 max-w-sm">
                Approved photography for this category will replace this placeholder once available.
              </p>
            )}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setOpenIndex((openIndex - 1 + items.length) % items.length)}
                className="font-heading uppercase text-sm font-semibold text-primary-600 hover:text-brandBlue-700"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={() => setOpenIndex((openIndex + 1) % items.length)}
                className="font-heading uppercase text-sm font-semibold text-primary-600 hover:text-brandBlue-700"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
