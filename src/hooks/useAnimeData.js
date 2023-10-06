import { useState, useEffect } from "react";
import { getAnime } from "../services/getAnime";
import { getDay } from "../constants/getDay";

export function useAnimeData() {
  const [today, yesterday] = getDay();
  const [dayliAnimes, setDayliAnimes] = useState([]);
  const [romances, setRomances] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchDailyAnimes = async () => {
      const API_URL_TODAY = `https://api.jikan.moe/v4/schedules?filter=${today}`;
      const API_URL_YESTERDAY = `https://api.jikan.moe/v4/schedules?filter=${yesterday}`;

      const [dayliAnimesToday, dayliAnimesYesterday] = await Promise.all([
        getAnime(API_URL_TODAY),
        getAnime(API_URL_YESTERDAY),
      ]);

      const combinedAnimes = [
        ...dayliAnimesToday.data,
        ...dayliAnimesYesterday.data,
      ];

      setDayliAnimes(combinedAnimes);
    };

    const fetchGenreData = async () => {
      const API_URL_ROMANCE = `https://anime-api-two.vercel.app/romance`;
      const API_URL_SPORTS = `https://anime-api-two.vercel.app/sport`;
      const [romance, sports] = await Promise.all([
        getAnime(API_URL_ROMANCE),
        getAnime(API_URL_SPORTS),
      ]);

      setRomances(romance);
      setSports(sports);
    };
    setTimeout(() => {
      fetchDailyAnimes();
    }, 1500);
    setTimeout(() => {
      fetchGenreData();
    }, 1500);
  }, [today, yesterday]);

  return { dayliAnimes, romances, sports };
}
