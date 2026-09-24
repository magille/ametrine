import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { useContent } from "../data/contentApi.jsx"
import fullLogo from "../assets/ametrine-navbar-logo.jpeg"
import Icon from "./Icon"

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) =>
        `font-heading uppercase text-sm font-semibold tracking-wide pb-1 border-b-2 transition-colors ${
          isActive ? "text-primary border-primary" : "text-ink border-transparent hover:text-brandBlue-700"
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { content: { nav, siteMeta } } = useContent()
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-brandBlue-200/70 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_24px_-16px_rgba(74,27,158,0.35)]" : ""
      }`}
    >
      <div className="border-b border-brandBlue-100/70">
        <div className="max-w-[90rem] mx-auto px-6 py-1.5 flex items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2 text-brandBlue-700">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="instagram" className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center gap-4">
          <a
            href={`mailto:${siteMeta.email}`}
            className="inline-flex items-center gap-1.5 text-brandBlue-700 hover:text-primary transition-colors"
          >
            <Icon name="mail" className="h-3.5 w-3.5" />
            {siteMeta.email}
          </a>
          <a
            href={`tel:${siteMeta.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 text-brandBlue-700 hover:text-primary transition-colors"
          >
            <Icon name="phone" className="h-3.5 w-3.5" />
            {siteMeta.phone}
          </a>
          </div>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex items-center justify-between py-3 gap-4">
          <NavLink to="/" className="flex items-center shrink-0" onClick={close} aria-label="Ametrine Consulting home">
            <img
              src={fullLogo}
              alt="Ametrine Consulting"
              className="h-20 w-20 object-contain object-center mix-blend-multiply sm:h-24 sm:w-24"
            />
          </NavLink>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.items.map((item) => (
              <NavItem key={item.path} to={item.path}>
                {item.label}
              </NavItem>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center justify-center bg-primary text-white px-5 py-2.5 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-brandBlue-700 transition-colors"
          >
            Discuss an assignment
          </Link>

          <button
            className="lg:hidden font-heading uppercase text-sm font-bold border border-ink px-3 py-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <div className={`${open ? "flex" : "hidden"} lg:hidden flex-col gap-4 border-t border-brandBlue-200/70 py-4`}>
          <nav className="flex flex-col gap-4">
            {nav.items.map((item) => (
              <NavItem key={item.path} to={item.path} onClick={close}>
                {item.label}
              </NavItem>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={close}
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-brandBlue-700 transition-colors w-full"
          >
            Discuss an assignment
          </Link>
        </div>
      </div>
    </header>
  )
}
