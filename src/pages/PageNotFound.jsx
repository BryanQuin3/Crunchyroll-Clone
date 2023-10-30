import { Link } from "react-router-dom";
import { useViewTransition } from "../hooks/useViewTransition";
export const PageNotFound = () => {
  const { handleClick } = useViewTransition("/");

  return (
    <main className="page-not-found">
      <div>
        <img
          className="img-page-not-found"
          src="../img/yuzu-bucket.webp"
          alt="imagen de yuzu"
        />
      </div>
      <div className="info-not-found">
        <h2>404 - Página no encontrada</h2>
        <p>¡Yuzu dice que aquí no hay nada!</p>
        <Link to="/" className="btn-crunchy" onClick={handleClick}>
          Llévame al inicio
        </Link>
      </div>
    </main>
  );
};
