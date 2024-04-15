import { createContext } from 'react';
import { Offer } from '../types/offer';

export type OffersContextType = {
  offers: Offer[];
  setOffers: (offers: Offer[]) => void;
};

export const OfferContext = createContext<OffersContextType>({
  setOffers: () => {},
  offers: [],
});
