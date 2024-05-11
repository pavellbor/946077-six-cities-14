import { useState } from 'react';
import { NewComment } from '../../types/comment';
import OfferReviewsFormRating from '../offer-reviews-form-rating/offer-reviews-form-rating';

type OfferReviewsFormProps = {
  onSubmit: (comment: NewComment, clearForm: () => void) => Promise<void>;
};

function OfferReviewsForm({ onSubmit }: OfferReviewsFormProps): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  function handleRatingChange(value: string) {
    setRating(value);
  }

  function handleCommentChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  function clearForm() {
    setComment('');
    setRating('');
  }

  function handleFormSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    onSubmit({ rating: Number(rating), comment }, clearForm);
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <OfferReviewsFormRating value={rating} onChange={handleRatingChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={comment}
        // eslint-disable-next-line react/jsx-closing-tag-location
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
