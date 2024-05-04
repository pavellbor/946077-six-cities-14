import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_SELECTED_CITY } from '../constants/cities';
import { offersPreview } from '../mocks/offers-preview';
import {
  fetchOffers,
  fetchOffer,
  fetchNearPlaces,
  fetchReviews,
  dropOffer,
  setActiveCity,
  fetchFavorites,
} from './actions';
import { offersDetails } from '../mocks/offers-details';
import { OfferDetails, OfferPreview } from '../types/offer';
import { Comment } from '../types/comment';
import { CityName } from '../types/city';
import { reviews } from '../mocks/reviews';

const initialState: {
  offers: OfferPreview[];
  nearPlaces: OfferPreview[];
  reviews: Comment[];
  offer: OfferDetails | null;
  favorites: OfferPreview[];
  activeCity: CityName;
} = {
  offers: offersPreview,
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_SELECTED_CITY,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offersPreview;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer =
        offersDetails.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = offersPreview.filter(
        (offer) => offer.id !== action.payload
      );
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    });
});
