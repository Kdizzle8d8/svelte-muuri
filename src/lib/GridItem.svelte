<script lang="ts">
  import type { Snippet } from "svelte";
  import { getContext, onMount } from "svelte";
  import { resize } from "./resize.svelte.ts";
  import type { ResizeHandler } from "./types.ts";

  const parentContext: { refresh: () => void } = getContext("grid");

  interface Props {
    class?: string;
    width?: number;
    height?: number;
    resizeable?: boolean;
    aspectRatio?: number; // If provided will always force aspect ratio, even if resizeHandler is provided
    children: Snippet;
    resizeHandler?: ResizeHandler;
  }

  let {
    class: className = "",
    width = 100,
    height = 100,
    resizeable = true,
    aspectRatio,
    children,
    resizeHandler

  }: Props = $props();

  let item = $state<HTMLElement>();

  let mounted = $state(false);
  onMount(() => {
    mounted = true;
    const result = resizeHandler?.(width, height);
    if (result) {
      const {width: newWidth, height: newHeight} = result;
      width = newWidth;
      height = newHeight;
    }
  });

  $effect(() => {
    if (item) {
      item.style.width = `${width}px`;
      item.style.height = `${height}px`;
      if (mounted) {
        parentContext.refresh();
      }
    }
  });
  let resizeHandle = $state<HTMLElement>();
</script>

<div bind:this={item} class="item {className}">
  <div class="item-content">
    {@render children()}
  </div>
  {#if resizeable}
    <div
      class="absolute right-0 bottom-0 z-10 size-8 cursor-se-resize bg-blue-500"
      data-resize-handle
      use:resize={{
        onResize: (newWidth, newHeight) => {
          let finalWidth = newWidth;
          let finalHeight = newHeight;
          
          if (resizeHandler) {
            const result = resizeHandler(newWidth, newHeight);
            if (result) {
              finalWidth = result.width;
              finalHeight = result.height;
            }
          }
          
          if (aspectRatio) {
            finalWidth = finalHeight * aspectRatio;
          }
          
          width = finalWidth;
          height = finalHeight;
        }
      }}>
    </div>
  {/if}
</div>

<style>
  .item {
    display: block;
    position: absolute;
    z-index: 1;
    user-select: none;
    cursor: grab;
  }

  :global(.item.muuri-item-dragging) {
    z-index: 3;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
    cursor: grabbing;
  }

  :global(.item.muuri-item-releasing) {
    z-index: 2;
  }

  :global(.item.muuri-item-hidden) {
    z-index: 0;
  }

  .item-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .resize-handle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background: #ccc;
    cursor: se-resize;
  }
</style>
