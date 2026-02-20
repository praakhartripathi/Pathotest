import { LogIn, Phone, Search, ShoppingCart, UserRound } from 'lucide-react'

export default function TopBar({ onHomeClick }) {
  return (
    <header className="w-full bg-[#efefef] border-b border-gray-200">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center gap-4">
        <button
          type="button"
          onClick={onHomeClick}
          className="flex items-center gap-2 shrink-0 border-0 bg-transparent p-0 cursor-pointer"
          aria-label="Go to home page"
        >
          <div className="h-9 w-7 rounded-sm bg-[#f2c20f]" />
          <div className="leading-none">
            <p className="text-[44px] font-extrabold text-[#1b4e7b] tracking-tight">Pathkind</p>
            <p className="text-[30px] font-bold text-[#1b4e7b] -mt-1">Labs</p>
          </div>
        </button>

        <div className="hidden md:flex items-stretch flex-1 max-w-[860px] ml-5">
          <button className="h-12 px-5 rounded-l-xl bg-[#194b76] text-white text-[29px] font-medium border-0">
            Gurugram
          </button>
          <div className="flex items-center h-12 flex-1 bg-white border border-gray-300 rounded-r-xl px-3">
            <Search size={18} className="text-gray-500 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search for a test, health package or Labs"
              className="w-full border-0 outline-none bg-transparent text-[24px] text-gray-700"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-6 text-[#20232d] shrink-0">
          <a href="tel:+917500075111" className="hidden lg:flex items-center gap-2 hover:text-[#194b76]">
            <Phone size={20} />
            <div className="leading-tight">
              <p className="text-[15px] font-bold tracking-wide">CALL US NOW</p>
              <p className="text-[24px] font-bold">75000 75111</p>
            </div>
          </a>

          <button className="flex items-center gap-1.5 text-[31px] font-semibold text-[#20232d] border-0 bg-transparent p-0">
            <UserRound size={20} />
            <LogIn size={16} className="-ml-2" />
            <span>Sign In</span>
          </button>

          <button className="relative flex items-center gap-1.5 text-[31px] font-semibold text-[#20232d] border-0 bg-transparent p-0">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 left-3 text-[17px] font-bold">0</span>
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  )
}
