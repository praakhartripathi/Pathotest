const FEATURES = [
    {
        id: 'nabl',
        title: 'NABL Accredited\nLabs',
        description: 'Follows all protocols as per NABL & CAP Guidelines',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="#194b76" strokeWidth="1.8" className="w-10 h-10">
                <rect x="8" y="4" width="32" height="40" rx="3" />
                <circle cx="24" cy="18" r="7" />
                <path d="M17 32h14M17 37h10" strokeLinecap="round" />
                <path d="M24 11v4M24 25v4" strokeLinecap="round" />
                <path d="M17 18h4M27 18h4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'doctors',
        title: 'Trusted by Leading\nDoctors & hospitals',
        description: 'Qualified Pathologist at each lab',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="#194b76" strokeWidth="1.8" className="w-10 h-10">
                <circle cx="24" cy="14" r="7" />
                <path d="M10 40c0-7.73 6.27-14 14-14s14 6.27 14 14" strokeLinecap="round" />
                <path d="M30 28l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="36" cy="32" r="5" />
                <path d="M34 32h4M36 30v4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'reporting',
        title: 'Shortest Reporting\nTime',
        description: 'Ownership and Innovation',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="#194b76" strokeWidth="1.8" className="w-10 h-10">
                <rect x="4" y="14" width="30" height="20" rx="4" />
                <path d="M34 22h6a4 4 0 010 8h-6" />
                <path d="M10 24h18M10 29h12" strokeLinecap="round" />
                <circle cx="8" cy="8" r="3" />
                <path d="M8 11v3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'accurate',
        title: 'Accurate\nTest Reports',
        description: 'Quality checks by Quality Assurance Team',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="#194b76" strokeWidth="1.8" className="w-10 h-10">
                <rect x="10" y="6" width="28" height="36" rx="3" />
                <path d="M16 16h16M16 22h16M16 28h10" strokeLinecap="round" />
                <path d="M30 34l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'customers',
        title: '1 Crore+ Satisfied\nCustomers',
        description: 'Making superior quality diagnostics services',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="#194b76" strokeWidth="1.8" className="w-10 h-10">
                <circle cx="18" cy="14" r="6" />
                <circle cx="30" cy="14" r="6" />
                <path d="M6 38c0-6.63 5.37-12 12-12h12c6.63 0 12 5.37 12 12" strokeLinecap="round" />
                <path d="M24 26v6l3 3-3 3-3-3 3-3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'labs',
        title: '100+ Labs',
        description: 'Large Network Labs in all the major cities',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="#194b76" strokeWidth="1.8" className="w-10 h-10">
                <path d="M18 6v16L10 38h28L30 22V6" strokeLinejoin="round" />
                <path d="M16 6h16" strokeLinecap="round" />
                <circle cx="22" cy="30" r="3" />
                <path d="M14 34c1.5-3 8.5-3 10 0" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'centres',
        title: '3000+ Collection\nCentres',
        description: 'Expanding Our reach and counting',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="#194b76" strokeWidth="1.8" className="w-10 h-10">
                <rect x="6" y="20" width="36" height="22" rx="3" />
                <path d="M14 20V14a10 10 0 0120 0v6" />
                <rect x="18" y="28" width="12" height="8" rx="2" />
                <path d="M6 28h36" />
            </svg>
        ),
    },
    {
        id: 'scientific',
        title: 'Scientific\nOrientation',
        description: 'MD Doctors in Every Lab State-of-the-Art Machines',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="#194b76" strokeWidth="1.8" className="w-10 h-10">
                <circle cx="24" cy="24" r="8" />
                <path d="M24 4v6M24 38v6M4 24h6M38 24h6" strokeLinecap="round" />
                <path d="M10.1 10.1l4.24 4.24M33.66 33.66l4.24 4.24" strokeLinecap="round" />
                <path d="M37.9 10.1l-4.24 4.24M14.34 33.66l-4.24 4.24" strokeLinecap="round" />
                <circle cx="24" cy="24" r="3" fill="#194b76" stroke="none" />
            </svg>
        ),
    },
]

export default function WhyPathotestLabs() {
    return (
        <section className="w-full pt-10 sm:pt-14 pb-6">
            {/* Header */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2b2d37] mb-8 sm:mb-10">
                Why Pathotest
            </h2>

            {/* 4 × 2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
                {FEATURES.map((feat) => (
                    <article
                        key={feat.id}
                        className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
                    >
                        {/* Icon */}
                        <div className="h-12 w-12 flex items-center justify-center">
                            {feat.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-extrabold text-[#2b2d37] leading-snug whitespace-pre-line">
                            {feat.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                            {feat.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}
