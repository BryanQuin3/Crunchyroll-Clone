/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getRandomNumber } from "../constants/getRandomNumber";
export const AnimeEpisodeCard = ({ id, src, duration, title, episode }) => {
  const [random, setRandom] = useState(0);
  useEffect(() => {
    const random = getRandomNumber(1, 999);
    setRandom(random);
  }, []);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              viewBox="0 0 30 30"
              height="40"
              version="1.0"
              fill="#c2c2c2"
              className="svg-episode-section"
            >
              <defs>
                <clipPath id="a">
                  <path d="M7.383 7.621H22.62v13.79H7.383Zm0 0" />
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path d="M20.809 7.625H9.195a1.77 1.77 0 0 0-.695.14 1.82 1.82 0 0 0-1.117 1.672v7.254c0 .243.043.473.137.696.093.222.222.418.394.586a1.803 1.803 0 0 0 1.281.53h3.45l2.066 2.759a.349.349 0 0 0 .293.144.347.347 0 0 0 .289-.144l2.066-2.758h3.45c.242 0 .472-.047.695-.137a1.76 1.76 0 0 0 .586-.394c.172-.168.3-.364.394-.586.094-.223.137-.453.137-.696V9.438a1.82 1.82 0 0 0-1.813-1.813Zm1.09 9.066c0 .145-.028.286-.087.418a1.067 1.067 0 0 1-.585.586 1.04 1.04 0 0 1-.418.086h-3.63a.337.337 0 0 0-.288.145l-1.887 2.512-1.89-2.512a.337.337 0 0 0-.29-.145H9.195a1.04 1.04 0 0 1-.418-.086 1.067 1.067 0 0 1-.586-.586 1.027 1.027 0 0 1-.086-.418V9.438c0-.141.028-.282.086-.415.055-.132.133-.25.235-.351a1.078 1.078 0 0 1 .77-.32h11.613a1.078 1.078 0 0 1 .77.32c.1.101.179.219.233.351.06.133.086.274.086.415Zm-2.18-5.8a.348.348 0 0 1-.106.254.34.34 0 0 1-.258.109h-8.707a.34.34 0 0 1-.257-.11.348.348 0 0 1-.106-.253.35.35 0 0 1 .106-.258.35.35 0 0 1 .257-.106h8.707a.35.35 0 0 1 .258.106.35.35 0 0 1 .106.258Zm0 2.175a.348.348 0 0 1-.106.254.34.34 0 0 1-.258.11h-8.707a.34.34 0 0 1-.257-.11.348.348 0 0 1-.106-.254.35.35 0 0 1 .106-.257.35.35 0 0 1 .257-.106h8.707a.35.35 0 0 1 .258.106.35.35 0 0 1 .106.257Zm0 2.176a.348.348 0 0 1-.106.254.34.34 0 0 1-.258.11h-8.707a.34.34 0 0 1-.257-.11.348.348 0 0 1-.106-.254.35.35 0 0 1 .106-.258.35.35 0 0 1 .257-.105h8.707a.35.35 0 0 1 .258.105.35.35 0 0 1 .106.258Zm0 0" />
              </g>
            </svg>
            <span>{random}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            viewBox="0 0 30 30"
            height="40"
            version="1.0"
            fill="#e1e1e1"
            className="svg-episode-section"
          >
            <defs>
              <clipPath id="a">
                <path d="M9.578 7.621h10.887v13.79H9.578Zm0 0" />
              </clipPath>
            </defs>
            <g clipPath="url(#a)">
              <path d="M9.95 21.344c-.364-.188-.356-.782.015-.938.105-.043.91-.066 4.39-.129 5.645-.097 5.692-.097 5.84-.011a.514.514 0 0 1 .246.492c-.023.215-.113.34-.3.422-.145.062-.489.07-4.07.129-2.153.035-4.38.07-4.954.082-.937.02-1.05.015-1.168-.047Zm4.667-2.145c-.097-.05-1.656-1.441-3.512-3.129-.328-.297-.613-.586-.632-.636-.172-.45.293-.891.714-.672.055.027.782.664 1.614 1.41.832.746 1.535 1.36 1.562 1.36.047 0 .051-.294.032-1.93a860.328 860.328 0 0 1-.047-4.715c-.024-2.77-.024-2.785.054-2.907.23-.359.707-.355.914.008.07.125.079.41.133 6.918.016 1.485.04 2.711.055 2.719.02.012.582-.469 1.254-1.063 1.922-1.71 1.91-1.699 2.05-1.726.31-.059.626.195.626.492 0 .09-.02.207-.043.262-.063.133-3.864 3.492-4.012 3.543a2.475 2.475 0 0 1-.566.129.658.658 0 0 1-.196-.063Zm0 0" />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            viewBox="0 0 30 30"
            height="40"
            version="1.0"
            fill="#e1e1e1"
            className="svg-episode-section"
          >
            <defs>
              <clipPath id="a">
                <path d="M13.277 7.621h3.63v13.79h-3.63Zm0 0" />
              </clipPath>
            </defs>
            <g clipPath="url(#a)">
              <path d="M15.09 11.07c1.004 0 1.816-.773 1.816-1.726S16.094 7.62 15.09 7.62c-1 0-1.813.77-1.813 1.723 0 .953.813 1.726 1.813 1.726Zm0 1.723c-1 0-1.813.77-1.813 1.723 0 .953.813 1.722 1.813 1.722 1.004 0 1.816-.77 1.816-1.722 0-.954-.812-1.723-1.816-1.723Zm0 5.172c-1 0-1.813.77-1.813 1.723 0 .953.813 1.722 1.813 1.722 1.004 0 1.816-.77 1.816-1.723 0-.953-.812-1.722-1.816-1.722Zm0 0" />
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
};
export default AnimeEpisodeCard;
