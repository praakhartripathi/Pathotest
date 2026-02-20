const NAV_COLUMNS = [
    {
        heading: 'Patients',
        links: [
            'Book a Test',
            'Upload Prescription',
            'Download Report',
            'Health Packages',
            'Lab Locator',
            'Claim Refund',
        ],
    },
    {
        heading: 'Partner with us',
        links: [
            'Franchise Opportunities',
            'Corporate Wellness',
            'Hospital Lab Management',
            'Organise Camps',
        ],
    },
    {
        heading: 'Doctors',
        links: [
            'National Reference Lab',
            'Research and Development',
            'Download Forms',
            'Scientific Literature',
        ],
    },
    {
        heading: 'Company',
        links: [
            'About Us',
            'Mission & Vision',
            'Board of Directors',
            'Management',
            'Career',
            'Newsletter',
            'PR Media',
        ],
    },
]

const BOTTOM_LINKS = [
    'Terms of Use',
    'Disclaimer',
    'Privacy Policy',
    'Blogs',
    'Video',
    'EDOS',
]

// Social icon SVGs
function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
    )
}
function XIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}
function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}
function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
    )
}
function YoutubeIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
    )
}

const SOCIAL_LINKS = [
    { label: 'Facebook', Icon: FacebookIcon, href: 'https://facebook.com' },
    { label: 'X (Twitter)', Icon: XIcon, href: 'https://x.com' },
    { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com' },
    { label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com' },
    { label: 'YouTube', Icon: YoutubeIcon, href: 'https://youtube.com' },
]

export default function Footer() {
    return (
        <footer className="w-full">
            {/* ── Top grey section ── */}
            <div className="bg-[#f2f2f3] px-4 sm:px-6 lg:px-10 py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                    {/* Nav columns */}
                    {NAV_COLUMNS.map((col) => (
                        <div key={col.heading}>
                            <h3 className="text-sm font-extrabold text-[#2b2d37] mb-3">{col.heading}</h3>
                            <ul className="space-y-2">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-xs sm:text-sm text-gray-600 hover:text-[#194b76] hover:underline transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Us + Download App */}
                    <div>
                        <h3 className="text-sm font-extrabold text-[#2b2d37] mb-3">Contact Us</h3>
                        <ul className="space-y-2 mb-5">
                            {['Get in touch', 'Faq', 'Sitemap'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-xs sm:text-sm text-gray-600 hover:text-[#194b76] hover:underline transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-sm font-extrabold text-[#2b2d37] mb-3">Download App</h3>
                        <div className="flex flex-col gap-2">
                            {/* App Store */}
                            <a
                                href="#"
                                aria-label="Download on App Store"
                                className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-1.5 w-fit hover:bg-gray-800 transition-colors"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <span className="text-xs leading-tight">
                                    <span className="block text-[9px] text-gray-300">Download on the</span>
                                    <span className="font-semibold text-xs">App Store</span>
                                </span>
                            </a>
                            {/* Google Play */}
                            <a
                                href="#"
                                aria-label="Get it on Google Play"
                                className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-1.5 w-fit hover:bg-gray-800 transition-colors"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                                    <path d="M3 20.5v-17c0-.83 1-.99 1.5-.5l14 8.5-14 8.5c-.5.49-1.5.33-1.5-.5z" />
                                    <path d="M3.5 3.5l8.5 8.5-8.5 8.5" stroke="currentColor" strokeOpacity="0" />
                                </svg>
                                <span className="text-xs leading-tight">
                                    <span className="block text-[9px] text-gray-300">GET IT ON</span>
                                    <span className="font-semibold text-xs">Google Play</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom amber section ── */}
            <div className="bg-[#f5b800] px-4 sm:px-6 lg:px-10 py-5">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Left — Get in Touch + links + legal */}
                    <div className="space-y-2">
                        <p className="text-base font-extrabold text-[#2b2d37]">Get in Touch</p>

                        {/* Legal links row */}
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#2b2d37]">
                            {BOTTOM_LINKS.map((link, i) => (
                                <span key={link} className="flex items-center gap-3">
                                    <a href="#" className="hover:underline font-medium">{link}</a>
                                    {i < BOTTOM_LINKS.length - 1 && (
                                        <span className="text-gray-600 select-none">|</span>
                                    )}
                                </span>
                            ))}
                        </div>

                        {/* Contact line */}
                        <p className="text-xs text-[#2b2d37]">
                            <span className="font-semibold">Call Us: 75000 75111</span>
                            <span className="mx-2 text-gray-600">|</span>
                            <span>
                                <span className="font-semibold">Mail Us:</span>{' '}
                                <a href="mailto:care@pathotest.com" className="hover:underline">
                                    care@pathotest.com
                                </a>
                            </span>
                            <span className="mx-2 text-gray-600">|</span>
                            <span>Radiology Test Available only in Lucknow, Kanpur &amp; Varanasi</span>
                        </p>

                        {/* Copyright */}
                        <p className="text-xs text-[#2b2d37]">
                            © 2026 Pathotest Diagnostics Pvt. Ltd. All Rights Reserved
                            <span className="mx-2 text-gray-600">|</span>
                            <a href="#" className="hover:underline">Unsubscribe</a>
                        </p>
                    </div>

                    {/* Right — Follow us */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-extrabold text-[#2b2d37]">Follow us</p>
                        <div className="flex items-center gap-2">
                            {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="h-9 w-9 rounded-full bg-[#2b2d37] text-white flex items-center justify-center hover:bg-[#194b76] transition-colors"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
