import { useState, useEffect, useCallback } from "react";

export function useCarousel(slides, autoPlayInterval = 3500) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const handleNextBtn = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevBtn = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const autoAdvance = useCallback(() => {
    handleNextBtn();
  }, []);

  useEffect(() => {
    const firstSlide = slides[0];
    const imgXL = new Image();
    const imgSM = new Image();
    imgXL.src = firstSlide.imgXL;
    imgSM.src = firstSlide.imgSM;
    const carouselContainer = document.querySelector(".carousel-container");
    const cards = document.querySelectorAll(".carousel-card");

    if (carouselContainer && cards) {
      const card = cards[currentSlide];
      carouselContainer.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    let autoPlayIntervalId;

    const startAutoPlay = () => {
      autoPlayIntervalId = setInterval(autoAdvance, autoPlayInterval);
    };

    const stopAutoPlay = () => {
      clearInterval(autoPlayIntervalId);
    };

    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [autoAdvance, autoPlayInterval]);

  return {
    currentSlide,
    handleNextBtn,
    handlePrevBtn,
  };
}

export default useCarousel;
