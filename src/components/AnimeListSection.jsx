/* eslint-disable react/prop-types */
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import ListOfAnimes from "./ListOfAnimes";

export const AnimeListSection = ({ animes, title, container, element, id }) => {
  return (
    <section className="recommendations-section">
      <PrevBtn id={id} />
      <NextBtn id={id} />
      <ListOfAnimes
        animes={animes}
        title={title}
        container={container}
        element={element}
        id={id}
      />
    </section>
  );
};

export default AnimeListSection;
