import { useState, useEffect } from "react";
import { fetchData } from "../services/api";
import { isDataUpToDate } from "../constants/isDataUpToDate";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../constants/localStorage";

export function useAnimeData() {
  const [loading, setLoading] = useState(true);
  const [dayliAnimes, setDayliAnimes] = useState([]);
  const [romances, setRomances] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchDataAndSave = async () => {
      const dataTimestamp = getFromLocalStorage("dataTimestamp");
      if (
        isDataUpToDate(dataTimestamp) &&
        !getFromLocalStorage("dayliAnimes")
      ) {
        // Los datos están actualizados, cargar desde el almacenamiento local
        setDayliAnimes(getFromLocalStorage("dayliAnimes"));
        setRomances(getFromLocalStorage("romances"));
        setSports(getFromLocalStorage("sports"));
      } else {
        // Los datos no están actualizados, obtener desde el servidor
        try {
          const { combinedAnimes, romance, sports } = await fetchData();
          setDayliAnimes(combinedAnimes);
          setRomances(romance);
          setSports(sports);

          // Actualizar los datos en el almacenamiento local y la marca de tiempo
          saveToLocalStorage("dayliAnimes", combinedAnimes);
          saveToLocalStorage("romances", romance);
          saveToLocalStorage("sports", sports);
          saveToLocalStorage("dataTimestamp", new Date().getTime());
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      setLoading(false);
    };

    fetchDataAndSave();
  }, []);

  return { dayliAnimes, romances, sports, loading };
}
