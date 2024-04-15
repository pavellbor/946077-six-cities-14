import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersPreview } from './mocks/offers-preview';
import { OffersProvider } from './context/offers.provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <OffersProvider>
      <App offersPreview={offersPreview} />
    </OffersProvider>
  </React.StrictMode>
);
