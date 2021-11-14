import { createContext } from "react";
import { ScrollSpyActions, ScrollSpyElement } from "./type";

/**
 * Context provides a way to pass DOM element activated and
 * Actions are used to control registered DOM elements
 * through the component tree without having to pass props down manually at every level.
 */
export const GlobalScrollSpyContext = createContext<{
  activeElement: ScrollSpyElement | null;
  actions: ScrollSpyActions;
}>({
  activeElement: null,
  actions: {
    registerElement: (_: {
      key: string;
      element: React.RefObject<Element>;
    }) => {},
    unregisterElement: (_: { key: string }) => {},
    resetElements: () => {},
  },
});
