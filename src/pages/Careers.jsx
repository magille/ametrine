import BlueprintCard from "../components/BlueprintCard"
import Button from "../components/Button"
import DuotoneImage from "../components/DuotoneImage"
import { useContent } from "../data/contentApi.jsx"

export default function Careers() {
  const { content: { careers, images } } = useContent()
  return (
    <div>
      <section className="max-w-[90rem] mx-auto px-6 pt-16 pb-8">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {careers.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">{careers.title}</h1>
        <p className="text-lg text-neutral-600 max-w-2xl">{careers.intro}</p>
      </section>

      <section className="max-w-[90rem] mx-auto px-6 pb-8">
        <DuotoneImage
          src={images?.careers || ""}
          alt="Ametrine consultants collaborate in a professional team environment"
          ratio="aspect-[16/7]"
        />
      </section>

      <section className="max-w-[90rem] mx-auto px-6 pb-16 space-y-6">
        {careers.tracks.map((track) => (
          <BlueprintCard key={track.title}>
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">{track.title}</h2>
            <p className="text-neutral-600 max-w-2xl mb-5">{track.text}</p>
            <span className="inline-block bg-primary-50 text-primary-700 px-4 py-2 font-heading uppercase text-sm font-semibold">
              {track.tag}
            </span>
          </BlueprintCard>
        ))}
      </section>

      <section className="max-w-[90rem] mx-auto px-6 pb-20">
        <BlueprintCard>
          <p className="text-lg text-neutral-700 max-w-2xl mb-6">
            {careers.closing.text.split("careers@ametrine.tz")[0]}
            <a href="mailto:careers@ametrine.tz" className="text-primary font-semibold hover:underline">
              careers@ametrine.tz
            </a>
            {careers.closing.text.split("careers@ametrine.tz")[1]}
          </p>
          <Button to="/contact" variant="primary">
            {careers.closing.cta}
          </Button>
        </BlueprintCard>
      </section>
    </div>
  )
}
