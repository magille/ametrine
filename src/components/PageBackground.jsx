import { useLocation } from "react-router-dom"

// Faceted, gem-cut silhouettes (not circles) so the blurred glow still reads
// as "cut stone" rather than a soft blob, in keeping with the site's
// hard-edged blueprint aesthetic (border-radius is forced to 0 site-wide).
const FACET_DIAMOND = "polygon(50% 0%, 93% 30%, 80% 92%, 20% 92%, 7% 30%)"
const FACET_KITE = "polygon(30% 0%, 70% 0%, 100% 42%, 82% 100%, 18% 100%, 0% 42%)"
const FACET_HEX = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"

function Facet({ path, className }) {
  return <div aria-hidden="true" className={`absolute blur-3xl ${className}`} style={{ clipPath: path }} />
}

// Each route gets its own arrangement of faceted, low-opacity gradients so
// every page carries a distinct but subtle "ametrine gemstone" mood.
const VARIANTS = {
  "/": [
    { path: FACET_DIAMOND, className: "top-[-14%] right-[-10%] w-[36rem] h-[36rem] rotate-6 bg-gradient-to-br from-primary-300/35 via-brandBlue-300/20 to-transparent" },
    { path: FACET_KITE, className: "bottom-[-16%] left-[-12%] w-[30rem] h-[30rem] -rotate-12 bg-gradient-to-tr from-brandBlue-400/25 via-primary-200/10 to-transparent" },
  ],
  "/about": [
    { path: FACET_KITE, className: "top-[6%] right-[-16%] w-[32rem] h-[32rem] rotate-12 bg-gradient-to-bl from-primary-400/30 via-transparent to-transparent" },
    { path: FACET_HEX, className: "bottom-[-14%] left-[4%] w-[26rem] h-[26rem] -rotate-6 bg-gradient-to-tr from-[rgba(255,173,109,0.22)] via-brandBlue-200/10 to-transparent" },
  ],
  "/services": [
    { path: FACET_HEX, className: "top-[-10%] left-[-14%] w-[30rem] h-[30rem] rotate-3 bg-gradient-to-r from-brandBlue-400/30 via-brandBlue-200/10 to-transparent" },
    { path: FACET_DIAMOND, className: "bottom-[-18%] right-[-8%] w-[34rem] h-[34rem] rotate-[24deg] bg-gradient-to-tl from-primary-300/25 via-transparent to-transparent" },
  ],
  "/sectors": [
    { path: FACET_DIAMOND, className: "top-[-8%] right-[10%] w-[24rem] h-[24rem] rotate-[18deg] bg-gradient-to-b from-primary-400/30 via-transparent to-transparent" },
    { path: FACET_KITE, className: "top-[30%] left-[-18%] w-[28rem] h-[28rem] -rotate-[24deg] bg-gradient-to-r from-brandBlue-300/25 via-transparent to-transparent" },
    { path: FACET_HEX, className: "bottom-[-16%] right-[-10%] w-[26rem] h-[26rem] rotate-12 bg-gradient-to-tl from-[rgba(255,173,109,0.18)] via-transparent to-transparent" },
  ],
  "/impact": [
    { path: FACET_HEX, className: "top-[-12%] right-[-6%] w-[34rem] h-[34rem] rotate-[10deg] bg-gradient-to-bl from-brandBlue-400/35 via-primary-200/10 to-transparent" },
    { path: FACET_DIAMOND, className: "bottom-[-14%] left-[-10%] w-[28rem] h-[28rem] -rotate-[16deg] bg-gradient-to-tr from-primary-400/30 via-transparent to-transparent" },
  ],
  "/resources": [
    { path: FACET_KITE, className: "top-[10%] right-[-14%] w-[26rem] h-[26rem] rotate-[20deg] bg-gradient-to-l from-primary-300/25 via-transparent to-transparent" },
    { path: FACET_HEX, className: "bottom-[-10%] left-[-8%] w-[24rem] h-[24rem] -rotate-6 bg-gradient-to-tr from-brandBlue-300/25 via-transparent to-transparent" },
  ],
  "/careers": [
    { path: FACET_DIAMOND, className: "top-[-10%] left-[-10%] w-[28rem] h-[28rem] rotate-12 bg-gradient-to-br from-[rgba(255,173,109,0.2)] via-primary-200/10 to-transparent" },
    { path: FACET_KITE, className: "bottom-[-18%] right-[-12%] w-[32rem] h-[32rem] -rotate-[14deg] bg-gradient-to-tl from-brandBlue-400/25 via-transparent to-transparent" },
  ],
  "/contact": [
    { path: FACET_HEX, className: "top-[-14%] right-[-8%] w-[30rem] h-[30rem] rotate-[8deg] bg-gradient-to-b from-primary-400/35 via-brandBlue-200/10 to-transparent" },
    { path: FACET_DIAMOND, className: "bottom-[-12%] left-[-14%] w-[26rem] h-[26rem] -rotate-[10deg] bg-gradient-to-tr from-brandBlue-300/20 via-transparent to-transparent" },
  ],
  default: [
    { path: FACET_DIAMOND, className: "top-[-10%] right-[-10%] w-[26rem] h-[26rem] bg-gradient-to-br from-primary-200/20 to-transparent" },
  ],
}

function getFacets(pathname) {
  if (VARIANTS[pathname]) return VARIANTS[pathname]
  const key = Object.keys(VARIANTS).find((k) => k !== "/" && k !== "default" && pathname.startsWith(k))
  return key ? VARIANTS[key] : VARIANTS.default
}

export default function PageBackground() {
  const { pathname } = useLocation()
  const facets = getFacets(pathname)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {facets.map((facet, i) => (
        <Facet key={`${pathname}-${i}`} path={facet.path} className={facet.className} />
      ))}
    </div>
  )
}
