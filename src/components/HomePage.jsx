/* eslint-disable react/prop-types */
import { ListOfAnimes } from "./ListOfAnimes";
// import { Banner } from "./Banner";
import { Carousel } from "./Carousel";
import { NextBtn } from "./NextBtn";
import { PrevBtn } from "./PrevBtn";
import { WatchingAnimeList } from "./WatchingAnimeList";
import { RecommendedAnimeCard } from "./RecommendedAnimeCard";
import { useAnimeData } from "../hooks/useAnimeData";

export function HomePage({ dayliAnimes, recommendedAnimes }) {
  const watchingListApi = `https://api.jikan.moe/v4/seasons/now?&limit=3`;
  const watchingAnimes = useAnimeData(watchingListApi);
  // const specialAnimeApi = `https://api.jikan.moe/v4/anime?type=tv&order_by=title&limit=1`;
  // const specialAnime = useAnimeData(specialAnimeApi);
  return (
    <>
      <Carousel />
      <main>
        <PrevBtn id={"day-container-btns"} />
        <NextBtn id={"day-container-btns"} />
        <ListOfAnimes
          animes={dayliAnimes}
          title={"Episodios Nuevos"}
          container={"new-episodes-anime-list"}
          element={"day-container"}
          id={"day-container-btns"}
        />
      </main>
      <WatchingAnimeList watchingAnimes={watchingAnimes} />
      <section className="recommendations-section">
        <PrevBtn id={"recommendations-btns"} />
        <NextBtn id={"recommendations-btns"} />
        <ListOfAnimes
          animes={recommendedAnimes}
          title={"Recomendado para ti"}
          container={""}
          element={"recommendations"}
          id={"recommendations-btns"}
        />
      </section>
      {/* <Banner smallIMG={"./img/banner-sm.webp"} bigIMG={"./img/banner.webp"} /> */}
      <section className="recommended-anime-section">
        <RecommendedAnimeCard />
      </section>
    </>
  );
}

export default HomePage;
