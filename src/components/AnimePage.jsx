import { AnimeInfoBtns } from "./AnimeInfoBtns";
import { StarRating } from "./StarRating";
import { useAnimePageInfo } from "../hooks/useAnimePageInfo";

export const AnimePage = () => {
  const { title, images, rating, genres, synopsis } = useAnimePageInfo();

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
          {<StarRating rating={rating} />}
        </div>
        <div className="current-anime-synopsis">
          <p>{synopsis}</p>
        </div>
        <AnimeInfoBtns text="Comenzar a ver t1 e1" />
      </section>
    </div>
  );
};

export default AnimePage;
