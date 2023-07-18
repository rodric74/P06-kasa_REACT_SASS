import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
