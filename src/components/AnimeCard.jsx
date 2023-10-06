/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const AnimeCard = ({ anime }) => {
  const titleOfAnime = anime.title;
  const src =
    anime.images?.webp?.large_image_url || anime.images?.jpg?.large_image_url;
  const gender = anime.genres[0]?.name || "Generic";
  const idAnime = anime.mal_id;
  return (
    <article className="anime-container">
      <figure className="img-container">
        <Link to={`./anime/${idAnime}`}>
          <img src="./img/play.png" alt="" className="play-icon" />
        </Link>
        <img
          loading="lazy"
          className="cover-img"
          src={src}
          alt={`${titleOfAnime} Cover`}
        />
      </figure>
      <p className="anime-title">{titleOfAnime}</p>
      <p className="anime-genre">{gender}</p>
    </article>
  );
};

export default AnimeCard;
