import { useState } from "react"
import { useContent } from "../data/contentApi.jsx"

const slots = [
  { key: "hero", label: "Home hero", hint: "Sunrise, landscape, or lead image" },
  { key: "about", label: "About page", hint: "Story or golden-hour image" },
  { key: "impact", label: "Impact page", hint: "Sunset or contribution image" },
]

export default function Admin() {
  const { content, refresh } = useContent()
  const [token, setToken] = useState(() => sessionStorage.getItem("ametrine_admin_token") || "")
  const [files, setFiles] = useState({})
  const [urls, setUrls] = useState(content.images || {})
  const [status, setStatus] = useState("")
  const [busy, setBusy] = useState(false)

  const upload = async (slot) => {
    const file = files[slot]
    if (!file) return
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    if (!cloudName || !preset) {
      setStatus("Cloudinary is not configured. Add the cloud name and unsigned upload preset to the deployment environment.")
      return
    }

    setBusy(true)
    setStatus(`Uploading ${slot}...`)
    try {
      const body = new FormData()
      body.append("file", file)
      body.append("upload_preset", preset)
      body.append("folder", "ametrine")
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: "POST", body })
      if (!response.ok) throw new Error("Cloudinary upload failed.")
      const result = await response.json()
      setUrls((current) => ({ ...current, [slot]: result.secure_url }))
      setStatus(`${slot} uploaded. Save changes to publish it.`)
    } catch (error) {
      setStatus(error.message)
    } finally {
      setBusy(false)
    }
  }

  const save = async (event) => {
    event.preventDefault()
    if (!token.trim()) {
      setStatus("Enter the admin token before saving.")
      return
    }
    setBusy(true)
    setStatus("Saving image URLs...")
    try {
      const response = await fetch("/api/content.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token.trim()}` },
        body: JSON.stringify({ images: urls }),
      })
      if (!response.ok) throw new Error((await response.text()) || "Unable to save image URLs.")
      sessionStorage.setItem("ametrine_admin_token", token.trim())
      await refresh()
      setStatus("Published. The website now uses the new images.")
    } catch (error) {
      setStatus(error.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
      <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">Content management</p>
      <div className="h-px w-full bg-primary-200/60 mb-8" />
      <h1 className="text-5xl md:text-6xl font-bold leading-[0.9] mb-5">Update website images</h1>
      <p className="text-lg text-neutral-600 max-w-2xl mb-10">
        Upload a replacement to Cloudinary, then publish the image URL to the live content feed. This page never exposes your Cloudinary API secret.
      </p>

      <form onSubmit={save} className="space-y-6">
        {slots.map((slot) => (
          <div key={slot.key} className="blueprint border border-primary-200/70 p-6">
            <h2 className="text-xl font-bold uppercase mb-1">{slot.label}</h2>
            <p className="text-neutral-500 mb-4">{slot.hint}</p>
            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setFiles((current) => ({ ...current, [slot.key]: event.target.files?.[0] }))} />
            <button type="button" disabled={busy || !files[slot.key]} onClick={() => upload(slot.key)} className="mt-4 border border-ink px-4 py-2 font-heading uppercase text-sm font-semibold disabled:opacity-40">
              Upload image
            </button>
            {urls[slot.key] && <img src={urls[slot.key]} alt="" className="mt-5 h-32 w-full object-cover" />}
          </div>
        ))}

        <label className="block">
          <span className="font-heading uppercase text-sm font-semibold">Admin token</span>
          <input type="password" value={token} onChange={(event) => setToken(event.target.value)} className="input mt-2" autoComplete="current-password" />
        </label>
        <button type="submit" disabled={busy} className="bg-primary text-white px-6 py-3 font-heading uppercase tracking-wide text-sm font-semibold disabled:opacity-50">
          Publish image changes
        </button>
        {status && <p role="status" className="text-neutral-600">{status}</p>}
      </form>
    </section>
  )
}
