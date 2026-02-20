import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '../App'

describe('App offer popup timing', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows popup first at 120 seconds and reopens every 120 seconds after close', () => {
    vi.useFakeTimers()
    render(<App />)

    expect(screen.queryByRole('dialog', { name: /pathotest full body checkup offer/i })).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(119000)
    })
    expect(screen.queryByRole('dialog', { name: /pathotest full body checkup offer/i })).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByRole('dialog', { name: /pathotest full body checkup offer/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /close offer popup/i }))
    expect(screen.queryByRole('dialog', { name: /pathotest full body checkup offer/i })).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(120000)
    })
    expect(screen.getByRole('dialog', { name: /pathotest full body checkup offer/i })).toBeInTheDocument()
  })
})
