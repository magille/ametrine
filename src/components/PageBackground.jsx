import { useLocation } from "react-router-dom"

// Faceted, gem-cut point sets (not circles) so the glow reads as "cut stone"
// rather than a soft blob, in keeping with the site's hard-edged blueprint
// aesthetic (border-radius is forced to 0 site-wide). Each shape is defined
// once as a 0-100 point list so it can drive both the blurred clip-path fill
// and a crisp SVG outline stroke that traces the same facet edges.
const FACET_DIAMOND = [[50, 0], [93, 30], [80, 92], [20, 92], [7, 30]]
const FACET_KITE = [[30, 0], [70, 0], [100, 42], [82, 100], [18, 100], [0, 42]]
const FACET_HEX = [[25, 0], [75, 0], [100, 50], [75, 100], [25, 100], [0, 50]]

function toClipPath(points) {
  return `polygon(${points.map(([x, y]) => `${x}% ${y}%`).join(", ")})`
}

function toSvgPoints(points) {
  return points.map(([x, y]) => `${x},${y}`).join(" ")
}

// Split a combined utility-class string into layout (position/size), the
// rotate utility, and everything else (the gradient background classes) so
// each can be applied to the right layer: layout on the outer box, rotate on
// a static wrapper, and the gradient on the element that is actually clipped
// and blurred into the facet shape.
function splitClasses(className) {
  const tokens = className.split(/\s+/).filter(Boolean)
  const layout = []
  const rotate = []
  const gradient = []
  for (const token of tokens) {
    if (/^-?rotate-/.test(token)) rotate.push(token)
    else if (/^(top|right|bottom|left|w|h)-/.test(token)) layout.push(token)
    else gradient.push(token)
  }
  return { layout: layout.join(" "), rotate: rotate.join(" "), gradient: gradient.join(" ") }
}

function Facet({ points, className, outlineClassName, drift = "" }) {
  const { layout, rotate, gradient } = splitClasses(className)
  const clip = toClipPath(points)
  return (
    <div className={`absolute ${layout} ${rotate}`}>
      <div className={`relative h-full w-full ${drift}`}>
        <div aria-hidden="true" className={`absolute inset-0 blur-3xl ${gradient}`} style={{ clipPath: clip }} />
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className={`absolute inset-0 h-full w-full ${outlineClassName}`}
        >
          <polygon points={toSvgPoints(points)} fill="none" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  )
}

