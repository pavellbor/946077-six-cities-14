import { useContext } from 'react';
import { OfferContext } from './offers.context';

export function useOffersContext() {
  const context = useContext(OfferContext);

  if (!context) {
    throw new Error('useOffers must be used within OfferContext');
  }

  return context;
}
