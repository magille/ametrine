import { Link } from "react-router-dom"
import { nav, siteMeta } from "../data/content"
import logoWhite from "../assets/logo-white.png"

export default function Footer() {
  return (
    <footer className="border-t border-primary-200/60">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <div className="bg-primary-900 w-40 h-40 flex items-center justify-center p-4 mb-6">
            <img src={logoWhite} alt={siteMeta.fullName} className="w-full h-full object-contain" />
          </div>
          <p className="text-neutral-600 max-w-xs">{siteMeta.footerTagline}</p>
        </div>

        <div>
          <p className="font-heading uppercase text-sm font-bold text-neutral-500 mb-4">Site</p>
          <ul className="space-y-3">
            {[...nav.primary, ...nav.secondary].map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-ink hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading uppercase text-sm font-bold text-neutral-500 mb-4">Contact</p>
          <ul className="space-y-3 text-ink">
            <li>
              <a href={`mailto:${siteMeta.email}`} className="text-primary hover:underline">
                {siteMeta.email}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteMeta.careersEmail}`} className="text-primary hover:underline">
                {siteMeta.careersEmail}
              </a>
            </li>
            <li>
              <a href={`tel:${siteMeta.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {siteMeta.phone}
              </a>
            </li>
            <li>{siteMeta.address}</li>
            <li>{siteMeta.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-200/60">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} {siteMeta.fullName}. All rights reserved.</p>
          <p>{siteMeta.footerSub}</p>
        </div>
      </div>
    </footer>
  )
}
