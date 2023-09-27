/* eslint-disable react/prop-types */
import ListOfAnimes from "./ListOfAnimes";
import { Banner } from "./Banner";
import Carousel from "./Carousel";
import { WatchingAnimeList } from "./WatchingAnimeList";
import { useEffect, useState } from "react";

export function HomePage({ dayliAnimes, recommendedAnimes }) {
  const watchingListApi = `https://api.jikan.moe/v4/seasons/now?&limit=3`;
  const [watchingAnimes, setWatchingAnimes] = useState([]);
  useEffect(() => {
    fetch(watchingListApi)
      .then((response) => response.json())
      .then((response) => {
        const animes = response.data;
        setWatchingAnimes(animes);
      });
  }, []);
  return (
    <>
      <Carousel />
      <main>
        <ListOfAnimes
          animes={dayliAnimes}
          title={"Episodios Nuevos"}
          container={"new-episodes-anime-list"}
          element={"day-container"}
        />
      </main>
      <section>
        <WatchingAnimeList watchingAnimes={watchingAnimes} />
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
