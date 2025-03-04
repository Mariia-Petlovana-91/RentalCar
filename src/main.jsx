import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, ScrollRestoration } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'modern-normalize';
import './index.css';

import App from './App/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
