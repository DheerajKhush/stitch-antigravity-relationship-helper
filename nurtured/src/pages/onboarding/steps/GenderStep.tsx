import type { Gender } from '../../../data/onboardingData';

interface GenderStepProps {
  readonly gender: Gender;
  readonly onSelect: (gender: Gender) => void;
}

const ManSVG = () => (
  <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
    <circle cx="40" cy="22" r="18" fill="#f0b27a"/>
    <path d="M23 35 Q40 28 57 35 L62 85 H18Z" fill="#5d7a6e"/>
    <path d="M22 40 Q40 34 58 40" stroke="#4a6358" strokeWidth="1.5" fill="none"/>
    <circle cx="32" cy="18" r="2" fill="#8d5524"/>
    <circle cx="48" cy="18" r="2" fill="#8d5524"/>
    <path d="M35 26 Q40 30 45 26" stroke="#8d5524" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* Hair */}
    <path d="M23 14 Q40 2 57 14 Q53 6 40 4 Q27 6 23 14Z" fill="#3e2723"/>
  </svg>
);

const WomanSVG = () => (
  <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
    <circle cx="40" cy="22" r="18" fill="#f5cba7"/>
    {/* Long hair */}
    <path d="M22 14 Q40 2 58 14 Q54 6 40 4 Q26 6 22 14Z" fill="#5d4037"/>
    <path d="M22 20 Q18 50 22 70" stroke="#5d4037" strokeWidth="8" strokeLinecap="round"/>
    <path d="M58 20 Q62 50 58 70" stroke="#5d4037" strokeWidth="8" strokeLinecap="round"/>
    {/* Body - dress */}
    <path d="M24 38 Q40 30 56 38 L62 85 H18Z" fill="#e8927c"/>
    <path d="M22 60 Q40 52 58 60" stroke="#c96b55" strokeWidth="1.5" fill="none"/>
    <circle cx="33" cy="19" r="2" fill="#8d5524"/>
    <circle cx="47" cy="19" r="2" fill="#8d5524"/>
    <path d="M36 27 Q40 31 44 27" stroke="#8d5524" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export const GenderStep = ({ gender, onSelect }: GenderStepProps) => {
  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto overflow-x-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcf9f4] to-[#f2f7f4] -z-10" />
      <div className="welcome-blob-top opacity-60 -z-10" />
      <div className="welcome-blob-bottom opacity-60 -z-10" />

      <div className="flex-1 flex flex-col min-h-full px-5 md:px-8 pt-12 md:pt-20 pb-8 relative z-20">
        <div className="onboard-fade-up mb-6 text-center shrink-0" style={{ animationDelay: '0.05s' }}>
          <p className="text-xs font-label font-bold uppercase tracking-[0.2em] mb-4 text-[#944931]">
            About you
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold leading-tight text-[#2b1810] tracking-tight">
            How do you identify?
          </h2>
          <p className="text-sm md:text-base font-body text-[#8a736a] mt-3 max-w-xs mx-auto">
            This helps us tailor questions to feel natural and personal to you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 onboard-fade-up mx-0 sm:mx-2" style={{ animationDelay: '0.2s' }}>
          {/* Man card */}
          <button
            onClick={() => onSelect('man')}
            className={`flex-1 flex flex-col items-center py-10 px-4 rounded-[2rem] transition-all duration-300 relative overflow-hidden group ${
              gender === 'man' ? 'ring-2 ring-offset-2 ring-offset-[#fcf9f4] ring-[#944931] bg-white premium-shadow -translate-y-1' : 'glass-panel hover:-translate-y-1 hover:bg-white/90'
            }`}
          >
            {gender === 'man' && <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#944931]/5 pointer-events-none" />}
            <ManSVG />
            <span className="mt-6 font-headline font-bold text-lg text-[#2b1810]">Man</span>
            {gender === 'man' && (
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#944931] to-[#d67d61] shadow-lg animate-[scaleIn_0.3s_ease-out]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </button>

          {/* Woman card */}
          <button
            onClick={() => onSelect('woman')}
            className={`flex-1 flex flex-col items-center py-10 px-4 rounded-[2rem] transition-all duration-300 relative overflow-hidden group ${
              gender === 'woman' ? 'ring-2 ring-offset-2 ring-offset-[#fcf9f4] ring-[#944931] bg-white premium-shadow -translate-y-1' : 'glass-panel hover:-translate-y-1 hover:bg-white/90'
            }`}
          >
            {gender === 'woman' && <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#944931]/5 pointer-events-none" />}
            <WomanSVG />
            <span className="mt-6 font-headline font-bold text-lg text-[#2b1810]">Woman</span>
            {gender === 'woman' && (
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#944931] to-[#d67d61] shadow-lg animate-[scaleIn_0.3s_ease-out]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </button>
        </div>

        <p className="text-center text-xs md:text-sm font-label font-medium text-[#8a736a] opacity-60 mt-auto pt-6 onboard-fade-up tracking-wide" style={{ animationDelay: '0.35s' }}>
          Tap a card to continue
        </p>
      </div>
    </div>
  );
};
