import { AnimeInfoBtns } from "./AnimeInfoBtns";
import { StarRating } from "./StarRating";
import { useAnimePageInfo } from "../hooks/useAnimePageInfo";
import { getAnime } from "../services/getAnime";
import { useEffect, useState, useCallback } from "react";
import { AnimeEpisodeCard } from "./AnimeEpisodeCard";
import { AnimeEpisodeCardSkeleton } from "../skeleton/AnimeEpisodeCardSkeleton";
export const AnimePage = () => {
  const { title, images, rating, genres, synopsis, scored } =
    useAnimePageInfo();
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  const [animeID, setAnimeID] = useState(null);

  const fetchAnimeID = useCallback(() => {
    if (title) {
      const URL = `https://kitsu.io/api/edge/anime?filter[text]=${title}`;
      getAnime(URL).then((response) => {
        setAnimeID(response.data[0].id);
      });
    }
  }, [title]);

  const fetchAnimeEpisodes = useCallback(() => {
    if (animeID) {
      const URL = `https://kitsu.io/api/edge/anime/${animeID}/episodes`;
      getAnime(URL).then((response) => {
        setAnimeEpisodes(response.data);
      });
    }
  }, [animeID]);

  useEffect(() => {
    fetchAnimeID();
  }, [fetchAnimeID]);

  useEffect(() => {
    fetchAnimeEpisodes();
    window.scrollTo(0, 0);
  }, [fetchAnimeEpisodes]);
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
          {animeEpisodes.length === 0 && (
            <>
              <AnimeEpisodeCardSkeleton />
              <AnimeEpisodeCardSkeleton />
              <AnimeEpisodeCardSkeleton />
            </>
          )}
          {animeEpisodes.map((e) => {
            const { id, attributes } = e;
            const { thumbnail, canonicalTitle, number, length } = attributes;

            return (
              <AnimeEpisodeCard
                key={id}
                src={thumbnail?.original || images?.webp?.large_image_url}
                title={canonicalTitle || title}
                episode={number}
                duration={length}
              />
            );
          })}
        </div>
        <AnimeInfoBtns text="Comenzar a ver" />
      </section>
    </div>
  );
};

export default AnimePage;
