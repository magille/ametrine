import { Link } from "react-router-dom"

const variants = {
  primary: "bg-primary text-white border border-primary hover:bg-brandBlue-700 hover:border-brandBlue-700",
  secondary: "bg-transparent text-primary border border-primary hover:bg-brandBlue hover:text-white hover:border-brandBlue",
  ghostDark: "bg-transparent text-white border border-white/70 hover:bg-brandBlue hover:text-white hover:border-brandBlue",
  onDark: "bg-brandBlue-100 text-brandBlue-900 border border-brandBlue-100 hover:bg-white",
}

export default function Button({ to, href, onClick, variant = "primary", children, type = "button", className = "", disabled = false }) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold transition-colors duration-150 ${variants[variant]} ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`

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
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
