import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersPreview } from './mocks/offers-preview';
import { offersDetails } from './mocks/offers-details';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersPreview={offersPreview} offersDetails={offersDetails} />
  </React.StrictMode>
);
