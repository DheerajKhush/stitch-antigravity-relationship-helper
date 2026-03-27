import { useState } from 'react';
import type { OnboardingProfile } from '../../common/types';
import type { Gender } from '../../data/onboardingData';
import { useAppContext } from '../../common/store';
import { WelcomeStep } from './steps/WelcomeStep';
import { GenderStep } from './steps/GenderStep';
import { RelationshipIntroStep } from './steps/RelationshipIntroStep';
import { QuestionStep } from './steps/QuestionStep';
import { PersonalizingStep } from './steps/PersonalizingStep';
import { ONBOARDING_QUESTIONS } from '../../data/onboardingData';

type FlowStep =
  | { type: 'welcome' }
  | { type: 'gender' }
  | { type: 'intro' }
  | { type: 'question'; index: number }
  | { type: 'personalizing' };

const buildSteps = (): FlowStep[] => [
  { type: 'welcome' },
  { type: 'gender' },
  { type: 'intro' },
  ...ONBOARDING_QUESTIONS.map((_, i) => ({ type: 'question' as const, index: i })),
  { type: 'personalizing' },
];

const ALL_STEPS = buildSteps();
const QUESTION_STEPS = ONBOARDING_QUESTIONS.length;

export const OnboardingFlow = () => {
  const { completeOnboarding } = useAppContext();
  const [stepIndex, setStepIndex] = useState(0);
  const [gender, setGender] = useState<Gender>('man');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [animating, setAnimating] = useState(false);

  const currentStep = ALL_STEPS[stepIndex];

  const goNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setStepIndex(i => Math.min(i + 1, ALL_STEPS.length - 1));
      setAnimating(false);
    }, 300);
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    goNext();
  };

  const handleComplete = () => {
    const profile: OnboardingProfile = { gender, answers, completed: true };
    completeOnboarding(profile);
  };

  // Progress: only shown during question steps
  const questionStepNumber =
    currentStep.type === 'question' ? currentStep.index + 1 : null;
  const questionsLeft =
    questionStepNumber !== null ? QUESTION_STEPS - questionStepNumber : null;

  return (
    <div className={`fixed inset-0 overflow-hidden transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Progress bar (only in question steps) */}
      {questionStepNumber !== null && (
        <div className="absolute top-0 left-0 right-0 z-50 px-5 pt-safe">
          <div className="pt-4 pb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-label text-on-surface-variant font-medium tracking-wide uppercase">
                Question {questionStepNumber} of {QUESTION_STEPS}
              </span>
              <span className="text-xs font-label font-semibold" style={{ color: '#944931' }}>
                {questionsLeft} left
              </span>
            </div>
            <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${(questionStepNumber / QUESTION_STEPS) * 100}%`,
                  background: 'linear-gradient(90deg, #944931, #d67d61)',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Steps */}
      {currentStep.type === 'welcome' && (
        <WelcomeStep onNext={goNext} />
      )}
      {currentStep.type === 'gender' && (
        <GenderStep gender={gender} onSelect={(g) => { setGender(g); goNext(); }} />
      )}
      {currentStep.type === 'intro' && (
        <RelationshipIntroStep onNext={goNext} />
      )}
      {currentStep.type === 'question' && (
        <QuestionStep
          question={ONBOARDING_QUESTIONS[currentStep.index]}
          gender={gender}
          onAnswer={handleAnswer}
          questionNumber={currentStep.index + 1}
          totalQuestions={QUESTION_STEPS}
        />
      )}
      {currentStep.type === 'personalizing' && (
        <PersonalizingStep answers={answers} onComplete={handleComplete} />
      )}
    </div>
  );
};
