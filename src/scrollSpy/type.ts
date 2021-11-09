/** References to DOM elements */
export type RefElement = React.MutableRefObject<Element>;

/**
 * Optional params
 * @property { number } offsetPx - Distance from the basis X-coordinate
 * @property { number } throttleMs - Interval of update processing (ms)
 */
export type ScrollSpyParams = {
  offsetPx?: number;
  throttleMs?: number;
};

/**
 * 'ScrollSpyEntry' Object is use to get key and DOM elements at once 
 * @property { string } key Key to identify the registered DOM elements
 * @property { RefElement } entry References to DOM elements
 */
export type ScrollSpyEntry = {
  key: string;
  value: RefElement;
};

/** ScrollSpyActions are used to control registered DOM elements */
export type ScrollSpyActions = {
  /**
   * 'setScrollSpyEntry' function is used to register DOM elements
   * @param { string } key Key to identify the registered DOM elements
   * @param { RefElement } entry References to DOM elements
   */
  set: (key: string, entry: RefElement) => void;

  /**
   * 'deleteScrollSpyEntry' function is used to delete DOM elements specified by key
   * @param { string } key Key to specify DOM elements to be deleted
   */
  delete: (key: string) => void;

  /**
   * 'resetScrollSpyEntry' function is used to delete all registered DOM elements
   */
  reset: () => void;
};
