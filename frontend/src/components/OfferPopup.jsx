import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function OfferPopup({ open, onClose }) {
  useEffect(() => {
    if (!open) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  return (
    <div
      className="fixed inset-0 z-[1100] bg-black/55 flex items-center justify-center p-4"
      onClick={onClose}
      role="presentation"
      data-testid="offer-popup-overlay"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pathotest Full Body Checkup Offer"
        className="relative bg-[#efefef] rounded-2xl shadow-2xl w-full max-w-[780px] max-h-[calc(100vh-2rem)] overflow-y-auto"
        onClick={stopPropagation}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close offer popup"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/95 text-[#1f2937] border border-gray-200 flex items-center justify-center"
        >
          <X size={18} />
        </button>

        <img
          src="/offers/pathotest-offer.png"
          alt="Pathotest Full Body Checkup promotional offer"
          className="w-full h-auto rounded-t-2xl"
        />

        <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
          <a
            href="tel:+917500075111"
            className="block w-full text-center rounded-2xl bg-[#194b76] text-white font-bold text-2xl sm:text-3xl py-4"
          >
            Call: 75000-75111
          </a>
        </div>
      </div>
    </div>
  )
}
