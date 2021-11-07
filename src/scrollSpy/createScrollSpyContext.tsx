import { FC, createContext, useContext } from "react";
import { useScrollSpy } from "./useScrollSpy";

export interface scrollSpyParams {
  offsetPx?: number;
  throttleMs?: number;
}

export const createScrollSpyContext = ({
  offsetPx = 0,
  throttleMs = 100,
}: scrollSpyParams) => {
  const scrollSpy = useScrollSpy({ offsetPx, throttleMs });
  const ScrollSpyContext = createContext(scrollSpy);

  const ScrollSpyProvider: FC = ({ children }) => {
    return (
      <ScrollSpyContext.Provider value={scrollSpy}>
        {children}
      </ScrollSpyContext.Provider>
    );
  };

  return {
    ScrollSpyProvider,
    useScrollSpy: useContext(ScrollSpyContext),
  };
};
