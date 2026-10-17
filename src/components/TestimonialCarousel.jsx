import { useEffect, useState } from "react"

const testimonials = [
  {
    quote: "Ametrine turns complex findings into clear, practical recommendations that help programme teams reflect, learn and sharpen their response to the needs of children and families.",
    name: "Dorice Munisi",
    role: "Project Manager, Lishe ya Mwanao Project, UNICEF–CRS",
  },
  {
    quote: "Ametrine delivered a thorough, well-structured assessment with rigorous analysis and clear reporting. Their attention to detail and thoughtful interpretation of sensitive social norms made the findings credible and valuable for our programming.",
    name: "Mercy Kawala",
    role: "Planning, Monitoring, Evaluation and Reporting (PMER) Lead, Norwegian Church Aid",
  },
  {
    quote: "Ametrine helped us look beyond activities and outputs to understand the difference our work makes. Their insights strengthened our focus on results, helping us connect evidence, learning and decisions to meaningful change.",
    name: "Othman Sharif Othman",
    role: "Head of M&E, World Bank-funded ZIQUE Project, Ministry of Education and Vocational Training, Zanzibar",
  },
]

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
            Perspectives from partners on how evidence and learning support stronger programme decisions.
          </p>
          <div className="flex gap-2 mt-7" aria-label="Choose testimonial">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
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
          <div className="mb-5 font-heading text-5xl leading-none text-brandBlue-500" aria-hidden="true">“</div>
          <blockquote className="text-xl md:text-2xl leading-relaxed text-primary-900">
            {testimonial.quote}
          </blockquote>
          <div className="mt-6 border-t border-brandBlue-200/70 pt-5">
            <p className="font-heading uppercase tracking-wide font-bold text-primary-700">{testimonial.name}</p>
            <p className="text-sm text-neutral-500 mt-1">{testimonial.role}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
