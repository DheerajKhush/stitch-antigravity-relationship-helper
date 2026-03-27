interface WelcomeStepProps {
  readonly onNext: () => void;
}

export const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto welcome-bg overflow-x-hidden">
      {/* Background decoration */}
      <div className="welcome-blob-top" />
      <div className="welcome-blob-bottom" />

      <div className="relative z-10 flex flex-col min-h-full px-5 md:px-8 pt-12 md:pt-20 pb-8">
        {/* Illustration */}
        <div className="flex justify-center mb-6 md:mb-10 onboard-fade-up shrink-0" style={{ animationDelay: '0.1s' }}>
          <svg className="w-40 sm:w-48 md:w-[220px] h-auto" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ground */}
            <ellipse cx="110" cy="148" rx="80" ry="10" fill="#d67d61" fillOpacity="0.15"/>

            {/* Left figure (woman) */}
            {/* Head */}
            <circle cx="78" cy="52" r="22" fill="#f5cba7"/>
            {/* Hair */}
            <path d="M57 42 Q78 18 99 42 Q94 30 78 28 Q62 30 57 42Z" fill="#5d4037"/>
            {/* Body */}
            <path d="M60 72 Q78 65 96 72 L100 130 H56Z" fill="#e8927c"/>
            {/* Dress detail */}
            <path d="M65 95 Q78 88 91 95" stroke="#c96b55" strokeWidth="1.5" fill="none"/>

            {/* Right figure (man) */}
            {/* Head */}
            <circle cx="142" cy="55" r="22" fill="#f0b27a"/>
            {/* Hair */}
            <path d="M122 48 Q142 28 162 48 Q158 36 142 34 Q126 36 122 48Z" fill="#3e2723"/>
            {/* Body */}
            <path d="M124 76 Q142 68 160 76 L165 130 H119Z" fill="#5d7a6e"/>
            {/* Shirt detail */}
            <path d="M132 90 L142 85 L152 90" stroke="#4a6358" strokeWidth="1.5" fill="none"/>

            {/* Joined hands */}
            <path d="M96 105 Q110 98 124 105" stroke="#944931" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <circle cx="96" cy="105" r="5" fill="#f5cba7"/>
            <circle cx="124" cy="105" r="5" fill="#f0b27a"/>

            {/* Small hearts */}
            <text x="100" y="35" fontSize="14" fill="#d67d61" opacity="0.8">♥</text>
            <text x="130" y="28" fontSize="10" fill="#e8927c" opacity="0.6">♥</text>
            <text x="115" y="22" fontSize="8" fill="#944931" opacity="0.5">♥</text>
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center relative z-20">
          <div className="onboard-fade-up" style={{ animationDelay: '0.25s' }}>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold leading-tight mb-4 tracking-tight" style={{ color: '#2b1810' }}>
              You're one of<br />
              <span className="gradient-text">the lucky ones.</span>
            </h1>
          </div>

          <div className="onboard-fade-up" style={{ animationDelay: '0.4s' }}>
            {/* Stat card */}
            <div className="glass-panel rounded-3xl p-5 md:p-6 mb-6 md:mb-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#944931]/10 to-[#d67d61]/20 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-baseline gap-2 mb-1 md:mb-2">
                  <span className="font-headline text-5xl md:text-6xl font-black gradient-text tracking-tighter">53%</span>
                  <span className="text-xs md:text-sm font-label font-bold text-[#8a736a] uppercase tracking-widest">of adults</span>
                </div>
                <p className="text-sm md:text-base font-body text-[#57615c] leading-relaxed">
                  are currently in a committed relationship.
                  <br />
                  <span className="font-bold text-[#2b1810] mt-1 block">You're already ahead.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="onboard-fade-up" style={{ animationDelay: '0.55s' }}>
            <p className="text-base md:text-lg font-body text-[#57615c] leading-relaxed mb-8">
              Being here means you care enough to grow together. Let's help you build something truly remarkable.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="onboard-fade-up relative z-20 shrink-0 mt-auto pt-4" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={onNext}
            className="w-full py-4 md:py-5 rounded-full font-headline font-bold text-base md:text-lg text-white tracking-wide onboard-btn premium-shadow hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
            style={{ background: 'linear-gradient(135deg, #944931 0%, #d67d61 100%)' }}
          >
            Begin My Journey ✨
          </button>
          <p className="text-center text-xs font-label font-medium text-[#8a736a] mt-4 opacity-80 uppercase tracking-widest">
            Guided by relationship therapy
          </p>
        </div>
      </div>
    </div>
  );
};
