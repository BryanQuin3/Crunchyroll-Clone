import { Link } from "react-router-dom";
export const PageNotFound = () => {
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
        <Link to="/" className="btn-crunchy">
          Llévame al inicio
        </Link>
      </div>
    </main>
  );
};
