/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { getRandomNumber } from "../constants/getRandomNumber";
import { DotsIcon, DownloadIcon, CommentsIcon } from "./Icons";

export const AnimeEpisodeCard = ({ id, src, duration, title, episode }) => {
  const [random, setRandom] = useState(0);
  const [visible, setVisible] = useState(false);
  const [viewed, setViewed] = useState(false);
  const dotRef = useRef(null);
  useEffect(() => {
    const random = getRandomNumber(1, 999);
    setRandom(random);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleClick = (e) => {
    // evitar que se cierre el menu de opciones si se hace click en el
    e.stopPropagation();
    setVisible(!visible);
  };
  const handleClickOutside = (e) => {
    if (dotRef.current && !dotRef.current.contains(e.target)) {
      // cerrar el menu de opciones si se hace click fuera de el
      setVisible(false);
    }
  };
  return (
    <div className="episode-card watching" key={id}>
      <figure className="cover-container ripple">
        <img
          loading="lazy"
          className={`img-cover ${viewed ? "viewed" : ""}`}
          src={src}
          alt={title}
        />
        <img
          loading="lazy"
          className="play-icon"
          src={viewed ? "../img/restart.svg" : "../img/watching.svg"}
          alt="play-icon"
        />
        <span className="minutes">
          {viewed ? "Visto" : duration == null ? "24min" : `${duration}min`}
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
            <div ref={dotRef} className="dot-menu-options">
              <a className="ripple" onClick={() => setViewed(!viewed)}>
                {viewed ? "Marcar como no visto" : "Marcar como visto"}
              </a>
              <a className="ripple">Compartir</a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default AnimeEpisodeCard;
