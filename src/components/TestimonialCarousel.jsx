import { useEffect, useState } from "react"

const testimonials = [
  {
    quote: "Approved client testimonial coming soon. This space is ready for a verified quote about Ametrine's work.",
    name: "Client testimonial",
    role: "Name and role to be supplied",
    seed: "ametrine-testimonial-1",
  },
  {
    quote: "Approved client testimonial coming soon. Add a concise, attributable reflection on the value of the assignment here.",
    name: "Client testimonial",
    role: "Name and role to be supplied",
    seed: "ametrine-testimonial-2",
  },
  {
    quote: "Approved client testimonial coming soon. The carousel supports longer quotes while keeping the homepage focused.",
    name: "Client testimonial",
    role: "Name and role to be supplied",
    seed: "ametrine-testimonial-3",
  },
]

// DiceBear (free, open-source, no key required) generates a stable
// illustrated avatar per seed. These are clearly stylised placeholder
// portraits, not photos of real people, so they can't be mistaken for
// genuine client endorsements before real, approved photos are supplied.
function avatarUrl(seed) {
  return `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}&backgroundColor=e4d8f7,d9f3ee`
}

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [paused])

  const testimonial = testimonials[active]

  return (
    <section
      className="max-w-[90rem] mx-auto px-6 py-12 md:py-16"
      aria-labelledby="testimonials-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-16 items-center">
        <div>
          <p className="font-heading uppercase tracking-widest text-sm font-semibold text-brandBlue-600 mb-3">
            Voices from the field
          </p>
          <div className="h-px w-full bg-brandBlue-200/70 mb-6" />
          <h2 id="testimonials-title" className="text-4xl md:text-5xl font-bold leading-[0.95]">
            Client perspectives
          </h2>
          <p className="mt-5 text-neutral-600 max-w-md">
            Illustrated placeholder portraits shown below. Verified client stories and approved photography will replace them once cleared for publication.
          </p>
          <div className="flex gap-2 mt-7" aria-label="Choose testimonial">
            {testimonials.map((item, index) => (
              <button
                key={item.seed}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                className={`h-2.5 w-10 border transition-colors ${
                  active === index ? "bg-primary border-primary" : "bg-transparent border-primary-300 hover:bg-brandBlue-200"
                }`}
              />
            ))}
          </div>
        </div>

        <article className="blueprint border-primary-200/70 bg-white/45 p-7 md:p-10" aria-live="polite">
          <div className="flex items-start gap-5">
            <img
              src={avatarUrl(testimonial.seed)}
              alt=""
              aria-hidden="true"
              className="h-20 w-20 shrink-0 border border-brandBlue-300 bg-brandBlue-100/60 object-cover"
            />
            <div>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-primary-900">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-6 font-heading uppercase tracking-wide font-bold text-primary-700">{testimonial.name}</p>
              <p className="text-sm text-neutral-500 mt-1">{testimonial.role}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
