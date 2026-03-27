import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { AppState, OnboardingProfile, Nudge, DateIdea, LogEntry } from './types';

const onboardingDone = localStorage.getItem('nurtured_onboarding') === 'done';

const defaultState: AppState = {
  currentView: onboardingDone ? 'home' : 'splash',
  nudgeFrequency: 3,
  categories: {
    communication: true,
    planning: true,
    appreciation: true,
  },
  growthScore: 78,
};

const initialNudges: Nudge[] = [
  { id: '1', text: 'Text her a compliment today', category: 'communication', completed: false },
  { id: '2', text: 'Ask about the project he was stressed about last week', category: 'communication', completed: false },
  { id: '3', text: 'Plan a completely device-free dinner for this weekend', category: 'planning', completed: false },
];

const initialDateIdeas: DateIdea[] = [
  { id: '1', title: 'Living Room Picnic', description: 'Lay out a blanket and have dinner on the floor with some music.', budget: 'Free', location: 'Home', mood: 'Cozy' },
  { id: '2', title: 'Stargazing Drive', description: 'Drive out to the countryside or a hill with a thermos of hot cocoa.', budget: 'Free', location: 'Outdoor', mood: 'Romantic' },
  { id: '3', title: 'Local Museum Tour', description: 'Spend an afternoon exploring a museum you haven\'t been to before.', budget: '$', location: 'Indoor', mood: 'Curious' },
  { id: '4', title: 'Cooking Challenge', description: 'Pick a complex recipe and cook it together from scratch.', budget: '$$', location: 'Home', mood: 'Fun' },
];

const initialLogs: LogEntry[] = [
  { id: '1', type: 'appreciation', content: 'Thank you for making coffee this morning.', date: new Date().toISOString(), author: 'Partner' },
  { id: '2', type: 'memory', content: 'That hike to the waterfall was amazing.', date: new Date(Date.now() - 86400000).toISOString(), author: 'Me' },
];

interface AppContextType {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  nudges: Nudge[];
  setNudges: React.Dispatch<React.SetStateAction<Nudge[]>>;
  dateIdeas: DateIdea[];
  logs: LogEntry[];
  addLog: (entry: LogEntry) => void;
  completeNudge: (id: string) => void;
  onboardingProfile: OnboardingProfile;
  setOnboardingProfile: React.Dispatch<React.SetStateAction<OnboardingProfile>>;
  completeOnboarding: (profile: OnboardingProfile) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(defaultState);
  const [nudges, setNudges] = useState<Nudge[]>(initialNudges);
  const [dateIdeas] = useState<DateIdea[]>(initialDateIdeas);
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [onboardingProfile, setOnboardingProfile] = useState<OnboardingProfile>({
    gender: null,
    answers: {},
    completed: onboardingDone,
  });

  const addLog = (entry: LogEntry) => {
    setLogs([entry, ...logs]);
    setState(s => ({ ...s, growthScore: Math.min(100, s.growthScore + 2) }));
  };

  const completeNudge = (id: string) => {
    setNudges(nudges.map(n => n.id === id ? { ...n, completed: true } : n));
    setState(s => ({ ...s, growthScore: Math.min(100, s.growthScore + 5) }));
  };

  const completeOnboarding = (profile: OnboardingProfile) => {
    localStorage.setItem('nurtured_onboarding', 'done');
    setOnboardingProfile({ ...profile, completed: true });
    setState(s => ({ ...s, currentView: 'home' }));
  };

  return (
    <AppContext.Provider value={{ state, setState, nudges, setNudges, dateIdeas, logs, addLog, completeNudge, onboardingProfile, setOnboardingProfile, completeOnboarding }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
