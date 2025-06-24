<script lang="ts">
	import Grid from '$lib/Grid.svelte';
	import GridItem from '$lib/GridItem.svelte';
	import { onMount, tick } from 'svelte';

	let items = $state(
		Array.from({ length: 8 }, (_, i) => ({
			id: i,
			aspectRatio: 16 / 9,
			scale: 1,
			url: 'https://download.samplelib.com/mp4/sample-5s.mp4'
		}))
	);
	const getDimensions = (item: any) => {
		const width = item.aspectRatio * item.scale * 100;
		const height = item.scale * 100;
		return { width, height };
	};
</script>

<h2>Simple Muuri Example</h2>
<p>Drag and drop the items below:</p>

{#snippet aspectBox(aspectRatio: number, scale: number)}
	<div class="relative">
		<div class="absolute inset-0" style="padding-top: {aspectRatio * 100}%"></div>
		<div class="absolute inset-0" style="transform: scale({scale})"></div>
	</div>
{/snippet}
<Grid class="h-full w-[80%] gap-2 border-2">
	{#each items as item (item.id)}
		<GridItem
			class="m-2 resize"
			width={getDimensions(item).width}
			height={getDimensions(item).height}
			aspectRatio={item.aspectRatio}
		>
			<div
				class="text-small flex size-full flex-col items-center justify-center overflow-hidden border-2 border-black bg-red-500 p-0 text-center text-white"
			>
				{@render aspectBox(item.aspectRatio, item.scale)}
				{item.aspectRatio.toFixed(2)}
			</div>
		</GridItem>
	{/each}
	<GridItem class="m-2 resize" width={100} height={100}>
		<div
			class="text-small flex size-full flex-col items-center justify-center overflow-hidden border-2 border-black bg-red-500 p-0 text-center text-white"
		>
			Freeform
		</div>
	</GridItem>
</Grid>
