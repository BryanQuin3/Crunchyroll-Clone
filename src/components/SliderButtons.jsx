export const SliderButtons = () => {
  const scrollContainers = document.querySelectorAll(
    ".anime-list-scroll-wrapper"
  );
  const scrollDistance = 1150;
  const scrollDuration = 1000;

  const smoothScroll = (targetScrollLeft, startTime = 0) => {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / scrollDuration, 1);
    const easeProgress = Math.pow(2, 10 * (progress - 1));
    scrollContainers.forEach((scrollContainer) => {
      scrollContainer.scrollLeft = targetScrollLeft * easeProgress;
    });

    if (progress < 1) {
      requestAnimationFrame(() => smoothScroll(targetScrollLeft, startTime));
    }
  };

  const handleNextBtn = () => {
    scrollContainers.forEach((scrollContainer) => {
      smoothScroll(scrollContainer.scrollLeft + scrollDistance);
    });
  };

  const handlePrevBtn = () => {
    scrollContainers.forEach((scrollContainer) => {
      smoothScroll(scrollContainer.scrollLeft - scrollDistance);
    });
  };
  return (
    <div className="animeList-btns-container">
      <button className="animeList-btns position-left" onClick={handlePrevBtn}>
        <img src="./img/slider-arrow.svg" alt="Anterior" />
      </button>
      <button className="animeList-btns position-right" onClick={handleNextBtn}>
        <img src="./img/slider-arrow.svg" alt="Siguiente" />
      </button>
    </div>
  );
};

export default SliderButtons;
