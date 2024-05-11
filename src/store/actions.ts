import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferDetails, OfferPreview } from '../types/offer';
import { AuthorizationStatus, NameSpace } from '../constants/common';
import { CityName } from '../types/city';
import { UserDetails } from '../types/user';
import { Comment } from '../types/comment';

export const setOffers = createAction<OfferPreview[]>(
  `${NameSpace.Offers}/setOffers`
);

export const setOffer = createAction<OfferDetails>(
  `${NameSpace.Offer}/setOffer`
);

export const fetchOffer = createAction<Offer['id']>(
  `${NameSpace.Offer}/fetchOffer`
);

export const setNearPlaces = createAction<OfferPreview[]>(
  `${NameSpace.NearPlaces}/setNearPlaces`
);

export const setReviews = createAction<Comment[]>(
  `${NameSpace.Reviews}/setReviews`
);

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const setActiveCity = createAction<CityName>(
  `${NameSpace.Offers}/setActiveCity`
);

export const fetchFavorites = createAction<Offer['id']>(
  `${NameSpace.Offers}/fetchFavorites`
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  `${NameSpace.User}/requireAuthorization`
);

export const setUser = createAction<UserDetails>(`${NameSpace.User}/setUser`);

export const dropUser = createAction(`${NameSpace.User}/dropUser`);

export const setError = createAction<string | null>(
  `${NameSpace.App}/setError`
);

export const setOffersDataLoadingStatus = createAction<boolean>(
  `${NameSpace.Offers}/setOffersDataLoadingStatus`
);

export const setOfferDataLoadingStatus = createAction<boolean>(
  `${NameSpace.Offer}/setOfferDataLoadingStatus`
);
