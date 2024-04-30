import { reviews } from '../../mocks/reviews';
import { NewComment } from '../../types/comment';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';

function OfferReviews(): JSX.Element {
  function handleOfferReviewsFormSubmit(comment: NewComment) {
    // eslint-disable-next-line no-console
    console.log(comment);
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <OfferReviewsList reviews={reviews} />
      <OfferReviewsForm onSubmit={handleOfferReviewsFormSubmit} />
    </section>
  );
}

export default OfferReviews;
