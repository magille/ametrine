import SectionHeading from "../components/SectionHeading"
import BlueprintCard from "../components/BlueprintCard"
import DuotoneImage from "../components/DuotoneImage"
import CtaBand from "../components/CtaBand"
import { useContent } from "../data/contentApi.jsx"
import aboutPhoto from "../assets/photos/about.jpg"
import Icon from "../components/Icon"
import Reveal from "../components/Reveal"

export default function About() {
  const { content: { about, home, images } } = useContent()
  return (
    <div>
      <section className="max-w-[90rem] mx-auto px-6 pt-10 pb-12 md:pt-14 md:pb-14">
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
          <DuotoneImage src={images?.about || aboutPhoto} alt="Golden-hour landscape reflecting Ametrine's grounded approach to evidence and learning" ratio="aspect-[3/4]" className="max-w-sm" />
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-6">
        <BlueprintCard className="p-7 md:p-8">
          <div className="flex items-center gap-3 mb-3"><Icon name="eye" className="h-6 w-6 text-brandBlue-600" /><p className="font-heading uppercase text-sm font-bold text-primary-500">Vision</p></div>
          <p className="text-xl text-ink">{about.vision}</p>
        </BlueprintCard>
        <BlueprintCard className="p-7 md:p-8">
          <div className="flex items-center gap-3 mb-3"><Icon name="target" className="h-6 w-6 text-brandBlue-600" /><p className="font-heading uppercase text-sm font-bold text-primary-500">Mission</p></div>
          <p className="text-xl text-ink">{about.mission}</p>
        </BlueprintCard>
      </section>

      <section className="max-w-[90rem] mx-auto px-6 py-12 md:py-16">
        <SectionHeading eyebrow="How We Work" title="A disciplined path from evidence to action" />
        <div className="grid md:grid-cols-2 gap-4">
          {about.approach.map((step, index) => (
            <BlueprintCard key={step} className="p-6">
              <p className="text-neutral-700">{step}</p>
            </BlueprintCard>
          ))}
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Leadership Snapshot" title="Senior expertise, grounded in practice" />
        <DuotoneImage
          src={images?.seniorExpertise || aboutPhoto}
          alt="Ametrine consultants in a senior planning and learning session"
          ratio="aspect-[16/7]"
          className="mb-8"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.leadershipSnapshot.map((item) => <BlueprintCard key={item} className="p-6"><p className="text-neutral-700">{item}</p></BlueprintCard>)}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-[90rem] mx-auto px-6 py-16">
        <SectionHeading eyebrow="Our Values" title="What guides every assignment" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {about.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 70}>
              <div className="blueprint border border-primary-200/70 p-6 h-full">
                <i className="corner tl text-primary-300" />
                <i className="corner tr text-primary-300" />
                <i className="corner bl text-primary-300" />
                <i className="corner br text-primary-300" />
                <div className="flex items-center gap-3 mb-2"><Icon name={value.title.toLowerCase() === "integrity" ? "compass" : value.title.toLowerCase() === "excellence" ? "target" : value.title.toLowerCase() === "partnership" ? "users" : value.title.toLowerCase() === "learning" ? "lightbulb" : value.title.toLowerCase() === "innovation" ? "chart" : value.title.toLowerCase() === "inclusion" ? "users" : "eye"} className="h-6 w-6 text-brandBlue-600" /><h3 className="text-2xl font-bold uppercase font-heading">{value.title}</h3></div>
                <p className="text-neutral-600">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose Ametrine */}
      <section className="max-w-[90rem] mx-auto px-6 py-16">
        <SectionHeading eyebrow="Why Choose Ametrine Consulting?" title="What sets us apart" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.whyUs.map((w, index) => (
            <Reveal key={w.title} delay={index * 70}>
              <BlueprintCard className="p-6">
                <h3 className="text-xl font-bold uppercase font-heading mb-2">{w.title}</h3>
                <p className="text-neutral-600">{w.text}</p>
              </BlueprintCard>
            </Reveal>
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
