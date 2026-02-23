import { Clock3, MapPin, Phone, Search, Share2, Store } from 'lucide-react'

const LAB_CENTERS = [
  {
    id: 1,
    name: 'PATHKIND LABS',
    type: 'Collection Center',
    rating: 4.6,
    reviews: 5,
    address: 'Plot No 415/2, Ground Road, Jangpura Road, Bhogal, South Delhi, Delhi 110014',
    area: 'Hari Nagar Ashram, South Delhi',
    phone: '+91 76782 01855',
    timing: '07:00 AM to 08:00 PM',
  },
  {
    id: 2,
    name: 'PATHKIND LABS',
    type: 'Collection Center',
    rating: 5.0,
    reviews: 2,
    address: 'Shop No 4352, Pahari Dhiraj, Sadar Bazaar, New Delhi 110006',
    area: 'Sadar Bazaar, New Delhi',
    phone: '+91 96344 59379',
    timing: '08:30 AM to 03:30 PM',
  },
  {
    id: 3,
    name: 'PATHKIND LABS',
    type: 'Collection Center',
    rating: 5.0,
    reviews: 2,
    address: 'Lucknow Road, Near Anurag Cycle Store, Bangarmau, Unnao, Uttar Pradesh 209868',
    area: 'Bangarmau, Unnao',
    phone: '+91 73554 43595',
    timing: '07:00 AM to 08:00 PM',
  },
  {
    id: 4,
    name: 'PATHKIND LABS',
    type: 'Collection Center',
    rating: 4.2,
    reviews: 10,
    address: 'Shop No 1284, Ratnalal Nagar, Opp Ahuja Nursing Home, Kanpur Nagar, Uttar Pradesh 208022',
    area: 'Ratnalal Nagar, Kanpur Nagar',
    phone: '+91 93354 81313',
    timing: '07:00 AM to 08:00 PM',
  },
  {
    id: 5,
    name: 'PATHKIND LABS',
    type: 'Collection Center',
    rating: 5.0,
    reviews: 6,
    address: '131, Block-F, Near Bhola Paints, South Delhi, Delhi 110024',
    area: 'South Delhi',
    phone: '+91 96546 48990',
    timing: '07:00 AM to 08:00 PM',
  },
  {
    id: 6,
    name: 'PATHKIND LABS',
    type: 'Lab',
    rating: 3.7,
    reviews: 3,
    address: 'J-4, Green Park Extension Road, Opposite Yupiter Hospital, Green Park, South Delhi 110016',
    area: 'Green Park, South Delhi',
    phone: '+91 84483 93149',
    timing: 'Open 24x7',
  },
]

