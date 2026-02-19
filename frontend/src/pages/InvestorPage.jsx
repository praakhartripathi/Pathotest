import {
    Download, TrendingUp, BarChart2, Users, FileText,
    Shield, Award, ChevronRight, ArrowUpRight, BookOpen, Calendar
} from 'lucide-react'

// ── Static Data ──────────────────────────────────────────────
const KEY_METRICS = [
    { label: 'Revenue', value: '₹1,240 Cr', change: '+18.4%', up: true },
    { label: 'EBITDA', value: '₹312 Cr', change: '+22.1%', up: true },
    { label: 'PAT', value: '₹198 Cr', change: '+19.7%', up: true },
    { label: 'Tests Conducted', value: '4.2 Cr+', change: '+15.3%', up: true },
]

const ANNUAL_REPORTS = [
    { year: 'FY 2024–25', size: '8.4 MB', pages: 142 },
    { year: 'FY 2023–24', size: '7.9 MB', pages: 138 },
    { year: 'FY 2022–23', size: '7.1 MB', pages: 126 },
    { year: 'FY 2021–22', size: '6.8 MB', pages: 118 },
]

const INVESTOR_INFO = [
    { icon: Calendar, title: 'AGM Notice', date: '28 June 2025', tag: 'Meeting' },
    { icon: FileText, title: 'Q3 FY25 Results', date: '15 Jan 2025', tag: 'Quarterly' },
    { icon: FileText, title: 'Q2 FY25 Results', date: '15 Oct 2024', tag: 'Quarterly' },
    { icon: FileText, title: 'Q1 FY25 Results', date: '18 Jul 2024', tag: 'Quarterly' },
    { icon: BookOpen, title: 'Dividend Announcement FY25', date: '10 May 2025', tag: 'Dividend' },
    { icon: BookOpen, title: 'Investor Presentation FY25', date: '05 May 2025', tag: 'Presentation' },
]

const GOVERNANCE_DOCS = [
    { title: 'Board of Directors', desc: 'Composition & profiles of our board members' },
    { title: 'Code of Conduct', desc: 'Ethical standards for employees and directors' },
    { title: 'Whistle Blower Policy', desc: 'Reporting of concerns and grievances' },
    { title: 'Related Party Transactions', desc: 'Policy on transactions with related parties' },
    { title: 'Risk Management Policy', desc: 'Framework for identifying and managing risks' },
    { title: 'CSR Policy', desc: 'Corporate social responsibility commitments' },
]

const TAG_COLORS = {
    Meeting: 'bg-purple-100 text-purple-700',
    Quarterly: 'bg-blue-100 text-blue-700',
    Dividend: 'bg-green-100 text-green-700',
    Presentation: 'bg-orange-100 text-orange-700',
}

// ── Components ───────────────────────────────────────────────
function SectionHeader({ title, subtitle }) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="mt-1 text-gray-500 text-sm">{subtitle}</p>}
            <div className="mt-3 w-12 h-1 rounded-full bg-blue-600" />
        </div>
    )
}

function MetricCard({ label, value, change, up }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-2 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</span>
            <span className="text-3xl font-extrabold text-gray-800">{value}</span>
            <span className={`text-sm font-semibold flex items-center gap-1 ${up ? 'text-green-600' : 'text-red-500'}`}>
                <TrendingUp size={14} />
                {change} YoY
            </span>
        </div>
    )
}

function AnnualReportCard({ year, size, pages }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-between hover:shadow-md hover:border-blue-200 transition-all group">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <BarChart2 size={22} className="text-blue-600" />
                </div>
                <div>
                    <p className="font-bold text-gray-800">Annual Report {year}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{pages} pages · PDF · {size}</p>
                </div>
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">
                <Download size={15} />
                Download
            </button>
        </div>
    )
}

function InvestorInfoCard({ icon: Icon, title, date, tag }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start justify-between hover:shadow-md hover:border-blue-200 transition-all group cursor-pointer">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                    <Icon size={18} className="text-blue-600" />
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-sm leading-snug">{title}</p>
                    <p className="text-xs text-gray-400 mt-1">{date}</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
                <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${TAG_COLORS[tag]}`}>
                    {tag}
                </span>
                <ArrowUpRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
            </div>
        </div>
    )
}

function GovernanceCard({ title, desc }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-between hover:shadow-md hover:border-blue-200 transition-all group cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Shield size={17} className="text-blue-600" />
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-sm">{title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
            </div>
            <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-4" />
        </div>
    )
}

// ── Main Page ────────────────────────────────────────────────
export default function InvestorPage() {
    return (
        <div id="investor" className="min-h-screen bg-gray-50">

            {/* ── Hero Banner ──────────────────────────────────────── */}
            <div className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden">
                {/* decorative circles */}
                <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-blue-500 opacity-20" />
                <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-blue-400 opacity-20" />
                <div className="relative max-w-6xl mx-auto px-6 py-14">
                    <div className="flex items-center gap-2 text-blue-200 text-sm mb-3">
                        <span>Home</span>
                        <ChevronRight size={14} />
                        <span className="text-white font-semibold">Investors</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Investor Relations
                    </h1>
                    <p className="mt-3 text-blue-100 text-lg max-w-xl">
                        Transparent communication with our investors and stakeholders.
                        Patho Test — India's trusted diagnostics partner.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        {[
                            { icon: Users, label: 'BSE Listed' },
                            { icon: Award, label: 'NABL Accredited' },
                            { icon: TrendingUp, label: '18+ Years Trusted' },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white text-sm font-medium backdrop-blur-sm">
                                <Icon size={15} />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Body ─────────────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

                {/* 1. Financials */}
                <section>
                    <SectionHeader
                        title="Financials"
                        subtitle="Key financial highlights for FY 2024–25"
                    />

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {KEY_METRICS.map((m) => <MetricCard key={m.label} {...m} />)}
                    </div>

                    {/* Annual Reports */}
                    <h3 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
                        <BarChart2 size={17} className="text-blue-600" />
                        Annual Reports
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ANNUAL_REPORTS.map((r) => <AnnualReportCard key={r.year} {...r} />)}
                    </div>
                </section>

                {/* 2. Investor Information */}
                <section>
                    <SectionHeader
                        title="Investor Information"
                        subtitle="Latest disclosures, results and regulatory filings"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {INVESTOR_INFO.map((item) => <InvestorInfoCard key={item.title} {...item} />)}
                    </div>
                </section>

                {/* 3. Corporate Governance */}
                <section>
                    <SectionHeader
                        title="Corporate Governance"
                        subtitle="Policies and frameworks upholding our commitment to integrity"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {GOVERNANCE_DOCS.map((doc) => <GovernanceCard key={doc.title} {...doc} />)}
                    </div>
                </section>

                {/* Contact IR desk */}
                <section className="bg-blue-700 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-white">Investor Queries?</h3>
                        <p className="text-blue-100 text-sm mt-1">
                            Reach our dedicated Investor Relations desk for any queries.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href="mailto:investors@pathotest.com"
                            className="px-5 py-2.5 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors"
                        >
                            investors@pathotest.com
                        </a>
                        <a
                            href="tel:+911800PATHO"
                            className="px-5 py-2.5 bg-blue-600 border border-blue-400 text-white font-bold text-sm rounded-xl hover:bg-blue-500 transition-colors"
                        >
                            1800-PATHO-TEST
                        </a>
                    </div>
                </section>

            </div>
        </div>
    )
}
