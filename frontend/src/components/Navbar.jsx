import { ChevronDown, CloudDownload, Menu, Pencil, UploadCloud } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
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

const TEST_DROPDOWN_ITEMS = [
  'CBC (Complete Blood Test)',
  'Lipid Profile',
  'Allergy Panel',
  'Vitamin D',
  'Thyroid Profile',
  'HbA1C',
]

const PACKAGE_DROPDOWN_ITEMS = [
  'Healthkind Lite',
  'Healthkind Total',
  'Healthkind Advance',
  'Healthkind Complete',
  'Healthkind Active',
  'Healthkind Screen',
]

const PARTNER_DROPDOWN_ITEMS = [
  'Franchise Opportunities',
  'Corporate Wellness',
  'Hospital Lab Management',
  'Organise Camps',
]

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isTestsDropdownOpen, setIsTestsDropdownOpen] = useState(false)
  const [isPackagesDropdownOpen, setIsPackagesDropdownOpen] = useState(false)
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (!isTestsDropdownOpen && !isPackagesDropdownOpen && !isPartnerDropdownOpen) {
      return
    }

    const onPointerDown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsTestsDropdownOpen(false)
        setIsPackagesDropdownOpen(false)
        setIsPartnerDropdownOpen(false)
      }
    }

    const onEsc = (event) => {
      if (event.key === 'Escape') {
        setIsTestsDropdownOpen(false)
        setIsPackagesDropdownOpen(false)
        setIsPartnerDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onEsc)

    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onEsc)
    }
  }, [isTestsDropdownOpen, isPackagesDropdownOpen, isPartnerDropdownOpen])

  return (
    <>
      <nav className="relative w-full bg-white border-b border-gray-200">
      <div className="w-full px-0 sm:px-0 lg:px-0 h-12 md:h-14 flex items-center justify-between gap-0">
        <div className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-thin min-w-0">
          <button
            type="button"
            aria-label="Open menu"
            className="h-12 md:h-14 w-16 md:w-[68px] flex items-center justify-center border-0 border-r border-gray-200 bg-[#f6f6f6] text-[#1b4e7b] hover:bg-[#ececec] cursor-pointer shrink-0"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>

          {LEFT_LINKS.map((item) => (
            item.label === 'Tests' ? (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setIsTestsDropdownOpen((prev) => !prev)
                  setIsPackagesDropdownOpen(false)
                  setIsPartnerDropdownOpen(false)
                }}
                aria-expanded={isTestsDropdownOpen}
                aria-haspopup="menu"
                className="whitespace-nowrap border-0 bg-transparent p-0 text-xs sm:text-sm md:text-base font-semibold text-[#2b2d37] hover:text-[#1b4e7b] flex items-center gap-1"
              >
                {item.label}
                <ChevronDown size={14} className="mt-0.5" />
              </button>
            ) : item.label === 'Packages' ? (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setIsPackagesDropdownOpen((prev) => !prev)
                  setIsTestsDropdownOpen(false)
                  setIsPartnerDropdownOpen(false)
                }}
                aria-expanded={isPackagesDropdownOpen}
                aria-haspopup="menu"
                className="whitespace-nowrap border-0 bg-transparent p-0 text-xs sm:text-sm md:text-base font-semibold text-[#2b2d37] hover:text-[#1b4e7b] flex items-center gap-1"
              >
                {item.label}
                <ChevronDown size={14} className="mt-0.5" />
              </button>
            ) : item.label === 'Partner With Us' ? (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setIsPartnerDropdownOpen((prev) => !prev)
                  setIsTestsDropdownOpen(false)
                  setIsPackagesDropdownOpen(false)
                }}
                aria-expanded={isPartnerDropdownOpen}
                aria-haspopup="menu"
                className="whitespace-nowrap border-0 bg-transparent p-0 text-xs sm:text-sm md:text-base font-semibold text-[#2b2d37] hover:text-[#1b4e7b] flex items-center gap-1"
              >
                {item.label}
                <ChevronDown size={14} className="mt-0.5" />
              </button>
            ) : (
              <button
                key={item.label}
                type="button"
                className="whitespace-nowrap border-0 bg-transparent p-0 text-xs sm:text-sm md:text-base font-semibold text-[#2b2d37] hover:text-[#1b4e7b] flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
              </button>
            )
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5 overflow-x-auto px-4 sm:px-6 lg:px-10">
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

        {isTestsDropdownOpen && (
          <div
            ref={dropdownRef}
            role="menu"
            aria-label="Tests menu"
            className="absolute left-2 sm:left-6 lg:left-20 top-[calc(100%+6px)] z-50 w-[280px] rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(13,35,67,0.18)] overflow-hidden"
          >
            <ul className="m-0 p-0 list-none">
              {TEST_DROPDOWN_ITEMS.map((test) => (
                <li key={test} className="border-b border-gray-200 last:border-b-0">
                  <button
                    type="button"
                    className="w-full text-left px-4 py-4 text-[20px] leading-none font-semibold text-[#666] hover:bg-gray-50"
                  >
                    {test}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 py-3 bg-white">
              <button
                type="button"
                className="mx-auto block min-w-24 rounded-full bg-[#1b4e7b] px-6 py-2 text-sm font-bold text-white hover:bg-[#163f63]"
              >
                View All
              </button>
            </div>
          </div>
        )}

        {isPackagesDropdownOpen && (
          <div
            ref={dropdownRef}
            role="menu"
            aria-label="Packages menu"
            className="absolute left-18 sm:left-28 lg:left-44 top-[calc(100%+6px)] z-50 w-[280px] rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(13,35,67,0.18)] overflow-hidden"
          >
            <ul className="m-0 p-0 list-none">
              {PACKAGE_DROPDOWN_ITEMS.map((pkg) => (
                <li key={pkg} className="border-b border-gray-200 last:border-b-0">
                  <button
                    type="button"
                    className="w-full text-left px-4 py-4 text-[20px] leading-none font-semibold text-[#666] hover:bg-gray-50"
                  >
                    {pkg}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 py-3 bg-white">
              <button
                type="button"
                className="mx-auto block min-w-24 rounded-full bg-[#1b4e7b] px-6 py-2 text-sm font-bold text-white hover:bg-[#163f63]"
              >
                View All
              </button>
            </div>
          </div>
        )}

        {isPartnerDropdownOpen && (
          <div
            ref={dropdownRef}
            role="menu"
            aria-label="Partner With Us menu"
            className="absolute left-30 sm:left-44 lg:left-66 top-[calc(100%+6px)] z-50 w-[280px] rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(13,35,67,0.18)] overflow-hidden"
          >
            <ul className="m-0 p-0 list-none">
              {PARTNER_DROPDOWN_ITEMS.map((partnerItem) => (
                <li key={partnerItem} className="border-b border-gray-200 last:border-b-0">
                  <button
                    type="button"
                    className="w-full text-left px-4 py-4 text-[20px] leading-none font-semibold text-[#666] hover:bg-gray-50"
                  >
                    {partnerItem}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}
