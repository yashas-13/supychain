import React, { useEffect, useState } from 'react';
import { listAvailableProducts } from '../api';

export default function StockistDashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    listAvailableProducts().then(setProducts);
  }, []);
  return (
    <div>
      <h1>Stockist Dashboard</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
