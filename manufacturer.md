# Pharma Supply Chain App: Manufacturer Role Documentation

## Overview

Describes the responsibilities, features, and API interactions for the **Manufacturer** role in the Pharma Supply Chain App.

---

## Role: Manufacturer

### 🎯 Responsibilities:

* Maintain master product catalog.
* Dispatch stock to CFAs.
* Review inventory flow reports.

---

## 📱 Manufacturer App Features

### 1. Dashboard

* Summary of active CFAs.
* Pending dispatch requests.
* Inventory overview by product.

### 2. Product Catalog

* Create, update, and manage products.
* Define batch, expiry, pricing, and units.

### 3. Dispatch Management

* View and approve dispatch requests.
* Generate dispatch slips.
* Monitor delivery status.

### 4. Reports

* CFA fulfillment history.
* Inventory movement logs.
* Expiry and batch audits.

---

## 🔐 Authentication & Access

* Role: `manufacturer`
* Full access to catalog, dispatch, and reporting modules.

---

## 🔄 API Integration Endpoints

| Endpoint                 | Method | Description               |
| ------------------------ | ------ | ------------------------- |
| `/api/products`          | GET    | List all products         |
| `/api/products`          | POST   | Create a new product      |
| `/api/dispatch-requests` | GET    | View pending CFA requests |
| `/api/dispatch`          | POST   | Dispatch product to CFA   |
| `/api/reports/inventory` | GET    | Inventory report          |

---

## 🧭 Navigation (Frontend Routes)

* `/dashboard`
* `/products`
* `/dispatch`
* `/reports`

---

## ✅ Edge Case Handling

* Validate batch/expiry before dispatch.
* Prevent duplicate dispatches.
* Handle partial stock dispatches.

---

## 📌 Notes

* Manufacturer role initiates all product flows.
* Acts as system origin for compliance, traceability, and pricing.
