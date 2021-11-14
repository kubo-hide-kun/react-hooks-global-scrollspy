import { FC } from "react";

import { GlobalScrollSpyContext } from './GlobalScrollSpyContext';
import { ScrollSpyParams } from "./type";
import { useScrollSpy } from "./useScrollSpy";

/**
 * @param ScrollSpyParams Optional params
 * @param ScrollSpyParams.offsetPx Distance from Y coordinate of the base (px)
 * @param ScrollSpyParams.throttleMs Interval of update processing (ms)
 * @returns ScrollSpyProvider - This Provider components provides useScrollSpy return value descendants of this Provider
 */
export const GlobalScrollSpyProvider: FC<ScrollSpyParams> = ({
  children,
  offsetPx = 0,
  throttleMs = 50,
} = {}) => {
  const [activeElement, actions] = useScrollSpy({ offsetPx, throttleMs });
  return (
    <GlobalScrollSpyContext.Provider value={{ activeElement, actions }}>
      {children}
    </GlobalScrollSpyContext.Provider>
  );
};
