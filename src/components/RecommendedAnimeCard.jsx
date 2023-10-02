/* eslint-disable react/prop-types */
export const RecommendedAnimeCard = () => {
  // const { title, images, synopsis } = anime;
  // const src = images?.webp?.large_image_url || images?.jpg?.large_image_url;
  return (
    <article className="recommended-anime-container">
      <figure className="recommended-img-container ripple">
        <img src="./img/vinland.jpe" alt="" />
      </figure>
      <div className="recommended-anime-info">
        <h3>Vinland Saga</h3>
        <small>
          <span className="anime-type">Serie </span>| Action
        </small>
        <p className="recommended-anime-synopsis">
          Cuando Thors, un gran guerrero viking muere asesinado en batalla a
          manos de Askeladd, un mercenario, su hijo, Thorfinn, jura vengarse.
          Para ello tendrá que demostrar su valía antes de ganarse el derecho a
          retar a un duelo al asesino de su padre.
        </p>
        <div className="btns-crunchy-container">
          <button className="btn-crunchy ripple">
            <img className="card-play" src="./img/card-play.svg" alt="" />
            Continuar T2 E11
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
