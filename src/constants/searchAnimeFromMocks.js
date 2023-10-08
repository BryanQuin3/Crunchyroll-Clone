import recommendedAnimes from "../mocks/recommended.json";

export const searchAnimeFromMocks = (id) => {
  const anime = recommendedAnimes.find((item) => item.mal_id == id);
  if (anime) {
    return anime;
  }
  throw new Error(`No se encontró un objeto con mal_id ${id}`);
};