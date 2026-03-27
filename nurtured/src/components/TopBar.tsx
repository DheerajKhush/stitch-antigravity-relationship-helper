

export const TopBar = () => {
  return (
    <header className="w-full top-0 sticky z-50 bg-[#eff5f0] transition-colors duration-300">
      <div className="flex items-center justify-between px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#ffffff]/50 rounded-full transition-all active:scale-95 duration-200 ease-in-out text-[#4a655a]">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="font-headline font-bold text-[#4a655a] text-2xl tracking-tight">Sanctuary</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {/* Desktop Nav can go here if needed */}
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRpovwM_uBrbpETJxioivMT4MpxoJMxNAeT9p_2Xp48sWevJwVKcpmQTv9rMu7V5KTwAHfcqS074APpFYRm9gUkqYQeglvRN3d1QhJP1wTMB-v4GEy7vfHRs740Lp-VzDIrPPI4A-j0hqeG4JaYOmkRVMDGwQIr41laaxTqHFcJFx8cuwKUY-_Z2qOZY3Flk1PKkotGscCIk3pjmrH4z8whAlvlXGDIB49ALc0VClFh3Tu0XyaLhM9pT3iAdwnbGGZODP9j3zV6F95"/>
          </div>
        </div>
      </div>
    </header>
  );
};
