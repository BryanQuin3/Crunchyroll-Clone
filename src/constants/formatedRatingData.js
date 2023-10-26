export const formatedRatingData = (score, scored_by) => {
  const rating = Math.floor(score / 2);
  let scored = scored_by;
  if (scored_by > 1000000) {
    scored = (scored_by / 1000000).toFixed(2) + "M";
  } else if (scored_by > 1000) {
    scored = Math.floor(scored_by / 1000) + "k";
  }
  return { rating, scored };
};
