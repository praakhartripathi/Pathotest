import { useState } from 'react';
import {
    Home,
    Users,
    User,
    Settings,
    Building,
    Building2,
    Phone,
    Edit,
    Book,
    X,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const MENU_ITEMS = [
    { label: 'Home', icon: Home, link: '#' },
    {
        label: 'Patients', icon: Users, subItems: [
            { label: 'Book a test', link: '#' },
            { label: 'Download Report', link: '#' },
            { label: 'Upload Prescription', link: '#' },
            { label: 'Health Packages', link: '#' },
            { label: 'Lab Locator', link: '#' },
            { label: 'Claim Refund', link: '#' },
        ]
    },
    {
        label: 'Doctors', icon: User, subItems: [
            { label: 'Our Doctors', link: '#' },
        ]
    },
    {
        label: 'Business Offerings', icon: Settings, subItems: [
            { label: 'Partnerships', link: '#' },
        ]
    },
    {
        label: 'Company', icon: Building, subItems: [
            { label: 'About Us', link: '#' },
        ]
    },
    { label: 'Get in touch', icon: Phone, link: '#' },
    { label: 'Blogs', icon: Edit, link: '#' },
    { label: 'Career', icon: Book, link: '#' },
    { label: 'Edos', icon: Building2, link: '#' },
];

export default function Sidebar({ isOpen, onClose }) {
    const [openDropdown, setOpenDropdown] = useState('Patients');

    const toggleDropdown = (label) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1b4e7b] text-white">
                    <div className="flex items-center gap-2">
                        <span className="font-extrabold text-2xl tracking-tight">Patho Test</span>
                    </div>
                    <button onClick={onClose} className="p-1 hover:bg-black/10 rounded border-0 bg-transparent text-white cursor-pointer">
                        <X size={24} />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-2 scrollbar-thin">
                    {MENU_ITEMS.map((item) => {
                        const isDropdownOpen = openDropdown === item.label;
                        const Icon = item.icon;

                        return (
                            <div key={item.label} className="border-b border-gray-100 last:border-0">
                                {item.subItems ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className={`w-full flex items-center justify-between px-4 py-3 text-left border-0 bg-transparent cursor-pointer hover:bg-gray-50 transition-colors ${isDropdownOpen ? 'bg-gray-50' : ''}`}
                                        >
                                            <div className="flex items-center gap-3 text-gray-900 font-medium">
                                                <Icon size={20} className="text-gray-700" />
                                                <span className="text-[15px]">{item.label}</span>
                                            </div>
                                            {isDropdownOpen ? (
                                                <ChevronUp size={18} className="text-gray-500" />
                                            ) : (
                                                <ChevronDown size={18} className="text-gray-500" />
                                            )}
                                        </button>

                                        {/* Dropdown Content */}
                                        {isDropdownOpen && (
                                            <div className="bg-white py-1">
                                                {item.subItems.map((subItem) => (
                                                    <a
                                                        key={subItem.label}
                                                        href={subItem.link}
                                                        className="block pl-12 pr-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-[#1b4e7b] transition-colors no-underline"
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
                                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 transition-colors no-underline"
                                    >
                                        <Icon size={20} className="text-gray-700" />
                                        <span className="text-[15px]">{item.label}</span>
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
