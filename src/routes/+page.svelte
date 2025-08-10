<script lang="ts">
  import Grid from "$lib/Grid.svelte";
  import GridItem from "$lib/GridItem.svelte";

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
  let freeformLocked = $state({width: false, height: false});


</script>

<h2>Simple Muuri Example</h2>
<p>Drag and drop the items below:</p>

{#snippet resizeHandle()}
  <div class="absolute bottom-0 right-0  size-6 cursor-se-resize bg-blue-500 rounded"></div>
{/snippet}
<Grid persistKey="tabforge-demo" class="h-min-[50%] w-[80%] gap-2 border-2  border-red-500 mx-auto my-8 bg-[#f5f5f5] rounded-lg  px-0 py-2.5">
  {#each items as item (item.id)}
    <GridItem
      id={`item-${item.id}`}
      width={getDimensions(item).width}
      height={getDimensions(item).height}
      resizeHandler={(from, to) => {
        return { 
          width: from.width ? to.width : from.width, 
          height: from.height ? to.height : from.height 
        };
      }}
      aspectRatio={item.aspectRatio}>
      <div
        class="text-small flex size-full flex-col items-center justify-center overflow-hidden border-2 border-black bg-red-500 p-0 text-center text-white">
        {getDimensions(item).width}
      </div>
    </GridItem>
  {/each}


  <GridItem id="freeform" resizeable={true} width={100} height={100} lockedDimensions={freeformLocked} resizeHandle={resizeHandle}>
    <div class="relative size-full">
      <div class="absolute text-white top-1 right-1 flex gap-1 z-10">
        <button
          class="w-6 h-6 rounded-md text-xs flex items-center justify-center border-2 border-black {freeformLocked.width ? 'bg-green-500' : 'bg-blue-500'}"
          onclick={() => freeformLocked = { ...freeformLocked, width: !freeformLocked.width }}>
          W
        </button>
        <button
          class="w-6 h-6 rounded-md text-xs flex items-center justify-center border-2 border-black {freeformLocked.height ? 'bg-green-500' : 'bg-blue-500'}"
          onclick={() => freeformLocked = { ...freeformLocked, height: !freeformLocked.height }}>
          H
        </button>
      </div>
      <div
        class="text-small flex size-full flex-col items-center justify-center overflow-hidden border-2 border-black bg-red-500 p-0 text-center text-white">
        Freeform
      </div>
    </div>
  </GridItem>
  <GridItem
    id="aspect-locked"
    width={200}
    height={200}
    lockedDimensions={dimLocked}
    resizeHandler={(from, to) => {
      // Example use case of a custom resize handler with min/max aspect ratios
      const minAspect = 4/3;
      const maxAspect = 21 / 9;
      
      const currentAspect = from.width / from.height;
      
      if (currentAspect < minAspect) {
        // Current aspect is too narrow, need to widen or shorten
        if (from.width === to.width) {
          // Width is locked, adjust height to achieve minimum aspect
          return {
            width: from.width,
            height: from.width / minAspect
          };
        } else {
          // Height is locked or neither is locked, adjust width
          return {
            width: from.height * minAspect,
            height: from.height
          };
        }
      }
      
      if (currentAspect > maxAspect) {
        // Current aspect is too wide, need to narrow or lengthen
        if (from.width === to.width) {
          // Width is locked, adjust height to achieve maximum aspect
          return {
            width: from.width,
            height: from.width / maxAspect
          };
        } else {
          // Height is locked or neither is locked, adjust width
          return {
            width: from.height * maxAspect,
            height: from.height
          };
        }
      }
      
      return from;
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
