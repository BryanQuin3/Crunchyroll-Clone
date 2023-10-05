import { useEffect, useState } from "react";
import { getRandomNumber } from "../constants/getRandomNumber";
import { getAnime } from "../services/getAnime";

export function useAnimeWatching() {
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [time, setTime] = useState(0);
  const [episodesTitles, setEpisodesTitles] = useState([]);
  const [times, setTimes] = useState([]);
  const [watchingAnimes, setWatchingAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let watchingAnimes = [];

      const watchingListApi = `https://api.jikan.moe/v4/top/anime?filter=airing&limit=3`;
      const response = await getAnime(watchingListApi);
      const watchingAnimesList = response.data;
      if (watchingAnimesList) {
        watchingAnimes.push(...watchingAnimesList);
        setWatchingAnimes(watchingAnimes);

        setTimeout(async () => {
          for (const anime of watchingAnimesList) {
            const id = anime.mal_id;
            const timeLeft = getRandomNumber(1, 24);
            const fetchedTime = 24 - timeLeft;
            setTime(fetchedTime);
            const response = await fetch(
              `https://api.jikan.moe/v4/anime/${id}/episodes`
            );
            const episodes = await response.json();
            const fetchedEpisodeTitle = episodes.data[0]?.title;

            setEpisodeTitle(fetchedEpisodeTitle);
            setEpisodesTitles((episodesTitles) => [
              ...episodesTitles,
              fetchedEpisodeTitle,
            ]);
            setTimes((times) => [...times, fetchedTime]);
          }
        }, 2000);
      }
    };

    fetchData();
  }, []);
  return { episodeTitle, time, episodesTitles, times, watchingAnimes };
}
