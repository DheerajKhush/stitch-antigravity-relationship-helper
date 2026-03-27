import { useEffect, useState } from 'react';

interface PersonalizingStepProps {
  readonly answers: Record<string, string>;
  readonly onComplete: () => void;
}

const BULLETS = [
  { text: 'Analyzing your communication style', delay: 600 },
  { text: 'Finding date ideas you\'ll both love', delay: 1400 },
  { text: 'Setting up your growth journey', delay: 2200 },
  { text: 'Personalizing your nudge schedule', delay: 2900 },
];

export const PersonalizingStep = ({ onComplete }: PersonalizingStepProps) => {
  const [visibleBullets, setVisibleBullets] = useState<number[]>([]);

  useEffect(() => {
    const timers = BULLETS.map((b, i) =>
      setTimeout(() => setVisibleBullets(prev => [...prev, i]), b.delay)
    );
    const completeTimer = setTimeout(onComplete, 4200);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center px-6 md:px-8 py-12 overflow-y-auto overflow-x-hidden text-center personalizing-bg relative"
      style={{ background: 'linear-gradient(160deg, #2b1810 0%, #4a1a0c 50%, #7a3020 100%)' }}
    >
      {/* Ambient glow */}
      <div className="personalizing-glow" />

      {/* Loader */}
      <div className="personalizing-loader mb-10">
        <svg width="80" height="80" viewBox="0 0 80 80" className="personalizing-spin">
          <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none"/>
          <circle
            cx="40" cy="40" r="34"
            stroke="url(#grad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="50 164"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d67d61"/>
              <stop offset="100%" stopColor="#f5cba7"/>
            </linearGradient>
          </defs>
        </svg>
        {/* Flower in center */}
        <div className="personalizing-logo-center">
          <svg width="32" height="32" viewBox="0 0 88 88" fill="none">
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="white" fillOpacity="0.8"/>
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="white" fillOpacity="0.8" transform="rotate(60 44 44)"/>
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="white" fillOpacity="0.8" transform="rotate(120 44 44)"/>
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="white" fillOpacity="0.8" transform="rotate(180 44 44)"/>
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="white" fillOpacity="0.8" transform="rotate(240 44 44)"/>
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="white" fillOpacity="0.8" transform="rotate(300 44 44)"/>
            <circle cx="44" cy="44" r="12" fill="white"/>
            <circle cx="44" cy="44" r="6" fill="#944931"/>
          </svg>
        </div>
      </div>

      <h2 className="font-headline text-2xl font-bold text-white mb-2">
        Building your experience
      </h2>
      <p className="text-sm font-body mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
        Just a moment while we personalize everything for you
      </p>

      {/* Bullet list */}
      <div className="w-full max-w-xs flex flex-col gap-3">
        {BULLETS.map((b, i) => (
          <div
            key={b.text}
            className={`flex items-center gap-3 transition-all duration-500 ${
              visibleBullets.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: visibleBullets.includes(i) ? '#d67d61' : 'rgba(255,255,255,0.15)' }}
            >
              {visibleBullets.includes(i) && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <p className="text-sm font-body text-left" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {b.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
