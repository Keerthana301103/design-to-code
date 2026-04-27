import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Frame1 from '../pages/Frame1';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frame-1" element={<Frame1 />} />
        <Route path="/" element={<Navigate to="/frame-1" replace />} />
        <Route path="*" element={<Navigate to="/frame-1" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;