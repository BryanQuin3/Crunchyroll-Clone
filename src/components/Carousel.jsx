import { useCarousel } from "../hooks/useCarousel";
import { slides } from "../constants/slides";
import { AnimeInfoBtns } from "./AnimeInfoBtns";

export const Carousel = () => {
  const { currentSlide, handleNextBtn, handlePrevBtn } = useCarousel(slides);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-card ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <figure className="card-img-container">
              <picture>
                <img className="card-img" src={slide.imgSM} alt="" />
                <img className="card-img-xl" src={slide.imgXL} alt="" />
              </picture>
            </figure>
            <div className="anime-about">
              <img className="anime-logo" src={slide.animeLogo} alt="" />
              <p className="anime-description">{slide.animeDescription}</p>
            </div>
            <AnimeInfoBtns text={slide.btnText} />
          </div>
        ))}
      </div>
      <div className="carousel-btns-container">
        <button className="carousel-btn position-left" onClick={handlePrevBtn}>
          <img src="./img/slider-arrow.svg" alt="Anterior" />
        </button>
        <button className="carousel-btn position-right" onClick={handleNextBtn}>
          <img src="./img/slider-arrow.svg" alt="Siguiente" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
