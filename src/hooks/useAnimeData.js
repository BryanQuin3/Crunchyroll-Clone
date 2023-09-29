import { useState, useEffect } from "react";

export function useAnimeData(API_URL) {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((response) => {
          const animes = response.data;
          setAnimes(animes);
        });
    }, 1500);
  }, [API_URL]);

  return animes;
}
