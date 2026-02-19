import { useState, useRef, useEffect } from 'react'
import {
    MapPin, ChevronDown, User, ShoppingCart, Menu, X
} from 'lucide-react'

const NAV_LINKS = [
    { label: 'Book Home Collection', href: '#home-collection' },
    { label: 'Book Radiology / Scan', href: '#radiology' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Business Partnership', href: '#partnership' },
    { label: 'About Us', href: '#about' },
    { label: 'Career', href: '#career' },
    { label: 'Blogs', href: '#blogs' },
]

const UP_CITIES = [
    'Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Prayagraj',
    'Meerut', 'Ghaziabad', 'Noida', 'Mathura', 'Vrindavan',
    'Bareilly', 'Aligarh', 'Moradabad', 'Gorakhpur', 'Saharanpur',
    'Firozabad', 'Jhansi', 'Muzaffarnagar', 'Hapur', 'Ayodhya',
]

export default function Navbar() {
    const [selectedCity, setSelectedCity] = useState('Lucknow')
    const [cityOpen, setCityOpen] = useState(false)
    const [userOpen, setUserOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [cartCount] = useState(0)

    const cityRef = useRef(null)
    const userRef = useRef(null)

    // Close dropdowns on outside click
    useEffect(() => {
        const handler = (e) => {
            if (cityRef.current && !cityRef.current.contains(e.target)) setCityOpen(false)
            if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false)
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-screen-2xl mx-auto px-4">
                <div className="flex items-center justify-between h-12">

                    {/* ── Nav Links (desktop) ─────────────────────────────── */}
                    <ul className="hidden lg:flex items-center gap-0">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="
                    block px-3 py-3 text-[11px] font-semibold tracking-wide
                    text-gray-700 uppercase whitespace-nowrap
                    hover:text-blue-600 transition-colors duration-150
                  "
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* ── Right Controls ──────────────────────────────────── */}
                    <div className="flex items-center gap-2">

                        {/* City Dropdown */}
                        <div className="relative" ref={cityRef}>
                            <button
                                onClick={() => setCityOpen((o) => !o)}
                                className="
                  flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  border border-yellow-400 bg-white
                  text-gray-700 text-sm font-medium
                  hover:border-yellow-500 transition-colors min-w-[120px]
                "
                            >
                                <MapPin size={14} className="text-yellow-500 flex-shrink-0" />
                                <span className="truncate max-w-[80px]">{selectedCity}</span>
                                <ChevronDown
                                    size={14}
                                    className={`ml-auto flex-shrink-0 text-gray-400 transition-transform ${cityOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {cityOpen && (
                                <div className="
                  absolute right-0 top-full mt-1 z-50
                  bg-white border border-gray-200 rounded-xl shadow-xl
                  w-52 max-h-72 overflow-y-auto py-1
                ">
                                    <p className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        Uttar Pradesh
                                    </p>
                                    {UP_CITIES.map((city) => (
                                        <button
                                            key={city}
                                            onClick={() => { setSelectedCity(city); setCityOpen(false) }}
                                            className={`
                        w-full text-left px-4 py-2 text-sm flex items-center gap-2
                        hover:bg-yellow-50 hover:text-yellow-600 transition-colors
                        ${city === selectedCity ? 'text-yellow-600 font-semibold bg-yellow-50' : 'text-gray-700'}
                      `}
                                        >
                                            <MapPin size={12} className="flex-shrink-0 opacity-60" />
                                            {city}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* User */}
                        <div className="relative" ref={userRef}>
                            <button
                                onClick={() => setUserOpen((o) => !o)}
                                className="
                  flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  text-gray-700 text-sm font-medium
                  hover:bg-gray-100 transition-colors
                "
                            >
                                <User size={16} className="text-blue-600" />
                                <span className="hidden sm:inline whitespace-nowrap">Welcome Guest User</span>
                                <ChevronDown size={14} className={`text-gray-400 transition-transform ${userOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {userOpen && (
                                <div className="
                  absolute right-0 top-full mt-1 z-50
                  bg-white border border-gray-200 rounded-xl shadow-xl
                  w-44 py-1
                ">
                                    {['Login', 'Sign Up', 'My Orders', 'My Profile'].map((item) => (
                                        <button
                                            key={item}
                                            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Cart */}
                        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                            <ShoppingCart size={20} className="text-gray-700" />
                            {cartCount > 0 && (
                                <span className="
                  absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px]
                  bg-blue-600 text-white text-[10px] font-bold
                  rounded-full flex items-center justify-center px-1
                ">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Hamburger (mobile + overflow) */}
                        <button
                            onClick={() => setMobileOpen((o) => !o)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen
                                ? <X size={20} className="text-gray-700" />
                                : <Menu size={20} className="text-gray-700" />
                            }
                        </button>
                    </div>
                </div>

                {/* ── Mobile Menu ─────────────────────────────────────────── */}
                {mobileOpen && (
                    <div className="lg:hidden border-t border-gray-100 py-2 pb-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="
                  block px-4 py-2.5 text-sm font-semibold uppercase tracking-wide
                  text-gray-700 hover:text-blue-600 hover:bg-blue-50
                  transition-colors rounded-lg mx-1
                "
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
