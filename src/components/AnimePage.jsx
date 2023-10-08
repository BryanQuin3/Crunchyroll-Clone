import { AnimeInfoBtns } from "./AnimeInfoBtns";
import { StarRating } from "./StarRating";
import { useParams } from "react-router-dom";
import { searchInLocalStorage } from "../constants/localStorage";
import { searchAnimeFromMocks } from "../constants/searchAnimeFromMocks";

export const AnimePage = () => {
  const { idAnime } = useParams();
  const genders = ["romances", "sports", "dayliAnimes", "recommendedAnimes"];
  const anime =
    searchInLocalStorage(genders, idAnime) || searchAnimeFromMocks(idAnime);

  const { title, images, score, genres } = anime;

  const rating = Math.floor(score / 2);

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
        <AnimeInfoBtns text="Comenzar a ver t1 e1" />
      </section>
    </div>
  );
};

export default AnimePage;
