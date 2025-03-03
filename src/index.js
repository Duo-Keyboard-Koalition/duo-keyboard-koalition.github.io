import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// $Inpm install @react-oauth/google@latest
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);