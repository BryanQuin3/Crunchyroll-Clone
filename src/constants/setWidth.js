export const setWidth = (timeLeft, id) => {
  const watchingVideo = document.querySelector(`#${id}`);
  const timePercentage = Math.floor((timeLeft * 100) / 24);
  watchingVideo.style.setProperty("--newWidth", `${timePercentage}%`);
};
