import SectionHeading from "../components/SectionHeading"
import BlueprintCard from "../components/BlueprintCard"
import SpecSheet from "../components/SpecSheet"
import DuotoneImage from "../components/DuotoneImage"
import CtaBand from "../components/CtaBand"
import { about, home } from "../data/content"
import aboutPhoto from "../assets/photos/about.jpg"

export default function About() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {about.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-8">{about.story.title}</h1>
        <div className="grid md:grid-cols-2 gap-10 text-neutral-700 text-lg mb-16">
          <div className="space-y-5">
            <p>{about.story.paragraphs[0]}</p>
            <p>{about.story.paragraphs[1]}</p>
          </div>
          <div className="space-y-5">
            <p>{about.story.paragraphs[2]}</p>
          </div>
        </div>
      </section>

      <DuotoneImage src={aboutPhoto} alt="Infrastructure and systems in Tanzania" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-8">
        <BlueprintCard>
          <p className="font-heading uppercase text-sm font-bold text-primary-500 mb-3">Vision</p>
          <p className="text-xl text-ink">{about.vision}</p>
        </BlueprintCard>
        <BlueprintCard>
          <p className="font-heading uppercase text-sm font-bold text-primary-500 mb-3">Mission</p>
          <p className="text-xl text-ink">{about.mission}</p>
        </BlueprintCard>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading eyebrow="Our Values" title="What guides every assignment" />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
          {about.values.map((value) => (
            <div key={value.title} className="blueprint border border-primary-200/70 p-6">
              <i className="corner tl text-primary-300" />
              <i className="corner tr text-primary-300" />
              <i className="corner bl text-primary-300" />
              <i className="corner br text-primary-300" />
              <h3 className="text-2xl font-bold uppercase font-heading mb-2">{value.title}</h3>
              <p className="text-neutral-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading eyebrow="Our Method" title={about.howWeWork.title} />
        <div className="divide-y divide-primary-200/50 border-t border-primary-200/50">
          {about.howWeWork.steps.map((step, i) => (
            <div key={step.title} className="grid sm:grid-cols-[60px_1fr] gap-4 py-6">
              <span className="font-heading font-bold text-primary-500">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-bold uppercase font-heading mb-1">{step.title}</h3>
                <p className="text-neutral-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading eyebrow="Our People" title={about.leadership.title} />
        <SpecSheet
          title={about.leadership.title}
          meta={about.leadership.meta}
          sheet={about.leadership.sheet}
          rows={about.leadership.rows}
        />
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
