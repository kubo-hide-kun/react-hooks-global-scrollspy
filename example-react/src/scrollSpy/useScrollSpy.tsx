import { useEffect, useState, useRef, useCallback } from "react";

import { ScrollSpyElement, ScrollSpyParams, ScrollSpyActions } from "./type";
import { throttle } from "../utils/throttle";

/**
 * @param ScrollSpyParams Optional params
 * @param ScrollSpyParams.offsetPx Distance from Y coordinate of the base (px)
 * @param ScrollSpyParams.throttleMs Interval of update processing (ms)
 * @returns [ activeElement, actions ] - Two return values are returned as an array
 * @returns activeElement - DOM element activated based on scroll position (only one)
 * @returns actions - Actions are used to control registered DOM elements
 */
export const useScrollSpy = ({
  offsetPx = 0,
  throttleMs = 50,
}: ScrollSpyParams = {}): [ScrollSpyElement | null, ScrollSpyActions] => {
  const [activeElement, setActiveElement] = useState<ScrollSpyElement | null>(
    null
  );
  const elements = useRef<{
    [key: string]: React.RefObject<Element>;
  }>({});

  const registerElement = useCallback(
    ({
      key,
      element,
    }: {
      key: string;
      element: React.RefObject<Element>;
    }): void => {
      const prevElements = elements.current;
      elements.current = {
        ...prevElements,
        [key]: element,
      };
    },
    []
  );

  const unregisterElement = useCallback(({ key }: { key: string }): void => {
    const deletedElements = { ...elements.current };
    delete deletedElements[key];
    elements.current = deletedElements;
  }, []);

  const resetElements = useCallback((): void => {
    elements.current = {};
  }, []);

  const updateActiveElement = useCallback(() => {
    const currentElements = elements.current;
    const elementKeys = Object.keys(currentElements);

    const { key: activeKey } = elementKeys.reduce(
      (prevActive: { key?: string; elementPositionTop?: number }, key) => {
        const elementElement = currentElements[key].current;

        if (!elementElement) {
          return prevActive;
        }

        const elementPositionTop = elementElement.getBoundingClientRect().top;
        const isPassed = elementPositionTop + offsetPx < 0;
        if (!isPassed) {
          return prevActive;
        }

        if (!prevActive.key) {
          return {
            key,
            elementPositionTop,
          };
        }

        const { elementPositionTop: prevElementPositionTop = 0 } = prevActive;
        const isHigherThanPrev = elementPositionTop >= prevElementPositionTop;
        if (isHigherThanPrev) {
          return {
            key,
            elementPositionTop,
          };
        } else {
          return prevActive;
        }
      },
      {}
    );

    if (!activeKey) {
      setActiveElement(null);
      return;
    }

    setActiveElement({
      key: activeKey,
      value: currentElements[activeKey],
    });
  }, [offsetPx]);

  useEffect(() => {
    const InvokeUpdate = throttle(updateActiveElement, throttleMs);
    window.addEventListener("scroll", InvokeUpdate);
    return () => {
      window.removeEventListener("scroll", InvokeUpdate);
    };
  }, [throttleMs, updateActiveElement]);

  const actions: ScrollSpyActions = {
    registerElement,
    unregisterElement,
    resetElements,
  };

  return [activeElement, actions];
};
