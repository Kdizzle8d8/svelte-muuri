<script lang="ts">
  import type { Snippet } from "svelte";
  import { getContext, onMount } from "svelte";
  import { resize } from "./resize.svelte";
  import type { Dimensions, ResizeHandler } from "./types.js";

  const parentContext: { refresh: () => void } = getContext("grid");

  interface Props {
    class?: string;
    width?: number;
    height?: number;
    resizeable?: boolean;
    aspectRatio?: number; // If provided will always force aspect ratio, even if resizeHandler is provided
    children: Snippet;
    resizeHandler?: ResizeHandler;
    lockedDimensions?: {width: boolean, height: boolean};
  }

  let {
    class: className = "",
    width = 100,
    height = 100,
    resizeable = true,
    aspectRatio,
    lockedDimensions = {width: false, height: false},
    children,
    resizeHandler

  }: Props = $props();

  let item = $state<HTMLElement>();

  let mounted = $state(false);
  onMount(() => {
    mounted = true;
    const result = resizeHandler?.({width, height}, {width, height});
    if (result) {
      width = result.width ?? width;
      height = result.height ?? height;
    }
  });

  $effect(() => {
    if (item && mounted) {
      item.style.width = `${width}px`;
      item.style.height = `${height}px`;
      parentContext.refresh();
    }
  });
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
          const prevWidth = width;
          const prevHeight = height;

          // Helper function to apply constraints while respecting locked dimensions
          const applyConstraints = (constraintFn: (w: number, h: number) => Dimensions) => {
            if (lockedDimensions.width && lockedDimensions.height) {
              return { width: prevWidth, height: prevHeight };
            }
            
            const inputWidth = lockedDimensions.width ? prevWidth : newWidth;
            const inputHeight = lockedDimensions.height ? prevHeight : newHeight;
            
            const result = constraintFn(inputWidth, inputHeight);
            
            // Locked dimensions are guaranteed to never change
            return {
              width: lockedDimensions.width ? prevWidth : result.width,
              height: lockedDimensions.height ? prevHeight : result.height
            };
          };

          let result: Dimensions = { width: newWidth, height: newHeight };
          
          if (resizeHandler) {
            result = applyConstraints((w, h) => 
              resizeHandler({width: w, height: h}, {width: prevWidth, height: prevHeight})
            );
          }
          
          // Aspect ratio is ensured regardless of resizeHandler's output
          if (aspectRatio) {
            result = applyConstraints((w, h) => {
              if (lockedDimensions.width) {
                return { width: w, height: w / aspectRatio };
              } else if (lockedDimensions.height) {
                return { width: h * aspectRatio, height: h };
              } else {
                return { width: h * aspectRatio, height: h };
              }
            });
          }
          
          // still apply basic locked dimension constraints even if no other constraints exist
          if (!resizeHandler && !aspectRatio) {
            result = applyConstraints((w, h) => ({ width: w, height: h }));
          }
          
          width = result.width;
          height = result.height;
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
