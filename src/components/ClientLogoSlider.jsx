const organisations = [
  "Government partners",
  "Donor agencies",
  "International NGOs",
  "National NGOs",
  "Research institutions",
  "Civil-society organisations",
]

export default function ClientLogoSlider() {
  const items = [...organisations, ...organisations]

  return (
    <section className="border-y border-brandBlue-200/70 py-10 md:py-12" aria-labelledby="client-organisations-title">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-7">
          <div>
            <p className="font-heading uppercase tracking-widest text-sm font-semibold text-brandBlue-600 mb-2">
              Trusted across the results cycle
            </p>
            <h2 id="client-organisations-title" className="text-3xl md:text-4xl font-bold leading-none">
              Organisations we support
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-md">
            Approved client logo artwork will be added here as permissions are confirmed.
          </p>
        </div>
        <div className="logo-slider overflow-hidden" aria-label="Client organisation categories">
          <div className="logo-slider-track flex w-max items-stretch gap-4">
            {items.map((organisation, index) => (
              <div
                key={`${organisation}-${index}`}
                className="flex min-h-20 w-52 shrink-0 items-center justify-center border border-primary-200/70 bg-white/45 px-5 text-center font-heading uppercase tracking-wide text-sm font-semibold text-primary-700"
              >
                {organisation}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
