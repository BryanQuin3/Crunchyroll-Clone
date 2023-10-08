import { useState, useEffect } from "react";
import { getDay } from "../constants/getDay";
import { fetchDailyAnimes, fetchGenreData } from "../services/api";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../constants/localStorage";

export function useAnimeData() {
  const [loading, setLoading] = useState(true);
  const [today, yesterday] = getDay();
  const [dayliAnimes, setDayliAnimes] = useState([]);
  const [romances, setRomances] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchAndSaveData = async () => {
      const dayliAnimesFromLocalStorage = getFromLocalStorage("dayliAnimes");
      const romancesFromLocalStorage = getFromLocalStorage("romances");
      const sportsFromLocalStorage = getFromLocalStorage("sports");

      if (
        dayliAnimesFromLocalStorage &&
        romancesFromLocalStorage &&
        sportsFromLocalStorage
      ) {
        setDayliAnimes(dayliAnimesFromLocalStorage);
        setRomances(romancesFromLocalStorage);
        setSports(sportsFromLocalStorage);
        setLoading(false);
      } else {
        try {
          const combinedAnimes = await fetchDailyAnimes(today, yesterday);
          setDayliAnimes(combinedAnimes);
          saveToLocalStorage("dayliAnimes", combinedAnimes);

          const { romance, sports } = await fetchGenreData();
          setRomances(romance);
          setSports(sports);
          saveToLocalStorage("romances", romance);
          saveToLocalStorage("sports", sports);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAndSaveData();
  }, [today, yesterday]);

  return { dayliAnimes, romances, sports, loading };
}
