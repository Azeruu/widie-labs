import { useEffect, useState, useRef } from 'react'

// ─── Easy to change later ───────────────────────────
const GITHUB_USERNAME = 'azeruu'
// ─────────────────────────────────────────────────────

interface Repo {
  id: number
  name: string
  full_name: string
  html_url: string
  homepage: string | null
  stargazers_count: number
}

function ProjectCard({ repo }: { repo: Repo }) {
  const previewUrl = repo.homepage!

  return (
    <a
      href={previewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-[420px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-violet-500/40 hover:bg-white/10 transition-all duration-300 cursor-pointer block"
    >
      {/* Live iframe preview */}
      <div className="relative w-full h-60 bg-black/40 overflow-hidden">
        <iframe
          src={previewUrl}
          title={repo.name}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-none"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/90 text-white text-xs font-semibold backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            View Live
          </span>
        </div>
      </div>

      {/* Project name only */}
      <div className="px-5 py-4 flex items-center justify-between">
        <h3 className="text-white font-semibold text-sm tracking-wide capitalize">
          {repo.name.replace(/[-_]/g, ' ')}
        </h3>
        <svg className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </a>
  )
}

export default function OurWorks() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Drag & Auto-scroll refs
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDown(true)
    setIsDragging(false)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const onMouseLeave = () => {
    setIsDown(false)
    setIsDragging(false)
  }

  const onMouseUp = () => {
    setIsDown(false)
    // Small delay before re-enabling clicks so the current click doesn't bubble
    setTimeout(() => setIsDragging(false), 50)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    
    if (Math.abs(walk) > 5) {
      setIsDragging(true)
    }
    
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`
    )
      .then((r) => {
        if (!r.ok) throw new Error('GitHub API error')
        return r.json() as Promise<Repo[]>
      })
      .then((data) => {
        // Only keep repos that have a live preview (homepage)
        const withPreview = data
          .filter((r) => r.homepage && r.homepage.trim() !== '')
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
        setRepos(withPreview)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <section id="work" className="relative py-24 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-8 mb-14 text-center">
        <span className="inline-block px-4 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-widest uppercase mb-4">
          Our Works
        </span>
        <h2 className="bitcount-grid-double-utama text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-white via-violet-200 to-indigo-400 bg-clip-text text-transparent">
          What We've Built
        </h2>
        <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed">
          A collection of live projects and experiments crafted at Widie Labs.
        </p>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-20 gap-3 text-white/40 text-sm">
          <span className="w-4 h-4 rounded-full border-2 border-violet-400 border-t-transparent animate-spin" />
          Fetching from GitHub…
        </div>
      )}

      {error && (
        <div className="text-center py-16 text-white/30 text-sm">
          Could not load repositories. Check back later.
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <>
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black/60 to-transparent" />

          {/* Manual scroller around CSS marquee */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="flex overflow-x-auto px-12 py-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {/* CSS Marquee track inside */}
            <div className="flex w-max gap-6 animate-marquee-left has-[:hover]:[animation-play-state:paused]">
              {/* Double the list for seamless infinite loop */}
              {[...repos, ...repos].map((repo, idx) => (
                <div 
                  key={`${repo.id}-${idx}`} 
                  className="snap-center shrink-0"
                  style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                >
                  <ProjectCard repo={repo} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="text-center py-16 text-white/30 text-sm">
          No live projects found yet.
        </div>
      )}

      {/* Github profile link */}
      {!loading && !error && (
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 bg-white/5 text-white/60 text-sm font-medium hover:border-violet-500/50 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            View all on GitHub
          </a>
        </div>
      )}
    </section>
  )
}
