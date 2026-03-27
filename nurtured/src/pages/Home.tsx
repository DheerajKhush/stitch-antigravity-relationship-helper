import { useAppContext } from '../common/store';

export const Home = () => {
  const { state, nudges, completeNudge } = useAppContext();

  const handleNudgeClick = (id: string, completed: boolean) => {
    if(!completed) completeNudge(id);
  };

  return (
    <main className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-8 pb-32">
      <section className="mb-16">
        <h2 className="font-headline text-[2.75rem] font-extrabold tracking-tight leading-tight text-on-surface mb-2">Good morning, Alex.</h2>
        <p className="text-on-surface-variant text-lg max-w-lg">Your relationship is thriving. Take a moment today to acknowledge the small joys.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-8 self-start">Growth Cycle</h3>
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-tertiary-container" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-tertiary rounded-full" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset={552.92 - (552.92 * state.growthScore) / 100} strokeWidth="12" style={{transition: 'stroke-dashoffset 1s ease-out'}}></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-5xl font-extrabold text-on-surface">{state.growthScore}%</span>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-1">This Month</span>
            </div>
          </div>
          <p className="mt-8 text-on-surface-variant text-sm px-4">You've completed several connection exercises this cycle.</p>
        </div>

        <div className="md:col-span-8 bg-surface-container-low rounded-[2rem] overflow-hidden flex flex-col md:flex-row min-h-[320px]">
          <div className="flex-1 p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase mb-4">Upcoming</span>
              <h3 className="font-headline text-4xl font-bold text-on-surface leading-tight">Weekend getaway in the mountains.</h3>
              <p className="mt-4 text-on-surface-variant text-lg">Departure in 4 days. Pack your favorite books and warm sweaters.</p>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-surface-container-low overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVgd-oq1epjGHnfqOJx0uArVwfGKgMjXikrCfPJcxEk9GplAIy8CiBFqUn7Z4wm761d-iEu5gBc_wnLprQyjbZ7wKA9AJizBej_PX1Atm76acr0gDN6If40ia0TGX-aEe4dyv0MNvhFbIwf_D6MtoUqGToXPS04QJyq_8-zdX9aGAhjazIgFdN62t7FNM-ELlcSAQ8iJ1gJd-pFJWLTkUaA06O4ltcV5ulXDoqGKawLvQIg_Av1Ehx7djxfqkQC7GGLbDrmYYxAcJV"/>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface-container-low overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5RQfhReexxw_AYzJYOmHYldCF7SmN_gdbNpcMw116eephB9ihVD-loppA1feEMLlEBmT61cXlkJ1NPrrymYU6GRnjl7g82ySR_R4ByanCXA8m98N3esnStwcHO5QetJWHAllxu8PaGTB8eh2QAr91c-ulXGncN959NFJ6UJLibgH-57lF2d4FunVERsAg6VeWYscIMlPJHWzdg-ti6FWx-6mShBfJMeL6JRl7-zAkqEU8fLf3tlNVZNxwot9rG6yfakH6GjIS6XeD"/>
                </div>
              </div>
              <span className="text-on-surface font-medium">Saturday, 14 Oct</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-64 md:h-auto">
            <img alt="Mountain Getaway" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDovIFcp2yCmreTZGNMpU8DTEH2JTUhMiGoZ011aFmDpL490hyYEGJ2zA0oqm1lcPnP-IpuOSaxD_qbwyugLqF9SjXUSNbKDWFptwdbNQ0j2BPHQ8_8WJciRlqCZu4o0nM3ky-rqmcbX7XWzN2s4bXOAqzhVQAkVP9L6Jpvk-Do_Xs75Vyu4FQWYIfnYEu6CjusZevTYSTcn-rPAW0o_eWOb4Xh1voBucjllq3j30-txajEzqtbGyptrIgOt_bfEOY-_mf1haWPUrG"/>
          </div>
        </div>

        <div className="md:col-span-12 mt-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-2xl font-bold text-on-surface">Daily Nudges</h3>
            <button className="text-primary font-bold hover:underline">View all</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nudges.filter(n => state.categories[n.category as keyof typeof state.categories]).map(nudge => {
              const bgIcons = ['chat_bubble', 'calendar_month', 'favorite'];
              const bgColors = ['bg-secondary-container text-on-secondary-container', 'bg-tertiary-container text-on-tertiary-container', 'bg-primary-container text-on-primary-container'];
              const index = parseInt(nudge.id) % 3;
              
              return (
                <div 
                  key={nudge.id} 
                  className={`p-6 rounded-[1.5rem] flex items-center gap-6 group transition-all cursor-pointer ${nudge.completed ? 'bg-surface-container-low opacity-60' : 'bg-surface-container-lowest hover:bg-white shadow-sm'}`}
                  onClick={() => handleNudgeClick(nudge.id, nudge.completed)}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform ${nudge.completed ? 'bg-gray-200 text-gray-500' : bgColors[index] + ' group-hover:scale-110'}`}>
                    <span className="material-symbols-outlined text-2xl">{nudge.completed ? 'check_circle' : bgIcons[index]}</span>
                  </div>
                  <div>
                    <h4 className={`font-bold ${nudge.completed ? 'text-on-surface-variant line-through' : 'text-on-surface'}`}>{nudge.text}</h4>
                    <p className="text-on-surface-variant text-sm mt-1">{nudge.completed ? 'Completed' : `A ${nudge.category} nudge.`}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-12 mt-8 bg-[#4a655a] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-headline text-4xl font-bold mb-4">Deep Connection Exercise</h3>
            <p className="text-emerald-100/80 text-lg mb-8 max-w-xl">Take 15 minutes tonight to answer three 'un-askable' questions from our curated deck. Designed to spark vulnerability and warmth.</p>
            <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors active:scale-95 duration-200">Start Reflection</button>
          </div>
          <div className="w-full md:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl">
            <img alt="Couple reflection" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJ8GP5vuqluTFh-jMWqRxZdu4pwLAvdpPq26CMWMXu42BV5BUnJ6KIFl8suM6ycrn4DbjRAL-Dfe0gZtq2WJ3HTg8vwC8vaWu5Qi72FBgCHzhzMh52lzyH-UU60xdNrqjVUkEKXsIxPg5_jGE1Gk2xbI0QVhuD_V-B8mj0XqQFov8-CDaMLAhAWfB2I946pCYco-hb-Hobm1HETEWk2K3770sUdiy4waUEvv9l517kDAZgizNKBOI7uWbXsuNF4o2bsOjAs39Dg6k"/>
          </div>
        </div>
      </div>
    </main>
  );
};
