import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersPreview } from './mocks/offers-preview';
import { offersDetails } from './mocks/offers-details';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersPreview={offersPreview} offersDetails={offersDetails} />
    </Provider>
  </React.StrictMode>
);
