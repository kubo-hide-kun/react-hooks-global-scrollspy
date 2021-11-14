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
 * 'ScrollSpyElement' Object is use to get key and DOM elements at once
 * @property key - Key to identify the registered DOM elements
 * @property value - References to DOM elements
 */
export type ScrollSpyElement = {
  key: string;
  value: React.RefObject<Element>;
};

/** ScrollSpyActions are used to control registered DOM elements */
export type ScrollSpyActions = {
  /**
   * 'setScrollSpyElement' function is used to register DOM elements
   * @param key Key to identify the registered DOM elements
   * @param element References to DOM elements
   */
  registerElement: (arg: {
    key: string;
    element: React.RefObject<Element>;
  }) => void;

  /**
   * 'deleteScrollSpyElement' function is used to delete DOM elements specified by key
   * @param key Key to specify DOM elements to be deleted
   */
  unregisterElement: (arg: { key: string }) => void;

  /**
   * 'resetScrollSpyElements' function is used to delete all registered DOM elements
   */
  resetElements: () => void;
};
