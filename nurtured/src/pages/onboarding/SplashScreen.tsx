import { useEffect } from 'react';
import { useAppContext } from '../../common/store';

export const SplashScreen = () => {
  const { setState } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(s => ({ ...s, currentView: 'onboarding' }));
    }, 2800);
    return () => clearTimeout(timer);
  }, [setState]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden splash-bg">
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center gap-6 splash-content">
        {/* Flower/leaf logo */}
        <div className="splash-logo">
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Petal 1 */}
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="#fff" fillOpacity="0.9" className="petal petal-1"/>
            {/* Petal 2 */}
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="#fff" fillOpacity="0.9" transform="rotate(60 44 44)" className="petal petal-2"/>
            {/* Petal 3 */}
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="#fff" fillOpacity="0.9" transform="rotate(120 44 44)" className="petal petal-3"/>
            {/* Petal 4 */}
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="#fff" fillOpacity="0.9" transform="rotate(180 44 44)" className="petal petal-4"/>
            {/* Petal 5 */}
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="#fff" fillOpacity="0.9" transform="rotate(240 44 44)" className="petal petal-5"/>
            {/* Petal 6 */}
            <ellipse cx="44" cy="22" rx="12" ry="22" fill="#fff" fillOpacity="0.9" transform="rotate(300 44 44)" className="petal petal-6"/>
            {/* Center */}
            <circle cx="44" cy="44" r="12" fill="#fff"/>
            <circle cx="44" cy="44" r="6" fill="#944931"/>
          </svg>
        </div>

        {/* App name */}
        <div className="text-center splash-text">
          <h1 className="text-5xl font-headline font-bold text-white tracking-tight leading-none">
            Nurtured
          </h1>
          <p className="text-white/70 text-base font-body mt-2 tracking-wide">
            grow together
          </p>
        </div>

        {/* Loader ring */}
        <div className="mt-8 splash-loader">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none"/>
            <circle
              cx="24" cy="24" r="20"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="30 96"
              className="loader-ring"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
