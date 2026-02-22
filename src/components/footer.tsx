const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/azeruu' },
  { label: 'Twitter', href: 'https://x.com/azeruu' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-transparent backdrop-blur-xl mt-3">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <a
              href="/"
              className="bitcount-grid-double-utama"
              style={{
                fontSize: '1.5rem',
                letterSpacing: '0.08em',
                background: 'linear-gradient(135deg, #ffffff 30%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              WIDIE.LABS
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              A creative space for building bold experiments at the intersection of
              design, technology, and imagination.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase">
              Explore
            </h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#hero" className="text-white/50 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#work" className="text-white/50 hover:text-white transition-colors text-sm">Our Works</a></li>
              <li><a href="#contact" className="text-white/50 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase">
              Connect
            </h4>
            <ul className="flex flex-col gap-2">
              {SOCIAL_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {currentYear} Widie Labs. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1.5">
            Designed & Built by 
            <a 
              href="https://github.com/azeruu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-medium transition-colors"
            >
              Reza
            </a>
            <span className="text-violet-500 animate-pulse">❤</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
