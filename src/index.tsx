import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersDetails } from './mocks/offers-details';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App offersDetails={offersDetails} />
    </Provider>
  </React.StrictMode>
);
