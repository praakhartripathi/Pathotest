import { useState } from 'react'
import {
  Home,
  Users,
  Stethoscope,
  Handshake,
  Building2,
  Phone,
  SquarePen,
  NotebookPen,
  ClipboardList,
  X,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

const MENU_ITEMS = [
  { label: 'Home', icon: Home, link: '#' },
  {
    label: 'Patients',
    icon: Users,
    subItems: [
      { label: 'Book a test', link: '#' },
      { label: 'Download Report', link: '#' },
      { label: 'Upload Prescription', link: '#' },
      { label: 'Health Packages', link: '#' },
      { label: 'Lab Locator', link: '#' },
      { label: 'Claim Refund', link: '#' },
    ],
  },
  { label: 'Doctors', icon: Stethoscope, subItems: [{ label: 'Our Doctors', link: '#' }] },
  { label: 'Business Offerings', icon: Handshake, subItems: [{ label: 'Partnerships', link: '#' }] },
  { label: 'Company', icon: Building2, subItems: [{ label: 'About Us', link: '#' }] },
  { label: 'Get in touch', icon: Phone, link: '#' },
  { label: 'Blogs', icon: SquarePen, link: '#' },
  { label: 'Career', icon: NotebookPen, link: '#' },
  { label: 'Edos', icon: ClipboardList, link: '#' },
]

export default function Sidebar({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState('Patients')

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[1250] transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[290px] bg-[#f2f2f2] z-[1300] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-3 py-2.5 bg-[#0f4f75] text-white">
          <div className="flex items-center gap-2">
            <div className="h-8 w-6 rounded-sm bg-[#f2c20f]" />
            <div className="leading-none">
              <p className="text-[18px] font-extrabold tracking-tight">Pathkind</p>
              <p className="text-[14px] font-bold mt-0.5">Labs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded border-0 bg-transparent text-white cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          {MENU_ITEMS.map((item) => {
            const isDropdownOpen = openDropdown === item.label
            const Icon = item.icon

            return (
              <div key={item.label} className="mb-1.5 last:mb-0">
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-left border-0 bg-transparent cursor-pointer transition-colors rounded-xl ${
                        item.label === 'Patients' ? 'bg-[#e7e7e7]' : 'hover:bg-[#e9e9e9]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 text-gray-900 font-medium">
                        <Icon size={18} className="text-gray-800" />
                        <span className="text-[31px]">{item.label}</span>
                      </div>
                      {isDropdownOpen ? (
                        <ChevronUp size={16} className="text-gray-700" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-700" />
                      )}
                    </button>

                    {isDropdownOpen && (
                      <div className="ml-7 mt-2 border-l border-gray-300 pl-5">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.link}
                            className="block py-2.5 text-[31px] text-gray-900 hover:text-[#1b4e7b] transition-colors no-underline"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 text-gray-900 font-medium hover:bg-[#e9e9e9] rounded-xl transition-colors no-underline"
                  >
                    <Icon size={18} className="text-gray-800" />
                    <span className="text-[31px]">{item.label}</span>
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </aside>
    </>
  )
}
