import { createContext } from "react";
import { ScrollSpyActions, ScrollSpyEntry } from "./type";

/**
 * Context provides a way to pass DOM element activated and
 * Actions are used to control registered DOM elements
 * through the component tree without having to pass props down manually at every level.
 */
export const ScrollSpyContext = createContext<{
  activeEntry: ScrollSpyEntry | null;
  actions?: ScrollSpyActions;
}>({ activeEntry: null });
