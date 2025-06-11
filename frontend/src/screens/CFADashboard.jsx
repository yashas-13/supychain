import React, { useEffect, useState } from 'react';
import { listInboundOrders } from '../api';

export default function CFADashboard() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    listInboundOrders().then(setOrders);
  }, []);
  return (
    <div>
      <h1>CFA Dashboard</h1>
      <ul>
        {orders.map(o => (
          <li key={o.id}>{o.product} - {o.status}</li>
        ))}
      </ul>
    </div>
  );
}
