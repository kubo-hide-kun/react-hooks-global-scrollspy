import { useEffect, useState } from "react";

import { refElement, IEntriy } from "./type";
import { throttle } from "../utils/throttle";

export interface scrollSpyParams {
  offsetPx?: number;
  throttleMs?: number;
}

export const useScrollSpy = ({
  offsetPx = 0,
  throttleMs = 100,
}: scrollSpyParams) => {
  const [activeEntriy, setActiveEntriy] = useState<IEntriy>(undefined);
  const [entries, setEntries] = useState<{ [key: string]: refElement }>({});

  const setScrollSpyEntry = (key: string, entriy: refElement): void => {
    setEntries((prevState) => ({
      ...prevState,
      [key]: entriy,
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

  const updateActiveEntriy = () => {
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

    setActiveEntriy({
      key: activeKey,
      value: entries[activeKey],
    });
  };

  useEffect(() => {
    const InvokeUpdate = throttle(updateActiveEntriy, throttleMs);
    window.addEventListener("scroll", InvokeUpdate);
    return () => {
      window.removeEventListener("scroll", InvokeUpdate);
    };
  }, [entries]);

  return {
    activeEntriy,
    setScrollSpyEntry,
    deleteScrollSpyEntry,
    resetScrollSpyEntries,
  };
};
