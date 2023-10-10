import { getAnime } from "../services/getAnime";
import { useEffect, useState, useCallback } from "react";

export function useAnimeEpisodes(title) {
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  const [animeID, setAnimeID] = useState(null);

  const fetchAnimeID = useCallback(() => {
    if (title) {
      const URL = `https://kitsu.io/api/edge/anime?filter[text]=${title}`;
      getAnime(URL).then((response) => {
        setAnimeID(response.data[0].id);
      });
    }
  }, [title]);

  const fetchAnimeEpisodes = useCallback(() => {
    if (animeID) {
      const URL = `https://kitsu.io/api/edge/anime/${animeID}/episodes`;
      getAnime(URL).then((response) => {
        setAnimeEpisodes(response.data);
      });
    }
  }, [animeID]);

  useEffect(() => {
    fetchAnimeID();
  }, [fetchAnimeID]);

  useEffect(() => {
    fetchAnimeEpisodes();
    window.scrollTo(0, 0);
  }, [fetchAnimeEpisodes]);
  return { animeEpisodes };
}
