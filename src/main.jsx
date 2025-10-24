import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css'; // estilos globales

const root = createRoot(document.getElementById('root'));

// Si ves "parpadeo" por efectos, temporalmente comenta React.StrictMode.
// En producción o cuando todo esté correcto, usa StrictMode.
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);