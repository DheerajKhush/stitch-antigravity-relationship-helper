import { AppProvider, useAppContext } from './common/store';
import { Navigation } from './components/Navigation';
import { TopBar } from './components/TopBar';
import { Home } from './pages/Home';
import { DateLab } from './pages/DateLab';
import { GrowthLog } from './pages/GrowthLog';
import { SettingsPage } from './pages/SettingsPage';
import { SplashScreen } from './pages/onboarding/SplashScreen';
import { OnboardingFlow } from './pages/onboarding/OnboardingFlow';

const AppContent = () => {
  const { state } = useAppContext();

  const isOnboarding = state.currentView === 'splash' || state.currentView === 'onboarding';

  const renderView = () => {
    switch(state.currentView) {
      case 'splash': return <SplashScreen />;
      case 'onboarding': return <OnboardingFlow />;
      case 'home': return <Home />;
      case 'date-lab': return <DateLab />;
      case 'growth-log': return <GrowthLog />;
      case 'settings': return <SettingsPage />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background text-on-surface font-body selection:bg-primary-container relative flex flex-col">
      {!isOnboarding && <TopBar />}
      <div className="flex-1">
        {renderView()}
      </div>
      {!isOnboarding && <Navigation />}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;


