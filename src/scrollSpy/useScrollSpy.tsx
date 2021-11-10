import { useEffect, useState } from "react";

import { RefElement, ScrollSpyEntry, ScrollSpyParams, ScrollSpyActions } from "./type";
import { throttle } from "../utils/throttle";

export type useScrollSpyReturns = [ScrollSpyEntry | undefined, ScrollSpyActions]

/**
 * @param ScrollSpyParams Optional params
 * @param ScrollSpyParams.offsetPx Distance from Y coordinate of the base (px)
 * @param ScrollSpyParams.throttleMs Interval of update processing (ms)
 * @returns [ activeEntry, actions ] - Two return values are returned as an array
 * @returns activeEntry - DOM element activated based on scroll position (only one)
 * @returns actions - Actions are used to control registered DOM elements
 */
export const useScrollSpy = ({
  offsetPx = 0,
  throttleMs = 100,
}: ScrollSpyParams = {}): useScrollSpyReturns => {
  const [activeEntry, setActiveEntry] = useState<ScrollSpyEntry | undefined>();
  const [entries, setEntries] = useState<{ [key: string]: RefElement }>({});

  const setScrollSpyEntry = (key: string, entry: RefElement): void => {
    setEntries((prevState) => ({
      ...prevState,
      [key]: entry,
    }));
  };

  const deleteScrollSpyEntry = (key: string): void => {
    const deletedEntries = { ...entries };
    delete deletedEntries[key];
    setEntries(deletedEntries);
  };

  const resetScrollSpyEntries = (): void => {
    setEntries({});
  };

  const updateActiveEntry = () => {
    const entryKeys = Object.keys(entries);

    const activeKey = entryKeys.reduce((prevActiveKey, key) => {
      const entryElement = entries[key].current;
      const entryDomRect = entryElement.getBoundingClientRect();

      const isPassed = entryDomRect.top + offsetPx < 0;
      if (isPassed) {
        return prevActiveKey;
      }

      const prevEntryElement = entries[prevActiveKey].current;
      const prevEntryDomRect = prevEntryElement.getBoundingClientRect();

      const isHigherThanPrev = entryDomRect.top >= prevEntryDomRect.top;
      return isHigherThanPrev ? key : prevActiveKey;
    });

    setActiveEntry({
      key: activeKey,
      value: entries[activeKey],
    });
  };

  useEffect(() => {
    const InvokeUpdate = throttle(updateActiveEntry, throttleMs);
    window.addEventListener("scroll", InvokeUpdate);
    return () => {
      window.removeEventListener("scroll", InvokeUpdate);
    };
  }, [entries]);

  const actions: ScrollSpyActions = {
    set: setScrollSpyEntry,
    delete: deleteScrollSpyEntry,
    reset: resetScrollSpyEntries,
  };

  return [activeEntry, actions];
};
