<script lang="ts">
  import type { Snippet } from "svelte";
  import { onMount, tick } from "svelte";
  import { setContext } from "svelte";
  import type { GridOptions, Item } from "muuri";

  interface Props {
    dragEnabled?: boolean;
    muuriConfig?: GridOptions;
    class?: string;
    persistKey?: string;
    children: Snippet;
  }

  interface GridItemData {
    id: string;
    width: number;
    height: number;
  }

  interface GridState {
    layout: Array<GridItemData | string>;
  }

  export function refreshItems() {
    grid?.refreshItems();
  }

  let { muuriConfig, class: className = "", persistKey, children }: Props = $props();

  let gridElement: HTMLDivElement;
  let grid: any = null;
  let observer: MutationObserver;

  onMount(async () => {
    const MuuriConstructor = (await import("muuri")).default;

    const defaultConfig = {
      dragEnabled: true,
      layout: {
        fillGaps: true,
        rounding: true,
        horizontal: false
      },
      layoutOnInit: true,
      dragStartPredicate: function (item: Item, e: any) {
        const target = e.srcEvent.target as HTMLElement;
        const isResizeHandle = target.closest("[data-resize-handle]") !== null;

        if (isResizeHandle) {
          return false;
        }

        return (MuuriConstructor as any).ItemDrag.defaultStartPredicate(item, e);
      },
      dragPlaceholder: {
        enabled: true,
        createElement: (item: Item) => {
          const node = item.getElement()?.cloneNode(true) as HTMLElement;
          node.style.opacity = "0.5";
          node.style.margin = "0";
          return node;
        }
      }
    }
    const config: GridOptions = {
      ...defaultConfig,
      ...muuriConfig
    };

    grid = new (MuuriConstructor as any)(gridElement, config);
    
    // Add move and resize listeners to save state on changes
    grid.on('move', () => {
      saveState();
    });
    
    // Also save when items are resized (via MutationObserver since Muuri doesn't have a resize event)
    observer = new MutationObserver(() => {
      saveState();
    });
    
    // Observe style changes on all grid items
    grid.getItems().forEach((item: any) => {
      observer.observe(item.getElement(), {
        attributes: true,
        attributeFilter: ['style']
      });
    });
    
    // Load saved state or use default
    const savedState = persistKey ? window.localStorage.getItem(persistKey) : null;

    if (savedState && persistKey) {
      try {
        const state = JSON.parse(savedState);
        await loadState(state);
      } catch (e) {
        console.warn('Failed to parse saved state:', e);
        grid.layout(true);
      }
    } else {
      grid.layout(true);
    }
  });
  function serializeState() {
    if (!grid) return null;
    
    // Get grid layout (positions and dimensions)
    const layout = grid.getItems().map((item: any) => {
      const element = item.getElement();
      return {
        id: element.getAttribute('data-id'),
        width: parseFloat(element.style.width) || 0,
        height: parseFloat(element.style.height) || 0,
      };
    });

    return { layout };
  }

  function saveState() {
    if (!grid) return;
    const state = serializeState();
    if (state && persistKey) {
      window.localStorage.setItem(persistKey, JSON.stringify(state));
    }
  }

  async function loadState(state: GridState) {
    if (!grid) return;
    try {
      // Restore layout (positions and dimensions)
      if (state.layout) {
        const currentItems = grid.getItems();
        const currentItemIds = currentItems.map((item: any) => {
          return item.getElement().getAttribute('data-id');
        });
        const newItems = [];

        // Restore item order and dimensions
        for (let i = 0; i < state.layout.length; i++) {
          const itemData = state.layout[i];
          const itemId = typeof itemData === 'string' ? itemData : itemData.id;
          const itemIndex = currentItemIds.indexOf(itemId);
          
          if (itemIndex > -1) {
            const item = currentItems[itemIndex];
            newItems.push(item);
            
            // Restore dimensions if they exist in the saved data
            if (typeof itemData === 'object' && itemData.width && itemData.height) {
              const element = item.getElement();
              element.style.width = `${itemData.width}px`;
              element.style.height = `${itemData.height}px`;
            }
          }
        }

        // Sort items first
        grid.sort(newItems, { layout: false });
        
        // Use tick to ensure DOM updates are processed before Muuri refresh
        await tick();
        
        // Force Muuri to refresh item dimensions and recalculate layout
        grid.refreshItems();
        grid.layout(true);
      } else {
        grid.layout(true);
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage:', e);
      grid.layout(true);
    }
  }

  // Handle cleanup separately
  onMount(() => {
    return () => {
      observer?.disconnect();
      grid?.destroy();
    };
  });

  export function refresh() {
    if (!grid) return;
    grid.refreshItems();
    grid.layout();
  }

  setContext("grid", {
    refresh: refresh
  });
</script>

<div bind:this={gridElement} class="{className} gridParent">
  {@render children()}
</div>

<style>
  .gridParent{
    position: relative;
  }
</style>
