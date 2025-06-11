Pharma Supply Chain App: Agent Role Documentation

Overview

This document describes the responsibilities, features, and workflows available to the CFA (Carrying and Forwarding Agent) in the Pharma Supply Chain mobile application.

Role: CFA (Agent)

🎯 Responsibilities:

Receive stock from Manufacturers.

Dispatch stock to Super Stockists.

Maintain and track current inventory.

Acknowledge deliveries and update shipment status.

📱 CFA App Features

1. Dashboard

Summary of incoming shipments from manufacturers.

Outbound orders from Super Stockists.

Low stock alerts.

2. Inbound Orders

View list of approved dispatches from Manufacturer.

Acknowledge receipt of products (batch no, quantity, expiry).

Update delivery status to 'Received'.

3. Outbound Dispatch

View incoming stockist orders.

Confirm & dispatch stock from available inventory.

Track delivery status to Stockist.

4. Inventory Management

Real-time stock levels by product & batch.

Batch tracking (expiry, lot number).

Stock reconciliation support.

5. Reports

Dispatch logs.

Stock movement summaries.

Daily transaction reports.

🔐 Authentication & Access

Role: cfa

Access: Inventory, Dispatch, Inbound, Reports

Protected routes via middleware

🔄 API Integration Endpoints

Endpoint

Method

Description

/api/inbound-orders

GET

List pending inbound manufacturer orders

/api/inbound-orders/:id

PATCH

Acknowledge delivery received

/api/dispatch-orders

GET

View stockist dispatch requests

/api/dispatch-orders

POST

Create a dispatch to stockist

/api/inventory

GET

View current inventory by product

🧭 Navigation (Frontend Routes)

/dashboard

/inbound

/dispatch

/inventory

/reports

✅ Edge Case Handling

Validate stock before dispatch.

Prevent duplicate acknowledgement.

Alert on expired/expiring batches.

📌 Notes

CFA role is central to maintaining timely and accurate supply movement.

Must coordinate closely with both manufacturers and stockists.
