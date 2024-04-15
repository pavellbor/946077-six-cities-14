import { useState } from 'react';
import { OfferPreview } from '../../types/offer-preview';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: OfferPreview[];
  block: 'cities' | 'favorites' | 'near-places';
  size?: 'small' | 'large';
};

function OffersList({ offers, block, size }: OffersListProps): JSX.Element {
  const [, setActiveCard] = useState<string | null>();

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          block={block}
          size={size}
          key={offer.id}
          onMouseOver={() => setActiveCard(offer.id)}
          onMouseLeave={() => setActiveCard(null)}
        />
      ))}
    </>
  );
}

export default OffersList;
