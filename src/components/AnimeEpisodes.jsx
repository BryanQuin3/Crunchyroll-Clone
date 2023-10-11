/* eslint-disable react/prop-types */
import { AnimeEpisodeCard } from "./AnimeEpisodeCard";
import { AnimeEpisodeCardSkeleton } from "../skeleton/AnimeEpisodeCardSkeleton";
export const AnimeEpisodes = ({ animeEpisodes, images, title }) => {
  return (
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
  );
};
