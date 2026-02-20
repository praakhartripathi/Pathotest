import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import InvestorPage from './pages/InvestorPage'
import ContactPage from './pages/ContactPage'
import HomeHero from './components/HomeHero'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar
        onInvestorClick={() => setPage('investor')}
        onContactClick={() => setPage('contact')}
      />
      <Navbar />

      {page === 'investor' && <InvestorPage />}
      {page === 'contact' && <ContactPage />}

      {page === 'home' && (
        <main className="pb-10">
          <HomeHero />
        </main>
      )}
    </div>
  )
}

export default App
