import { useState } from 'react'
import {
    MapPin, Phone, Building2, Mail, ChevronRight,
    Hash, Clock, Globe, HeartPulse, Briefcase, Users, MessageSquare
} from 'lucide-react'

// ── Static Data ───────────────────────────────────────────────────────
const TABS = [
    { id: 'corporate-office', label: 'Corporate Office', icon: Building2 },
    { id: 'company-info', label: 'Company Information', icon: Hash },
    { id: 'general-enquiry', label: 'General Enquiry', icon: MessageSquare },
    { id: 'corporate-health', label: 'Corporate Health Enquiry', icon: HeartPulse },
]

const TAB_DATA = {
    'corporate-office': {
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14236.51890376856!2d80.94577!3d26.84688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be311b5d48bfb%3A0x1c5aa5b0fdcb9de0!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890',
        cards: [
            {
                icon: MapPin,
                color: 'bg-blue-50 text-blue-600',
                title: 'Registered Address',
                lines: [
                    'Patho Test Diagnostics Pvt. Ltd.',
                    '14, Hazratganj, Near Civil Hospital',
                    'Lucknow, Uttar Pradesh – 226001',
                    'India',
                ],
            },
            {
                icon: Phone,
                color: 'bg-green-50 text-green-600',
                title: 'Phone Numbers',
                lines: [
                    '+91 522 400 1234',
                    '+91 522 400 5678',
                    'Toll Free: 1800-102-PATHO',
                ],
            },
            {
                icon: Clock,
                color: 'bg-yellow-50 text-yellow-600',
                title: 'Working Hours',
                lines: [
                    'Monday – Saturday: 7:00 AM – 9:00 PM',
                    'Sunday: 8:00 AM – 2:00 PM',
                    'Emergency Lab: 24 × 7',
                ],
            },
            {
                icon: Mail,
                color: 'bg-purple-50 text-purple-600',
                title: 'Email',
                lines: [
                    'info@pathotest.com',
                    'support@pathotest.com',
                ],
            },
        ],
    },

    'company-info': {
        mapSrc: null,
        cards: [
            {
                icon: Hash,
                color: 'bg-blue-50 text-blue-600',
                title: 'Company Identification Number (CIN)',
                lines: ['U85110UP2006PTC031234'],
            },
            {
                icon: Building2,
                color: 'bg-orange-50 text-orange-600',
                title: 'Legal Name',
                lines: ['Patho Test Diagnostics Private Limited'],
            },
            {
                icon: Globe,
                color: 'bg-teal-50 text-teal-600',
                title: 'Incorporation',
                lines: ['Incorporated: 12 March 2006', 'State: Uttar Pradesh', 'Country: India'],
            },
            {
                icon: Briefcase,
                color: 'bg-indigo-50 text-indigo-600',
                title: 'Business Activity',
                lines: [
                    'NIC Code: 86906',
                    'NABL Accredited Pathology Lab',
                    'Radiology, Diagnostics & Health Packages',
                ],
            },
            {
                icon: Users,
                color: 'bg-pink-50 text-pink-600',
                title: 'Directors',
                lines: [
                    'Dr. Ashok Kumar Sharma — Managing Director',
                    'Mrs. Priya Gupta — Director Finance',
                    'Mr. Rakesh Srivastava — Director Operations',
                ],
            },
            {
                icon: Globe,
                color: 'bg-emerald-50 text-emerald-600',
                title: 'Registrar & Transfer Agent',
                lines: [
                    'KFin Technologies Limited',
                    'Selenium, Tower B, Plot No. 31-32',
                    'Hyderabad – 500 032',
                ],
            },
        ],
    },

    'general-enquiry': {
        mapSrc: null,
        form: true,
        cards: [
            {
                icon: Phone,
                color: 'bg-green-50 text-green-600',
                title: 'Helpline',
                lines: ['1800-102-PATHO (Toll Free)', 'Available 7 AM – 9 PM, Mon–Sat'],
            },
            {
                icon: Mail,
                color: 'bg-purple-50 text-purple-600',
                title: 'Email',
                lines: ['enquiry@pathotest.com'],
            },
            {
                icon: Clock,
                color: 'bg-yellow-50 text-yellow-600',
                title: 'Response Time',
                lines: ['Emails responded within 24 working hours'],
            },
        ],
    },

    'corporate-health': {
        mapSrc: null,
        form: true,
        cards: [
            {
                icon: HeartPulse,
                color: 'bg-red-50 text-red-600',
                title: 'Corporate Health Desk',
                lines: ['+91 522 400 9999', 'corporate@pathotest.com'],
            },
            {
                icon: Briefcase,
                color: 'bg-indigo-50 text-indigo-600',
                title: 'Services Offered',
                lines: [
                    'Employee Health Packages',
                    'Preventive Screening Programs',
                    'On-site Sample Collection',
                    'Dedicated Account Manager',
                ],
            },
            {
                icon: Clock,
                color: 'bg-yellow-50 text-yellow-600',
                title: 'Business Hours',
                lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 2:00 PM'],
            },
        ],
    },
}

