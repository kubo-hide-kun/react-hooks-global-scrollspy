import { useCallback, useContext } from "react";

import { GlobalScrollSpyContext } from "./GlobalScrollSpyContext";

type ScrollSpyActionsForOne = {
  registerElement: (element: React.RefObject<Element>) => void;
  unregisterElement: () => void;
};

/**
 * @returns [ isActive, actions ] - Two return values are returned as an array
 * @returns isActive - Whether the DOM element specified by key is active
 * @returns actions - Actions are used to control registered DOM elements specified by key
 */
export const useGlobalScrollSpyOf = (
  key: string
): [boolean, ScrollSpyActionsForOne] => {
  const { activeElement, actions } = useContext(GlobalScrollSpyContext);
  const isActive = activeElement?.key === key;

  const registerElement = useCallback(
    (element: React.RefObject<Element>) => {
      actions.registerElement({ key, element });
    },
    [actions, key]
  );

  const unregisterElement = useCallback(() => {
    actions.unregisterElement({ key });
  }, [actions, key]);

  return [isActive, { registerElement, unregisterElement }];
};
