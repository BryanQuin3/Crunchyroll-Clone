import { AnimeInfoBtns } from "./AnimeInfoBtns";
import { StarRating } from "./StarRating";
import { useAnimePageInfo } from "../hooks/useAnimePageInfo";
import { fetchAnimeWatching } from "../services/api";
import { useEffect, useState } from "react";
import { WatchingAnimeCard } from "./WatchingAnimeCard";
export const AnimePage = () => {
  const { anime, title, images, rating, genres, synopsis, scored } =
    useAnimePageInfo();
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  useEffect(() => {
    fetchAnimeWatching(anime).then((response) => {
      setAnimeEpisodes(response.episodes.data);
      window.scrollTo(0, 10);
    });
  }, []);
  return (
    <div className="anime-page-container">
      <div className="current-anime-cover">
        <div className="blurred-cover">
          <img src={images?.webp?.large_image_url} alt={title} />
        </div>
        <img
          className="anime-cover-min"
          src={images?.webp?.large_image_url}
          alt={title}
        />
      </div>
      <section className="anime-page-body">
        <div className="current-anime-info">
          <h1 className="anime-list-title">{title}</h1>
          <p className="anime-genre">
            {genres.map((g, i) => {
              return (
                <span key={i}>{genres[i + 1] ? `${g.name} | ` : g.name}</span>
              );
            })}
          </p>
          {<StarRating rating={rating} score_by={scored} />}
        </div>
        <div className="current-anime-synopsis">
          <p>{synopsis}</p>
        </div>
        <div className="current-anime-episodes">
          {animeEpisodes.map((e) => {
            return (
              <WatchingAnimeCard
                key={e.mal_id}
                id={e.mal_id}
                src={images?.webp?.large_image_url}
                episode={e.title}
                onAnimePage={true}
              />
            );
          })}
        </div>
        <AnimeInfoBtns text="Comenzar a ver t1 e1" />
      </section>
    </div>
  );
};

export default AnimePage;
