import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import InvestorPage from './pages/InvestorPage'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar onInvestorClick={() => setPage('investor')} />
      <Navbar />

      {page === 'investor' && (
        <InvestorPage onBack={() => setPage('home')} />
      )}

      {page === 'home' && (
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Home content placeholder */}
          <p className="text-gray-400 text-center mt-20 text-lg">
            Patho Test — Home page coming soon.
          </p>
        </main>
      )}
    </div>
  )
}

export default App
