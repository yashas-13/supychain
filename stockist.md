Pharma Supply Chain App: Super Stockist Role Documentation

Overview

Details the features, responsibilities, and API endpoints for the Super Stockist role in the Pharma Supply Chain App.

Role: Super Stockist

🎯 Responsibilities:

Place orders to CFA.

Track incoming shipments.

Manage local inventory.

📱 Super Stockist App Features

1. Dashboard

View recent orders.

Incoming shipment status.

Stock summary.

2. Place Order

Browse available products.

Submit quantity and batch preferences.

Review and confirm order.

3. Shipment Tracking

Track CFA dispatch status.

View ETA and delivery info.

Acknowledge receipt.

4. Inventory View

Monitor received product batches.

Alert on low stock or expirations.

Download or sync stock reports.

🔐 Authentication & Access

Role: stockist

Can access order, inventory, and track modules.

🔄 API Integration Endpoints

Endpoint

Method

Description

/api/products/available

GET

List orderable products

/api/orders

POST

Place new order to CFA

/api/orders

GET

View past and current orders

/api/shipments/:id

PATCH

Acknowledge received shipment

/api/stock

GET

View local stock levels

🧭 Navigation (Frontend Routes)

/dashboard

/order

/track

/inventory

✅ Edge Case Handling

Handle duplicate order submission.

Show errors for unavailable batches.

Notify if delivery is delayed or missing.

📌 Notes

Super Stockists drive downstream distribution.

They rely heavily on CFA fulfillment accuracy and timeliness.