// ── Sub-components ────────────────────────────────────────────────────
function InfoCard({ icon: Icon, color, title, lines }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all">
            <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon size={20} />
                </div>
                <div>
                    <p className="font-bold text-gray-800 text-sm mb-2">{title}</p>
                    {lines.map((l, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed">{l}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

function EnquiryForm({ type }) {
    const isHealth = type === 'corporate-health'
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3 className="text-base font-bold text-gray-800 mb-5">
                {isHealth ? 'Corporate Health Enquiry Form' : 'General Enquiry Form'}
            </h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={e => e.preventDefault()}>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name *</label>
                    <input type="text" placeholder="Dr. Rahul Sharma"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email *</label>
                    <input type="email" placeholder="name@example.com"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone *</label>
                    <input type="tel" placeholder="+91 98XXX XXXXX"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition" />
                </div>
                {isHealth && (
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Company Name *</label>
                        <input type="text" placeholder="Your Organisation"
                            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition" />
                    </div>
                )}
                {isHealth && (
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">No. of Employees</label>
                        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition bg-white">
                            <option>Select range</option>
                            <option>1–50</option>
                            <option>51–200</option>
                            <option>201–500</option>
                            <option>500+</option>
                        </select>
                    </div>
                )}
                {isHealth && (
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Service Required</label>
                        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition bg-white">
                            <option>Select service</option>
                            <option>Employee Health Packages</option>
                            <option>Preventive Screening</option>
                            <option>On-site Collection</option>
                            <option>Custom Package</option>
                        </select>
                    </div>
                )}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</label>
                    <textarea rows={4} placeholder="Write your message here..."
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition resize-none" />
                </div>
                <div className="sm:col-span-2">
                    <button type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors">
                        Submit Enquiry
                    </button>
                </div>
            </form>
        </div>
    )
}

// ── Main Page ─────────────────────────────────────────────────────────
export default function ContactPage() {
    const [activeTab, setActiveTab] = useState('corporate-office')
    const tabData = TAB_DATA[activeTab]

    return (
        <div id="contact" className="min-h-screen bg-gray-50">

            {/* ── Hero Banner ──────────────────────────────────────────── */}
            <div className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-blue-500 opacity-20" />
                <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-blue-400 opacity-20" />
                <div className="relative max-w-6xl mx-auto px-6 py-14">
                    <div className="flex items-center gap-2 text-blue-200 text-sm mb-3">
                        <span>Home</span>
                        <ChevronRight size={14} />
                        <span className="text-white font-semibold">Company Information</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                        Company Information
                    </h1>
                    <p className="mt-3 text-blue-100 text-lg max-w-xl">
                        Get in touch with Patho Test — your trusted diagnostics partner across Uttar Pradesh.
                    </p>
                </div>
            </div>

            {/* ── Tabs ─────────────────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-wrap gap-2 -mt-5 relative z-10">
                    {TABS.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`
                flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold
                shadow-sm transition-all border
                ${activeTab === id
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-blue-200 shadow-md'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                                }
              `}
                        >
                            <Icon size={15} />
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Body ─────────────────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

                {/* Info Cards */}
                <div className={`grid gap-5 ${tabData.cards.length > 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
                    {tabData.cards.map((card) => <InfoCard key={card.title} {...card} />)}
                </div>

                {/* Enquiry Form */}
                {tabData.form && <EnquiryForm type={activeTab} />}

                {/* Google Map */}
                {tabData.mapSrc && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                            <MapPin size={16} className="text-blue-600" />
                            <span className="font-bold text-gray-800 text-sm">Find Us on Map</span>
                        </div>
                        <iframe
                            title="Patho Test Location"
                            src={tabData.mapSrc}
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        />
                    </div>
                )}

                {/* Quick Contact Strip */}
                <div className="bg-blue-700 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-white">Need Immediate Help?</h3>
                        <p className="text-blue-100 text-sm mt-1">
                            Our team is available 7 AM – 9 PM on all working days.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href="tel:18001020000"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors">
                            <Phone size={15} />
                            1800-102-PATHO
                        </a>
                        <a href="mailto:info@pathotest.com"
                            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 border border-blue-400 text-white font-bold text-sm rounded-xl hover:bg-blue-500 transition-colors">
                            <Mail size={15} />
                            info@pathotest.com
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
