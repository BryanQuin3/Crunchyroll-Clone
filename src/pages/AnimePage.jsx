import { AnimeInfoBtns } from "../components/AnimeInfoBtns";
import { useAnimePageInfo } from "../hooks/useAnimePageInfo";
import { useAnimeEpisodes } from "../hooks/useAnimeEpisodes";
import { AnimeCover } from "../components/AnimeCover";
import { AnimeInfo } from "../components/AnimeInfo";
import { AnimeEpisodes } from "../components/AnimeEpisodes";

export const AnimePage = () => {
  const { title, images, rating, genres, synopsis, scored } =
    useAnimePageInfo();
  const { animeEpisodes } = useAnimeEpisodes(title);

  return (
    <div className="anime-page-container">
      <AnimeCover title={title} images={images} />
      <section className="anime-page-body">
        <AnimeInfo
          title={title}
          genres={genres}
          rating={rating}
          scored={scored}
        />
        <div className="current-anime-synopsis">
          <p>{synopsis}</p>
        </div>
        <AnimeEpisodes
          animeEpisodes={animeEpisodes}
          images={images}
          title={title}
        />
        <AnimeInfoBtns text="Comenzar a ver" />
      </section>
    </div>
  );
};

export default AnimePage;
