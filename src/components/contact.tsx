import { useState } from 'react'
import FadeIn from './FadeIn'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/azeruu',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hello@widie.labs',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/azeruu',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // Replace with your actual form endpoint (e.g. Formspree, Resend, etc.)
    try {
      await new Promise((r) => setTimeout(r, 1200)) // simulate network
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Glow orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-600/10 blur-[100px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <span className="inline-block px-4 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-widest uppercase mb-4">
              Contact
            </span>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="bitcount-grid-double-utama text-4xl md:text-5xl bg-gradient-to-r from-white via-violet-200 to-indigo-400 bg-clip-text text-transparent mb-4">
              Let's Build Together
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed">
              Have an idea, a project, or just want to say hi?
              Drop us a message and we'll get back to you.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — Form */}
          <FadeIn delay={400}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-white/60 text-xs font-medium tracking-wider uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Azeru"
                    className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm px-4 py-2.5 outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-white/60 text-xs font-medium tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm px-4 py-2.5 outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-white/60 text-xs font-medium tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or idea…"
                  className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm px-4 py-2.5 outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold text-sm py-3 px-8 hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(124,58,237,0.4)]"
              >
                {status === 'sending' && (
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                )}
                {status === 'sent' ? '✓ Message Sent!' : status === 'error' ? 'Failed — Try Again' : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </FadeIn>

          {/* Right — Info card */}
          <FadeIn delay={500}>
            <div className="flex flex-col gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-5">
                <h3 className="text-white font-semibold text-base">Connect with us</h3>
                <ul className="flex flex-col gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-200 group"
                      >
                        <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-violet-500/40 group-hover:bg-violet-500/10 transition-all">
                          {s.icon}
                        </span>
                        <span className="text-sm font-medium">{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
                <p className="text-white/60 text-sm leading-relaxed">
                  We typically respond within <span className="text-white font-medium">24 hours</span>. Open collaborations, and full-time opportunities.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
