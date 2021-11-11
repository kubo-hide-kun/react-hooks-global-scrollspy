/**
 * Optional params
 * @property offsetPx - Distance from the basis X-coordinate
 * @property throttleMs - Interval of update processing (ms)
 */
export type ScrollSpyParams = {
  offsetPx?: number;
  throttleMs?: number;
};

/**
 * 'ScrollSpyEntry' Object is use to get key and DOM elements at once 
 * @property key - Key to identify the registered DOM elements
 * @property value - References to DOM elements
 */
export type ScrollSpyEntry = {
  key: string;
  value: React.RefObject<Element>;
};

/** ScrollSpyActions are used to control registered DOM elements */
export type ScrollSpyActions = {
  /**
   * 'setScrollSpyEntry' function is used to register DOM elements
   * @param key Key to identify the registered DOM elements
   * @param entry References to DOM elements
   */
  set: (key: string, entry: React.RefObject<Element>) => void;

  /**
   * 'deleteScrollSpyEntry' function is used to delete DOM elements specified by key
   * @param key Key to specify DOM elements to be deleted
   */
  delete: (key: string) => void;

  /**
   * 'resetScrollSpyEntry' function is used to delete all registered DOM elements
   */
  reset: () => void;
};
