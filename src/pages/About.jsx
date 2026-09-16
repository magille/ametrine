import SectionHeading from "../components/SectionHeading"
import BlueprintCard from "../components/BlueprintCard"
import DuotoneImage from "../components/DuotoneImage"
import CtaBand from "../components/CtaBand"
import { useContent } from "../data/contentApi.jsx"
import aboutPhoto from "../assets/photos/about.jpg"

export default function About() {
  const { content: { about, home } } = useContent()
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-12 md:pt-14 md:pb-14">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {about.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <p className="font-heading uppercase tracking-[0.24em] text-xs text-neutral-500 mb-5">MEL / Research / Quality assurance</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8">{about.story.title}</h1>
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 items-start">
          <div className="space-y-5 text-lg text-neutral-700 leading-relaxed md:pt-3">
            {about.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <DuotoneImage src={aboutPhoto} alt="Ametrine consultants supporting monitoring, evaluation and learning in Africa" ratio="aspect-[3/4]" className="max-w-sm" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-6">
        <BlueprintCard className="p-7 md:p-8">
          <p className="font-heading uppercase text-sm font-bold text-primary-500 mb-3">Vision</p>
          <p className="text-xl text-ink">{about.vision}</p>
        </BlueprintCard>
        <BlueprintCard className="p-7 md:p-8">
          <p className="font-heading uppercase text-sm font-bold text-primary-500 mb-3">Mission</p>
          <p className="text-xl text-ink">{about.mission}</p>
        </BlueprintCard>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <SectionHeading eyebrow="How We Work" title="A disciplined path from evidence to action" />
        <div className="grid md:grid-cols-2 gap-4">
          {about.approach.map((step, index) => (
            <BlueprintCard key={step} className="p-6">
              <p className="font-heading text-sm font-bold text-primary-500 mb-3">{String(index + 1).padStart(2, "0")}</p>
              <p className="text-neutral-700">{step}</p>
            </BlueprintCard>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Leadership Snapshot" title="Senior expertise, grounded in practice" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.leadershipSnapshot.map((item) => <BlueprintCard key={item} className="p-6"><p className="text-neutral-700">{item}</p></BlueprintCard>)}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading eyebrow="Our Values" title="What guides every assignment" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
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

      {/* Why choose Ametrine */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading eyebrow="Why Choose Ametrine Consulting?" title="What sets us apart" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.whyUs.map((w) => (
            <BlueprintCard key={w.number} className="p-6">
              <p className="font-heading text-sm font-bold text-primary-500 mb-3">{w.number}</p>
              <h3 className="text-xl font-bold uppercase font-heading mb-2">{w.title}</h3>
              <p className="text-neutral-600">{w.text}</p>
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
