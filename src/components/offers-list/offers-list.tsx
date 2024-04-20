import { OfferPreview } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: OfferPreview[];
  block: 'cities' | 'favorites' | 'near-places';
  size?: 'small' | 'large';
  onHover: (offer: OfferPreview | null) => void;
};

function OffersList({
  offers,
  block,
  size,
  onHover,
}: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          block={block}
          size={size}
          key={offer.id}
          onMouseOver={() => onHover(offer)}
          onMouseLeave={() => onHover(null)}
        />
      ))}
    </>
  );
}

export default OffersList;
