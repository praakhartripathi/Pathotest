const CONDITIONS = [
    {
        id: 'alcohol',
        label: 'Alcohol',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <path d="M14 4h12l-3 14h-6L14 4z" strokeLinejoin="round" />
                <path d="M17 18v14M23 18v14" />
                <path d="M13 32h14" strokeLinecap="round" />
                <circle cx="20" cy="11" r="2" />
            </svg>
        ),
    },
    {
        id: 'allergy',
        label: 'Allergy',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <circle cx="20" cy="20" r="14" />
                <circle cx="14" cy="16" r="3" />
                <circle cx="26" cy="16" r="3" />
                <path d="M14 26c1.5 3 10.5 3 12 0" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'anemia',
        label: 'Anemia',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <path d="M20 6C20 6 8 16 8 24a12 12 0 0024 0C32 16 20 6 20 6z" strokeLinejoin="round" />
                <path d="M20 14v12M14 20h12" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'arthritis',
        label: 'Arthritis',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <line x1="20" y1="4" x2="20" y2="36" strokeLinecap="round" />
                <circle cx="20" cy="14" r="4" />
                <circle cx="20" cy="26" r="4" />
                <path d="M12 20h16" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'cancer',
        label: 'Cancer',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <circle cx="20" cy="20" r="6" />
                <path d="M20 6v6M20 28v6M6 20h6M28 20h6" strokeLinecap="round" />
                <path d="M10.1 10.1l4.24 4.24M25.66 25.66l4.24 4.24M10.1 29.9l4.24-4.24M25.66 14.34l4.24-4.24" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'diabetes',
        label: 'Diabetes',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <rect x="12" y="8" width="16" height="24" rx="3" />
                <path d="M16 8V6M24 8V6" strokeLinecap="round" />
                <path d="M16 20h8M20 16v8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'fever',
        label: 'Fever',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <rect x="18" y="6" width="5" height="20" rx="2.5" />
                <circle cx="20.5" cy="29" r="5" />
                <path d="M24 14h4M24 18h3M24 22h4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'pregnancy',
        label: 'Pregnancy',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <circle cx="20" cy="9" r="4" />
                <path d="M14 16h12l-2 16H16L14 16z" strokeLinejoin="round" />
                <circle cx="20" cy="24" r="4" />
            </svg>
        ),
    },
    {
        id: 'hepatitis',
        label: 'Hepatitis',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                <path d="M20 6C12 10 8 16 8 22c0 6 5.4 12 12 12s12-6 12-12c0-6-4-12-12-16z" strokeLinejoin="round" />
                <path d="M15 22h10M20 17v10" strokeLinecap="round" />
            </svg>
        ),
    },
]

export default function TestByHealthConditions() {
    return (
        <section className="w-full pt-10 sm:pt-14 pb-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2b2d37]">
                    Test by Health Conditions
                </h2>
                <button className="h-10 px-7 rounded-full bg-[#194b76] text-white font-semibold text-sm border-0 hover:bg-[#0e3a5e] transition-colors">
                    View All
                </button>
            </div>

            {/* Conditions grid */}
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-3 xl:grid xl:grid-cols-9"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {CONDITIONS.map((cond) => (
                    <div key={cond.id} className="flex flex-col items-center gap-3 flex-shrink-0">
                        {/* Icon box */}
                        <button
                            aria-label={`View ${cond.label} tests`}
                            className="h-[80px] w-[80px] sm:h-[90px] sm:w-[90px] rounded-2xl border border-gray-200 bg-white flex items-center justify-center text-[#2b2d37] shadow-sm hover:shadow-md hover:border-[#194b76] hover:text-[#194b76] transition-all duration-200"
                        >
                            {cond.icon}
                        </button>
                        <span className="text-sm sm:text-base font-semibold text-[#2b2d37]">
                            {cond.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
