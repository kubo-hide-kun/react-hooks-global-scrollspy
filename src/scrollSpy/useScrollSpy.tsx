import { useEffect, useState } from "react";

import {
  ScrollSpyEntry,
  ScrollSpyParams,
  ScrollSpyActions,
} from "./type";
import { throttle } from "../utils/throttle";

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
}: ScrollSpyParams = {}): [ScrollSpyEntry | null, ScrollSpyActions] => {
  const [activeEntry, setActiveEntry] = useState<ScrollSpyEntry | null>(null);
  const [entries, setEntries] = useState<{ [key: string]: React.RefObject<Element> }>({});

  const setScrollSpyEntry = (key: string, entry: React.RefObject<Element>): void => {
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
      if (!entryElement) {
        return prevActiveKey;
      }

      const entryDomRect = entryElement.getBoundingClientRect();

      const isPassed = entryDomRect.top + offsetPx < 0;
      if (isPassed) {
        return prevActiveKey;
      }

      const prevEntryElement = entries[prevActiveKey].current;
      if (!prevEntryElement) {
        return key;
      }

      const prevEntryDomRect = prevEntryElement.getBoundingClientRect();

      const isHigherThanPrev = entryDomRect.top >= prevEntryDomRect.top;
      return isHigherThanPrev ? key : prevActiveKey;
    });

    if (!!activeKey) {
      setActiveEntry(null);
      return;
    }

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
