/* eslint-disable react/prop-types */
import { IconParkOutlineLike, MdiTrashCanOutline } from "./Icons";
import { useContext } from "react";
import { FavoritesContext } from "./context/favorites";
export const FavoriteCard = ({ anime }) => {
  const { title, imageSrc, button, genre } = anime;
  const { toggleFavorite } = useContext(FavoritesContext);
  const handleClick = () => {
    toggleFavorite(anime);
  };
  return (
    <li className="favorite-anime">
      <figure className="cover-container ripple">
        <img src={imageSrc} alt={title} />
      </figure>
      <h4 className="favorite-anime-title">{title}</h4>
      <small className="watching-title">{button}</small>
      <footer className="favorite-footer">
        <p className="anime-genre">
          <span>{genre}</span>
        </p>
        <div className="favorite-options">
          <IconParkOutlineLike className="like-icon" />
          <MdiTrashCanOutline className="trash-icon" onClick={handleClick} />
        </div>
      </footer>
    </li>
  );
};

export default FavoriteCard;
