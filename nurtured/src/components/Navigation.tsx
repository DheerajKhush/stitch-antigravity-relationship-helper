import { useAppContext } from '../common/store';

export const Navigation = () => {
  const { state, setState } = useAppContext();
  
  const navItems = [
    { id: 'home', icon: 'dashboard', label: 'Dashboard' },
    { id: 'date-lab', icon: 'calendar_today', label: 'Dates' },
    { id: 'growth-log', icon: 'auto_stories', label: 'Journal' },
    { id: 'settings', icon: 'settings', label: 'Settings' }
  ];

  return (
    <nav className="fixed bottom-0 w-full rounded-t-[2rem] z-50 bg-[#ffffff]/80 backdrop-blur-xl border-t border-[#2b3530]/10 shadow-[0_-4px_40px_rgba(43,53,48,0.04)] md:hidden">
      <div className="flex justify-around items-center px-8 pb-8 pt-4">
        {navItems.map(item => {
          const isActive = state.currentView === item.id;
          return (
            <button 
              key={item.id}
              onClick={() => setState({ ...state, currentView: item.id as any })}
              className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-300 ${isActive ? 'bg-[#cbe9db] text-[#2b3530] rounded-full px-6 py-2' : 'text-[#2b3530]/60 px-6 py-2 hover:text-[#4a655a]'}`}
            >
              <span className="material-symbols-outlined mb-1" style={isActive ? {fontVariationSettings: "'FILL' 1"} : {}}>{item.icon}</span>
              <span className="font-['Manrope'] text-[0.75rem] font-semibold tracking-wide mt-0.5">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  );
};
