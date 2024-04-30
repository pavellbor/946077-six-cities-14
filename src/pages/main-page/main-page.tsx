import { useState } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import {
  CITIES,
  CityLocation,
  DEFAULT_SELECTED_CITY,
} from '../../constants/cities';
import MainPageLayout from '../../layouts/main-page-layout/main-page-layout';
import { CityName } from '../../types/city';
import { OfferPreview } from '../../types/offer';
import { capitalizeFirstLetter } from '../../helpers/common';

type MainPageProps = {
  offers: OfferPreview[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<CityName>(
    DEFAULT_SELECTED_CITY
  );
  const [activeOffer, setActiveOffer] = useState<OfferPreview | null>(null);
  const cityLocation = CityLocation[selectedCity];
  const filteredOffers = offers.filter(
    (offer) => offer.city.name === selectedCity
  );

  const points = offers.map((offer) => offer.location);

  return (
    <MainPageLayout>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList
          cities={CITIES}
          active={selectedCity}
          onChange={(city) => setSelectedCity(city)}
        />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {filteredOffers.length} places to stay in{' '}
              {capitalizeFirstLetter(selectedCity)}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <OffersList
                offers={filteredOffers}
                block="cities"
                onHover={(offerId) => setActiveOffer(offerId)}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <Map
              city={cityLocation}
              activePoint={activeOffer?.location}
              points={points}
              parentClass='cities__map'
            />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
}

export default MainPage;
