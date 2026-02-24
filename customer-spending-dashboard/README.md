Customer Spending Insights Dashboard

A responsive financial analytics dashboard that visualizes customer spending data using mocked API data.

Built as a frontend engineering project demonstrating modern React architecture, reusable components, and production-style patterns.

✨ Project Overview

This project simulates a banking analytics dashboard similar to a real financial platform.

It consumes mocked API data through Axios and exposes structured dashboard features including:

Customer Profile

Spending Summary

Spending Categories

Spending Trends

Goals Tracking

Transactions Table

The project is built to demonstrate clean architecture and scalable frontend patterns.

Environment

Node.js 18+

npm or yarn

Modern browser (Chrome / Edge / Firefox recommended)

🏗 Tech Stack

React (Vite)

TypeScript

React Query (TanStack Query)

Axios

Tailwind CSS

Lucide Icons

Mocked JSON API data

🔥 Features
👤 Customer Profile

Displays:

Name

Email

Account type

Total lifetime spending

Join date

📊 Spending Summary

High-level financial metrics including:

Total spent

Transaction count

Average transaction

Top spending category

Comparison to previous period

📂 Spending Categories

Shows spending breakdown by category:

Amount per category

Percentage contribution

Visual icons

Colour-coded display

📈 Spending Trends

Displays monthly spending trends:

Sorted from newest → oldest

Bar scaling based on highest spending month

View More / View Less functionality

Clean financial timeline layout

🎯 Goals

Tracks monthly budget goals:

Budget

Current spend

Progress bar

Status indicator (on track / warning / exceeded)

🧾 Transactions

Displays recent transactions:

Merchant icon

Category

Amount

Date

Description

Pagination-ready structure

🏗 Architecture

The project follows a modular structure:

src/
│
├── api/
│   ├── client.ts
│   ├── dashboardApi.ts
│   └── mockData.json
│
├── features/
│   └── dashboard/
│       ├── customerProfile/
│       ├── goals/
│       ├── spendingCategory/
│       ├── spendingTrend/
│       ├── summaryCards/
│       └── transactions/
│
├── shared/
│   ├── components/
│   │   ├── card.tsx
│   │   ├── loader.tsx
│   │   └── errorState.tsx
│
├── App.tsx
└── main.tsx
Key Design Principles

✅ Feature-based folder structure
✅ Reusable components
✅ Custom hooks for API logic
✅ Separation of concerns
✅ Mock API abstraction
✅ Scalable component architecture

🚀 Running the Project
1. Install Dependencies
npm install

or

yarn install
2. Start Development Server
npm run dev

The app will run at:

http://localhost:5173
3. Build for Production
npm run build
🔄 API Mocking

This project uses a local mockData.json file instead of a live backend.

API calls:

dashboardApi.ts

Return data directly from:

mockData.json

This allows:

Real axios calls

Real async behaviour

Real data typing

No backend required

💡 Future Improvements

If extended further, the project could include:

Real backend integration

Authentication

Date filters

Chart.js or Recharts visual graphs

API pagination for transactions

Live data refresh

Dark mode toggle

Export to PDF / CSV

👨🏽‍💻 Author

Built by: Lamees Ajouhaar

Frontend Engineering Project – Capitec Assessment