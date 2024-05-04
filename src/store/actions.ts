import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { NameSpace } from '../constants/common';
import { CityName } from '../types/city';

export const fetchOffers = createAction(`${NameSpace.Offers}/fetchOffers`);

export const fetchOffer = createAction<Offer['id']>(
  `${NameSpace.Offer}/fetchOffer`
);

export const fetchNearPlaces = createAction<Offer['id']>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`
);

export const fetchReviews = createAction<Offer['id']>(
  `${NameSpace.Reviews}/fetchReviews`
);

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const setActiveCity = createAction<CityName>(
  `${NameSpace.Offers}/setActiveCity`
);

export const fetchFavorites = createAction<Offer['id']>(
  `${NameSpace.Offers}/fetchFavorites`
);
