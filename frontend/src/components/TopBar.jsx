import { useState } from 'react'
import { ChevronDown, LogIn, Phone, Search, ShoppingCart, UserRound } from 'lucide-react'

const UP_CITIES = [
  'Lucknow',
  'Kanpur',
  'Agra',
  'Varanasi',
  'Prayagraj',
  'Meerut',
  'Ghaziabad',
  'Noida',
  'Mathura',
  'Bareilly',
  'Gorakhpur',
  'Jhansi',
  'Ayodhya',
]

export default function TopBar({ onHomeClick }) {
  const [selectedCity, setSelectedCity] = useState('Lucknow')

  return (
    <header className="w-full bg-[#efefef] border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap items-center gap-3 md:gap-4">
        <button
          type="button"
          onClick={onHomeClick}
          className="flex items-center gap-2 shrink-0 border-0 bg-transparent p-0 cursor-pointer"
          aria-label="Go to home page"
        >
          <span className="text-3xl sm:text-4xl font-extrabold text-[#1b4e7b] tracking-tight">Patho Test</span>
        </button>

        <div className="order-3 md:order-none flex items-stretch w-full md:flex-1 md:ml-2 lg:ml-5">
          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="appearance-none h-10 sm:h-11 md:h-12 pl-3 sm:pl-4 pr-8 rounded-l-xl bg-[#194b76] text-white text-sm sm:text-base md:text-lg font-medium border-0 outline-none"
            >
              {UP_CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
          </div>
          <div className="flex items-center h-10 sm:h-11 md:h-12 flex-1 bg-white border border-gray-300 rounded-r-xl px-3">
            <Search size={16} className="text-gray-500 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search for a test, health package or Labs"
              className="w-full border-0 outline-none bg-transparent text-sm sm:text-base text-gray-700"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3 sm:gap-4 text-[#20232d] shrink-0">
          <a href="tel:+917500075111" className="hidden xl:flex items-center gap-2 hover:text-[#194b76]">
            <Phone size={18} />
            <div className="leading-tight">
              <p className="text-[11px] font-bold tracking-wide">CALL US NOW</p>
              <p className="text-sm font-bold">75000 75111</p>
            </div>
          </a>

          <button className="flex items-center gap-1 text-sm sm:text-base font-semibold text-[#20232d] border-0 bg-transparent p-0">
            <UserRound size={18} />
            <LogIn size={16} className="-ml-2" />
            <span className="hidden sm:inline">Sign In</span>
          </button>

          <button className="relative flex items-center gap-1 text-sm sm:text-base font-semibold text-[#20232d] border-0 bg-transparent p-0">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 left-3 text-[10px] font-bold">0</span>
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  )
}
