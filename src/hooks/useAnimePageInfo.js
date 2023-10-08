import { useParams } from "react-router-dom";
import { searchInLocalStorage } from "../constants/localStorage";
import { searchAnimeFromMocks } from "../constants/searchAnimeFromMocks";

export function useAnimePageInfo() {
  const { idAnime } = useParams();
  const genders = ["romances", "sports", "dayliAnimes", "recommendedAnimes"];
  const anime =
    searchInLocalStorage(genders, idAnime) || searchAnimeFromMocks(idAnime);

  const { title, images, score, genres, synopsis } = anime;

  const rating = Math.floor(score / 2);

  return { title, images, rating, genres, synopsis };
}
