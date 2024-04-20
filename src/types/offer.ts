import { City } from './city';
import { Location } from './location';
import { User } from './user';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferPreview = Offer & {
  previewImage: string;
};

export type OfferDetails = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};
