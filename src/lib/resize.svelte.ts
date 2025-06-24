export function resize(node: HTMLElement, { onResize }: { onResize: (width: number, height: number) => void }) {
	let isResizing = $state(false);
	let startX = $state(0);
	let startY = $state(0);
	let startWidth = $state(0);
	let startHeight = $state(0);

	const handleMouseDown = (event: MouseEvent) => {
		// Only handle left mouse button
		if (event.button !== 0) return;
		
		isResizing = true;
		startX = event.clientX;
		startY = event.clientY;
		
		const itemElement = node.closest('.item') as HTMLElement;
		if (itemElement) {
			startWidth = itemElement.offsetWidth;
			startHeight = itemElement.offsetHeight;
		}
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();
		
		document.body.style.userSelect = 'none';
		
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (!isResizing) return;
		
		event.preventDefault();
		
		const deltaX = event.clientX - startX;
		const deltaY = event.clientY - startY;
		
		const newWidth = Math.max(50, startWidth + deltaX);
		const newHeight = Math.max(50, startHeight + deltaY);
		
		onResize(newWidth, newHeight);
	};

	const handleMouseUp = () => {
		if (!isResizing) return;
		
		isResizing = false;
		
		// Restore default text selection
		document.body.style.userSelect = '';
		
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', handleMouseUp);
	};

	node.addEventListener('mousedown', handleMouseDown);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
			
			// Clean up any remaining styles
			document.body.style.userSelect = '';
		}
	};
}