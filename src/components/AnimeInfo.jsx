/* eslint-disable react/prop-types */
import { StarRating } from "./StarRating";
import { FavoriteIcon, FavoriteIconFilled } from "./Icons";
import { FavoritesContext } from "./context/favorites.jsx";

import { useContext } from "react";

export const AnimeInfo = ({ genres, title, rating, scored, anime }) => {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const handleClick = () => {
    toggleFavorite(anime);
  };
  return (
    <div className="current-anime-info">
      <header className="current-anime-info-details">
        <h1 className="anime-list-title">{title}</h1>
        {isFavorite(anime) ? (
          <FavoriteIconFilled className="watchlist-svg" onClick={handleClick} />
        ) : (
          <FavoriteIcon className="watchlist-svg" onClick={handleClick} />
        )}
      </header>
      <section>
        <p className="anime-genre">
          {genres.map((g, i) => {
            return (
              <span key={i}>{genres[i + 1] ? `${g.name} | ` : g.name}</span>
            );
          })}
        </p>
        {<StarRating rating={rating} score_by={scored} />}
      </section>
    </div>
  );
};

export default AnimeInfo;
