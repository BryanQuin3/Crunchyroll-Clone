/* eslint-disable react/prop-types */
import { FavoritesContext } from "./context/favorites.jsx";
import { useContext } from "react";
import { FavoriteIcon, FavoriteIconFilled } from "./Icons.jsx";
export const RecommendedAnimeCard = ({ anime }) => {
  const { title, imageSrc, synopsis, button, genre, type } = anime;
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const isFavoriteText = isFavorite(anime)
    ? "En Favoritos"
    : "Añadir a favoritos";
  const handleClick = () => {
    toggleFavorite(anime);
  };
  return (
    <article className="recommended-anime-container">
      <figure className="recommended-img-container ripple">
        <img loading="lazy" src={imageSrc} alt="" />
      </figure>
      <div className="recommended-anime-info">
        <h3>{title}</h3>
        <div className="recommended-anime-details">
          <small>
            <span className="anime-type">{type} </span>| {genre}
          </small>

          {isFavorite(anime) ? (
            <FavoriteIconFilled
              className="watchlist-svg"
              onClick={handleClick}
            />
          ) : (
            <FavoriteIcon className="watchlist-svg" onClick={handleClick} />
          )}
        </div>
        <p className="recommended-anime-synopsis">{synopsis}</p>
        <div className="btns-crunchy-container">
          <button className="btn-crunchy ripple">
            <img
              className="card-play"
              src="./img/card-play.svg"
              alt="play-icon"
            />
            {button}
          </button>
          <button
            className="btn-crunchy btn-favorite ripple"
            onClick={handleClick}
          >
            {isFavorite(anime) ? (
              <FavoriteIconFilled className="favorite" />
            ) : (
              <FavoriteIcon className="favorite" />
            )}
            {isFavoriteText}
          </button>
        </div>
      </div>
    </article>
  );
};

export default RecommendedAnimeCard;
