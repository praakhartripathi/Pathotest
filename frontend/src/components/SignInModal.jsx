import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export default function SignInModal({ open, onClose }) {
    const [mobile, setMobile] = useState('')
    const [consent, setConsent] = useState(true)
    const [step, setStep] = useState('mobile') // 'mobile' | 'otp'
    const [otp, setOtp] = useState('')
    const [sending, setSending] = useState(false)

    // Reset on open
    useEffect(() => {
        if (open) {
            setMobile('')
            setOtp('')
            setStep('mobile')
            setSending(false)
        }
    }, [open])

    // Close on Escape
    useEffect(() => {
        if (!open) return undefined
        const handler = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [open, onClose])

    // Prevent body scroll while open
    useEffect(() => {
        if (!open) return undefined
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = prev }
    }, [open])

    if (!open) return null

    const handleMobileChange = (e) => {
        const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
        setMobile(digits)
    }

    const handleGenerateOTP = (e) => {
        e.preventDefault()
        if (mobile.length !== 10) return
        setSending(true)
        // Simulate OTP send (real integration can replace this)
        setTimeout(() => {
            setSending(false)
            setStep('otp')
        }, 800)
    }

    const handleVerifyOTP = (e) => {
        e.preventDefault()
        // Placeholder — real verification goes here
        onClose()
    }

    return (
        /* Backdrop */
        <div
            role="presentation"
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            {/* Modal card */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Sign In Sign Up Modal"
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[420px] px-6 py-8 sm:px-10 sm:py-10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    type="button"
                    aria-label="Close sign in modal"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <X size={22} />
                </button>

                {/* Heading */}
                <h2 className="text-2xl font-extrabold text-[#2b2d37] text-center mb-2">
                    Sign In/Sign Up to Continue
                </h2>
                <p className="text-sm text-center text-gray-500 mb-6 leading-snug">
                    We&apos;ll confirm your booking shortly!<br />
                    Please provide your number to receive updates.
                </p>

                {step === 'mobile' ? (
                    <form onSubmit={handleGenerateOTP} className="space-y-5">
                        {/* Mobile input */}
                        <input
                            id="sign-in-mobile"
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="Enter Your Mobile"
                            value={mobile}
                            onChange={handleMobileChange}
                            className="w-full h-13 px-5 py-3.5 rounded-full border border-gray-200 bg-gray-50 text-base text-gray-700 outline-none focus:ring-2 focus:ring-[#194b76] placeholder:text-gray-400"
                            required
                        />

                        {/* Consent checkbox */}
                        <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-600 leading-snug">
                            <input
                                type="checkbox"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                className="mt-0.5 h-5 w-5 rounded accent-[#194b76] flex-shrink-0"
                            />
                            <span>
                                I authorize Pathotest and its affiliates/representatives to contact me via
                                phone calls, email, RCS, SMS or WhatsApp.
                            </span>
                        </label>

                        {/* Generate OTP button */}
                        <button
                            type="submit"
                            disabled={mobile.length !== 10 || sending}
                            className="w-full h-14 rounded-full bg-[#194b76] text-white font-bold text-xl border-0 hover:bg-[#0e3a5e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {sending ? 'Sending OTP…' : 'Generate OTP'}
                        </button>
                    </form>
                ) : (
                    /* OTP entry step */
                    <form onSubmit={handleVerifyOTP} className="space-y-5">
                        <p className="text-sm text-center text-gray-500">
                            OTP sent to <span className="font-semibold text-[#194b76]">+91 {mobile}</span>
                        </p>
                        <input
                            id="sign-in-otp"
                            type="tel"
                            inputMode="numeric"
                            maxLength={6}
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            className="w-full h-13 px-5 py-3.5 rounded-full border border-gray-200 bg-gray-50 text-base text-gray-700 outline-none focus:ring-2 focus:ring-[#194b76] placeholder:text-gray-400 tracking-widest text-center"
                            required
                        />
                        <button
                            type="submit"
                            disabled={otp.length !== 6}
                            className="w-full h-14 rounded-full bg-[#194b76] text-white font-bold text-xl border-0 hover:bg-[#0e3a5e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Verify &amp; Continue
                        </button>
                        <button
                            type="button"
                            onClick={() => setStep('mobile')}
                            className="w-full text-sm text-[#194b76] hover:underline bg-transparent border-0"
                        >
                            ← Change number
                        </button>
                    </form>
                )}

                {/* Footer legal */}
                <p className="mt-6 text-xs text-center text-gray-400">
                    By proceeding, you agree to Pathotest{' '}
                    <a href="#" className="text-[#194b76] underline">T&amp;C</a>
                    {' '}and{' '}
                    <a href="#" className="text-[#194b76] underline">Privacy Policy</a>.
                </p>
            </div>
        </div>
    )
}
