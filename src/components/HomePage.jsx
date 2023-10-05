/* eslint-disable react/prop-types */
import { Banner } from "./Banner";
import { Carousel } from "./Carousel";
import { AnimeListSection } from "./AnimeListSection";
import { WatchingAnimeList } from "./WatchingAnimeList";
import { RecommendedAnimeCard } from "./RecommendedAnimeCard";
import { animeFeed } from "../constants/animeFeed";
import React, { useEffect, useState, Suspense } from "react";
import { getAnime } from "../services/getAnime";

const LazyAnimeList = React.lazy(() => import("./AnimeListSection"));

export function HomePage({ dayliAnimes, recommendedAnimes }) {
  const [romances, setRomances] = useState([]);
  const [sports, setSports] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const API_URL_ROMANCE = `https://anime-api-two.vercel.app/romance`;
      const API_URL_SPORTS = `https://anime-api-two.vercel.app/sport`;
      const [romance, sports] = await Promise.all([
        getAnime(API_URL_ROMANCE),
        getAnime(API_URL_SPORTS),
      ]);
      setRomances(romance);
      setSports(sports);
    };

    fetchData();
  }, []);
  const recommendedAnimesProps = {
    animes: recommendedAnimes,
    title: "Recomendado para ti",
    container: "",
    element: "recommendations",
    id: "recommendations-btns",
  };
  const romancesProps = {
    animes: romances,
    title: "Estudios y romances",
    container: "",
    element: "romance",
    id: "romance-btns",
  };
  const sportsProps = {
    animes: sports,
    title: "¡ES LA HORA DEL DEPORTE!",
    container: "",
    element: "recommendations",
    id: "sports-btns",
  };
  return (
    <>
      <Carousel />
      <main>
        <AnimeListSection
          animes={dayliAnimes}
          title={"Episodios Nuevos"}
          container={"new-episodes-anime-list"}
          element={"day-container"}
          id={"day-container-btns"}
        />
      </main>
      <WatchingAnimeList />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAnimeList {...recommendedAnimesProps} />
      </Suspense>
      {/* <AnimeListSection
        animes={recommendedAnimes}
        title={"Recomendado para ti"}
        container={""}
        element={"recommendations"}
        id={"recommendations-btns"}
      /> */}
      <section className="recommended-anime-section">
        <RecommendedAnimeCard anime={animeFeed[0]} />
      </section>
      <Banner
        smallIMG={"./img/banner-jujutsu-sm.png"}
        bigIMG={"./img/banner-jujutsu-xl.png"}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAnimeList {...romancesProps} />
      </Suspense>
      {/* <AnimeListSection
        animes={romances}
        title={"Estudios y romances"}
        container={""}
        element={"romance"}
        id={"romance-btns"}
      /> */}
      <section className="recommended-anime-section">
        <RecommendedAnimeCard anime={animeFeed[1]} />
      </section>
      <Banner
        smallIMG={"./img/banner-csm-sm.webp"}
        bigIMG={"./img/banner-csm.webp"}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAnimeList {...sportsProps} />
      </Suspense>
      {/* <AnimeListSection
        animes={sports}
        title={"¡ES LA HORA DEL DEPORTE!"}
        container={""}
        element={"recommendations"}
        id={"sports-btns"}
      /> */}
      <section className="recommended-anime-section">
        <RecommendedAnimeCard anime={animeFeed[2]} />
      </section>
    </>
  );
}

export default HomePage;
