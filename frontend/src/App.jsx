import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />
      {/* Page content goes here */}
    </div>
  )
}

export default App
