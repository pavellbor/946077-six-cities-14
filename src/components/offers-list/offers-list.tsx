import { OfferPreview } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import Spinner from '../spinner/spinner';

type OffersListProps = {
  offers: OfferPreview[];
  block: 'cities' | 'favorites' | 'near-places';
  size?: 'small' | 'large';
  isLoading?: boolean;
  onHover?: (offer: OfferPreview | null) => void;
};

function OffersList({
  offers,
  block,
  size,
  isLoading,
  onHover,
}: OffersListProps): JSX.Element {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          block={block}
          size={size}
          key={offer.id}
          onMouseOver={() => onHover?.(offer)}
          onMouseLeave={() => onHover?.(null)}
        />
      ))}
    </>
  );
}

export default OffersList;
