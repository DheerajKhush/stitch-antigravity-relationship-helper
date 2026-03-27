export type Gender = 'man' | 'woman';

export interface OnboardingQuestion {
  id: string;
  text: (gender: Gender) => string;
  options: string[];
  category: 'duration' | 'overall' | 'communication' | 'connection' | 'conflict' | 'intimacy' | 'support' | 'responsibility' | 'satisfaction' | 'goal';
}

export const SOCIAL_STATS = {
  relationshipPercent: 53,
  headline: (gender: Gender) =>
    gender === 'man'
      ? "You're one of the lucky guys."
      : "You're one of the lucky ones.",
  subheadline: 'Only 53% of adults are currently in a committed relationship.',
  body: 'Being here means you care enough to grow. That already puts you ahead.',
};

export const ONBOARDING_QUESTIONS: OnboardingQuestion[] = [
  {
    id: 'duration',
    category: 'duration',
    text: () => 'How long have you been with your partner?',
    options: ['Less than 6 months', '6 months – 2 years', '2 – 5 years', '5+ years'],
  },
  {
    id: 'overall',
    category: 'overall',
    text: () => 'Overall, how would you rate your relationship right now?',
    options: ['Thriving 🌱', 'Pretty good', 'Going through a rough patch', 'Struggling honestly'],
  },
  {
    id: 'communication',
    category: 'communication',
    text: (g) =>
      `How satisfied are you with how you and your ${g === 'man' ? 'girlfriend' : 'boyfriend'} communicate?`,
    options: ['Very satisfied', "It's okay", 'We could do better', 'Communication is our main issue'],
  },
  {
    id: 'meaningful_talks',
    category: 'communication',
    text: (g) =>
      `How often do you and your ${g === 'man' ? 'girlfriend' : 'boyfriend'} have truly meaningful conversations?`,
    options: ['Every day', 'A few times a week', 'Occasionally', 'Rarely'],
  },
  {
    id: 'conflict',
    category: 'conflict',
    text: () => 'When conflict arises, how do you typically handle it?',
    options: ['Talk it through calmly', 'One of us shuts down', 'It escalates quickly', 'We avoid it entirely'],
  },
  {
    id: 'connection',
    category: 'connection',
    text: (g) =>
      `How emotionally connected do you feel to your ${g === 'man' ? 'girlfriend' : 'boyfriend'} right now?`,
    options: ['Deeply connected', 'Mostly connected', 'A little distant', 'Pretty disconnected'],
  },
  {
    id: 'intimacy',
    category: 'intimacy',
    text: () => 'How satisfied are you with the intimacy in your relationship?',
    options: ['Very satisfied', 'Mostly satisfied', 'I wish it were better', 'It needs serious work'],
  },
  {
    id: 'support',
    category: 'support',
    text: (g) =>
      `Do you feel your ${g === 'man' ? 'girlfriend' : 'boyfriend'} truly understands and supports you?`,
    options: ['Always', 'Most of the time', 'Sometimes', 'Rarely'],
  },
  {
    id: 'responsibility',
    category: 'responsibility',
    text: () => 'How well do you and your partner share responsibilities?',
    options: ['Very fairly', 'Mostly fairly', 'A little imbalanced', 'One of us carries most of it'],
  },
  {
    id: 'goal',
    category: 'goal',
    text: () => 'What is your biggest relationship goal right now?',
    options: ['Communicate better', 'Reconnect emotionally', 'Improve our intimacy', 'Build a stronger future together'],
  },
];
