/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useFavorites } from "../../hooks/useFavorites";
// create context
export const FavoritesContext = createContext();

// create provider
export function FavoritesProvider({ children }) {
  const contextValue = useFavorites();

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
