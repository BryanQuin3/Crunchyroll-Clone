/* eslint-disable react/prop-types */
import { ListOfAnimes } from "./ListOfAnimes";
import { Banner } from "./Banner";
import { Carousel } from "./Carousel";
import { NextBtn } from "./NextBtn";
import { PrevBtn } from "./PrevBtn";
import { WatchingAnimeList } from "./WatchingAnimeList";
import { RecommendedAnimeCard } from "./RecommendedAnimeCard";
import { animeFeed } from "../constants/animeFeed";
import romanceAnimeList from "../mocks/romanceAnimes.json";

export function HomePage({ dayliAnimes, recommendedAnimes }) {
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
      <WatchingAnimeList />
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
      <section className="recommended-anime-section">
        <RecommendedAnimeCard anime={animeFeed[0]} />
      </section>
      <Banner
        smallIMG={"./img/banner-jujutsu-sm.png"}
        bigIMG={"./img/banner-jujutsu-xl.png"}
      />
      <section className="recommendations-section">
        <PrevBtn id={"recommendations-btns"} />
        <NextBtn id={"recommendations-btns"} />
        <ListOfAnimes
          animes={romanceAnimeList.data}
          title={"Estudios y romances"}
          container={""}
          element={"romance"}
          id={"romance-btns"}
        />
      </section>
      <section className="recommended-anime-section">
        <RecommendedAnimeCard anime={animeFeed[1]} />
      </section>
    </>
  );
}

export default HomePage;
