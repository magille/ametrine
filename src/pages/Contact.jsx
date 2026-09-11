import { useState } from "react"
import BlueprintCard from "../components/BlueprintCard"
import Button from "../components/Button"
import { contact } from "../data/content"

const initialForm = {
  fullName: "",
  organisation: "",
  email: "",
  phone: "",
  supportType: contact.form.supportTypes[0],
  location: "",
  startDate: "",
  deadline: "",
  description: "",
  consent: false,
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: This form is not yet wired to a backend or email service.
    // Connect it to a provider such as Formspree, EmailJS, or your own
    // API endpoint before going live — see the project README.
    console.log("Inquiry submitted", form)
    setSubmitted(true)
  }

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <p className="font-heading uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
          {contact.eyebrow}
        </p>
        <div className="h-px w-full bg-primary-200/60 mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">{contact.title}</h1>
        <p className="text-lg text-neutral-600 max-w-2xl">{contact.body}</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <BlueprintCard className="h-fit">
          <p className="font-heading uppercase text-sm font-bold text-primary-500 mb-6">{contact.details.title}</p>
          <dl className="divide-y divide-primary-200/50">
            {contact.details.rows.map((row) => (
              <div key={row.label} className="py-4 first:pt-0">
                <dt className="font-heading uppercase text-xs tracking-widest text-neutral-400 mb-1">
                  {row.label}
                </dt>
                <dd className="text-lg font-bold text-ink">
                  {row.href ? (
                    <a href={row.href} className="hover:text-primary transition-colors">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </BlueprintCard>

        <div>
          {submitted ? (
            <BlueprintCard>
              <h2 className="text-2xl font-bold uppercase mb-4">{contact.form.confirmation.title}</h2>
              <p className="text-neutral-700">{contact.form.confirmation.body}</p>
            </BlueprintCard>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full name" required>
                  <input
                    required
                    value={form.fullName}
                    onChange={update("fullName")}
                    className="input"
                    type="text"
                  />
                </Field>
                <Field label="Organisation and job title" required>
                  <input
                    required
                    value={form.organisation}
                    onChange={update("organisation")}
                    className="input"
                    type="text"
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Email address" required>
                  <input
                    required
                    value={form.email}
                    onChange={update("email")}
                    className="input"
                    type="email"
                  />
                </Field>
                <Field label="Telephone (optional)">
                  <input value={form.phone} onChange={update("phone")} className="input" type="tel" />
                </Field>
              </div>

              <Field label="Type of support required">
                <select value={form.supportType} onChange={update("supportType")} className="input">
                  {contact.form.supportTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Country / assignment location">
                <input
                  value={form.location}
                  onChange={update("location")}
                  className="input"
                  type="text"
                  placeholder="e.g. Tanzania — Mwanza"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Preferred start date">
                  <input value={form.startDate} onChange={update("startDate")} className="input" type="date" />
                </Field>
                <Field label="Deadline">
                  <input value={form.deadline} onChange={update("deadline")} className="input" type="date" />
                </Field>
              </div>

              <Field label="Brief description of the need">
                <textarea
                  value={form.description}
                  onChange={update("description")}
                  className="input min-h-[140px]"
                  placeholder="Objectives, expected deliverables, timeline and budget parameters where available"
                />
              </Field>

              <label className="flex items-start gap-3 text-neutral-700">
                <input
                  required
                  type="checkbox"
                  checked={form.consent}
                  onChange={update("consent")}
                  className="mt-1"
                />
                <span>
                  I consent to Ametrine processing this information in line with the{" "}
                  <a href="mailto:info@ametrine.tz" className="text-primary underline">
                    privacy notice
                  </a>
                  .
                </span>
              </label>

              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Submit inquiry
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block font-heading uppercase text-xs tracking-widest text-neutral-500 mb-2">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  )
}
