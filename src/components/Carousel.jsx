import { useCarousel } from "../hooks/useCarousel";
import { Link } from "react-router-dom";
import { slides } from "../constants/slides";

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
            <footer className="carousel-btns">
              <Link to="./" className="btn-crunchy ripple">
                <img className="card-play" src="./img/card-play.svg" alt="" />
                {slide.btnText}
              </Link>
              <svg
                className="watchlist-svg favorite"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-t="watchlist-svg"
                aria-labelledby="watchlist-svg"
                aria-hidden="true"
                role="img"
              >
                <title id="watchlist-svg">Favoritos</title>
                <path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path>
              </svg>
            </footer>
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
