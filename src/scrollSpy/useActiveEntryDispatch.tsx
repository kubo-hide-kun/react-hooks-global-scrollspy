import { useContext } from "react";

import { ScrollSpyContext } from './ScrollSpyContext';

/**
 * @returns activeEntry - DOM element activated based on scroll position (only one)
 */
export const useActiveEntryDispatch = () => {
  const { activeEntry } = useContext(ScrollSpyContext);
  return activeEntry;
};
