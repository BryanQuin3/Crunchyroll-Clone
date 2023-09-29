/* eslint-disable react/prop-types */
import { WatchingAnimeCard } from "./WatchingAnimeCard";
import { useEffect, useState } from "react";
import { getRandomNumber } from "../constants/getRandomNumber";
export const WatchingAnimeList = ({ watchingAnimes }) => {
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [time, setTime] = useState(0);
  const [episodesTitles, setEpisodesTitles] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    watchingAnimes.forEach((anime) => {
      const id = anime.mal_id;
      setTimeout(() => {
        fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`)
          .then((response) => response.json())
          .then((response) => {
            const episodes = response.data;
            const fetchedEpisodeTitle = episodes[0]?.title;
            const timeLeft = getRandomNumber(1, 24);
            const fetchedTime = 24 - timeLeft;
            setEpisodeTitle(fetchedEpisodeTitle);
            setTime(fetchedTime);
            setEpisodesTitles((episodesTitles) => [
              ...episodesTitles,
              fetchedEpisodeTitle,
            ]);
            setTimes((times) => [...times, fetchedTime]);
          });
      }, 1500);
    });
  }, [watchingAnimes]);

  return (
    <section className="anime-list continue-watching">
      <div className="title-container">
        <h3 className="anime-list-title">Seguir viendo</h3>
        <img className="arrow right" src="./img/down-arrow.svg" alt="" />
      </div>
      <div className="anime-watching-container">
        {watchingAnimes.map((anime, index) => (
          <WatchingAnimeCard
            key={index}
            id={index}
            anime={anime}
            episode={episodesTitles[index] || episodeTitle}
            timeLeft={times[index] || time}
          />
        ))}
      </div>
    </section>
  );
};
