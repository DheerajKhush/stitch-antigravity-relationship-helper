import { useState } from 'react';
import type { FormEvent } from 'react';
import { useAppContext } from '../common/store';

export const GrowthLog = () => {
  const { logs, addLog } = useAppContext();
  const [newLog, setNewLog] = useState('');

  const handleAddLog = (e: FormEvent) => {
    e.preventDefault();
    if(!newLog.trim()) return;

    addLog({
      id: Date.now().toString(),
      type: 'appreciation',
      content: newLog,
      date: new Date().toISOString(),
      author: 'Me'
    });
    setNewLog('');
  };

  const formatDateDay = (isoString: string) => {
    return new Date(isoString).getDate().toString().padStart(2, '0');
  };
  
  const formatDateMonth = (isoString: string) => {
    return new Date(isoString).toLocaleDateString(undefined, { month: 'short' });
  };

  return (
    <main className="max-w-screen-xl mx-auto px-6 md:px-12 pt-12 pb-32">
      <section className="mb-16 md:mb-24">
        <div className="max-w-2xl">
          <span className="font-label text-on-surface-variant tracking-[0.2em] uppercase text-[0.65rem] mb-4 block">Personal Growth Journal</span>
          <h2 className="font-headline text-[2.75rem] md:text-[3.5rem] tracking-tight leading-[1.1] text-on-surface font-extrabold mb-6">
            Our Shared <span className="text-primary italic font-medium">Moments.</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed font-light">
            A quiet space to reflect on the small gestures, significant milestones, and the everyday beauty of growing together.
          </p>
        </div>
      </section>

      <form onSubmit={handleAddLog} className="mb-16 w-full max-w-2xl bg-surface-container-lowest rounded-[2rem] p-4 flex gap-4 shadow-[0_40px_80px_-20px_rgba(43,53,48,0.04)] items-center">
        <input 
          type="text" 
          value={newLog} 
          onChange={(e) => setNewLog(e.target.value)} 
          placeholder="Log a new moment of gratitude..." 
          className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-on-surface px-4 py-2 font-body"
        />
        <button type="submit" className="bg-primary text-on-primary w-12 h-12 flex items-center justify-center rounded-full transition-all hover:bg-primary-dim active:scale-95 disabled:opacity-50" disabled={!newLog.trim()}>
          <span className="material-symbols-outlined">send</span>
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
        {logs.map((log) => {
          const isMe = log.author === 'Me';
          return (
            <div key={log.id} className="md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-9 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center pt-2">
                <span className="font-headline font-bold text-primary text-xl">{formatDateDay(log.date)}</span>
                <span className="font-label text-on-surface-variant text-xs uppercase tracking-widest">{formatDateMonth(log.date)}</span>
              </div>
              <div className="flex-1 bg-surface-container-low p-8 md:p-12 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(43,53,48,0.04)]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                  <span className="font-label text-primary font-semibold text-xs tracking-wider uppercase">{log.type}</span>
                </div>
                <blockquote className="font-body text-xl md:text-2xl text-on-surface leading-relaxed italic mb-6">
                  "{log.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full ${isMe ? 'bg-primary' : 'bg-secondary-container'}`}></div>
                  <span className="text-on-surface-variant text-sm font-medium">Shared by {log.author}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  );
};
