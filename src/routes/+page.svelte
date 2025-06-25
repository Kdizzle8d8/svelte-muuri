<script lang="ts">
  import Grid from "$lib/Grid.svelte";
  import GridItem from "$lib/GridItem.svelte";
  import { onMount, tick } from "svelte";

  let items = $state(
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      aspectRatio: 16 / 9,
      scale: 1,
      url: "https://download.samplelib.com/mp4/sample-5s.mp4",
      lockedDims: {width: false, height: false}
    }))
  );
  const getDimensions = (item: any) => {
    const width = item.aspectRatio * item.scale * 100;
    const height = item.scale * 100;
    return { width, height };
  };
  // Start with no dimensions locked
  let dimLocked = $state({width: false, height: false});
</script>

<h2>Simple Muuri Example</h2>
<p>Drag and drop the items below:</p>

{#snippet aspectBox(aspectRatio: number, scale: number)}
  <div class="relative">
    <div class="absolute inset-0" style="padding-top: {aspectRatio * 100}%"></div>
    <div class="absolute inset-0" style="transform: scale({scale})"></div>
  </div>
{/snippet}
<Grid class="h-full w-[80%] gap-2 border-2 border border-red-500 mx-auto my-8 bg-[#f5f5f5] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.07)] px-0 py-2.5">
  {#each items as item (item.id)}
    <GridItem
      width={getDimensions(item).width}
      height={getDimensions(item).height}
      resizeHandler={(newDimensions, prevDimensions) => {
        return { 
          width: item.lockedDims.width ? prevDimensions.width : newDimensions.width, 
          height: item.lockedDims.height ? prevDimensions.height : newDimensions.height 
        };
      }}
      aspectRatio={item.aspectRatio}>
      <div
        class="text-small flex size-full flex-col items-center justify-center overflow-hidden border-2 border-black bg-red-500 p-0 text-center text-white">
        {getDimensions(item).width}
      </div>
    </GridItem>
  {/each}
  <GridItem width={100} height={100}>
    <div
      class="text-small flex size-full flex-col items-center justify-center overflow-hidden border-2 border-black bg-red-500 p-0 text-center text-white">
      Freeform
    </div>
  </GridItem>
  <GridItem
    width={200}
    height={200}
    lockedDimensions={dimLocked}
    resizeHandler={(newDimensions, prevDimensions) => {
      // Example use case of a custom resize handler with min/max aspect ratios
      const minAspect = 4/3;
      const maxAspect = 21 / 9;
      
      const currentAspect = newDimensions.width / newDimensions.height;
      
      if (currentAspect < minAspect) {
        // Current aspect is too narrow, need to widen or shorten
        if (newDimensions.width === prevDimensions.width) {
          // Width is locked, adjust height to achieve minimum aspect
          return {
            width: newDimensions.width,
            height: newDimensions.width / minAspect
          };
        } else {
          // Height is locked or neither is locked, adjust width
          return {
            width: newDimensions.height * minAspect,
            height: newDimensions.height
          };
        }
      }
      
      if (currentAspect > maxAspect) {
        // Current aspect is too wide, need to narrow or lengthen
        if (newDimensions.width === prevDimensions.width) {
          // Width is locked, adjust height to achieve maximum aspect
          return {
            width: newDimensions.width,
            height: newDimensions.width / maxAspect
          };
        } else {
          // Height is locked or neither is locked, adjust width
          return {
            width: newDimensions.height * maxAspect,
            height: newDimensions.height
          };
        }
      }
      
      return newDimensions;
    }}
  >
    <div
      class="text-small flex size-full flex-col items-center justify-center overflow-hidden border-2 border-black bg-red-500 p-0 text-center text-white relative">
      <div class="absolute top-1 right-1 flex gap-1">
        <button
          class="w-6 h-6 rounded-md text-xs flex items-center justify-center border-2 border-black {dimLocked.width ? 'bg-green-500' : 'bg-blue-500'}"
          onclick={() => {
            dimLocked.width = !dimLocked.width;
          }}
        >W</button>
        <button
          class="w-6 h-6 rounded-md text-xs flex items-center justify-center border-2 border-black {dimLocked.height ? 'bg-green-500' : 'bg-blue-500'}"
          onclick={() => {
            dimLocked.height = !dimLocked.height;
          }}
        >H</button>
      </div>
      4:3 Minimum 21:9 Maximum
    </div>
  </GridItem>
</Grid>
