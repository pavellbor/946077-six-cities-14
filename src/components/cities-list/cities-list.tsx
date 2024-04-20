import cn from 'classnames';
import { CityName } from '../../types/city';

type CitiesListProps = {
  cities: readonly CityName[];
  active: CityName;
  onChange: (city: CityName) => void;
};

function CitiesList({
  cities,
  active,
  onChange,
}: CitiesListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city} className="locations__item">
            <a
              className={cn('locations__item-link tabs__item', {
                'tabs__item--active': city === active,
              })}
              onClick={() => onChange(city)}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
