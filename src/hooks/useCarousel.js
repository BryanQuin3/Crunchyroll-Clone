import { useState, useEffect, useCallback, useRef } from "react";

// Function to create an array of refs for each slide
const createCardRefs = (slides) => {
  return slides.map(() => useRef(null));
};

export function useCarousel(slides, autoPlayInterval = 3500) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const carouselContainerRef = useRef(null);
  const cardRefs = createCardRefs(slides);

  // Function to handle next button click
  const handleNextBtn = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Function to handle previous button click
  const handlePrevBtn = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // Function to automatically advance to the next slide
  const autoAdvance = useCallback(() => {
    handleNextBtn();
  }, []);

  // Scroll to the current slide when it changes
  useEffect(() => {
    const carouselContainer = carouselContainerRef.current;
    if (carouselContainer) {
      const card = cardRefs[currentSlide].current;
      carouselContainer.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  // Start and stop auto play based on autoPlayInterval
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
    carouselContainerRef,
    cardRefs,
  };
}

export default useCarousel;
