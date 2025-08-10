# Svelte-Muuri



A W.I.P Svelte wrapper around the [Muuri](https://muuri.dev) layout engine
# Getting Started

Install the `svelte-muuri` package with your default package manager

```bash
npm i svelte-muuri
```
### Basic Usage
```svelte
<script>
  import { Grid, GridItem } from "svelte-muuri";

  const items = Array.from({ length: 10 });
</script>

<Grid class="w-[80%] h-min-[60%] border-2 border-black">
  {#each items as _, i}
    <GridItem width={100} height={100}>
      Item {i}
    </GridItem>
  {/each}
</Grid>
```

### `<Grid/>`

The Grid component is what will initialize Muuri and act as the layout engine. It takes only a few props.

The `Grid` component accepts the following props:

- **dragEnabled** (optional, boolean): When set to `false`, it disables the ability to drag items within the grid.
- **muuriConfig** (optional, `GridOptions`): An object that follows the [Muuri Grid Options](https://docs.muuri.dev/grid-options.html) specification, allowing you to customize the grid's behavior.
- **class** (optional, string): CSS classes to apply to the grid container.
- **persistKey** (optional, string): When provided, enables automatic persistence of the grid layout to localStorage. The grid will automatically save item positions and dimensions when they change, and restore the layout when the component is re-initialized.
- **children** (`Snippet`): The grid items to be rendered inside the grid.

#### Persistence Feature

When you provide a `persistKey` prop, the Grid component will automatically:

- **Save state**: Persist item positions, dimensions, and order to localStorage whenever items are moved or resized
- **Restore state**: Load the saved layout when the grid is initialized
- **Handle changes**: Automatically update the saved state as users interact with the grid

Example with persistence:

```svelte
<Grid persistKey="my-dashboard-layout" class="w-[80%] h-min-[60%] border-2 border-black">
  {#each items as _, i}
    <GridItem width={100} height={100}>
      Item {i}
    </GridItem>
  {/each}
</Grid>
```

The persistence system is completely optional - simply omit the `persistKey` prop if you don't need it.

The only default style Grid has is  `position: relative;` which as far as I'm aware is required for Muuri to function properly.

### `<GridItem/>`

This is the wrapper component for your grid items that allows Muuri to control their position. 
- **class** (optional, string): CSS Classes to apply to the GridItem
- **width** & **Height**(optional, number, default: 100): The default width and height for your GridItem, these values are overriden when resized.
- **resizeable** (optional, boolean, default: true): Toggles resizing on the grid item
- **aspectRatio** (optional, number): If an aspect ratio is provided the GridItem will **always** enforce it when resizing. Example value: `1.7777777778` (16:9)
- **children** (required, Snippet): Elements to be rendered inside the GridItem container.
- **resizeHandler** (optional, function of type ResizeHandler): A custom callback function to be called when the GridItem is resized. More info below.
- **resizeHandle** (optional, Snippet): A snippet that will act as the resizeHandle, this is purely visual, the resize logic is automatically attached.
- **lockedDimensions** (optional, object: { width: boolean, height: boolean }, default: {width: false, height: false}): A way to prevent either width or height from being resized.

#### `ResizeHandler()`

```ts
export type ResizeHandler = ( from: Dimensions, to: Dimensions) => Dimensions;
```

This prop allows you to add some custom resizing logic, it takes the current dimensions of the GridItem as well as the target dimensions that the resizeHandle is requesting. 

Here's an example use case. You have a GridItem component that you want to have a minimum aspect ratio of 4:3 and a maximum aspect ratio of 21:9

```ts
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
```

#### How it works with AspectRatio

Regardless of the output dimensions from resizeHandler, the locked dimensions and aspect ratio will always be enforced. So if  you had an aspectRatio prop of `1.77`  and your resizeHandler returned the object below

```ts
const from = { width: 1920, height: 1080 }; // 16:9
return { width: 1080, height: 2560 }; // 9:21
```

the aspect ratio enforcer would make the final dimensions result to `{ width: 4551, height: 2560 }` (assuming no dimensions are locked)

#### How it Works With lockedDimensions

When a dimension is locked it simply will not change no matter what. So if resizeHandler was given `{width:100, height:100}` and output `{width:200, height:200}` if your width was locked then the final dimensions would be `{width:100, height:200}`. 

Locking is enforced even before the target dimensions are passed to the resizeHandler, so you can detect if a dimension is locked like so

```ts
if (from.width === to.width) {
	console.log("width locked");
};
if (from.height === to.height) {
	console.log("height locked");
};
```

If you needed some more complex resize logic and the default locking behavior interferes with this, you must account for it in your resizeHandler like the example further up this README.  
