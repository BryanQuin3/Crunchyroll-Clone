/* eslint-disable react/prop-types */
import ListOfAnimes from "./ListOfAnimes";
import { Banner } from "./Banner";
import Carousel from "./Carousel";

export function HomePage({ dayliAnimes, recommendedAnimes }) {
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
