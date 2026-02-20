const HEALTH_RISKS = [
    { id: 'heart', label: 'Heart', emoji: '❤️' },
    { id: 'liver', label: 'Liver', emoji: '🫀' },
    { id: 'kidney', label: 'Kidney', emoji: '🫘' },
    { id: 'bone', label: 'Bone', emoji: '🦴' },
    { id: 'thyroid', label: 'Thyroid', emoji: '🦋' },
    { id: 'lungs', label: 'Lungs', emoji: '🫁' },
    { id: 'brain', label: 'Brain', emoji: '🧠' },
    { id: 'diabetes', label: 'Diabetes', emoji: '💉' },
]

export default function TestByHealthRisks() {
    return (
        <section className="w-full bg-[#f2f2f3] py-10 sm:py-14 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 mt-2">
            <div className="flex items-center justify-between mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2b2d37]">
                    Test by Health Risks
                </h2>
                <button className="h-10 px-7 rounded-full bg-[#194b76] text-white font-semibold text-sm border-0 hover:bg-[#0e3a5e] transition-colors">
                    View All
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
                {HEALTH_RISKS.map((risk) => (
                    <div key={risk.id} className="flex flex-col items-center gap-3">
                        {/* Icon circle */}
                        <button
                            aria-label={`View ${risk.label} tests`}
                            className="h-[88px] w-[88px] sm:h-[100px] sm:w-[100px] rounded-full bg-white shadow-md flex items-center justify-center text-4xl sm:text-5xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            {risk.emoji}
                        </button>

                        <span className="text-sm sm:text-base font-bold text-[#2b2d37]">
                            {risk.label}
                        </span>

                        <button
                            className="h-9 px-5 rounded-full bg-[#194b76] text-white font-semibold text-xs sm:text-sm border-0 hover:bg-[#0e3a5e] transition-colors"
                        >
                            Know More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
