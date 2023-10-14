/* eslint-disable react/prop-types */
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import ListOfAnimes from "./ListOfAnimes";
import { useRef } from "react";

export const AnimeListSection = ({
  animes,
  title,
  container,
  element,
  loading,
}) => {
  const scrollContainerRef = useRef(null);
  return (
    <section className="recommendations-section">
      <PrevBtn scrollElement={scrollContainerRef} />
      <NextBtn scrollElement={scrollContainerRef} />
      <ListOfAnimes
        animes={animes}
        title={title}
        container={container}
        element={element}
        scrollContainerRef={scrollContainerRef}
        loading={loading}
      />
    </section>
  );
};

export default AnimeListSection;
