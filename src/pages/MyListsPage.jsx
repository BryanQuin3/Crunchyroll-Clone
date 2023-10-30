/* eslint-disable react/prop-types */
import { FavoriteIcon } from "../components/Icons";
import { Link } from "react-router-dom";
import { useViewTransition } from "../hooks/useViewTransition";

export const MyListsPage = ({ children, favorites, crunchylists, history }) => {
  const { handleClick } = useViewTransition(
    `/${favorites ? "favorites" : crunchylists ? "crunchylists" : "history"}`
  );

  return (
    <div className="page-favorites">
      <header className="favorite-header container hidden">
        <FavoriteIcon className="favorite favorite-list-icon" />
        <h1 className="favorite-title">Mis Listas</h1>
      </header>
      <main className="favorite-main-container">
        <nav>
          <ul className="favorite-list-titles">
            <Link to="/favorites" onClick={handleClick}>
              <li className={`favorite-list ${favorites ? "active" : ""}`}>
                <h2 className="favorite-list-title">Favoritos</h2>
              </li>
            </Link>
            <Link to="/crunchylists" onClick={handleClick}>
              <li className={`favorite-list ${crunchylists ? "active" : ""}`}>
                <h2 className="favorite-list-title">Crunchylistas</h2>
              </li>
            </Link>
            <Link to="/history" onClick={handleClick}>
              <li className={`favorite-list ${history ? "active" : ""}`}>
                <h2 className="favorite-list-title">Historial</h2>
              </li>
            </Link>
          </ul>
        </nav>
        {children}
      </main>
    </div>
  );
};
