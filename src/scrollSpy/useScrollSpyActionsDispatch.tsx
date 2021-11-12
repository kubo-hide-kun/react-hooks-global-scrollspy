import { useContext } from "react";

import { ScrollSpyContext } from './ScrollSpyContext';

/**
 * @returns actions - Actions are used to control registered DOM elements
 */
export const useScrollSpyActionDispatch = () => {
  const { actions } = useContext(ScrollSpyContext);
  return actions;
};
