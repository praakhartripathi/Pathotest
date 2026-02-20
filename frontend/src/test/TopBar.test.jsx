import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TopBar from '../components/TopBar'

describe('TopBar', () => {
  it('renders Patho Test brand', () => {
    render(<TopBar onHomeClick={() => {}} />)
    expect(screen.getByRole('button', { name: /go to home page/i })).toHaveTextContent('Patho Test')
  })

  it('renders UP city dropdown defaults to Lucknow', () => {
    render(<TopBar onHomeClick={() => {}} />)
    expect(screen.getByDisplayValue('Lucknow')).toBeInTheDocument()
  })

  it('renders call link and sign in controls', () => {
    render(<TopBar onHomeClick={() => {}} />)
    expect(screen.getByRole('link', { name: /call us now/i })).toHaveAttribute('href', 'tel:+917500075111')
    expect(screen.getByText(/sign in/i)).toBeInTheDocument()
  })
})
