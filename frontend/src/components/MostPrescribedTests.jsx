import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTS = [
    { id: 1, name: 'CEP 8, Trisomy 8 By FISH', params: 1, price: 4700 },
    { id: 2, name: 'Thyroid Profile Total', params: 3, price: 550 },
    { id: 3, name: 'Complete Blood Count (CBC)', params: 29, price: 350 },
    { id: 4, name: 'Platelet Count', params: 1, price: 50 },
    { id: 5, name: 'Lipid Profile', params: 8, price: 480 },
    { id: 6, name: 'Blood Glucose Fasting', params: 1, price: 80 },
    { id: 7, name: 'HbA1c (Glycated Haemoglobin)', params: 1, price: 350 },
    { id: 8, name: 'Vitamin D Total (25-OH)', params: 1, price: 1200 },
    { id: 9, name: 'Liver Function Test (LFT)', params: 11, price: 650 },
    { id: 10, name: 'Kidney Function Test (KFT)', params: 10, price: 750 },
]

const CARD_WIDTH_PX = 260 // approximate px width per card including gap
const SCROLL_CARDS = 4

export default function MostPrescribedTests() {
    const trackRef = useRef(null)
    const [atStart, setAtStart] = useState(true)
    const [atEnd, setAtEnd] = useState(false)

    const updateEdges = () => {
        const el = trackRef.current
        if (!el) return
        setAtStart(el.scrollLeft <= 0)
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
    }

    const scroll = (dir) => {
        const el = trackRef.current
        if (!el) return
        el.scrollBy({ left: dir * CARD_WIDTH_PX * SCROLL_CARDS, behavior: 'smooth' })
        // update edges after animation
        setTimeout(updateEdges, 400)
    }

    return (
        <section className="w-full pt-10 sm:pt-14 pb-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-7 sm:mb-9">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2b2d37]">
                    Most Prescribed Tests
                </h2>
                <button className="h-10 px-7 rounded-full bg-[#194b76] text-white font-semibold text-sm border-0 hover:bg-[#0e3a5e] transition-colors">
                    View All
                </button>
            </div>

            {/* Carousel wrapper */}
            <div className="relative">
                {/* Left arrow */}
                <button
                    type="button"
                    onClick={() => scroll(-1)}
                    disabled={atStart}
                    aria-label="Scroll left"
                    className="hidden xl:flex absolute -left-9 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-[#194b76] text-[#194b76] bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#eaf0f7] transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Scrollable track */}
                <div
                    ref={trackRef}
                    onScroll={updateEdges}
                    className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {TESTS.map((test) => (
                        <article
                            key={test.id}
                            className="flex-shrink-0 w-[240px] sm:w-[260px] rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3"
                        >
                            {/* Test name */}
                            <div>
                                <h3 className="text-base font-bold text-[#2b2d37] leading-snug">
                                    {test.name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    {test.params} Parameter{test.params !== 1 ? 's' : ''}
                                </p>
                            </div>

                            {/* Price box */}
                            <div className="border border-dashed border-gray-300 rounded-md py-2 text-center">
                                <span className="text-base font-semibold text-[#2b2d37]">
                                    ₹{test.price}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 mt-auto">
                                <button className="flex-1 h-9 rounded-full bg-[#194b76] text-white font-semibold text-xs border-0 hover:bg-[#0e3a5e] transition-colors">
                                    Add to Cart
                                </button>
                                <button className="flex-1 h-9 rounded-full border border-[#194b76] text-[#194b76] font-semibold text-xs bg-transparent hover:bg-[#eaf0f7] transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Right arrow */}
                <button
                    type="button"
                    onClick={() => scroll(1)}
                    disabled={atEnd}
                    aria-label="Scroll right"
                    className="hidden xl:flex absolute -right-9 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-[#194b76] text-[#194b76] bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#eaf0f7] transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    )
}
