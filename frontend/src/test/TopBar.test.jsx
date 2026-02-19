import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TopBar from '../components/TopBar'

describe('TopBar', () => {
    it('renders the app name', () => {
        render(<TopBar />)
        expect(screen.getByText('Path')).toBeInTheDocument()
    })

    it('renders Investor link', () => {
        render(<TopBar />)
        expect(screen.getByRole('link', { name: /investor/i })).toBeInTheDocument()
    })

    it('renders Contact Us link', () => {
        render(<TopBar />)
        expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument()
    })

    it('renders phone number', () => {
        render(<TopBar />)
        expect(screen.getByText(/12345 67890/i)).toBeInTheDocument()
    })

    it('renders email address', () => {
        render(<TopBar />)
        expect(screen.getByText(/info@pathotest\.com/i)).toBeInTheDocument()
    })
})
