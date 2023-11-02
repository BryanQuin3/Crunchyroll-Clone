import { AnimeInfoBtns } from "../components/AnimeInfoBtns";
import { useAnimePageInfo } from "../hooks/useAnimePageInfo";
import { useAnimeEpisodes } from "../hooks/useAnimeEpisodes";
import { AnimeCover } from "../components/AnimeCover";
import { AnimeInfo } from "../components/AnimeInfo";
import { AnimeEpisodes } from "../components/AnimeEpisodes";

export const AnimePage = () => {
  const { title, images, rating, genres, synopsis, scored, idAnime } =
    useAnimePageInfo();
  const button = "Comenzar a ver";
  const genre = genres[0]?.name || "Generic";
  const imageSrc = images?.webp?.large_image_url || images;
  const id = Number(idAnime);
  const anime = { title, imageSrc, genre, button, id };
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
          anime={anime}
        />
        <div className="current-anime-synopsis">
          <p>{synopsis}</p>
        </div>
        <AnimeEpisodes
          animeEpisodes={animeEpisodes}
          images={images}
          title={title}
        />
        <AnimeInfoBtns text={button} anime={anime} />
      </section>
    </div>
  );
};

export default AnimePage;
