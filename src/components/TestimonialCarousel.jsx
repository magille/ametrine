import { useEffect, useState } from "react"

const testimonials = [
  {
    quote: "Ametrine's evaluation gave our team clear, practical evidence we could act on immediately — not just a report that sat on a shelf.",
    name: "Amina Mrisho",
    role: "MEL Manager, National Malaria Programme",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "Their fieldwork was rigorous and respectful of our communities. The data quality improvements have made a real difference to our reporting.",
    name: "Juma Bakari",
    role: "Program Director, Mwanza Community Health Initiative",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "The MEL system Ametrine helped us build is now central to how we plan and learn as an organisation.",
    name: "Grace Kessy",
    role: "Head of Research, Dodoma Education Trust",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
  },
]

// randomuser.me provides stock portrait photos intended for placeholder/test
// use (not real, identifiable individuals attached to genuine claims).
// Names, roles and quotes below are fictional and clearly marked pending
// real, approved client testimonials.

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
            Placeholder names, roles and stock portraits shown below. Real client testimonials and approved photography will replace them once cleared for publication.
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
          <div className="flex items-start gap-5">
            <img
              src={testimonial.photo}
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
