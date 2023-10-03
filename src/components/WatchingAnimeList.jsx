/* eslint-disable react/prop-types */
import { WatchingAnimeCard } from "./WatchingAnimeCard";
import { useEffect, useState } from "react";
import { getRandomNumber } from "../constants/getRandomNumber";
import { getAnime } from "../services/getAnime";

export const WatchingAnimeList = () => {
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [time, setTime] = useState(0);
  const [episodesTitles, setEpisodesTitles] = useState([]);
  const [times, setTimes] = useState([]);
  const [watchingAnimes, setWatchingAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let watchingAnimes = [];

      const watchingListApi = `https://api.jikan.moe/v4/top/anime?filter=airing&limit=3`;
      const watchingAnimesList = await getAnime(watchingListApi);

      if (watchingAnimesList) {
        watchingAnimes.push(...watchingAnimesList);
        setWatchingAnimes(watchingAnimes);

        for (const anime of watchingAnimesList) {
          const id = anime.mal_id;
          const response = await fetch(
            `https://api.jikan.moe/v4/anime/${id}/episodes`
          );
          const episodes = await response.json();
          const fetchedEpisodeTitle = episodes.data[0]?.title;
          const timeLeft = getRandomNumber(1, 24);
          const fetchedTime = 24 - timeLeft;

          setEpisodeTitle(fetchedEpisodeTitle);
          setTime(fetchedTime);
          setEpisodesTitles((episodesTitles) => [
            ...episodesTitles,
            fetchedEpisodeTitle,
          ]);
          setTimes((times) => [...times, fetchedTime]);
        }
      }
    };

    fetchData();
  }, []);

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
