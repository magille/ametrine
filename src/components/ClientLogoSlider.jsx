const organisations = [
  { name: "USAID", full: "United States Agency for International Development" },
  { name: "MoH", full: "Ministry of Health, Tanzania" },
  { name: "MNH", full: "Muhimbili National Hospital" },
  { name: "PO-RALG", full: "President's Office, Regional Administration & Local Government" },
  { name: "UNICEF", full: "UNICEF Tanzania" },
  { name: "NBS", full: "National Bureau of Statistics, Tanzania" },
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
            Placeholder names shown below for layout purposes. Approved client logo artwork will replace them once permissions are confirmed.
          </p>
        </div>
        <div className="logo-slider overflow-hidden" aria-label="Client organisation categories">
          <div className="logo-slider-track flex w-max items-stretch gap-4">
            {items.map((organisation, index) => (
              <div
                key={`${organisation.name}-${index}`}
                className="flex min-h-24 w-52 shrink-0 flex-col items-center justify-center gap-1 border border-primary-200/70 bg-white/45 px-5 text-center"
                title={`${organisation.full} (placeholder)`}
              >
                <span className="font-heading uppercase tracking-wide text-lg font-bold text-primary-700">
                  {organisation.name}
                </span>
                <span className="text-[11px] leading-tight text-neutral-500 line-clamp-2">{organisation.full}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
