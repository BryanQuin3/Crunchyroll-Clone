import { BxMenuAltRight } from "../components/Icons";
import { FavoriteCard } from "../components/FavoriteCard";
import { useContext } from "react";
import { FavoritesContext } from "../components/context/favorites";
import { MyListsPage } from "./MyListsPage";
export const FavoritesPage = () => {
  const { favorites, sortAnimeByTitle } = useContext(FavoritesContext);
  const handleSort = () => {
    sortAnimeByTitle(favorites);
  };
  return (
    <MyListsPage favorites={true}>
      <section className="favorite-animes">
        <nav className="favorite-animes-info">
          <h3>Actividad reciente</h3>
          <BxMenuAltRight className="menu-icon" onClick={handleSort} />
        </nav>
        <ul className="favorites-anime-list">
          {favorites.map((anime) => (
            <FavoriteCard key={anime.id} anime={anime} />
          ))}
        </ul>
      </section>
    </MyListsPage>
  );
};

export default FavoritesPage;
