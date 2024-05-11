import { useCallback, useEffect, useState } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import { CITIES, CityLocation } from '../../constants/cities';
import MainPageLayout from '../../layouts/main-page-layout/main-page-layout';
import { OfferPreview } from '../../types/offer';
import { capitalizeFirstLetter } from '../../helpers/common';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/actions';
import Sorting from '../../components/sorting/sorting';
import { SortingType } from '../../types/sorting';
import { DEFAULT_ACTIVE_SORTING } from '../../constants/sorting';
import { fetchOffersAction } from '../../store/api-actions';

function MainPage(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );

  const cityLocation = CityLocation[selectedCity];

  const [activeOffer, setActiveOffer] = useState<OfferPreview | null>(null);

  const filteredOffers = offers.filter(
    (offer) => offer.city.name === selectedCity
  );

  const points = offers.map((offer) => offer.location);

  const [sorting, setSorting] = useState<SortingType>(DEFAULT_ACTIVE_SORTING);

  const dispatch = useAppDispatch();

  const handleCityChange = useCallback(
    (city) => dispatch(setActiveCity(city)),
    []
  );

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <MainPageLayout>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList
          cities={CITIES}
          active={selectedCity}
          onChange={handleCityChange}
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
            <Sorting active={sorting} onChange={(type) => setSorting(type)} />
            <div className="cities__places-list places__list tabs__content">
              <OffersList
                offers={filteredOffers}
                isLoading={isOffersDataLoading}
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
              parentClass="cities__map"
            />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
}

export default MainPage;
