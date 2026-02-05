import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { WalletProvider } from './context/WalletContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>,
);
