# Nurtured 🌱

**Nurtured** is a modern, responsive web application designed as a relationship companion. It features an interactive, therapist-sourced onboarding journey that assesses relationship dynamics using personalized, gender-aware questionnaires.

Designed with a premium aesthetic, Nurtured utilizes glassmorphism, fluid animations, and lush gradient palettes to provide a calming and insightful user experience.

---

## 🎨 Features
- **Therapist-Sourced Onboarding Flow**: 10 carefully curated questions analyzing communication, connection, intimacy, and trust.
- **Premium UI/UX**: Built with modern design principles (glassmorphism panels, deep soft shadows, and dynamic gradient text).
- **Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices.
- **Micro-interactions**: Subtle hover states, animated SVG loaders, and staggered fade-ups make the app feel alive.
- **State Management**: Built-in state handling for the onboarding flow utilizing robust React context/hooks.

---

## 🛠️ Built With
- **[React 19](https://react.dev/)**: Fast, modern frontend library.
- **[Vite 6](https://vite.dev/)**: Next-generation frontend tooling for rapid development.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework configured with the modern CSS-first `@theme` block.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed programming for better developer experience and reliability.
- **[Lucide React](https://lucide.dev/)**: Beautiful, consistent icon pack.

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd nurtured
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port Vite outputs in your terminal) to view the application in action.

---

## 📂 Project Structure

```text
nurtured/
├── public/                 # Static assets
├── src/
│   ├── common/             # Global types and store (e.g., store.tsx, types.ts)
│   ├── components/         # Reusable UI elements (icons, loaders, etc.)
│   ├── data/               # Static data (e.g., therapist-sourced onboarding questions)
│   ├── pages/
│   │   └── onboarding/     # Core onboarding views
│   │       ├── steps/      # Individual steps (Welcome, Gender, Intro, Question, Personalizing)
│   │       └── OnboardingFlow.tsx
│   ├── App.tsx             # Main routing component
│   ├── index.css           # Global styles and Tailwind v4 theme definitions
│   └── main.tsx            # React application entry point
├── package.json            # Project dependencies and operational scripts
├── tailwind.config.js      # CSS Framework configuration
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript compilation settings
```

---

## 💅 Styling & Animations

The project relies on a custom Tailwind v4 configuration injected directly into `src/index.css`. 
Key global utility classes include:
- `.glass-panel`: Frosted glass blur effects.
- `.gradient-text`: Fluid, colored text overlays.
- `.premium-shadow`: Soft, layered shadows for depth.
- `.onboard-fade-up`: Reusable staggered fade animation applied to typography and cards.

---

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds the app for production. |
| `npm run preview` | Starts a local web server to serve the production build. |
| `npm run lint` | Runs ESLint across the codebase. |

---

## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Designed and engineered to bring couples closer.*
