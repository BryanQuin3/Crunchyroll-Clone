import { AnimeInfoBtns } from "./AnimeInfoBtns";
import { StarRating } from "./StarRating";
import { useAnimePageInfo } from "../hooks/useAnimePageInfo";
import { useAnimeEpisodes } from "../hooks/useAnimeEpisodes";
import { AnimeEpisodeCard } from "./AnimeEpisodeCard";
import { AnimeEpisodeCardSkeleton } from "../skeleton/AnimeEpisodeCardSkeleton";
export const AnimePage = () => {
  const { title, images, rating, genres, synopsis, scored } =
    useAnimePageInfo();
  const { animeEpisodes } = useAnimeEpisodes(title);
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
