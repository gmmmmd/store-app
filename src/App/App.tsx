import React from 'react';

import Header from '@components/Header';
import Homepage from '@pages/HomePage';
import ProductPage from '@pages/ProductPage';
import SingleProductPage from '@pages/SingleProductPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header className="Container" />
      <Routes>
        <Route path="/" element={<Navigate to="/product" replace />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
