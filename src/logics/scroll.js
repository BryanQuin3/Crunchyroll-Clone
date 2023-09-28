export const scroll = (id, direction) => {
  const scrollContainer = document.querySelector(`#${id}`);
  const scrollDistance = 1150;
  const scrollDuration = 1000;
  const smoothScroll = (targetScrollLeft, startTime = 0) => {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / scrollDuration, 1);
    const easeProgress = Math.pow(2, 10 * (progress - 1));
    const scrollLeftDistance = targetScrollLeft * easeProgress;
    scrollContainer.scrollLeft = scrollLeftDistance;

    if (progress < 1) {
      requestAnimationFrame(() => smoothScroll(targetScrollLeft, startTime));
    }
  };
  if (direction === "right") {
    return smoothScroll(scrollContainer.scrollLeft + scrollDistance);
  }
  if (direction === "left") {
    return smoothScroll(scrollContainer.scrollLeft - scrollDistance);
  }
};
