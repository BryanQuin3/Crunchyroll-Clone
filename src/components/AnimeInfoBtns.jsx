/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FavoriteIcon, FavoriteIconFilled } from "./Icons";
import { FavoritesContext } from "./context/favorites.jsx";
import { useContext } from "react";

export const AnimeInfoBtns = ({ text, anime }) => {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const handleClick = () => {
    toggleFavorite(anime);
  };
  return (
    <footer className="carousel-btns">
      <Link to="" className="btn-crunchy ripple">
        <img className="card-play" src="../img/card-play.svg" alt="" />
        {text}
      </Link>
      {isFavorite(anime) ? (
        <FavoriteIcon
          className="watchlist-svg favorite"
          onClick={handleClick}
        />
      ) : (
        <FavoriteIconFilled
          className="watchlist-svg favorite filled-orange"
          onClick={handleClick}
        />
      )}
    </footer>
  );
};

export default AnimeInfoBtns;
