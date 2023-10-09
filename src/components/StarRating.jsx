/* eslint-disable react/prop-types */
import { Star } from "./Star";
export const StarRating = ({ rating, score_by }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <div key={index}>
      <Star active={rating > index} />
    </div>
  ));

  return (
    <div className="rated-section star-rating-controls">
      {stars}
      <div className="rated">
        <p>
          Media: <strong>{rating}</strong> ({score_by})
        </p>
      </div>
    </div>
  );
};

export default StarRating;
