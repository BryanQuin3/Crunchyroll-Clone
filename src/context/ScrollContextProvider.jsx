/* eslint-disable react/prop-types */
import { useRef } from "react";
import ScrollContext from "./ScrollContext";

export const ScrollProvider = ({ children }) => {
  const scrollContainerRef = useRef(null);

  return (
    <ScrollContext.Provider value={scrollContainerRef}>
      {children}
    </ScrollContext.Provider>
  );
};
