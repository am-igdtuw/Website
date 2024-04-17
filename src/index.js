import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from "./GlobalStyles";
import { Analytics } from '@vercel/analytics/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <Analytics />
  </React.StrictMode>
);


