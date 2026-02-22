export default function About() {
    return (
        <section id="about"
            className="relative py-28 px-6 overflow-hidden fixed inset-0 z-0 overflow-hidden"
        >
            <div className="relative max-w-5xl mx-auto text-center">
                {/* Glow orb */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-violet-600/10 blur-[80px]"
                />

                <div className="relative z-10">
                    <span className="inline-block px-4 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-widest uppercase mb-8">
                        About Us
                    </span>
                    <h2 className="bitcount-grid-double-utama text-3xl md:text-5xl bg-gradient-to-r from-white via-violet-200 to-indigo-400 bg-clip-text text-transparent mb-8">
                        Pioneering the Future of Digital Experiences
                    </h2>

                    <div className="flex flex-col gap-6 text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                        <p>
                            At Widie Labs, we don't just build websites; we craft immersive digital landscapes.
                            Our mission is to bridge the gap between imagination and reality through cutting-edge design and flawless engineering.
                        </p>
                        <p>
                            We believe that every pixel tells a story and every interaction is an opportunity to delight.
                            By blending art with technology, we experiment with bold new ideas that push the boundaries of what's possible on the web.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-4xl font-bold text-white">50+</span>
                            <span className="text-white/50 text-sm uppercase tracking-wider">Projects</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-4xl font-bold text-white">99%</span>
                            <span className="text-white/50 text-sm uppercase tracking-wider">Client Satisfaction</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-4xl font-bold text-white">24/7</span>
                            <span className="text-white/50 text-sm uppercase tracking-wider">Support</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-4xl font-bold text-white">∞</span>
                            <span className="text-white/50 text-sm uppercase tracking-wider">Possibilities</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}