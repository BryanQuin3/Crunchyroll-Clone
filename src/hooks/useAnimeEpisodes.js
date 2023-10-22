import { getAnime } from "../services/getAnime";
import { useEffect, useState, useCallback } from "react";

export function useAnimeEpisodes(title) {
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  const [animeID, setAnimeID] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const prefix = "https://kitsu.io/api/edge/anime";

  const fetchAnimeID = useCallback(() => {
    if (title) {
      const URL = `${prefix}?filter[text]=${title}`;
      getAnime(URL).then((response) => {
        setAnimeID(response.data[0].id);
      });
    }
  }, [title]);

  const fetchAnimeEpisodes = useCallback(() => {
    if (animeID) {
      const URL = `${prefix}/${animeID}/episodes?page%5Blimit%5D=10&page%5Boffset%5D=${
        (currentPage - 1) * 10
      }`;
      getAnime(URL).then((response) => {
        setAnimeEpisodes((prevEps) => [...prevEps, ...response.data]);
        const newPageLink = response.links.next;
        if (newPageLink) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      });
    }
  }, [animeID, currentPage]);

  useEffect(() => {
    fetchAnimeID();
  }, [fetchAnimeID]);

  useEffect(() => {
    fetchAnimeEpisodes();
    if (currentPage === 1) window.scrollTo(0, 0);
  }, [fetchAnimeEpisodes, currentPage]);
  return { animeEpisodes };
}
