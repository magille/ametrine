import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { useContent } from "../data/contentApi.jsx"
import fullLogo from "../assets/ametrine-navbar-logo.jpeg"

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) =>
        `font-heading uppercase text-sm font-semibold tracking-wide pb-1 border-b-2 transition-colors ${
          isActive ? "text-brandBlue-600 border-brandBlue" : "text-ink border-transparent hover:text-brandBlue-700"
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { content: { nav } } = useContent()
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-brandBlue-200/70">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex items-center justify-between py-3 gap-4">
          <NavLink to="/" className="flex items-center shrink-0" onClick={close} aria-label="Ametrine Consulting home">
            <img
              src={fullLogo}
              alt="Ametrine Consulting"
              className="h-16 w-32 object-contain object-center mix-blend-multiply sm:h-20 sm:w-40"
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
            className="hidden lg:inline-flex items-center justify-center bg-brandBlue text-white px-5 py-2.5 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-brandBlue-700 transition-colors"
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
            className="inline-flex items-center justify-center bg-brandBlue text-white px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold hover:bg-brandBlue-700 transition-colors w-full"
          >
            Discuss an assignment
          </Link>
        </div>
      </div>
    </header>
  )
}
