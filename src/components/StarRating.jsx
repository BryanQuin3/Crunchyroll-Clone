/* eslint-disable react/prop-types */
import { Star } from "./Star";
export const StarRating = ({ rating }) => {
  const handleStarClick = (e) => {
    e.preventDefault();
    const star = e.target;
    //change the color of fill the star
    star.classList.toggle("star-rating__star--on");
    //change the color of the previous stars
    const previousStars = star.previousElementSibling;
    if (previousStars) {
      previousStars.classList.toggle("star-rating__star--on");
    }
  };
  const stars = Array.from({ length: 5 }, (_, index) => (
    <div onClick={handleStarClick} key={index}>
      <Star active={rating > index} />
    </div>
  ));

  return (
    <div className="rated-section star-rating-controls">
      {stars}
      <div className="rated">
        <p>
          Puntuación media <strong>{rating}</strong>
        </p>
      </div>
    </div>
  );
};

export default StarRating;
