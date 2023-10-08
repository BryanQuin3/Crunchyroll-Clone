import recommendedAnimes from "../mocks/recommended.json";

export const searchAnimeFromMocks = (id) => {
  const anime = recommendedAnimes.data.find((item) => item.mal_id == id);
  if (anime) return anime;
};
