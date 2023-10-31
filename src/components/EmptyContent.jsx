/* eslint-disable react/prop-types */
import { useViewTransition } from "../hooks/useViewTransition";
import { Link } from "react-router-dom";
export const EmptyContent = ({ message, buttonText, srcImage }) => {
  const { handleClick } = useViewTransition("./");
  return (
    <div className="crunchylist-page">
      <img src={srcImage} alt="empty crunchylist image" />
      <p>{message}</p>
      <Link to="/" className="btn-crunchy ripple" onClick={handleClick}>
        {buttonText}
      </Link>
    </div>
  );
};

export default EmptyContent;
