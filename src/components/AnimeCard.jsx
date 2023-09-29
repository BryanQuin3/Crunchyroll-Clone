/* eslint-disable react/prop-types */
import { usePngToWebpConverter } from "../hooks/usePngToWebpConverter";
export const AnimeCard = ({ anime }) => {
  const titleOfAnime = anime.title;
  const pngSrc = anime.images?.jpg?.large_image_url;
  const webpSrc = usePngToWebpConverter(pngSrc);
  const gender = anime.genres[0]?.name || "Generic";

  return (
    <article className="anime-container">
      <figure className="img-container">
        <a href={anime.trailer?.url} target="_blank" rel="noreferrer">
          <img src="./img/play.png" alt="" className="play-icon" />
        </a>
        {webpSrc ? (
          <img loading="lazy" className="cover-img" src={webpSrc} alt="" />
        ) : (
          <img loading="lazy" className="cover-img" src={pngSrc} alt="" />
        )}
      </figure>
      <p className="anime-title">{titleOfAnime}</p>
      <p className="anime-genre">{gender}</p>
    </article>
  );
};

export default AnimeCard;
