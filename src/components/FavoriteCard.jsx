import { IconParkOutlineLike, MdiTrashCanOutline } from "./Icons";
export const FavoriteCard = () => {
  return (
    <li className="favorite-anime">
      <figure className="cover-container ripple">
        <img src="./img/genreCovers/Action.webp" alt="" />
      </figure>
      <h4 className="favorite-anime-title">Shingeki No Kyojin</h4>
      <small className="watching-title">Continuar: T1 E1</small>
      <footer className="favorite-footer">
        <p className="anime-genre">
          <span>Action | </span>
          <span>Drama</span>
        </p>
        <div className="favorite-options">
          <IconParkOutlineLike className="like-icon" />
          <MdiTrashCanOutline className="trash-icon" />
        </div>
      </footer>
    </li>
  );
};

export default FavoriteCard;
