import FadeIn from './FadeIn'

export default function Hero() {

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        maxWidth: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
      }}
    >
      {/* Glow orb */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(79,70,229,0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      {/* Badge */}
      <FadeIn delay={100}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            border: '1px solid rgba(167,139,250,0.35)',
            background: 'rgba(124,58,237,0.12)',
            marginBottom: '2rem',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#a78bfa',
              boxShadow: '0 0 6px #a78bfa',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              color: 'rgba(196,181,253,0.9)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
            }}
          >
            Experimental Digital Lab
          </span>
        </div>
      </FadeIn>

      {/* Main headline */}
      <FadeIn delay={300}>
        <h1
          className="bitcount-grid-double-utama"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 1.05,
            margin: '0 0 1.5rem',
            background: 'linear-gradient(135deg, #ffffff 20%, #c4b5fd 55%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            maxWidth: '900px',
          }}
        >
          WHERE IDEAS
          <br />
          BECOME LABS
        </h1>
      </FadeIn>

      {/* Subtitle */}
      <FadeIn delay={400}>
        <p
          style={{
            color: 'rgba(203,213,225,0.7)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '560px',
            lineHeight: 1.7,
            margin: '0 0 3rem',
            fontWeight: 400,
          }}
        >
          A creative space for building bold experiments at the intersection of
          design, technology, and imagination.
        </p>
      </FadeIn>

      {/* CTA Buttons */}
      <FadeIn delay={500}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              border: 'none',
              color: 'white',
              padding: '0.8rem 2rem',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 0 32px rgba(124,58,237,0.5)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 0 48px rgba(124,58,237,0.7)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 0 32px rgba(124,58,237,0.5)'
            }}
          >
            Explore the Labs →
          </button>

          <button onClick={() => window.location.href = '#work'}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              padding: '0.8rem 2rem',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'
              e.currentTarget.style.background = 'rgba(124,58,237,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            View Our Work
          </button>
        </div>
      </FadeIn>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          animation: 'bounce 2s infinite',
        }}
      >
        <span>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}
