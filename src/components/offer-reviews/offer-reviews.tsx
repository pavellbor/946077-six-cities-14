import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { NewComment } from '../../types/comment';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';
import { addReviewAction, fetchReviewsAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../constants/common';
import { setReviews } from '../../store/actions';

type OfferReviewsProps = {
  offerId: string;
};

function OfferReviews({ offerId }: OfferReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const reviews = useAppSelector((state) => state.reviews);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviewsAction(offerId));

    return () => {
      dispatch(setReviews([]));
    };
  }, [dispatch, offerId]);

  async function handleOfferReviewsFormSubmit(
    review: NewComment,
    clearForm: () => void
  ) {
    // eslint-disable-next-line no-console
    await dispatch(addReviewAction({ offerId, review }));
    clearForm();
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <OfferReviewsList reviews={reviews} />
      {authorizationStatus === AuthorizationStatus.Auth && (
        <OfferReviewsForm onSubmit={handleOfferReviewsFormSubmit} />
      )}
    </section>
  );
}

export default OfferReviews;
