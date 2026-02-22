import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import OurWorks from './components/ourworks'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* 
        LAYER 0: BINTANG DAN BULAN
      */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #09090b, #000000)',
      }}>
        {/* Subtle stars or dust behind the moon */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundRepeat: 'repeat',
          opacity: 0.3,
          backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0))',
          backgroundSize: '150px 150px',
          transform: `translateY(${scrollY * 0.15}px)`,
        }} />

        {/* The Moon */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '0',
            left: '20%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #f5f5f5 10%, #999 60%, #333 100%)',
            boxShadow: '0 0 100px rgba(255, 255, 255, 0.15), inset -25px -25px 50px rgba(0,0,0,0.6)',
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform',
          }}
        >
          {/* Subtle craters */}
          <div style={{ position: 'absolute', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,0,0,0.15)', top: '25%', left: '20%', boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.2)' }} />
          <div style={{ position: 'absolute', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(0,0,0,0.1)', top: '55%', right: '25%', boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.2)' }} />
          <div style={{ position: 'absolute', width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(0,0,0,0.12)', top: '40%', right: '15%', boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)' }} />
          <div style={{ position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(0,0,0,0.18)', top: '65%', left: '35%', boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '-20%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center 20%, rgba(215, 208, 228, 0.25) 0%, transparent 50%)',
          mixBlendMode: 'screen',
        }} />
      </div>


      {/* 
        LAYER 1: GUNUNG
        Gunung bergerak lebih cepat ke atas saat discroll, menyembunyikan bulan di belakangnya.
        Memiliki z-index 1 agar berada di depan bulan (z-index 0) tapi di belakang konten dan section berikutnya (z-index 2+)
      */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '0',
            width: '100%',
            height: '50vh',
            transform: `translateY(${-scrollY * 0.2}px)`, /* Bergerak berlawanan arah scroll / lebih cepat naik */
            willChange: 'transform',
          }}
        >
          {/* Gunung Belakang (Gelap) */}
          {/* Gunung Kiri */}
          <div style={{
            position: 'absolute',
            bottom: '-50%',
            left: '-25%',
            width: '80%',
            height: '170%',
            background: 'linear-gradient(to bottom, #262736ff, #09090b)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            boxShadow: 'inset 0 20px 50px rgba(124, 58, 237, 0.1)', /* Efek cahaya bulan dari atas */
          }} />

          {/* Gunung Kanan */}
          <div style={{
            position: 'absolute',
            bottom: "-100",
            right: '-5%',
            width: '80%',
            height: '160%',
            background: 'linear-gradient(to bottom, #34365aff, #09090b)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            boxShadow: 'inset 0 30px 60px rgba(124, 58, 237, 0.15)', /* Efek cahaya bulan dari atas */
          }} />

          {/* Gunung Depan (Lebih Gelap, menutupi dasar) */}
          <div style={{
            position: 'absolute',
            bottom: '-95%',
            left: '10%',
            width: '80%',
            height: '170%',
            background: 'linear-gradient(to bottom, #23091fff, #09090b)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }} />

          {/* Cahaya Rim Lighting dari bulan di puncak gunung */}

        </div>
      </div>

      {/* LAYER 2: Page content sits on top */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Hero />

        {/* Sections below hero get the textured background to cover the moon */}
        <div className="bg-gray-transparent relative z-20">
          <About />
          <OurWorks />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
