/* eslint-disable react/prop-types */
import { Skeleton } from "@mui/material";
import { setWidth } from "../constants/setWidth";
import { useEffect, useRef } from "react";
export const WatchingAnimeCard = ({ id, anime, episode, timeLeft }) => {
  const titleOfAnime = anime.title;
  const source =
    anime.images?.webp?.large_image_url || anime.images?.jpg?.large_image_url;
  const time = 24 - timeLeft;
  const duration = `${timeLeft || ""} min`;
  const gender = anime.genres[0].name;
  const animeContainerRef = useRef(null);
  useEffect(() => {
    setWidth(time, animeContainerRef.current);
  }, [time, id]);
  return (
    <article className="watching">
      <div ref={animeContainerRef}>
        <figure className="cover-container ripple">
          <img loading="lazy" className="img-cover" src={source} alt="" />
          <img
            loading="lazy"
            className="play-icon"
            src="../img/watching.svg"
            alt=""
          />
          <span className="minutes">{duration}</span>
        </figure>
      </div>
      <div className="watching-info">
        <small className="watching-title">{titleOfAnime}</small>
        {episode ? (
          <p className="watching-episode">{episode}</p>
        ) : (
          <Skeleton
            variant=""
            width={145}
            height={13}
            style={{ backgroundColor: "#d0d0d0" }}
          />
        )}
        <p className="anime-genre">{gender}</p>
      </div>
    </article>
  );
};

export default WatchingAnimeCard;
