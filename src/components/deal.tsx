import FadeIn from './FadeIn'

const COMPANIES = [
    {
        name: 'NVIDIA',
        hoverColor: '#76b900',
        logo: <span className="font-black text-2xl tracking-widest font-sans">NVIDIA</span>,
    },
    {
        name: 'TESLA',
        hoverColor: '#e82127',
        logo: <span className="font-serif text-2xl tracking-[0.25em] font-bold">T E S L A</span>,
    },
    {
        name: 'Google',
        hoverColor: '#4285F4',
        logo: <span className="font-sans font-bold text-2xl tracking-tighter">Google</span>,
    },
    {
        name: 'Microsoft',
        hoverColor: '#ffffff', // text color on hover
        logo: (
            <div className="flex items-center gap-2">
                <div className="grid grid-cols-2 gap-0.5 w-5 h-5 transition-all duration-300">
                    <div className="bg-[#f25022] rounded-sm"></div>
                    <div className="bg-[#7fba00] rounded-sm"></div>
                    <div className="bg-[#00a4ef] rounded-sm"></div>
                    <div className="bg-[#ffb900] rounded-sm"></div>
                </div>
                <span className="font-semibold text-xl">Microsoft</span>
            </div>
        ),
    },
    {
        name: 'Apple',
        hoverColor: '#ffffff',
        logo: <span className="text-2xl font-semibold tracking-tight"> Apple</span>,
    },
    {
        name: 'Spotify',
        hoverColor: '#1DB954',
        logo: <span className="font-bold text-2xl tracking-tighter">Spotify</span>,
    },
]

export default function Deal() {
    return (
        <section className="relative py-20 px-6 overflow-hidden border-y border-white/5 bg-white/[0.02]">
            <div className="relative max-w-6xl mx-auto text-center">
                <FadeIn delay={100}>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-10">
                        Trusted by Innovative Teams Worldwide
                    </p>
                </FadeIn>

                <FadeIn delay={200}>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20">
                        {COMPANIES.map((company) => (
                            <div
                                key={company.name}
                                className="group cursor-pointer flex items-center justify-center transition-all duration-300"
                                style={{
                                    color: 'rgba(255, 255, 255, 0.69)', // Base gray text
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = company.hoverColor;
                                    // For Microsoft logo, the squares are already colored, but let's handle grayscale wrapper
                                    e.currentTarget.classList.remove('grayscale', 'opacity-50');
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.25)';
                                    e.currentTarget.classList.add('grayscale', 'opacity-50');
                                }}
                            >
                                <div className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                    {company.logo}
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
