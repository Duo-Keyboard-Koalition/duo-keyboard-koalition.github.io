import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// $Inpm install @react-oauth/google@latest
import { GoogleAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);