/* eslint-disable react/prop-types */
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { AnimeListSection } from "../components/AnimeListSection";
import { WatchingAnimeList } from "../components/WatchingAnimeList";
import { RecommendedAnimeCard } from "../components/RecommendedAnimeCard";
import { animeFeed } from "../constants/animeFeed";
import { useAnimeData } from "../hooks/useAnimeData";
import recommendedAnimes from "../mocks/recommended.json";

export function HomePage() {
  const { dayliAnimes, romances, sports, loading } = useAnimeData();
  return (
    <>
      <Carousel />
      <main>
        <AnimeListSection
          animes={dayliAnimes}
          title={"Episodios Nuevos"}
          container={"new-episodes-anime-list"}
          element={"day-container"}
          loading={loading}
        />
      </main>
      <WatchingAnimeList />
      <AnimeListSection
        animes={recommendedAnimes.data}
        title={"Recomendado para ti"}
        container={""}
        element={"recommendations"}
      />
      <section className="recommended-anime-section">
        <RecommendedAnimeCard anime={animeFeed[0]} />
      </section>
      <Banner
        smallIMG={"./img/banner-jujutsu-sm.webp"}
        bigIMG={"./img/banner-jujutsu-xl.webp"}
      />
      <AnimeListSection
        animes={romances}
        title={"Estudios y romances"}
        container={""}
        element={"romance"}
      />
      <section className="recommended-anime-section">
        <RecommendedAnimeCard anime={animeFeed[1]} />
      </section>
      <Banner
        smallIMG={"./img/banner-csm-sm.webp"}
        bigIMG={"./img/banner-csm.webp"}
      />
      <AnimeListSection
        animes={sports}
        title={"¡ES LA HORA DEL DEPORTE!"}
        container={""}
        element={"recommendations"}
      />
      <section className="recommended-anime-section">
        <RecommendedAnimeCard anime={animeFeed[2]} />
      </section>
    </>
  );
}

export default HomePage;
