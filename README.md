Pharma Supply Chain App

A cross-platform PWA (Progressive Web App) for managing the pharmaceutical supply chain between Manufacturers, Carrying & Forwarding Agents (CFA), and Super Stockists.

🧩 Features

Manufacturer:

Manage product catalog.

Dispatch orders to CFAs.

Monitor supply chain and inventory metrics.

CFA (Agent):

Receive stock from manufacturers.

Dispatch stock to super stockists.

Track real-time inventory.

Maintain delivery acknowledgements.

Super Stockist:

Place orders to CFA.

Track shipment status.

Confirm product receipts.

View local stock.

⚙️ Tech Stack

Frontend: Bootstrap 5 + PWA (React or plain JS)

Backend: Node.js + Express / Django REST

Database: Internal DB (PostgreSQL or SQLite)

Auth: JWT Role-based Auth

Storage: Local filesystem (no AWS)

🚀 Getting Started

1. Clone the Repo

git clone https://github.com/your-org/pharma-supplychain-app
cd pharma-supplychain-app

2. Install Dependencies

npm install  # or yarn install

3. Start Development Server

npm run dev

4. Backend Setup

```
cd backend
npm install
npm start
```

5. Frontend Setup

```
cd frontend
npm install
npm run dev
```

By default the frontend assumes the backend runs on the same host on port `3001`.
If your backend is hosted elsewhere, create a `.env` file in `frontend/` with:

```
VITE_BACKEND_URL=http://<backend-ip>:3001/api
```

Then restart the dev server.

🔐 Authentication

Each user has a role: manufacturer, cfa, or stockist.

Token-based login flow with route guards.

🗃 Directory Structure

.
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.jsx
│       ├── components/
│       ├── screens/
│       └── api/
├── backend/
│   └── server.js

📄 Role Docs

agent.md: CFA role behavior and API documentation

manufacturer.md: Manufacturer responsibilities

stockist.md: Super Stockist workflow

📌 TODO

Add push notification support

Barcode scanner for batch validation

Offline sync capabilities (PWA feature)

👥 Contributing

PRs welcome! Please follow the code style guidelines and update relevant docs.

📝 License

MIT © YourCompany
