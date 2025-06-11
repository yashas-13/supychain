import test from 'node:test';
import assert from 'node:assert';
import http from 'http';
import app from '../../backend/server.js';
import { listProducts, setBaseUrl } from '../src/api/index.js';

let server;

test.before(async () => {
  server = http.createServer(app);
  await new Promise(resolve => server.listen(3001, resolve));
  setBaseUrl('http://localhost:3001/api');
});

test.after(async () => {
  await new Promise(resolve => server.close(resolve));
});

test('listProducts fetches data from backend', async () => {
  const data = await listProducts();
  assert.ok(Array.isArray(data));
});

