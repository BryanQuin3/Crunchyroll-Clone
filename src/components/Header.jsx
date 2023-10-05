/* eslint-disable react/prop-types */
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Header = ({ menuState, setMenuState }) => {
  const [transitionName, setTransitionName] = useState("");
  const handleClick = (e) => {
    if (!document.startViewTransition) {
      setMenuState((preview) =>
        preview === "no-active" ? "active" : "no-active"
      );
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => {
        setTransitionName(e.target.style.startViewTransitionName);
        setMenuState((preview) =>
          preview === "no-active" ? "active" : "no-active"
        );
      });
    });
  };
  return (
    <header>
      <section className="nav-container">
        <Link className="logo-container" to="./">
          <img className="logo" src="./img/crunchyroll-logo.png" alt="" />
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
            onClick={handleClick}
          >
            <title id="menu-svg">Menú</title>
            <path d="M21 4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18z"></path>
          </svg>
          {menuState === "active" && (
            <div
              className="menu-phone"
              style={{ startViewTransitionName: transitionName }}
            >
              <small>Explorar</small>
              <ul className="main-list">
                <li>
                  <a href="#">Popular</a>
                </li>
                <li>
                  <a href="#">Novedades</a>
                </li>
                <li>
                  <a href="#">Alfabético</a>
                </li>
                <li>
                  <a href="#">Temporada de Simulcasts</a>
                </li>
                <li>
                  <a href="#">Temporada de Simulcasts</a>
                </li>
                <li>
                  <a href="#">Calendario de lanzamientos</a>
                </li>
                <li>
                  <a href="#">Videos musicales y conciertos</a>
                </li>
                <li className="link-arrow-container">
                  <a href="#">Generos</a>
                  <img className="arrow" src="./img/down-arrow.svg" alt="" />
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Manga</a>
                </li>
                <li>
                  <a href="#">Juegos</a>
                </li>
                <li className="link-arrow-container">
                  <a href="#">Noticias</a>
                  <img className="arrow" src="./img/down-arrow.svg" alt="" />
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
        <Link to="/search" className="search">
          <img src="./img/search.svg" alt="" />
        </Link>
        <div className="user">
          <img className="user-profile" src="./img/user.jpg" alt="" />
          <img className="arrow" src="./img/down-arrow.svg" alt="" />
        </div>
      </section>
    </header>
  );
};