export default function NearestLabPage() {
  return (
    <main className="w-full bg-[#f2f2f2] px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#f9cc00] text-[#1b4e7b]">
              <Store size={20} />
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#1b4e7b]">Pathokind Labs</h1>
          </div>
          <p className="text-base font-semibold text-[#324455]">Call Us: 75000 75111</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="rounded-md border border-[#d2d7dd] bg-[#f4f4f4] p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-3xl font-bold text-[#1b4e7b]">
                <Store size={18} />
                Find a Lab
              </h2>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d5e3ea] text-[#1b4e7b]">
                <MapPin size={17} />
              </span>
            </div>

            <button
              type="button"
              className="mb-4 w-full rounded-md bg-[#f9cc00] py-2 text-sm font-bold text-black"
            >
              USE MY CURRENT LOCATION
            </button>

            <div className="space-y-3">
              <select className="h-11 w-full rounded border border-[#c2cbd5] bg-white px-3 text-base text-[#5a6673]">
                <option>-- Select State --</option>
                <option>Uttar Pradesh</option>
              </select>
              <select className="h-11 w-full rounded border border-[#c2cbd5] bg-white px-3 text-base text-[#5a6673]">
                <option>-- Select City --</option>
                <option>Lucknow</option>
                <option>Kanpur</option>
                <option>Agra</option>
                <option>Varanasi</option>
              </select>
              <select className="h-11 w-full rounded border border-[#c2cbd5] bg-white px-3 text-base text-[#5a6673]">
                <option>-- Select Locality --</option>
              </select>
              <select className="h-11 w-full rounded border border-[#c2cbd5] bg-white px-3 text-base text-[#5a6673]">
                <option>-- Select Radius --</option>
                <option>2 KM</option>
                <option>5 KM</option>
                <option>10 KM</option>
              </select>
            </div>

            <div className="my-4 flex items-center gap-7 text-lg font-semibold text-[#121212]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                Labs
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                Collection Centers
              </label>
            </div>

            <button
              type="button"
              className="flex h-11 w-full items-center justify-center gap-2 rounded bg-[#1b4e7b] text-lg font-semibold text-white"
            >
              <Search size={16} />
              SEARCH
            </button>
          </div>

          <div className="flex min-h-[420px] items-end rounded-md bg-gradient-to-r from-[#cde7f9] via-[#edf3f8] to-[#f6f6f6] p-6">
            <div className="max-w-xl">
              <p className="mb-2 text-4xl font-extrabold leading-tight text-[#1b4e7b]">
                Every fever is not just a fever
              </p>
              <p className="mb-4 text-3xl font-medium text-[#2f4a61]">in monsoon it could be</p>
              <p className="mb-5 inline-block bg-[#f9cc00] px-3 py-2 text-3xl font-bold text-[#1b4e7b]">
                Malaria | Dengue | Typhoid | Chikungunya
              </p>
              <p className="text-base text-[#324455]">Get tested with Pathokind Labs to end all doubts.</p>
              <p className="mt-1 text-6xl font-black text-[#1b4e7b]">Fever Panel</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-5 bg-[#1f4f79] px-4 py-2 text-xl font-semibold text-white">
            1698 Pathkind Diagnostic Centers
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {LAB_CENTERS.map((center) => (
              <article key={center.id} className="border border-[#d4d8dd] bg-[#f7f7f7]">
                <div className="p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <p className="text-lg font-extrabold text-black">{center.name}</p>
                      <span className="inline-flex rounded-full bg-[#1f4f79] px-3 py-0.5 text-sm font-semibold text-white">
                        {center.type}
                      </span>
                    </div>
                    <button type="button" className="text-gray-800">
                      <Share2 size={18} />
                    </button>
                  </div>

                  <p className="mb-3 text-sm font-semibold text-[#1f4f79]">
                    ({center.rating.toFixed(1)}) <span className="text-[#ecb400]">★★★★★</span>{' '}
                    <span className="font-medium text-[#1f4f79]">{center.reviews} Google Reviews</span>
                  </p>

                  <div className="space-y-2 text-sm text-[#1f1f1f]">
                    <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {center.address}</p>
                    <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {center.area}</p>
                    <p className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> {center.phone}</p>
                    <p className="flex gap-2"><Clock3 size={16} className="mt-0.5 shrink-0" /> {center.timing}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-[#d4d8dd] p-2">
                  <button type="button" className="rounded bg-[#f8cd00] py-2 text-sm font-semibold text-black">
                    BOOK NOW
                  </button>
                  <button type="button" className="rounded bg-[#1f4f79] py-2 text-sm font-semibold text-white">
                    GET DIRECTION
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <nav
              aria-label="Centers pagination"
              className="inline-flex overflow-hidden rounded-md border border-[#cfd4d9] bg-white"
            >
              <button type="button" className="h-12 w-12 border-r border-[#cfd4d9] text-3xl text-[#6b7580]">
                &#171;
              </button>
              <button type="button" className="h-12 w-12 border-r border-[#cfd4d9] text-3xl text-[#6b7580]">
                &#8249;
              </button>
              <button type="button" className="h-12 w-12 border-r border-[#cfd4d9] bg-[#1b1b1b] text-xl text-white">
                1
              </button>
              <button type="button" className="h-12 w-12 border-r border-[#cfd4d9] text-xl text-[#1f1f1f]">
                2
              </button>
              <button type="button" className="h-12 w-12 border-r border-[#cfd4d9] text-xl text-[#1f1f1f]">
                3
              </button>
              <button type="button" className="h-12 w-12 border-r border-[#cfd4d9] text-3xl text-[#1f1f1f]">
                &#8250;
              </button>
              <button type="button" className="h-12 w-12 text-3xl text-[#1f1f1f]">
                &#187;
              </button>
            </nav>
          </div>
        </section>
      </div>
    </main>
  )
}
