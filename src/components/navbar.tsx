import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  // { label: 'Labs', href: '#labs' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(5, 5, 15, 0.6)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="bitcount-grid-double-utama"
          style={{
            fontSize: '1.5rem',
            color: 'white',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            background: 'linear-gradient(135deg, #ffffff 30%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          WIDIE.LABS
        </a>

        {/* Nav links */}
        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'white')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)')
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            border: 'none',
            color: 'white',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            boxShadow: '0 0 20px rgba(124,58,237,0.4)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85'
            e.currentTarget.style.transform = 'scale(1.04)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          Get Started
        </Button>
      </nav>
    </header>
  )
}
