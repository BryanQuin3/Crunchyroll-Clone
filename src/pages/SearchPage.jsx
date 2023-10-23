import { useState } from "react";
import { AnimeCard } from "../components/AnimeCard";
import { capitalizeFirstLetter } from "../constants/capitalizeFirstLetter";
import { saveToLocalStorage } from "../constants/localStorage";
import { getAnime } from "../services/getAnime";
import { AnimeCardSkeleton } from "../skeleton/AnimeCardSkeleton";

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      const animeNameCapitalized = capitalizeFirstLetter(searchQuery);
      const API_URL = `https://api.jikan.moe/v4/anime?q=${animeNameCapitalized}`;
      try {
        setLoading(true);
        const response = await getAnime(API_URL);
        const data = response.data;
        setSearchResults(data);
        saveToLocalStorage("searchResults", data);
      } catch (error) {
        console.error("Error al buscar animes:", error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main className="search-page-container">
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
          {loading ? (
            <AnimeCardSkeleton total={6} />
          ) : (
            searchResults.map((anime, index) => {
              return (
                <div key={index}>
                  <AnimeCard anime={anime} />
                </div>
              );
            })
          )}
        </section>
      </div>
    </main>
  );
};

export default SearchPage;
