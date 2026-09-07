import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { nav, siteMeta } from "../data/content"
import logo from "../assets/logo-purple.png"

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) =>
        `font-heading uppercase text-sm font-semibold tracking-wide pb-1 border-b-2 transition-colors ${
          isActive ? "text-primary border-primary" : "text-ink border-transparent hover:text-primary"
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-primary-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-3 shrink-0" onClick={close}>
            <img src={logo} alt={siteMeta.fullName} className="h-10 w-auto" />
          </NavLink>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.primary.map((item) => (
              <NavItem key={item.path} to={item.path}>
                {item.label}
              </NavItem>
            ))}
          </nav>

          <button
            className="lg:hidden font-heading uppercase text-sm font-bold border border-ink px-3 py-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <div className={`${open ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 border-t border-primary-200/60 py-4`}>
          <nav className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* On small screens show the full nav; on large screens only the secondary set */}
            <div className="flex flex-col lg:hidden gap-4">
              {nav.primary.map((item) => (
                <NavItem key={item.path} to={item.path} onClick={close}>
                  {item.label}
                </NavItem>
              ))}
            </div>
            {nav.secondary.map((item) => (
              <NavItem key={item.path} to={item.path} onClick={close}>
                {item.label}
              </NavItem>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={close}
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-primary-700 transition-colors w-full lg:w-auto"
          >
            Discuss an assignment
          </Link>
        </div>
      </div>
    </header>
  )
}
