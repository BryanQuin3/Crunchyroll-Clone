import { getAnime } from "../services/getAnime";
import { getRandomNumber } from "../constants/getRandomNumber";
import { getDay } from "../constants/getDay";
export async function fetchDailyAnimes(today, yesterday) {
  const API_URL_TODAY = `https://api.jikan.moe/v4/schedules?filter=${today}`;
  const API_URL_YESTERDAY = `https://api.jikan.moe/v4/schedules?filter=${yesterday}`;

  const [dayliAnimesToday, dayliAnimesYesterday] = await Promise.all([
    getAnime(API_URL_TODAY),
    getAnime(API_URL_YESTERDAY),
  ]);

  const combinedAnimes = [
    ...(dayliAnimesToday.data || []),
    ...(dayliAnimesYesterday.data || []),
  ];

  return combinedAnimes;
}

export async function fetchGenreData() {
  const API_URL_ROMANCE = `https://anime-api-two.vercel.app/romance`;
  const API_URL_SPORTS = `https://anime-api-two.vercel.app/sport`;

  const [romance, sports] = await Promise.all([
    getAnime(API_URL_ROMANCE),
    getAnime(API_URL_SPORTS),
  ]);

  return { romance, sports };
}

export async function fetchAnimeWatching(anime) {
  const id = anime.mal_id;
  const timeLeft = getRandomNumber(1, 24);
  const fetchedTime = 24 - timeLeft;
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`);
  const episodes = await response.json();
  const fetchedEpisodeTitle = episodes?.data[0]?.title;

  return { fetchedEpisodeTitle, fetchedTime, episodes };
}

export async function fetchEpisodesData(animeList) {
  const episodeTitles = [];
  const episodeTimes = [];

  for (const anime of animeList) {
    const { fetchedEpisodeTitle, fetchedTime } = await fetchAnimeWatching(
      anime
    );

    episodeTitles.push(fetchedEpisodeTitle);
    episodeTimes.push(fetchedTime);
  }

  return { episodeTitles, episodeTimes };
}

export async function fetchData() {
  const [today, yesterday] = getDay();

  const combinedAnimes = await fetchDailyAnimes(today, yesterday);
  const { romance, sports } = await fetchGenreData();

  return { combinedAnimes, romance, sports };
}
