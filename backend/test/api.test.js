import test from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from '../server.js';

// Manufacturer endpoints

test('GET /api/products returns product list', async () => {
  const res = await request(app).get('/api/products');
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(res.body));
});

test('POST /api/products creates product', async () => {
  const payload = { name: 'Test', batch: 'B1', expiry: '2026-01-01' };
  const res = await request(app).post('/api/products').send(payload);
  assert.equal(res.status, 201);
  assert.equal(res.body.name, 'Test');
});

// CFA endpoints

test('GET /api/inbound-orders returns inbound list', async () => {
  const res = await request(app).get('/api/inbound-orders');
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(res.body));
});

test('PATCH /api/inbound-orders/:id handles missing', async () => {
  const res = await request(app).patch('/api/inbound-orders/999');
  assert.equal(res.status, 404);
});

test('POST /api/dispatch-orders creates dispatch', async () => {
  const payload = { product: 'Test', quantity: 1 };
  const res = await request(app).post('/api/dispatch-orders').send(payload);
  assert.equal(res.status, 201);
  assert.equal(res.body.product, 'Test');
});

// Stockist endpoints

test('GET /api/products/available returns products', async () => {
  const res = await request(app).get('/api/products/available');
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(res.body));
});

test('POST /api/orders creates order', async () => {
  const payload = { product: 'Test', quantity: 2 };
  const res = await request(app).post('/api/orders').send(payload);
  assert.equal(res.status, 201);
  assert.equal(res.body.product, 'Test');
});

