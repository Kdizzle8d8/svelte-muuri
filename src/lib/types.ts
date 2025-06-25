// Muuri Grid Configuration Types
export interface MuuriLayoutConfig {
  fillGaps?: boolean;
  horizontal?: boolean;
  alignRight?: boolean;
  alignBottom?: boolean;
  rounding?: boolean;
}

export interface MuuriDragStartPredicate {
  distance?: number;
  delay?: number;
  handle?: string | boolean;
}

export interface MuuriDragRelease {
  duration?: number;
  easing?: string;
}

// Resize Handler Type
/**
 * Handler function for grid item resize events.
 * 
 * @param width - The new width being proposed for the item
 * @param height - The new height being proposed for the item
 * @returns Either:
 *   - `null` or `undefined`: Reject the resize completely (ignore the resize)
 *   - `{width, height}`: Accept the resize with these dimensions (can be original or modified)
 */
export type ResizeHandler = (
  newDimensions: {
    width: number,
    height: number
  },
  prevDimensions: {
    width: number,
    height: number
  }
) => {
  width: number | null;
  height: number | null;
};

// Muuri Grid Props Interface
export interface MuuriGridProps {
  itemSelector?: string;
  dragEnabled?: boolean;
  dragSort?: boolean;
  layoutConfig?: MuuriLayoutConfig;
  dragStartPredicate?: MuuriDragStartPredicate;
  dragRelease?: MuuriDragRelease;
  layoutOnResize?: boolean;
  class?: string;
}

// Muuri Item Props Interface
export interface MuuriItemProps {
  id?: string | number;
  class?: string;
  data?: Record<string, any>;
  draggable?: boolean;
}

// Muuri Event Types
export interface MuuriGridEvents {
  ready: { grid: any };
  layoutStart: { items: any[] };
  layoutEnd: { items: any[] };
  dragStart: { item: any; event: Event };
  dragEnd: { item: any; event: Event };
  add: { items: any[] };
  remove: { items: any[] };
  move: { item: any; fromIndex: number; toIndex: number };
}

// Utility type for Muuri Grid instance methods
export interface MuuriGridInstance {
  refreshItems(): any;
  layout(instant?: boolean): any;
  add(elements: Element | Element[], options?: any): any;
  remove(items: any[], options?: any): any;
  show(items: any[], options?: any): any;
  hide(items: any[], options?: any): any;
  filter(predicate: string | ((item: any) => boolean)): any;
  sort(comparer: string | ((a: any, b: any) => number), options?: any): any;
  synchronize(): any;
  destroy(removeElements?: boolean): any;
  getGrid(): any;
}
