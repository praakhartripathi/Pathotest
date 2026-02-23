import { useEffect, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import InvestorPage from './pages/InvestorPage'
import ContactPage from './pages/ContactPage'
import NearestLabPage from './pages/NearestLabPage'
import HomeHero from './components/HomeHero'
import OfferPopup from './components/OfferPopup'
import Footer from './components/Footer'
import SignInModal from './components/SignInModal'

const OFFER_POPUP_INTERVAL_MS = 120000

function App() {
  const [page, setPage] = useState('home')
  const [showOfferPopup, setShowOfferPopup] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowOfferPopup(true)
    }, OFFER_POPUP_INTERVAL_MS)

    const intervalId = window.setInterval(() => {
      setShowOfferPopup(true)
    }, OFFER_POPUP_INTERVAL_MS)

    return () => {
      window.clearTimeout(timeoutId)
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar
        onHomeClick={() => setPage('home')}
        onInvestorClick={() => setPage('investor')}
        onContactClick={() => setPage('contact')}
        onSignInClick={() => setShowSignIn(true)}
      />
      <Navbar onNearestLabClick={() => setPage('nearest-lab')} />

      {page === 'investor' && <InvestorPage />}
      {page === 'contact' && <ContactPage />}
      {page === 'nearest-lab' && <NearestLabPage />}

      {page === 'home' && (
        <main className="pb-10">
          <HomeHero />
        </main>
      )}

      <OfferPopup open={showOfferPopup} onClose={() => setShowOfferPopup(false)} />
      <SignInModal open={showSignIn} onClose={() => setShowSignIn(false)} />
      <Footer />
    </div>
  )
}

export default App
