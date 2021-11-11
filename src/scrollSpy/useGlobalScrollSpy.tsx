import { FC, createContext, useContext } from "react";
import { useScrollSpy } from "./useScrollSpy";
import { ScrollSpyActions, ScrollSpyEntry, ScrollSpyParams } from "./type";

/**
 * @param ScrollSpyParams Optional params
 * @param ScrollSpyParams.offsetPx Distance from Y coordinate of the base (px)
 * @param ScrollSpyParams.throttleMs Interval of update processing (ms)
 * @returns ScrollSpyProvider - This Provider components provides useScrollSpy return value descendants of this Provider
 * @returns activeEntry - DOM element activated based on scroll position (only one)
 * @returns actions - Actions are used to control registered DOM elements
 */
export const useGlobalScrollSpy = ({
  offsetPx = 0,
  throttleMs = 100,
}: ScrollSpyParams = {}): {
  ScrollSpyProvider: FC<{}>;
  activeEntry: ScrollSpyEntry | null;
  actions: ScrollSpyActions;
} => {
  const [activeEntry, actions] = useScrollSpy({ offsetPx, throttleMs });
  const ScrollSpyContext = createContext({
    activeEntry,
    actions,
  });

  const ScrollSpyProvider: FC = ({ children }) => {
    return (
      <ScrollSpyContext.Provider value={{ activeEntry, actions }}>
        {children}
      </ScrollSpyContext.Provider>
    );
  };

  const useScrollSpyContext = useContext(ScrollSpyContext);

  return { ScrollSpyProvider, ...useScrollSpyContext };
};
