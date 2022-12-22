import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './component/Contex';
import {BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AppProvider>
    
  <React.StrictMode>
    <App />
  </React.StrictMode>

  </AppProvider>
  </BrowserRouter>
);

