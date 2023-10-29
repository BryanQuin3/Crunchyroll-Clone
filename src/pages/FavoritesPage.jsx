import { BxMenuAltRight, FavoriteIcon } from "../components/Icons";
import { FavoriteCard } from "../components/FavoriteCard";
export const FavoritesPage = () => {
  return (
    <main className="page-favorites">
      <header className="favorite-header container">
        <FavoriteIcon className="favorite favorite-list-icon" />
        <h1 className="favorite-title">Mis Listas</h1>
      </header>
      <nav>
        <ul className="favorite-list-titles">
          <li className="favorite-list active">
            <h2 className="favorite-list-title">Favoritos</h2>
          </li>
          <li className="favorite-list">
            <h2 className="favorite-list-title">Crunchylistas</h2>
          </li>
          <li className="favorite-list">
            <h2 className="favorite-list-title">Historial</h2>
          </li>
        </ul>
      </nav>
      <section className="favorite-animes">
        <nav className="favorite-animes-info">
          <h3>Actividad reciente</h3>
          <BxMenuAltRight className="menu-icon" />
        </nav>
        <ul className="favorites-anime-list">
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </ul>
      </section>
    </main>
  );
};

export default FavoritesPage;
