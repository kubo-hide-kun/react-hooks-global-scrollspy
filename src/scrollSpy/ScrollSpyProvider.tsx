import { FC } from "react";

import { ScrollSpyContext } from './ScrollSpyContext';
import { ScrollSpyParams } from "./type";
import { useScrollSpy } from "./useScrollSpy";

/**
 * @param ScrollSpyParams Optional params
 * @param ScrollSpyParams.offsetPx Distance from Y coordinate of the base (px)
 * @param ScrollSpyParams.throttleMs Interval of update processing (ms)
 * @returns ScrollSpyProvider - This Provider components provides useScrollSpy return value descendants of this Provider
 */
export const ScrollSpyProvider: FC<ScrollSpyParams> = ({
  children,
  offsetPx = 0,
  throttleMs = 100,
} = {}) => {
  const [activeEntry, actions] = useScrollSpy({ offsetPx, throttleMs });
  return (
    <ScrollSpyContext.Provider value={{ activeEntry, actions }}>
      {children}
    </ScrollSpyContext.Provider>
  );
};
