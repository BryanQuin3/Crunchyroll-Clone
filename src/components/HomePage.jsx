/* eslint-disable react/prop-types */
import { ListOfAnimes } from "./ListOfAnimes";
import { Banner } from "./Banner";
import { Carousel } from "./Carousel";
import { SliderButtons } from "./SliderButtons";
import { WatchingAnimeList } from "./WatchingAnimeList";
import { useAnimeData } from "../hooks/useAnimeData";

export function HomePage({ dayliAnimes, recommendedAnimes }) {
  const watchingListApi = `https://api.jikan.moe/v4/seasons/now?&limit=3`;
  const watchingAnimes = useAnimeData(watchingListApi);
  return (
    <>
      <Carousel />
      <main>
        <SliderButtons />
        <ListOfAnimes
          animes={dayliAnimes}
          title={"Episodios Nuevos"}
          container={"new-episodes-anime-list"}
          element={"day-container"}
        />
      </main>
      <WatchingAnimeList watchingAnimes={watchingAnimes} />
      <section className="recommendations-section">
        <SliderButtons />
        <ListOfAnimes
          animes={recommendedAnimes}
          title={"Recomendado para ti"}
          container={""}
          element={"recommendations"}
        />
      </section>
      <Banner smallIMG={"./img/banner-sm.png"} bigIMG={"./img/banner.png"} />
    </>
  );
}

export default HomePage;
