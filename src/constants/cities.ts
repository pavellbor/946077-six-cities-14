import { CityName } from '../types/city';
import { Location } from '../types/location';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const DEFAULT_SELECTED_CITY: CityName = 'Paris';

export const CityLocation: { [key in CityName]: Omit<Location, 'zoom'> } = {
  Paris: {
    latitude: 48.85661,
    longitude: 2.351499,
  },
  Cologne: {
    latitude: 50.938361,
    longitude: 6.959974,
  },
  Brussels: {
    latitude: 50.846557,
    longitude: 4.351697,
  },
  Amsterdam: {
    latitude: 52.37454,
    longitude: 4.897976,
  },
  Hamburg: {
    latitude: 53.550341,
    longitude: 10.000654,
  },
  Dusseldorf: {
    latitude: 51.225402,
    longitude: 6.776314,
  },
};
