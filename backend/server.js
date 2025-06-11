import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data
let products = [
  { id: 1, name: 'Aspirin', batch: 'A1', expiry: '2025-12-31' },
  { id: 2, name: 'Paracetamol', batch: 'P1', expiry: '2024-10-31' }
];
let orders = [];
let inboundOrders = [];
let dispatchOrders = [];

// Manufacturer endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const product = { id: Date.now(), ...req.body };
  products.push(product);
  res.status(201).json(product);
});

// CFA endpoints
app.get('/api/inbound-orders', (req, res) => {
  res.json(inboundOrders);
});

app.patch('/api/inbound-orders/:id', (req, res) => {
  const id = Number(req.params.id);
  const order = inboundOrders.find(o => o.id === id);
  if (!order) return res.status(404).json({ message: 'Order not found' });
  order.status = 'received';
  res.json(order);
});

app.get('/api/dispatch-orders', (req, res) => {
  res.json(dispatchOrders);
});

app.post('/api/dispatch-orders', (req, res) => {
  const order = { id: Date.now(), ...req.body };
  dispatchOrders.push(order);
  res.status(201).json(order);
});

// Stockist endpoints
app.get('/api/products/available', (req, res) => {
  res.json(products);
});

app.post('/api/orders', (req, res) => {
  const order = { id: Date.now(), ...req.body };
  orders.push(order);
  res.status(201).json(order);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.patch('/api/shipments/:id', (req, res) => {
  const shipment = dispatchOrders.find(o => o.id === Number(req.params.id));
  if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
  shipment.status = 'acknowledged';
  res.json(shipment);
});

app.get('/api/stock', (req, res) => {
  res.json(products);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
