import cn from 'classnames';

import {
  capitalizeFirstLetter,
  concatToPath,
  percentifyRating,
} from '../../helpers/common';
import { OfferPreview } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/common';

type OfferCardBlock = 'cities' | 'favorites' | 'near-places';
type OfferCardImageSize = 'small' | 'large';

type OfferCardProps = {
  offer: OfferPreview;
  block: OfferCardBlock;
  size?: OfferCardImageSize;
  onMouseOver?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
};

const SizeMap: Record<OfferCardImageSize, { width: string; height: string }> = {
  small: { width: '150', height: '110' },
  large: { width: '260', height: '200' },
};

function OfferCard({
  offer,
  block,
  size = 'large',
  onMouseOver,
  onMouseLeave,
}: OfferCardProps): JSX.Element {
  const offerDetailsLink = concatToPath(AppRoute.Offer, offer.id);

  return (
    <article
      className={`${block}__card place-card`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerDetailsLink}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            {...SizeMap[size]}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={cn('place-card__info', {
          'favorites__card-info': block === 'favorites',
        })}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn(
              'place-card__bookmark-button button',
              offer.isFavorite && 'place-card__bookmark-button--active'
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{ width: `${percentifyRating(offer.rating)}%` }}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerDetailsLink}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
