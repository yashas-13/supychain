import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ManufacturerDashboard from './screens/ManufacturerDashboard.jsx';
import CFADashboard from './screens/CFADashboard.jsx';
import StockistDashboard from './screens/StockistDashboard.jsx';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/manufacturer">Manufacturer</Link> |{' '}
        <Link to="/cfa">CFA</Link> |{' '}
        <Link to="/stockist">Stockist</Link>
      </nav>
      <Routes>
        <Route path="/manufacturer" element={<ManufacturerDashboard />} />
        <Route path="/cfa" element={<CFADashboard />} />
        <Route path="/stockist" element={<StockistDashboard />} />
        <Route path="*" element={<p>Select role</p>} />
      </Routes>
    </div>
  );
}
