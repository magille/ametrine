export default function DuotoneImage({ src, alt = "", className = "", light = false, ratio = "aspect-[16/9]" }) {
  return (
    <div className={`duotone ${light ? "light" : ""} ${ratio} ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  )
}
