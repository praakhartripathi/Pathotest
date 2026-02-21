import { ChevronDown, CloudDownload, Menu, Pencil, UploadCloud } from 'lucide-react'
import { useState } from 'react'
import Sidebar from './Sidebar'

const LEFT_LINKS = [
  { label: 'Tests', hasDropdown: true },
  { label: 'Packages', hasDropdown: true },
  { label: 'Partner With Us', hasDropdown: true },
  { label: 'Nearest Lab' },
  { label: 'Blogs' },
]

const RIGHT_LINKS = [
  { label: 'Track Sample', icon: Pencil },
  { label: 'Download Report', icon: CloudDownload },
  { label: 'Upload Prescription', icon: UploadCloud, prefix: 'Rx' },
]

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 h-12 md:h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-thin">
            <button
              className="border-0 bg-transparent p-0 text-gray-700 hover:text-[#1b4e7b] cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>

            {LEFT_LINKS.map((item) => (
              <button
                key={item.label}
                className="whitespace-nowrap border-0 bg-transparent p-0 text-xs sm:text-sm md:text-base font-semibold text-[#2b2d37] hover:text-[#1b4e7b] flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5 overflow-x-auto">
            {RIGHT_LINKS.map(({ label, icon: Icon, prefix }) => (
              <button
                key={label}
                className="whitespace-nowrap border-0 bg-transparent p-0 text-sm xl:text-base font-semibold text-[#2b2d37] hover:text-[#1b4e7b] flex items-center gap-1.5"
              >
                {prefix && <span className="text-base leading-none">{prefix}</span>}
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}
