export const setWidth = (timeLeft, element) => {
  const watchingVideo = element;
  const timePercentage = Math.floor((timeLeft * 100) / 24);
  watchingVideo.style.setProperty("--newWidth", `${timePercentage}%`);
};
