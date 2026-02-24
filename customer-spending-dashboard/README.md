## Customer Spending Insights Dashboard

A responsive financial analytics dashboard that visualizes customer spending data using mocked API data.

## Project Overview

This project simulates a banking analytics dashboard similar to a real financial platform.

It consumes mocked API data through a local API abstraction and exposes structured dashboard features including:

* Customer Profile

* Spending Summary

* Spending Categories

* Spending Trends

* Goals Tracking

* Transactions Table

## The project demonstrates:

* Clean architecture
* Scalable frontend patterns
* Mocked backend abstraction
* Dockerized deployment

## Tech Stack

* React (Vite)

* TypeScript

* React Query (TanStack Query)

* Axios

* Tailwind CSS

* Lucide Icons

* Mocked JSON API

* Docker 

## Requirements

* Node.js 18+

* npm or yarn

* Docker Desktop

* Modern browser (Chrome / Edge / Firefox)

## Running the Project (Local Development)
1.  Install Dependencies
npm install

or

yarn install
2. start Development Server
npm run dev

The app runs at:

http://localhost:5173


## Running with Docker 
1.  Build the Docker Image

Make sure Docker Desktop is running.

From the project root:

docker build -t spending-dashboard .

2.  Run the Docker Container
docker run -p 3000:80 spending-dashboard

3. Open the Application

Visit:

http://localhost:3000


## API Mocking

This project uses a local mockData.json file instead of a live backend.

API calls are defined in:

dashboardApi.ts

Data is returned directly from:

mockData.json

This allows:

* Real axios structure
* Real async simulation
* Strong type safety
* Production-like API abstraction
* No backend required

A simulated delay is added to mimic real API latency.

## Project Architecture
Feature Based Folder Structure

Each feature contains:

* Component

* Hook

* Types

* API usage

## Reusable Components

* Card

* Loader

* Error State

* Custom Hooks

## Business logic is separated into:

* useSpendingSummary

* useSpendingTrends

* useTransactions


## Key Features
1. Customer Profile

Displays:

Name

Email

Account type

Total lifetime spending

Join date

2. Spending Summary

High level metrics:

Total spent

Transaction count

Average transaction

Top category

Comparison to previous period

3. Spending Categories

Shows breakdown per category:

Amount

Percentage

Icons

Colour coded visualization

4. Spending Trends

Sorted newest to oldest

Bar scaling

View More / View Less

Clean financial timeline

5. Goals

Tracks monthly budget:

Budget

Current spend

Progress bar


6. Transactions

Displays:

Merchant icon

Category

Amount

Date

Description

Pagination ready structure

## Future Improvements

If extended further, this project could include:

Real backend integration

Authentication

Date filtering

API pagination

Live data refresh

Dark mode toggle

Export to PDF / CSV

Charts with more advanced analytics