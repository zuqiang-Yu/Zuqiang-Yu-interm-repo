# React + Vite + Tailwind CSS Project

This project was created as part of the Focus Bear internship onboarding (Milestone 5), to learn React fundamentals.

## Tech Stack

- **React** — UI library for building components
- **Vite** — Fast development build tool
- **Tailwind CSS** — Utility-first CSS framework

## Environment Setup

### Prerequisites

- Node.js (v18 or above)
- npm

### Steps

1. **Create the project using Vite**

```bash
   npm create vite@5 onboarding-task-test-project -- --template react
   cd onboarding-task-test-project
   npm install
```

1. **Install Tailwind CSS**

```bash
   npm install -D tailwindcss @tailwindcss/vite
```

1. **Configure Vite to use Tailwind**

   Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

1. **Add Tailwind to CSS**

   Replace the contents of `src/index.css` with:

```css
@import 'tailwindcss';
```

## Running the Project

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.
