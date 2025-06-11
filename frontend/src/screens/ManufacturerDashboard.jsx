import React, { useEffect, useState } from 'react';
import { listProducts } from '../api';

export default function ManufacturerDashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    listProducts().then(setProducts);
  }, []);
  return (
    <div>
      <h1>Manufacturer Dashboard</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - Batch {p.batch}</li>
        ))}
      </ul>
    </div>
  );
}
