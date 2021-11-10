import { FC, createContext, useContext } from "react";
import { useScrollSpy } from "./useScrollSpy";
import { ScrollSpyActions, ScrollSpyEntry, ScrollSpyParams } from "./type";

/**
 * @param ScrollSpyParams Optional params
 * @param ScrollSpyParams.offsetPx Distance from Y coordinate of the base (px)
 * @param ScrollSpyParams.throttleMs Interval of update processing (ms)
 * @returns [ ScrollSpyProvider, useScrollSpyContext ] - Two return values are returned as an array
 * @returns ScrollSpyProvider - This Provider components provides useScrollSpy return value descendants of this Provider
 * @returns useScrollSpyContext - Function is
 */
export const createScrollSpyContext = ({
  offsetPx = 0,
  throttleMs = 100,
}: ScrollSpyParams = {}): {
  Provider: FC<{}>;
  getActiveEntry: () => ScrollSpyEntry | null;
  getActions: () => ScrollSpyActions;
} => {
  const [activeEntry, actions] = useScrollSpy({ offsetPx, throttleMs });
  const ScrollSpyContext = createContext({
    activeEntry,
    actions,
  });

  const Provider: FC = ({ children }) => {
    return (
      <ScrollSpyContext.Provider value={{ activeEntry, actions }}>
        {children}
      </ScrollSpyContext.Provider>
    );
  };

  const getActiveEntry = () => useContext(ScrollSpyContext).activeEntry;
  const getActions = () => useContext(ScrollSpyContext).actions;

  return { Provider, getActiveEntry, getActions };
};
