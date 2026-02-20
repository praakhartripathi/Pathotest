import { ChevronDown, CloudDownload, Menu, Pencil, UploadCloud } from 'lucide-react'

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
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-8">
        <div className="flex items-center gap-8 overflow-x-auto">
          <button className="border-0 bg-transparent p-0 text-gray-700 hover:text-[#1b4e7b]">
            <Menu size={22} />
          </button>

          {LEFT_LINKS.map((item) => (
            <button
              key={item.label}
              className="whitespace-nowrap border-0 bg-transparent p-0 text-[30px] font-semibold text-[#2b2d37] hover:text-[#1b4e7b] flex items-center gap-1"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={16} className="mt-0.5" />}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-8 overflow-x-auto">
          {RIGHT_LINKS.map(({ label, icon: Icon, prefix }) => (
            <button
              key={label}
              className="whitespace-nowrap border-0 bg-transparent p-0 text-[31px] font-semibold text-[#2b2d37] hover:text-[#1b4e7b] flex items-center gap-1.5"
            >
              {prefix && <span className="text-[32px] leading-none">{prefix}</span>}
              <Icon size={17} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
