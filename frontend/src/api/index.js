let BASE_URL = 'http://localhost:3001/api';

export function setBaseUrl(url) {
  BASE_URL = url;
}

export async function listProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function listInboundOrders() {
  const res = await fetch(`${BASE_URL}/inbound-orders`);
  return res.json();
}

export async function listAvailableProducts() {
  const res = await fetch(`${BASE_URL}/products/available`);
  return res.json();
}
