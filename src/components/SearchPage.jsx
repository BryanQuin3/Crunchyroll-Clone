import { useState } from "react";
import { AnimeCard } from "./AnimeCard";
import { capitalizeFirstLetter } from "../constants/capitalizeFirstLetter";

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      const animeNameCapitalized = capitalizeFirstLetter(searchQuery);
      const API_URL = `https://api.jikan.moe/v4/anime?q=${animeNameCapitalized}`;
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSearchResults(data.data);
      } catch (error) {
        console.error("Error al buscar animes:", error);
        setSearchResults([]);
      }
    }
  };

  return (
    <main>
      <div className="search-input-container" id="search-input">
        <input
          className="search-input"
          type="search"
          placeholder="Naruto, One Piece, Evangelion..."
          name="search"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <section className="results-container results">
          {searchResults.length > 0 ? (
            searchResults.map((anime, index) => {
              return (
                <div key={index}>
                  <AnimeCard anime={anime} />
                </div>
              );
            })
          ) : (
            <div className="no-results">No se encontraron resultados</div>
          )}
        </section>
      </div>
    </main>
  );
};

export default SearchPage;
