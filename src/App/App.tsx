import React, { createContext } from 'react';

import Header from '@components/Header';
import Homepage from '@pages/HomePage';
import ProductPage from '@pages/ProductPage';
import SingleProductPage from '@pages/SingleProductPage';
import RootStore from '@store/RootStore/RootStore';
import { useLocal } from '@utils/useLocal';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const ProductPageContext = createContext<RootStore>(RootStore);

export const ProductPageProvider = ProductPageContext.Provider;

const App: React.FC = () => {
  const store = useLocal(() => new RootStore());
  return (
    <ProductPageProvider value={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product-list" element={<ProductPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ProductPageProvider>
  );
};

export default App;
