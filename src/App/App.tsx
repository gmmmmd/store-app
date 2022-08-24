import React from 'react';

import Header from '@components/Header';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header className="Container" />
      <div>store-app</div>
    </BrowserRouter>
  );
};

export default App;
