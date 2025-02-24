import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import {
//   persistor,
//   store,
// } from './redux/store';

import 'modern-normalize';
import './index.css';

import App from './App/App';

createRoot(
  document.getElementById(
    'root',
  ),
).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
