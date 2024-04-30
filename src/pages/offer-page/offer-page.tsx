import { useParams } from 'react-router-dom';
import OfferPageLayout from '../../layouts/favorites-page-layout/offer-page-layout';
import { OfferDetails } from '../../types/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import { capitalizeFirstLetter, percentifyRating } from '../../helpers/common';
import OfferHostUser from '../../components/offer-host-user/offer-host-user';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import Map from '../../components/map/map';
import { OffersNearby } from '../../mocks/offers-nearby';
import OffersList from '../../components/offers-list/offers-list';

type OfferPageProps = {
  offers: OfferDetails[];
};

function OfferPage({ offers }: OfferPageProps): JSX.Element {
  const { offerId } = useParams();

  const currentOffer = offers.find((offer) => offer.id === offerId);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  return (
    <OfferPageLayout>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {currentOffer.images.map((imageUrl) => (
              <div key={imageUrl} className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={imageUrl}
                  alt={currentOffer.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {currentOffer.isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{currentOffer.title}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span
                  style={{ width: `${percentifyRating(currentOffer.rating)}%` }}
                ></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {currentOffer.rating}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {capitalizeFirstLetter(currentOffer.type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {currentOffer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {currentOffer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{currentOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {currentOffer.goods.map((good) => (
                  <li key={good} className="offer__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <OfferHostUser user={currentOffer.host} />
              <div className="offer__description">
                <p className="offer__text">{currentOffer.description}</p>
              </div>
            </div>
            <OfferReviews />
          </div>
        </div>
        <Map
          city={currentOffer.city.location}
          points={OffersNearby.map((offer) => offer.location)}
          parentClass="offer__map"
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <OffersList offers={OffersNearby} block='near-places'/>
          </div>
        </section>
      </div>
    </OfferPageLayout>
  );
}

export default OfferPage;
