import { useEffect, useRef, useState } from "react"

// Auto-rotating image slider with a crossfade + subtle Ken Burns zoom.
// Respects prefers-reduced-motion by disabling the zoom and speeding up the fade.
export default function ImageSlider({ images, ratio = "aspect-[16/7]", interval = 4500, light = false }) {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!images || images.length <= 1) return undefined
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, interval)
    return () => window.clearInterval(timerRef.current)
  }, [images, interval])

  if (!images || images.length === 0) return null

  return (
    <div
      className={`duotone ${light ? "light" : ""} ${ratio} relative overflow-hidden`}
      role="group"
      aria-label="Sector experience photo slider"
    >
      {images.map((img, index) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt || ""}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            index === active ? "opacity-100 img-kenburns" : "opacity-0"
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 z-10 flex gap-2">
          {images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === active}
              className={`h-2.5 w-2.5 border border-white/80 transition-colors ${
                index === active ? "bg-white" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
