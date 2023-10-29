/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FavoriteIcon } from "./Icons";
export const AnimeInfoBtns = ({ text }) => {
  return (
    <footer className="carousel-btns">
      <Link to="" className="btn-crunchy ripple">
        <img className="card-play" src="../img/card-play.svg" alt="" />
        {text}
      </Link>

      <FavoriteIcon className="watchlist-svg favorite" />
    </footer>
  );
};

export default AnimeInfoBtns;
