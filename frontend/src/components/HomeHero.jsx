import { useState } from 'react'
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  FlaskConical,
  MapPinned,
  UserRoundCheck,
} from 'lucide-react'

const FEATURES = [
  { icon: BadgeCheck, label: 'Most Trusted by Doctors' },
  { icon: CheckCircle2, label: 'Over 1 Crore satisfied customers' },
  { icon: FlaskConical, label: 'NABL approved Labs' },
  { icon: Building2, label: '3000+ Exclusive Collection Centres' },
  { icon: UserRoundCheck, label: 'Home Collection Qualified Technicians' },
  { icon: MapPinned, label: 'PAN India Footprint' },
]

const UP_CITIES = [
  'Lucknow',
  'Kanpur',
  'Agra',
  'Varanasi',
  'Prayagraj',
  'Meerut',
  'Ghaziabad',
  'Noida',
  'Mathura',
  'Bareilly',
  'Gorakhpur',
  'Jhansi',
  'Ayodhya',
]

export default function HomeHero() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    city: '',
    consent: true,
  })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

  const handleChange = (field) => (event) => {
    const value = field === 'consent' ? event.target.checked : event.target.value
    if (field === 'mobile') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)
      setForm((prev) => ({ ...prev, [field]: digitsOnly }))
      return
    }
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setError('')

    setSubmitting(true)
    try {
      const response = await fetch(`${apiBaseUrl}/api/home-collection`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.message || 'Unable to schedule home collection')
      }

      setMessage(`Booking confirmed. ID: ${data.bookingId}`)
      setForm({
        name: '',
        mobile: '',
        city: '',
        consent: true,
      })
    } catch (submitError) {
      setError(submitError.message || 'Unable to schedule home collection')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
      <div className="grid gap-5 lg:gap-6 lg:grid-cols-[1fr_390px]">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0664ad] via-[#0b5793] to-[#0a365f] min-h-[330px] sm:min-h-[360px] p-8 sm:p-10">
          <div className="relative z-10 max-w-[520px]">
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
              Accurate Diagnosis
              <br />
              Smart Report
            </h1>

            <div className="mt-5 inline-flex rounded-xl bg-[#ffd027] px-5 py-2 text-[#1f2c3a] font-semibold text-2xl sm:text-[33px]">
              FREE with all Healthkind Packages.
            </div>

            <p className="mt-5 text-[27px] leading-snug text-blue-50 max-w-[420px]">
              Because your health deserves better understanding.
            </p>
          </div>

          <div className="absolute right-[12%] bottom-0 h-[78%] w-[210px] rounded-t-[120px] bg-gradient-to-b from-gray-100 to-gray-300 opacity-95" />
          <div className="absolute right-6 top-7 w-[150px] h-[286px] rounded-[28px] border-4 border-black bg-white shadow-2xl overflow-hidden">
            <div className="h-7 bg-[#0a5da1]" />
            <div className="p-3 space-y-2">
              <div className="h-2.5 w-16 bg-[#0a5da1]/20 rounded" />
              <div className="h-2.5 w-10 bg-[#0a5da1]/20 rounded" />
              <div className="h-1.5 w-full bg-gray-200 rounded" />
              <div className="h-1.5 w-11/12 bg-gray-200 rounded" />
              <div className="h-1.5 w-9/12 bg-gray-200 rounded" />
            </div>
          </div>
        </div>

        <aside className="rounded-[26px] bg-[#e9e9ea] shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-6 sm:p-7">
          <h2 className="text-[35px] font-extrabold text-[#292a31] mb-4">
            Schedule a Home Collection
          </h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="What's your name? *"
              value={form.name}
              onChange={handleChange('name')}
              className="w-full h-14 px-4 rounded-lg border border-gray-300 bg-white text-[24px] text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Mobile number *"
              value={form.mobile}
              onChange={handleChange('mobile')}
              inputMode="numeric"
              maxLength={10}
              pattern="[0-9]{10}"
              className="w-full h-14 px-4 rounded-lg border border-gray-300 bg-white text-[24px] text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="w-full h-14 px-4 rounded-lg border border-gray-300 bg-white text-[24px] text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
              value={form.city}
              onChange={handleChange('city')}
            >
              <option value="" disabled>
                Select Your City
              </option>
              {UP_CITIES.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>

            <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <label className="flex items-start gap-2 text-[14px] leading-[1.4] text-gray-600 max-w-[360px]">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-blue-600"
                  checked={form.consent}
                  onChange={handleChange('consent')}
                />
                <span>
                  I authorize Pathkind Labs and its affiliates/representatives to contact me via phone calls, email, RCS, SMS or WhatsApp.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="self-end sm:self-auto h-14 min-w-[130px] px-8 rounded-full border-0 text-[26px] font-semibold text-white bg-[#0e4a78] hover:bg-[#0b3f67] transition-colors"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {message && <p className="text-sm text-green-700 font-medium">{message}</p>}
            {error && <p className="text-sm text-red-700 font-medium">{error}</p>}
          </form>
        </aside>
      </div>

      <div className="flex justify-center py-6">
        <span className="h-4 w-4 rounded-full bg-[#f4bf16]" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5 pb-4">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-start gap-2.5 text-[#17171a]">
            <Icon size={28} className="mt-0.5 text-gray-700 shrink-0" strokeWidth={1.9} />
            <p className="text-[18px] leading-snug font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
