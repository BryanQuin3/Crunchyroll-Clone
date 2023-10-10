/* eslint-disable react/prop-types */
import { getRandomNumber } from "../constants/getRandomNumber";
export const AnimeEpisodeCard = ({ id, src, duration, title, episode }) => {
  const random = getRandomNumber(1, 999);
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
            <img src="../img/comments.svg" alt="comment-icon" />
            <span>{random}</span>
          </div>
          <img src="../img/download.svg" alt="download-icon" />
          <img src="../img/menu-options.svg" alt="options-icon" />
        </div>
      </section>
    </div>
  );
};
export default AnimeEpisodeCard;
