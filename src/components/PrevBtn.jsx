/* eslint-disable react/prop-types */
import { scroll } from "../logics/scroll";
export const PrevBtn = ({ scrollElement }) => {
  const handlePrevBtn = () => {
    scroll(scrollElement.current, "left");
  };
  return (
    <div className="animeList-btns-container prev-btn">
      <button className="animeList-btns position-left" onClick={handlePrevBtn}>
        <img src="./img/slider-arrow.svg" alt="Anterior" />
      </button>
    </div>
  );
};

export default PrevBtn;
