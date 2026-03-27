export type OnboardingProfile = {
  gender: 'man' | 'woman' | null;
  answers: Record<string, string>;
  completed: boolean;
};

export type AppState = {
  currentView: 'splash' | 'onboarding' | 'home' | 'date-lab' | 'growth-log' | 'settings';
  nudgeFrequency: number;
  categories: {
    communication: boolean;
    planning: boolean;
    appreciation: boolean;
  };
  growthScore: number;
};

export type Nudge = {
  id: string;
  text: string;
  category: string;
  completed: boolean;
};

export type DateIdea = {
  id: string;
  title: string;
  description: string;
  budget: 'Free' | '$' | '$$' | '$$$';
  location: 'Home' | 'Outdoor' | 'Indoor';
  mood: string;
};

export type LogEntry = {
  id: string;
  type: 'appreciation' | 'memory' | 'milestone';
  content: string;
  date: string;
  author: 'Me' | 'Partner';
};
