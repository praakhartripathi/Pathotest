# 🧪 Pathotest

> A full-stack pathology lab management web application built with **React + Vite** (frontend) and **Spring Boot** (backend).

## 📁 Project Structure

```
pathotest/
├── frontend/          # React + Vite + Tailwind CSS
├── backend/           # Spring Boot 3.4.2 REST API
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── workflows/
│       └── coderabbit.yml   # AI code review on every PR
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Java 17+
- Maven 3.9+

### Run Frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Run Backend
```bash
cd backend
mvn spring-boot:run
# → http://localhost:8080
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite 7, Tailwind CSS v4 |
| Backend | Spring Boot 3.4.2, Java 17 |
| ORM | Spring Data JPA + Hibernate |
| Security | Spring Security |
| Dev DB | H2 (in-memory) |
| Icons | Lucide React |

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Commit your changes: `git commit -m "feat: description"`
3. Push the branch: `git push -u origin feat/your-feature`
4. Open a Pull Request — CodeRabbit AI will auto-review it

## 📝 Reporting Issues

Use the [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md) or [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md) templates when opening issues.

## 📄 License

MIT
