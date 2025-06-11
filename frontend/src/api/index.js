let BASE_URL = 'http://localhost:3001/api';

// Allow overriding via Vite environment variable. When running in a browser
// without a specified variable, default to the backend on the current host.
if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_BACKEND_URL) {
  BASE_URL = import.meta.env.VITE_BACKEND_URL;
} else if (typeof window !== 'undefined') {
  BASE_URL = `http://${window.location.hostname}:3001/api`;
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
