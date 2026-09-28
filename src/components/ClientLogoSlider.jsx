import sosLogo from "../assets/client-logos/sos.jpg"
import amrefLogo from "../assets/client-logos/amref.jpeg"
import saveTheChildrenLogo from "../assets/client-logos/save-the-children.jpeg"
import moevtLogo from "../assets/client-logos/moevt.jpeg"
import zpcLogo from "../assets/client-logos/zpc.jpeg"
import unicefLogo from "../assets/client-logos/unicef.jpeg"
import crsLogo from "../assets/client-logos/crs.jpeg"
import redgoldLogo from "../assets/client-logos/redgold.png"

const organisations = [
  { name: "UNICEF", full: "UNICEF Tanzania", logo: unicefLogo },
  { name: "Amref", full: "Amref Health Africa", logo: amrefLogo },
  { name: "SOS", full: "SOS Children's Villages Tanzania", logo: sosLogo },
  { name: "Save the Children", full: "Save the Children", logo: saveTheChildrenLogo },
  { name: "NCA", full: "Norwegian Church Aid" },
  { name: "Redgold", full: "Redgold", logo: redgoldLogo },
  { name: "MoH", full: "Ministry of Health, Tanzania" },
  { name: "MoEVT", full: "Ministry of Education and Vocational Training, Zanzibar", logo: moevtLogo },
  { name: "ZPC", full: "Zanzibar Planning Commission", logo: zpcLogo },
  { name: "CRS", full: "Catholic Relief Services", logo: crsLogo },
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
            Client names shown as text pending official logo artwork from each organisation.
          </p>
        </div>
        <div className="logo-slider overflow-hidden" aria-label="Client organisations">
          <div className="logo-slider-track flex w-max items-stretch gap-4">
            {items.map((organisation, index) => (
              <div
                key={`${organisation.name}-${index}`}
                className="flex min-h-24 w-52 shrink-0 flex-col items-center justify-center gap-1 border border-primary-200/70 bg-white px-5 text-center"
                title={organisation.full}
              >
                {organisation.logo ? (
                  <img
                    src={organisation.logo}
                    alt={organisation.full}
                    className="max-h-14 w-auto max-w-[85%] object-contain"
                  />
                ) : (
                  <>
                    <span className="font-heading uppercase tracking-wide text-lg font-bold text-primary-700">
                      {organisation.name}
                    </span>
                    <span className="text-[11px] leading-tight text-neutral-500 line-clamp-2">{organisation.full}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
