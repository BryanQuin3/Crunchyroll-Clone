import { useParams } from "react-router-dom";
import { searchInLocalStorage } from "../constants/localStorage";
import { searchAnimeFromMocks } from "../constants/searchAnimeFromMocks";
import { genders } from "../constants/genders";
export function useAnimePageInfo() {
  const { idAnime } = useParams();

  const anime =
    searchInLocalStorage(genders, idAnime) || searchAnimeFromMocks(idAnime);

  const { title, images, score, genres, synopsis, scored_by } = anime;

  const rating = Math.floor(score / 2);
  console.log(scored_by > 1000 ? scored_by / 1000 + "k" : scored_by);
  let scored = scored_by;
  if (scored_by > 1000) {
    scored = Math.floor(scored_by / 1000) + "k";
  }
  return { title, images, rating, genres, synopsis, scored };
}
