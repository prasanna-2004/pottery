import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './Contexts/CartContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Import font awesome for icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faPinterest, faEtsy } from '@fortawesome/free-brands-svg-icons';

// Add icons to library
library.add(
  faShoppingCart, 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faInstagram,
  faFacebook,
  faPinterest,
  faEtsy
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();