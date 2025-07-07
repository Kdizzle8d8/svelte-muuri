<script lang="ts">
  import type { Snippet } from "svelte";
  import { onMount, tick } from "svelte";
  import { setContext } from "svelte";
  import type { GridOptions, Item } from "muuri";

  interface Props {
    dragEnabled?: boolean;
    muuriConfig?: GridOptions;
    class?: string;
    children: Snippet;
  }
  export function refreshItems() {
    grid?.refreshItems();
  }

  let { muuriConfig, class: className = "", children }: Props = $props();

  let gridElement: HTMLDivElement;
  let grid: any = null;

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
    console.log(grid);
  });

  // Handle cleanup separately
  onMount(() => {
    return () => {
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
