/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getRandomNumber } from "../constants/getRandomNumber";
import { DotsIcon, DownloadIcon, CommentsIcon } from "./Icons";

export const AnimeEpisodeCard = ({ id, src, duration, title, episode }) => {
  const [random, setRandom] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const random = getRandomNumber(1, 999);
    setRandom(random);
  }, []);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className="episode-card watching" key={id}>
      <figure className="cover-container ripple">
        <img loading="lazy" className="img-cover" src={src} alt={title} />
        <img
          loading="lazy"
          className="play-icon"
          src="../img/watching.svg"
          alt="play-icon"
        />
        <span className="minutes">
          {duration == null ? "24min" : `${duration}min`}
        </span>
      </figure>
      <section className="episode-card-body">
        <div className="episode-info">
          <p className="episode-number">{`${episode}.`}</p>
          <p className="episode-title watching-episode">{title}</p>
        </div>
        <div className="episode-options">
          <div className="comments-section">
            <CommentsIcon />
            <span>{random}</span>
          </div>
          <DownloadIcon />
          <DotsIcon onClick={handleClick} />
          {visible && (
            <div className="dot-menu-options">
              <a className="ripple">Marcar como visto</a>
              <a className="ripple">Compartir</a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default AnimeEpisodeCard;
