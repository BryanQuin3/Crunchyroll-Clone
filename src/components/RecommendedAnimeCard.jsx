/* eslint-disable react/prop-types */
export const RecommendedAnimeCard = ({ anime }) => {
  const { title, imageSrc, synopsis, button, genre, type } = anime;
  return (
    <article className="recommended-anime-container">
      <figure className="recommended-img-container ripple">
        <img src={imageSrc} alt="" />
      </figure>
      <div className="recommended-anime-info">
        <h3>{title}</h3>
        <div className="recommended-anime-details">
          <small>
            <span className="anime-type">{type} </span>| {genre}
          </small>
          <svg
            className="watchlist-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-t="watchlist-svg"
            aria-labelledby="watchlist-svg"
            aria-hidden="true"
            role="img"
          >
            <title id="watchlist-svg">Favoritos</title>
            <path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path>
          </svg>
        </div>
        <p className="recommended-anime-synopsis">
          {synopsis.slice(0, 250)}...
        </p>
        <div className="btns-crunchy-container">
          <button className="btn-crunchy ripple">
            <img className="card-play" src="./img/card-play.svg" alt="" />
            {button}
          </button>
          <button className="btn-crunchy btn-favorite ripple">
            <img className="favorite" src="./img/list.svg" alt="" />
            Añadir a favoritos
          </button>
        </div>
      </div>
    </article>
  );
};

export default RecommendedAnimeCard;
