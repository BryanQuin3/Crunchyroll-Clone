/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FavoriteIcon } from "./Icons";
import { FavoritesContext } from "./context/favorites.jsx";
import { useContext } from "react";

export const AnimeInfoBtns = ({ text, anime }) => {
  const { toggleFavorite } = useContext(FavoritesContext);
  const handleClick = () => {
    toggleFavorite(anime);
  };
  return (
    <footer className="carousel-btns">
      <Link to="" className="btn-crunchy ripple">
        <img className="card-play" src="../img/card-play.svg" alt="" />
        {text}
      </Link>

      <FavoriteIcon className="watchlist-svg favorite" onClick={handleClick} />
    </footer>
  );
};

export default AnimeInfoBtns;
