import { ReactNode, useState } from 'react';
import { OfferContext } from './offers.context';
import { offers as mockOffers } from '../mocks/offers';
import { Offer } from '../types/offer';

type OffersProviderProps = {
  children: ReactNode;
};

export function OffersProvider({ children }: OffersProviderProps): JSX.Element {
  const [offers, setOffers] = useState<Offer[]>(mockOffers);
  return (
    <OfferContext.Provider value={{ offers, setOffers }}>
      {children}
    </OfferContext.Provider>
  );
}
