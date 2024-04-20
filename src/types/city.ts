import { CITIES } from '../constants/cities';
import { Location } from './location';

export type City = {
  name: string;
  location: Location;
};

export type CityName = (typeof CITIES)[number];
