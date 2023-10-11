/* eslint-disable react/prop-types */
import { StarRating } from "./StarRating";

export const AnimeInfo = ({ genres, title, rating, scored }) => {
  return (
    <div className="current-anime-info">
      <h1 className="anime-list-title">{title}</h1>
      <p className="anime-genre">
        {genres.map((g, i) => {
          return <span key={i}>{genres[i + 1] ? `${g.name} | ` : g.name}</span>;
        })}
      </p>
      {<StarRating rating={rating} score_by={scored} />}
    </div>
  );
};

export default AnimeInfo;
