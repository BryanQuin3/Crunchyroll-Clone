import { useParams } from "react-router-dom";
import { searchInLocalStorage } from "../constants/localStorage";
import { searchAnimeFromMocks } from "../constants/searchAnimeFromMocks";
import { genders } from "../constants/genders";
import { formatedRatingData } from "../constants/formatedRatingData";

export function useAnimePageInfo() {
  const { idAnime } = useParams();

  const anime =
    searchInLocalStorage(genders, idAnime) || searchAnimeFromMocks(idAnime);

  const { title, images, score, genres, synopsis, scored_by } = anime;
  const { rating, scored } = formatedRatingData(score, scored_by);

  return { anime, title, images, rating, genres, synopsis, scored };
}
