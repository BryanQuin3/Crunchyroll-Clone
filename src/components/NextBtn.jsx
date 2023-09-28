/* eslint-disable react/prop-types */
import { scroll } from "../logics/scroll";
export const NextBtn = ({ id }) => {
  const handleNextBtn = () => {
    scroll(id, "right");
  };

  return (
    <div className="animeList-btns-container next-btn">
      <button className="animeList-btns position-right" onClick={handleNextBtn}>
        <img src="./img/slider-arrow.svg" alt="Siguiente" />
      </button>
    </div>
  );
};

export default NextBtn;