// Each route gets its own arrangement of faceted, low-opacity gradients so
// every page carries a distinct but recognisable "ametrine gemstone" mood.
const VARIANTS = {
  "/": [
    { points: FACET_DIAMOND, className: "top-[-14%] right-[-10%] w-[36rem] h-[36rem] rotate-6 bg-gradient-to-br from-primary-300/60 via-brandBlue-300/35 to-transparent", outlineClassName: "text-primary-400/40", drift: "drift-a" },
    { points: FACET_KITE, className: "bottom-[-16%] left-[-12%] w-[30rem] h-[30rem] -rotate-12 bg-gradient-to-tr from-brandBlue-400/50 via-primary-200/25 to-transparent", outlineClassName: "text-brandBlue-500/40", drift: "drift-b" },
  ],
  "/about": [
    { points: FACET_KITE, className: "top-[6%] right-[-16%] w-[32rem] h-[32rem] rotate-12 bg-gradient-to-bl from-primary-400/55 via-transparent to-transparent", outlineClassName: "text-primary-400/40", drift: "drift-b" },
    { points: FACET_HEX, className: "bottom-[-14%] left-[4%] w-[26rem] h-[26rem] -rotate-6 bg-gradient-to-tr from-[rgba(255,173,109,0.4)] via-brandBlue-200/20 to-transparent", outlineClassName: "text-[rgba(255,173,109,0.55)]", drift: "drift-a" },
  ],
  "/services": [
    { points: FACET_HEX, className: "top-[-10%] left-[-14%] w-[30rem] h-[30rem] rotate-3 bg-gradient-to-r from-brandBlue-400/55 via-brandBlue-200/25 to-transparent", outlineClassName: "text-brandBlue-500/40", drift: "drift-a" },
    { points: FACET_DIAMOND, className: "bottom-[-18%] right-[-8%] w-[34rem] h-[34rem] rotate-[24deg] bg-gradient-to-tl from-primary-300/50 via-transparent to-transparent", outlineClassName: "text-primary-400/40", drift: "drift-b" },
  ],
  "/sectors": [
    { points: FACET_DIAMOND, className: "top-[-8%] right-[10%] w-[24rem] h-[24rem] rotate-[18deg] bg-gradient-to-b from-primary-400/55 via-transparent to-transparent", outlineClassName: "text-primary-400/40", drift: "drift-a" },
    { points: FACET_KITE, className: "top-[30%] left-[-18%] w-[28rem] h-[28rem] -rotate-[24deg] bg-gradient-to-r from-brandBlue-300/50 via-transparent to-transparent", outlineClassName: "text-brandBlue-500/40", drift: "drift-b" },
    { points: FACET_HEX, className: "bottom-[-16%] right-[-10%] w-[26rem] h-[26rem] rotate-12 bg-gradient-to-tl from-[rgba(255,173,109,0.35)] via-transparent to-transparent", outlineClassName: "text-[rgba(255,173,109,0.5)]", drift: "drift-a" },
  ],
  "/impact": [
    { points: FACET_HEX, className: "top-[-12%] right-[-6%] w-[34rem] h-[34rem] rotate-[10deg] bg-gradient-to-bl from-brandBlue-400/60 via-primary-200/25 to-transparent", outlineClassName: "text-brandBlue-500/40", drift: "drift-b" },
    { points: FACET_DIAMOND, className: "bottom-[-14%] left-[-10%] w-[28rem] h-[28rem] -rotate-[16deg] bg-gradient-to-tr from-primary-400/55 via-transparent to-transparent", outlineClassName: "text-primary-400/40", drift: "drift-a" },
  ],
  "/resources": [
    { points: FACET_KITE, className: "top-[10%] right-[-14%] w-[26rem] h-[26rem] rotate-[20deg] bg-gradient-to-l from-primary-300/50 via-transparent to-transparent", outlineClassName: "text-primary-400/40", drift: "drift-a" },
    { points: FACET_HEX, className: "bottom-[-10%] left-[-8%] w-[24rem] h-[24rem] -rotate-6 bg-gradient-to-tr from-brandBlue-300/50 via-transparent to-transparent", outlineClassName: "text-brandBlue-500/40", drift: "drift-b" },
  ],
  "/careers": [
    { points: FACET_DIAMOND, className: "top-[-10%] left-[-10%] w-[28rem] h-[28rem] rotate-12 bg-gradient-to-br from-[rgba(255,173,109,0.4)] via-primary-200/20 to-transparent", outlineClassName: "text-[rgba(255,173,109,0.55)]", drift: "drift-a" },
    { points: FACET_KITE, className: "bottom-[-18%] right-[-12%] w-[32rem] h-[32rem] -rotate-[14deg] bg-gradient-to-tl from-brandBlue-400/50 via-transparent to-transparent", outlineClassName: "text-brandBlue-500/40", drift: "drift-b" },
  ],
  "/contact": [
    { points: FACET_HEX, className: "top-[-14%] right-[-8%] w-[30rem] h-[30rem] rotate-[8deg] bg-gradient-to-b from-primary-400/55 via-brandBlue-200/25 to-transparent", outlineClassName: "text-primary-400/40", drift: "drift-a" },
    { points: FACET_DIAMOND, className: "bottom-[-12%] left-[-14%] w-[26rem] h-[26rem] -rotate-[10deg] bg-gradient-to-tr from-brandBlue-300/45 via-transparent to-transparent", outlineClassName: "text-brandBlue-500/40", drift: "drift-b" },
  ],
  default: [
    { points: FACET_DIAMOND, className: "top-[-10%] right-[-10%] w-[26rem] h-[26rem] bg-gradient-to-br from-primary-200/40 to-transparent", outlineClassName: "text-primary-400/35" },
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
      {/* Faint, persistent gem-cut line mesh present on every page for a unifying "ametrine" texture */}
      <svg className="absolute inset-0 h-full w-full text-primary-400/[0.08]" aria-hidden="true">
        <defs>
          <pattern id="gem-facets" width="180" height="180" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
            <polygon points="90,0 180,60 144,180 36,180 0,60" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="90" y1="0" x2="90" y2="180" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gem-facets)" />
      </svg>

      {facets.map((facet, i) => (
        <Facet
          key={`${pathname}-${i}`}
          points={facet.points}
          className={facet.className}
          outlineClassName={facet.outlineClassName}
          drift={facet.drift}
        />
      ))}
    </div>
  )
}
