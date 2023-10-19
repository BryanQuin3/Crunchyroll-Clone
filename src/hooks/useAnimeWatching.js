import { useEffect, useState } from "react";
import { getAnime } from "../services/getAnime";
import { fetchEpisodesData } from "../services/api";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../constants/localStorage";

export function useAnimeWatching() {
  const [watchingAnimes, setWatchingAnimes] = useState([]);
  const [episodesTitles, setEpisodesTitles] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let watchingAnimes = [];
      if (
        getFromLocalStorage("watchingAnimes") &&
        getFromLocalStorage("episodesData")
      ) {
        watchingAnimes = getFromLocalStorage("watchingAnimes");
        setWatchingAnimes(watchingAnimes);
        const { episodeTitles, episodeTimes } =
          getFromLocalStorage("episodesData");
        setEpisodesTitles(episodeTitles);
        setTimes(episodeTimes);
      } else {
        try {
          const watchingListApi = `https://api.jikan.moe/v4/top/anime?filter=airing&limit=3`;
          const response = await getAnime(watchingListApi);
          const watchingAnimesList = response.data;
          if (watchingAnimesList) {
            watchingAnimes.push(...watchingAnimesList);
            setWatchingAnimes(watchingAnimes);
            saveToLocalStorage("watchingAnimes", watchingAnimes);

            setTimeout(async () => {
              const { episodeTitles, episodeTimes } = await fetchEpisodesData(
                watchingAnimesList
              );
              setEpisodesTitles(episodeTitles);
              setTimes(episodeTimes);
              // guarda en local storage los datos de los episodios en un mismo objeto
              const episodesData = {
                episodeTitles,
                episodeTimes,
              };
              saveToLocalStorage("episodesData", episodesData);
            }, 4000);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, []);
  return { episodesTitles, times, watchingAnimes };
}
