import { useAppContext } from '../common/store';
import type { ChangeEvent } from 'react';

export const SettingsPage = () => {
  const { state, setState } = useAppContext();

  const handleToggle = (category: keyof typeof state.categories) => {
    setState({
      ...state,
      categories: {
        ...state.categories,
        [category]: !state.categories[category]
      }
    });
  };

  const handleFrequencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      nudgeFrequency: parseInt(e.target.value)
    });
  };

  return (
    <main className="max-w-screen-md mx-auto px-6 md:px-12 pt-12 pb-32">
      <section className="mb-16">
        <h2 className="font-headline text-[2.75rem] font-extrabold tracking-tight leading-tight text-primary mb-4">Settings</h2>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
          Tune your relationship sanctuary. Configure how and when you want to connect.
        </p>
      </section>

      <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 mb-12 shadow-[0_40px_80px_-20px_rgba(43,53,48,0.04)]">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-tertiary">notifications_active</span>
          <h3 className="font-headline text-xl font-bold text-on-surface">Nudges & Reminders</h3>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-on-surface">Nudge Frequency</span>
            <span className="text-primary font-bold">{state.nudgeFrequency}x per week</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="7" 
            value={state.nudgeFrequency} 
            onChange={handleFrequencyChange}
            className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer"
          />
          <p className="mt-4 text-sm text-on-surface-variant font-light">How often you want to be softly prompted to connect with your partner.</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0_40px_80px_-20px_rgba(43,53,48,0.04)]">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-tertiary">tune</span>
          <h3 className="font-headline text-xl font-bold text-on-surface">Nudge Categories</h3>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center bg-surface-container-low p-6 rounded-2xl">
            <div>
              <span className="font-bold text-on-surface block mb-1">Communication</span>
              <p className="text-sm text-on-surface-variant m-0">Questions and compliments</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={state.categories.communication} onChange={() => handleToggle('communication')} className="sr-only peer" />
              <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center bg-surface-container-low p-6 rounded-2xl">
            <div>
              <span className="font-bold text-on-surface block mb-1">Planning</span>
              <p className="text-sm text-on-surface-variant m-0">Dates and shared time</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={state.categories.planning} onChange={() => handleToggle('planning')} className="sr-only peer" />
              <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex justify-between items-center bg-surface-container-low p-6 rounded-2xl">
            <div>
              <span className="font-bold text-on-surface block mb-1">Appreciation</span>
              <p className="text-sm text-on-surface-variant m-0">Gratitude and acknowledgment</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={state.categories.appreciation} onChange={() => handleToggle('appreciation')} className="sr-only peer" />
              <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
};
