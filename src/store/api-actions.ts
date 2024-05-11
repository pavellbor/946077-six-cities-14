import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import {
  APIRoute,
  AuthorizationStatus,
  NameSpace,
  TIMEOUT_SHOW_ERROR,
} from '../constants/common';
import { Offer, OfferDetails, OfferPreview } from '../types/offer';
import {
  dropUser,
  requireAuthorization,
  setError,
  setNearPlaces,
  setOffer,
  setOfferDataLoadingStatus,
  setOffers,
  setOffersDataLoadingStatus,
  setReviews,
  setUser,
} from './actions';
import { AuthData } from '../types/auth-data';
import { UserDetails } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { Comment, NewComment } from '../types/comment';

type AsyncThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkApiConfig
>(`${NameSpace.Offers}/fetchOffers`, async (_arg, { dispatch, extra: api }) => {
  try {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(setOffers(data));
  } finally {
    dispatch(setOffersDataLoadingStatus(false));
  }
});

export const fetchNearPlacesAction = createAsyncThunk<
  void,
  Offer['id'],
  AsyncThunkApiConfig
>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`,
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(
      `${APIRoute.Offers}/${offerId}/nearby`
    );
    dispatch(setNearPlaces(data));
  }
);

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  AsyncThunkApiConfig
>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setOfferDataLoadingStatus(true));
      const { data } = await api.get<OfferDetails>(
        `${APIRoute.Offers}/${offerId}`
      );
      dispatch(setOffer(data));
    } finally {
      dispatch(setOfferDataLoadingStatus(false));
    }
  }
);

export const fetchReviewsAction = createAsyncThunk<
  void,
  string,
  AsyncThunkApiConfig
>(
  `${NameSpace.Reviews}/fetchReviews`,
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Comment[]>(
      `${APIRoute.Comments}/${offerId}`
    );
    dispatch(setReviews(data));
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkApiConfig
>(`${NameSpace.User}/checkAuth`, async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserDetails>(APIRoute.Login);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(dropUser());
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  AsyncThunkApiConfig
>(
  `${NameSpace.User}/login`,
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserDetails>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkApiConfig
>(`${NameSpace.User}/logout`, async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(dropUser());
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const clearErrorAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkApiConfig
>(`${NameSpace.App}/clearError`, (_arg, { dispatch }) => {
  setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const addReviewAction = createAsyncThunk<
  void,
  { offerId: Offer['id']; review: NewComment },
  AsyncThunkApiConfig
>(
  `${NameSpace.Reviews}/addReview`,
  async ({ offerId, review }, { getState, dispatch, extra: api }) => {
    const { data } = await api.post<Comment>(
      `${APIRoute.Comments}/${offerId}`,
      review
    );
    const { reviews } = getState();

    dispatch(setReviews([...reviews, data]));
  }
);
