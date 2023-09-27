/* eslint-disable react/prop-types */
import { setWidth } from "../constants/setWidth";
import { useEffect } from "react";
export const WatchingAnimeCard = ({ id, anime, episode, timeLeft }) => {
  const titleOfAnime = anime.title;
  const src = anime.images?.jpg?.large_image_url;
  const time = 24 - timeLeft;
  const duration = `${timeLeft} min`;
  const gender = anime.genres[0].name;
  useEffect(() => {
    setWidth(time, `anime${id}`);
  }, [time, id]);
  return (
    <article className="watching">
      <div id={`anime${id}`}>
        <figure className="cover-container ripple">
          <img className="img-cover" src={src} alt="" />
          <img className="play-icon" src="./img/watching.svg" alt="" />
          <span className="minutes">{duration}</span>
        </figure>
      </div>
      <div className="watching-info">
        <h5 className="watching-title">{titleOfAnime}</h5>
        <p className="watching-episode">{episode}</p>
        <p className="anime-genre">{gender}</p>
      </div>
    </article>
  );
};

export default WatchingAnimeCard;
