/* eslint-disable react/prop-types */
export const FavoriteAlert = ({ newAnime }) => {
  return (
    <div className="favorite-alert">
      <p className="favorite-alert-text">
        {newAnime ? (
          <span>¡Agregado a favoritos!</span>
        ) : (
          <span>¡Eliminado de favoritos!</span>
        )}
      </p>
    </div>
  );
};

export default FavoriteAlert;
