import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UseAppContextProvider } from './hooks/useContext';
import { GlobalStyles } from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseAppContextProvider>
      <GlobalStyles />
      <App />
    </UseAppContextProvider>
  </React.StrictMode>
);
