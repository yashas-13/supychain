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
npm run dev -- --host
```

The frontend automatically points to the backend running on the same host. When
accessing the app via the backend's IP address, API requests will be sent to
`http://<backend-ip>:3001`. If you need to override this behaviour, set
`VITE_BACKEND_URL` in `frontend/.env` and restart the dev server.

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
