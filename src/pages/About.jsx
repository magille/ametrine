import SectionHeading from "../components/SectionHeading"
import BlueprintCard from "../components/BlueprintCard"
import DuotoneImage from "../components/DuotoneImage"
import CtaBand from "../components/CtaBand"
import { about, home } from "../data/content"
import aboutPhoto from "../assets/photos/about.jpg"

function LeaderAvatar() {
  return (
    <div className="duotone aspect-[4/5] flex items-center justify-center bg-primary-50">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary-300">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {about.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-8">{about.story.title}</h1>
        <p className="text-lg text-neutral-700 max-w-3xl mb-16">{about.story.paragraph}</p>
      </section>

      <DuotoneImage src={aboutPhoto} alt="Infrastructure and systems in Tanzania" />

      {/* Leadership team */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading eyebrow="Our People" title="Leadership team" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {about.leaders.map((l) => (
            <BlueprintCard key={l.id} className="p-0 overflow-hidden">
              <LeaderAvatar />
              <div className="p-6">
                <h3 className="text-2xl font-bold uppercase font-heading mb-1">{l.name}</h3>
                <p className="font-heading uppercase text-sm font-semibold text-primary-600 mb-3">{l.title}</p>
                <p className="text-neutral-600 mb-5">{l.bio}</p>
                <div className="pt-4 border-t border-primary-200/50">
                  <a href={`mailto:${l.email}`} className="text-primary text-sm font-semibold hover:underline break-all">
                    {l.email}
                  </a>
                </div>
              </div>
            </BlueprintCard>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <BlueprintCard>
          <p className="font-heading uppercase text-sm font-bold text-primary-500 mb-3">Vision</p>
          <p className="text-xl text-ink">{about.vision}</p>
        </BlueprintCard>
        <BlueprintCard>
          <p className="font-heading uppercase text-sm font-bold text-primary-500 mb-3">Mission</p>
          <p className="text-xl text-ink">{about.mission}</p>
        </BlueprintCard>
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
