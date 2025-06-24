<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount, tick } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import type { GridOptions, Item } from 'muuri';

	interface Props {
		dragEnabled?: boolean;
		muuriConfig?: GridOptions;
		class?: string;
		children: Snippet;
	}
	export function refreshItems() {
		grid?.refreshItems();
	}

	let { muuriConfig, class: className = '', children }: Props = $props();

	let gridElement: HTMLDivElement;
	let grid: any = null;

	onMount(async () => {
		const MuuriConstructor = (await import('muuri')).default;

		const config: GridOptions = muuriConfig || {
			dragEnabled: true,
			layout: {
				fillGaps: true,
				rounding: true,
				horizontal: false
			},
			layoutOnInit: true,
			dragStartPredicate: function (item: Item, e: any) {
				const target = e.srcEvent.target as HTMLElement;
				const isResizeHandle = target.closest('[data-resize-handle]') !== null;

				if (isResizeHandle) {
					return false;
				}

				return (MuuriConstructor as any).ItemDrag.defaultStartPredicate(item, e);
			},
			dragPlaceholder: {
				enabled: true,
				createElement: (item: Item) => {
					const node = item.getElement()?.cloneNode(true) as HTMLElement;
					node.style.opacity = '0.5';
					node.style.margin = '0';
					return node;
				}
			}
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

	setContext('grid', {
		refresh: refresh
	});
</script>

<div
	bind:this={gridElement}
	class={twMerge(
		'relative',
		'border border-red-500',
		'mx-auto my-8',
		'h-full',
		'w-full',
		'bg-[#f5f5f5]',
		'rounded-lg',
		'shadow-[0_2px_8px_rgba(0,0,0,0.07)]',
		'px-0 py-2.5',
		className
	)}
>
	{@render children()}
</div>
