let BASE_URL;

if (typeof window !== 'undefined') {
  const host = window.location.hostname;
  BASE_URL = `http://${host}:3001/api`;
} else {
  BASE_URL = 'http://localhost:3001/api';
}

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
