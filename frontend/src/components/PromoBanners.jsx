export default function PromoBanners() {
    return (
        <section className="w-full pt-8 sm:pt-10 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                {/* Left banner — Acne / dark maroon */}
                <article className="relative overflow-hidden rounded-2xl min-h-[200px] sm:min-h-[230px] bg-[#5a1a1a] flex items-stretch">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3d0e0e]/90 via-[#5a1a1a]/70 to-transparent z-10" />

                    {/* Decorative person silhouette placeholder on the right */}
                    <div className="absolute right-0 top-0 h-full w-2/5 bg-gradient-to-l from-[#7a2a2a]/40 to-transparent z-0 rounded-r-2xl" />

                    {/* Text content */}
                    <div className="relative z-20 p-6 sm:p-8 flex flex-col justify-center max-w-[60%]">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#ffd027] leading-tight mb-3">
                            Unveiling the Hidden Causes of Acne with Pathotest
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-5">
                            Are you tired of battling persistent acne? Do you yearn to discover the true root cause
                            behind your skin troubles? Look no further than Pathotest.
                        </p>
                        <button className="self-start h-9 px-6 rounded-full bg-[#ffd027] text-[#3d0e0e] font-bold text-xs sm:text-sm border-0 hover:bg-[#f0c000] transition-colors">
                            Know More
                        </button>
                    </div>
                </article>

                {/* Right banner — Hairfall / light grey */}
                <article className="relative overflow-hidden rounded-2xl min-h-[200px] sm:min-h-[230px] bg-gray-100 flex items-stretch">
                    {/* Decorative person silhouette on the left */}
                    <div className="absolute left-0 top-0 h-full w-2/5 bg-gradient-to-r from-gray-300/60 to-transparent z-0 rounded-l-2xl" />

                    {/* Text content — right-aligned */}
                    <div className="relative z-20 ml-auto p-6 sm:p-8 flex flex-col justify-center max-w-[60%] text-right">
                        <p className="text-4xl sm:text-5xl font-black text-[#194b76] leading-none mb-1">
                            60<span className="text-3xl sm:text-4xl">%</span>
                        </p>
                        <p className="text-lg sm:text-2xl font-extrabold text-[#2b2d37] leading-snug mb-1">
                            Suffer Hairfall
                        </p>
                        <p className="text-sm sm:text-base font-bold text-[#ffd027] bg-[#194b76] rounded px-2 py-0.5 inline-block self-end mb-3">
                            Are You at Risk?
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mb-4">
                            Know the root cause with
                        </p>
                        <div className="self-end">
                            <span className="text-[#194b76] font-black text-lg sm:text-xl tracking-tight">
                                Pathotest{' '}
                                <span className="text-[#e8373f]">Hairfall</span>
                                <span className="text-[#194b76]">Check</span>
                            </span>
                        </div>
                        <button className="mt-4 self-end h-9 px-6 rounded-full bg-[#194b76] text-white font-bold text-xs sm:text-sm border-0 hover:bg-[#0e3a5e] transition-colors">
                            Know More
                        </button>
                    </div>
                </article>

            </div>
        </section>
    )
}
