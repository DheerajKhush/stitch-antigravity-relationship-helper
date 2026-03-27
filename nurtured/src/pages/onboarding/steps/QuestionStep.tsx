import type { OnboardingQuestion, Gender } from '../../../data/onboardingData';

interface QuestionStepProps {
  readonly question: OnboardingQuestion;
  readonly gender: Gender;
  readonly onAnswer: (id: string, answer: string) => void;
  readonly questionNumber: number;
  readonly totalQuestions: number;
}

export const QuestionStep = ({ question, gender, onAnswer }: QuestionStepProps) => {
  const questionText = question.text(gender);

  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto overflow-x-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcf9f4] to-[#f2f7f4] -z-10" />
      <div className="welcome-blob-top opacity-50 -z-10" />

      <div className="flex flex-col min-h-full px-5 md:px-8 pt-20 md:pt-28 pb-8 relative z-20">
        {/* Question */}
        <div className="mb-8 md:mb-10 onboard-fade-up shrink-0" style={{ animationDelay: '0.05s' }}>
          <div className="flex items-center gap-3 mb-4 md:mb-5">
            <div className="h-px bg-gradient-to-r from-transparent via-[#944931]/30 to-transparent flex-1" />
            <p className="text-[10px] md:text-xs font-label font-bold uppercase tracking-[0.2em] text-[#944931]">
              {question.category.replace('_', ' ')}
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-[#944931]/30 to-transparent flex-1" />
          </div>
          <h2 className="font-headline text-2xl md:text-3xl font-extrabold leading-tight text-center tracking-tight text-[#2b1810]">
            {questionText}
          </h2>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 md:gap-4 mt-auto">
          {question.options.map((option, i) => (
            <button
              key={option}
              onClick={() => onAnswer(question.id, option)}
              className="group flex flex-col sm:flex-row items-start sm:items-center text-left px-5 md:px-6 py-4 md:py-5 rounded-[1.5rem] font-body font-semibold text-[15px] md:text-base transition-all duration-300 question-option onboard-fade-up glass-panel hover:bg-white hover:-translate-y-1 hover:premium-shadow"
              style={{
                animationDelay: `${0.15 + i * 0.08}s`,
                color: '#2b1810',
              }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f2f7f4] flex items-center justify-center mb-2 sm:mb-0 mr-0 sm:mr-4 group-hover:bg-gradient-to-br group-hover:from-[#944931] group-hover:to-[#d67d61] transition-colors duration-300">
                <span className="text-sm font-label font-bold text-[#944931] group-hover:text-white transition-colors duration-300">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
              <span className="flex-1 opacity-90 group-hover:opacity-100 transition-opacity leading-snug">
                {option}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
