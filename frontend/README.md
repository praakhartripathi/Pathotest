# 🖥️ Pathotest — Frontend

React + Vite + Tailwind CSS frontend for the Pathotest application.

## ⚡ Tech Stack

- **React 18** — UI framework
- **Vite 7** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **Lucide React** — Icon library

## 📁 Structure

```
frontend/
├── public/
└── src/
    ├── components/
    │   └── TopBar.jsx      # App-wide top navigation bar
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    └── index.css           # Tailwind CSS entry
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Components

### `TopBar`
Top navigation bar with:
- **Left** — App name "PathTest" (blue text on yellow background)
- **Right** — Investor link, Contact Us link, phone number, email

## 🌐 Environment

The frontend communicates with the backend at `http://localhost:8080` (Spring Boot).
