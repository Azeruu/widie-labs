import Galaxy from './components/Galaxy'
import Navbar from './components/navbar'
import Hero from './components/hero'
import OurWorks from './components/ourworks'
import Contact from './components/contact'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Full-screen fixed background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <Galaxy
          starSpeed={0.5}
          density={1}
          hueShift={140}
          speed={1}
          glowIntensity={0.3}
          saturation={0}
          mouseRepulsion={false}
          repulsionStrength={1}
          twinkleIntensity={0.8}
          rotationSpeed={0.35}
          transparent={false}
        />
      </div>

      {/* Page content sits on top */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <OurWorks />
        <Contact />
      </div>
    </div>
  )
}

export default App
