import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'

const PACKAGES = [
  {
    name: 'PATHOTEST TOTAL PLUS',
    profiles: 12,
    tests: 15,
    params: 87,
    oldPrice: 8525,
    newPrice: 2249,
    discount: 74,
  },
  {
    name: 'PATHOTEST ADVANCE',
    profiles: 15,
    tests: 19,
    params: 97,
    oldPrice: 11915,
    newPrice: 4999,
    discount: 58,
  },
  {
    name: 'PATHOTEST PLATINUM',
    profiles: 16,
    tests: 21,
    params: 99,
    oldPrice: 13855,
    newPrice: 5999,
    discount: 57,
  },
  {
    name: 'PATHOTEST COMPLETE',
    profiles: 13,
    tests: 17,
    params: 92,
    oldPrice: 10065,
    newPrice: 3299,
    discount: 67,
  },
]

function formatInr(value) {
  return `₹${value}`
}

export default function WellnessPackagesSection() {
  return (
    <section className="w-full pt-8 sm:pt-10 pb-20">
      <div className="flex items-center justify-between mb-5 sm:mb-7">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2b2d37]">Top Wellness Packages</h2>
        <button className="h-10 px-7 rounded-full bg-[#194b76] text-white font-semibold text-sm border-0">
          View All
        </button>
      </div>

      <div className="relative">
        <button
          type="button"
          className="hidden xl:flex absolute -left-9 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#194b76] text-[#194b76] bg-white"
          aria-label="Previous packages"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {PACKAGES.map((item) => (
            <article key={item.name} className="rounded-2xl border border-gray-300 bg-[#f2f2f3] overflow-hidden">
              <div className="h-36 bg-gradient-to-r from-[#e6edf5] to-[#f4f4f4] relative">
                <div className="absolute top-2 right-2 text-[10px] font-bold text-[#0a5da1]">
                  smart report included
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#3a3b43] mb-2">{item.name}</h3>
                <p className="text-sm text-[#2d2f36]">
                  {item.profiles} Profiles , {item.tests} Tests and {item.params} Parameters
                </p>
                <p className="mt-1 text-sm text-[#2d2f36]">Gender : (Recommended for Male,Female)</p>

                <label className="mt-2 flex items-center gap-2 text-xl text-[#2d2f36]">
                  <input type="checkbox" className="h-4 w-4" />
                  compare
                </label>

                <div className="mt-3 border border-dashed border-[#194b76] p-2 flex items-center gap-2">
                  <span className="text-[#eb3f3f] line-through text-xl">{formatInr(item.oldPrice)}</span>
                  <span className="text-[#2d2f36] font-bold text-xl">{formatInr(item.newPrice)}</span>
                  <span className="ml-auto rounded-md bg-[#ffd027] px-2 py-1 text-[#0a3f67] font-bold text-sm">
                    {item.discount} % discount
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button className="h-11 px-6 rounded-full bg-[#194b76] text-white font-bold text-sm border-0">
                    Add to Cart
                  </button>
                  <button className="h-11 px-6 rounded-full border border-[#2d2f36] text-[#194b76] font-bold text-sm bg-transparent">
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="hidden xl:flex absolute -right-9 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#194b76] text-[#194b76] bg-white"
          aria-label="Next packages"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <a
        href="https://wa.me/917500075111"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center"
      >
        <MessageCircle size={30} />
      </a>
    </section>
  )
}
