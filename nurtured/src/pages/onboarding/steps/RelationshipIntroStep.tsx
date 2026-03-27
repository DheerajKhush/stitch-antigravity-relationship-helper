import { useEffect } from 'react';

interface RelationshipIntroStepProps {
  readonly onNext: () => void;
}

export const RelationshipIntroStep = ({ onNext }: RelationshipIntroStepProps) => {
  useEffect(() => {
    const timer = setTimeout(onNext, 3200);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center px-6 md:px-8 py-12 md:py-0 overflow-y-auto overflow-x-hidden text-center relative"
      onClick={onNext}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcf9f4] via-[#f2f7f4] to-[#e8f0ea] -z-10 min-h-[120vh]" />
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#944931]/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#4a655a]/5 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Animated icon */}
      <div className="intro-icon-wrap mb-8 md:mb-10 onboard-fade-up shrink-0 mt-auto md:mt-0" style={{ animationDelay: '0.1s' }}>
        <div className="intro-ring intro-ring-outer" />
        <div className="intro-ring intro-ring-inner" />
        <div className="intro-icon-center relative">
          <div className="absolute inset-0 bg-[#944931] rounded-full blur opacity-40" />
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="relative z-10 w-8 h-8 md:w-10 md:h-10">
            {/* Heart with brain/circuit lines */}
            <path
              d="M20 34 C20 34 5 24 5 14 C5 9 9 5 14 5 C17 5 20 7 20 7 C20 7 23 5 26 5 C31 5 35 9 35 14 C35 24 20 34 20 34Z"
              fill="#944931" fillOpacity="0.9"
            />
            {/* Chart line inside heart */}
            <path d="M11 18 L15 14 L18 17 L22 11 L26 16 L29 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="onboard-fade-up relative z-20 shrink-0" style={{ animationDelay: '0.3s' }}>
        <h2 className="font-headline text-3xl md:text-4xl font-extrabold mb-3 md:mb-4 tracking-tight" style={{ color: '#2b1810' }}>
          Now, let's understand
          <br />
          <span className="gradient-text">your relationship</span>
        </h2>
      </div>

      <div className="onboard-fade-up relative z-20 shrink-0" style={{ animationDelay: '0.5s' }}>
        <p className="text-sm md:text-base font-body text-[#8a736a] leading-relaxed max-w-sm mb-8 md:mb-10 mx-auto px-4 md:px-0">
          These questions are adapted from techniques used by real relationship therapists to identify your strengths and growth areas.
        </p>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-[280px] onboard-fade-up relative z-20 mb-auto md:mb-0 shrink-0" style={{ animationDelay: '0.7s' }}>
        {['Communication', 'Connection', 'Intimacy', 'Trust', 'Future'].map((tag, i) => (
          <span
            key={tag}
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-label font-bold tracking-wide transition-all glass-panel"
            style={{ color: '#944931', animationDelay: `${0.7 + i * 0.1}s` }}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-8 md:mt-0 md:absolute md:bottom-10 text-[10px] md:text-xs font-label font-bold text-[#8a736a] uppercase tracking-widest opacity-60 onboard-fade-up shrink-0" style={{ animationDelay: '0.9s' }}>
        Tap anywhere to continue
      </p>
    </div>
  );
};
