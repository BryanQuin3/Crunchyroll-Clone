/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useViewTransition } from "../hooks/useViewTransition";
export const Header = ({ menuState, setMenuState }) => {
  const handleClickMenu = () => {
    setMenuState((preview) =>
      preview === "no-active" ? "active" : "no-active"
    );
  };
  const { handleClick } = useViewTransition("./");
  return (
    <header className="main-header">
      <section className="nav-container">
        <Link
          className="logo-container"
          to="./"
          onClick={handleClick}
          aria-label="ir a la página de inicio"
        >
          <img className="logo" src="../img/crunchyroll-logo.png" alt="" />
        </Link>
        <nav>
          <svg
            className="header-svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-t="menu-svg"
            aria-labelledby="menu-svg"
            aria-hidden="true"
            role="img"
            onClick={handleClickMenu}
          >
            <title id="menu-svg">Menú</title>
            <path d="M21 4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18z"></path>
          </svg>
          {menuState === "active" && (
            <div className="menu-phone">
              <small>Explorar</small>
              <ul className="main-list" onClick={handleClickMenu}>
                <li>
                  <Link to="/favorites" aria-label="ver animes favoritos">
                    Favoritos
                  </Link>
                </li>
                <li>
                  <Link to="/genres" aria-label="ver animes por generos">
                    Generos
                  </Link>
                </li>
                <li>
                  <a aria-label="ver animes populares" href="#">
                    Popular
                  </a>
                </li>
                <li>
                  <a aria-label="ver temporada de Simulcasts" href="#">
                    Temporada de Simulcasts
                  </a>
                </li>
                <li>
                  <a aria-label="ver calendario de lanzamientos" href="#">
                    Calendario de lanzamientos
                  </a>
                </li>
                <li>
                  <a aria-label="ver videos musicales y conciertos" href="#">
                    Videos musicales y conciertos
                  </a>
                </li>
                <li className="link-arrow-container">
                  <a aria-label="ver novedades de animes" href="#">
                    Novedades
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a aria-label="ver mangas" href="#">
                    Manga
                  </a>
                </li>
                <li>
                  <a aria-label="ver juegos" href="#">
                    Juegos
                  </a>
                </li>
                <li className="link-arrow-container">
                  <a aria-label="ver noticias" href="#">
                    Noticias
                  </a>
                  <img
                    className="arrow"
                    src="../img/down-arrow.svg"
                    alt="arrow-icon"
                  />
                </li>
              </ul>
            </div>
          )}
          <div className="menu-desktop hidden">
            <ul>
              <li>
                <a href="#">Explorar</a>
                <img src="./img/down-arrow.svg" alt="" />
              </li>
              <li>
                <a href="#">Manga</a>
              </li>
              <li>
                <a href="#">Juegos</a>
              </li>
              <li>
                <a href="#">Noticias</a>
                <img src="./img/down-arrow.svg" alt="" />
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section className="search-container">
        <Link to="./search" className="search" aria-label="buscar anime">
          <img src="../img/search.svg" alt="search-icon" />
        </Link>
        <div className="user">
          <img
            className="user-profile"
            src="../img/user.jpg"
            alt="user-profile"
          />
          <img className="arrow" src="../img/down-arrow.svg" alt="arrow-icon" />
        </div>
      </section>
    </header>
  );
};
