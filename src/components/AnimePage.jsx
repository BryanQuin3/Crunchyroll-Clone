import { AnimeInfoBtns } from "./AnimeInfoBtns";
export const AnimePage = () => {
  return (
    <div className="anime-page-container">
      <div className="current-anime-cover">
        <div className="blurred-cover">
          <img src="../img/hero-img.jpg" alt="portada de ..." />
        </div>
        <img
          className="anime-cover-min"
          src="../img/hero-img.jpg"
          alt="portada de ..."
        />
      </div>
      <section className="anime-page-body">
        <div className="current-anime-info">
          <h1 className="anime-list-title">
            Mushoku Tensei Jobless Reincarnation
          </h1>
          <p className="anime-genre">Action</p>
          <div className="starts">
            <svg
              className="star-rating-controls__star-icon--j0zHA base-svg--is-flip--QvCQC"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-t=""
              aria-hidden="false"
              role="img"
              width={30}
              fill="#f1f1f1"
            >
              <title id="star-svg">Reseña destacada</title>
              <path d="M15.266 8.352L11.988 1.723 8.73 8.352 1.431 9.397 6.71 14.528 5.465 21.849 11.999 18.39 18.544 21.85 17.285 14.528 22.57 9.398z"></path>
            </svg>
          </div>
          <div className="rated">
            <p>
              Puntuación media <strong>4.9</strong>
            </p>
          </div>
        </div>
        <AnimeInfoBtns text="Comenzar a ver t1 e1" />
      </section>
    </div>
  );
};
export default AnimePage;
