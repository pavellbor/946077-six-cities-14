import { Fragment } from 'react';

type OfferReviewsFormRatingProps = {
  value: string;
  onChange: (rating: string) => void;
};

const ratingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

function OfferReviewsFormRating({
  value,
  onChange,
}: OfferReviewsFormRatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(ratingMap)
        .reverse()
        .map(([ratingValue, ratingTitle]) => {
          const isChecked = ratingValue === value;

          return (
            <Fragment key={ratingValue}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={ratingValue}
                id={`${ratingValue}-stars`}
                type="radio"
                onChange={() => onChange(ratingValue)}
                checked={isChecked}
              />
              <label
                htmlFor={`${ratingValue}-stars`}
                className="reviews__rating-label form__rating-label"
                title={ratingTitle}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
    </div>
  );
}

export default OfferReviewsFormRating;
