
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Deal from './components/deal'
import OurWorks from './components/ourworks'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'linear-gradient(to bottom, #24243aff, #1a1a23ff, #2f1449ff)' }}>
      {/* LAYER 2: Page content sits on top */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Hero />

        <div className="relative z-20">
          <About />
          <Deal />
          <OurWorks />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
