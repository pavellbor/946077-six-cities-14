import cn from 'classnames';
import { SortingType } from '../../types/sorting';

type SortingProps = {
  active: SortingType;
  onChange: (type: SortingType) => void;
};

function Sorting({ active, onChange }: SortingProps): JSX.Element {
  const SortingTypeToLabelMap: Record<SortingType, string> = {
    [SortingType.Popular]: 'Popular',
    [SortingType.PriceLowToHigh]: 'Price: low to high',
    [SortingType.PriceHighToLow]: 'Price: high to low',
    [SortingType.TopRatedFirst]: 'Top rated first',
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {SortingTypeToLabelMap[active]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.entries(SortingTypeToLabelMap).map(([type, label]) => (
          <li
            key={type}
            className={cn(
              'places__option',
              (type as SortingType) === active && 'places__option--active'
            )}
            tabIndex={0}
            onClick={() => onChange(type as SortingType)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
