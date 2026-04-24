# Kacper Celejewski // Java Developer & AI-Augmented Engineer

A high-performance, visually striking personal portfolio and blog built with **Next.js**, featuring a minimalist cyberpunk aesthetic and sophisticated terminal-inspired UI.

## 🚀 Key Features

- **Cyberpunk Design System**: Custom glassmorphism, glowing accents, and terminal-inspired components.
- **Multilingual Support (i18n)**: Full support for English (EN), Polish (PL), and German (DE).
- **MDX Blog Engine**: High-performance blog with Markdown support, categories, and deep linking.
- **AI-Augmented Engineering**: Showcasing projects and experience in Java, Spring Boot, Kafka, and GCP, optimized for modern AI workflows.
- **Testing Infrastructure**: Comprehensive unit and integration testing suite using Jest and React Testing Library.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules (Cyberpunk tokens)
- **Testing**: Jest + React Testing Library
- **Content**: MDX + Gray-matter
- **Internationalization**: Custom i18n middleware

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KacperCelejewski/portfolio_page.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🧪 Testing

Run the automated test suite:
```bash
npm run test
```

Watch mode for development:
```bash
npm run test:watch
```

## 📁 Project Structure

- `src/app/[locale]`: Multilingual routing and page components.
- `src/components`: Reusable UI elements (TerminalSection, Header, etc.).
- `src/content`: MDX blog posts structured by locale.
- `src/__tests__`: Automated unit and integration tests.
- `src/dictionaries`: i18n translation files.
- `src/lib`: Context providers and utility functions.

## 📄 License

This project is personal intellectual property. Feel free to explore the code for inspiration.

