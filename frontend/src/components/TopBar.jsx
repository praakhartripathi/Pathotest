import { Phone, Mail } from 'lucide-react';

export default function TopBar({ onInvestorClick }) {
    return (
        <div className="w-full bg-yellow-400 flex items-center justify-between px-6 py-2 shadow-md">
            {/* Left – App Name */}
            <div className="flex items-center gap-2">
                <span className="text-blue-700 font-extrabold text-2xl tracking-wide select-none">
                    Path<span className="text-blue-900">Test</span>
                </span>
            </div>

            {/* Right – Links + Contact */}
            <div className="flex items-center gap-6 text-blue-800 font-medium text-sm">
                <button
                    onClick={onInvestorClick}
                    className="hover:text-blue-600 transition-colors duration-200 font-semibold uppercase tracking-wide bg-transparent border-none p-0 cursor-pointer"
                >
                    Investor
                </button>
                <a
                    href="#contact"
                    className="hover:text-blue-600 transition-colors duration-200 font-semibold uppercase tracking-wide"
                >
                    Contact Us
                </a>

                <div className="h-5 w-px bg-blue-700 opacity-40" />

                {/* Phone */}
                <a
                    href="tel:+911234567890"
                    className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
                >
                    <Phone size={15} strokeWidth={2.2} />
                    <span>+91 12345 67890</span>
                </a>

                {/* Email */}
                <a
                    href="mailto:info@pathotest.com"
                    className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
                >
                    <Mail size={15} strokeWidth={2.2} />
                    <span>info@pathotest.com</span>
                </a>
            </div>
        </div>
    );
}
