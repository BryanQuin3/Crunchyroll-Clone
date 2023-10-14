/* eslint-disable react/prop-types */
import { useContext } from "react";
import ScrollContext from "../context/ScrollContext";

export const useScrollContext = () => {
  return useContext(ScrollContext);
};
