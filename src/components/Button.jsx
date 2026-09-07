import { Link } from "react-router-dom"

const variants = {
  primary: "bg-primary text-white border border-primary hover:bg-primary-700 hover:border-primary-700",
  secondary: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
  ghostDark: "bg-transparent text-white border border-white/70 hover:bg-white hover:text-primary-900",
  onDark: "bg-primary-200 text-primary-900 border border-primary-200 hover:bg-white",
}

export default function Button({ to, href, onClick, variant = "primary", children, type = "button", className = "" }) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold transition-colors duration-150 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
