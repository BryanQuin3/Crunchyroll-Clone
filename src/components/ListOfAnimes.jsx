/* eslint-disable react/prop-types */
import { AnimeCard } from "./AnimeCard";
import { AnimeCardSkeleton } from "../skeleton/AnimeCardSkeleton";

export const ListOfAnimes = ({
  animes,
  title,
  container,
  element,
  id,
  loading,
}) => {
  return (
    <section className={`anime-list ${container}`}>
      <h3 className="anime-list-title">{title}</h3>
      <div className="anime-list-scroll-wrapper" id={id}>
        <div className={`list-container ${element}`}>
          {loading ? (
            <AnimeCardSkeleton total={6} />
          ) : (
            animes.map((anime, index) => {
              return (
                <div key={index}>
                  <AnimeCard anime={anime} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default ListOfAnimes;
