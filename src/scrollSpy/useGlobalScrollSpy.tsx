import { useContext } from "react";

import { GlobalScrollSpyContext } from "./GlobalScrollSpyContext";
import { ScrollSpyElement, ScrollSpyActions } from "./type";

/**
 * @returns [ activeElement, actions ] - Two return values are returned as an array
 * @returns activeElement - DOM element activated based on scroll position (only one)
 * @returns actions - Actions are used to control registered DOM elements
 */
export const useGlobalScrollSpy = (): [
  ScrollSpyElement | null,
  ScrollSpyActions
] => {
  const { activeElement, actions } = useContext(GlobalScrollSpyContext);
  return [activeElement, actions];
};
