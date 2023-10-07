/* eslint-disable react/prop-types */
export const Star = ({ active }) => (
  <svg
    className={"star-icon" + (active ? " star-rating__star--on" : "")}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    data-t=""
    aria-hidden="false"
    role="img"
    width={30}
    fill="#f1f1f1"
  >
    <title id="star-svg">Reseña destacada</title>
    <path d="M15.266 8.352L11.988 1.723 8.73 8.352 1.431 9.397 6.71 14.528 5.465 21.849 11.999 18.39 18.544 21.85 17.285 14.528 22.57 9.398z"></path>
  </svg>
);

export default Star;
