import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import KeyAreas from './components/KeyAreas'
import ImpactNumbers from './components/ImpactNumbers'
import Volunteers from './components/Volunteers'
import MakingChange from './components/MakingChange'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <KeyAreas />
      <ImpactNumbers />
      <Volunteers />
      <MakingChange />
      <Footer />
    </div>
  )
}

export default App
