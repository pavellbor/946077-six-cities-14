import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_SELECTED_CITY } from '../constants/cities';
import { offersPreview } from '../mocks/offers-preview';
import {
  setOffers,
  setNearPlaces,
  setReviews,
  dropOffer,
  setActiveCity,
  fetchFavorites,
  requireAuthorization,
  setUser,
  dropUser,
  setError,
  setOffer,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './actions';
import { OfferDetails, OfferPreview } from '../types/offer';
import { Comment } from '../types/comment';
import { CityName } from '../types/city';
import { AuthorizationStatus } from '../constants/common';
import { UserDetails } from '../types/user';

const initialState: {
  offers: OfferPreview[];
  nearPlaces: OfferPreview[];
  reviews: Comment[];
  offer: OfferDetails | null;
  favorites: OfferPreview[];
  activeCity: CityName;
  authorizationStatus: AuthorizationStatus;
  user: UserDetails | null;
  error: string | null;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
} = {
  offers: [],
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_SELECTED_CITY,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(dropUser, (state) => {
      state.user = null;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    });
});
