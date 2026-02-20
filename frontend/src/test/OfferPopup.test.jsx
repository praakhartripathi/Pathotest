import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import OfferPopup from '../components/OfferPopup'

describe('OfferPopup', () => {
  it('does not render when closed', () => {
    const { queryByRole } = render(<OfferPopup open={false} onClose={() => { }} />)
    expect(queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders dialog and call link when open', () => {
    render(<OfferPopup open={true} onClose={() => { }} />)

    expect(screen.getByRole('dialog', { name: /pathotest full body checkup offer/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /call: 75000-75111/i })).toHaveAttribute('href', 'tel:+917500075111')
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    render(<OfferPopup open={true} onClose={onClose} />)

    fireEvent.click(screen.getByRole('button', { name: /close offer popup/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose on overlay click', () => {
    const onClose = vi.fn()
    render(<OfferPopup open={true} onClose={onClose} />)

    fireEvent.click(screen.getByTestId('offer-popup-overlay'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose on escape key', () => {
    const onClose = vi.fn()
    render(<OfferPopup open={true} onClose={onClose} />)

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
