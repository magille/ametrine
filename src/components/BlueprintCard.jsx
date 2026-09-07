export default function BlueprintCard({ children, className = "" }) {
  return (
    <div className={`blueprint border border-primary-200/70 text-primary-600 p-8 ${className}`}>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
      <div className="text-ink">{children}</div>
    </div>
  )
}
