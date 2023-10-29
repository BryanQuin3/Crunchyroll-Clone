/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// create context
export const FavoritesContext = createContext();

// create provider
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (anime) => {
    const isFavorite = favorites.find((favorite) => favorite.id === anime.id);
    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== anime.id));
    } else {
      setFavorites([...favorites, anime]);
    }
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
