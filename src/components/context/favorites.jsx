/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
// create context
export const FavoritesContext = createContext();

// create provider
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const favoritesStorage = JSON.parse(localStorage.getItem("favorites"));
    return favoritesStorage || [];
  });
  const toggleFavorite = (anime) => {
    const isFavorite = favorites.find((favorite) => favorite.id === anime.id);
    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== anime.id));
    } else {
      setFavorites([...favorites, anime]);
    }
  };

  const [isAscendingOrder, setIsAscendingOrder] = useState(true);

  const sortAnimeByTitle = (favorites) => {
    if (isAscendingOrder) {
      setFavorites(favorites.sort((a, b) => a.title.localeCompare(b.title)));
    } else {
      setFavorites(favorites.sort((a, b) => b.title.localeCompare(a.title)));
    }
    setIsAscendingOrder(!isAscendingOrder);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        sortAnimeByTitle,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
