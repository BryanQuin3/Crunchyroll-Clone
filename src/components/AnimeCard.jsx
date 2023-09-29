/* eslint-disable react/prop-types */
export const AnimeCard = ({ anime }) => {
  const titleOfAnime = anime.title;
  const src = anime.images?.jpg?.large_image_url;
  const gender = anime.genres[0]?.name || "Generic";

  return (
    <article className="anime-container">
      <figure className="img-container">
        <a href={anime.trailer?.url} target="_blank" rel="noreferrer">
          <img src="./img/play.png" alt="" className="play-icon" />
        </a>
        <img loading="lazy" className="cover-img" src={src} alt="" />
      </figure>
      <p className="anime-title">{titleOfAnime}</p>
      <p className="anime-genre">{gender}</p>
    </article>
  );
};

export default AnimeCard;
