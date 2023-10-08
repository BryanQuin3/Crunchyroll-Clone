/* eslint-disable react/prop-types */
import { WatchingAnimeCard } from "./WatchingAnimeCard";
import { useAnimeWatching } from "../hooks/useAnimeWatching";

export const WatchingAnimeList = () => {
  const { episodesTitles, times, watchingAnimes } = useAnimeWatching();

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
            episode={episodesTitles[index]}
            timeLeft={times[index]}
          />
        ))}
      </div>
    </section>
  );
};
