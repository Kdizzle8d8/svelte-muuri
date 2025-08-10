This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  FUNDING.yml
docs/
  .vitepress/
    theme/
      custom.css
      index.js
    config.js
  public/
    muuri-icon.svg
  examples.md
  getting-started.md
  grid-constructor.md
  grid-events.md
  grid-methods.md
  grid-options.md
  index.md
  item-methods.md
src/
  Animator/
    Animator.js
  AutoScroller/
    AutoScroller.js
    constants.js
    LICENSE.md
    Pool.js
    ScrollAction.js
    ScrollRequest.js
    utils.js
  Dragger/
    Dragger.js
    EdgeHack.js
    LICENSE.md
  Emitter/
    Emitter.js
    LICENSE.md
  Grid/
    Grid.js
  Item/
    Item.js
    ItemDrag.js
    ItemDragPlaceholder.js
    ItemDragRelease.js
    ItemLayout.js
    ItemMigrate.js
    ItemVisibility.js
  Packer/
    LICENSE.md
    Packer.js
    PackerProcessor.js
  Ticker/
    LICENSE.md
    Ticker.js
  utils/
    addClass.js
    arrayInsert.js
    arrayMove.js
    arraySwap.js
    createUid.js
    debounce.js
    elementMatches.js
    getContainingBlock.js
    getCurrentStyles.js
    getIntersectionArea.js
    getIntersectionScore.js
    getOffsetDiff.js
    getPrefixedPropName.js
    getScrollableAncestors.js
    getStyle.js
    getStyleAsFloat.js
    getStyleName.js
    getTranslate.js
    getTranslateString.js
    getUnprefixedPropName.js
    hasPassiveEvents.js
    isFunction.js
    isNative.js
    isNodeList.js
    isOverlapping.js
    isPlainObject.js
    isScrollable.js
    isTransformed.js
    noop.js
    normalizeArrayIndex.js
    raf.js
    removeClass.js
    setStyles.js
    toArray.js
    transformProp.js
    transformStyle.js
  constants.js
  index.d.ts
  index.js
  ticker.js
tests/
  grid-constructor/
    container.js
    instance.js
  grid-events/
    add.js
    beforeReceive.js
    beforeSend.js
    destroy.js
    dragEnd.js
    draggerEvent.js
    dragInit.js
    dragMove.js
    dragReleaseEnd.js
    dragReleaseStart.js
    dragScroll.js
    dragStart.js
    filter.js
    hideEnd.js
    hideStart.js
    layoutAbort.js
    layoutEnd.js
    layoutStart.js
    move.js
    receive.js
    remove.js
    send.js
    showEnd.js
    showStart.js
    sort.js
    synchronize.js
  grid-methods/
    add.js
    destroy.js
    filter.js
    getElement.js
    getItems.js
    hide.js
    layout.js
    move.js
    off.js
    on.js
    refreshItems.js
    refreshSortData.js
    remove.js
    send.js
    show.js
    sort.js
    synchronize.js
  grid-options/
    containerClass.js
    dragAutoScroll.js
    dragAxis.js
    dragContainer.js
    dragEnabled.js
    dragPlaceholder.js
    dragSort.js
    dragSortPredicate.js
    dragStartPredicate.js
    hideDuration.js
    itemClass.js
    itemDraggingClass.js
    itemHiddenClass.js
    itemPositioningClass.js
    itemReleasingClass.js
    items.js
    itemVisibleClass.js
    layout.js
    showDuration.js
    visibleStyles-hiddenStyles.js
  item-methods/
    getElement.js
    getGrid.js
    getHeight.js
    getMargin.js
    getPosition.js
    getWidth.js
    isActive.js
    isDestroyed.js
    isDragging.js
    isHiding.js
    isPositioning.js
    isReleasing.js
    isShowing.js
    isVisible.js
  index.js
  utils.js
.eslintrc.js
.gitignore
.prettierrc.json
.travis.yml
AUTHORS.txt
CONTRIBUTING.md
gulpfile.js
karma.conf.js
karma.defaults.js
LICENSE.md
package.json
README.md
rollup.banner.js
rollup.config.js
```

# Files

## File: .github/FUNDING.yml
````yaml
github: [niklasramo]
````

## File: docs/.vitepress/theme/custom.css
````css
:root {
    --vp-c-brand: #ED6EE3;
    --vp-c-brand-light: #ED6EE3;
    --vp-c-brand-lighter:#FA73EF;
    --vp-c-green-dark:#B958D6;
    --vp-button-brand-bg: #ED6EE3;
  }
````

## File: docs/.vitepress/theme/index.js
````javascript
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default DefaultTheme;
````

## File: docs/.vitepress/config.js
````javascript
import { version } from '../../package.json';

export default {
  title: 'Muuri Docs',
  description: 'Documentation for Muuri JavaScript library.',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/muuri-icon.svg' }]],

  lastUpdated: true,

  // Experimental Feature - it is giving 404 when reloading the page in the docs
  // cleanUrls: 'without-subfolders',

  themeConfig: {
    logo: '/muuri-icon.svg',

    nav: nav(),

    sidebar: {
      '/': sidebarGuide(),
    },

    editLink: {
      pattern: 'https://github.com/haltu/muuri/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/haltu/muuri' }],

    algolia: {
      appId: 'xxxxx',
      apiKey: 'xxxxx',
      indexName: 'muuri',
    },

    // carbonAds: {
    //   code: "xxxxx",
    //   placement: "xxxxx",
    // },
  },
};

function nav() {
  return [
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/haltu/muuri/releases',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/haltu/muuri/blob/master/CONTRIBUTING.md',
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      collapsible: false,
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'Getting Started', link: '/getting-started' },
        { text: 'Examples', link: '/examples' },
      ],
    },
    {
      text: 'API',
      collapsible: false,
      items: [
        { text: 'Grid Constructor', link: '/grid-constructor' },
        { text: 'Grid Options', link: '/grid-options' },
        { text: 'Grid Methods', link: '/grid-methods' },
        { text: 'Grid Events', link: '/grid-events' },
        { text: 'Item Methods', link: '/item-methods' },
      ],
    },
  ];
}
````

## File: docs/public/muuri-icon.svg
````
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 550 400" preserveAspectRatio="xMidYMid meet">
  <path transform="translate(25 25)" paint-order="fill stroke markers" stroke-linejoin="round" stroke-linecap="round" stroke-width="20" stroke="#ff69ea" fill="none" d="M0,0 v330 l20,20 h80 v-325 z M400,25 v325 h80 l20,-20 v-330 z M100,50 v200 h100 v-175 z M300,75 v175 h100 v-200 z M200,100 v200 h100 v-200 z"></path>
</svg>
````

## File: docs/examples.md
````markdown
# Examples

## Barebones Grid

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: barebones grid" src="https://codepen.io/niklasramo/embed/preview/wpwNjK?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/wpwNjK">
  Muuri: barebones grid</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Basic Sorting

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: basic sorting" src="https://codepen.io/niklasramo/embed/preview/EvXoOG?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/EvXoOG">
  Muuri: basic sorting</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Basic Vertical Grid With Dragging

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: basic vertical grid with dragging" src="https://codepen.io/niklasramo/embed/preview/jyJLGM?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/jyJLGM">
  Muuri: basic vertical grid with dragging</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Basic Horizontal Grid With Dragging

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: basic horizontal grid with dragging" src="https://codepen.io/niklasramo/embed/preview/xPoVPe?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/xPoVPe">
  Muuri: basic horizontal grid with dragging</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Multiple Instances

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri demo: multiple instances" src="https://codepen.io/niklasramo/embed/preview/wJKMQz?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/wJKMQz">
  Muuri demo: multiple instances</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Links As Grid Items

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: links as grid items" src="https://codepen.io/niklasramo/embed/preview/ZvzVpg?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/ZvzVpg">
  Muuri: links as grid items</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Prevent Dragging For Specific Items

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: prevent dragging for specific items" src="https://codepen.io/niklasramo/embed/preview/LOzZPo?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/LOzZPo">
  Muuri: prevent dragging for specific items</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Custom Layout Algorithm

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: custom layout algorithm" src="https://codepen.io/niklasramo/embed/preview/LLbLLd?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/LLbLLd">
  Muuri: custom layout algorithm</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Simple Kanban (With Scrolling Containers)

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: simple kanban (with scrolling containers)" src="https://codepen.io/niklasramo/embed/preview/BrYaOp?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/BrYaOp">
  Muuri: simple kanban (with scrolling containers)</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Images Inside Grid Items

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: images inside grid items" src="https://codepen.io/niklasramo/embed/preview/xWYdmp?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/xWYdmp">
  Muuri: images inside grid items</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Saving And Loading Layout

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: saving and loading layout" src="https://codepen.io/niklasramo/embed/preview/YveqNN?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/YveqNN">
  Muuri: saving and loading layout</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Clone Item Back To Original Grid When Dropping To Another Grid

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri demo: clone item back to original grid when dropping to another grid" src="https://codepen.io/niklasramo/embed/preview/zPVBLq?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/zPVBLq">
  Muuri demo: clone item back to original grid when dropping to another grid</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Blocked First Item

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: blocked first item" src="https://codepen.io/niklasramo/embed/preview/EEdmJr?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/EEdmJr">
  Muuri: blocked first item</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Drag Start Delay On Touch

<iframe height="400" style="width: 100%;" scrolling="no" title="Muuri: drag start delay on touch" src="https://codepen.io/niklasramo/embed/preview/WNRLwEV?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/niklasramo/pen/WNRLwEV">
  Muuri: drag start delay on touch</a> by Niklas Rämö (<a href="https://codepen.io/niklasramo">@niklasramo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
````

## File: docs/getting-started.md
````markdown
# Getting Started

## 1. Get Muuri

Install via [npm](https://www.npmjs.com/package/muuri):

```bash
npm install muuri
```

Or download:

- [muuri.js](https://cdn.jsdelivr.net/npm/muuri@0.9.5/dist/muuri.js) - for development (not minified, with comments).
- [muuri.min.js](https://cdn.jsdelivr.net/npm/muuri@0.9.5/dist/muuri.min.js) - for production (minified, no comments).

Or link directly:

```html
<script src="https://cdn.jsdelivr.net/npm/muuri@0.9.5/dist/muuri.min.js"></script>
```

## 2. Get Web Animations Polyfill (if needed)

Muuri uses [Web Animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) to handle all the animations by default. If you need to use Muuri on a browser that does not support Web Animations you need to use a [polyfill](https://github.com/web-animations/web-animations-js).

Install via [npm](https://www.npmjs.com/package/web-animations-js):

```bash
npm install web-animations-js
```

Or download:

- [web-animations.min.js](https://cdn.jsdelivr.net/npm/web-animations-js@2.3.2/web-animations.min.js)

Or link directly:

```html
<script src="https://cdn.jsdelivr.net/npm/web-animations-js@2.3.2/web-animations.min.js"></script>
```

## 3. Add the markup

- Every grid must have a container element (referred as the _grid element_ from now on).
- Grid items must always consist of at least two elements. The outer element is used for positioning the item and the inner element (first direct child) is used for animating the item's visibility (show/hide methods). You can insert any markup you wish inside the inner item element.
- Note that the class names in the below example are not required by Muuri at all, they're just there for example's sake.

```html
<div class="grid">
  <div class="item">
    <div class="item-content">
      <!-- Safe zone, enter your custom markup -->
      This can be anything.
      <!-- Safe zone ends -->
    </div>
  </div>

  <div class="item">
    <div class="item-content">
      <!-- Safe zone, enter your custom markup -->
      <div class="my-custom-content">Yippee!</div>
      <!-- Safe zone ends -->
    </div>
  </div>
</div>
```

## 4. Add the styles

- The grid element must be "positioned" meaning that it's CSS position property must be set to _relative_, _absolute_ or _fixed_. Also note that Muuri automatically resizes the grid element's width/height depending on the area the items cover and the layout algorithm configuration.
- The item elements must have their CSS position set to _absolute_.
- The item elements must not have any CSS transitions or animations applied to them, because they might conflict with Muuri's internal animation engine. However, the grid element can have transitions applied to it if you want it to animate when it's size changes after the layout operation.
- You can control the gaps between the items by giving some margin to the item elements.
- One last thing. Never ever set `overflow: auto;` or `overflow: scroll;` to the grid element. Muuri's calculation logic does not account for that and you _will_ see some item jumps when dragging starts. Always use a wrapper element for the grid element where you set the `auto`/`scroll` overflow values.

```css
.grid {
  position: relative;
}
.item {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 5px;
  z-index: 1;
  background: #000;
  color: #fff;
}
.item.muuri-item-dragging {
  z-index: 3;
}
.item.muuri-item-releasing {
  z-index: 2;
}
.item.muuri-item-hidden {
  z-index: 0;
}
.item-content {
  position: relative;
  width: 100%;
  height: 100%;
}
```

## 5. Fire it up

The bare minimum configuration is demonstrated below. You must always provide the grid element (or a selector so Muuri can fetch the element for you), everything else is optional.

```javascript
var grid = new Muuri('.grid');
```

You can view this little tutorial demo [here](https://codepen.io/niklasramo/pen/wpwNjK). After that you might want to check some [examples](/examples.html) as well.
````

## File: docs/grid-constructor.md
````markdown
# Grid Constructor

`Muuri` is a constructor function and should be always instantiated with the `new` keyword. For the sake of clarity, we refer to a Muuri instance as _grid_ throughout the documentation.

**Syntax**

`Muuri( element, [options] )`

**Parameters**

- **element** &nbsp;&mdash;&nbsp; _element_ / _string_
  - Default value: `null`.
  - You can provide the element directly or use a selector (string) which uses [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) internally.
- **options** &nbsp;&mdash;&nbsp; _object_
  - Optional. Check out the [detailed options reference](#grid-options).

**Default options**

The default options are stored in `Muuri.defaultOptions` object, which in it's default state contains the following configuration:

```javascript
{
  // Initial item elements
  items: '*',
  // Default show animation
  showDuration: 300,
  showEasing: 'ease',
  // Default hide animation
  hideDuration: 300,
  hideEasing: 'ease',
  // Item's visible/hidden state styles
  visibleStyles: {
    opacity: '1',
    transform: 'scale(1)'
  },
  hiddenStyles: {
    opacity: '0',
    transform: 'scale(0.5)'
  },
  // Layout
  layout: {
    fillGaps: false,
    horizontal: false,
    alignRight: false,
    alignBottom: false,
    rounding: false
  },
  layoutOnResize: 150,
  layoutOnInit: true,
  layoutDuration: 300,
  layoutEasing: 'ease',
  // Sorting
  sortData: null,
  // Drag & Drop
  dragEnabled: false,
  dragContainer: null,
  dragHandle: null,
  dragStartPredicate: {
    distance: 0,
    delay: 0
  },
  dragAxis: 'xy',
  dragSort: true,
  dragSortHeuristics: {
    sortInterval: 100,
    minDragDistance: 10,
    minBounceBackAngle: 1
  },
  dragSortPredicate: {
    threshold: 50,
    action: 'move',
    migrateAction: 'move'
  },
  dragRelease: {
    duration: 300,
    easing: 'ease',
    useDragContainer: true
  },
  dragCssProps: {
    touchAction: 'none',
    userSelect: 'none',
    userDrag: 'none',
    tapHighlightColor: 'rgba(0, 0, 0, 0)',
    touchCallout: 'none',
    contentZooming: 'none'
  },
  dragPlaceholder: {
    enabled: false,
    createElement: null,
    onCreate: null,
    onRemove: null
  },
  dragAutoScroll: {
    targets: [],
    handle: null,
    threshold: 50,
    safeZone: 0.2,
    speed: Muuri.AutoScroller.smoothSpeed(1000, 2000, 2500),
    sortDuringScroll: true,
    smoothStop: false,
    onStart: null,
    onStop: null
  },
  // Classnames
  containerClass: 'muuri',
  itemClass: 'muuri-item',
  itemVisibleClass: 'muuri-item-shown',
  itemHiddenClass: 'muuri-item-hidden',
  itemPositioningClass: 'muuri-item-positioning',
  itemDraggingClass: 'muuri-item-dragging',
  itemReleasingClass: 'muuri-item-releasing',
  itemPlaceholderClass: 'muuri-item-placeholder'
}
```

You can modify the default options easily:

```javascript
Muuri.defaultOptions.showDuration = 400;
Muuri.defaultOptions.dragSortPredicate.action = 'swap';
```

This is how you would use the options:

```javascript
// Minimum configuration.
var gridA = new Muuri('.grid-a');
// Providing some options.
var gridB = new Muuri('.grid-b', {
  items: '.item',
});
```
````

## File: docs/grid-events.md
````markdown
# Grid Events

## synchronize

Triggered after item elements are synchronized via `grid.synchronize()`.

**Examples**

```javascript
grid.on('synchronize', function () {
  console.log('Synced!');
});
```

## layoutStart

Triggered when the the layout procedure begins. More specifically, this event is emitted right after new _layout_ has been generated, internal item positions updated and grid element's dimensions updated. After this event is emitted the items in the layout will be positioned to their new positions. So if you e.g. want to react to grid element dimension changes this is a good place to do that.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that are about to be positioned.
- **isInstant** &nbsp;&mdash;&nbsp; _boolean_
  - Was the layout called with `instant` flag or not.

**Examples**

```javascript
grid.on('layoutStart', function (items, isInstant) {
  console.log(items, isInstant);
});
```

## layoutEnd

Triggered after the layout procedure has finished, successfully. Note that if you abort a layout procedure by calling `grid.layout()` _before_ items have finished positioning, this event will not be emitted for the aborted layout procedure. In such a case `layoutAbort` will be emitted instead.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were positioned. Note that these items are always identical to what the _layoutStart_ event's callback receives as it's argument.

**Examples**

```javascript
grid.on('layoutEnd', function (items) {
  console.log(items);
  // For good measure you might want to filter out all the non-active items,
  // because it's techniclly possible that some of the items are
  // destroyed/hidden when we receive this event.
  var activeItems = items.filter(function (item) {
    return item.isActive();
  });
});
```

## layoutAbort

Triggered if you start a new layout process (`grid.layout()`) while the current layout process is still busy positioning items. Note that this event is not triggered if you start a new layout process while the layout is being computed and the items have not yet started positioning.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were attempted to be positioned. Note that these items are always identical to what the _layoutStart_ event's callback receives as it's argument.

**Examples**

```javascript
grid.on('layoutAbort', function (items) {
  console.log(items);
  // For good measure you might want to filter out all the non-active items,
  // because it's techniclly possible that some of the items are destroyed or
  // hidden when we receive this event.
  var activeItems = items.filter(function (item) {
    return item.isActive();
  });
});
```

## add

Triggered after `grid.add()` is called.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were successfully added.

**Examples**

```javascript
grid.on('add', function (items) {
  console.log(items);
});
```

## remove

Triggered after `grid.remove()` is called.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were successfully removed.
- **indices** &nbsp;&mdash;&nbsp; _array_
  - Indices of the items that were successfully removed.

**Examples**

```javascript
grid.on('remove', function (items, indices) {
  console.log(items, indices);
});
```

## showStart

Triggered after `grid.show()` is called, just before the items are shown.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that are about to be shown.

**Examples**

```javascript
grid.on('showStart', function (items) {
  console.log(items);
});
```

## showEnd

Triggered after `grid.show()` is called, after the items are shown.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were successfully shown without interruptions. If you, for example, call `grid.hide()` to some of the items that are currently being shown, those items will be omitted from this parameter.

**Examples**

```javascript
grid.on('showEnd', function (items) {
  console.log(items);
});
```

## hideStart

Triggered after `grid.hide()` is called, just before the items are hidden.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that are about to be hidden.

**Examples**

```javascript
grid.on('hideStart', function (items) {
  console.log(items);
});
```

## hideEnd

Triggered after `grid.hide()` is called, after the items are hidden.

**Listener parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were successfully hidden without interruptions. If you, for example, call `grid.show()` to some of the items that are currently being hidden, those items will be omitted from this parameter.

**Examples**

```javascript
grid.on('hideEnd', function (items) {
  console.log(items);
});
```

## filter

Triggered after `grid.filter()` is called.

**Listener parameters**

- **shownItems** &nbsp;&mdash;&nbsp; _array_
  - The items that are shown.
- **hiddenItems** &nbsp;&mdash;&nbsp; _array_
  - The items that are hidden.

**Examples**

```javascript
grid.on('filter', function (shownItems, hiddenItems) {
  console.log(shownItems);
  console.log(hiddenItems);
});
```

## sort

Triggered after `grid.sort()` is called.

**Listener parameters**

- **currentOrder** &nbsp;&mdash;&nbsp; _array_
  - All items in their current order.
- **previousOrder** &nbsp;&mdash;&nbsp; _array_
  - All items in their previous order.

**Examples**

```javascript
grid.on('sort', function (currentOrder, previousOrder) {
  console.log(currentOrder);
  console.log(previousOrder);
});
```

## move

Triggered after `grid.move()` is called or when the grid is sorted during drag. Note that this is event not triggered when an item is dragged into another grid.

**Listener parameters**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was moved.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.
  - **data.action** &nbsp;&mdash;&nbsp; _string_
    - "move" or "swap".

**Examples**

```javascript
grid.on('move', function (data) {
  console.log(data);
});
```

## send

Triggered for the originating grid in the end of the _send process_ (after `grid.send()` is called or when an item is dragged into another grid). Note that this event is called _before_ the item's layout starts.

**Listener parameters**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was sent.
  - **data.fromGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent from.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent to.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.

**Examples**

```javascript
grid.on('send', function (data) {
  console.log(data);
});
```

## beforeSend

Triggered for the originating grid in the beginning of the _send process_ (after `grid.send()` is called or when an item is dragged into another grid). This event is highly useful in situations where you need to manipulate the sent item (freeze it's dimensions for example) before it is appended to it's temporary layout container as defined in [send method options](#gridsend-item-grid-position-options-).

**Listener parameters**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was sent.
  - **data.fromGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent from.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent to.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.

**Examples**

```javascript
grid.on('beforeSend', function (data) {
  console.log(data);
});
```

## receive

Triggered for the receiving grid in the end of the _send process_ (after `grid.send()` is called or when an item is dragged into another grid). Note that this event is called _before_ the item's layout starts.

**Listener parameters**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was sent.
  - **data.fromGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent from.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent to.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.

**Examples**

```javascript
grid.on('receive', function (data) {
  console.log(data);
});
```

## beforeReceive

Triggered for the receiving grid in the beginning of the _send process_ (after `grid.send()` is called or when an item is dragged into another grid). This event is highly useful in situations where you need to manipulate the received item (freeze it's dimensions for example) before it is appended to it's temporary layout container as defined in [send method options](#gridsend-item-grid-position-options-).

**Listener parameters**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was sent.
  - **data.fromGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent from.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent to.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.

**Examples**

```javascript
grid.on('beforeReceive', function (data) {
  console.log(data);
});
```

## dragInit

Triggered in the beginning of the _drag start_ process when dragging of an item begins. This event is highly useful in situations where you need to manipulate the dragged item (freeze it's dimensions for example) before it is appended to the [dragContainer](#dragcontainer-).

**Listener parameters**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
grid.on('dragInit', function (item, event) {
  console.log(event);
  console.log(item);
});
```

## dragStart

Triggered in the end of the _drag start_ process when dragging of an item begins.

**Listener parameters**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
grid.on('dragStart', function (item, event) {
  console.log(event);
  console.log(item);
});
```

## dragMove

Triggered every time a dragged item is _moved_. Note that Muuri has an automatic throttling system which makes sure that this event is triggered at maximum once in an animation frame.

**Listener parameters**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
grid.on('dragMove', function (item, event) {
  console.log(event);
  console.log(item);
});
```

## dragScroll

Triggered when any of the scroll parents of a dragged item is scrolled.

**Listener parameters**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Scroll event data.

**Examples**

```javascript
grid.on('dragScroll', function (item, event) {
  console.log(event);
  console.log(item);
});
```

## dragEnd

Triggered when dragged item is released and the drag process ends.

**Listener parameters**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
grid.on('dragEnd', function (item, event) {
  console.log(event);
  console.log(item);
});
```

## dragReleaseStart

Triggered when a dragged item is released (always after `dragEnd` event).

**Listener parameters**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The released item.

**Examples**

```javascript
grid.on('dragReleaseStart', function (item) {
  console.log(item);
});
```

## dragReleaseEnd

Triggered after released item has finished it's position animation.

**Listener parameters**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The released item.

**Examples**

```javascript
grid.on('dragReleaseEnd', function (item) {
  console.log(item);
});
```

## destroy

Triggered after grid is destroyed.

**Examples**

```javascript
grid.on('destroy', function () {
  console.log('Muuri is no more...');
});
```
````

## File: docs/grid-methods.md
````markdown
# Grid Methods

## getElement

`grid.getElement()`

Get the grid element.

**Returns** &nbsp;&mdash;&nbsp; _element_

**Examples**

```javascript
var elem = grid.getElement();
```

## getItem

`grid.getItem( target )`

Get a single grid item by element or by index. Target can also be a `Muuri.Item` instance in which case the function returns the item if it exists within related `Muuri` instance. If nothing is found with the provided target, `null` is returned.

**Parameters**

- **target** &nbsp;&mdash;&nbsp; _element / number / Muuri.Item_

**Returns** &nbsp;&mdash;&nbsp; _Muuri.Item / null_

- Returns the queried item or `null` if no item is found.

**Examples**

```javascript
// Get first item in grid.
var itemA = grid.getItem(0);
// Get item by element reference.
var itemB = grid.getItem(someElement);
```

## getItems

`grid.getItems( [targets] )`

Get all items in the grid. Optionally you can provide specific targets (indices or elements).

**Parameters**

- **targets** &nbsp;&mdash;&nbsp; _array / element / Muuri.Item / number_
  - An array of item instances/elements/indices.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _array_

- Returns the queried items.

**Examples**

```javascript
// Get all items, both active and inactive.
var allItems = grid.getItems();
// Get all active items.
var activeItems = grid.getItems().filter(function (item) {
  return item.isActive();
});
// Get all positioning items.
var positioningItems = grid.getItems().filter(function (item) {
  return item.isPositioning();
});
// Get the first item.
var firstItem = grid.getItems(0)[0];
// Get specific items by their elements.
var items = grid.getItems([elemA, elemB]);
```

## refreshItems

`grid.refreshItems( [items], [force] )`

Update the cached dimensions of the instance's items. By default all the items are refreshed, but you can also provide an array of target items as the first argument if you want to refresh specific items. Note that all hidden items are not refreshed by default since their `display` property is `'none'` and their dimensions are therefore not readable from the DOM. However, if you do want to force update hidden item dimensions too you can provide `true` as the second argument, which makes the elements temporarily visible while their dimensions are being read.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - To target specific items provide an array of item instances. By default all items are targeted.
  - Optional.
- **force** &nbsp;&mdash;&nbsp; _boolean_
  - Set to `true` to read dimensions of hidden items too (and make them visible for the duration of the reading).
  - Default: `false`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Refresh dimensions of all items.
grid.refreshItems();
// Refresh dimensions of specific items.
grid.refreshItems([0, someElem, someItem]);
// Refresh dimensions of specific items and force read their
// dimensions even if they are hidden. Note that this has performance cost.
grid.refreshItems([0, someElem, someHiddenItem], true);
```

## refreshSortData

`grid.refreshSortData( [items] )`

Refresh the sort data of the grid's items.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - To target specific items provide an array of item instances. By default all items are targeted.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Refresh the sort data for every item.
grid.refreshSortData();
// Refresh the sort data for specific items.
grid.refreshSortData([0, someElem, someItem]);
```

## synchronize

`grid.synchronize()`

Synchronize the item elements in the DOM to match the order of the items in the grid. This comes handy if you need to keep the DOM structure matched with the order of the items. Note that if an item's element is not currently a child of the grid element (if it is dragged for example) it is ignored and left untouched. The reason why item elements are not kept in sync automatically is that there's rarely a need for that as they are absolutely positioned elements.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Let's say we have to move the first item in the grid as the last.
grid.move(0, -1);
// Now the order of the item elements in the DOM is not in sync anymore
// with the order of the items in the grid. We can sync the DOM with
// synchronize method.
grid.synchronize();
```

## layout

`grid.layout( [instant], [callback] )`

Calculate item positions and move items to their calculated positions, unless they are already positioned correctly. The grid's height/width (depends on the layout algorithm) is also adjusted according to the position of the items.

**Parameters**

- **instant** &nbsp;&mdash;&nbsp; _boolean_
  - Should the items be positioned instantly without any possible animation?
  - Default value: `false`.
  - Optional.
- **callback** &nbsp;&mdash;&nbsp; _function_
  - A callback function that is called after every item in the layout has finished/aborted positioning.
  - Receives two arguments:
    - An array of all the items in the layout.
    - A boolean indicating if the layout has changed or not.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Layout items.
grid.layout();
// Layout items instantly (without animations).
grid.layout(true);
// Layout all items and define a callback that will be called
// after all items have been animated to their positions.
grid.layout(function (items, hasLayoutChanged) {
  // If hasLayoutChanged is `true` it means that there has been another layout
  // call before this layout had time to finish positioning all the items.
  console.log('layout done!');
});
```

## add

`grid.add( elements, [options] )`

Add new items by providing the elements you wish to add to the grid and optionally provide the index where you want the items to be inserted into. All elements that are not already children of the grid element will be automatically appended to the grid element. If an element has it's CSS display property set to none it will be marked as _inactive_ during the initiation process. As long as the item is _inactive_ it will not be part of the layout, but it will retain it's index. You can activate items at any point with `grid.show()` method. This method will automatically call `grid.layout()` if one or more of the added elements are visible. If only hidden items are added no layout will be called. All the new visible items are positioned without animation during their first layout.

**Parameters**

- **elements** &nbsp;&mdash;&nbsp; _array / element_
  - An array of DOM elements.
- **options.active** &nbsp;&mdash;&nbsp; _boolean / undefined_
  - By default (when this option is `undefined`) Muuri will automatically detect from each element's `display` style if the item should be active (visible) or inactive (hidden) on init. If the element's `display` style is `none` then the item will be inactive on init. However, you can also provide a boolean here to force the item to be active (`true`) or inactive (`false`) on init.
  - Default value: `undefined`.
  - Optional.
- **options.index** &nbsp;&mdash;&nbsp; _number_
  - The index where you want the items to be inserted in. A value of `-1` will insert the items to the end of the list while `0` will insert the items to the beginning. Note that the DOM elements are always just appended to the grid element regardless of the index value. You can use the `grid.synchronize()` method to arrange the DOM elements to the same order as the items.
  - Default value: `-1`.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _array_

- Returns the added items.

**Examples**

```javascript
// Add two new items to the end.
var newItemsA = grid.add([elemA, elemB]);
// Add two new items to the beginning.
var newItemsB = grid.add([elemA, elemB], { index: 0 });
// Skip the automatic layout.
var newItemsC = grid.add([elemA, elemB], { layout: false });
```

## remove

`grid.remove( items, [options] )`

Remove items from the grid.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - An array of item instances.
- **options.removeElements** &nbsp;&mdash;&nbsp; _boolean_
  - Should the associated DOM element be removed from the DOM?
  - Default value: `false`.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _array_

- Returns the removed items. Note that the removal process also _destroys_ the items so they can not be reused e.g. in another grid.

**Examples**

```javascript
// Remove the first item, but keep the element in the DOM.
var removedItemsA = grid.remove(grid.getItems(0));
// Remove items and the associated elements.
var removedItemsB = grid.remove([itemA, itemB], { removeElements: true });
// Skip the layout.
var removedItemsC = grid.remove([itemA, itemB], { layout: false });
```

## show

`grid.show( items, [options] )`

Show the targeted items.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - An array of item instances.
- **options.instant** &nbsp;&mdash;&nbsp; _boolean_
  - Should the items be shown instantly without any possible animation?
  - Default value: `false`.
  - Optional.
- **options.syncWithLayout** &nbsp;&mdash;&nbsp; _boolean_
  - Should we wait for the next layout's calculations (which are potentially async) to finish before starting the show animations? By default this option is enabled so that the show animations are triggered in sync with the layout animations. If that's not needed set this to `false` and the show animations will begin immediately.
  - Default value: `true`.
  - Optional.
- **options.onFinish** &nbsp;&mdash;&nbsp; _function_
  - A callback function that is called after the items are shown.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Show items with animation (if any).
grid.show([itemA, itemB]);
// Show items instantly without animations.
grid.show([itemA, itemB], { instant: true });
// Show items with callback (and with animations if any).
grid.show([itemA, itemB], {
  onFinish: function (items) {
    console.log('items shown!');
  },
});
```

## hide

`grid.hide( items, [options] )`

Hide the targeted items.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - An array of item instances.
- **options.instant** &nbsp;&mdash;&nbsp; _boolean_
  - Should the items be hidden instantly without any possible animation?
  - Default value: `false`.
  - Optional.
- **options.syncWithLayout** &nbsp;&mdash;&nbsp; _boolean_
  - Should we wait for the next layout's calculations (which are potentially async) to finish before starting the hide animations? By default this option is enabled so that the hide animations are triggered in sync with the layout animations. If that's not needed set this to `false` and the hide animations will begin immediately.
  - Default value: `true`.
  - Optional.
- **options.onFinish** &nbsp;&mdash;&nbsp; _function_
  - A callback function that is called after the items are hidden.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Hide items with animation.
grid.hide([itemA, itemB]);
// Hide items instantly without animations.
grid.hide([itemA, itemB], { instant: true });
// Hide items and call the callback function after
// all items are hidden.
grid.hide([itemA, itemB], {
  onFinish: function (items) {
    console.log('items hidden!');
  },
});
```

## filter

`grid.filter( predicate, [options] )`

Filter items. Expects at least one argument, a predicate, which should be either a function or a string. The predicate callback is executed for every item in the grid. If the return value of the predicate is truthy the item in question will be shown and otherwise hidden. The predicate callback receives the item instance as it's argument. If the predicate is a string it is considered to be a selector and it is checked against every item element in the grid with the native element.matches() method. All the matching items will be shown and others hidden.

**Parameters**

- **predicate** &nbsp;&mdash;&nbsp; _function / string_
  - A predicate callback or a selector.
- **options.instant** &nbsp;&mdash;&nbsp; _boolean_
  - Should the items be shown/hidden instantly without any possible animation?
  - Default value: `false`.
  - Optional.
- **options.syncWithLayout** &nbsp;&mdash;&nbsp; _boolean_
  - Should we wait for the next layout's calculations (which are potentially async) to finish before starting the visibility animations? By default this option is enabled so that the visibility animations are triggered in sync with the layout animations. If that's not needed set this to `false` and the visibility animations will begin immediately.
  - Default value: `true`.
  - Optional.
- **options.onFinish** &nbsp;&mdash;&nbsp; _function_
  - An optional callback function that is called after all the items are shown/hidden.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Show all items that have the attribute "data-foo".
grid.filter(function (item) {
  return item.getElement().hasAttribute('data-foo');
});
// Or simply just...
grid.filter('[data-foo]');
// Show all items that have a class foo.
grid.filter('.foo');
```

## sort

`grid.sort( comparer, [options] )`

Sort items. There are three ways to sort the items. The first is simply by providing a function as the comparer which works almost identically to [native array sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). The only difference is that the sort is always stable. Alternatively you can sort by the sort data you have provided in the grid's options. Just provide the sort data key(s) as a string (separated by space) and the items will be sorted based on the provided sort data keys. Lastly you have the opportunity to provide a presorted array of items which will be used to sync the internal items array in the same order.

**Parameters**

- **comparer** &nbsp;&mdash;&nbsp; _array / function / string_
  - Provide a comparer function, sort data keys as a string (separated with space) or a pre-sorted array of items. When you provide a pre-sorted array of items you _must_ make sure that it contains _exactly_ the same item instances as exists currently in `grid._items` (retrievable safely via `grid.getItems()`), only change the order of items. Muuri does not validate the array of items you provide due to performance reasons.
- **options.descending** &nbsp;&mdash;&nbsp; _boolean_
  - By default the items are sorted in ascending order. If you want to sort them in descending order set this to `true`. Note that this option has no effect when you provide a pre-sorted array of items.
  - Default value: `false`.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Sort items by data-id attribute value (ascending).
grid.sort(function (itemA, itemB) {
  var aId = parseInt(itemA.getElement().getAttribute('data-id'));
  var bId = parseInt(itemB.getElement().getAttribute('data-id'));
  return aId - bId;
});
// Sort items with a presorted array of items.
grid.sort(grid.getItems().reverse());
// Sort items using the sort data keys (ascending).
grid.sort('foo bar');
// Sort items using the sort data keys (descending).
grid.sort('foo bar', { descending: true });
// Sort items using the sort data keys. Sort some keys
// ascending and some keys descending.
grid.sort('foo bar:desc');
```

## move

`grid.move( item, position, [options] )`

Move an item to another position in the grid.

**Parameters**

- **item** &nbsp;&mdash;&nbsp; _element / Muuri.Item / number_
  - Item instance, element or index.
- **position** &nbsp;&mdash;&nbsp; _element / Muuri.Item / number_
  - Item instance, element or index.
- **options.action** &nbsp;&mdash;&nbsp; _string_
  - Accepts the following values:
    - `'move'`: moves item in place of another item.
    - `'swap'`: swaps position of items.
  - Default value: `'move'`.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Move elemA to the index of elemB.
grid.move(elemA, elemB);
// Move the first item in the grid as the last.
grid.move(0, -1);
// Swap positions of elemA and elemB.
grid.move(elemA, elemB, { action: 'swap' });
// Swap positions of the first and the last item.
grid.move(0, -1, { action: 'swap' });
```

## send

`grid.send( item, grid, position, [options] )`

Move an item into another grid.

**Parameters**

- **item** &nbsp;&mdash;&nbsp; _element / Muuri.Item / number_
  - The item that should be moved. You can define the item with an item instance, element or index.
- **grid** &nbsp;&mdash;&nbsp; _Muuri_
  - The grid where the item should be moved to.
- **position** &nbsp;&mdash;&nbsp; _element / Muuri.Item / number_
  - To which position should the item be placed to in the new grid? You can define the position with an item instance, element or index.
- **options.appendTo** &nbsp;&mdash;&nbsp; _element_
  - Which element the item element should be appended to for the duration of the layout animation?
  - Default value: `document.body`.
- **options.layoutSender** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called for the sending grid at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.
- **options.layoutReceiver** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called for the receiving grid at the end of this method. With this parameter you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Move the first item of gridA as the last item of gridB.
// The sent item will be appended to document.body.
gridA.send(0, gridB, -1);
// Move the first item of gridA as the last item of gridB.
// The sent item will be appended to someElem.
gridA.send(0, gridB, -1, {
  appendTo: someElem,
});
// Do something after the item has been sent and the layout
// processes have finished.
gridA.send(0, gridB, -1, {
  layoutSender: function (isAborted, items) {
    // Do your thing here...
  },
  layoutReceiver: function (isAborted, items) {
    // Do your other thing here...
  },
});
```

## on

`grid.on( event, listener )`

Bind an event listener.

**Parameters**

- **event** &nbsp;&mdash;&nbsp; _string_
- **listener** &nbsp;&mdash;&nbsp; _function_

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
grid.on('layoutEnd', function (items) {
  console.log(items);
});
```

## off

`grid.off( event, listener )`

Unbind an event listener.

**Parameters**

- **event** &nbsp;&mdash;&nbsp; _string_
- **listener** &nbsp;&mdash;&nbsp; _function_

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
function onLayoutEnd(items) {
  console.log(items);
}
// Start listening to some event.
grid.on('layoutEnd', onLayoutEnd);
/// ...sometime later -> unbind listener.
grid.off('layoutEnd', onLayoutEnd);
```

## destroy

`grid.destroy( [removeElements] )`

Destroy the grid.

**Parameters**

- **removeElements** &nbsp;&mdash;&nbsp; _boolean_
  - Should the item elements be removed or not?
  - Default value: `false`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Destroy the instance, but keep
// item element in the DOM.
grid.destroy();
```

```javascript
// Destroy the instance and remove
// the item elements from the DOM.
grid.destroy(true);
```
````

## File: docs/grid-options.md
````markdown
# Grid Options

## items

The initial item elements, which should be children of the grid element. All elements that are not children of the grid element (e.g. if they are not in the DOM yet) will be appended to the grid element. You can provide an array of elements, [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) or a selector (string). If you provide a selector Muuri uses it to filter the current child elements of the container element and sets them as initial items. By default all current child elements of the provided grid element are used as initial items.

- Default value: `'*'`.
- Accepted types: array (of elements), [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection), string, null.

**Examples**

```javascript
// Use specific items.
var grid = new Muuri(elem, {
  items: [elemA, elemB, elemC],
});
// Use node list.
var grid = new Muuri(elem, {
  items: elem.querySelectorAll('.item'),
});
// Use selector.
var grid = new Muuri(elem, {
  items: '.item',
});
```

## showDuration

Show animation duration in milliseconds. Set to `0` to disable show animation.

- Default value: `300`.
- Accepted types: number.

**Examples**

```javascript
var grid = new Muuri(elem, {
  showDuration: 600,
});
```

## showEasing

Show animation easing. Accepts any valid [Animation easing](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing) value.

- Default value: `'ease'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
});
```

## hideDuration

Hide animation duration in milliseconds. Set to `0` to disable hide animation.

- Default value: `300`.
- Accepted types: number.

**Examples**

```javascript
var grid = new Muuri(elem, {
  hideDuration: 600,
});
```

## hideEasing

Hide animation easing. Accepts any valid [Animation easing](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing) value.

- Default value: `'ease'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
});
```

## visibleStyles

The styles that will be applied to all visible items. These styles are also used for the show/hide animations which means that you have to have the same style properties in visibleStyles and hiddenStyles options. Be sure to define all style properties camel cased and without vendor prefixes (Muuri prefixes the properties automatically where needed).

- Default value:
  ```javascript
  {
    opacity: 1,
    transform: 'scale(1)'
  }
  ```
- Accepted types: object.

**Examples**

```javascript
var grid = new Muuri(elem, {
  visibleStyles: {
    opacity: 1,
    transform: 'rotate(45deg)',
  },
  hiddenStyles: {
    opacity: 0,
    transform: 'rotate(-45deg)',
  },
});
```

## hiddenStyles

The styles that will be applied to all hidden items. These styles are also used for the show/hide animations which means that you have to have the same style properties in visibleStyles and hiddenStyles options. Be sure to define all style properties camel cased and without vendor prefixes (Muuri prefixes the properties automatically where needed).

- Default value:
  ```javascript
  {
    opacity: 0,
    transform: 'scale(0.5)'
  }
  ```
- Accepted types: object.

**Examples**

```javascript
var grid = new Muuri(elem, {
  visibleStyles: {
    opacity: 1,
    transform: 'rotate(45deg)',
  },
  hiddenStyles: {
    opacity: 0,
    transform: 'rotate(-45deg)',
  },
});
```

## layout

Define how the items will be positioned. Muuri ships with a configurable layout algorithm which is used by default. It's pretty flexible and suitable for most common situations (lists, grids and even bin packed grids). If that does not fit the bill you can always provide your own layout algorithm (it's not as scary as it sounds).

Muuri supports calculating the layout both synchronously and asynchronously. By default (if you use the default layout algorithm) Muuri will use two shared web workers to compute the layouts asynchronously. In browsers that do not support web workers Muuri will fallback to synchronous layout calculations.

- Default value:
  ```javascript
  {
    fillGaps: false,
    horizontal: false,
    alignRight: false,
    alignBottom: false,
    rounding: false
  }
  ```
- Accepted types: function, object.

**Provide an _object_ to configure the default layout algorithm with the following properties**

- **fillGaps** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the algorithm goes through every item in order and places each item to the first available free slot, even if the slot happens to be visually _before_ the previous element's slot. Practically this means that the items might not end up visually in order, but there will be less gaps in the grid.
- **horizontal** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the grid works in landscape mode (grid expands to the right). Use for horizontally scrolling sites. When `false` the grid works in "portrait" mode and expands downwards.
- **alignRight** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the items are aligned from right to left.
- **alignBottom** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the items are aligned from the bottom up.
- **rounding** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the item dimensions are rounded to a precision of two decimals for the duration of layout calculations. This procedure stabilizes the layout calculations quite a lot, but also causes a hit on performance. Use only if you see your layout behaving badly, which might happen sometimes (hopefully never) when using relative dimension values.

**Provide a _function_ to use a custom layout algorithm**

When you provide a custom layout function Muuri calls it whenever calculation of layout is necessary. Before calling the layout function Muuri always calculates the current width and height of the grid element and also creates an array of all the items that are part of the layout currently (all _active_ items).

The layout function has the following parameters:

- **grid** &nbsp;&mdash;&nbsp; _Muuri_
  - The grid instance that requested the layout.
- **layoutId** &nbsp;&mdash;&nbsp; _number_
  - Automatically generated unique id for the layout which is used to keep track of the layout requests and to make sure that the correct layout gets applied at correct time.
- **items** &nbsp;&mdash;&nbsp; _array_
  - Array of `Muuri.Item` instances. A new array instance is created for each layout so there's no harm in manipulating this if you need to (or using it as is for the layout data object).
- **width** &nbsp;&mdash;&nbsp; _number_
  - Current width (in pixels) of the grid element (excluding borders, but including padding).
- **height** &nbsp;&mdash;&nbsp; _number_
  - Current height (in pixels) of the grid element (excluding borders, but including padding).
- **callback** &nbsp;&mdash;&nbsp; _function_
  - When the layout is calculated and ready to be applied you need to call this callback function and provide a _layout object_ as it's argument. Note that if another layout is requesteded while the current layout is still being calculated (asynchronously) this layout will be ignored.

If the layout function's calculations are asynchronous you can optionally return a cancel function, which Muuri will call if there is a new layout request before the current layout has finished it's calculations.

The layout object, which needs to be provided to the callback, must include the following properties.

- **id** &nbsp;&mdash;&nbsp; _number_
  - The layout's unique id (must be the `layoutId` provided by Muuri).
- **items** &nbsp;&mdash;&nbsp; _array_
  - Array of the active item instances that are part of the layout. You can pass the same `items` array here which is provided by Muuri (in case you haven't mutated it). This array items must be identical to the array of items provided by Muuri.
- **slots** &nbsp;&mdash;&nbsp; _array_
  - Array of the item positions (numbers). E.g. if the items were `[a, b]` this should be `[aLeft, aTop, bLeft, bTop]`. You have to calculate the `left` and `top` position for each item in the provided _items_ array in the same order the items are provided.
- **styles** &nbsp;&mdash;&nbsp; _object / null_
  - Here you can optionally define all the layout related CSS styles that should be applied to the grid element _just_ before the `layoutStart` event is emitted. E.g. `{width: '100%', height: '200px', minWidth: '200px'}`.
  - It's important to keep in mind here that if the grid element's `box-sizing` CSS property is set to `border-box` the element's borders are included in the dimensions. E.g. if you set `{width: '100px', width: '100px'}` here and the element has a `5px` border and `box-sizing` is set to `border-box`, then the _layout's_ effective `width` and `height` (as perceived by Muuri) will be `90px`. So remember to take that into account and add the borders to the dimensions when necessary. If this sounds complicated then just don't set borders directly to the grid element or make sure that grid element's `box-sizing` is set to `content-box` (which is the default value).

Note that you can add additional properties to the layout object if you wish, e.g. the default layout algorithm also stores the layout's width and height (in pixels) to the layout object.

**Examples**

```javascript
// Customize the default layout algorithm.
var grid = new Muuri(elem, {
  layout: {
    fillGaps: true,
    horizontal: true,
    alignRight: true,
    alignBottom: true,
    rounding: true,
  },
});
```

```javascript
// Build your own layout algorithm.
var grid = new Muuri(elem, {
  layout: function (grid, layoutId, items, width, height, callback) {
    var layout = {
      id: layoutId,
      items: items,
      slots: [],
      styles: {},
    };
    // Calculate the slots asynchronously. Note that the timeout is here only
    // as an example and does not help at all in the calculations. You should
    // offload the calculations to web workers if you want real benefits.
    // Also note that doing asynchronous layout is completely optional and you
    // can call the callback function synchronously also.
    var timerId = window.setTimeout(function () {
      var item,
        m,
        x = 0,
        y = 0,
        w = 0,
        h = 0;
      for (var i = 0; i < items.length; i++) {
        item = items[i];
        x += w;
        y += h;
        m = item.getMargin();
        w = item.getWidth() + m.left + m.right;
        h = item.getHeight() + m.top + m.bottom;
        layout.slots.push(x, y);
      }
      w += x;
      h += y;
      // Set the CSS styles that should be applied to the grid element.
      layout.styles.width = w + 'px';
      layout.styles.height = h + 'px';
      // When the layout is fully computed let's call the callback function and
      // provide the layout object as it's argument.
      callback(layout);
    }, 200);
    // If you are doing an async layout you _can_ (if you want to) return a
    // function that cancels this specific layout calculations if it's still
    // processing/queueing when the next layout is requested.
    return function () {
      window.clearTimeout(timerId);
    };
  },
});
```

## layoutOnResize

Should Muuri automatically trigger `layout` method on window resize? Set to `false` to disable. When a number or `true` is provided Muuri will automatically position the items every time window is resized. The provided number (`true` is transformed to `0`) equals to the amount of time (in milliseconds) that is waited before items are positioned after each window resize event.

- Default value: `150`.
- Accepted types: boolean, number.

**Examples**

```javascript
// No layout on resize.
var grid = new Muuri(elem, {
  layoutOnResize: false,
});
```

```javascript
// Layout on resize (instantly).
var grid = new Muuri(elem, {
  layoutOnResize: true,
});
```

```javascript
// Layout on resize (with 200ms debounce).
var grid = new Muuri(elem, {
  layoutOnResize: 200,
});
```

## layoutOnInit

Should Muuri trigger `layout` method automatically on init?

- Default value: `true`.
- Accepted types: boolean.

**Examples**

```javascript
var grid = new Muuri(elem, {
  layoutOnInit: false,
});
```

## layoutDuration

The duration for item's layout animation in milliseconds. Set to `0` to disable.

- Default value: `300`.
- Accepted types: number.

**Examples**

```javascript
var grid = new Muuri(elem, {
  layoutDuration: 600,
});
```

## layoutEasing

The easing for item's layout animation. Accepts any valid [Animation easing](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing) value.

- Default value: `'ease'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  layoutEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
});
```

## sortData

The sort data getter functions. Provide an object where the key is the name of the sortable attribute and the function returns a value (from the item) by which the items can be sorted.

- Default value: `null`.
- Accepted types: object, null.

**Examples**

```javascript
var grid = new Muuri(elem, {
  sortData: {
    foo: function (item, element) {
      return parseFloat(element.getAttribute('data-foo'));
    },
    bar: function (item, element) {
      return element.getAttribute('data-bar').toUpperCase();
    },
  },
});
// Refresh sort data whenever an item's data-foo or data-bar changes
grid.refreshSortData();
// Sort the grid by foo and bar.
grid.sort('foo bar');
```

## dragEnabled

Should items be draggable?

- Default value: `false`.
- Accepted types: boolean.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragEnabled: true,
});
```

## dragContainer

The element the dragged item should be appended to for the duration of the drag. If set to `null` (which is also the default value) the grid element will be used.

- Default value: `null`.
- Accepted types: element, null.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragContainer: document.body,
});
```

## dragHandle

The element within the item element that should be used as the drag handle. This should be a CSS selector which will be fed to `element.querySelector()` as is to obtain the handle element when the item is instantiated. If no valid element is found or if this is `null` Muuri will use the item element as the handle.

- Default value: `null`.
- Accepted types: string, null.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragHandle: '.handle',
});
```

## dragStartPredicate

A function that determines when the item should start moving when the item is being dragged. By default uses the built-in start predicate which has some configurable options.

- Default value:
  ```javascript
  {
    distance: 0,
    delay: 0
  }
  ```
- Accepted types: function, object.

If an object is provided the default start predicate handler will be used. You can define the following properties:

- **distance** &nbsp;&mdash;&nbsp; _number_
  - Default value: `0`.
  - How many pixels the user must drag before the drag procedure starts and the item starts moving.
- **delay** &nbsp;&mdash;&nbsp; _number_
  - Default value: `0`.
  - How long (in milliseconds) the user must drag before the dragging starts.

If you provide a function you can customize the drag start logic as you please. When the user starts to drag an item this predicate function will be called until you return `true` or `false`. If you return `true` the item will begin to move whenever the item is dragged. If you return `false` the item will not be moved at all. Note that after you have returned `true` or `false` this function will not be called until the item is released and dragged again.

The predicate function has the following parameters:

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The item that's being dragged.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
// Configure the default predicate
var grid = new Muuri(elem, {
  dragStartPredicate: {
    distance: 10,
    delay: 100,
  },
});
```

```javascript
// Provide your own predicate
var grid = new Muuri(elem, {
  dragStartPredicate: function (item, e) {
    // Start moving the item after the item has been dragged for one second.
    if (e.deltaTime > 1000) {
      return true;
    }
  },
});
```

```javascript
// Pro tip: provide your own predicate and fall back to the default predicate.
var grid = new Muuri(elem, {
  dragStartPredicate: function (item, e) {
    // If this is final event in the drag process, let's prepare the predicate
    // for the next round (do some resetting/teardown). The default predicate
    // always needs to be called during the final event if there's a chance it
    // has been triggered during the drag process because it does some necessary
    // state resetting.
    if (e.isFinal) {
      Muuri.ItemDrag.defaultStartPredicate(item, e);
      return;
    }
    // Prevent first item from being dragged.
    if (grid.getItems()[0] === item) {
      return false;
    }
    // For other items use the default drag start predicate.
    return Muuri.ItemDrag.defaultStartPredicate(item, e);
  },
});
```

## dragAxis

Force items to be moved only vertically or horizontally when dragged. Set to `'x'` for horizontal movement and to `'y'` for vertical movement. By default items can be dragged both vertically and horizontally.

- Default value: `'xy'`.
- Accepted types: string.
- Allowed values: `'x'`, `'y'`, `'xy'`.

**Examples**

```javascript
// Move items only horizontally when dragged.
var grid = new Muuri(elem, {
  dragAxis: 'x',
});
```

```javascript
// Move items only vertically when dragged.
var grid = new Muuri(elem, {
  dragAxis: 'y',
});
```

## dragSort

Should the items be sorted during drag? A simple boolean will do just fine here.

Alternatively you can do some advanced stuff and control within which grids a specific item can be sorted and dragged into. To do that you need to provide a function which receives the dragged item as it's first argument and should return an array of grid instances. An important thing to note here is that you need to return _all_ the grid instances you want the dragged item to sort within, even the current grid instance. If you return an empty array the dragged item will not cause sorting at all.

- Default value: `true`.
- Accepted types: boolean, function.

**Examples**

```javascript
// Disable drag sorting.
var grid = new Muuri(elem, {
  dragSort: false,
});
```

```javascript
// Multigrid drag sorting.
var gridA = new Muuri(elemA, { dragSort: getAllGrids });
var gridB = new Muuri(elemB, { dragSort: getAllGrids });
var gridC = new Muuri(elemC, { dragSort: getAllGrids });
function getAllGrids(item) {
  return [gridA, gridB, gridC];
}
```

## dragSortHeuristics

Defines various heuristics so that sorting during drag would be smoother and faster.

- Default value:
  ```javascript
  {
    sortInterval: 100,
    minDragDistance: 10,
    minBounceBackAngle: 1
  }
  ```
- Accepted types: object.

You can define the following properties:

- **sortInterval** &nbsp;&mdash;&nbsp; _number_
  - Default value: `100`.
  - Defines the amount of time the dragged item must be still before `dragSortPredicate` function is called.
- **minDragDistance** &nbsp;&mdash;&nbsp; _number_
  - Default value: `10`.
  - Defines how much (in pixels) the item must be dragged before `dragSortPredicate` can be called.
- **minBounceBackAngle** &nbsp;&mdash;&nbsp; _number_
  - Default value: `1`.
  - Defines the minimum angle (in radians) of the delta vector between the last movement vector and the current movement vector that is required for the dragged item to be allowed to be sorted to it's previous index. The problem this heuristic is trying to solve is the scenario where you drag an item over a much bigger item and the bigger item moves, but it's still overlapping the dragged item after repositioning. Now when you move the dragged item again another sort is triggered and the bigger item moves back to it's previous position. This bouncing back and forth can go on for quite a while and it looks quite erratic. The fix we do here is that, by default, we disallow an item to be moved back to it's previous position, unless it's drag direction changes enough. And what is enough? That's what you can define here. Note that this option works in tandem with `minDragDistance` and needs it to be set to `3` at minimum to be enabled at all.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragEnabled: true,
  dragSortHeuristics: {
    sortInterval: 10,
    minDragDistance: 5,
    minBounceBackAngle: Math.PI / 2,
  },
});
```

```javascript
// Pro tip: If you want drag sorting happening only on release set a really
// long sortInterval. A bit of a hack, but works.
var grid = new Muuri(elem, {
  dragEnabled: true,
  dragSortHeuristics: {
    sortInterval: 3600000, // 1 hour
  },
});
```

## dragSortPredicate

Defines the logic for the sort procedure during dragging an item.

- Default value:
  ```javascript
  {
    threshold: 50,
    action: 'move',
    migrateAction: 'move'
  }
  ```
- Accepted types: function, object.

If an object is provided the default sort predicate handler will be used. You can define the following properties:

- **threshold** &nbsp;&mdash;&nbsp; _number_
  - Default value: `50`.
  - Allowed values: `1` - `100`.
  - How many percent the intersection area between the dragged item and the compared item should be from the maximum potential intersection area between the items before sorting is triggered.
- **action** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'move'`.
  - Allowed values: `'move'`, `'swap'`.
  - Should the dragged item be _moved_ to the new position or should it _swap_ places with the item it overlaps when the drag occurs within the same grid?
- **migrateAction** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'move'`.
  - Allowed values: `'move'`, `'swap'`.
  - Should the dragged item be _moved_ to the new position or should it _swap_ places with the item it overlaps when the dragged item is moved to another grid?

Alternatively you can provide your own callback function where you can define your own custom sort logic. The callback function has the following parameters:

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The item that's being dragged.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

The callback should return a _falsy_ value if sorting should not occur. If, however, sorting should occur the callback should return an object containing the following properties:

- **index** &nbsp;&mdash;&nbsp; _number_
  - The index where the item should be moved to.
- **grid** &nbsp;&mdash;&nbsp; _Muuri_
  - The grid where the item should be moved to.
  - Defaults to the item's current grid.
  - Optional.
- **action** &nbsp;&mdash;&nbsp; _string_
  - The movement method.
  - Default value: `'move'`.
  - Allowed values: `'move'` or `'swap'`.
  - Optional.

**Examples**

```javascript
// Customize the default predicate.
var grid = new Muuri(elem, {
  dragSortPredicate: {
    threshold: 90,
    action: 'swap',
  },
});
```

```javascript
// Provide your own predicate.
var grid = new Muuri(elem, {
  dragSortPredicate: function (item, e) {
    if (e.deltaTime < 1000) return false;
    return {
      index: Math.round(e.deltaTime / 1000) % 2 === 0 ? -1 : 0,
      action: 'swap',
    };
  },
});
```

```javascript
// Pro tip: use the default predicate as fallback in your custom predicate.
var grid = new Muuri(elem, {
  dragSortPredicate: function (item, e) {
    if (item.classList.contains('no-sort')) return false;
    return Muuri.ItemDrag.defaultSortPredicate(item, {
      action: 'swap',
      threshold: 75,
    });
  },
});
```

## dragRelease

- Default value:
  ```javascript
  {
    duration: 300,
    easing: 'ease',
    useDragContainer: true
  }
  ```
- Accepted types: object.

You can define the following properties:

- **duration** &nbsp;&mdash;&nbsp; _number_
  - Default value: `300`.
  - The duration for item's drag release animation. Set to `0` to disable.
- **easing** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'ease'`.
  - The easing for item's drag release animation. Accepts any valid [Animation easing](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing) value.
- **useDragContainer** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `true`.
  - If `true` the item element will remain within the `dragContainer` for the duration of the release process. Otherwise the item element will be inserted within the grid element (if not already inside it) at the beginning of the release process.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragRelease: {
    duration: 600,
    easing: 'ease-out',
    useDragContainer: false,
  },
});
```

## dragCssProps

Drag specific CSS properties that Muuri sets to the draggable item elements. Muuri automatically prefixes the properties before applying them to the element. `touchAction` property is required to be always defined, but the other properties are optional and can be omitted by setting their value to an empty string if you want to e.g. define them via CSS only.

- Default value:
  ```javascript
  {
    touchAction: 'none',
    userSelect: 'none',
    userDrag: 'none',
    tapHighlightColor: 'rgba(0, 0, 0, 0)',
    touchCallout: 'none',
    contentZooming: 'none'
  }
  ```
- Accepted types: object.

You can define the following properties:

- **touchAction** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
- **userSelect** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
  - Optional.
- **userDrag** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - http://help.dottoro.com/lcbixvwm.php
  - Optional.
- **tapHighlightColor** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'rgba(0, 0, 0, 0)'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
  - Optional.
- **touchCallout** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout
  - Optional.
- **contentZooming** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-content-zooming
  - Optional.

**Examples**

```javascript
// Only set the required touch-action CSS property via the options if you for
// example want to set the other props via CSS instead.
var grid = new Muuri(elem, {
  dragEnabled: true,
  dragCssProps: {
    touchAction: 'pan-y',
    userSelect: '',
    userDrag: '',
    tapHighlightColor: '',
    touchCallout: '',
    contentZooming: '',
  },
});
```

## dragPlaceholder

If you want a placeholder item to appear for the duration of an item's drag & drop procedure you can enable and configure it here. The placeholder animation duration is fetched from the grid's `layoutDuration` option and easing from the grid's `layoutEasing` option. Note that a special placeholder class is given to all drag placeholders and is customizable via [itemPlaceholderClass](#itemplaceholderclass-) option.

- Default value:
  ```javascript
  {
    enabled: false,
    createElement: null,
    onCreate: null,
    onRemove: null
  }
  ```
- Accepted types: object.

You can define the following properties:

- **enabled** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - Is the placeholder enabled?
- **createElement** &nbsp;&mdash;&nbsp; _function / null_
  - Default value: `null`.
  - If defined, this method will be used to create the DOM element that is used for the placeholder. By default a new `div` element is created when a placeholder is summoned.
- **onCreate** &nbsp;&mdash;&nbsp; _function / null_
  - Default value: `null`.
  - An optional callback that will be called after a placeholder is created for an item.
- **onRemove** &nbsp;&mdash;&nbsp; _function / null_
  - Default value: `null`.
  - An optional callback that will be called after a placeholder is removed from the grid.

**Examples**

```javascript
// This example showcases how to pool placeholder elements
// for better performance and memory efficiency.
var phPool = [];
var phElem = document.createElement('div');
var grid = new Muuri(elem, {
  dragEnabled: true,
  dragPlaceholder: {
    enabled: true,
    createElement(item) {
      return phPool.pop() || phElem.cloneNode();
    },
    onCreate(item, element) {
      // If you want to do something after the
      // placeholder is fully created, here's
      // the place to do it.
    },
    onRemove(item, element) {
      phPool.push(element);
    },
  },
});
```

## dragAutoScroll

If you want to trigger scrolling on any element during dragging you can enable and configure it here. By default this feature is disabled. When you use this feature it is _highly_ recommended that you create a `fixed` positioned element right under `document.body` and use that as the `dragContainer` for all the dragged items. If you don't do this and a dragged item's parent is auto-scrolled, the dragged item will potentially grow the scrolled element's scroll area to infinity unintentionally.

- Default value:
  ```javascript
  {
    targets: [],
    handle: null,
    threshold: 50,
    safeZone: 0.2,
    speed: Muuri.AutoScroller.smoothSpeed(1000, 2000, 2500),
    sortDuringScroll: true,
    smoothStop: false,
    onStart: null,
    onStop: null
  }
  ```
- Accepted types: object.

You can define the following properties:

- **targets** &nbsp;&mdash;&nbsp; _array / function_
  - Default value: `[]`.
  - Define the DOM elements that should be scrolled during drag. As long as this array is empty there will be no scrolling during drag. To keep it simple you can just provide an array of elements here, in which case Muuri attempts to scroll the elements both vertically and horizontally when possible. If you want more fine-grained control, e.g. scroll an element only on specific axis or prioritize some element over another (handy for cases when there are overlapping elements), you can provide an array of scroll targets (objects). Finally, you can also provide a function which receives the dragged `item` instance as it's argument and which should return an array of scroll targets (elements and/or objects). This way you can provide different configurations for different items.
  - **scrollTarget** &nbsp;&mdash;&nbsp; _object_
    - **element** &nbsp;&mdash;&nbsp; _element_ / _window_
      - The DOM element to scroll.
      - Required.
    - **axis** &nbsp;&mdash;&nbsp; _number_
      - Optional. Defaults to scrolling both axes: `Muuri.AutoScroller.AXIS_X | Muuri.AutoScroller.AXIS_Y`.
      - To scroll only x-axis: `Muuri.AutoScroller.AXIS_X`.
      - To scroll only y-axis: `Muuri.AutoScroller.AXIS_Y`.
    - **priority** &nbsp;&mdash;&nbsp; _number_
      - Default: `0`.
      - A dragged item can only scroll one element horizontally and one element vertically simultaneously. This is an artificial limit to fend off unnecesary complexity, and to avoid awkward situations. In the case where the dragged item overlaps multiple scrollable elements simultaneously and exceeds their scroll thresholds we pick the one that the dragged item overlaps most. However, that's not always the best choice. This is where `priority` comes in. Here you can manually tell Muuri which element to prefer over another in these scenarios. The element with highest priority _always_ wins the fight, in matches with equal priority we determine the winner by the amount of overlap.
      - Optional.
    - **threshold** &nbsp;&mdash;&nbsp; _number / null_
      - Default: `null`.
      - If defined (a number is provided), this value will override the default threshold for _this scroll target_. Otherwise the default threshold will be used.
      - Optional.
- **handle** &nbsp;&mdash;&nbsp; _function / null_
  - Default value: `null`.
  - This property defines size and position of the handle (the rectangle that is compared against the scroll element's threshold). By default (when `null`) the dragged element's dimensions and offsets are used. However, you can provide a function which should return an object containing the handle's client offsets in pixels (`left` and `top`) and dimensions in pixels (`width` and `height`). The function has the following parameters:
    - **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - **itemClientX** &nbsp;&mdash;&nbsp; _number_
    - **itemClientY** &nbsp;&mdash;&nbsp; _number_
    - **itemWidth** &nbsp;&mdash;&nbsp; _number_
    - **itemHeight** &nbsp;&mdash;&nbsp; _number_
    - **pointerClientX** &nbsp;&mdash;&nbsp; _number_
    - **pointerClientY** &nbsp;&mdash;&nbsp; _number_
  - Tip: Use `Muuri.AutoScroller.pointerHandle(pointerSize)` utility method if you want to use the pointer (instead of the element) as the handle.
- **threshold** &nbsp;&mdash;&nbsp; _number_
  - Default value: `50`.
  - Defines the distance (in pixels) from the edge of the scrollable element when scrolling should start, in pixels. If this value is `0` the scrolling will start when the dragged element reaches the scrollable element's edge. Do note that Muuri dynamically adjusts the scroll element's _edge_ for the calculations (when needed).
- **safeZone** &nbsp;&mdash;&nbsp; _number_
  - Default value: `0.2`.
  - Defines the size of the minimum "safe zone" space, an area in the center of the scrollable element that will be guaranteed not trigger scrolling regardless of threshold size and the dragged item's size. This value is a percentage of the scrollable element's size (width and/or height depending on the scroll axes), and should be something between `0` and `1`. So in practice, if you set this to e.g `0.5` the safe zone would be 50% of the scrollable element's width and/or height.
- **speed** &nbsp;&mdash;&nbsp; _number / function_
  - Default value: `Muuri.AutoScroller.smoothSpeed(1000, 2000, 2500)`.
  - Defines the scrolling speed in pixels per second. You can provide either static speed with a `number` or dynamic speed with a `function`. The function is called before every scroll operation and should return the speed (`number`, pixels per second) for the next scroll operation. The function has the following parameters:
    - **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
      - The dragged `Muuri.Item` instance.
    - **scrollElement** &nbsp;&mdash;&nbsp; _element_ / _window_
      - The scrolled element.
    - **data** &nbsp;&mdash;&nbsp; _object_
      - **data.direction** &nbsp;&mdash;&nbsp; _number_
        - The direction of the scroll, one of the following: `Muuri.AutoScroller.LEFT`, `Muuri.AutoScroller.RIGHT`, `Muuri.AutoScroller.UP`, `Muuri.AutoScroller.DOWN`.
      - **data.threshold** &nbsp;&mdash;&nbsp; _number_
        - The current threshold in pixels.
      - **data.distance** &nbsp;&mdash;&nbsp; _number_
        - The handle rectangle's (as defined in `handle` option) current distance from the edge of the scroll element. E.g, if `direction` is `Muuri.AutoScroller.RIGHT` then distance is `scrollElement.getBoundingClientRect().right - handleRect.right`, and if `direction` is `Muuri.AutoScroller.LEFT` then distance is `handleRect.left - scrollElement.getBoundingClientRect().left`. Can be a negative value too.
      - **data.value** &nbsp;&mdash;&nbsp; _number_
        - The scroll element's current scroll value on the scrolled axis.
      - **data.maxValue** &nbsp;&mdash;&nbsp; _number_
        - The scroll element's maximum scroll value on the scrolled axis.
      - **data.duration** &nbsp;&mdash;&nbsp; _number_
        - How long (in milliseconds) this specific auto-scroll operation has lasted so far.
      - **data.speed** &nbsp;&mdash;&nbsp; _number_
        - The current speed as pixels per second.
      - **data.deltaTime** &nbsp;&mdash;&nbsp; _number_
        - `requestAnimationFrame`'s delta time (in milliseconds).
      - **data.isEnding** &nbsp;&mdash;&nbsp; _boolean_
        - Is the scroll process ending? When this is `true` it means that the associated drag item does not satisfy the threshold anymore. You should now start decreasing the speed towards `0` to allow the item to come to rest smoothly.
  - Pro tip: Use `Muuri.AutoScroller.smoothSpeed(maxSpeed, acceleration, deceleration)` for dynamic speed that provides a smooth scrolling experience. When executed it creates and returns a speed function which you can directly provide to `speed` option. The method has the following parameters:
    - **maxSpeed** &nbsp;&mdash;&nbsp; _number_
      - The maximum speed (pixels per second) when the handle's distance to the scroll target's edge is `0` or less.
    - **acceleration** &nbsp;&mdash;&nbsp; _number_
      - How fast the the speed may accelerate (pixels per second).
    - **deceleration** &nbsp;&mdash;&nbsp; _number_
      - How fast the the speed may decelerate (pixels per second).
- **sortDuringScroll** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `true`.
  - Should the grid items be sorted during auto-scroll or not?
- **smoothStop** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When a dragged item is moved out of the threshold area the scroll process is set to _ending_ state. However, it's up to you to decide if the actual scrolling motion is stopped gradually or instantly. By default, when this is `false`, scrolling will stop immediately. If you set this to `true` scrolling will continue until speed drops to `0`. When this option is `enabled` you _must_ handle decelerating the speed to `0` manually within `speed` function, so do not enable this option if you use a static speed value. The default `speed` function handles the deceleration automatically.
- **onStart** &nbsp;&mdash;&nbsp; _null / function_
  - Default value: `null`.
  - Optionally, you can provide a callback that will be called when an item starts auto-scrolling a scroll target. The callback function has the following parameters:
    - **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
      - The dragged `Muuri.Item` instance.
    - **scrollElement** &nbsp;&mdash;&nbsp; _element_ / _window_
      - The scrolled element.
    - **direction** &nbsp;&mdash;&nbsp; _number_
      - The direction of the scroll, one of the following: `Muuri.AutoScroller.LEFT`, `Muuri.AutoScroller.RIGHT`, `Muuri.AutoScroller.UP`, `Muuri.AutoScroller.DOWN`.
- **onStop** &nbsp;&mdash;&nbsp; _null / function_
  - Default value: `null`.
  - Optionally, you can provide a callback that will be called when an item stops auto-scrolling a scroll target. The callback function has the following parameters:
    - **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
      - The dragged `Muuri.Item` instance.
    - **scrollElement** &nbsp;&mdash;&nbsp; _element_ / _window_
      - The scrolled element.
    - **direction** &nbsp;&mdash;&nbsp; _number_
      - The direction of the scroll, one of the following: `Muuri.AutoScroller.LEFT`, `Muuri.AutoScroller.RIGHT`, `Muuri.AutoScroller.UP`, `Muuri.AutoScroller.DOWN`.

**Examples**

```javascript
// Create a fixed drag container for the dragged items, this is done with JS
// just for example's purposes.
var dragContainer = document.createElement('div');
dragContainer.style.position = 'fixed';
dragContainer.style.left = '0px';
dragContainer.style.top = '0px';
dragContainer.style.zIndex = 1000;
document.body.appendChild(dragContainer);
var grid = new Muuri(elem, {
  dragEnabled: true,
  dragContainer: dragContainer,
  dragAutoScroll: {
    targets: [
      // Scroll window on both x-axis and y-axis.
      { element: window, priority: 0 },
      // Scroll scrollElement (can be any scrollable element) on y-axis only,
      // and prefer it over window in conflict scenarios.
      { element: scrollElement, priority: 1, axis: Muuri.AutoScroller.AXIS_Y },
    ],
    // Let's use the dragged item element as the handle.
    handle: null,
    // Start auto-scroll when the distance from scroll target's edge to dragged
    // item is 40px or less.
    threshold: 40,
    // Make sure the inner 10% of the scroll target's area is always "safe zone"
    // which does not trigger auto-scroll.
    safeZone: 0.1,
    // Let's define smooth dynamic speed.
    // Max speed: 2000 pixels per second
    // Acceleration: 2700 pixels per second
    // Deceleration: 3200 pixels per second.
    speed: Muuri.AutoScroller.smoothSpeed(2000, 2700, 3200),
    // Let's not sort during scroll.
    sortDuringScroll: false,
    // Enable smooth stop.
    smoothStop: true,
    // Finally let's log some data when auto-scroll starts and stops.
    onStart: function (item, scrollElement, direction) {
      console.log('AUTOSCROLL STARTED', item, scrollElement, direction);
    },
    onStop: function (item, scrollElement, direction) {
      console.log('AUTOSCROLL STOPPED', item, scrollElement, direction);
    },
  },
});
```

## containerClass

Grid element's class name.

- Default value: `'muuri'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  containerClass: 'foo',
});
```

## itemClass

Item element's class name.

- Default value: `'muuri-item'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemClass: 'foo-item',
});
```

## itemVisibleClass

Visible item's class name.

- Default value: `'muuri-item-shown'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemVisibleClass: 'foo-item-shown',
});
```

## itemHiddenClass

Hidden item's class name.

- Default value: `'muuri-item-hidden'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemHiddenClass: 'foo-item-hidden',
});
```

## itemPositioningClass

This class name will be added to the item element for the duration of positioning.

- Default value: `'muuri-item-positioning'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemPositioningClass: 'foo-item-positioning',
});
```

## itemDraggingClass

This class name will be added to the item element for the duration of drag.

- Default value: `'muuri-item-dragging'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemDraggingClass: 'foo-item-dragging',
});
```

## itemReleasingClass

This class name will be added to the item element for the duration of release.

- Default value: `'muuri-item-releasing'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemReleasingClass: 'foo-item-releasing',
});
```

## itemPlaceholderClass

This class name will be added to the drag placeholder element.

- Default value: `'muuri-item-placeholder'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemPlaceholderClass: 'foo-item-placeholder',
});
```
````

## File: docs/index.md
````markdown
# Muuri Docs

You've stumbled on the official documentation site of [Muuri](https://muuri.dev), a JavaScript layout engine. Here you will find detailed API documentation, usage guides and some nifty examples.

Hopefully you'll find what you're looking for, but if not, please help us improve these docs. You can either [create an issue](https://github.com/haltu/muuri/issues/new) or submit a pull request on Muuri's repo.
````

## File: docs/item-methods.md
````markdown
# Item Methods

## getGrid

`item.getGrid()`

Get the grid instance the item belongs to.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

**Examples**

```javascript
const grid = item.getGrid();
```

## getElement

`item.getElement()`

Get the item element.

**Returns** &nbsp;&mdash;&nbsp; _element_

**Examples**

```javascript
const elem = item.getElement();
```

## getWidth

`item.getWidth()`

Get item element's cached width (in pixels). The returned value includes the element's paddings and borders.

**Returns** &nbsp;&mdash;&nbsp; _number_

**Examples**

```javascript
const width = item.getWidth();
```

## getHeight

`item.getWidth()`

Get item element's cached height (in pixels). The returned value includes the element's paddings and borders.

**Returns** &nbsp;&mdash;&nbsp; _number_

**Examples**

```javascript
const height = item.getHeight();
```

## getMargin

`item.getMargin()`

Get item element's cached margins (in pixels).

**Returns** &nbsp;&mdash;&nbsp; _object_

- **obj.left** &nbsp;&mdash;&nbsp; _number_
- **obj.right** &nbsp;&mdash;&nbsp; _number_
- **obj.top** &nbsp;&mdash;&nbsp; _number_
- **obj.bottom** &nbsp;&mdash;&nbsp; _number_

**Examples**

```javascript
const margin = item.getMargin();
```

## getPosition

`item.getPosition()`

Get item element's cached position (in pixels, relative to the grid element).

**Returns** &nbsp;&mdash;&nbsp; _object_

- **obj.left** &nbsp;&mdash;&nbsp; _number_
- **obj.top** &nbsp;&mdash;&nbsp; _number_

**Examples**

```javascript
const position = item.getPosition();
```

## isActive

`item.isActive()`

Check if the item is currently _active_. Only active items are considered to be part of the layout.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
const isActive = item.isActive();
```

## isVisible

`item.isVisible()`

Check if the item is currently _visible_.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
const isVisible = item.isVisible();
```

## isShowing

`item.isShowing()`

Check if the item is currently animating to visible.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
const isShowing = item.isShowing();
```

## isHiding

`item.isHiding()`

Check if the item is currently animating to hidden.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
const isHiding = item.isHiding();
```

## isPositioning

`item.isPositioning()`

Check if the item is currently being positioned.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
const isPositioning = item.isPositioning();
```

## isDragging

`item.isDragging()`

Check if the item is currently being dragged.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
const isDragging = item.isDragging();
```

## isReleasing

`item.isReleasing()`

Check if the item is currently being released.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
const isReleasing = item.isReleasing();
```

## isDestroyed

`item.isDestroyed()`

Check if the item is destroyed.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
const isDestroyed = item.isDestroyed();
```
````

## File: src/Animator/Animator.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getCurrentStyles from '../utils/getCurrentStyles';
import getUnprefixedPropName from '../utils/getUnprefixedPropName';
import isFunction from '../utils/isFunction';
import isNative from '../utils/isNative';
import setStyles from '../utils/setStyles';

var HAS_WEB_ANIMATIONS = !!(Element && isFunction(Element.prototype.animate));
var HAS_NATIVE_WEB_ANIMATIONS = !!(Element && isNative(Element.prototype.animate));

/**
 * Item animation handler powered by Web Animations API.
 *
 * @class
 * @param {HTMLElement} element
 */
function Animator(element) {
  this._element = element;
  this._animation = null;
  this._duration = 0;
  this._easing = '';
  this._callback = null;
  this._props = [];
  this._values = [];
  this._isDestroyed = false;
  this._onFinish = this._onFinish.bind(this);
}

/**
 * Public prototype methods
 * ************************
 */

/**
 * Start instance's animation. Automatically stops current animation if it is
 * running.
 *
 * @public
 * @param {Object} propsFrom
 * @param {Object} propsTo
 * @param {Object} [options]
 * @param {Number} [options.duration=300]
 * @param {String} [options.easing='ease']
 * @param {Function} [options.onFinish]
 */
Animator.prototype.start = function (propsFrom, propsTo, options) {
  if (this._isDestroyed) return;

  var element = this._element;
  var opts = options || {};

  // If we don't have web animations available let's not animate.
  if (!HAS_WEB_ANIMATIONS) {
    setStyles(element, propsTo);
    this._callback = isFunction(opts.onFinish) ? opts.onFinish : null;
    this._onFinish();
    return;
  }

  var animation = this._animation;
  var currentProps = this._props;
  var currentValues = this._values;
  var duration = opts.duration || 300;
  var easing = opts.easing || 'ease';
  var cancelAnimation = false;
  var propName, propCount, propIndex;

  // If we have an existing animation running, let's check if it needs to be
  // cancelled or if it can continue running.
  if (animation) {
    propCount = 0;

    // Cancel animation if duration or easing has changed.
    if (duration !== this._duration || easing !== this._easing) {
      cancelAnimation = true;
    }

    // Check if the requested animation target props and values match with the
    // current props and values.
    if (!cancelAnimation) {
      for (propName in propsTo) {
        ++propCount;
        propIndex = currentProps.indexOf(propName);
        if (propIndex === -1 || propsTo[propName] !== currentValues[propIndex]) {
          cancelAnimation = true;
          break;
        }
      }

      // Check if the target props count matches current props count. This is
      // needed for the edge case scenario where target props contain the same
      // styles as current props, but the current props have some additional
      // props.
      if (propCount !== currentProps.length) {
        cancelAnimation = true;
      }
    }
  }

  // Cancel animation (if required).
  if (cancelAnimation) animation.cancel();

  // Store animation callback.
  this._callback = isFunction(opts.onFinish) ? opts.onFinish : null;

  // If we have a running animation that does not need to be cancelled, let's
  // call it a day here and let it run.
  if (animation && !cancelAnimation) return;

  // Store target props and values to instance.
  currentProps.length = currentValues.length = 0;
  for (propName in propsTo) {
    currentProps.push(propName);
    currentValues.push(propsTo[propName]);
  }

  // Start the animation. We need to provide unprefixed property names to the
  // Web Animations polyfill if it is being used. If we have native Web
  // Animations available we need to provide prefixed properties instead.
  this._duration = duration;
  this._easing = easing;
  this._animation = element.animate(
    [
      createFrame(propsFrom, HAS_NATIVE_WEB_ANIMATIONS),
      createFrame(propsTo, HAS_NATIVE_WEB_ANIMATIONS),
    ],
    {
      duration: duration,
      easing: easing,
    }
  );
  this._animation.onfinish = this._onFinish;

  // Set the end styles. This makes sure that the element stays at the end
  // values after animation is finished.
  setStyles(element, propsTo);
};

/**
 * Stop instance's current animation if running.
 *
 * @public
 */
Animator.prototype.stop = function () {
  if (this._isDestroyed || !this._animation) return;
  this._animation.cancel();
  this._animation = this._callback = null;
  this._props.length = this._values.length = 0;
};

/**
 * Read the current values of the element's animated styles from the DOM.
 *
 * @public
 * @return {Object}
 */
Animator.prototype.getCurrentStyles = function () {
  return getCurrentStyles(element, currentProps);
};

/**
 * Check if the item is being animated currently.
 *
 * @public
 * @return {Boolean}
 */
Animator.prototype.isAnimating = function () {
  return !!this._animation;
};

/**
 * Destroy the instance and stop current animation if it is running.
 *
 * @public
 */
Animator.prototype.destroy = function () {
  if (this._isDestroyed) return;
  this.stop();
  this._element = null;
  this._isDestroyed = true;
};

/**
 * Private prototype methods
 * *************************
 */

/**
 * Animation end handler.
 *
 * @private
 */
Animator.prototype._onFinish = function () {
  var callback = this._callback;
  this._animation = this._callback = null;
  this._props.length = this._values.length = 0;
  callback && callback();
};

/**
 * Private helpers
 * ***************
 */

function createFrame(props, prefix) {
  var frame = {};
  for (var prop in props) {
    frame[prefix ? prop : getUnprefixedPropName(prop)] = props[prop];
  }
  return frame;
}

export default Animator;
````

## File: src/AutoScroller/AutoScroller.js
````javascript
/**
 * Muuri AutoScroller
 * Copyright (c) 2019-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/AutoScroller/LICENSE.md
 */

import { addAutoScrollTick, cancelAutoScrollTick } from '../ticker';
import { LEFT, RIGHT, UP, DOWN, AXIS_X, AXIS_Y, FORWARD, BACKWARD } from './constants';
import ScrollRequest from './ScrollRequest';
import ScrollAction from './ScrollAction';
import Pool from './Pool';
import getIntersectionScore from '../utils/getIntersectionScore';
import isFunction from '../utils/isFunction';
import {
  getScrollElement,
  getScrollLeft,
  getScrollTop,
  getScrollLeftMax,
  getScrollTopMax,
  getContentRect,
  getItemAutoScrollSettings,
  prepareItemScrollSync,
  applyItemScrollSync,
  computeThreshold,
} from './utils';

var RECT_1 = {
  width: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

var RECT_2 = {
  width: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

export default function AutoScroller() {
  this._isDestroyed = false;
  this._isTicking = false;
  this._tickTime = 0;
  this._tickDeltaTime = 0;
  this._items = [];
  this._actions = [];
  this._requests = {};
  this._requests[AXIS_X] = {};
  this._requests[AXIS_Y] = {};
  this._requestOverlapCheck = {};
  this._dragPositions = {};
  this._dragDirections = {};
  this._overlapCheckInterval = 150;

  this._requestPool = new Pool(
    function () {
      return new ScrollRequest();
    },
    function (request) {
      request.reset();
    }
  );

  this._actionPool = new Pool(
    function () {
      return new ScrollAction();
    },
    function (action) {
      action.reset();
    }
  );

  this._readTick = this._readTick.bind(this);
  this._writeTick = this._writeTick.bind(this);
}

AutoScroller.AXIS_X = AXIS_X;
AutoScroller.AXIS_Y = AXIS_Y;
AutoScroller.FORWARD = FORWARD;
AutoScroller.BACKWARD = BACKWARD;
AutoScroller.LEFT = LEFT;
AutoScroller.RIGHT = RIGHT;
AutoScroller.UP = UP;
AutoScroller.DOWN = DOWN;

AutoScroller.smoothSpeed = function (maxSpeed, acceleration, deceleration) {
  return function (item, element, data) {
    var targetSpeed = 0;
    if (!data.isEnding) {
      if (data.threshold > 0) {
        var factor = data.threshold - Math.max(0, data.distance);
        targetSpeed = (maxSpeed / data.threshold) * factor;
      } else {
        targetSpeed = maxSpeed;
      }
    }

    var currentSpeed = data.speed;
    var nextSpeed = targetSpeed;

    if (currentSpeed === targetSpeed) {
      return nextSpeed;
    }

    if (currentSpeed < targetSpeed) {
      nextSpeed = currentSpeed + acceleration * (data.deltaTime / 1000);
      return Math.min(targetSpeed, nextSpeed);
    } else {
      nextSpeed = currentSpeed - deceleration * (data.deltaTime / 1000);
      return Math.max(targetSpeed, nextSpeed);
    }
  };
};

AutoScroller.pointerHandle = function (pointerSize) {
  var rect = { left: 0, top: 0, width: 0, height: 0 };
  var size = pointerSize || 1;
  return function (item, x, y, w, h, pX, pY) {
    rect.left = pX - size * 0.5;
    rect.top = pY - size * 0.5;
    rect.width = size;
    rect.height = size;
    return rect;
  };
};

AutoScroller.prototype._readTick = function (time) {
  if (this._isDestroyed) return;
  if (time && this._tickTime) {
    this._tickDeltaTime = time - this._tickTime;
    this._tickTime = time;
    this._updateRequests();
    this._updateActions();
  } else {
    this._tickTime = time;
    this._tickDeltaTime = 0;
  }
};

AutoScroller.prototype._writeTick = function () {
  if (this._isDestroyed) return;
  this._applyActions();
  addAutoScrollTick(this._readTick, this._writeTick);
};

AutoScroller.prototype._startTicking = function () {
  this._isTicking = true;
  addAutoScrollTick(this._readTick, this._writeTick);
};

AutoScroller.prototype._stopTicking = function () {
  this._isTicking = false;
  this._tickTime = 0;
  this._tickDeltaTime = 0;
  cancelAutoScrollTick();
};

AutoScroller.prototype._getItemHandleRect = function (item, handle, rect) {
  var itemDrag = item._drag;

  if (handle) {
    var ev = itemDrag._dragMoveEvent || itemDrag._dragStartEvent;
    var data = handle(
      item,
      itemDrag._clientX,
      itemDrag._clientY,
      item._width,
      item._height,
      ev.clientX,
      ev.clientY
    );
    rect.left = data.left;
    rect.top = data.top;
    rect.width = data.width;
    rect.height = data.height;
  } else {
    rect.left = itemDrag._clientX;
    rect.top = itemDrag._clientY;
    rect.width = item._width;
    rect.height = item._height;
  }

  rect.right = rect.left + rect.width;
  rect.bottom = rect.top + rect.height;

  return rect;
};

AutoScroller.prototype._requestItemScroll = function (
  item,
  axis,
  element,
  direction,
  threshold,
  distance,
  maxValue
) {
  var reqMap = this._requests[axis];
  var request = reqMap[item._id];

  if (request) {
    if (request.element !== element || request.direction !== direction) {
      request.reset();
    }
  } else {
    request = this._requestPool.pick();
  }

  request.item = item;
  request.element = element;
  request.direction = direction;
  request.threshold = threshold;
  request.distance = distance;
  request.maxValue = maxValue;
  reqMap[item._id] = request;
};

AutoScroller.prototype._cancelItemScroll = function (item, axis) {
  var reqMap = this._requests[axis];
  var request = reqMap[item._id];
  if (!request) return;
  if (request.action) request.action.removeRequest(request);
  this._requestPool.release(request);
  delete reqMap[item._id];
};

AutoScroller.prototype._checkItemOverlap = function (item, checkX, checkY) {
  var settings = getItemAutoScrollSettings(item);
  var targets = isFunction(settings.targets) ? settings.targets(item) : settings.targets;
  var threshold = settings.threshold;
  var safeZone = settings.safeZone;

  if (!targets || !targets.length) {
    checkX && this._cancelItemScroll(item, AXIS_X);
    checkY && this._cancelItemScroll(item, AXIS_Y);
    return;
  }

  var dragDirections = this._dragDirections[item._id];
  var dragDirectionX = dragDirections[0];
  var dragDirectionY = dragDirections[1];

  if (!dragDirectionX && !dragDirectionY) {
    checkX && this._cancelItemScroll(item, AXIS_X);
    checkY && this._cancelItemScroll(item, AXIS_Y);
    return;
  }

  var itemRect = this._getItemHandleRect(item, settings.handle, RECT_1);
  var testRect = RECT_2;

  var target = null;
  var testElement = null;
  var testAxisX = true;
  var testAxisY = true;
  var testScore = 0;
  var testPriority = 0;
  var testThreshold = null;
  var testDirection = null;
  var testDistance = 0;
  var testMaxScrollX = 0;
  var testMaxScrollY = 0;

  var xElement = null;
  var xPriority = -Infinity;
  var xThreshold = 0;
  var xScore = 0;
  var xDirection = null;
  var xDistance = 0;
  var xMaxScroll = 0;

  var yElement = null;
  var yPriority = -Infinity;
  var yThreshold = 0;
  var yScore = 0;
  var yDirection = null;
  var yDistance = 0;
  var yMaxScroll = 0;

  for (var i = 0; i < targets.length; i++) {
    target = targets[i];
    testAxisX = checkX && dragDirectionX && target.axis !== AXIS_Y;
    testAxisY = checkY && dragDirectionY && target.axis !== AXIS_X;
    testPriority = target.priority || 0;

    // Ignore this item if it's x-axis and y-axis priority is lower than
    // the currently matching item's.
    if ((!testAxisX || testPriority < xPriority) && (!testAxisY || testPriority < yPriority)) {
      continue;
    }

    testElement = getScrollElement(target.element || target);
    testMaxScrollX = testAxisX ? getScrollLeftMax(testElement) : -1;
    testMaxScrollY = testAxisY ? getScrollTopMax(testElement) : -1;

    // Ignore this item if there is no possibility to scroll.
    if (!testMaxScrollX && !testMaxScrollY) continue;

    testRect = getContentRect(testElement, testRect);
    testScore = getIntersectionScore(itemRect, testRect);

    // Ignore this item if it's not overlapping at all with the dragged item.
    if (testScore <= 0) continue;

    // Test x-axis.
    if (
      testAxisX &&
      testPriority >= xPriority &&
      testMaxScrollX > 0 &&
      (testPriority > xPriority || testScore > xScore)
    ) {
      testDirection = null;
      testThreshold = computeThreshold(
        typeof target.threshold === 'number' ? target.threshold : threshold,
        safeZone,
        itemRect.width,
        testRect.width
      );
      if (dragDirectionX === RIGHT) {
        testDistance = testRect.right + testThreshold.offset - itemRect.right;
        if (testDistance <= testThreshold.value && getScrollLeft(testElement) < testMaxScrollX) {
          testDirection = RIGHT;
        }
      } else if (dragDirectionX === LEFT) {
        testDistance = itemRect.left - (testRect.left - testThreshold.offset);
        if (testDistance <= testThreshold.value && getScrollLeft(testElement) > 0) {
          testDirection = LEFT;
        }
      }

      if (testDirection !== null) {
        xElement = testElement;
        xPriority = testPriority;
        xThreshold = testThreshold.value;
        xScore = testScore;
        xDirection = testDirection;
        xDistance = testDistance;
        xMaxScroll = testMaxScrollX;
      }
    }

    // Test y-axis.
    if (
      testAxisY &&
      testPriority >= yPriority &&
      testMaxScrollY > 0 &&
      (testPriority > yPriority || testScore > yScore)
    ) {
      testDirection = null;
      testThreshold = computeThreshold(
        typeof target.threshold === 'number' ? target.threshold : threshold,
        safeZone,
        itemRect.height,
        testRect.height
      );
      if (dragDirectionY === DOWN) {
        testDistance = testRect.bottom + testThreshold.offset - itemRect.bottom;
        if (testDistance <= testThreshold.value && getScrollTop(testElement) < testMaxScrollY) {
          testDirection = DOWN;
        }
      } else if (dragDirectionY === UP) {
        testDistance = itemRect.top - (testRect.top - testThreshold.offset);
        if (testDistance <= testThreshold.value && getScrollTop(testElement) > 0) {
          testDirection = UP;
        }
      }

      if (testDirection !== null) {
        yElement = testElement;
        yPriority = testPriority;
        yThreshold = testThreshold.value;
        yScore = testScore;
        yDirection = testDirection;
        yDistance = testDistance;
        yMaxScroll = testMaxScrollY;
      }
    }
  }

  // Request or cancel x-axis scroll.
  if (checkX) {
    if (xElement) {
      this._requestItemScroll(
        item,
        AXIS_X,
        xElement,
        xDirection,
        xThreshold,
        xDistance,
        xMaxScroll
      );
    } else {
      this._cancelItemScroll(item, AXIS_X);
    }
  }

  // Request or cancel y-axis scroll.
  if (checkY) {
    if (yElement) {
      this._requestItemScroll(
        item,
        AXIS_Y,
        yElement,
        yDirection,
        yThreshold,
        yDistance,
        yMaxScroll
      );
    } else {
      this._cancelItemScroll(item, AXIS_Y);
    }
  }
};

AutoScroller.prototype._updateScrollRequest = function (scrollRequest) {
  var item = scrollRequest.item;
  var settings = getItemAutoScrollSettings(item);
  var targets = isFunction(settings.targets) ? settings.targets(item) : settings.targets;
  var targetCount = (targets && targets.length) || 0;
  var threshold = settings.threshold;
  var safeZone = settings.safeZone;
  var itemRect = this._getItemHandleRect(item, settings.handle, RECT_1);
  var testRect = RECT_2;
  var target = null;
  var testElement = null;
  var testIsAxisX = false;
  var testScore = null;
  var testThreshold = null;
  var testDistance = null;
  var testScroll = null;
  var testMaxScroll = null;
  var hasReachedEnd = null;

  for (var i = 0; i < targetCount; i++) {
    target = targets[i];

    // Make sure we have a matching element.
    testElement = getScrollElement(target.element || target);
    if (testElement !== scrollRequest.element) continue;

    // Make sure we have a matching axis.
    testIsAxisX = !!(AXIS_X & scrollRequest.direction);
    if (testIsAxisX) {
      if (target.axis === AXIS_Y) continue;
    } else {
      if (target.axis === AXIS_X) continue;
    }

    // Stop scrolling if there is no room to scroll anymore.
    testMaxScroll = testIsAxisX ? getScrollLeftMax(testElement) : getScrollTopMax(testElement);
    if (testMaxScroll <= 0) {
      break;
    }

    testRect = getContentRect(testElement, testRect);
    testScore = getIntersectionScore(itemRect, testRect);

    // Stop scrolling if dragged item is not overlapping with the scroll
    // element anymore.
    if (testScore <= 0) {
      break;
    }

    // Compute threshold and edge offset.
    testThreshold = computeThreshold(
      typeof target.threshold === 'number' ? target.threshold : threshold,
      safeZone,
      testIsAxisX ? itemRect.width : itemRect.height,
      testIsAxisX ? testRect.width : testRect.height
    );

    // Compute distance (based on current direction).
    if (scrollRequest.direction === LEFT) {
      testDistance = itemRect.left - (testRect.left - testThreshold.offset);
    } else if (scrollRequest.direction === RIGHT) {
      testDistance = testRect.right + testThreshold.offset - itemRect.right;
    } else if (scrollRequest.direction === UP) {
      testDistance = itemRect.top - (testRect.top - testThreshold.offset);
    } else {
      testDistance = testRect.bottom + testThreshold.offset - itemRect.bottom;
    }

    // Stop scrolling if threshold is not exceeded.
    if (testDistance > testThreshold.value) {
      break;
    }

    // Stop scrolling if we have reached the end of the scroll value.
    testScroll = testIsAxisX ? getScrollLeft(testElement) : getScrollTop(testElement);
    hasReachedEnd =
      FORWARD & scrollRequest.direction ? testScroll >= testMaxScroll : testScroll <= 0;
    if (hasReachedEnd) {
      break;
    }

    // Scrolling can continue, let's update the values.
    scrollRequest.maxValue = testMaxScroll;
    scrollRequest.threshold = testThreshold.value;
    scrollRequest.distance = testDistance;
    scrollRequest.isEnding = false;
    return true;
  }

  // Before we end the request, let's see if we need to stop the scrolling
  // smoothly or immediately.
  if (settings.smoothStop === true && scrollRequest.speed > 0) {
    if (hasReachedEnd === null) hasReachedEnd = scrollRequest.hasReachedEnd();
    scrollRequest.isEnding = hasReachedEnd ? false : true;
  } else {
    scrollRequest.isEnding = false;
  }

  return scrollRequest.isEnding;
};

AutoScroller.prototype._updateRequests = function () {
  var items = this._items;
  var requestsX = this._requests[AXIS_X];
  var requestsY = this._requests[AXIS_Y];
  var item, reqX, reqY, checkTime, needsCheck, checkX, checkY;

  for (var i = 0; i < items.length; i++) {
    item = items[i];
    checkTime = this._requestOverlapCheck[item._id];
    needsCheck = checkTime > 0 && this._tickTime - checkTime > this._overlapCheckInterval;

    checkX = true;
    reqX = requestsX[item._id];
    if (reqX && reqX.isActive) {
      checkX = !this._updateScrollRequest(reqX);
      if (checkX) {
        needsCheck = true;
        this._cancelItemScroll(item, AXIS_X);
      }
    }

    checkY = true;
    reqY = requestsY[item._id];
    if (reqY && reqY.isActive) {
      checkY = !this._updateScrollRequest(reqY);
      if (checkY) {
        needsCheck = true;
        this._cancelItemScroll(item, AXIS_Y);
      }
    }

    if (needsCheck) {
      this._requestOverlapCheck[item._id] = 0;
      this._checkItemOverlap(item, checkX, checkY);
    }
  }
};

AutoScroller.prototype._requestAction = function (request, axis) {
  var actions = this._actions;
  var isAxisX = axis === AXIS_X;
  var action = null;

  for (var i = 0; i < actions.length; i++) {
    action = actions[i];

    // If the action's request does not match the request's -> skip.
    if (request.element !== action.element) {
      action = null;
      continue;
    }

    // If the request and action share the same element, but the request slot
    // for the requested axis is already reserved let's ignore and cancel this
    // request.
    if (isAxisX ? action.requestX : action.requestY) {
      this._cancelItemScroll(request.item, axis);
      return;
    }

    // Seems like we have found our action, let's break the loop.
    break;
  }

  if (!action) action = this._actionPool.pick();
  action.element = request.element;
  action.addRequest(request);

  request.tick(this._tickDeltaTime);
  actions.push(action);
};

AutoScroller.prototype._updateActions = function () {
  var items = this._items;
  var requests = this._requests;
  var actions = this._actions;
  var itemId;
  var reqX;
  var reqY;
  var i;

  // Generate actions.
  for (i = 0; i < items.length; i++) {
    itemId = items[i]._id;
    reqX = requests[AXIS_X][itemId];
    reqY = requests[AXIS_Y][itemId];
    if (reqX) this._requestAction(reqX, AXIS_X);
    if (reqY) this._requestAction(reqY, AXIS_Y);
  }

  // Compute actions' scroll values.
  for (i = 0; i < actions.length; i++) {
    actions[i].computeScrollValues();
  }
};

AutoScroller.prototype._applyActions = function () {
  var actions = this._actions;
  var items = this._items;
  var i;

  // No actions -> no scrolling.
  if (!actions.length) return;

  // Scroll all the required elements.
  for (i = 0; i < actions.length; i++) {
    actions[i].scroll();
    this._actionPool.release(actions[i]);
  }

  // Reset actions.
  actions.length = 0;

  // Sync the item position immediately after all the auto-scrolling business is
  // finished. Without this procedure the items will jitter during auto-scroll
  // (in some cases at least) since the drag scroll handler is async (bound to
  // raf tick). Note that this procedure should not emit any dragScroll events,
  // because otherwise they would be emitted twice for the same event.
  for (i = 0; i < items.length; i++) prepareItemScrollSync(items[i]);
  for (i = 0; i < items.length; i++) applyItemScrollSync(items[i]);
};

AutoScroller.prototype._updateDragDirection = function (item) {
  var dragPositions = this._dragPositions[item._id];
  var dragDirections = this._dragDirections[item._id];
  var x1 = item._drag._left;
  var y1 = item._drag._top;
  if (dragPositions.length) {
    var x2 = dragPositions[0];
    var y2 = dragPositions[1];
    dragDirections[0] = x1 > x2 ? RIGHT : x1 < x2 ? LEFT : dragDirections[0] || 0;
    dragDirections[1] = y1 > y2 ? DOWN : y1 < y2 ? UP : dragDirections[1] || 0;
  }
  dragPositions[0] = x1;
  dragPositions[1] = y1;
};

AutoScroller.prototype.addItem = function (item) {
  if (this._isDestroyed) return;
  var index = this._items.indexOf(item);
  if (index === -1) {
    this._items.push(item);
    this._requestOverlapCheck[item._id] = this._tickTime;
    this._dragDirections[item._id] = [0, 0];
    this._dragPositions[item._id] = [];
    if (!this._isTicking) this._startTicking();
  }
};

AutoScroller.prototype.updateItem = function (item) {
  if (this._isDestroyed) return;

  // Make sure the item still exists in the auto-scroller.
  if (!this._dragDirections[item._id]) return;

  this._updateDragDirection(item);
  if (!this._requestOverlapCheck[item._id]) {
    this._requestOverlapCheck[item._id] = this._tickTime;
  }
};

AutoScroller.prototype.removeItem = function (item) {
  if (this._isDestroyed) return;

  var index = this._items.indexOf(item);
  if (index === -1) return;

  var itemId = item._id;

  var reqX = this._requests[AXIS_X][itemId];
  if (reqX) {
    this._cancelItemScroll(item, AXIS_X);
    delete this._requests[AXIS_X][itemId];
  }

  var reqY = this._requests[AXIS_Y][itemId];
  if (reqY) {
    this._cancelItemScroll(item, AXIS_Y);
    delete this._requests[AXIS_Y][itemId];
  }

  delete this._requestOverlapCheck[itemId];
  delete this._dragPositions[itemId];
  delete this._dragDirections[itemId];
  this._items.splice(index, 1);

  if (this._isTicking && !this._items.length) {
    this._stopTicking();
  }
};

AutoScroller.prototype.isItemScrollingX = function (item) {
  var reqX = this._requests[AXIS_X][item._id];
  return !!(reqX && reqX.isActive);
};

AutoScroller.prototype.isItemScrollingY = function (item) {
  var reqY = this._requests[AXIS_Y][item._id];
  return !!(reqY && reqY.isActive);
};

AutoScroller.prototype.isItemScrolling = function (item) {
  return this.isItemScrollingX(item) || this.isItemScrollingY(item);
};

AutoScroller.prototype.destroy = function () {
  if (this._isDestroyed) return;

  var items = this._items.slice(0);
  for (var i = 0; i < items.length; i++) {
    this.removeItem(items[i]);
  }

  this._actions.length = 0;
  this._requestPool.reset();
  this._actionPool.reset();

  this._isDestroyed = true;
};
````

## File: src/AutoScroller/constants.js
````javascript
/**
 * Muuri AutoScroller
 * Copyright (c) 2019-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/AutoScroller/LICENSE.md
 */

export var AXIS_X = 1;
export var AXIS_Y = 2;
export var FORWARD = 4;
export var BACKWARD = 8;
export var LEFT = AXIS_X | BACKWARD;
export var RIGHT = AXIS_X | FORWARD;
export var UP = AXIS_Y | BACKWARD;
export var DOWN = AXIS_Y | FORWARD;
````

## File: src/AutoScroller/LICENSE.md
````markdown
Copyright (c) 2019, Niklas Rämö

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: src/AutoScroller/Pool.js
````javascript
/**
 * Muuri AutoScroller
 * Copyright (c) 2019-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/AutoScroller/LICENSE.md
 */

export default function Pool(createItem, releaseItem) {
  this.pool = [];
  this.createItem = createItem;
  this.releaseItem = releaseItem;
}

Pool.prototype.pick = function () {
  return this.pool.pop() || this.createItem();
};

Pool.prototype.release = function (item) {
  this.releaseItem(item);
  if (this.pool.indexOf(item) !== -1) return;
  this.pool.push(item);
};

Pool.prototype.reset = function () {
  this.pool.length = 0;
};
````

## File: src/AutoScroller/ScrollAction.js
````javascript
/**
 * Muuri AutoScroller
 * Copyright (c) 2019-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/AutoScroller/LICENSE.md
 */

import { getScrollLeft, getScrollTop } from './utils';
import { AXIS_X } from './constants';

export default function ScrollAction() {
  this.element = null;
  this.requestX = null;
  this.requestY = null;
  this.scrollLeft = 0;
  this.scrollTop = 0;
}

ScrollAction.prototype.reset = function () {
  if (this.requestX) this.requestX.action = null;
  if (this.requestY) this.requestY.action = null;
  this.element = null;
  this.requestX = null;
  this.requestY = null;
  this.scrollLeft = 0;
  this.scrollTop = 0;
};

ScrollAction.prototype.addRequest = function (request) {
  if (AXIS_X & request.direction) {
    this.removeRequest(this.requestX);
    this.requestX = request;
  } else {
    this.removeRequest(this.requestY);
    this.requestY = request;
  }
  request.action = this;
};

ScrollAction.prototype.removeRequest = function (request) {
  if (!request) return;
  if (this.requestX === request) {
    this.requestX = null;
    request.action = null;
  } else if (this.requestY === request) {
    this.requestY = null;
    request.action = null;
  }
};

ScrollAction.prototype.computeScrollValues = function () {
  this.scrollLeft = this.requestX ? this.requestX.value : getScrollLeft(this.element);
  this.scrollTop = this.requestY ? this.requestY.value : getScrollTop(this.element);
};

ScrollAction.prototype.scroll = function () {
  var element = this.element;
  if (!element) return;

  if (element.scrollTo) {
    element.scrollTo(this.scrollLeft, this.scrollTop);
  } else {
    element.scrollLeft = this.scrollLeft;
    element.scrollTop = this.scrollTop;
  }
};
````

## File: src/AutoScroller/ScrollRequest.js
````javascript
/**
 * Muuri AutoScroller
 * Copyright (c) 2019-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/AutoScroller/LICENSE.md
 */

import isFunction from '../utils/isFunction';
import { AXIS_X, FORWARD } from './constants';
import { getScrollLeft, getScrollTop, getItemAutoScrollSettings } from './utils';

export default function ScrollRequest() {
  this.reset();
}

ScrollRequest.prototype.reset = function () {
  if (this.isActive) this.onStop();
  this.item = null;
  this.element = null;
  this.isActive = false;
  this.isEnding = false;
  this.direction = null;
  this.value = null;
  this.maxValue = 0;
  this.threshold = 0;
  this.distance = 0;
  this.speed = 0;
  this.duration = 0;
  this.action = null;
};

ScrollRequest.prototype.hasReachedEnd = function () {
  return FORWARD & this.direction ? this.value >= this.maxValue : this.value <= 0;
};

ScrollRequest.prototype.computeCurrentScrollValue = function () {
  if (this.value === null) {
    return AXIS_X & this.direction ? getScrollLeft(this.element) : getScrollTop(this.element);
  }
  return Math.max(0, Math.min(this.value, this.maxValue));
};

ScrollRequest.prototype.computeNextScrollValue = function (deltaTime) {
  var delta = this.speed * (deltaTime / 1000);
  var nextValue = FORWARD & this.direction ? this.value + delta : this.value - delta;
  return Math.max(0, Math.min(nextValue, this.maxValue));
};

ScrollRequest.prototype.computeSpeed = (function () {
  var data = {
    direction: null,
    threshold: 0,
    distance: 0,
    value: 0,
    maxValue: 0,
    deltaTime: 0,
    duration: 0,
    isEnding: false,
  };

  return function (deltaTime) {
    var item = this.item;
    var speed = getItemAutoScrollSettings(item).speed;

    if (isFunction(speed)) {
      data.direction = this.direction;
      data.threshold = this.threshold;
      data.distance = this.distance;
      data.value = this.value;
      data.maxValue = this.maxValue;
      data.duration = this.duration;
      data.speed = this.speed;
      data.deltaTime = deltaTime;
      data.isEnding = this.isEnding;
      return speed(item, this.element, data);
    } else {
      return speed;
    }
  };
})();

ScrollRequest.prototype.tick = function (deltaTime) {
  if (!this.isActive) {
    this.isActive = true;
    this.onStart();
  }
  this.value = this.computeCurrentScrollValue();
  this.speed = this.computeSpeed(deltaTime);
  this.value = this.computeNextScrollValue(deltaTime);
  this.duration += deltaTime;
  return this.value;
};

ScrollRequest.prototype.onStart = function () {
  var item = this.item;
  var onStart = getItemAutoScrollSettings(item).onStart;
  if (isFunction(onStart)) onStart(item, this.element, this.direction);
};

ScrollRequest.prototype.onStop = function () {
  var item = this.item;
  var onStop = getItemAutoScrollSettings(item).onStop;
  if (isFunction(onStop)) onStop(item, this.element, this.direction);
  // Manually nudge sort to happen. There's a good chance that the item is still
  // after the scroll stops which means that the next sort will be triggered
  // only after the item is moved or it's parent scrolled.
  if (item._drag) item._drag.sort();
};
````

## File: src/AutoScroller/utils.js
````javascript
/**
 * Muuri AutoScroller
 * Copyright (c) 2019-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/AutoScroller/LICENSE.md
 */

import getStyleAsFloat from '../utils/getStyleAsFloat';

var DOC_ELEM = document.documentElement;
var BODY = document.body;
var THRESHOLD_DATA = { value: 0, offset: 0 };

/**
 * @param {HTMLElement|Window} element
 * @returns {HTMLElement|Window}
 */
export function getScrollElement(element) {
  if (element === window || element === DOC_ELEM || element === BODY) {
    return window;
  } else {
    return element;
  }
}

/**
 * @param {HTMLElement|Window} element
 * @returns {Number}
 */
export function getScrollLeft(element) {
  return element === window ? element.pageXOffset : element.scrollLeft;
}

/**
 * @param {HTMLElement|Window} element
 * @returns {Number}
 */
export function getScrollTop(element) {
  return element === window ? element.pageYOffset : element.scrollTop;
}

/**
 * @param {HTMLElement|Window} element
 * @returns {Number}
 */
export function getScrollLeftMax(element) {
  if (element === window) {
    return DOC_ELEM.scrollWidth - DOC_ELEM.clientWidth;
  } else {
    return element.scrollWidth - element.clientWidth;
  }
}

/**
 * @param {HTMLElement|Window} element
 * @returns {Number}
 */
export function getScrollTopMax(element) {
  if (element === window) {
    return DOC_ELEM.scrollHeight - DOC_ELEM.clientHeight;
  } else {
    return element.scrollHeight - element.clientHeight;
  }
}

/**
 * Get window's or element's client rectangle data relative to the element's
 * content dimensions (includes inner size + padding, excludes scrollbars,
 * borders and margins).
 *
 * @param {HTMLElement|Window} element
 * @returns {Rectangle}
 */
export function getContentRect(element, result) {
  result = result || {};

  if (element === window) {
    result.width = DOC_ELEM.clientWidth;
    result.height = DOC_ELEM.clientHeight;
    result.left = 0;
    result.right = result.width;
    result.top = 0;
    result.bottom = result.height;
  } else {
    var bcr = element.getBoundingClientRect();
    var borderLeft = element.clientLeft || getStyleAsFloat(element, 'border-left-width');
    var borderTop = element.clientTop || getStyleAsFloat(element, 'border-top-width');
    result.width = element.clientWidth;
    result.height = element.clientHeight;
    result.left = bcr.left + borderLeft;
    result.right = result.left + result.width;
    result.top = bcr.top + borderTop;
    result.bottom = result.top + result.height;
  }

  return result;
}

/**
 * @param {Item} item
 * @returns {Object}
 */
export function getItemAutoScrollSettings(item) {
  return item._drag._getGrid()._settings.dragAutoScroll;
}

/**
 * @param {Item} item
 */
export function prepareItemScrollSync(item) {
  if (!item._drag) return;
  item._drag._prepareScroll();
}

/**
 * @param {Item} item
 */
export function applyItemScrollSync(item) {
  if (!item._drag || !item._isActive) return;
  var drag = item._drag;
  drag._scrollDiffX = drag._scrollDiffY = 0;
  item._setTranslate(drag._left, drag._top);
}

/**
 * Compute threshold value and edge offset.
 *
 * @param {Number} threshold
 * @param {Number} safeZone
 * @param {Number} itemSize
 * @param {Number} targetSize
 * @returns {Object}
 */
export function computeThreshold(threshold, safeZone, itemSize, targetSize) {
  THRESHOLD_DATA.value = Math.min(targetSize / 2, threshold);
  THRESHOLD_DATA.offset =
    Math.max(0, itemSize + THRESHOLD_DATA.value * 2 + targetSize * safeZone - targetSize) / 2;
  return THRESHOLD_DATA;
}
````

## File: src/Dragger/Dragger.js
````javascript
/**
 * Muuri Dragger
 * Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/Dragger/LICENSE.md
 */

import { HAS_TOUCH_EVENTS, HAS_POINTER_EVENTS, HAS_MS_POINTER_EVENTS } from '../constants';

import Emitter from '../Emitter/Emitter';
import EdgeHack from './EdgeHack';

import getPrefixedPropName from '../utils/getPrefixedPropName';
import hasPassiveEvents from '../utils/hasPassiveEvents';

var ua = window.navigator.userAgent.toLowerCase();
var isEdge = ua.indexOf('edge') > -1;
var isIE = ua.indexOf('trident') > -1;
var isFirefox = ua.indexOf('firefox') > -1;
var isAndroid = ua.indexOf('android') > -1;

var listenerOptions = hasPassiveEvents() ? { passive: true } : false;

var taProp = 'touchAction';
var taPropPrefixed = getPrefixedPropName(document.documentElement.style, taProp);
var taDefaultValue = 'auto';

/**
 * Creates a new Dragger instance for an element.
 *
 * @public
 * @class
 * @param {HTMLElement} element
 * @param {Object} [cssProps]
 */
function Dragger(element, cssProps) {
  this._element = element;
  this._emitter = new Emitter();
  this._isDestroyed = false;
  this._cssProps = {};
  this._touchAction = '';
  this._isActive = false;

  this._pointerId = null;
  this._startTime = 0;
  this._startX = 0;
  this._startY = 0;
  this._currentX = 0;
  this._currentY = 0;

  this._onStart = this._onStart.bind(this);
  this._onMove = this._onMove.bind(this);
  this._onCancel = this._onCancel.bind(this);
  this._onEnd = this._onEnd.bind(this);

  // Can't believe had to build a freaking class for a hack!
  this._edgeHack = null;
  if ((isEdge || isIE) && (HAS_POINTER_EVENTS || HAS_MS_POINTER_EVENTS)) {
    this._edgeHack = new EdgeHack(this);
  }

  // Apply initial CSS props.
  this.setCssProps(cssProps);

  // If touch action was not provided with initial CSS props let's assume it's
  // auto.
  if (!this._touchAction) {
    this.setTouchAction(taDefaultValue);
  }

  // Prevent native link/image dragging for the item and it's children.
  element.addEventListener('dragstart', Dragger._preventDefault, false);

  // Listen to start event.
  element.addEventListener(Dragger._inputEvents.start, this._onStart, listenerOptions);
}

/**
 * Protected properties
 * ********************
 */

Dragger._pointerEvents = {
  start: 'pointerdown',
  move: 'pointermove',
  cancel: 'pointercancel',
  end: 'pointerup',
};

Dragger._msPointerEvents = {
  start: 'MSPointerDown',
  move: 'MSPointerMove',
  cancel: 'MSPointerCancel',
  end: 'MSPointerUp',
};

Dragger._touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  cancel: 'touchcancel',
  end: 'touchend',
};

Dragger._mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  cancel: '',
  end: 'mouseup',
};

Dragger._inputEvents = (function () {
  if (HAS_TOUCH_EVENTS) return Dragger._touchEvents;
  if (HAS_POINTER_EVENTS) return Dragger._pointerEvents;
  if (HAS_MS_POINTER_EVENTS) return Dragger._msPointerEvents;
  return Dragger._mouseEvents;
})();

Dragger._emitter = new Emitter();

Dragger._emitterEvents = {
  start: 'start',
  move: 'move',
  end: 'end',
  cancel: 'cancel',
};

Dragger._activeInstances = [];

/**
 * Protected static methods
 * ************************
 */

Dragger._preventDefault = function (e) {
  if (e.preventDefault && e.cancelable !== false) e.preventDefault();
};

Dragger._activateInstance = function (instance) {
  var index = Dragger._activeInstances.indexOf(instance);
  if (index > -1) return;

  Dragger._activeInstances.push(instance);
  Dragger._emitter.on(Dragger._emitterEvents.move, instance._onMove);
  Dragger._emitter.on(Dragger._emitterEvents.cancel, instance._onCancel);
  Dragger._emitter.on(Dragger._emitterEvents.end, instance._onEnd);

  if (Dragger._activeInstances.length === 1) {
    Dragger._bindListeners();
  }
};

Dragger._deactivateInstance = function (instance) {
  var index = Dragger._activeInstances.indexOf(instance);
  if (index === -1) return;

  Dragger._activeInstances.splice(index, 1);
  Dragger._emitter.off(Dragger._emitterEvents.move, instance._onMove);
  Dragger._emitter.off(Dragger._emitterEvents.cancel, instance._onCancel);
  Dragger._emitter.off(Dragger._emitterEvents.end, instance._onEnd);

  if (!Dragger._activeInstances.length) {
    Dragger._unbindListeners();
  }
};

Dragger._bindListeners = function () {
  window.addEventListener(Dragger._inputEvents.move, Dragger._onMove, listenerOptions);
  window.addEventListener(Dragger._inputEvents.end, Dragger._onEnd, listenerOptions);
  if (Dragger._inputEvents.cancel) {
    window.addEventListener(Dragger._inputEvents.cancel, Dragger._onCancel, listenerOptions);
  }
};

Dragger._unbindListeners = function () {
  window.removeEventListener(Dragger._inputEvents.move, Dragger._onMove, listenerOptions);
  window.removeEventListener(Dragger._inputEvents.end, Dragger._onEnd, listenerOptions);
  if (Dragger._inputEvents.cancel) {
    window.removeEventListener(Dragger._inputEvents.cancel, Dragger._onCancel, listenerOptions);
  }
};

Dragger._getEventPointerId = function (event) {
  // If we have pointer id available let's use it.
  if (typeof event.pointerId === 'number') {
    return event.pointerId;
  }

  // For touch events let's get the first changed touch's identifier.
  if (event.changedTouches) {
    return event.changedTouches[0] ? event.changedTouches[0].identifier : null;
  }

  // For mouse/other events let's provide a static id.
  return 1;
};

Dragger._getTouchById = function (event, id) {
  // If we have a pointer event return the whole event if there's a match, and
  // null otherwise.
  if (typeof event.pointerId === 'number') {
    return event.pointerId === id ? event : null;
  }

  // For touch events let's check if there's a changed touch object that matches
  // the pointerId in which case return the touch object.
  if (event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i++) {
      if (event.changedTouches[i].identifier === id) {
        return event.changedTouches[i];
      }
    }
    return null;
  }

  // For mouse/other events let's assume there's only one pointer and just
  // return the event.
  return event;
};

Dragger._onMove = function (e) {
  Dragger._emitter.emit(Dragger._emitterEvents.move, e);
};

Dragger._onCancel = function (e) {
  Dragger._emitter.emit(Dragger._emitterEvents.cancel, e);
};

Dragger._onEnd = function (e) {
  Dragger._emitter.emit(Dragger._emitterEvents.end, e);
};

/**
 * Private prototype methods
 * *************************
 */

/**
 * Reset current drag operation (if any).
 *
 * @private
 */
Dragger.prototype._reset = function () {
  this._pointerId = null;
  this._startTime = 0;
  this._startX = 0;
  this._startY = 0;
  this._currentX = 0;
  this._currentY = 0;
  this._isActive = false;
  Dragger._deactivateInstance(this);
};

/**
 * Create a custom dragger event from a raw event.
 *
 * @private
 * @param {String} type
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 * @returns {Object}
 */
Dragger.prototype._createEvent = function (type, e) {
  var touch = this._getTrackedTouch(e);
  return {
    // Hammer.js compatibility interface.
    type: type,
    srcEvent: e,
    distance: this.getDistance(),
    deltaX: this.getDeltaX(),
    deltaY: this.getDeltaY(),
    deltaTime: type === Dragger._emitterEvents.start ? 0 : this.getDeltaTime(),
    isFirst: type === Dragger._emitterEvents.start,
    isFinal: type === Dragger._emitterEvents.end || type === Dragger._emitterEvents.cancel,
    pointerType: e.pointerType || (e.touches ? 'touch' : 'mouse'),
    // Partial Touch API interface.
    identifier: this._pointerId,
    screenX: touch.screenX,
    screenY: touch.screenY,
    clientX: touch.clientX,
    clientY: touch.clientY,
    pageX: touch.pageX,
    pageY: touch.pageY,
    target: touch.target,
  };
};

/**
 * Emit a raw event as dragger event internally.
 *
 * @private
 * @param {String} type
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 */
Dragger.prototype._emit = function (type, e) {
  this._emitter.emit(type, this._createEvent(type, e));
};

/**
 * If the provided event is a PointerEvent this method will return it if it has
 * the same pointerId as the instance. If the provided event is a TouchEvent
 * this method will try to look for a Touch instance in the changedTouches that
 * has an identifier matching this instance's pointerId. If the provided event
 * is a MouseEvent (or just any other event than PointerEvent or TouchEvent)
 * it will be returned immediately.
 *
 * @private
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 * @returns {?(Touch|PointerEvent|MouseEvent)}
 */
Dragger.prototype._getTrackedTouch = function (e) {
  if (this._pointerId === null) return null;
  return Dragger._getTouchById(e, this._pointerId);
};

/**
 * Handler for start event.
 *
 * @private
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 */
Dragger.prototype._onStart = function (e) {
  if (this._isDestroyed) return;

  // If pointer id is already assigned let's return early.
  if (this._pointerId !== null) return;

  // Get (and set) pointer id.
  this._pointerId = Dragger._getEventPointerId(e);
  if (this._pointerId === null) return;

  // Setup initial data and emit start event.
  var touch = this._getTrackedTouch(e);
  this._startX = this._currentX = touch.clientX;
  this._startY = this._currentY = touch.clientY;
  this._startTime = Date.now();
  this._isActive = true;
  this._emit(Dragger._emitterEvents.start, e);

  // If the drag procedure was not reset within the start procedure let's
  // activate the instance (start listening to move/cancel/end events).
  if (this._isActive) {
    Dragger._activateInstance(this);
  }
};

/**
 * Handler for move event.
 *
 * @private
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 */
Dragger.prototype._onMove = function (e) {
  var touch = this._getTrackedTouch(e);
  if (!touch) return;
  this._currentX = touch.clientX;
  this._currentY = touch.clientY;
  this._emit(Dragger._emitterEvents.move, e);
};

/**
 * Handler for cancel event.
 *
 * @private
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 */
Dragger.prototype._onCancel = function (e) {
  if (!this._getTrackedTouch(e)) return;
  this._emit(Dragger._emitterEvents.cancel, e);
  this._reset();
};

/**
 * Handler for end event.
 *
 * @private
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 */
Dragger.prototype._onEnd = function (e) {
  if (!this._getTrackedTouch(e)) return;
  this._emit(Dragger._emitterEvents.end, e);
  this._reset();
};

/**
 * Public prototype methods
 * ************************
 */

/**
 * Check if the element is being dragged at the moment.
 *
 * @public
 * @returns {Boolean}
 */
Dragger.prototype.isActive = function () {
  return this._isActive;
};

/**
 * Set element's touch-action CSS property.
 *
 * @public
 * @param {String} value
 */
Dragger.prototype.setTouchAction = function (value) {
  // Store unmodified touch action value (we trust user input here).
  this._touchAction = value;

  // Set touch-action style.
  if (taPropPrefixed) {
    this._cssProps[taPropPrefixed] = '';
    this._element.style[taPropPrefixed] = value;
  }

  // If we have an unsupported touch-action value let's add a special listener
  // that prevents default action on touch start event. A dirty hack, but best
  // we can do for now. The other options would be to somehow polyfill the
  // unsupported touch action behavior with custom heuristics which sounds like
  // a can of worms. We do a special exception here for Firefox Android which's
  // touch-action does not work properly if the dragged element is moved in the
  // the DOM tree on touchstart.
  if (HAS_TOUCH_EVENTS) {
    this._element.removeEventListener(Dragger._touchEvents.start, Dragger._preventDefault, true);
    if (this._element.style[taPropPrefixed] !== value || (isFirefox && isAndroid)) {
      this._element.addEventListener(Dragger._touchEvents.start, Dragger._preventDefault, true);
    }
  }
};

/**
 * Update element's CSS properties. Accepts an object with camel cased style
 * props with value pairs as it's first argument.
 *
 * @public
 * @param {Object} [newProps]
 */
Dragger.prototype.setCssProps = function (newProps) {
  if (!newProps) return;

  var currentProps = this._cssProps;
  var element = this._element;
  var prop;
  var prefixedProp;

  // Reset current props.
  for (prop in currentProps) {
    element.style[prop] = currentProps[prop];
    delete currentProps[prop];
  }

  // Set new props.
  for (prop in newProps) {
    // Make sure we have a value for the prop.
    if (!newProps[prop]) continue;

    // Special handling for touch-action.
    if (prop === taProp) {
      this.setTouchAction(newProps[prop]);
      continue;
    }

    // Get prefixed prop and skip if it does not exist.
    prefixedProp = getPrefixedPropName(element.style, prop);
    if (!prefixedProp) continue;

    // Store the prop and add the style.
    currentProps[prefixedProp] = '';
    element.style[prefixedProp] = newProps[prop];
  }
};

/**
 * How much the pointer has moved on x-axis from start position, in pixels.
 * Positive value indicates movement from left to right.
 *
 * @public
 * @returns {Number}
 */
Dragger.prototype.getDeltaX = function () {
  return this._currentX - this._startX;
};

/**
 * How much the pointer has moved on y-axis from start position, in pixels.
 * Positive value indicates movement from top to bottom.
 *
 * @public
 * @returns {Number}
 */
Dragger.prototype.getDeltaY = function () {
  return this._currentY - this._startY;
};

/**
 * How far (in pixels) has pointer moved from start position.
 *
 * @public
 * @returns {Number}
 */
Dragger.prototype.getDistance = function () {
  var x = this.getDeltaX();
  var y = this.getDeltaY();
  return Math.sqrt(x * x + y * y);
};

/**
 * How long has pointer been dragged.
 *
 * @public
 * @returns {Number}
 */
Dragger.prototype.getDeltaTime = function () {
  return this._startTime ? Date.now() - this._startTime : 0;
};

/**
 * Bind drag event listeners.
 *
 * @public
 * @param {String} eventName
 *   - 'start', 'move', 'cancel' or 'end'.
 * @param {Function} listener
 */
Dragger.prototype.on = function (eventName, listener) {
  this._emitter.on(eventName, listener);
};

/**
 * Unbind drag event listeners.
 *
 * @public
 * @param {String} eventName
 *   - 'start', 'move', 'cancel' or 'end'.
 * @param {Function} listener
 */
Dragger.prototype.off = function (eventName, listener) {
  this._emitter.off(eventName, listener);
};

/**
 * Destroy the instance and unbind all drag event listeners.
 *
 * @public
 */
Dragger.prototype.destroy = function () {
  if (this._isDestroyed) return;

  var element = this._element;

  if (this._edgeHack) this._edgeHack.destroy();

  // Reset data and deactivate the instance.
  this._reset();

  // Destroy emitter.
  this._emitter.destroy();

  // Unbind event handlers.
  element.removeEventListener(Dragger._inputEvents.start, this._onStart, listenerOptions);
  element.removeEventListener('dragstart', Dragger._preventDefault, false);
  element.removeEventListener(Dragger._touchEvents.start, Dragger._preventDefault, true);

  // Reset styles.
  for (var prop in this._cssProps) {
    element.style[prop] = this._cssProps[prop];
    delete this._cssProps[prop];
  }

  // Reset data.
  this._element = null;

  // Mark as destroyed.
  this._isDestroyed = true;
};

export default Dragger;
````

## File: src/Dragger/EdgeHack.js
````javascript
/**
 * Muuri Dragger
 * Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/Dragger/LICENSE.md
 */

import { HAS_POINTER_EVENTS, HAS_MS_POINTER_EVENTS } from '../constants';

var pointerout = HAS_POINTER_EVENTS ? 'pointerout' : HAS_MS_POINTER_EVENTS ? 'MSPointerOut' : '';
var waitDuration = 100;

/**
 * If you happen to use Edge or IE on a touch capable device there is a
 * a specific case where pointercancel and pointerend events are never emitted,
 * even though one them should always be emitted when you release your finger
 * from the screen. The bug appears specifically when Muuri shifts the dragged
 * element's position in the DOM after pointerdown event, IE and Edge don't like
 * that behaviour and quite often forget to emit the pointerend/pointercancel
 * event. But, they do emit pointerout event so we utilize that here.
 * Specifically, if there has been no pointermove event within 100 milliseconds
 * since the last pointerout event we force cancel the drag operation. This hack
 * works surprisingly well 99% of the time. There is that 1% chance there still
 * that dragged items get stuck but it is what it is.
 *
 * @class
 * @param {Dragger} dragger
 */
function EdgeHack(dragger) {
  if (!pointerout) return;

  this._dragger = dragger;
  this._timeout = null;
  this._outEvent = null;
  this._isActive = false;

  this._addBehaviour = this._addBehaviour.bind(this);
  this._removeBehaviour = this._removeBehaviour.bind(this);
  this._onTimeout = this._onTimeout.bind(this);
  this._resetData = this._resetData.bind(this);
  this._onStart = this._onStart.bind(this);
  this._onOut = this._onOut.bind(this);

  this._dragger.on('start', this._onStart);
}

/**
 * @private
 */
EdgeHack.prototype._addBehaviour = function () {
  if (this._isActive) return;
  this._isActive = true;
  this._dragger.on('move', this._resetData);
  this._dragger.on('cancel', this._removeBehaviour);
  this._dragger.on('end', this._removeBehaviour);
  window.addEventListener(pointerout, this._onOut);
};

/**
 * @private
 */
EdgeHack.prototype._removeBehaviour = function () {
  if (!this._isActive) return;
  this._dragger.off('move', this._resetData);
  this._dragger.off('cancel', this._removeBehaviour);
  this._dragger.off('end', this._removeBehaviour);
  window.removeEventListener(pointerout, this._onOut);
  this._resetData();
  this._isActive = false;
};

/**
 * @private
 */
EdgeHack.prototype._resetData = function () {
  window.clearTimeout(this._timeout);
  this._timeout = null;
  this._outEvent = null;
};

/**
 * @private
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 */
EdgeHack.prototype._onStart = function (e) {
  if (e.pointerType === 'mouse') return;
  this._addBehaviour();
};

/**
 * @private
 * @param {(PointerEvent|TouchEvent|MouseEvent)} e
 */
EdgeHack.prototype._onOut = function (e) {
  if (!this._dragger._getTrackedTouch(e)) return;
  this._resetData();
  this._outEvent = e;
  this._timeout = window.setTimeout(this._onTimeout, waitDuration);
};

/**
 * @private
 */
EdgeHack.prototype._onTimeout = function () {
  var e = this._outEvent;
  this._resetData();
  if (this._dragger.isActive()) this._dragger._onCancel(e);
};

/**
 * @public
 */
EdgeHack.prototype.destroy = function () {
  if (!pointerout) return;
  this._dragger.off('start', this._onStart);
  this._removeBehaviour();
};

export default EdgeHack;
````

## File: src/Dragger/LICENSE.md
````markdown
Copyright (c) 2018, Niklas Rämö

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: src/Emitter/Emitter.js
````javascript
/**
 * Muuri Emitter
 * Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/Emitter/LICENSE.md
 */

/**
 * Event emitter constructor.
 *
 * @class
 */
function Emitter() {
  this._events = {};
  this._queue = [];
  this._counter = 0;
  this._clearOnEmit = false;
}

/**
 * Public prototype methods
 * ************************
 */

/**
 * Bind an event listener.
 *
 * @public
 * @param {String} event
 * @param {Function} listener
 * @returns {Emitter}
 */
Emitter.prototype.on = function (event, listener) {
  if (!this._events || !event || !listener) return this;

  // Get listeners queue and create it if it does not exist.
  var listeners = this._events[event];
  if (!listeners) listeners = this._events[event] = [];

  // Add the listener to the queue.
  listeners.push(listener);

  return this;
};

/**
 * Unbind all event listeners that match the provided listener function.
 *
 * @public
 * @param {String} event
 * @param {Function} listener
 * @returns {Emitter}
 */
Emitter.prototype.off = function (event, listener) {
  if (!this._events || !event || !listener) return this;

  // Get listeners and return immediately if none is found.
  var listeners = this._events[event];
  if (!listeners || !listeners.length) return this;

  // Remove all matching listeners.
  var index;
  while ((index = listeners.indexOf(listener)) !== -1) {
    listeners.splice(index, 1);
  }

  return this;
};

/**
 * Unbind all listeners of the provided event.
 *
 * @public
 * @param {String} event
 * @returns {Emitter}
 */
Emitter.prototype.clear = function (event) {
  if (!this._events || !event) return this;

  var listeners = this._events[event];
  if (listeners) {
    listeners.length = 0;
    delete this._events[event];
  }

  return this;
};

/**
 * Emit all listeners in a specified event with the provided arguments.
 *
 * @public
 * @param {String} event
 * @param {...*} [args]
 * @returns {Emitter}
 */
Emitter.prototype.emit = function (event) {
  if (!this._events || !event) {
    this._clearOnEmit = false;
    return this;
  }

  // Get event listeners and quit early if there's no listeners.
  var listeners = this._events[event];
  if (!listeners || !listeners.length) {
    this._clearOnEmit = false;
    return this;
  }

  var queue = this._queue;
  var startIndex = queue.length;
  var argsLength = arguments.length - 1;
  var args;

  // If we have more than 3 arguments let's put the arguments in an array and
  // apply it to the listeners.
  if (argsLength > 3) {
    args = [];
    args.push.apply(args, arguments);
    args.shift();
  }

  // Add the current listeners to the callback queue before we process them.
  // This is necessary to guarantee that all of the listeners are called in
  // correct order even if new event listeners are removed/added during
  // processing and/or events are emitted during processing.
  queue.push.apply(queue, listeners);

  // Reset the event's listeners if need be.
  if (this._clearOnEmit) {
    listeners.length = 0;
    this._clearOnEmit = false;
  }

  // Increment queue counter. This is needed for the scenarios where emit is
  // triggered while the queue is already processing. We need to keep track of
  // how many "queue processors" there are active so that we can safely reset
  // the queue in the end when the last queue processor is finished.
  ++this._counter;

  // Process the queue (the specific part of it for this emit).
  var i = startIndex;
  var endIndex = queue.length;
  for (; i < endIndex; i++) {
    // prettier-ignore
    argsLength === 0 ? queue[i]() :
    argsLength === 1 ? queue[i](arguments[1]) :
    argsLength === 2 ? queue[i](arguments[1], arguments[2]) :
    argsLength === 3 ? queue[i](arguments[1], arguments[2], arguments[3]) :
                       queue[i].apply(null, args);

    // Stop processing if the emitter is destroyed.
    if (!this._events) return this;
  }

  // Decrement queue process counter.
  --this._counter;

  // Reset the queue if there are no more queue processes running.
  if (!this._counter) queue.length = 0;

  return this;
};

/**
 * Emit all listeners in a specified event with the provided arguments and
 * remove the event's listeners just before calling the them. This method allows
 * the emitter to serve as a queue where all listeners are called only once.
 *
 * @public
 * @param {String} event
 * @param {...*} [args]
 * @returns {Emitter}
 */
Emitter.prototype.burst = function () {
  if (!this._events) return this;
  this._clearOnEmit = true;
  this.emit.apply(this, arguments);
  return this;
};

/**
 * Check how many listeners there are for a specific event.
 *
 * @public
 * @param {String} event
 * @returns {Boolean}
 */
Emitter.prototype.countListeners = function (event) {
  if (!this._events) return 0;
  var listeners = this._events[event];
  return listeners ? listeners.length : 0;
};

/**
 * Destroy emitter instance. Basically just removes all bound listeners.
 *
 * @public
 * @returns {Emitter}
 */
Emitter.prototype.destroy = function () {
  if (!this._events) return this;
  this._queue.length = this._counter = 0;
  this._events = null;
  return this;
};

export default Emitter;
````

## File: src/Emitter/LICENSE.md
````markdown
Copyright (c) 2018, Niklas Rämö

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: src/Grid/Grid.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import {
  ACTION_MOVE,
  ACTION_SWAP,
  EVENT_SYNCHRONIZE,
  EVENT_LAYOUT_START,
  EVENT_LAYOUT_ABORT,
  EVENT_LAYOUT_END,
  EVENT_ADD,
  EVENT_REMOVE,
  EVENT_SHOW_START,
  EVENT_SHOW_END,
  EVENT_HIDE_START,
  EVENT_HIDE_END,
  EVENT_FILTER,
  EVENT_SORT,
  EVENT_MOVE,
  EVENT_DESTROY,
  GRID_INSTANCES,
  ITEM_ELEMENT_MAP,
  MAX_SAFE_FLOAT32_INTEGER,
} from '../constants';

import Item from '../Item/Item';
import ItemDrag from '../Item/ItemDrag';
import ItemDragPlaceholder from '../Item/ItemDragPlaceholder';
import ItemLayout from '../Item/ItemLayout';
import ItemMigrate from '../Item/ItemMigrate';
import ItemDragRelease from '../Item/ItemDragRelease';
import ItemVisibility from '../Item/ItemVisibility';
import Emitter from '../Emitter/Emitter';
import Animator from '../Animator/Animator';
import Packer from '../Packer/Packer';
import Dragger from '../Dragger/Dragger';
import AutoScroller from '../AutoScroller/AutoScroller';

import addClass from '../utils/addClass';
import arrayInsert from '../utils/arrayInsert';
import arrayMove from '../utils/arrayMove';
import arraySwap from '../utils/arraySwap';
import createUid from '../utils/createUid';
import debounce from '../utils/debounce';
import elementMatches from '../utils/elementMatches';
import getPrefixedPropName from '../utils/getPrefixedPropName';
import getStyle from '../utils/getStyle';
import getStyleAsFloat from '../utils/getStyleAsFloat';
import isFunction from '../utils/isFunction';
import isNodeList from '../utils/isNodeList';
import isPlainObject from '../utils/isPlainObject';
import noop from '../utils/noop';
import removeClass from '../utils/removeClass';
import setStyles from '../utils/setStyles';
import toArray from '../utils/toArray';

var NUMBER_TYPE = 'number';
var STRING_TYPE = 'string';
var INSTANT_LAYOUT = 'instant';
var layoutId = 0;

/**
 * Creates a new Grid instance.
 *
 * @class
 * @param {(HTMLElement|String)} element
 * @param {Object} [options]
 * @param {(String|HTMLElement[]|NodeList|HTMLCollection)} [options.items="*"]
 * @param {Number} [options.showDuration=300]
 * @param {String} [options.showEasing="ease"]
 * @param {Object} [options.visibleStyles={opacity: "1", transform: "scale(1)"}]
 * @param {Number} [options.hideDuration=300]
 * @param {String} [options.hideEasing="ease"]
 * @param {Object} [options.hiddenStyles={opacity: "0", transform: "scale(0.5)"}]
 * @param {(Function|Object)} [options.layout]
 * @param {Boolean} [options.layout.fillGaps=false]
 * @param {Boolean} [options.layout.horizontal=false]
 * @param {Boolean} [options.layout.alignRight=false]
 * @param {Boolean} [options.layout.alignBottom=false]
 * @param {Boolean} [options.layout.rounding=false]
 * @param {(Boolean|Number)} [options.layoutOnResize=150]
 * @param {Boolean} [options.layoutOnInit=true]
 * @param {Number} [options.layoutDuration=300]
 * @param {String} [options.layoutEasing="ease"]
 * @param {?Object} [options.sortData=null]
 * @param {Boolean} [options.dragEnabled=false]
 * @param {?String} [options.dragHandle=null]
 * @param {?HtmlElement} [options.dragContainer=null]
 * @param {?Function} [options.dragStartPredicate]
 * @param {Number} [options.dragStartPredicate.distance=0]
 * @param {Number} [options.dragStartPredicate.delay=0]
 * @param {String} [options.dragAxis="xy"]
 * @param {(Boolean|Function)} [options.dragSort=true]
 * @param {Object} [options.dragSortHeuristics]
 * @param {Number} [options.dragSortHeuristics.sortInterval=100]
 * @param {Number} [options.dragSortHeuristics.minDragDistance=10]
 * @param {Number} [options.dragSortHeuristics.minBounceBackAngle=1]
 * @param {(Function|Object)} [options.dragSortPredicate]
 * @param {Number} [options.dragSortPredicate.threshold=50]
 * @param {String} [options.dragSortPredicate.action="move"]
 * @param {String} [options.dragSortPredicate.migrateAction="move"]
 * @param {Object} [options.dragRelease]
 * @param {Number} [options.dragRelease.duration=300]
 * @param {String} [options.dragRelease.easing="ease"]
 * @param {Boolean} [options.dragRelease.useDragContainer=true]
 * @param {Object} [options.dragCssProps]
 * @param {Object} [options.dragPlaceholder]
 * @param {Boolean} [options.dragPlaceholder.enabled=false]
 * @param {?Function} [options.dragPlaceholder.createElement=null]
 * @param {?Function} [options.dragPlaceholder.onCreate=null]
 * @param {?Function} [options.dragPlaceholder.onRemove=null]
 * @param {Object} [options.dragAutoScroll]
 * @param {(Function|Array)} [options.dragAutoScroll.targets=[]]
 * @param {?Function} [options.dragAutoScroll.handle=null]
 * @param {Number} [options.dragAutoScroll.threshold=50]
 * @param {Number} [options.dragAutoScroll.safeZone=0.2]
 * @param {(Function|Number)} [options.dragAutoScroll.speed]
 * @param {Boolean} [options.dragAutoScroll.sortDuringScroll=true]
 * @param {Boolean} [options.dragAutoScroll.smoothStop=false]
 * @param {?Function} [options.dragAutoScroll.onStart=null]
 * @param {?Function} [options.dragAutoScroll.onStop=null]
 * @param {String} [options.containerClass="muuri"]
 * @param {String} [options.itemClass="muuri-item"]
 * @param {String} [options.itemVisibleClass="muuri-item-visible"]
 * @param {String} [options.itemHiddenClass="muuri-item-hidden"]
 * @param {String} [options.itemPositioningClass="muuri-item-positioning"]
 * @param {String} [options.itemDraggingClass="muuri-item-dragging"]
 * @param {String} [options.itemReleasingClass="muuri-item-releasing"]
 * @param {String} [options.itemPlaceholderClass="muuri-item-placeholder"]
 */
function Grid(element, options) {
  // Allow passing element as selector string
  if (typeof element === STRING_TYPE) {
    element = document.querySelector(element);
  }

  // Throw an error if the container element is not body element or does not
  // exist within the body element.
  var isElementInDom = element.getRootNode
    ? element.getRootNode({ composed: true }) === document
    : document.body.contains(element);
  if (!isElementInDom || element === document.documentElement) {
    throw new Error('Container element must be an existing DOM element.');
  }

  // Create instance settings by merging the options with default options.
  var settings = mergeSettings(Grid.defaultOptions, options);
  settings.visibleStyles = normalizeStyles(settings.visibleStyles);
  settings.hiddenStyles = normalizeStyles(settings.hiddenStyles);
  if (!isFunction(settings.dragSort)) {
    settings.dragSort = !!settings.dragSort;
  }

  this._id = createUid();
  this._element = element;
  this._settings = settings;
  this._isDestroyed = false;
  this._items = [];
  this._layout = {
    id: 0,
    items: [],
    slots: [],
  };
  this._isLayoutFinished = true;
  this._nextLayoutData = null;
  this._emitter = new Emitter();
  this._onLayoutDataReceived = this._onLayoutDataReceived.bind(this);

  // Store grid instance to the grid instances collection.
  GRID_INSTANCES[this._id] = this;

  // Add container element's class name.
  addClass(element, settings.containerClass);

  // If layoutOnResize option is a valid number sanitize it and bind the resize
  // handler.
  bindLayoutOnResize(this, settings.layoutOnResize);

  // Add initial items.
  this.add(getInitialGridElements(element, settings.items), { layout: false });

  // Layout on init if necessary.
  if (settings.layoutOnInit) {
    this.layout(true);
  }
}

/**
 * Public properties
 * *****************
 */

/**
 * @public
 * @static
 * @see Item
 */
Grid.Item = Item;

/**
 * @public
 * @static
 * @see ItemLayout
 */
Grid.ItemLayout = ItemLayout;

/**
 * @public
 * @static
 * @see ItemVisibility
 */
Grid.ItemVisibility = ItemVisibility;

/**
 * @public
 * @static
 * @see ItemMigrate
 */
Grid.ItemMigrate = ItemMigrate;

/**
 * @public
 * @static
 * @see ItemDrag
 */
Grid.ItemDrag = ItemDrag;

/**
 * @public
 * @static
 * @see ItemDragRelease
 */
Grid.ItemDragRelease = ItemDragRelease;

/**
 * @public
 * @static
 * @see ItemDragPlaceholder
 */
Grid.ItemDragPlaceholder = ItemDragPlaceholder;

/**
 * @public
 * @static
 * @see Emitter
 */
Grid.Emitter = Emitter;

/**
 * @public
 * @static
 * @see Animator
 */
Grid.Animator = Animator;

/**
 * @public
 * @static
 * @see Dragger
 */
Grid.Dragger = Dragger;

/**
 * @public
 * @static
 * @see Packer
 */
Grid.Packer = Packer;

/**
 * @public
 * @static
 * @see AutoScroller
 */
Grid.AutoScroller = AutoScroller;

/**
 * The default Packer instance used by default for all layouts.
 *
 * @public
 * @static
 * @type {Packer}
 */
Grid.defaultPacker = new Packer(2);

/**
 * Default options for Grid instance.
 *
 * @public
 * @static
 * @type {Object}
 */
Grid.defaultOptions = {
  // Initial item elements
  items: '*',

  // Default show animation
  showDuration: 300,
  showEasing: 'ease',

  // Default hide animation
  hideDuration: 300,
  hideEasing: 'ease',

  // Item's visible/hidden state styles
  visibleStyles: {
    opacity: '1',
    transform: 'scale(1)',
  },
  hiddenStyles: {
    opacity: '0',
    transform: 'scale(0.5)',
  },

  // Layout
  layout: {
    fillGaps: false,
    horizontal: false,
    alignRight: false,
    alignBottom: false,
    rounding: false,
  },
  layoutOnResize: 150,
  layoutOnInit: true,
  layoutDuration: 300,
  layoutEasing: 'ease',

  // Sorting
  sortData: null,

  // Drag & Drop
  dragEnabled: false,
  dragContainer: null,
  dragHandle: null,
  dragStartPredicate: {
    distance: 0,
    delay: 0,
  },
  dragAxis: 'xy',
  dragSort: true,
  dragSortHeuristics: {
    sortInterval: 100,
    minDragDistance: 10,
    minBounceBackAngle: 1,
  },
  dragSortPredicate: {
    threshold: 50,
    action: ACTION_MOVE,
    migrateAction: ACTION_MOVE,
  },
  dragRelease: {
    duration: 300,
    easing: 'ease',
    useDragContainer: true,
  },
  dragCssProps: {
    touchAction: 'none',
    userSelect: 'none',
    userDrag: 'none',
    tapHighlightColor: 'rgba(0, 0, 0, 0)',
    touchCallout: 'none',
    contentZooming: 'none',
  },
  dragPlaceholder: {
    enabled: false,
    createElement: null,
    onCreate: null,
    onRemove: null,
  },
  dragAutoScroll: {
    targets: [],
    handle: null,
    threshold: 50,
    safeZone: 0.2,
    speed: AutoScroller.smoothSpeed(1000, 2000, 2500),
    sortDuringScroll: true,
    smoothStop: false,
    onStart: null,
    onStop: null,
  },

  // Classnames
  containerClass: 'muuri',
  itemClass: 'muuri-item',
  itemVisibleClass: 'muuri-item-shown',
  itemHiddenClass: 'muuri-item-hidden',
  itemPositioningClass: 'muuri-item-positioning',
  itemDraggingClass: 'muuri-item-dragging',
  itemReleasingClass: 'muuri-item-releasing',
  itemPlaceholderClass: 'muuri-item-placeholder',
};

/**
 * Public prototype methods
 * ************************
 */

/**
 * Bind an event listener.
 *
 * @public
 * @param {String} event
 * @param {Function} listener
 * @returns {Grid}
 */
Grid.prototype.on = function (event, listener) {
  this._emitter.on(event, listener);
  return this;
};

/**
 * Unbind an event listener.
 *
 * @public
 * @param {String} event
 * @param {Function} listener
 * @returns {Grid}
 */
Grid.prototype.off = function (event, listener) {
  this._emitter.off(event, listener);
  return this;
};

/**
 * Get the container element.
 *
 * @public
 * @returns {HTMLElement}
 */
Grid.prototype.getElement = function () {
  return this._element;
};

/**
 * Get instance's item by element or by index. Target can also be an Item
 * instance in which case the function returns the item if it exists within
 * related Grid instance. If nothing is found with the provided target, null
 * is returned.
 *
 * @private
 * @param {(HtmlElement|Number|Item)} [target]
 * @returns {?Item}
 */
Grid.prototype.getItem = function (target) {
  // If no target is specified or the instance is destroyed, return null.
  if (this._isDestroyed || (!target && target !== 0)) {
    return null;
  }

  // If target is number return the item in that index. If the number is lower
  // than zero look for the item starting from the end of the items array. For
  // example -1 for the last item, -2 for the second last item, etc.
  if (typeof target === NUMBER_TYPE) {
    return this._items[target > -1 ? target : this._items.length + target] || null;
  }

  // If the target is an instance of Item return it if it is attached to this
  // Grid instance, otherwise return null.
  if (target instanceof Item) {
    return target._gridId === this._id ? target : null;
  }

  // In other cases let's assume that the target is an element, so let's try
  // to find an item that matches the element and return it. If item is not
  // found return null.
  if (ITEM_ELEMENT_MAP) {
    var item = ITEM_ELEMENT_MAP.get(target);
    return item && item._gridId === this._id ? item : null;
  } else {
    for (var i = 0; i < this._items.length; i++) {
      if (this._items[i]._element === target) {
        return this._items[i];
      }
    }
  }

  return null;
};

/**
 * Get all items. Optionally you can provide specific targets (elements,
 * indices and item instances). All items that are not found are omitted from
 * the returned array.
 *
 * @public
 * @param {(HtmlElement|Number|Item|Array)} [targets]
 * @returns {Item[]}
 */
Grid.prototype.getItems = function (targets) {
  // Return all items immediately if no targets were provided or if the
  // instance is destroyed.
  if (this._isDestroyed || targets === undefined) {
    return this._items.slice(0);
  }

  var items = [];
  var i, item;

  if (Array.isArray(targets) || isNodeList(targets)) {
    for (i = 0; i < targets.length; i++) {
      item = this.getItem(targets[i]);
      if (item) items.push(item);
    }
  } else {
    item = this.getItem(targets);
    if (item) items.push(item);
  }

  return items;
};

/**
 * Update the cached dimensions of the instance's items. By default all the
 * items are refreshed, but you can also provide an array of target items as the
 * first argument if you want to refresh specific items. Note that all hidden
 * items are not refreshed by default since their "display" property is "none"
 * and their dimensions are therefore not readable from the DOM. However, if you
 * do want to force update hidden item dimensions too you can provide `true`
 * as the second argument, which makes the elements temporarily visible while
 * their dimensions are being read.
 *
 * @public
 * @param {Item[]} [items]
 * @param {Boolean} [force=false]
 * @returns {Grid}
 */
Grid.prototype.refreshItems = function (items, force) {
  if (this._isDestroyed) return this;

  var targets = items || this._items;
  var i, item, style, hiddenItemStyles;

  if (force === true) {
    hiddenItemStyles = [];
    for (i = 0; i < targets.length; i++) {
      item = targets[i];
      if (!item.isVisible() && !item.isHiding()) {
        style = item.getElement().style;
        style.visibility = 'hidden';
        style.display = '';
        hiddenItemStyles.push(style);
      }
    }
  }

  for (i = 0; i < targets.length; i++) {
    targets[i]._refreshDimensions(force);
  }

  if (force === true) {
    for (i = 0; i < hiddenItemStyles.length; i++) {
      style = hiddenItemStyles[i];
      style.visibility = '';
      style.display = 'none';
    }
    hiddenItemStyles.length = 0;
  }

  return this;
};

/**
 * Update the sort data of the instance's items. By default all the items are
 * refreshed, but you can also provide an array of target items if you want to
 * refresh specific items.
 *
 * @public
 * @param {Item[]} [items]
 * @returns {Grid}
 */
Grid.prototype.refreshSortData = function (items) {
  if (this._isDestroyed) return this;

  var targets = items || this._items;
  for (var i = 0; i < targets.length; i++) {
    targets[i]._refreshSortData();
  }

  return this;
};

/**
 * Synchronize the item elements to match the order of the items in the DOM.
 * This comes handy if you need to keep the DOM structure matched with the
 * order of the items. Note that if an item's element is not currently a child
 * of the container element (if it is dragged for example) it is ignored and
 * left untouched.
 *
 * @public
 * @returns {Grid}
 */
Grid.prototype.synchronize = function () {
  if (this._isDestroyed) return this;

  var items = this._items;
  if (!items.length) return this;

  var fragment;
  var element;

  for (var i = 0; i < items.length; i++) {
    element = items[i]._element;
    if (element.parentNode === this._element) {
      fragment = fragment || document.createDocumentFragment();
      fragment.appendChild(element);
    }
  }

  if (!fragment) return this;

  this._element.appendChild(fragment);
  this._emit(EVENT_SYNCHRONIZE);

  return this;
};

/**
 * Calculate and apply item positions.
 *
 * @public
 * @param {Boolean} [instant=false]
 * @param {Function} [onFinish]
 * @returns {Grid}
 */
Grid.prototype.layout = function (instant, onFinish) {
  if (this._isDestroyed) return this;

  // Cancel unfinished layout algorithm if possible.
  var unfinishedLayout = this._nextLayoutData;
  if (unfinishedLayout && isFunction(unfinishedLayout.cancel)) {
    unfinishedLayout.cancel();
  }

  // Compute layout id (let's stay in Float32 range).
  layoutId = (layoutId % MAX_SAFE_FLOAT32_INTEGER) + 1;
  var nextLayoutId = layoutId;

  // Store data for next layout.
  this._nextLayoutData = {
    id: nextLayoutId,
    instant: instant,
    onFinish: onFinish,
    cancel: null,
  };

  // Collect layout items (all active grid items).
  var items = this._items;
  var layoutItems = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i]._isActive) layoutItems.push(items[i]);
  }

  // Compute new layout.
  this._refreshDimensions();
  var gridWidth = this._width - this._borderLeft - this._borderRight;
  var gridHeight = this._height - this._borderTop - this._borderBottom;
  var layoutSettings = this._settings.layout;
  var cancelLayout;
  if (isFunction(layoutSettings)) {
    cancelLayout = layoutSettings(
      this,
      nextLayoutId,
      layoutItems,
      gridWidth,
      gridHeight,
      this._onLayoutDataReceived
    );
  } else {
    Grid.defaultPacker.setOptions(layoutSettings);
    cancelLayout = Grid.defaultPacker.createLayout(
      this,
      nextLayoutId,
      layoutItems,
      gridWidth,
      gridHeight,
      this._onLayoutDataReceived
    );
  }

  // Store layout cancel method if available.
  if (
    isFunction(cancelLayout) &&
    this._nextLayoutData &&
    this._nextLayoutData.id === nextLayoutId
  ) {
    this._nextLayoutData.cancel = cancelLayout;
  }

  return this;
};

/**
 * Add new items by providing the elements you wish to add to the instance and
 * optionally provide the index where you want the items to be inserted into.
 * All elements that are not already children of the container element will be
 * automatically appended to the container element. If an element has it's CSS
 * display property set to "none" it will be marked as inactive during the
 * initiation process. As long as the item is inactive it will not be part of
 * the layout, but it will retain it's index. You can activate items at any
 * point with grid.show() method. This method will automatically call
 * grid.layout() if one or more of the added elements are visible. If only
 * hidden items are added no layout will be called. All the new visible items
 * are positioned without animation during their first layout.
 *
 * @public
 * @param {(HTMLElement|HTMLElement[])} elements
 * @param {Object} [options]
 * @param {Number} [options.index=-1]
 * @param {Boolean} [options.active]
 * @param {(Boolean|Function|String)} [options.layout=true]
 * @returns {Item[]}
 */
Grid.prototype.add = function (elements, options) {
  if (this._isDestroyed || !elements) return [];

  var newItems = toArray(elements);
  if (!newItems.length) return newItems;

  var opts = options || {};
  var layout = opts.layout ? opts.layout : opts.layout === undefined;
  var items = this._items;
  var needsLayout = false;
  var fragment;
  var element;
  var item;
  var i;

  // Collect all the elements that are not child of the grid element into a
  // document fragment.
  for (i = 0; i < newItems.length; i++) {
    element = newItems[i];
    if (element.parentNode !== this._element) {
      fragment = fragment || document.createDocumentFragment();
      fragment.appendChild(element);
    }
  }

  // If we have a fragment, let's append it to the grid element. We could just
  // not do this and the `new Item()` instantiation would handle this for us,
  // but this way we can add the elements into the DOM a bit faster.
  if (fragment) {
    this._element.appendChild(fragment);
  }

  // Map provided elements into new grid items.
  for (i = 0; i < newItems.length; i++) {
    element = newItems[i];
    item = newItems[i] = new Item(this, element, opts.active);

    // If the item to be added is active, we need to do a layout. Also, we
    // need to mark the item with the skipNextAnimation flag to make it
    // position instantly (without animation) during the next layout. Without
    // the hack the item would animate to it's new position from the northwest
    // corner of the grid, which feels a bit buggy (imho).
    if (item._isActive) {
      needsLayout = true;
      item._layout._skipNextAnimation = true;
    }
  }

  // Set up the items' initial dimensions and sort data. This needs to be done
  // in a separate loop to avoid layout thrashing.
  for (i = 0; i < newItems.length; i++) {
    item = newItems[i];
    item._refreshDimensions();
    item._refreshSortData();
  }

  // Add the new items to the items collection to correct index.
  arrayInsert(items, newItems, opts.index);

  // Emit add event.
  if (this._hasListeners(EVENT_ADD)) {
    this._emit(EVENT_ADD, newItems.slice(0));
  }

  // If layout is needed.
  if (needsLayout && layout) {
    this.layout(layout === INSTANT_LAYOUT, isFunction(layout) ? layout : undefined);
  }

  return newItems;
};

/**
 * Remove items from the instance.
 *
 * @public
 * @param {Item[]} items
 * @param {Object} [options]
 * @param {Boolean} [options.removeElements=false]
 * @param {(Boolean|Function|String)} [options.layout=true]
 * @returns {Item[]}
 */
Grid.prototype.remove = function (items, options) {
  if (this._isDestroyed || !items.length) return [];

  var opts = options || {};
  var layout = opts.layout ? opts.layout : opts.layout === undefined;
  var needsLayout = false;
  var allItems = this.getItems();
  var targetItems = [];
  var indices = [];
  var index;
  var item;
  var i;

  // Remove the individual items.
  for (i = 0; i < items.length; i++) {
    item = items[i];
    if (item._isDestroyed) continue;

    index = this._items.indexOf(item);
    if (index === -1) continue;

    if (item._isActive) needsLayout = true;

    targetItems.push(item);
    indices.push(allItems.indexOf(item));
    item._destroy(opts.removeElements);
    this._items.splice(index, 1);
  }

  // Emit remove event.
  if (this._hasListeners(EVENT_REMOVE)) {
    this._emit(EVENT_REMOVE, targetItems.slice(0), indices);
  }

  // If layout is needed.
  if (needsLayout && layout) {
    this.layout(layout === INSTANT_LAYOUT, isFunction(layout) ? layout : undefined);
  }

  return targetItems;
};

/**
 * Show specific instance items.
 *
 * @public
 * @param {Item[]} items
 * @param {Object} [options]
 * @param {Boolean} [options.instant=false]
 * @param {Boolean} [options.syncWithLayout=true]
 * @param {Function} [options.onFinish]
 * @param {(Boolean|Function|String)} [options.layout=true]
 * @returns {Grid}
 */
Grid.prototype.show = function (items, options) {
  if (!this._isDestroyed && items.length) {
    this._setItemsVisibility(items, true, options);
  }
  return this;
};

/**
 * Hide specific instance items.
 *
 * @public
 * @param {Item[]} items
 * @param {Object} [options]
 * @param {Boolean} [options.instant=false]
 * @param {Boolean} [options.syncWithLayout=true]
 * @param {Function} [options.onFinish]
 * @param {(Boolean|Function|String)} [options.layout=true]
 * @returns {Grid}
 */
Grid.prototype.hide = function (items, options) {
  if (!this._isDestroyed && items.length) {
    this._setItemsVisibility(items, false, options);
  }
  return this;
};

/**
 * Filter items. Expects at least one argument, a predicate, which should be
 * either a function or a string. The predicate callback is executed for every
 * item in the instance. If the return value of the predicate is truthy the
 * item in question will be shown and otherwise hidden. The predicate callback
 * receives the item instance as it's argument. If the predicate is a string
 * it is considered to be a selector and it is checked against every item
 * element in the instance with the native element.matches() method. All the
 * matching items will be shown and others hidden.
 *
 * @public
 * @param {(Function|String)} predicate
 * @param {Object} [options]
 * @param {Boolean} [options.instant=false]
 * @param {Boolean} [options.syncWithLayout=true]
 * @param {FilterCallback} [options.onFinish]
 * @param {(Boolean|Function|String)} [options.layout=true]
 * @returns {Grid}
 */
Grid.prototype.filter = function (predicate, options) {
  if (this._isDestroyed || !this._items.length) return this;

  var itemsToShow = [];
  var itemsToHide = [];
  var isPredicateString = typeof predicate === STRING_TYPE;
  var isPredicateFn = isFunction(predicate);
  var opts = options || {};
  var isInstant = opts.instant === true;
  var syncWithLayout = opts.syncWithLayout;
  var layout = opts.layout ? opts.layout : opts.layout === undefined;
  var onFinish = isFunction(opts.onFinish) ? opts.onFinish : null;
  var tryFinishCounter = -1;
  var tryFinish = noop;
  var item;
  var i;

  // If we have onFinish callback, let's create proper tryFinish callback.
  if (onFinish) {
    tryFinish = function () {
      ++tryFinishCounter && onFinish(itemsToShow.slice(0), itemsToHide.slice(0));
    };
  }

  // Check which items need to be shown and which hidden.
  if (isPredicateFn || isPredicateString) {
    for (i = 0; i < this._items.length; i++) {
      item = this._items[i];
      if (isPredicateFn ? predicate(item) : elementMatches(item._element, predicate)) {
        itemsToShow.push(item);
      } else {
        itemsToHide.push(item);
      }
    }
  }

  // Show items that need to be shown.
  if (itemsToShow.length) {
    this.show(itemsToShow, {
      instant: isInstant,
      syncWithLayout: syncWithLayout,
      onFinish: tryFinish,
      layout: false,
    });
  } else {
    tryFinish();
  }

  // Hide items that need to be hidden.
  if (itemsToHide.length) {
    this.hide(itemsToHide, {
      instant: isInstant,
      syncWithLayout: syncWithLayout,
      onFinish: tryFinish,
      layout: false,
    });
  } else {
    tryFinish();
  }

  // If there are any items to filter.
  if (itemsToShow.length || itemsToHide.length) {
    // Emit filter event.
    if (this._hasListeners(EVENT_FILTER)) {
      this._emit(EVENT_FILTER, itemsToShow.slice(0), itemsToHide.slice(0));
    }

    // If layout is needed.
    if (layout) {
      this.layout(layout === INSTANT_LAYOUT, isFunction(layout) ? layout : undefined);
    }
  }

  return this;
};

/**
 * Sort items. There are three ways to sort the items. The first is simply by
 * providing a function as the comparer which works identically to native
 * array sort. Alternatively you can sort by the sort data you have provided
 * in the instance's options. Just provide the sort data key(s) as a string
 * (separated by space) and the items will be sorted based on the provided
 * sort data keys. Lastly you have the opportunity to provide a presorted
 * array of items which will be used to sync the internal items array in the
 * same order.
 *
 * @public
 * @param {(Function|String|Item[])} comparer
 * @param {Object} [options]
 * @param {Boolean} [options.descending=false]
 * @param {(Boolean|Function|String)} [options.layout=true]
 * @returns {Grid}
 */
Grid.prototype.sort = (function () {
  var sortComparer;
  var isDescending;
  var origItems;
  var indexMap;

  function defaultComparer(a, b) {
    var result = 0;
    var criteriaName;
    var criteriaOrder;
    var valA;
    var valB;

    // Loop through the list of sort criteria.
    for (var i = 0; i < sortComparer.length; i++) {
      // Get the criteria name, which should match an item's sort data key.
      criteriaName = sortComparer[i][0];
      criteriaOrder = sortComparer[i][1];

      // Get items' cached sort values for the criteria. If the item has no sort
      // data let's update the items sort data (this is a lazy load mechanism).
      valA = (a._sortData ? a : a._refreshSortData())._sortData[criteriaName];
      valB = (b._sortData ? b : b._refreshSortData())._sortData[criteriaName];

      // Sort the items in descending order if defined so explicitly. Otherwise
      // sort items in ascending order.
      if (criteriaOrder === 'desc' || (!criteriaOrder && isDescending)) {
        result = valB < valA ? -1 : valB > valA ? 1 : 0;
      } else {
        result = valA < valB ? -1 : valA > valB ? 1 : 0;
      }

      // If we have -1 or 1 as the return value, let's return it immediately.
      if (result) return result;
    }

    // If values are equal let's compare the item indices to make sure we
    // have a stable sort. Note that this is not necessary in evergreen browsers
    // because Array.sort() is nowadays stable. However, in order to guarantee
    // same results in older browsers we need this.
    if (!result) {
      if (!indexMap) indexMap = createIndexMap(origItems);
      result = isDescending ? compareIndexMap(indexMap, b, a) : compareIndexMap(indexMap, a, b);
    }
    return result;
  }

  function customComparer(a, b) {
    var result = isDescending ? -sortComparer(a, b) : sortComparer(a, b);
    if (!result) {
      if (!indexMap) indexMap = createIndexMap(origItems);
      result = isDescending ? compareIndexMap(indexMap, b, a) : compareIndexMap(indexMap, a, b);
    }
    return result;
  }

  return function (comparer, options) {
    if (this._isDestroyed || this._items.length < 2) return this;

    var items = this._items;
    var opts = options || {};
    var layout = opts.layout ? opts.layout : opts.layout === undefined;

    // Setup parent scope data.
    isDescending = !!opts.descending;
    origItems = items.slice(0);
    indexMap = null;

    // If function is provided do a native array sort.
    if (isFunction(comparer)) {
      sortComparer = comparer;
      items.sort(customComparer);
    }
    // Otherwise if we got a string, let's sort by the sort data as provided in
    // the instance's options.
    else if (typeof comparer === STRING_TYPE) {
      sortComparer = comparer
        .trim()
        .split(' ')
        .filter(function (val) {
          return val;
        })
        .map(function (val) {
          return val.split(':');
        });
      items.sort(defaultComparer);
    }
    // Otherwise if we got an array, let's assume it's a presorted array of the
    // items and order the items based on it. Here we blindly trust that the
    // presorted array consists of the same item instances as the current
    // `gird._items` array.
    else if (Array.isArray(comparer)) {
      items.length = 0;
      items.push.apply(items, comparer);
    }
    // Otherwise let's throw an error.
    else {
      sortComparer = isDescending = origItems = indexMap = null;
      throw new Error('Invalid comparer argument provided.');
    }

    // Emit sort event.
    if (this._hasListeners(EVENT_SORT)) {
      this._emit(EVENT_SORT, items.slice(0), origItems);
    }

    // If layout is needed.
    if (layout) {
      this.layout(layout === INSTANT_LAYOUT, isFunction(layout) ? layout : undefined);
    }

    // Reset data (to avoid mem leaks).
    sortComparer = isDescending = origItems = indexMap = null;

    return this;
  };
})();

/**
 * Move item to another index or in place of another item.
 *
 * @public
 * @param {(HtmlElement|Number|Item)} item
 * @param {(HtmlElement|Number|Item)} position
 * @param {Object} [options]
 * @param {String} [options.action="move"]
 *   - Accepts either "move" or "swap".
 *   - "move" moves the item in place of the other item.
 *   - "swap" swaps the position of the items.
 * @param {(Boolean|Function|String)} [options.layout=true]
 * @returns {Grid}
 */
Grid.prototype.move = function (item, position, options) {
  if (this._isDestroyed || this._items.length < 2) return this;

  var items = this._items;
  var opts = options || {};
  var layout = opts.layout ? opts.layout : opts.layout === undefined;
  var isSwap = opts.action === ACTION_SWAP;
  var action = isSwap ? ACTION_SWAP : ACTION_MOVE;
  var fromItem = this.getItem(item);
  var toItem = this.getItem(position);
  var fromIndex;
  var toIndex;

  // Make sure the items exist and are not the same.
  if (fromItem && toItem && fromItem !== toItem) {
    // Get the indices of the items.
    fromIndex = items.indexOf(fromItem);
    toIndex = items.indexOf(toItem);

    // Do the move/swap.
    if (isSwap) {
      arraySwap(items, fromIndex, toIndex);
    } else {
      arrayMove(items, fromIndex, toIndex);
    }

    // Emit move event.
    if (this._hasListeners(EVENT_MOVE)) {
      this._emit(EVENT_MOVE, {
        item: fromItem,
        fromIndex: fromIndex,
        toIndex: toIndex,
        action: action,
      });
    }

    // If layout is needed.
    if (layout) {
      this.layout(layout === INSTANT_LAYOUT, isFunction(layout) ? layout : undefined);
    }
  }

  return this;
};

/**
 * Send item to another Grid instance.
 *
 * @public
 * @param {(HtmlElement|Number|Item)} item
 * @param {Grid} targetGrid
 * @param {(HtmlElement|Number|Item)} position
 * @param {Object} [options]
 * @param {HTMLElement} [options.appendTo=document.body]
 * @param {(Boolean|Function|String)} [options.layoutSender=true]
 * @param {(Boolean|Function|String)} [options.layoutReceiver=true]
 * @returns {Grid}
 */
Grid.prototype.send = function (item, targetGrid, position, options) {
  if (this._isDestroyed || targetGrid._isDestroyed || this === targetGrid) return this;

  // Make sure we have a valid target item.
  item = this.getItem(item);
  if (!item) return this;

  var opts = options || {};
  var container = opts.appendTo || document.body;
  var layoutSender = opts.layoutSender ? opts.layoutSender : opts.layoutSender === undefined;
  var layoutReceiver = opts.layoutReceiver
    ? opts.layoutReceiver
    : opts.layoutReceiver === undefined;

  // Start the migration process.
  item._migrate.start(targetGrid, position, container);

  // If migration was started successfully and the item is active, let's layout
  // the grids.
  if (item._migrate._isActive && item._isActive) {
    if (layoutSender) {
      this.layout(
        layoutSender === INSTANT_LAYOUT,
        isFunction(layoutSender) ? layoutSender : undefined
      );
    }
    if (layoutReceiver) {
      targetGrid.layout(
        layoutReceiver === INSTANT_LAYOUT,
        isFunction(layoutReceiver) ? layoutReceiver : undefined
      );
    }
  }

  return this;
};

/**
 * Destroy the instance.
 *
 * @public
 * @param {Boolean} [removeElements=false]
 * @returns {Grid}
 */
Grid.prototype.destroy = function (removeElements) {
  if (this._isDestroyed) return this;

  var container = this._element;
  var items = this._items.slice(0);
  var layoutStyles = (this._layout && this._layout.styles) || {};
  var i, prop;

  // Unbind window resize event listener.
  unbindLayoutOnResize(this);

  // Destroy items.
  for (i = 0; i < items.length; i++) items[i]._destroy(removeElements);
  this._items.length = 0;

  // Restore container.
  removeClass(container, this._settings.containerClass);
  for (prop in layoutStyles) container.style[prop] = '';

  // Emit destroy event and unbind all events.
  this._emit(EVENT_DESTROY);
  this._emitter.destroy();

  // Remove reference from the grid instances collection.
  delete GRID_INSTANCES[this._id];

  // Flag instance as destroyed.
  this._isDestroyed = true;

  return this;
};

/**
 * Private prototype methods
 * *************************
 */

/**
 * Emit a grid event.
 *
 * @private
 * @param {String} event
 * @param {...*} [arg]
 */
Grid.prototype._emit = function () {
  if (this._isDestroyed) return;
  this._emitter.emit.apply(this._emitter, arguments);
};

/**
 * Check if there are any events listeners for an event.
 *
 * @private
 * @param {String} event
 * @returns {Boolean}
 */
Grid.prototype._hasListeners = function (event) {
  if (this._isDestroyed) return false;
  return this._emitter.countListeners(event) > 0;
};

/**
 * Update container's width, height and offsets.
 *
 * @private
 */
Grid.prototype._updateBoundingRect = function () {
  var element = this._element;
  var rect = element.getBoundingClientRect();
  this._width = rect.width;
  this._height = rect.height;
  this._left = rect.left;
  this._top = rect.top;
  this._right = rect.right;
  this._bottom = rect.bottom;
};

/**
 * Update container's border sizes.
 *
 * @private
 * @param {Boolean} left
 * @param {Boolean} right
 * @param {Boolean} top
 * @param {Boolean} bottom
 */
Grid.prototype._updateBorders = function (left, right, top, bottom) {
  var element = this._element;
  if (left) this._borderLeft = getStyleAsFloat(element, 'border-left-width');
  if (right) this._borderRight = getStyleAsFloat(element, 'border-right-width');
  if (top) this._borderTop = getStyleAsFloat(element, 'border-top-width');
  if (bottom) this._borderBottom = getStyleAsFloat(element, 'border-bottom-width');
};

/**
 * Refresh all of container's internal dimensions and offsets.
 *
 * @private
 */
Grid.prototype._refreshDimensions = function () {
  this._updateBoundingRect();
  this._updateBorders(1, 1, 1, 1);
  this._boxSizing = getStyle(this._element, 'box-sizing');
};

/**
 * Calculate and apply item positions.
 *
 * @private
 * @param {Object} layout
 */
Grid.prototype._onLayoutDataReceived = (function () {
  var itemsToLayout = [];
  return function (layout) {
    if (this._isDestroyed || !this._nextLayoutData || this._nextLayoutData.id !== layout.id) return;

    var grid = this;
    var instant = this._nextLayoutData.instant;
    var onFinish = this._nextLayoutData.onFinish;
    var numItems = layout.items.length;
    var counter = numItems;
    var item;
    var left;
    var top;
    var i;

    // Reset next layout data.
    this._nextLayoutData = null;

    if (!this._isLayoutFinished && this._hasListeners(EVENT_LAYOUT_ABORT)) {
      this._emit(EVENT_LAYOUT_ABORT, this._layout.items.slice(0));
    }

    // Update the layout reference.
    this._layout = layout;

    // Update the item positions and collect all items that need to be laid
    // out. It is critical that we update the item position _before_ the
    // layoutStart event as the new data might be needed in the callback.
    itemsToLayout.length = 0;
    for (i = 0; i < numItems; i++) {
      item = layout.items[i];

      // Make sure we have a matching item.
      if (!item) {
        --counter;
        continue;
      }

      // Get the item's new left and top values.
      left = layout.slots[i * 2];
      top = layout.slots[i * 2 + 1];

      // Let's skip the layout process if we can. Possibly avoids a lot of DOM
      // operations which saves us some CPU cycles.
      if (item._canSkipLayout(left, top)) {
        --counter;
        continue;
      }

      // Update the item's position.
      item._left = left;
      item._top = top;

      // Only active non-dragged items need to be moved.
      if (item.isActive() && !item.isDragging()) {
        itemsToLayout.push(item);
      } else {
        --counter;
      }
    }

    // Set layout styles to the grid element.
    if (layout.styles) {
      setStyles(this._element, layout.styles);
    }

    // layoutStart event is intentionally emitted after the container element's
    // dimensions are set, because otherwise there would be no hook for reacting
    // to container dimension changes.
    if (this._hasListeners(EVENT_LAYOUT_START)) {
      this._emit(EVENT_LAYOUT_START, layout.items.slice(0), instant === true);
      // Let's make sure that the current layout process has not been overridden
      // in the layoutStart event, and if so, let's stop processing the aborted
      // layout.
      if (this._layout.id !== layout.id) return;
    }

    var tryFinish = function () {
      if (--counter > 0) return;

      var hasLayoutChanged = grid._layout.id !== layout.id;
      var callback = isFunction(instant) ? instant : onFinish;

      if (!hasLayoutChanged) {
        grid._isLayoutFinished = true;
      }

      if (isFunction(callback)) {
        callback(layout.items.slice(0), hasLayoutChanged);
      }

      if (!hasLayoutChanged && grid._hasListeners(EVENT_LAYOUT_END)) {
        grid._emit(EVENT_LAYOUT_END, layout.items.slice(0));
      }
    };

    if (!itemsToLayout.length) {
      tryFinish();
      return this;
    }

    this._isLayoutFinished = false;

    for (i = 0; i < itemsToLayout.length; i++) {
      if (this._layout.id !== layout.id) break;
      itemsToLayout[i]._layout.start(instant === true, tryFinish);
    }

    if (this._layout.id === layout.id) {
      itemsToLayout.length = 0;
    }

    return this;
  };
})();

/**
 * Show or hide Grid instance's items.
 *
 * @private
 * @param {Item[]} items
 * @param {Boolean} toVisible
 * @param {Object} [options]
 * @param {Boolean} [options.instant=false]
 * @param {Boolean} [options.syncWithLayout=true]
 * @param {Function} [options.onFinish]
 * @param {(Boolean|Function|String)} [options.layout=true]
 */
Grid.prototype._setItemsVisibility = function (items, toVisible, options) {
  var grid = this;
  var targetItems = items.slice(0);
  var opts = options || {};
  var isInstant = opts.instant === true;
  var callback = opts.onFinish;
  var layout = opts.layout ? opts.layout : opts.layout === undefined;
  var counter = targetItems.length;
  var startEvent = toVisible ? EVENT_SHOW_START : EVENT_HIDE_START;
  var endEvent = toVisible ? EVENT_SHOW_END : EVENT_HIDE_END;
  var method = toVisible ? 'show' : 'hide';
  var needsLayout = false;
  var completedItems = [];
  var hiddenItems = [];
  var item;
  var i;

  // If there are no items call the callback, but don't emit any events.
  if (!counter) {
    if (isFunction(callback)) callback(targetItems);
    return;
  }

  // Prepare the items.
  for (i = 0; i < targetItems.length; i++) {
    item = targetItems[i];

    // If inactive item is shown or active item is hidden we need to do
    // layout.
    if ((toVisible && !item._isActive) || (!toVisible && item._isActive)) {
      needsLayout = true;
    }

    // If inactive item is shown we also need to do a little hack to make the
    // item not animate it's next positioning (layout).
    item._layout._skipNextAnimation = !!(toVisible && !item._isActive);

    // If a hidden item is being shown we need to refresh the item's
    // dimensions.
    if (toVisible && item._visibility._isHidden) {
      hiddenItems.push(item);
    }

    // Add item to layout or remove it from layout.
    if (toVisible) {
      item._addToLayout();
    } else {
      item._removeFromLayout();
    }
  }

  // Force refresh the dimensions of all hidden items.
  if (hiddenItems.length) {
    this.refreshItems(hiddenItems, true);
    hiddenItems.length = 0;
  }

  // Show the items in sync with the next layout.
  function triggerVisibilityChange() {
    if (needsLayout && opts.syncWithLayout !== false) {
      grid.off(EVENT_LAYOUT_START, triggerVisibilityChange);
    }

    if (grid._hasListeners(startEvent)) {
      grid._emit(startEvent, targetItems.slice(0));
    }

    for (i = 0; i < targetItems.length; i++) {
      // Make sure the item is still in the original grid. There is a chance
      // that the item starts migrating before tiggerVisibilityChange is called.
      if (targetItems[i]._gridId !== grid._id) {
        if (--counter < 1) {
          if (isFunction(callback)) callback(completedItems.slice(0));
          if (grid._hasListeners(endEvent)) grid._emit(endEvent, completedItems.slice(0));
        }
        continue;
      }

      targetItems[i]._visibility[method](isInstant, function (interrupted, item) {
        // If the current item's animation was not interrupted add it to the
        // completedItems array.
        if (!interrupted) completedItems.push(item);

        // If all items have finished their animations call the callback
        // and emit showEnd/hideEnd event.
        if (--counter < 1) {
          if (isFunction(callback)) callback(completedItems.slice(0));
          if (grid._hasListeners(endEvent)) grid._emit(endEvent, completedItems.slice(0));
        }
      });
    }
  }

  // Trigger the visibility change, either async with layout or instantly.
  if (needsLayout && opts.syncWithLayout !== false) {
    this.on(EVENT_LAYOUT_START, triggerVisibilityChange);
  } else {
    triggerVisibilityChange();
  }

  // Trigger layout if needed.
  if (needsLayout && layout) {
    this.layout(layout === INSTANT_LAYOUT, isFunction(layout) ? layout : undefined);
  }
};

/**
 * Private helpers
 * ***************
 */

/**
 * Merge default settings with user settings. The returned object is a new
 * object with merged values. The merging is a deep merge meaning that all
 * objects and arrays within the provided settings objects will be also merged
 * so that modifying the values of the settings object will have no effect on
 * the returned object.
 *
 * @param {Object} defaultSettings
 * @param {Object} [userSettings]
 * @returns {Object} Returns a new object.
 */
function mergeSettings(defaultSettings, userSettings) {
  // Create a fresh copy of default settings.
  var settings = mergeObjects({}, defaultSettings);

  // Merge user settings to default settings.
  if (userSettings) {
    settings = mergeObjects(settings, userSettings);
  }

  // Handle visible/hidden styles manually so that the whole object is
  // overridden instead of the props.

  if (userSettings && userSettings.visibleStyles) {
    settings.visibleStyles = userSettings.visibleStyles;
  } else if (defaultSettings && defaultSettings.visibleStyles) {
    settings.visibleStyles = defaultSettings.visibleStyles;
  }

  if (userSettings && userSettings.hiddenStyles) {
    settings.hiddenStyles = userSettings.hiddenStyles;
  } else if (defaultSettings && defaultSettings.hiddenStyles) {
    settings.hiddenStyles = defaultSettings.hiddenStyles;
  }

  return settings;
}

/**
 * Merge two objects recursively (deep merge). The source object's properties
 * are merged to the target object.
 *
 * @param {Object} target
 *   - The target object.
 * @param {Object} source
 *   - The source object.
 * @returns {Object} Returns the target object.
 */
function mergeObjects(target, source) {
  var sourceKeys = Object.keys(source);
  var length = sourceKeys.length;
  var isSourceObject;
  var propName;
  var i;

  for (i = 0; i < length; i++) {
    propName = sourceKeys[i];
    isSourceObject = isPlainObject(source[propName]);

    // If target and source values are both objects, merge the objects and
    // assign the merged value to the target property.
    if (isPlainObject(target[propName]) && isSourceObject) {
      target[propName] = mergeObjects(mergeObjects({}, target[propName]), source[propName]);
      continue;
    }

    // If source's value is object and target's is not let's clone the object as
    // the target's value.
    if (isSourceObject) {
      target[propName] = mergeObjects({}, source[propName]);
      continue;
    }

    // If source's value is an array let's clone the array as the target's
    // value.
    if (Array.isArray(source[propName])) {
      target[propName] = source[propName].slice(0);
      continue;
    }

    // In all other cases let's just directly assign the source's value as the
    // target's value.
    target[propName] = source[propName];
  }

  return target;
}

/**
 * Collect and return initial items for grid.
 *
 * @param {HTMLElement} gridElement
 * @param {?(HTMLElement[]|NodeList|HtmlCollection|String)} elements
 * @returns {(HTMLElement[]|NodeList|HtmlCollection)}
 */
function getInitialGridElements(gridElement, elements) {
  // If we have a wildcard selector let's return all the children.
  if (elements === '*') {
    return gridElement.children;
  }

  // If we have some more specific selector, let's filter the elements.
  if (typeof elements === STRING_TYPE) {
    var result = [];
    var children = gridElement.children;
    for (var i = 0; i < children.length; i++) {
      if (elementMatches(children[i], elements)) {
        result.push(children[i]);
      }
    }
    return result;
  }

  // If we have an array of elements or a node list.
  if (Array.isArray(elements) || isNodeList(elements)) {
    return elements;
  }

  // Otherwise just return an empty array.
  return [];
}

/**
 * Bind grid's resize handler to window.
 *
 * @param {Grid} grid
 * @param {(Number|Boolean)} delay
 */
function bindLayoutOnResize(grid, delay) {
  if (typeof delay !== NUMBER_TYPE) {
    delay = delay === true ? 0 : -1;
  }

  if (delay >= 0) {
    grid._resizeHandler = debounce(function () {
      grid.refreshItems().layout();
    }, delay);

    window.addEventListener('resize', grid._resizeHandler);
  }
}

/**
 * Unbind grid's resize handler from window.
 *
 * @param {Grid} grid
 */
function unbindLayoutOnResize(grid) {
  if (grid._resizeHandler) {
    grid._resizeHandler(true);
    window.removeEventListener('resize', grid._resizeHandler);
    grid._resizeHandler = null;
  }
}

/**
 * Normalize style declaration object, returns a normalized (new) styles object
 * (prefixed properties and invalid properties removed).
 *
 * @param {Object} styles
 * @returns {Object}
 */
function normalizeStyles(styles) {
  var normalized = {};
  var docElemStyle = document.documentElement.style;
  var prop, prefixedProp;

  // Normalize visible styles (prefix and remove invalid).
  for (prop in styles) {
    if (!styles[prop]) continue;
    prefixedProp = getPrefixedPropName(docElemStyle, prop);
    if (!prefixedProp) continue;
    normalized[prefixedProp] = styles[prop];
  }

  return normalized;
}

/**
 * Create index map from items.
 *
 * @param {Item[]} items
 * @returns {Object}
 */
function createIndexMap(items) {
  var result = {};
  for (var i = 0; i < items.length; i++) {
    result[items[i]._id] = i;
  }
  return result;
}

/**
 * Sort comparer function for items' index map.
 *
 * @param {Object} indexMap
 * @param {Item} itemA
 * @param {Item} itemB
 * @returns {Number}
 */
function compareIndexMap(indexMap, itemA, itemB) {
  var indexA = indexMap[itemA._id];
  var indexB = indexMap[itemB._id];
  return indexA - indexB;
}

export default Grid;
````

## File: src/Item/Item.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import { GRID_INSTANCES, ITEM_ELEMENT_MAP } from '../constants';

import ItemDrag from './ItemDrag';
import ItemDragPlaceholder from './ItemDragPlaceholder';
import ItemDragRelease from './ItemDragRelease';
import ItemLayout from './ItemLayout';
import ItemMigrate from './ItemMigrate';
import ItemVisibility from './ItemVisibility';
import Emitter from '../Emitter/Emitter';

import addClass from '../utils/addClass';
import createUid from '../utils/createUid';
import getStyle from '../utils/getStyle';
import getStyleAsFloat from '../utils/getStyleAsFloat';
import getTranslateString from '../utils/getTranslateString';
import removeClass from '../utils/removeClass';
import transformProp from '../utils/transformProp';

/**
 * Creates a new Item instance for a Grid instance.
 *
 * @class
 * @param {Grid} grid
 * @param {HTMLElement} element
 * @param {Boolean} [isActive]
 */
function Item(grid, element, isActive) {
  var settings = grid._settings;

  // Store item/element pair to a map (for faster item querying by element).
  if (ITEM_ELEMENT_MAP) {
    if (ITEM_ELEMENT_MAP.has(element)) {
      throw new Error('You can only create one Muuri Item per element!');
    } else {
      ITEM_ELEMENT_MAP.set(element, this);
    }
  }

  this._id = createUid();
  this._gridId = grid._id;
  this._element = element;
  this._isDestroyed = false;
  this._left = 0;
  this._top = 0;
  this._width = 0;
  this._height = 0;
  this._marginLeft = 0;
  this._marginRight = 0;
  this._marginTop = 0;
  this._marginBottom = 0;
  this._tX = undefined;
  this._tY = undefined;
  this._sortData = null;
  this._emitter = new Emitter();

  // If the provided item element is not a direct child of the grid container
  // element, append it to the grid container. Note, we are indeed reading the
  // DOM here but it's a property that does not cause reflowing.
  if (element.parentNode !== grid._element) {
    grid._element.appendChild(element);
  }

  // Set item class.
  addClass(element, settings.itemClass);

  // If isActive is not defined, let's try to auto-detect it. Note, we are
  // indeed reading the DOM here but it's a property that does not cause
  // reflowing.
  if (typeof isActive !== 'boolean') {
    isActive = getStyle(element, 'display') !== 'none';
  }

  // Set up active state (defines if the item is considered part of the layout
  // or not).
  this._isActive = isActive;

  // Setup visibility handler.
  this._visibility = new ItemVisibility(this);

  // Set up layout handler.
  this._layout = new ItemLayout(this);

  // Set up migration handler data.
  this._migrate = new ItemMigrate(this);

  // Set up drag handler.
  this._drag = settings.dragEnabled ? new ItemDrag(this) : null;

  // Set up release handler. Note that although this is fully linked to dragging
  // this still needs to be always instantiated to handle migration scenarios
  // correctly.
  this._dragRelease = new ItemDragRelease(this);

  // Set up drag placeholder handler. Note that although this is fully linked to
  // dragging this still needs to be always instantiated to handle migration
  // scenarios correctly.
  this._dragPlaceholder = new ItemDragPlaceholder(this);

  // Note! You must call the following methods before you start using the
  // instance. They are deliberately not called in the end as it would cause
  // potentially a massive amount of reflows if multiple items were instantiated
  // in a loop.
  // this._refreshDimensions();
  // this._refreshSortData();
}

/**
 * Public prototype methods
 * ************************
 */

/**
 * Get the instance grid reference.
 *
 * @public
 * @returns {Grid}
 */
Item.prototype.getGrid = function () {
  return GRID_INSTANCES[this._gridId];
};

/**
 * Get the instance element.
 *
 * @public
 * @returns {HTMLElement}
 */
Item.prototype.getElement = function () {
  return this._element;
};

/**
 * Get instance element's cached width.
 *
 * @public
 * @returns {Number}
 */
Item.prototype.getWidth = function () {
  return this._width;
};

/**
 * Get instance element's cached height.
 *
 * @public
 * @returns {Number}
 */
Item.prototype.getHeight = function () {
  return this._height;
};

/**
 * Get instance element's cached margins.
 *
 * @public
 * @returns {Object}
 *   - The returned object contains left, right, top and bottom properties
 *     which indicate the item element's cached margins.
 */
Item.prototype.getMargin = function () {
  return {
    left: this._marginLeft,
    right: this._marginRight,
    top: this._marginTop,
    bottom: this._marginBottom,
  };
};

/**
 * Get instance element's cached position.
 *
 * @public
 * @returns {Object}
 *   - The returned object contains left and top properties which indicate the
 *     item element's cached position in the grid.
 */
Item.prototype.getPosition = function () {
  return {
    left: this._left,
    top: this._top,
  };
};

/**
 * Is the item active?
 *
 * @public
 * @returns {Boolean}
 */
Item.prototype.isActive = function () {
  return this._isActive;
};

/**
 * Is the item visible?
 *
 * @public
 * @returns {Boolean}
 */
Item.prototype.isVisible = function () {
  return !!this._visibility && !this._visibility._isHidden;
};

/**
 * Is the item being animated to visible?
 *
 * @public
 * @returns {Boolean}
 */
Item.prototype.isShowing = function () {
  return !!(this._visibility && this._visibility._isShowing);
};

/**
 * Is the item being animated to hidden?
 *
 * @public
 * @returns {Boolean}
 */
Item.prototype.isHiding = function () {
  return !!(this._visibility && this._visibility._isHiding);
};

/**
 * Is the item positioning?
 *
 * @public
 * @returns {Boolean}
 */
Item.prototype.isPositioning = function () {
  return !!(this._layout && this._layout._isActive);
};

/**
 * Is the item being dragged (or queued for dragging)?
 *
 * @public
 * @returns {Boolean}
 */
Item.prototype.isDragging = function () {
  return !!(this._drag && this._drag._isActive);
};

/**
 * Is the item being released?
 *
 * @public
 * @returns {Boolean}
 */
Item.prototype.isReleasing = function () {
  return !!(this._dragRelease && this._dragRelease._isActive);
};

/**
 * Is the item destroyed?
 *
 * @public
 * @returns {Boolean}
 */
Item.prototype.isDestroyed = function () {
  return this._isDestroyed;
};

/**
 * Private prototype methods
 * *************************
 */

/**
 * Recalculate item's dimensions.
 *
 * @private
 * @param {Boolean} [force=false]
 */
Item.prototype._refreshDimensions = function (force) {
  if (this._isDestroyed) return;
  if (force !== true && this._visibility._isHidden) return;

  var element = this._element;
  var dragPlaceholder = this._dragPlaceholder;
  var rect = element.getBoundingClientRect();

  // Calculate width and height.
  this._width = rect.width;
  this._height = rect.height;

  // Calculate margins (ignore negative margins).
  this._marginLeft = Math.max(0, getStyleAsFloat(element, 'margin-left'));
  this._marginRight = Math.max(0, getStyleAsFloat(element, 'margin-right'));
  this._marginTop = Math.max(0, getStyleAsFloat(element, 'margin-top'));
  this._marginBottom = Math.max(0, getStyleAsFloat(element, 'margin-bottom'));

  // Keep drag placeholder's dimensions synced with the item's.
  if (dragPlaceholder) dragPlaceholder.updateDimensions();
};

/**
 * Fetch and store item's sort data.
 *
 * @private
 */
Item.prototype._refreshSortData = function () {
  if (this._isDestroyed) return;

  var data = (this._sortData = {});
  var getters = this.getGrid()._settings.sortData;
  var prop;

  for (prop in getters) {
    data[prop] = getters[prop](this, this._element);
  }
};

/**
 * Add item to layout.
 *
 * @private
 */
Item.prototype._addToLayout = function (left, top) {
  if (this._isActive === true) return;
  this._isActive = true;
  this._left = left || 0;
  this._top = top || 0;
};

/**
 * Remove item from layout.
 *
 * @private
 */
Item.prototype._removeFromLayout = function () {
  if (this._isActive === false) return;
  this._isActive = false;
  this._left = 0;
  this._top = 0;
};

/**
 * Check if the layout procedure can be skipped for the item.
 *
 * @private
 * @param {Number} left
 * @param {Number} top
 * @returns {Boolean}
 */
Item.prototype._canSkipLayout = function (left, top) {
  return (
    this._left === left &&
    this._top === top &&
    !this._migrate._isActive &&
    !this._layout._skipNextAnimation &&
    !this._dragRelease.isJustReleased()
  );
};

/**
 * Set the provided left and top arguments as the item element's translate
 * values in the DOM. This method keeps track of the currently applied
 * translate values and skips the update operation if the provided values are
 * identical to the currently applied values. Returns `false` if there was no
 * need for update and `true` if the translate value was updated.
 *
 * @private
 * @param {Number} left
 * @param {Number} top
 * @returns {Boolean}
 */
Item.prototype._setTranslate = function (left, top) {
  if (this._tX === left && this._tY === top) return false;
  this._tX = left;
  this._tY = top;
  this._element.style[transformProp] = getTranslateString(left, top);
  return true;
};

/**
 * Destroy item instance.
 *
 * @private
 * @param {Boolean} [removeElement=false]
 */
Item.prototype._destroy = function (removeElement) {
  if (this._isDestroyed) return;

  var element = this._element;
  var grid = this.getGrid();
  var settings = grid._settings;

  // Destroy handlers.
  this._dragPlaceholder.destroy();
  this._dragRelease.destroy();
  this._migrate.destroy();
  this._layout.destroy();
  this._visibility.destroy();
  if (this._drag) this._drag.destroy();

  // Destroy emitter.
  this._emitter.destroy();

  // Remove item class.
  removeClass(element, settings.itemClass);

  // Remove element from DOM.
  if (removeElement) element.parentNode.removeChild(element);

  // Remove item/element pair from map.
  if (ITEM_ELEMENT_MAP) ITEM_ELEMENT_MAP.delete(element);

  // Reset state.
  this._isActive = false;
  this._isDestroyed = true;
};

export default Item;
````

## File: src/Item/ItemDrag.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import {
  ACTION_MOVE,
  ACTION_SWAP,
  EVENT_MOVE,
  EVENT_SEND,
  EVENT_BEFORE_SEND,
  EVENT_RECEIVE,
  EVENT_BEFORE_RECEIVE,
  EVENT_DRAG_INIT,
  EVENT_DRAG_START,
  EVENT_DRAG_MOVE,
  EVENT_DRAG_SCROLL,
  EVENT_DRAG_END,
  GRID_INSTANCES,
} from '../constants';

import Dragger from '../Dragger/Dragger';
import AutoScroller from '../AutoScroller/AutoScroller';

import {
  addDragStartTick,
  cancelDragStartTick,
  addDragMoveTick,
  cancelDragMoveTick,
  addDragScrollTick,
  cancelDragScrollTick,
  addDragSortTick,
  cancelDragSortTick,
} from '../ticker';

import addClass from '../utils/addClass';
import arrayInsert from '../utils/arrayInsert';
import arrayMove from '../utils/arrayMove';
import arraySwap from '../utils/arraySwap';
import getContainingBlock from '../utils/getContainingBlock';
import getIntersectionScore from '../utils/getIntersectionScore';
import getOffsetDiff from '../utils/getOffsetDiff';
import getScrollableAncestors from '../utils/getScrollableAncestors';
import getStyle from '../utils/getStyle';
import getTranslate from '../utils/getTranslate';
import hasPassiveEvents from '../utils/hasPassiveEvents';
import isFunction from '../utils/isFunction';
import normalizeArrayIndex from '../utils/normalizeArrayIndex';
import removeClass from '../utils/removeClass';

var IS_IOS =
  /^(iPad|iPhone|iPod)/.test(window.navigator.platform) ||
  (/^Mac/.test(window.navigator.platform) && window.navigator.maxTouchPoints > 1);
var START_PREDICATE_INACTIVE = 0;
var START_PREDICATE_PENDING = 1;
var START_PREDICATE_RESOLVED = 2;
var SCROLL_LISTENER_OPTIONS = hasPassiveEvents() ? { passive: true } : false;

/**
 * Bind touch interaction to an item.
 *
 * @class
 * @param {Item} item
 */
function ItemDrag(item) {
  var element = item._element;
  var grid = item.getGrid();
  var settings = grid._settings;

  this._item = item;
  this._gridId = grid._id;
  this._isDestroyed = false;
  this._isMigrating = false;

  // Start predicate data.
  this._startPredicate = isFunction(settings.dragStartPredicate)
    ? settings.dragStartPredicate
    : ItemDrag.defaultStartPredicate;
  this._startPredicateState = START_PREDICATE_INACTIVE;
  this._startPredicateResult = undefined;

  // Data for drag sort predicate heuristics.
  this._isSortNeeded = false;
  this._sortTimer = undefined;
  this._blockedSortIndex = null;
  this._sortX1 = 0;
  this._sortX2 = 0;
  this._sortY1 = 0;
  this._sortY2 = 0;

  // Setup item's initial drag data.
  this._reset();

  // Bind the methods that needs binding.
  this._preStartCheck = this._preStartCheck.bind(this);
  this._preEndCheck = this._preEndCheck.bind(this);
  this._onScroll = this._onScroll.bind(this);
  this._prepareStart = this._prepareStart.bind(this);
  this._applyStart = this._applyStart.bind(this);
  this._prepareMove = this._prepareMove.bind(this);
  this._applyMove = this._applyMove.bind(this);
  this._prepareScroll = this._prepareScroll.bind(this);
  this._applyScroll = this._applyScroll.bind(this);
  this._handleSort = this._handleSort.bind(this);
  this._handleSortDelayed = this._handleSortDelayed.bind(this);

  // Get drag handle element.
  this._handle = (settings.dragHandle && element.querySelector(settings.dragHandle)) || element;

  // Init dragger.
  this._dragger = new Dragger(this._handle, settings.dragCssProps);
  this._dragger.on('start', this._preStartCheck);
  this._dragger.on('move', this._preStartCheck);
  this._dragger.on('cancel', this._preEndCheck);
  this._dragger.on('end', this._preEndCheck);
}

/**
 * Public properties
 * *****************
 */

/**
 * @public
 * @static
 * @type {AutoScroller}
 */
ItemDrag.autoScroller = new AutoScroller();

/**
 * Public static methods
 * *********************
 */

/**
 * Default drag start predicate handler that handles anchor elements
 * gracefully. The return value of this function defines if the drag is
 * started, rejected or pending. When true is returned the dragging is started
 * and when false is returned the dragging is rejected. If nothing is returned
 * the predicate will be called again on the next drag movement.
 *
 * @public
 * @static
 * @param {Item} item
 * @param {Object} event
 * @param {Object} [options]
 *   - An optional options object which can be used to pass the predicate
 *     it's options manually. By default the predicate retrieves the options
 *     from the grid's settings.
 * @returns {(Boolean|undefined)}
 */
ItemDrag.defaultStartPredicate = function (item, event, options) {
  var drag = item._drag;

  // Make sure left button is pressed on mouse.
  if (event.isFirst && event.srcEvent.button) {
    return false;
  }

  // If the start event is trusted, non-cancelable and it's default action has
  // not been prevented it is in most cases a sign that the gesture would be
  // cancelled anyways right after it has started (e.g. starting drag while
  // the page is scrolling).
  if (
    !IS_IOS &&
    event.isFirst &&
    event.srcEvent.isTrusted === true &&
    event.srcEvent.defaultPrevented === false &&
    event.srcEvent.cancelable === false
  ) {
    return false;
  }

  // Final event logic. At this stage return value does not matter anymore,
  // the predicate is either resolved or it's not and there's nothing to do
  // about it. Here we just reset data and if the item element is a link
  // we follow it (if there has only been slight movement).
  if (event.isFinal) {
    drag._finishStartPredicate(event);
    return;
  }

  // Setup predicate data from options if not already set.
  var predicate = drag._startPredicateData;
  if (!predicate) {
    var config = options || drag._getGrid()._settings.dragStartPredicate || {};
    drag._startPredicateData = predicate = {
      distance: Math.max(config.distance, 0) || 0,
      delay: Math.max(config.delay, 0) || 0,
    };
  }

  // If delay is defined let's keep track of the latest event and initiate
  // delay if it has not been done yet.
  if (predicate.delay) {
    predicate.event = event;
    if (!predicate.delayTimer) {
      predicate.delayTimer = window.setTimeout(function () {
        predicate.delay = 0;
        if (drag._resolveStartPredicate(predicate.event)) {
          drag._forceResolveStartPredicate(predicate.event);
          drag._resetStartPredicate();
        }
      }, predicate.delay);
    }
  }

  return drag._resolveStartPredicate(event);
};

/**
 * Default drag sort predicate.
 *
 * @public
 * @static
 * @param {Item} item
 * @param {Object} [options]
 * @param {Number} [options.threshold=50]
 * @param {String} [options.action='move']
 * @returns {?Object}
 *   - Returns `null` if no valid index was found. Otherwise returns drag sort
 *     command.
 */
ItemDrag.defaultSortPredicate = (function () {
  var itemRect = {};
  var targetRect = {};
  var returnData = {};
  var gridsArray = [];
  var minThreshold = 1;
  var maxThreshold = 100;

  function getTargetGrid(item, rootGrid, threshold) {
    var target = null;
    var dragSort = rootGrid._settings.dragSort;
    var bestScore = -1;
    var gridScore;
    var grids;
    var grid;
    var container;
    var containerRect;
    var left;
    var top;
    var right;
    var bottom;
    var i;

    // Get potential target grids.
    if (dragSort === true) {
      gridsArray[0] = rootGrid;
      grids = gridsArray;
    } else if (isFunction(dragSort)) {
      grids = dragSort.call(rootGrid, item);
    }

    // Return immediately if there are no grids.
    if (!grids || !Array.isArray(grids) || !grids.length) {
      return target;
    }

    // Loop through the grids and get the best match.
    for (i = 0; i < grids.length; i++) {
      grid = grids[i];

      // Filter out all destroyed grids.
      if (grid._isDestroyed) continue;

      // Compute the grid's client rect an clamp the initial boundaries to
      // viewport dimensions.
      grid._updateBoundingRect();
      left = Math.max(0, grid._left);
      top = Math.max(0, grid._top);
      right = Math.min(window.innerWidth, grid._right);
      bottom = Math.min(window.innerHeight, grid._bottom);

      // The grid might be inside one or more elements that clip it's visibility
      // (e.g overflow scroll/hidden) so we want to find out the visible portion
      // of the grid in the viewport and use that in our calculations.
      container = grid._element.parentNode;
      while (
        container &&
        container !== document &&
        container !== document.documentElement &&
        container !== document.body
      ) {
        if (container.getRootNode && container instanceof DocumentFragment) {
          container = container.getRootNode().host;
          continue;
        }

        if (getStyle(container, 'overflow') !== 'visible') {
          containerRect = container.getBoundingClientRect();
          left = Math.max(left, containerRect.left);
          top = Math.max(top, containerRect.top);
          right = Math.min(right, containerRect.right);
          bottom = Math.min(bottom, containerRect.bottom);
        }

        if (getStyle(container, 'position') === 'fixed') {
          break;
        }

        container = container.parentNode;
      }

      // No need to go further if target rect does not have visible area.
      if (left >= right || top >= bottom) continue;

      // Check how much dragged element overlaps the container element.
      targetRect.left = left;
      targetRect.top = top;
      targetRect.width = right - left;
      targetRect.height = bottom - top;
      gridScore = getIntersectionScore(itemRect, targetRect);

      // Check if this grid is the best match so far.
      if (gridScore > threshold && gridScore > bestScore) {
        bestScore = gridScore;
        target = grid;
      }
    }

    // Always reset grids array.
    gridsArray.length = 0;

    return target;
  }

  return function (item, options) {
    var drag = item._drag;
    var rootGrid = drag._getGrid();

    // Get drag sort predicate settings.
    var sortThreshold = options && typeof options.threshold === 'number' ? options.threshold : 50;
    var sortAction = options && options.action === ACTION_SWAP ? ACTION_SWAP : ACTION_MOVE;
    var migrateAction =
      options && options.migrateAction === ACTION_SWAP ? ACTION_SWAP : ACTION_MOVE;

    // Sort threshold must be a positive number capped to a max value of 100. If
    // that's not the case this function will not work correctly. So let's clamp
    // the threshold just in case.
    sortThreshold = Math.min(Math.max(sortThreshold, minThreshold), maxThreshold);

    // Populate item rect data.
    itemRect.width = item._width;
    itemRect.height = item._height;
    itemRect.left = drag._clientX;
    itemRect.top = drag._clientY;

    // Calculate the target grid.
    var grid = getTargetGrid(item, rootGrid, sortThreshold);

    // Return early if we found no grid container element that overlaps the
    // dragged item enough.
    if (!grid) return null;

    var isMigration = item.getGrid() !== grid;
    var gridOffsetLeft = 0;
    var gridOffsetTop = 0;
    var matchScore = 0;
    var matchIndex = -1;
    var hasValidTargets = false;
    var target;
    var score;
    var i;

    // If item is moved within it's originating grid adjust item's left and
    // top props. Otherwise if item is moved to/within another grid get the
    // container element's offset (from the element's content edge).
    if (grid === rootGrid) {
      itemRect.left = drag._gridX + item._marginLeft;
      itemRect.top = drag._gridY + item._marginTop;
    } else {
      grid._updateBorders(1, 0, 1, 0);
      gridOffsetLeft = grid._left + grid._borderLeft;
      gridOffsetTop = grid._top + grid._borderTop;
    }

    // Loop through the target grid items and try to find the best match.
    for (i = 0; i < grid._items.length; i++) {
      target = grid._items[i];

      // If the target item is not active or the target item is the dragged
      // item let's skip to the next item.
      if (!target._isActive || target === item) {
        continue;
      }

      // Mark the grid as having valid target items.
      hasValidTargets = true;

      // Calculate the target's overlap score with the dragged item.
      targetRect.width = target._width;
      targetRect.height = target._height;
      targetRect.left = target._left + target._marginLeft + gridOffsetLeft;
      targetRect.top = target._top + target._marginTop + gridOffsetTop;
      score = getIntersectionScore(itemRect, targetRect);

      // Update best match index and score if the target's overlap score with
      // the dragged item is higher than the current best match score.
      if (score > matchScore) {
        matchIndex = i;
        matchScore = score;
      }
    }

    // If there is no valid match and the dragged item is being moved into
    // another grid we need to do some guess work here. If there simply are no
    // valid targets (which means that the dragged item will be the only active
    // item in the new grid) we can just add it as the first item. If we have
    // valid items in the new grid and the dragged item is overlapping one or
    // more of the items in the new grid let's make an exception with the
    // threshold and just pick the item which the dragged item is overlapping
    // most. However, if the dragged item is not overlapping any of the valid
    // items in the new grid let's position it as the last item in the grid.
    if (isMigration && matchScore < sortThreshold) {
      matchIndex = hasValidTargets ? matchIndex : 0;
      matchScore = sortThreshold;
    }

    // Check if the best match overlaps enough to justify a placement switch.
    if (matchScore >= sortThreshold) {
      returnData.grid = grid;
      returnData.index = matchIndex;
      returnData.action = isMigration ? migrateAction : sortAction;
      return returnData;
    }

    return null;
  };
})();

/**
 * Public prototype methods
 * ************************
 */

/**
 * Abort dragging and reset drag data.
 *
 * @public
 */
ItemDrag.prototype.stop = function () {
  if (!this._isActive) return;

  // If the item is being dropped into another grid, finish it up and return
  // immediately.
  if (this._isMigrating) {
    this._finishMigration();
    return;
  }

  var item = this._item;
  var itemId = item._id;

  // Stop auto-scroll.
  ItemDrag.autoScroller.removeItem(item);

  // Cancel queued ticks.
  cancelDragStartTick(itemId);
  cancelDragMoveTick(itemId);
  cancelDragScrollTick(itemId);

  // Cancel sort procedure.
  this._cancelSort();

  if (this._isStarted) {
    // Remove scroll listeners.
    this._unbindScrollListeners();

    var element = item._element;
    var grid = this._getGrid();
    var draggingClass = grid._settings.itemDraggingClass;

    // Append item element to the container if it's not it's child. Also make
    // sure the translate values are adjusted to account for the DOM shift.
    if (element.parentNode !== grid._element) {
      grid._element.appendChild(element);
      item._setTranslate(this._gridX, this._gridY);

      // We need to do forced reflow to make sure the dragging class is removed
      // gracefully.
      // eslint-disable-next-line
      if (draggingClass) element.clientWidth;
    }

    // Remove dragging class.
    removeClass(element, draggingClass);
  }

  // Reset drag data.
  this._reset();
};

/**
 * Manually trigger drag sort. This is only needed for special edge cases where
 * e.g. you have disabled sort and want to trigger a sort right after enabling
 * it (and don't want to wait for the next move/scroll event).
 *
 * @private
 * @param {Boolean} [force=false]
 */
ItemDrag.prototype.sort = function (force) {
  var item = this._item;
  if (this._isActive && item._isActive && this._dragMoveEvent) {
    if (force === true) {
      this._handleSort();
    } else {
      addDragSortTick(item._id, this._handleSort);
    }
  }
};

/**
 * Destroy instance.
 *
 * @public
 */
ItemDrag.prototype.destroy = function () {
  if (this._isDestroyed) return;
  this.stop();
  this._dragger.destroy();
  ItemDrag.autoScroller.removeItem(this._item);
  this._isDestroyed = true;
};

/**
 * Private prototype methods
 * *************************
 */

/**
 * Get Grid instance.
 *
 * @private
 * @returns {?Grid}
 */
ItemDrag.prototype._getGrid = function () {
  return GRID_INSTANCES[this._gridId] || null;
};

/**
 * Setup/reset drag data.
 *
 * @private
 */
ItemDrag.prototype._reset = function () {
  this._isActive = false;
  this._isStarted = false;

  // The dragged item's container element.
  this._container = null;

  // The dragged item's containing block.
  this._containingBlock = null;

  // Drag/scroll event data.
  this._dragStartEvent = null;
  this._dragMoveEvent = null;
  this._dragPrevMoveEvent = null;
  this._scrollEvent = null;

  // All the elements which need to be listened for scroll events during
  // dragging.
  this._scrollers = [];

  // The current translateX/translateY position.
  this._left = 0;
  this._top = 0;

  // Dragged element's current position within the grid.
  this._gridX = 0;
  this._gridY = 0;

  // Dragged element's current offset from window's northwest corner. Does
  // not account for element's margins.
  this._clientX = 0;
  this._clientY = 0;

  // Keep track of the clientX/Y diff for scrolling.
  this._scrollDiffX = 0;
  this._scrollDiffY = 0;

  // Keep track of the clientX/Y diff for moving.
  this._moveDiffX = 0;
  this._moveDiffY = 0;

  // Offset difference between the dragged element's temporary drag
  // container and it's original container.
  this._containerDiffX = 0;
  this._containerDiffY = 0;
};

/**
 * Bind drag scroll handlers to all scrollable ancestor elements of the
 * dragged element and the drag container element.
 *
 * @private
 */
ItemDrag.prototype._bindScrollListeners = function () {
  var gridContainer = this._getGrid()._element;
  var dragContainer = this._container;
  var scrollers = this._scrollers;
  var gridScrollers;
  var i;

  // Get dragged element's scrolling parents.
  scrollers.length = 0;
  getScrollableAncestors(this._item._element.parentNode, scrollers);

  // If drag container is defined and it's not the same element as grid
  // container then we need to add the grid container and it's scroll parents
  // to the elements which are going to be listener for scroll events.
  if (dragContainer !== gridContainer) {
    gridScrollers = [];
    getScrollableAncestors(gridContainer, gridScrollers);
    for (i = 0; i < gridScrollers.length; i++) {
      if (scrollers.indexOf(gridScrollers[i]) < 0) {
        scrollers.push(gridScrollers[i]);
      }
    }
  }

  // Bind scroll listeners.
  for (i = 0; i < scrollers.length; i++) {
    scrollers[i].addEventListener('scroll', this._onScroll, SCROLL_LISTENER_OPTIONS);
  }
};

/**
 * Unbind currently bound drag scroll handlers from all scrollable ancestor
 * elements of the dragged element and the drag container element.
 *
 * @private
 */
ItemDrag.prototype._unbindScrollListeners = function () {
  var scrollers = this._scrollers;
  var i;

  for (i = 0; i < scrollers.length; i++) {
    scrollers[i].removeEventListener('scroll', this._onScroll, SCROLL_LISTENER_OPTIONS);
  }

  scrollers.length = 0;
};

/**
 * Unbind currently bound drag scroll handlers from all scrollable ancestor
 * elements of the dragged element and the drag container element.
 *
 * @private
 * @param {Object} event
 * @returns {Boolean}
 */
ItemDrag.prototype._resolveStartPredicate = function (event) {
  var predicate = this._startPredicateData;
  if (event.distance < predicate.distance || predicate.delay) return;
  this._resetStartPredicate();
  return true;
};

/**
 * Forcefully resolve drag start predicate.
 *
 * @private
 * @param {Object} event
 */
ItemDrag.prototype._forceResolveStartPredicate = function (event) {
  if (!this._isDestroyed && this._startPredicateState === START_PREDICATE_PENDING) {
    this._startPredicateState = START_PREDICATE_RESOLVED;
    this._onStart(event);
  }
};

/**
 * Finalize start predicate.
 *
 * @private
 * @param {Object} event
 */
ItemDrag.prototype._finishStartPredicate = function (event) {
  var element = this._item._element;

  // Check if this is a click (very subjective heuristics).
  var isClick = Math.abs(event.deltaX) < 2 && Math.abs(event.deltaY) < 2 && event.deltaTime < 200;

  // Reset predicate.
  this._resetStartPredicate();

  // If the gesture can be interpreted as click let's try to open the element's
  // href url (if it is an anchor element).
  if (isClick) openAnchorHref(element);
};

/**
 * Reset drag sort heuristics.
 *
 * @private
 * @param {Number} x
 * @param {Number} y
 */
ItemDrag.prototype._resetHeuristics = function (x, y) {
  this._blockedSortIndex = null;
  this._sortX1 = this._sortX2 = x;
  this._sortY1 = this._sortY2 = y;
};

/**
 * Run heuristics and return true if overlap check can be performed, and false
 * if it can not.
 *
 * @private
 * @param {Number} x
 * @param {Number} y
 * @returns {Boolean}
 */
ItemDrag.prototype._checkHeuristics = function (x, y) {
  var settings = this._getGrid()._settings.dragSortHeuristics;
  var minDist = settings.minDragDistance;

  // Skip heuristics if not needed.
  if (minDist <= 0) {
    this._blockedSortIndex = null;
    return true;
  }

  var diffX = x - this._sortX2;
  var diffY = y - this._sortY2;

  // If we can't do proper bounce back check make sure that the blocked index
  // is not set.
  var canCheckBounceBack = minDist > 3 && settings.minBounceBackAngle > 0;
  if (!canCheckBounceBack) {
    this._blockedSortIndex = null;
  }

  if (Math.abs(diffX) > minDist || Math.abs(diffY) > minDist) {
    // Reset blocked index if angle changed enough. This check requires a
    // minimum value of 3 for minDragDistance to function properly.
    if (canCheckBounceBack) {
      var angle = Math.atan2(diffX, diffY);
      var prevAngle = Math.atan2(this._sortX2 - this._sortX1, this._sortY2 - this._sortY1);
      var deltaAngle = Math.atan2(Math.sin(angle - prevAngle), Math.cos(angle - prevAngle));
      if (Math.abs(deltaAngle) > settings.minBounceBackAngle) {
        this._blockedSortIndex = null;
      }
    }

    // Update points.
    this._sortX1 = this._sortX2;
    this._sortY1 = this._sortY2;
    this._sortX2 = x;
    this._sortY2 = y;

    return true;
  }

  return false;
};

/**
 * Reset for default drag start predicate function.
 *
 * @private
 */
ItemDrag.prototype._resetStartPredicate = function () {
  var predicate = this._startPredicateData;
  if (predicate) {
    if (predicate.delayTimer) {
      predicate.delayTimer = window.clearTimeout(predicate.delayTimer);
    }
    this._startPredicateData = null;
  }
};

/**
 * Handle the sorting procedure. Manage drag sort heuristics/interval and
 * check overlap when necessary.
 *
 * @private
 */
ItemDrag.prototype._handleSort = function () {
  if (!this._isActive) return;

  var settings = this._getGrid()._settings;

  // No sorting when drag sort is disabled. Also, account for the scenario where
  // dragSort is temporarily disabled during drag procedure so we need to reset
  // sort timer heuristics state too.
  if (
    !settings.dragSort ||
    (!settings.dragAutoScroll.sortDuringScroll && ItemDrag.autoScroller.isItemScrolling(this._item))
  ) {
    this._sortX1 = this._sortX2 = this._gridX;
    this._sortY1 = this._sortY2 = this._gridY;
    // We set this to true intentionally so that overlap check would be
    // triggered as soon as possible after sort becomes enabled again.
    this._isSortNeeded = true;
    if (this._sortTimer !== undefined) {
      this._sortTimer = window.clearTimeout(this._sortTimer);
    }
    return;
  }

  // If sorting is enabled we always need to run the heuristics check to keep
  // the tracked coordinates updated. We also allow an exception when the sort
  // timer is finished because the heuristics are intended to prevent overlap
  // checks based on the dragged element's immediate movement and a delayed
  // overlap check is valid if it comes through, because it was valid when it
  // was invoked.
  var shouldSort = this._checkHeuristics(this._gridX, this._gridY);
  if (!this._isSortNeeded && !shouldSort) return;

  var sortInterval = settings.dragSortHeuristics.sortInterval;
  if (sortInterval <= 0 || this._isSortNeeded) {
    this._isSortNeeded = false;
    if (this._sortTimer !== undefined) {
      this._sortTimer = window.clearTimeout(this._sortTimer);
    }
    this._checkOverlap();
  } else if (this._sortTimer === undefined) {
    this._sortTimer = window.setTimeout(this._handleSortDelayed, sortInterval);
  }
};

/**
 * Delayed sort handler.
 *
 * @private
 */
ItemDrag.prototype._handleSortDelayed = function () {
  this._isSortNeeded = true;
  this._sortTimer = undefined;
  addDragSortTick(this._item._id, this._handleSort);
};

/**
 * Cancel and reset sort procedure.
 *
 * @private
 */
ItemDrag.prototype._cancelSort = function () {
  this._isSortNeeded = false;
  if (this._sortTimer !== undefined) {
    this._sortTimer = window.clearTimeout(this._sortTimer);
  }
  cancelDragSortTick(this._item._id);
};

/**
 * Handle the ending of the drag procedure for sorting.
 *
 * @private
 */
ItemDrag.prototype._finishSort = function () {
  var isSortEnabled = this._getGrid()._settings.dragSort;
  var needsFinalCheck = isSortEnabled && (this._isSortNeeded || this._sortTimer !== undefined);
  this._cancelSort();
  if (needsFinalCheck) this._checkOverlap();
};

/**
 * Check (during drag) if an item is overlapping other items and based on
 * the configuration layout the items.
 *
 * @private
 */
ItemDrag.prototype._checkOverlap = function () {
  if (!this._isActive) return;

  var item = this._item;
  var settings = this._getGrid()._settings;
  var result;
  var currentGrid;
  var currentIndex;
  var targetGrid;
  var targetIndex;
  var targetItem;
  var sortAction;
  var isMigration;

  // Get overlap check result.
  if (isFunction(settings.dragSortPredicate)) {
    result = settings.dragSortPredicate(item, this._dragMoveEvent);
  } else {
    result = ItemDrag.defaultSortPredicate(item, settings.dragSortPredicate);
  }

  // Let's make sure the result object has a valid index before going further.
  if (!result || typeof result.index !== 'number') return;

  sortAction = result.action === ACTION_SWAP ? ACTION_SWAP : ACTION_MOVE;
  currentGrid = item.getGrid();
  targetGrid = result.grid || currentGrid;
  isMigration = currentGrid !== targetGrid;
  currentIndex = currentGrid._items.indexOf(item);
  targetIndex = normalizeArrayIndex(
    targetGrid._items,
    result.index,
    isMigration && sortAction === ACTION_MOVE ? 1 : 0
  );

  // Prevent position bounce.
  if (!isMigration && targetIndex === this._blockedSortIndex) {
    return;
  }

  // If the item was moved within it's current grid.
  if (!isMigration) {
    // Make sure the target index is not the current index.
    if (currentIndex !== targetIndex) {
      this._blockedSortIndex = currentIndex;

      // Do the sort.
      (sortAction === ACTION_SWAP ? arraySwap : arrayMove)(
        currentGrid._items,
        currentIndex,
        targetIndex
      );

      // Emit move event.
      if (currentGrid._hasListeners(EVENT_MOVE)) {
        currentGrid._emit(EVENT_MOVE, {
          item: item,
          fromIndex: currentIndex,
          toIndex: targetIndex,
          action: sortAction,
        });
      }

      // Layout the grid.
      currentGrid.layout();
    }
  }

  // If the item was moved to another grid.
  else {
    this._blockedSortIndex = null;

    // Let's fetch the target item when it's still in it's original index.
    targetItem = targetGrid._items[targetIndex];

    // Emit beforeSend event.
    if (currentGrid._hasListeners(EVENT_BEFORE_SEND)) {
      currentGrid._emit(EVENT_BEFORE_SEND, {
        item: item,
        fromGrid: currentGrid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex,
      });
    }

    // Emit beforeReceive event.
    if (targetGrid._hasListeners(EVENT_BEFORE_RECEIVE)) {
      targetGrid._emit(EVENT_BEFORE_RECEIVE, {
        item: item,
        fromGrid: currentGrid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex,
      });
    }

    // Update item's grid id reference.
    item._gridId = targetGrid._id;

    // Update drag instance's migrating indicator.
    this._isMigrating = item._gridId !== this._gridId;

    // Move item instance from current grid to target grid.
    currentGrid._items.splice(currentIndex, 1);
    arrayInsert(targetGrid._items, item, targetIndex);

    // Reset sort data.
    item._sortData = null;

    // Emit send event.
    if (currentGrid._hasListeners(EVENT_SEND)) {
      currentGrid._emit(EVENT_SEND, {
        item: item,
        fromGrid: currentGrid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex,
      });
    }

    // Emit receive event.
    if (targetGrid._hasListeners(EVENT_RECEIVE)) {
      targetGrid._emit(EVENT_RECEIVE, {
        item: item,
        fromGrid: currentGrid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex,
      });
    }

    // If the sort action is "swap" let's respect it and send the target item
    // (if it exists) from the target grid to the originating grid. This process
    // is done on purpose after the dragged item placed within the target grid
    // so that we can keep this implementation as simple as possible utilizing
    // the existing API.
    if (sortAction === ACTION_SWAP && targetItem && targetItem.isActive()) {
      // Sanity check to make sure that the target item is still part of the
      // target grid. It could have been manipulated in the event handlers.
      if (targetGrid._items.indexOf(targetItem) > -1) {
        targetGrid.send(targetItem, currentGrid, currentIndex, {
          appendTo: this._container || document.body,
          layoutSender: false,
          layoutReceiver: false,
        });
      }
    }

    // Layout both grids.
    currentGrid.layout();
    targetGrid.layout();
  }
};

/**
 * If item is dragged into another grid, finish the migration process
 * gracefully.
 *
 * @private
 */
ItemDrag.prototype._finishMigration = function () {
  var item = this._item;
  var release = item._dragRelease;
  var element = item._element;
  var isActive = item._isActive;
  var targetGrid = item.getGrid();
  var targetGridElement = targetGrid._element;
  var targetSettings = targetGrid._settings;
  var targetContainer = targetSettings.dragContainer || targetGridElement;
  var currentSettings = this._getGrid()._settings;
  var currentContainer = element.parentNode;
  var currentVisClass = isActive
    ? currentSettings.itemVisibleClass
    : currentSettings.itemHiddenClass;
  var nextVisClass = isActive ? targetSettings.itemVisibleClass : targetSettings.itemHiddenClass;
  var translate;
  var offsetDiff;

  // Destroy current drag. Note that we need to set the migrating flag to
  // false first, because otherwise we create an infinite loop between this
  // and the drag.stop() method.
  this._isMigrating = false;
  this.destroy();

  // Update item class.
  if (currentSettings.itemClass !== targetSettings.itemClass) {
    removeClass(element, currentSettings.itemClass);
    addClass(element, targetSettings.itemClass);
  }

  // Update visibility class.
  if (currentVisClass !== nextVisClass) {
    removeClass(element, currentVisClass);
    addClass(element, nextVisClass);
  }

  // Move the item inside the target container if it's different than the
  // current container.
  if (targetContainer !== currentContainer) {
    targetContainer.appendChild(element);
    offsetDiff = getOffsetDiff(currentContainer, targetContainer, true);
    translate = getTranslate(element);
    translate.x -= offsetDiff.left;
    translate.y -= offsetDiff.top;
  }

  // Update item's cached dimensions.
  item._refreshDimensions();

  // Calculate the offset difference between target's drag container (if any)
  // and actual grid container element. We save it later for the release
  // process.
  offsetDiff = getOffsetDiff(targetContainer, targetGridElement, true);
  release._containerDiffX = offsetDiff.left;
  release._containerDiffY = offsetDiff.top;

  // Recreate item's drag handler.
  item._drag = targetSettings.dragEnabled ? new ItemDrag(item) : null;

  // Adjust the position of the item element if it was moved from a container
  // to another.
  if (targetContainer !== currentContainer) {
    item._setTranslate(translate.x, translate.y);
  }

  // Update child element's styles to reflect the current visibility state.
  item._visibility.setStyles(isActive ? targetSettings.visibleStyles : targetSettings.hiddenStyles);

  // Start the release.
  release.start();
};

/**
 * Drag pre-start handler.
 *
 * @private
 * @param {Object} event
 */
ItemDrag.prototype._preStartCheck = function (event) {
  // Let's activate drag start predicate state.
  if (this._startPredicateState === START_PREDICATE_INACTIVE) {
    this._startPredicateState = START_PREDICATE_PENDING;
  }

  // If predicate is pending try to resolve it.
  if (this._startPredicateState === START_PREDICATE_PENDING) {
    this._startPredicateResult = this._startPredicate(this._item, event);
    if (this._startPredicateResult === true) {
      this._startPredicateState = START_PREDICATE_RESOLVED;
      this._onStart(event);
    } else if (this._startPredicateResult === false) {
      this._resetStartPredicate(event);
      this._dragger._reset();
      this._startPredicateState = START_PREDICATE_INACTIVE;
    }
  }

  // Otherwise if predicate is resolved and drag is active, move the item.
  else if (this._startPredicateState === START_PREDICATE_RESOLVED && this._isActive) {
    this._onMove(event);
  }
};

/**
 * Drag pre-end handler.
 *
 * @private
 * @param {Object} event
 */
ItemDrag.prototype._preEndCheck = function (event) {
  var isResolved = this._startPredicateState === START_PREDICATE_RESOLVED;

  // Do final predicate check to allow user to unbind stuff for the current
  // drag procedure within the predicate callback. The return value of this
  // check will have no effect to the state of the predicate.
  this._startPredicate(this._item, event);

  this._startPredicateState = START_PREDICATE_INACTIVE;

  if (!isResolved || !this._isActive) return;

  if (this._isStarted) {
    this._onEnd(event);
  } else {
    this.stop();
  }
};

/**
 * Drag start handler.
 *
 * @private
 * @param {Object} event
 */
ItemDrag.prototype._onStart = function (event) {
  var item = this._item;
  if (!item._isActive) return;

  this._isActive = true;
  this._dragStartEvent = event;
  ItemDrag.autoScroller.addItem(item);

  addDragStartTick(item._id, this._prepareStart, this._applyStart);
};

/**
 * Prepare item to be dragged.
 *
 * @private
 *  ItemDrag.prototype
 */
ItemDrag.prototype._prepareStart = function () {
  if (!this._isActive) return;

  var item = this._item;
  if (!item._isActive) return;

  var element = item._element;
  var grid = this._getGrid();
  var settings = grid._settings;
  var gridContainer = grid._element;
  var dragContainer = settings.dragContainer || gridContainer;
  var containingBlock = getContainingBlock(dragContainer);
  var translate = getTranslate(element);
  var elementRect = element.getBoundingClientRect();
  var hasDragContainer = dragContainer !== gridContainer;

  this._container = dragContainer;
  this._containingBlock = containingBlock;
  this._clientX = elementRect.left;
  this._clientY = elementRect.top;
  this._left = this._gridX = translate.x;
  this._top = this._gridY = translate.y;
  this._scrollDiffX = this._scrollDiffY = 0;
  this._moveDiffX = this._moveDiffY = 0;

  this._resetHeuristics(this._gridX, this._gridY);

  // If a specific drag container is set and it is different from the
  // grid's container element we store the offset between containers.
  if (hasDragContainer) {
    var offsetDiff = getOffsetDiff(containingBlock, gridContainer);
    this._containerDiffX = offsetDiff.left;
    this._containerDiffY = offsetDiff.top;
  }
};

/**
 * Start drag for the item.
 *
 * @private
 */
ItemDrag.prototype._applyStart = function () {
  if (!this._isActive) return;

  var item = this._item;
  if (!item._isActive) return;

  var grid = this._getGrid();
  var element = item._element;
  var release = item._dragRelease;
  var migrate = item._migrate;
  var hasDragContainer = this._container !== grid._element;

  if (item.isPositioning()) {
    item._layout.stop(true, this._left, this._top);
  }

  if (migrate._isActive) {
    this._left -= migrate._containerDiffX;
    this._top -= migrate._containerDiffY;
    this._gridX -= migrate._containerDiffX;
    this._gridY -= migrate._containerDiffY;
    migrate.stop(true, this._left, this._top);
  }

  if (item.isReleasing()) {
    release._reset();
  }

  if (grid._settings.dragPlaceholder.enabled) {
    item._dragPlaceholder.create();
  }

  this._isStarted = true;

  grid._emit(EVENT_DRAG_INIT, item, this._dragStartEvent);

  if (hasDragContainer) {
    // If the dragged element is a child of the drag container all we need to
    // do is setup the relative drag position data.
    if (element.parentNode === this._container) {
      this._gridX -= this._containerDiffX;
      this._gridY -= this._containerDiffY;
    }
    // Otherwise we need to append the element inside the correct container,
    // setup the actual drag position data and adjust the element's translate
    // values to account for the DOM position shift.
    else {
      this._left += this._containerDiffX;
      this._top += this._containerDiffY;
      this._container.appendChild(element);
      item._setTranslate(this._left, this._top);
    }
  }

  addClass(element, grid._settings.itemDraggingClass);
  this._bindScrollListeners();
  grid._emit(EVENT_DRAG_START, item, this._dragStartEvent);
};

/**
 * Drag move handler.
 *
 * @private
 * @param {Object} event
 */
ItemDrag.prototype._onMove = function (event) {
  var item = this._item;

  if (!item._isActive) {
    this.stop();
    return;
  }

  this._dragMoveEvent = event;
  addDragMoveTick(item._id, this._prepareMove, this._applyMove);
  addDragSortTick(item._id, this._handleSort);
};

/**
 * Prepare dragged item for moving.
 *
 * @private
 */
ItemDrag.prototype._prepareMove = function () {
  if (!this._isActive) return;

  var item = this._item;
  if (!item._isActive) return;

  var settings = this._getGrid()._settings;
  var axis = settings.dragAxis;
  var nextEvent = this._dragMoveEvent;
  var prevEvent = this._dragPrevMoveEvent || this._dragStartEvent || nextEvent;

  // Update horizontal position data.
  if (axis !== 'y') {
    var moveDiffX = nextEvent.clientX - prevEvent.clientX;
    this._left = this._left - this._moveDiffX + moveDiffX;
    this._gridX = this._gridX - this._moveDiffX + moveDiffX;
    this._clientX = this._clientX - this._moveDiffX + moveDiffX;
    this._moveDiffX = moveDiffX;
  }

  // Update vertical position data.
  if (axis !== 'x') {
    var moveDiffY = nextEvent.clientY - prevEvent.clientY;
    this._top = this._top - this._moveDiffY + moveDiffY;
    this._gridY = this._gridY - this._moveDiffY + moveDiffY;
    this._clientY = this._clientY - this._moveDiffY + moveDiffY;
    this._moveDiffY = moveDiffY;
  }

  this._dragPrevMoveEvent = nextEvent;
};

/**
 * Apply movement to dragged item.
 *
 * @private
 */
ItemDrag.prototype._applyMove = function () {
  if (!this._isActive) return;

  var item = this._item;
  if (!item._isActive) return;

  this._moveDiffX = this._moveDiffY = 0;
  item._setTranslate(this._left, this._top);
  this._getGrid()._emit(EVENT_DRAG_MOVE, item, this._dragMoveEvent);
  ItemDrag.autoScroller.updateItem(item);
};

/**
 * Drag scroll handler.
 *
 * @private
 * @param {Object} event
 */
ItemDrag.prototype._onScroll = function (event) {
  var item = this._item;

  if (!item._isActive) {
    this.stop();
    return;
  }

  this._scrollEvent = event;
  addDragScrollTick(item._id, this._prepareScroll, this._applyScroll);
  addDragSortTick(item._id, this._handleSort);
};

/**
 * Prepare dragged item for scrolling.
 *
 * @private
 */
ItemDrag.prototype._prepareScroll = function () {
  if (!this._isActive) return;

  // If item is not active do nothing.
  var item = this._item;
  if (!item._isActive) return;

  var element = item._element;
  var grid = this._getGrid();
  var gridContainer = grid._element;
  var rect = element.getBoundingClientRect();

  // Update container diff.
  if (this._container !== gridContainer) {
    var offsetDiff = getOffsetDiff(this._containingBlock, gridContainer);
    this._containerDiffX = offsetDiff.left;
    this._containerDiffY = offsetDiff.top;
  }

  // Update horizontal position data.
  var scrollDiffX = this._clientX - this._moveDiffX - rect.left;
  this._left = this._left - this._scrollDiffX + scrollDiffX;
  this._scrollDiffX = scrollDiffX;

  // Update vertical position data.
  var scrollDiffY = this._clientY - this._moveDiffY - rect.top;
  this._top = this._top - this._scrollDiffY + scrollDiffY;
  this._scrollDiffY = scrollDiffY;

  // Update grid position.
  this._gridX = this._left - this._containerDiffX;
  this._gridY = this._top - this._containerDiffY;
};

/**
 * Apply scroll to dragged item.
 *
 * @private
 */
ItemDrag.prototype._applyScroll = function () {
  if (!this._isActive) return;

  var item = this._item;
  if (!item._isActive) return;

  this._scrollDiffX = this._scrollDiffY = 0;
  item._setTranslate(this._left, this._top);
  this._getGrid()._emit(EVENT_DRAG_SCROLL, item, this._scrollEvent);
};

/**
 * Drag end handler.
 *
 * @private
 * @param {Object} event
 */
ItemDrag.prototype._onEnd = function (event) {
  var item = this._item;
  var element = item._element;
  var grid = this._getGrid();
  var settings = grid._settings;
  var release = item._dragRelease;

  // If item is not active, reset drag.
  if (!item._isActive) {
    this.stop();
    return;
  }

  // Cancel queued ticks.
  cancelDragStartTick(item._id);
  cancelDragMoveTick(item._id);
  cancelDragScrollTick(item._id);

  // Finish sort procedure (does final overlap check if needed).
  this._finishSort();

  // Remove scroll listeners.
  this._unbindScrollListeners();

  // Setup release data.
  release._containerDiffX = this._containerDiffX;
  release._containerDiffY = this._containerDiffY;

  // Reset drag data.
  this._reset();

  // Remove drag class name from element.
  removeClass(element, settings.itemDraggingClass);

  // Stop auto-scroll.
  ItemDrag.autoScroller.removeItem(item);

  // Emit dragEnd event.
  grid._emit(EVENT_DRAG_END, item, event);

  // Finish up the migration process or start the release process.
  this._isMigrating ? this._finishMigration() : release.start();
};

/**
 * Private helpers
 * ***************
 */

/**
 * Check if an element is an anchor element and open the href url if possible.
 *
 * @param {HTMLElement} element
 */
function openAnchorHref(element) {
  // Make sure the element is anchor element.
  if (element.tagName.toLowerCase() !== 'a') return;

  // Get href and make sure it exists.
  var href = element.getAttribute('href');
  if (!href) return;

  // Finally let's navigate to the link href.
  var target = element.getAttribute('target');
  if (target && target !== '_self') {
    window.open(href, target);
  } else {
    window.location.href = href;
  }
}

export default ItemDrag;
````

## File: src/Item/ItemDragPlaceholder.js
````javascript
/**
 * Copyright (c) 2018-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import {
  addPlaceholderLayoutTick,
  cancelPlaceholderLayoutTick,
  addPlaceholderResizeTick,
  cancelPlaceholderResizeTick,
} from '../ticker';

import {
  EVENT_BEFORE_SEND,
  EVENT_DRAG_RELEASE_END,
  EVENT_LAYOUT_START,
  EVENT_HIDE_START,
} from '../constants';

import Animator from '../Animator/Animator';

import addClass from '../utils/addClass';
import getTranslateString from '../utils/getTranslateString';
import getTranslate from '../utils/getTranslate';
import isFunction from '../utils/isFunction';
import setStyles from '../utils/setStyles';
import removeClass from '../utils/removeClass';
import transformProp from '../utils/transformProp';

/**
 * Drag placeholder.
 *
 * @class
 * @param {Item} item
 */
function ItemDragPlaceholder(item) {
  this._item = item;
  this._animation = new Animator();
  this._element = null;
  this._className = '';
  this._didMigrate = false;
  this._resetAfterLayout = false;
  this._left = 0;
  this._top = 0;
  this._transX = 0;
  this._transY = 0;
  this._nextTransX = 0;
  this._nextTransY = 0;

  // Bind animation handlers.
  this._setupAnimation = this._setupAnimation.bind(this);
  this._startAnimation = this._startAnimation.bind(this);
  this._updateDimensions = this._updateDimensions.bind(this);

  // Bind event handlers.
  this._onLayoutStart = this._onLayoutStart.bind(this);
  this._onLayoutEnd = this._onLayoutEnd.bind(this);
  this._onReleaseEnd = this._onReleaseEnd.bind(this);
  this._onMigrate = this._onMigrate.bind(this);
  this._onHide = this._onHide.bind(this);
}

/**
 * Private prototype methods
 * *************************
 */

/**
 * Update placeholder's dimensions to match the item's dimensions.
 *
 * @private
 */
ItemDragPlaceholder.prototype._updateDimensions = function () {
  if (!this.isActive()) return;
  setStyles(this._element, {
    width: this._item._width + 'px',
    height: this._item._height + 'px',
  });
};

/**
 * Move placeholder to a new position.
 *
 * @private
 * @param {Item[]} items
 * @param {Boolean} isInstant
 */
ItemDragPlaceholder.prototype._onLayoutStart = function (items, isInstant) {
  var item = this._item;

  // If the item is not part of the layout anymore reset placeholder.
  if (items.indexOf(item) === -1) {
    this.reset();
    return;
  }

  var nextLeft = item._left;
  var nextTop = item._top;
  var currentLeft = this._left;
  var currentTop = this._top;

  // Keep track of item layout position.
  this._left = nextLeft;
  this._top = nextTop;

  // If item's position did not change, and the item did not migrate and the
  // layout is not instant and we can safely skip layout.
  if (!isInstant && !this._didMigrate && currentLeft === nextLeft && currentTop === nextTop) {
    return;
  }

  // Slots data is calculated with item margins added to them so we need to add
  // item's left and top margin to the slot data to get the placeholder's
  // next position.
  var nextX = nextLeft + item._marginLeft;
  var nextY = nextTop + item._marginTop;

  // Just snap to new position without any animations if no animation is
  // required or if placeholder moves between grids.
  var grid = item.getGrid();
  var animEnabled = !isInstant && grid._settings.layoutDuration > 0;
  if (!animEnabled || this._didMigrate) {
    // Cancel potential (queued) layout tick.
    cancelPlaceholderLayoutTick(item._id);

    // Snap placeholder to correct position.
    this._element.style[transformProp] = getTranslateString(nextX, nextY);
    this._animation.stop();

    // Move placeholder inside correct container after migration.
    if (this._didMigrate) {
      grid.getElement().appendChild(this._element);
      this._didMigrate = false;
    }

    return;
  }

  // Start the placeholder's layout animation in the next tick. We do this to
  // avoid layout thrashing.
  this._nextTransX = nextX;
  this._nextTransY = nextY;
  addPlaceholderLayoutTick(item._id, this._setupAnimation, this._startAnimation);
};

/**
 * Prepare placeholder for layout animation.
 *
 * @private
 */
ItemDragPlaceholder.prototype._setupAnimation = function () {
  if (!this.isActive()) return;

  var translate = getTranslate(this._element);
  this._transX = translate.x;
  this._transY = translate.y;
};

/**
 * Start layout animation.
 *
 * @private
 */
ItemDragPlaceholder.prototype._startAnimation = function () {
  if (!this.isActive()) return;

  var animation = this._animation;
  var currentX = this._transX;
  var currentY = this._transY;
  var nextX = this._nextTransX;
  var nextY = this._nextTransY;

  // If placeholder is already in correct position let's just stop animation
  // and be done with it.
  if (currentX === nextX && currentY === nextY) {
    if (animation.isAnimating()) {
      this._element.style[transformProp] = getTranslateString(nextX, nextY);
      animation.stop();
    }
    return;
  }

  // Otherwise let's start the animation.
  var settings = this._item.getGrid()._settings;
  var currentStyles = {};
  var targetStyles = {};
  currentStyles[transformProp] = getTranslateString(currentX, currentY);
  targetStyles[transformProp] = getTranslateString(nextX, nextY);
  animation.start(currentStyles, targetStyles, {
    duration: settings.layoutDuration,
    easing: settings.layoutEasing,
    onFinish: this._onLayoutEnd,
  });
};

/**
 * Layout end handler.
 *
 * @private
 */
ItemDragPlaceholder.prototype._onLayoutEnd = function () {
  if (this._resetAfterLayout) {
    this.reset();
  }
};

/**
 * Drag end handler. This handler is called when dragReleaseEnd event is
 * emitted and receives the event data as it's argument.
 *
 * @private
 * @param {Item} item
 */
ItemDragPlaceholder.prototype._onReleaseEnd = function (item) {
  if (item._id === this._item._id) {
    // If the placeholder is not animating anymore we can safely reset it.
    if (!this._animation.isAnimating()) {
      this.reset();
      return;
    }

    // If the placeholder item is still animating here, let's wait for it to
    // finish it's animation.
    this._resetAfterLayout = true;
  }
};

/**
 * Migration start handler. This handler is called when beforeSend event is
 * emitted and receives the event data as it's argument.
 *
 * @private
 * @param {Object} data
 * @param {Item} data.item
 * @param {Grid} data.fromGrid
 * @param {Number} data.fromIndex
 * @param {Grid} data.toGrid
 * @param {Number} data.toIndex
 */
ItemDragPlaceholder.prototype._onMigrate = function (data) {
  // Make sure we have a matching item.
  if (data.item !== this._item) return;

  var grid = this._item.getGrid();
  var nextGrid = data.toGrid;

  // Unbind listeners from current grid.
  grid.off(EVENT_DRAG_RELEASE_END, this._onReleaseEnd);
  grid.off(EVENT_LAYOUT_START, this._onLayoutStart);
  grid.off(EVENT_BEFORE_SEND, this._onMigrate);
  grid.off(EVENT_HIDE_START, this._onHide);

  // Bind listeners to the next grid.
  nextGrid.on(EVENT_DRAG_RELEASE_END, this._onReleaseEnd);
  nextGrid.on(EVENT_LAYOUT_START, this._onLayoutStart);
  nextGrid.on(EVENT_BEFORE_SEND, this._onMigrate);
  nextGrid.on(EVENT_HIDE_START, this._onHide);

  // Mark the item as migrated.
  this._didMigrate = true;
};

/**
 * Reset placeholder if the associated item is hidden.
 *
 * @private
 * @param {Item[]} items
 */
ItemDragPlaceholder.prototype._onHide = function (items) {
  if (items.indexOf(this._item) > -1) this.reset();
};

/**
 * Public prototype methods
 * ************************
 */

/**
 * Create placeholder. Note that this method only writes to DOM and does not
 * read anything from DOM so it should not cause any additional layout
 * thrashing when it's called at the end of the drag start procedure.
 *
 * @public
 */
ItemDragPlaceholder.prototype.create = function () {
  // If we already have placeholder set up we can skip the initiation logic.
  if (this.isActive()) {
    this._resetAfterLayout = false;
    return;
  }

  var item = this._item;
  var grid = item.getGrid();
  var settings = grid._settings;
  var animation = this._animation;

  // Keep track of layout position.
  this._left = item._left;
  this._top = item._top;

  // Create placeholder element.
  var element;
  if (isFunction(settings.dragPlaceholder.createElement)) {
    element = settings.dragPlaceholder.createElement(item);
  } else {
    element = document.createElement('div');
  }
  this._element = element;

  // Update element to animation instance.
  animation._element = element;

  // Add placeholder class to the placeholder element.
  this._className = settings.itemPlaceholderClass || '';
  if (this._className) {
    addClass(element, this._className);
  }

  // Set initial styles.
  setStyles(element, {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: item._width + 'px',
    height: item._height + 'px',
  });

  // Set initial position.
  element.style[transformProp] = getTranslateString(
    item._left + item._marginLeft,
    item._top + item._marginTop
  );

  // Bind event listeners.
  grid.on(EVENT_LAYOUT_START, this._onLayoutStart);
  grid.on(EVENT_DRAG_RELEASE_END, this._onReleaseEnd);
  grid.on(EVENT_BEFORE_SEND, this._onMigrate);
  grid.on(EVENT_HIDE_START, this._onHide);

  // onCreate hook.
  if (isFunction(settings.dragPlaceholder.onCreate)) {
    settings.dragPlaceholder.onCreate(item, element);
  }

  // Insert the placeholder element to the grid.
  grid.getElement().appendChild(element);
};

/**
 * Reset placeholder data.
 *
 * @public
 */
ItemDragPlaceholder.prototype.reset = function () {
  if (!this.isActive()) return;

  var element = this._element;
  var item = this._item;
  var grid = item.getGrid();
  var settings = grid._settings;
  var animation = this._animation;

  // Reset flag.
  this._resetAfterLayout = false;

  // Cancel potential (queued) layout tick.
  cancelPlaceholderLayoutTick(item._id);
  cancelPlaceholderResizeTick(item._id);

  // Reset animation instance.
  animation.stop();
  animation._element = null;

  // Unbind event listeners.
  grid.off(EVENT_DRAG_RELEASE_END, this._onReleaseEnd);
  grid.off(EVENT_LAYOUT_START, this._onLayoutStart);
  grid.off(EVENT_BEFORE_SEND, this._onMigrate);
  grid.off(EVENT_HIDE_START, this._onHide);

  // Remove placeholder class from the placeholder element.
  if (this._className) {
    removeClass(element, this._className);
    this._className = '';
  }

  // Remove element.
  element.parentNode.removeChild(element);
  this._element = null;

  // onRemove hook. Note that here we use the current grid's onRemove callback
  // so if the item has migrated during drag the onRemove method will not be
  // the originating grid's method.
  if (isFunction(settings.dragPlaceholder.onRemove)) {
    settings.dragPlaceholder.onRemove(item, element);
  }
};

/**
 * Check if placeholder is currently active (visible).
 *
 * @public
 * @returns {Boolean}
 */
ItemDragPlaceholder.prototype.isActive = function () {
  return !!this._element;
};

/**
 * Get placeholder element.
 *
 * @public
 * @returns {?HTMLElement}
 */
ItemDragPlaceholder.prototype.getElement = function () {
  return this._element;
};

/**
 * Update placeholder's dimensions to match the item's dimensions. Note that
 * the updating is done asynchronously in the next tick to avoid layout
 * thrashing.
 *
 * @public
 */
ItemDragPlaceholder.prototype.updateDimensions = function () {
  if (!this.isActive()) return;
  addPlaceholderResizeTick(this._item._id, this._updateDimensions);
};

/**
 * Destroy placeholder instance.
 *
 * @public
 */
ItemDragPlaceholder.prototype.destroy = function () {
  this.reset();
  this._animation.destroy();
  this._item = this._animation = null;
};

export default ItemDragPlaceholder;
````

## File: src/Item/ItemDragRelease.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import { EVENT_DRAG_RELEASE_START, EVENT_DRAG_RELEASE_END } from '../constants';

import addClass from '../utils/addClass';
import getTranslate from '../utils/getTranslate';
import removeClass from '../utils/removeClass';

/**
 * The release process handler constructor. Although this might seem as proper
 * fit for the drag process this needs to be separated into it's own logic
 * because there might be a scenario where drag is disabled, but the release
 * process still needs to be implemented (dragging from a grid to another).
 *
 * @class
 * @param {Item} item
 */
function ItemDragRelease(item) {
  this._item = item;
  this._isActive = false;
  this._isDestroyed = false;
  this._isPositioningStarted = false;
  this._containerDiffX = 0;
  this._containerDiffY = 0;
}

/**
 * Public prototype methods
 * ************************
 */

/**
 * Start the release process of an item.
 *
 * @public
 */
ItemDragRelease.prototype.start = function () {
  if (this._isDestroyed || this._isActive) return;

  var item = this._item;
  var grid = item.getGrid();
  var settings = grid._settings;

  this._isActive = true;
  addClass(item._element, settings.itemReleasingClass);
  if (!settings.dragRelease.useDragContainer) {
    this._placeToGrid();
  }
  grid._emit(EVENT_DRAG_RELEASE_START, item);

  // Let's start layout manually _only_ if there is no unfinished layout in
  // about to finish.
  if (!grid._nextLayoutData) item._layout.start(false);
};

/**
 * End the release process of an item. This method can be used to abort an
 * ongoing release process (animation) or finish the release process.
 *
 * @public
 * @param {Boolean} [abort=false]
 *  - Should the release be aborted? When true, the release end event won't be
 *    emitted. Set to true only when you need to abort the release process
 *    while the item is animating to it's position.
 * @param {Number} [left]
 *  - The element's current translateX value (optional).
 * @param {Number} [top]
 *  - The element's current translateY value (optional).
 */
ItemDragRelease.prototype.stop = function (abort, left, top) {
  if (this._isDestroyed || !this._isActive) return;

  var item = this._item;
  var grid = item.getGrid();

  if (!abort && (left === undefined || top === undefined)) {
    left = item._left;
    top = item._top;
  }

  var didReparent = this._placeToGrid(left, top);
  this._reset(didReparent);

  if (!abort) grid._emit(EVENT_DRAG_RELEASE_END, item);
};

ItemDragRelease.prototype.isJustReleased = function () {
  return this._isActive && this._isPositioningStarted === false;
};

/**
 * Destroy instance.
 *
 * @public
 */
ItemDragRelease.prototype.destroy = function () {
  if (this._isDestroyed) return;
  this.stop(true);
  this._item = null;
  this._isDestroyed = true;
};

/**
 * Private prototype methods
 * *************************
 */

/**
 * Move the element back to the grid container element if it does not exist
 * there already.
 *
 * @private
 * @param {Number} [left]
 *  - The element's current translateX value (optional).
 * @param {Number} [top]
 *  - The element's current translateY value (optional).
 * @returns {Boolean}
 *   - Returns `true` if the element was reparented.
 */
ItemDragRelease.prototype._placeToGrid = function (left, top) {
  if (this._isDestroyed) return;

  var item = this._item;
  var element = item._element;
  var container = item.getGrid()._element;
  var didReparent = false;

  if (element.parentNode !== container) {
    if (left === undefined || top === undefined) {
      var translate = getTranslate(element);
      left = translate.x - this._containerDiffX;
      top = translate.y - this._containerDiffY;
    }

    container.appendChild(element);
    item._setTranslate(left, top);
    didReparent = true;
  }

  this._containerDiffX = 0;
  this._containerDiffY = 0;

  return didReparent;
};

/**
 * Reset data and remove releasing class.
 *
 * @private
 * @param {Boolean} [needsReflow]
 */
ItemDragRelease.prototype._reset = function (needsReflow) {
  if (this._isDestroyed) return;

  var item = this._item;
  var releasingClass = item.getGrid()._settings.itemReleasingClass;

  this._isActive = false;
  this._isPositioningStarted = false;
  this._containerDiffX = 0;
  this._containerDiffY = 0;

  // If the element was just reparented we need to do a forced reflow to remove
  // the class gracefully.
  if (releasingClass) {
    // eslint-disable-next-line
    if (needsReflow) item._element.clientWidth;
    removeClass(item._element, releasingClass);
  }
};

export default ItemDragRelease;
````

## File: src/Item/ItemLayout.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import { addLayoutTick, cancelLayoutTick } from '../ticker';

import Animator from '../Animator/Animator';

import addClass from '../utils/addClass';
import getTranslate from '../utils/getTranslate';
import getTranslateString from '../utils/getTranslateString';
import isFunction from '../utils/isFunction';
import removeClass from '../utils/removeClass';
import transformProp from '../utils/transformProp';

var MIN_ANIMATION_DISTANCE = 2;

/**
 * Layout manager for Item instance, handles the positioning of an item.
 *
 * @class
 * @param {Item} item
 */
function ItemLayout(item) {
  var element = item._element;
  var elementStyle = element.style;

  this._item = item;
  this._isActive = false;
  this._isDestroyed = false;
  this._isInterrupted = false;
  this._currentStyles = {};
  this._targetStyles = {};
  this._nextLeft = 0;
  this._nextTop = 0;
  this._offsetLeft = 0;
  this._offsetTop = 0;
  this._skipNextAnimation = false;
  this._animOptions = {
    onFinish: this._finish.bind(this),
    duration: 0,
    easing: 0,
  };

  // Set element's initial position styles.
  elementStyle.left = '0px';
  elementStyle.top = '0px';
  item._setTranslate(0, 0);

  this._animation = new Animator(element);
  this._queue = 'layout-' + item._id;

  // Bind animation handlers and finish method.
  this._setupAnimation = this._setupAnimation.bind(this);
  this._startAnimation = this._startAnimation.bind(this);
}

/**
 * Public prototype methods
 * ************************
 */

/**
 * Start item layout based on it's current data.
 *
 * @public
 * @param {Boolean} instant
 * @param {Function} [onFinish]
 */
ItemLayout.prototype.start = function (instant, onFinish) {
  if (this._isDestroyed) return;

  var item = this._item;
  var release = item._dragRelease;
  var gridSettings = item.getGrid()._settings;
  var isPositioning = this._isActive;
  var isJustReleased = release.isJustReleased();
  var animDuration = isJustReleased
    ? gridSettings.dragRelease.duration
    : gridSettings.layoutDuration;
  var animEasing = isJustReleased ? gridSettings.dragRelease.easing : gridSettings.layoutEasing;
  var animEnabled = !instant && !this._skipNextAnimation && animDuration > 0;

  // If the item is currently positioning cancel potential queued layout tick
  // and process current layout callback queue with interrupted flag on.
  if (isPositioning) {
    cancelLayoutTick(item._id);
    item._emitter.burst(this._queue, true, item);
  }

  // Mark release positioning as started.
  if (isJustReleased) release._isPositioningStarted = true;

  // Push the callback to the callback queue.
  if (isFunction(onFinish)) {
    item._emitter.on(this._queue, onFinish);
  }

  // Reset animation skipping flag.
  this._skipNextAnimation = false;

  // If no animations are needed, easy peasy!
  if (!animEnabled) {
    this._updateOffsets();
    item._setTranslate(this._nextLeft, this._nextTop);
    this._animation.stop();
    this._finish();
    return;
  }

  // Let's make sure an ongoing animation's callback is cancelled before going
  // further. Without this there's a chance that the animation will finish
  // before the next tick and mess up our logic.
  if (this._animation.isAnimating()) {
    this._animation._animation.onfinish = null;
  }

  // Kick off animation to be started in the next tick.
  this._isActive = true;
  this._animOptions.easing = animEasing;
  this._animOptions.duration = animDuration;
  this._isInterrupted = isPositioning;
  addLayoutTick(item._id, this._setupAnimation, this._startAnimation);
};

/**
 * Stop item's position animation if it is currently animating.
 *
 * @public
 * @param {Boolean} processCallbackQueue
 * @param {Number} [left]
 * @param {Number} [top]
 */
ItemLayout.prototype.stop = function (processCallbackQueue, left, top) {
  if (this._isDestroyed || !this._isActive) return;

  var item = this._item;

  // Cancel animation init.
  cancelLayoutTick(item._id);

  // Stop animation.
  if (this._animation.isAnimating()) {
    if (left === undefined || top === undefined) {
      var translate = getTranslate(item._element);
      left = translate.x;
      top = translate.y;
    }
    item._setTranslate(left, top);
    this._animation.stop();
  }

  // Remove positioning class.
  removeClass(item._element, item.getGrid()._settings.itemPositioningClass);

  // Reset active state.
  this._isActive = false;

  // Process callback queue if needed.
  if (processCallbackQueue) {
    item._emitter.burst(this._queue, true, item);
  }
};

/**
 * Destroy the instance and stop current animation if it is running.
 *
 * @public
 */
ItemLayout.prototype.destroy = function () {
  if (this._isDestroyed) return;

  var elementStyle = this._item._element.style;

  this.stop(true, 0, 0);
  this._item._emitter.clear(this._queue);
  this._animation.destroy();

  elementStyle[transformProp] = '';
  elementStyle.left = '';
  elementStyle.top = '';

  this._item = null;
  this._currentStyles = null;
  this._targetStyles = null;
  this._animOptions = null;
  this._isDestroyed = true;
};

/**
 * Private prototype methods
 * *************************
 */

/**
 * Calculate and update item's current layout offset data.
 *
 * @private
 */
ItemLayout.prototype._updateOffsets = function () {
  if (this._isDestroyed) return;

  var item = this._item;
  var migrate = item._migrate;
  var release = item._dragRelease;

  this._offsetLeft = release._isActive
    ? release._containerDiffX
    : migrate._isActive
    ? migrate._containerDiffX
    : 0;

  this._offsetTop = release._isActive
    ? release._containerDiffY
    : migrate._isActive
    ? migrate._containerDiffY
    : 0;

  this._nextLeft = this._item._left + this._offsetLeft;
  this._nextTop = this._item._top + this._offsetTop;
};

/**
 * Finish item layout procedure.
 *
 * @private
 */
ItemLayout.prototype._finish = function () {
  if (this._isDestroyed) return;

  var item = this._item;
  var migrate = item._migrate;
  var release = item._dragRelease;

  // Update internal translate values.
  item._tX = this._nextLeft;
  item._tY = this._nextTop;

  // Mark the item as inactive and remove positioning classes.
  if (this._isActive) {
    this._isActive = false;
    removeClass(item._element, item.getGrid()._settings.itemPositioningClass);
  }

  // Finish up release and migration.
  if (release._isActive) release.stop();
  if (migrate._isActive) migrate.stop();

  // Process the callback queue.
  item._emitter.burst(this._queue, false, item);
};

/**
 * Prepare item for layout animation.
 *
 * @private
 */
ItemLayout.prototype._setupAnimation = function () {
  var item = this._item;
  if (item._tX === undefined || item._tY === undefined) {
    var translate = getTranslate(item._element);
    item._tX = translate.x;
    item._tY = translate.y;
  }
};

/**
 * Start layout animation.
 *
 * @private
 */
ItemLayout.prototype._startAnimation = function () {
  var item = this._item;
  var settings = item.getGrid()._settings;
  var isInstant = this._animOptions.duration <= 0;

  // Let's update the offset data and target styles.
  this._updateOffsets();

  var xDiff = Math.abs(item._left - (item._tX - this._offsetLeft));
  var yDiff = Math.abs(item._top - (item._tY - this._offsetTop));

  // If there is no need for animation or if the item is already in correct
  // position (or near it) let's finish the process early.
  if (isInstant || (xDiff < MIN_ANIMATION_DISTANCE && yDiff < MIN_ANIMATION_DISTANCE)) {
    if (xDiff || yDiff || this._isInterrupted) {
      item._setTranslate(this._nextLeft, this._nextTop);
    }
    this._animation.stop();
    this._finish();
    return;
  }

  // Set item's positioning class if needed.
  if (!this._isInterrupted) {
    addClass(item._element, settings.itemPositioningClass);
  }

  // Get current/next styles for animation.
  this._currentStyles[transformProp] = getTranslateString(item._tX, item._tY);
  this._targetStyles[transformProp] = getTranslateString(this._nextLeft, this._nextTop);

  // Set internal translation values to undefined for the duration of the
  // animation since they will be changing on each animation frame for the
  // duration of the animation and tracking them would mean reading the DOM on
  // each frame, which is pretty darn expensive.
  item._tX = item._tY = undefined;

  // Start animation.
  this._animation.start(this._currentStyles, this._targetStyles, this._animOptions);
};

export default ItemLayout;
````

## File: src/Item/ItemMigrate.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import { EVENT_BEFORE_SEND, EVENT_BEFORE_RECEIVE, EVENT_SEND, EVENT_RECEIVE } from '../constants';

import ItemDrag from './ItemDrag';

import addClass from '../utils/addClass';
import getOffsetDiff from '../utils/getOffsetDiff';
import getTranslate from '../utils/getTranslate';
import arrayInsert from '../utils/arrayInsert';
import normalizeArrayIndex from '../utils/normalizeArrayIndex';
import removeClass from '../utils/removeClass';

/**
 * The migrate process handler constructor.
 *
 * @class
 * @param {Item} item
 */
function ItemMigrate(item) {
  // Private props.
  this._item = item;
  this._isActive = false;
  this._isDestroyed = false;
  this._container = false;
  this._containerDiffX = 0;
  this._containerDiffY = 0;
}

/**
 * Public prototype methods
 * ************************
 */

/**
 * Start the migrate process of an item.
 *
 * @public
 * @param {Grid} targetGrid
 * @param {(HTMLElement|Number|Item)} position
 * @param {HTMLElement} [container]
 */
ItemMigrate.prototype.start = function (targetGrid, position, container) {
  if (this._isDestroyed) return;

  var item = this._item;
  var element = item._element;
  var isActive = item.isActive();
  var isVisible = item.isVisible();
  var grid = item.getGrid();
  var settings = grid._settings;
  var targetSettings = targetGrid._settings;
  var targetElement = targetGrid._element;
  var targetItems = targetGrid._items;
  var currentIndex = grid._items.indexOf(item);
  var targetContainer = container || document.body;
  var targetIndex;
  var targetItem;
  var currentContainer;
  var offsetDiff;
  var containerDiff;
  var translate;
  var translateX;
  var translateY;
  var currentVisClass;
  var nextVisClass;

  // Get target index.
  if (typeof position === 'number') {
    targetIndex = normalizeArrayIndex(targetItems, position, 1);
  } else {
    targetItem = targetGrid.getItem(position);
    if (!targetItem) return;
    targetIndex = targetItems.indexOf(targetItem);
  }

  // Get current translateX and translateY values if needed.
  if (item.isPositioning() || this._isActive || item.isReleasing()) {
    translate = getTranslate(element);
    translateX = translate.x;
    translateY = translate.y;
  }

  // Abort current positioning.
  if (item.isPositioning()) {
    item._layout.stop(true, translateX, translateY);
  }

  // Abort current migration.
  if (this._isActive) {
    translateX -= this._containerDiffX;
    translateY -= this._containerDiffY;
    this.stop(true, translateX, translateY);
  }

  // Abort current release.
  if (item.isReleasing()) {
    translateX -= item._dragRelease._containerDiffX;
    translateY -= item._dragRelease._containerDiffY;
    item._dragRelease.stop(true, translateX, translateY);
  }

  // Stop current visibility animation.
  item._visibility.stop(true);

  // Destroy current drag.
  if (item._drag) item._drag.destroy();

  // Emit beforeSend event.
  if (grid._hasListeners(EVENT_BEFORE_SEND)) {
    grid._emit(EVENT_BEFORE_SEND, {
      item: item,
      fromGrid: grid,
      fromIndex: currentIndex,
      toGrid: targetGrid,
      toIndex: targetIndex,
    });
  }

  // Emit beforeReceive event.
  if (targetGrid._hasListeners(EVENT_BEFORE_RECEIVE)) {
    targetGrid._emit(EVENT_BEFORE_RECEIVE, {
      item: item,
      fromGrid: grid,
      fromIndex: currentIndex,
      toGrid: targetGrid,
      toIndex: targetIndex,
    });
  }

  // Update item class.
  if (settings.itemClass !== targetSettings.itemClass) {
    removeClass(element, settings.itemClass);
    addClass(element, targetSettings.itemClass);
  }

  // Update visibility class.
  currentVisClass = isVisible ? settings.itemVisibleClass : settings.itemHiddenClass;
  nextVisClass = isVisible ? targetSettings.itemVisibleClass : targetSettings.itemHiddenClass;
  if (currentVisClass !== nextVisClass) {
    removeClass(element, currentVisClass);
    addClass(element, nextVisClass);
  }

  // Move item instance from current grid to target grid.
  grid._items.splice(currentIndex, 1);
  arrayInsert(targetItems, item, targetIndex);

  // Update item's grid id reference.
  item._gridId = targetGrid._id;

  // If item is active we need to move the item inside the target container for
  // the duration of the (potential) animation if it's different than the
  // current container.
  if (isActive) {
    currentContainer = element.parentNode;
    if (targetContainer !== currentContainer) {
      targetContainer.appendChild(element);
      offsetDiff = getOffsetDiff(targetContainer, currentContainer, true);
      if (!translate) {
        translate = getTranslate(element);
        translateX = translate.x;
        translateY = translate.y;
      }
      item._setTranslate(translateX + offsetDiff.left, translateY + offsetDiff.top);
    }
  }
  // If item is not active let's just append it to the target grid's element.
  else {
    targetElement.appendChild(element);
  }

  // Update child element's styles to reflect the current visibility state.
  item._visibility.setStyles(
    isVisible ? targetSettings.visibleStyles : targetSettings.hiddenStyles
  );

  // Get offset diff for the migration data, if the item is active.
  if (isActive) {
    containerDiff = getOffsetDiff(targetContainer, targetElement, true);
  }

  // Update item's cached dimensions.
  item._refreshDimensions();

  // Reset item's sort data.
  item._sortData = null;

  // Create new drag handler.
  item._drag = targetSettings.dragEnabled ? new ItemDrag(item) : null;

  // Setup migration data.
  if (isActive) {
    this._isActive = true;
    this._container = targetContainer;
    this._containerDiffX = containerDiff.left;
    this._containerDiffY = containerDiff.top;
  } else {
    this._isActive = false;
    this._container = null;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  }

  // Emit send event.
  if (grid._hasListeners(EVENT_SEND)) {
    grid._emit(EVENT_SEND, {
      item: item,
      fromGrid: grid,
      fromIndex: currentIndex,
      toGrid: targetGrid,
      toIndex: targetIndex,
    });
  }

  // Emit receive event.
  if (targetGrid._hasListeners(EVENT_RECEIVE)) {
    targetGrid._emit(EVENT_RECEIVE, {
      item: item,
      fromGrid: grid,
      fromIndex: currentIndex,
      toGrid: targetGrid,
      toIndex: targetIndex,
    });
  }
};

/**
 * End the migrate process of an item. This method can be used to abort an
 * ongoing migrate process (animation) or finish the migrate process.
 *
 * @public
 * @param {Boolean} [abort=false]
 *  - Should the migration be aborted?
 * @param {Number} [left]
 *  - The element's current translateX value (optional).
 * @param {Number} [top]
 *  - The element's current translateY value (optional).
 */
ItemMigrate.prototype.stop = function (abort, left, top) {
  if (this._isDestroyed || !this._isActive) return;

  var item = this._item;
  var element = item._element;
  var grid = item.getGrid();
  var gridElement = grid._element;
  var translate;

  if (this._container !== gridElement) {
    if (left === undefined || top === undefined) {
      if (abort) {
        translate = getTranslate(element);
        left = translate.x - this._containerDiffX;
        top = translate.y - this._containerDiffY;
      } else {
        left = item._left;
        top = item._top;
      }
    }

    gridElement.appendChild(element);
    item._setTranslate(left, top);
  }

  this._isActive = false;
  this._container = null;
  this._containerDiffX = 0;
  this._containerDiffY = 0;
};

/**
 * Destroy instance.
 *
 * @public
 */
ItemMigrate.prototype.destroy = function () {
  if (this._isDestroyed) return;
  this.stop(true);
  this._item = null;
  this._isDestroyed = true;
};

export default ItemMigrate;
````

## File: src/Item/ItemVisibility.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import { addVisibilityTick, cancelVisibilityTick } from '../ticker';

import Animator from '../Animator/Animator';

import addClass from '../utils/addClass';
import getCurrentStyles from '../utils/getCurrentStyles';
import isFunction from '../utils/isFunction';
import removeClass from '../utils/removeClass';
import setStyles from '../utils/setStyles';

/**
 * Visibility manager for Item instance, handles visibility of an item.
 *
 * @class
 * @param {Item} item
 */
function ItemVisibility(item) {
  var isActive = item._isActive;
  var element = item._element;
  var childElement = element.children[0];
  var settings = item.getGrid()._settings;

  if (!childElement) {
    throw new Error('No valid child element found within item element.');
  }

  this._item = item;
  this._isDestroyed = false;
  this._isHidden = !isActive;
  this._isHiding = false;
  this._isShowing = false;
  this._childElement = childElement;
  this._currentStyleProps = [];
  this._animation = new Animator(childElement);
  this._queue = 'visibility-' + item._id;
  this._finishShow = this._finishShow.bind(this);
  this._finishHide = this._finishHide.bind(this);

  element.style.display = isActive ? '' : 'none';
  addClass(element, isActive ? settings.itemVisibleClass : settings.itemHiddenClass);
  this.setStyles(isActive ? settings.visibleStyles : settings.hiddenStyles);
}

/**
 * Public prototype methods
 * ************************
 */

/**
 * Show item.
 *
 * @public
 * @param {Boolean} instant
 * @param {Function} [onFinish]
 */
ItemVisibility.prototype.show = function (instant, onFinish) {
  if (this._isDestroyed) return;

  var item = this._item;
  var element = item._element;
  var callback = isFunction(onFinish) ? onFinish : null;
  var grid = item.getGrid();
  var settings = grid._settings;

  // If item is visible call the callback and be done with it.
  if (!this._isShowing && !this._isHidden) {
    callback && callback(false, item);
    return;
  }

  // If item is showing and does not need to be shown instantly, let's just
  // push callback to the callback queue and be done with it.
  if (this._isShowing && !instant) {
    callback && item._emitter.on(this._queue, callback);
    return;
  }

  // If the item is hiding or hidden process the current visibility callback
  // queue with the interrupted flag active, update classes and set display
  // to block if necessary.
  if (!this._isShowing) {
    item._emitter.burst(this._queue, true, item);
    removeClass(element, settings.itemHiddenClass);
    addClass(element, settings.itemVisibleClass);
    if (!this._isHiding) element.style.display = '';
  }

  // Push callback to the callback queue.
  callback && item._emitter.on(this._queue, callback);

  // Update visibility states.
  this._isShowing = true;
  this._isHiding = this._isHidden = false;

  // Finally let's start show animation.
  this._startAnimation(true, instant, this._finishShow);
};

/**
 * Hide item.
 *
 * @public
 * @param {Boolean} instant
 * @param {Function} [onFinish]
 */
ItemVisibility.prototype.hide = function (instant, onFinish) {
  if (this._isDestroyed) return;

  var item = this._item;
  var element = item._element;
  var callback = isFunction(onFinish) ? onFinish : null;
  var grid = item.getGrid();
  var settings = grid._settings;

  // If item is already hidden call the callback and be done with it.
  if (!this._isHiding && this._isHidden) {
    callback && callback(false, item);
    return;
  }

  // If item is hiding and does not need to be hidden instantly, let's just
  // push callback to the callback queue and be done with it.
  if (this._isHiding && !instant) {
    callback && item._emitter.on(this._queue, callback);
    return;
  }

  // If the item is showing or visible process the current visibility callback
  // queue with the interrupted flag active, update classes and set display
  // to block if necessary.
  if (!this._isHiding) {
    item._emitter.burst(this._queue, true, item);
    addClass(element, settings.itemHiddenClass);
    removeClass(element, settings.itemVisibleClass);
  }

  // Push callback to the callback queue.
  callback && item._emitter.on(this._queue, callback);

  // Update visibility states.
  this._isHidden = this._isHiding = true;
  this._isShowing = false;

  // Finally let's start hide animation.
  this._startAnimation(false, instant, this._finishHide);
};

/**
 * Stop current hiding/showing process.
 *
 * @public
 * @param {Boolean} processCallbackQueue
 */
ItemVisibility.prototype.stop = function (processCallbackQueue) {
  if (this._isDestroyed) return;
  if (!this._isHiding && !this._isShowing) return;

  var item = this._item;

  cancelVisibilityTick(item._id);
  this._animation.stop();
  if (processCallbackQueue) {
    item._emitter.burst(this._queue, true, item);
  }
};

/**
 * Reset all existing visibility styles and apply new visibility styles to the
 * visibility element. This method should be used to set styles when there is a
 * chance that the current style properties differ from the new ones (basically
 * on init and on migrations).
 *
 * @public
 * @param {Object} styles
 */
ItemVisibility.prototype.setStyles = function (styles) {
  var childElement = this._childElement;
  var currentStyleProps = this._currentStyleProps;
  this._removeCurrentStyles();
  for (var prop in styles) {
    currentStyleProps.push(prop);
    childElement.style[prop] = styles[prop];
  }
};

/**
 * Destroy the instance and stop current animation if it is running.
 *
 * @public
 */
ItemVisibility.prototype.destroy = function () {
  if (this._isDestroyed) return;

  var item = this._item;
  var element = item._element;
  var grid = item.getGrid();
  var settings = grid._settings;

  this.stop(true);
  item._emitter.clear(this._queue);
  this._animation.destroy();
  this._removeCurrentStyles();
  removeClass(element, settings.itemVisibleClass);
  removeClass(element, settings.itemHiddenClass);
  element.style.display = '';

  // Reset state.
  this._isHiding = this._isShowing = false;
  this._isDestroyed = this._isHidden = true;
};

/**
 * Private prototype methods
 * *************************
 */

/**
 * Start visibility animation.
 *
 * @private
 * @param {Boolean} toVisible
 * @param {Boolean} [instant]
 * @param {Function} [onFinish]
 */
ItemVisibility.prototype._startAnimation = function (toVisible, instant, onFinish) {
  if (this._isDestroyed) return;

  var item = this._item;
  var animation = this._animation;
  var childElement = this._childElement;
  var settings = item.getGrid()._settings;
  var targetStyles = toVisible ? settings.visibleStyles : settings.hiddenStyles;
  var duration = toVisible ? settings.showDuration : settings.hideDuration;
  var easing = toVisible ? settings.showEasing : settings.hideEasing;
  var isInstant = instant || duration <= 0;
  var currentStyles;

  // No target styles? Let's quit early.
  if (!targetStyles) {
    onFinish && onFinish();
    return;
  }

  // Cancel queued visibility tick.
  cancelVisibilityTick(item._id);

  // If we need to apply the styles instantly without animation.
  if (isInstant) {
    setStyles(childElement, targetStyles);
    animation.stop();
    onFinish && onFinish();
    return;
  }

  // Let's make sure an ongoing animation's callback is cancelled before going
  // further. Without this there's a chance that the animation will finish
  // before the next tick and mess up our logic.
  if (animation.isAnimating()) {
    animation._animation.onfinish = null;
  }

  // Start the animation in the next tick (to avoid layout thrashing).
  addVisibilityTick(
    item._id,
    function () {
      currentStyles = getCurrentStyles(childElement, targetStyles);
    },
    function () {
      animation.start(currentStyles, targetStyles, {
        duration: duration,
        easing: easing,
        onFinish: onFinish,
      });
    }
  );
};

/**
 * Finish show procedure.
 *
 * @private
 */
ItemVisibility.prototype._finishShow = function () {
  if (this._isHidden) return;
  this._isShowing = false;
  this._item._emitter.burst(this._queue, false, this._item);
};

/**
 * Finish hide procedure.
 *
 * @private
 */
ItemVisibility.prototype._finishHide = function () {
  if (!this._isHidden) return;
  var item = this._item;
  this._isHiding = false;
  item._layout.stop(true, 0, 0);
  item._element.style.display = 'none';
  item._emitter.burst(this._queue, false, item);
};

/**
 * Remove currently applied visibility related inline style properties.
 *
 * @private
 */
ItemVisibility.prototype._removeCurrentStyles = function () {
  var childElement = this._childElement;
  var currentStyleProps = this._currentStyleProps;

  for (var i = 0; i < currentStyleProps.length; i++) {
    childElement.style[currentStyleProps[i]] = '';
  }

  currentStyleProps.length = 0;
};

export default ItemVisibility;
````

## File: src/Packer/LICENSE.md
````markdown
Copyright (c) 2016, Niklas Rämö

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: src/Packer/Packer.js
````javascript
/**
 * Muuri Packer
 * Copyright (c) 2016-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/Packer/LICENSE.md
 */

import PackerProcessor, {
  createWorkerProcessors,
  destroyWorkerProcessors,
  isWorkerProcessorsSupported,
} from './PackerProcessor';

export var FILL_GAPS = 1;
export var HORIZONTAL = 2;
export var ALIGN_RIGHT = 4;
export var ALIGN_BOTTOM = 8;
export var ROUNDING = 16;
export var PACKET_INDEX_ID = 0;
export var PACKET_INDEX_WIDTH = 1;
export var PACKET_INDEX_HEIGHT = 2;
export var PACKET_INDEX_OPTIONS = 3;
export var PACKET_HEADER_SLOTS = 4;

/**
 * @class
 * @param {Number} [numWorkers=0]
 * @param {Object} [options]
 * @param {Boolean} [options.fillGaps=false]
 * @param {Boolean} [options.horizontal=false]
 * @param {Boolean} [options.alignRight=false]
 * @param {Boolean} [options.alignBottom=false]
 * @param {Boolean} [options.rounding=false]
 */
function Packer(numWorkers, options) {
  this._options = 0;
  this._processor = null;
  this._layoutQueue = [];
  this._layouts = {};
  this._layoutCallbacks = {};
  this._layoutWorkers = {};
  this._layoutWorkerData = {};
  this._workers = [];
  this._onWorkerMessage = this._onWorkerMessage.bind(this);

  // Set initial options.
  this.setOptions(options);

  // Init the worker(s) or the processor if workers can't be used.
  numWorkers = typeof numWorkers === 'number' ? Math.max(0, numWorkers) : 0;
  if (numWorkers && isWorkerProcessorsSupported()) {
    try {
      this._workers = createWorkerProcessors(numWorkers, this._onWorkerMessage);
    } catch (e) {
      this._processor = new PackerProcessor();
    }
  } else {
    this._processor = new PackerProcessor();
  }
}

Packer.prototype._sendToWorker = function () {
  if (!this._layoutQueue.length || !this._workers.length) return;

  var layoutId = this._layoutQueue.shift();
  var worker = this._workers.pop();
  var data = this._layoutWorkerData[layoutId];

  delete this._layoutWorkerData[layoutId];
  this._layoutWorkers[layoutId] = worker;
  worker.postMessage(data.buffer, [data.buffer]);
};

Packer.prototype._onWorkerMessage = function (msg) {
  var data = new Float32Array(msg.data);
  var layoutId = data[PACKET_INDEX_ID];
  var layout = this._layouts[layoutId];
  var callback = this._layoutCallbacks[layoutId];
  var worker = this._layoutWorkers[layoutId];

  if (layout) delete this._layouts[layoutId];
  if (callback) delete this._layoutCallbacks[layoutId];
  if (worker) delete this._layoutWorkers[layoutId];

  if (layout && callback) {
    layout.width = data[PACKET_INDEX_WIDTH];
    layout.height = data[PACKET_INDEX_HEIGHT];
    layout.slots = data.subarray(PACKET_HEADER_SLOTS, data.length);
    this._finalizeLayout(layout);
    callback(layout);
  }

  if (worker) {
    this._workers.push(worker);
    this._sendToWorker();
  }
};

Packer.prototype._finalizeLayout = function (layout) {
  var grid = layout._grid;
  var isHorizontal = layout._settings & HORIZONTAL;
  var isBorderBox = grid._boxSizing === 'border-box';

  delete layout._grid;
  delete layout._settings;

  layout.styles = {};

  if (isHorizontal) {
    layout.styles.width =
      (isBorderBox ? layout.width + grid._borderLeft + grid._borderRight : layout.width) + 'px';
  } else {
    layout.styles.height =
      (isBorderBox ? layout.height + grid._borderTop + grid._borderBottom : layout.height) + 'px';
  }

  return layout;
};

/**
 * @public
 * @param {Object} [options]
 * @param {Boolean} [options.fillGaps]
 * @param {Boolean} [options.horizontal]
 * @param {Boolean} [options.alignRight]
 * @param {Boolean} [options.alignBottom]
 * @param {Boolean} [options.rounding]
 */
Packer.prototype.setOptions = function (options) {
  if (!options) return;

  var fillGaps;
  if (typeof options.fillGaps === 'boolean') {
    fillGaps = options.fillGaps ? FILL_GAPS : 0;
  } else {
    fillGaps = this._options & FILL_GAPS;
  }

  var horizontal;
  if (typeof options.horizontal === 'boolean') {
    horizontal = options.horizontal ? HORIZONTAL : 0;
  } else {
    horizontal = this._options & HORIZONTAL;
  }

  var alignRight;
  if (typeof options.alignRight === 'boolean') {
    alignRight = options.alignRight ? ALIGN_RIGHT : 0;
  } else {
    alignRight = this._options & ALIGN_RIGHT;
  }

  var alignBottom;
  if (typeof options.alignBottom === 'boolean') {
    alignBottom = options.alignBottom ? ALIGN_BOTTOM : 0;
  } else {
    alignBottom = this._options & ALIGN_BOTTOM;
  }

  var rounding;
  if (typeof options.rounding === 'boolean') {
    rounding = options.rounding ? ROUNDING : 0;
  } else {
    rounding = this._options & ROUNDING;
  }

  this._options = fillGaps | horizontal | alignRight | alignBottom | rounding;
};

/**
 * @public
 * @param {Grid} grid
 * @param {Number} layoutId
 * @param {Item[]} items
 * @param {Number} width
 * @param {Number} height
 * @param {Function} callback
 * @returns {?Function}
 */
Packer.prototype.createLayout = function (grid, layoutId, items, width, height, callback) {
  if (this._layouts[layoutId]) {
    throw new Error('A layout with the provided id is currently being processed.');
  }

  var horizontal = this._options & HORIZONTAL;
  var layout = {
    id: layoutId,
    items: items,
    slots: null,
    width: horizontal ? 0 : width,
    height: !horizontal ? 0 : height,
    // Temporary data, which will be removed before sending the layout data
    // outside of Packer's context.
    _grid: grid,
    _settings: this._options,
  };

  // If there are no items let's call the callback immediately.
  if (!items.length) {
    layout.slots = [];
    this._finalizeLayout(layout);
    callback(layout);
    return;
  }

  // Create layout synchronously if needed.
  if (this._processor) {
    layout.slots = window.Float32Array
      ? new Float32Array(items.length * 2)
      : new Array(items.length * 2);
    this._processor.computeLayout(layout, layout._settings);
    this._finalizeLayout(layout);
    callback(layout);
    return;
  }

  // Worker data.
  var data = new Float32Array(PACKET_HEADER_SLOTS + items.length * 2);

  // Worker data header.
  data[PACKET_INDEX_ID] = layoutId;
  data[PACKET_INDEX_WIDTH] = layout.width;
  data[PACKET_INDEX_HEIGHT] = layout.height;
  data[PACKET_INDEX_OPTIONS] = layout._settings;

  // Worker data items.
  var i, j, item;
  for (i = 0, j = PACKET_HEADER_SLOTS - 1, item; i < items.length; i++) {
    item = items[i];
    data[++j] = item._width + item._marginLeft + item._marginRight;
    data[++j] = item._height + item._marginTop + item._marginBottom;
  }

  this._layoutQueue.push(layoutId);
  this._layouts[layoutId] = layout;
  this._layoutCallbacks[layoutId] = callback;
  this._layoutWorkerData[layoutId] = data;

  this._sendToWorker();

  return this.cancelLayout.bind(this, layoutId);
};

/**
 * @public
 * @param {Number} layoutId
 */
Packer.prototype.cancelLayout = function (layoutId) {
  var layout = this._layouts[layoutId];
  if (!layout) return;

  delete this._layouts[layoutId];
  delete this._layoutCallbacks[layoutId];

  if (this._layoutWorkerData[layoutId]) {
    delete this._layoutWorkerData[layoutId];
    var queueIndex = this._layoutQueue.indexOf(layoutId);
    if (queueIndex > -1) this._layoutQueue.splice(queueIndex, 1);
  }
};

/**
 * @public
 */
Packer.prototype.destroy = function () {
  // Move all currently used workers back in the workers array.
  for (var key in this._layoutWorkers) {
    this._workers.push(this._layoutWorkers[key]);
  }

  // Destroy all instance's workers.
  destroyWorkerProcessors(this._workers);

  // Reset data.
  this._workers.length = 0;
  this._layoutQueue.length = 0;
  this._layouts = {};
  this._layoutCallbacks = {};
  this._layoutWorkers = {};
  this._layoutWorkerData = {};
};

export default Packer;
````

## File: src/Packer/PackerProcessor.js
````javascript
/**
 * Muuri Packer
 * Copyright (c) 2016-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/Packer/LICENSE.md
 */

function createPackerProcessor(isWorker) {
  var FILL_GAPS = 1;
  var HORIZONTAL = 2;
  var ALIGN_RIGHT = 4;
  var ALIGN_BOTTOM = 8;
  var ROUNDING = 16;

  var EPS = 0.001;
  var MIN_SLOT_SIZE = 0.5;

  // Rounds number first to three decimal precision and then floors the result
  // to two decimal precision.
  // Math.floor(Math.round(number * 1000) / 10) / 100
  function roundNumber(number) {
    return ((((number * 1000 + 0.5) << 0) / 10) << 0) / 100;
  }

  /**
   * @class
   */
  function PackerProcessor() {
    this.currentRects = [];
    this.nextRects = [];
    this.rectTarget = {};
    this.rectStore = [];
    this.slotSizes = [];
    this.rectId = 0;
    this.slotIndex = -1;
    this.slotData = { left: 0, top: 0, width: 0, height: 0 };
    this.sortRectsLeftTop = this.sortRectsLeftTop.bind(this);
    this.sortRectsTopLeft = this.sortRectsTopLeft.bind(this);
  }

  /**
   * Takes a layout object as an argument and computes positions (slots) for the
   * layout items. Also computes the final width and height of the layout. The
   * provided layout object's slots array is mutated as well as the width and
   * height properties.
   *
   * @param {Object} layout
   * @param {Number} layout.width
   *   - The start (current) width of the layout in pixels.
   * @param {Number} layout.height
   *   - The start (current) height of the layout in pixels.
   * @param {(Item[]|Number[])} layout.items
   *   - List of Muuri.Item instances or a list of item dimensions
   *     (e.g [ item1Width, item1Height, item2Width, item2Height, ... ]).
   * @param {(Array|Float32Array)} layout.slots
   *   - An Array/Float32Array instance which's length should equal to
   *     the amount of items times two. The position (width and height) of each
   *     item will be written into this array.
   * @param {Number} settings
   *   - The layout's settings as bitmasks.
   * @returns {Object}
   */
  PackerProcessor.prototype.computeLayout = function (layout, settings) {
    var items = layout.items;
    var slots = layout.slots;
    var fillGaps = !!(settings & FILL_GAPS);
    var horizontal = !!(settings & HORIZONTAL);
    var alignRight = !!(settings & ALIGN_RIGHT);
    var alignBottom = !!(settings & ALIGN_BOTTOM);
    var rounding = !!(settings & ROUNDING);
    var isPreProcessed = typeof items[0] === 'number';
    var i, bump, item, slotWidth, slotHeight, slot;

    // No need to go further if items do not exist.
    if (!items.length) return layout;

    // Compute slots for the items.
    bump = isPreProcessed ? 2 : 1;
    for (i = 0; i < items.length; i += bump) {
      // If items are pre-processed it means that items array contains only
      // the raw dimensions of the items. Otherwise we assume it is an array
      // of normal Muuri items.
      if (isPreProcessed) {
        slotWidth = items[i];
        slotHeight = items[i + 1];
      } else {
        item = items[i];
        slotWidth = item._width + item._marginLeft + item._marginRight;
        slotHeight = item._height + item._marginTop + item._marginBottom;
      }

      // If rounding is enabled let's round the item's width and height to
      // make the layout algorithm a bit more stable. This has a performance
      // cost so don't use this if not necessary.
      if (rounding) {
        slotWidth = roundNumber(slotWidth);
        slotHeight = roundNumber(slotHeight);
      }

      // Get slot data.
      slot = this.computeNextSlot(layout, slotWidth, slotHeight, fillGaps, horizontal);

      // Update layout width/height.
      if (horizontal) {
        if (slot.left + slot.width > layout.width) {
          layout.width = slot.left + slot.width;
        }
      } else {
        if (slot.top + slot.height > layout.height) {
          layout.height = slot.top + slot.height;
        }
      }

      // Add item slot data to layout slots.
      slots[++this.slotIndex] = slot.left;
      slots[++this.slotIndex] = slot.top;

      // Store the size too (for later usage) if needed.
      if (alignRight || alignBottom) {
        this.slotSizes.push(slot.width, slot.height);
      }
    }

    // If the alignment is set to right we need to adjust the results.
    if (alignRight) {
      for (i = 0; i < slots.length; i += 2) {
        slots[i] = layout.width - (slots[i] + this.slotSizes[i]);
      }
    }

    // If the alignment is set to bottom we need to adjust the results.
    if (alignBottom) {
      for (i = 1; i < slots.length; i += 2) {
        slots[i] = layout.height - (slots[i] + this.slotSizes[i]);
      }
    }

    // Reset stuff.
    this.slotSizes.length = 0;
    this.currentRects.length = 0;
    this.nextRects.length = 0;
    this.rectStore.length = 0;
    this.rectId = 0;
    this.slotIndex = -1;

    return layout;
  };

  /**
   * Calculate next slot in the layout. Returns a slot object with position and
   * dimensions data. The returned object is reused between calls.
   *
   * @param {Object} layout
   * @param {Number} slotWidth
   * @param {Number} slotHeight
   * @param {Boolean} fillGaps
   * @param {Boolean} horizontal
   * @returns {Object}
   */
  PackerProcessor.prototype.computeNextSlot = function (
    layout,
    slotWidth,
    slotHeight,
    fillGaps,
    horizontal
  ) {
    var slot = this.slotData;
    var currentRects = this.currentRects;
    var nextRects = this.nextRects;
    var ignoreCurrentRects = false;
    var rect;
    var rectId;
    var shards;
    var i;
    var j;

    // Reset new slots.
    nextRects.length = 0;

    // Set item slot initial data.
    slot.left = null;
    slot.top = null;
    slot.width = slotWidth;
    slot.height = slotHeight;

    // Try to find position for the slot from the existing free spaces in the
    // layout.
    for (i = 0; i < currentRects.length; i++) {
      rectId = currentRects[i];
      if (!rectId) continue;
      rect = this.getRect(rectId);
      if (slot.width <= rect.width + EPS && slot.height <= rect.height + EPS) {
        slot.left = rect.left;
        slot.top = rect.top;
        break;
      }
    }

    // If no position was found for the slot let's position the slot to
    // the bottom left (in vertical mode) or top right (in horizontal mode) of
    // the layout.
    if (slot.left === null) {
      if (horizontal) {
        slot.left = layout.width;
        slot.top = 0;
      } else {
        slot.left = 0;
        slot.top = layout.height;
      }

      // If gaps don't need filling let's throw away all the current free spaces
      // (currentRects).
      if (!fillGaps) {
        ignoreCurrentRects = true;
      }
    }

    // In vertical mode, if the slot's bottom overlaps the layout's bottom.
    if (!horizontal && slot.top + slot.height > layout.height + EPS) {
      // If slot is not aligned to the left edge, create a new free space to the
      // left of the slot.
      if (slot.left > MIN_SLOT_SIZE) {
        nextRects.push(this.addRect(0, layout.height, slot.left, Infinity));
      }

      // If slot is not aligned to the right edge, create a new free space to
      // the right of the slot.
      if (slot.left + slot.width < layout.width - MIN_SLOT_SIZE) {
        nextRects.push(
          this.addRect(
            slot.left + slot.width,
            layout.height,
            layout.width - slot.left - slot.width,
            Infinity
          )
        );
      }

      // Update layout height.
      layout.height = slot.top + slot.height;
    }

    // In horizontal mode, if the slot's right overlaps the layout's right edge.
    if (horizontal && slot.left + slot.width > layout.width + EPS) {
      // If slot is not aligned to the top, create a new free space above the
      // slot.
      if (slot.top > MIN_SLOT_SIZE) {
        nextRects.push(this.addRect(layout.width, 0, Infinity, slot.top));
      }

      // If slot is not aligned to the bottom, create a new free space below
      // the slot.
      if (slot.top + slot.height < layout.height - MIN_SLOT_SIZE) {
        nextRects.push(
          this.addRect(
            layout.width,
            slot.top + slot.height,
            Infinity,
            layout.height - slot.top - slot.height
          )
        );
      }

      // Update layout width.
      layout.width = slot.left + slot.width;
    }

    // Clean up the current free spaces making sure none of them overlap with
    // the slot. Split all overlapping free spaces into smaller shards that do
    // not overlap with the slot.
    if (!ignoreCurrentRects) {
      if (fillGaps) i = 0;
      for (; i < currentRects.length; i++) {
        rectId = currentRects[i];
        if (!rectId) continue;
        rect = this.getRect(rectId);
        shards = this.splitRect(rect, slot);
        for (j = 0; j < shards.length; j++) {
          rectId = shards[j];
          rect = this.getRect(rectId);
          // Make sure that the free space is within the boundaries of the
          // layout. This routine is critical to the algorithm as it makes sure
          // that there are no leftover spaces with infinite height/width.
          // It's also essential that we don't compare values absolutely to each
          // other but leave a little headroom (EPSILON) to get rid of false
          // positives.
          if (
            horizontal ? rect.left + EPS < layout.width - EPS : rect.top + EPS < layout.height - EPS
          ) {
            nextRects.push(rectId);
          }
        }
      }
    }

    // Sanitize and sort all the new free spaces that will be used in the next
    // iteration. This procedure is critical to make the bin-packing algorithm
    // work. The free spaces have to be in correct order in the beginning of the
    // next iteration.
    if (nextRects.length > 1) {
      this.purgeRects(nextRects).sort(horizontal ? this.sortRectsLeftTop : this.sortRectsTopLeft);
    }

    // Finally we need to make sure that `this.currentRects` points to
    // `nextRects` array as that is used in the next iteration's beginning when
    // we try to find a space for the next slot.
    this.currentRects = nextRects;
    this.nextRects = currentRects;

    return slot;
  };

  /**
   * Add a new rectangle to the rectangle store. Returns the id of the new
   * rectangle.
   *
   * @param {Number} left
   * @param {Number} top
   * @param {Number} width
   * @param {Number} height
   * @returns {Number}
   */
  PackerProcessor.prototype.addRect = function (left, top, width, height) {
    var rectId = ++this.rectId;
    this.rectStore[rectId] = left || 0;
    this.rectStore[++this.rectId] = top || 0;
    this.rectStore[++this.rectId] = width || 0;
    this.rectStore[++this.rectId] = height || 0;
    return rectId;
  };

  /**
   * Get rectangle data from the rectangle store by id. Optionally you can
   * provide a target object where the rectangle data will be written in. By
   * default an internal object is reused as a target object.
   *
   * @param {Number} id
   * @param {Object} [target]
   * @returns {Object}
   */
  PackerProcessor.prototype.getRect = function (id, target) {
    if (!target) target = this.rectTarget;
    target.left = this.rectStore[id] || 0;
    target.top = this.rectStore[++id] || 0;
    target.width = this.rectStore[++id] || 0;
    target.height = this.rectStore[++id] || 0;
    return target;
  };

  /**
   * Punch a hole into a rectangle and return the shards (1-4).
   *
   * @param {Object} rect
   * @param {Object} hole
   * @returns {Number[]}
   */
  PackerProcessor.prototype.splitRect = (function () {
    var shards = [];
    var width = 0;
    var height = 0;
    return function (rect, hole) {
      // Reset old shards.
      shards.length = 0;

      // If the slot does not overlap with the hole add slot to the return data
      // as is. Note that in this case we are eager to keep the slot as is if
      // possible so we use the EPSILON in favour of that logic.
      if (
        rect.left + rect.width <= hole.left + EPS ||
        hole.left + hole.width <= rect.left + EPS ||
        rect.top + rect.height <= hole.top + EPS ||
        hole.top + hole.height <= rect.top + EPS
      ) {
        shards.push(this.addRect(rect.left, rect.top, rect.width, rect.height));
        return shards;
      }

      // Left split.
      width = hole.left - rect.left;
      if (width >= MIN_SLOT_SIZE) {
        shards.push(this.addRect(rect.left, rect.top, width, rect.height));
      }

      // Right split.
      width = rect.left + rect.width - (hole.left + hole.width);
      if (width >= MIN_SLOT_SIZE) {
        shards.push(this.addRect(hole.left + hole.width, rect.top, width, rect.height));
      }

      // Top split.
      height = hole.top - rect.top;
      if (height >= MIN_SLOT_SIZE) {
        shards.push(this.addRect(rect.left, rect.top, rect.width, height));
      }

      // Bottom split.
      height = rect.top + rect.height - (hole.top + hole.height);
      if (height >= MIN_SLOT_SIZE) {
        shards.push(this.addRect(rect.left, hole.top + hole.height, rect.width, height));
      }

      return shards;
    };
  })();

  /**
   * Check if a rectangle is fully within another rectangle.
   *
   * @param {Object} a
   * @param {Object} b
   * @returns {Boolean}
   */
  PackerProcessor.prototype.isRectAWithinRectB = function (a, b) {
    return (
      a.left + EPS >= b.left &&
      a.top + EPS >= b.top &&
      a.left + a.width - EPS <= b.left + b.width &&
      a.top + a.height - EPS <= b.top + b.height
    );
  };

  /**
   * Loops through an array of rectangle ids and resets all that are fully
   * within another rectangle in the array. Resetting in this case means that
   * the rectangle id value is replaced with zero.
   *
   * @param {Number[]} rectIds
   * @returns {Number[]}
   */
  PackerProcessor.prototype.purgeRects = (function () {
    var rectA = {};
    var rectB = {};
    return function (rectIds) {
      var i = rectIds.length;
      var j;

      while (i--) {
        j = rectIds.length;
        if (!rectIds[i]) continue;
        this.getRect(rectIds[i], rectA);
        while (j--) {
          if (!rectIds[j] || i === j) continue;
          this.getRect(rectIds[j], rectB);
          if (this.isRectAWithinRectB(rectA, rectB)) {
            rectIds[i] = 0;
            break;
          }
        }
      }

      return rectIds;
    };
  })();

  /**
   * Sort rectangles with top-left gravity.
   *
   * @param {Number} aId
   * @param {Number} bId
   * @returns {Number}
   */
  PackerProcessor.prototype.sortRectsTopLeft = (function () {
    var rectA = {};
    var rectB = {};
    return function (aId, bId) {
      this.getRect(aId, rectA);
      this.getRect(bId, rectB);

      return rectA.top < rectB.top && rectA.top + EPS < rectB.top
        ? -1
        : rectA.top > rectB.top && rectA.top - EPS > rectB.top
        ? 1
        : rectA.left < rectB.left && rectA.left + EPS < rectB.left
        ? -1
        : rectA.left > rectB.left && rectA.left - EPS > rectB.left
        ? 1
        : 0;
    };
  })();

  /**
   * Sort rectangles with left-top gravity.
   *
   * @param {Number} aId
   * @param {Number} bId
   * @returns {Number}
   */
  PackerProcessor.prototype.sortRectsLeftTop = (function () {
    var rectA = {};
    var rectB = {};
    return function (aId, bId) {
      this.getRect(aId, rectA);
      this.getRect(bId, rectB);
      return rectA.left < rectB.left && rectA.left + EPS < rectB.left
        ? -1
        : rectA.left > rectB.left && rectA.left - EPS < rectB.left
        ? 1
        : rectA.top < rectB.top && rectA.top + EPS < rectB.top
        ? -1
        : rectA.top > rectB.top && rectA.top - EPS > rectB.top
        ? 1
        : 0;
    };
  })();

  if (isWorker) {
    var PACKET_INDEX_WIDTH = 1;
    var PACKET_INDEX_HEIGHT = 2;
    var PACKET_INDEX_OPTIONS = 3;
    var PACKET_HEADER_SLOTS = 4;
    var processor = new PackerProcessor();

    self.onmessage = function (msg) {
      var data = new Float32Array(msg.data);
      var items = data.subarray(PACKET_HEADER_SLOTS, data.length);
      var slots = new Float32Array(items.length);
      var settings = data[PACKET_INDEX_OPTIONS];
      var layout = {
        items: items,
        slots: slots,
        width: data[PACKET_INDEX_WIDTH],
        height: data[PACKET_INDEX_HEIGHT],
      };

      // Compute the layout (width / height / slots).
      processor.computeLayout(layout, settings);

      // Copy layout data to the return data.
      data[PACKET_INDEX_WIDTH] = layout.width;
      data[PACKET_INDEX_HEIGHT] = layout.height;
      data.set(layout.slots, PACKET_HEADER_SLOTS);

      // Send layout back to the main thread.
      postMessage(data.buffer, [data.buffer]);
    };
  }

  return PackerProcessor;
}

var PackerProcessor = createPackerProcessor();
export default PackerProcessor;

//
// WORKER UTILS
//

var blobUrl = null;
var activeWorkers = [];

export function createWorkerProcessors(amount, onmessage) {
  var workers = [];

  if (amount > 0) {
    if (!blobUrl) {
      blobUrl = URL.createObjectURL(
        new Blob(['(' + createPackerProcessor.toString() + ')(true)'], {
          type: 'application/javascript',
        })
      );
    }

    for (var i = 0, worker; i < amount; i++) {
      worker = new Worker(blobUrl);
      if (onmessage) worker.onmessage = onmessage;
      workers.push(worker);
      activeWorkers.push(worker);
    }
  }

  return workers;
}

export function destroyWorkerProcessors(workers) {
  var worker;
  var index;

  for (var i = 0; i < workers.length; i++) {
    worker = workers[i];
    worker.onmessage = null;
    worker.onerror = null;
    worker.onmessageerror = null;
    worker.terminate();

    index = activeWorkers.indexOf(worker);
    if (index > -1) activeWorkers.splice(index, 1);
  }

  if (blobUrl && !activeWorkers.length) {
    URL.revokeObjectURL(blobUrl);
    blobUrl = null;
  }
}

export function isWorkerProcessorsSupported() {
  return !!(window.Worker && window.URL && window.Blob);
}
````

## File: src/Ticker/LICENSE.md
````markdown
Copyright (c) 2018, Niklas Rämö

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: src/Ticker/Ticker.js
````javascript
/**
 * Muuri Ticker
 * Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/Ticker/LICENSE.md
 */

import raf from '../utils/raf';

/**
 * A ticker system for handling DOM reads and writes in an efficient way.
 *
 * @class
 */
function Ticker(numLanes) {
  this._nextStep = null;
  this._lanes = [];
  this._stepQueue = [];
  this._stepCallbacks = {};
  this._step = this._step.bind(this);
  for (var i = 0; i < numLanes; i++) {
    this._lanes.push(new TickerLane());
  }
}

Ticker.prototype._step = function (time) {
  var lanes = this._lanes;
  var stepQueue = this._stepQueue;
  var stepCallbacks = this._stepCallbacks;
  var i, j, id, laneQueue, laneCallbacks, laneIndices;

  this._nextStep = null;

  for (i = 0; i < lanes.length; i++) {
    laneQueue = lanes[i].queue;
    laneCallbacks = lanes[i].callbacks;
    laneIndices = lanes[i].indices;
    for (j = 0; j < laneQueue.length; j++) {
      id = laneQueue[j];
      if (!id) continue;
      stepQueue.push(id);
      stepCallbacks[id] = laneCallbacks[id];
      delete laneCallbacks[id];
      delete laneIndices[id];
    }
    laneQueue.length = 0;
  }

  for (i = 0; i < stepQueue.length; i++) {
    id = stepQueue[i];
    if (stepCallbacks[id]) stepCallbacks[id](time);
    delete stepCallbacks[id];
  }

  stepQueue.length = 0;
};

Ticker.prototype.add = function (laneIndex, id, callback) {
  this._lanes[laneIndex].add(id, callback);
  if (!this._nextStep) this._nextStep = raf(this._step);
};

Ticker.prototype.remove = function (laneIndex, id) {
  this._lanes[laneIndex].remove(id);
};

/**
 * A lane for ticker.
 *
 * @class
 */
function TickerLane() {
  this.queue = [];
  this.indices = {};
  this.callbacks = {};
}

TickerLane.prototype.add = function (id, callback) {
  var index = this.indices[id];
  if (index !== undefined) this.queue[index] = undefined;
  this.queue.push(id);
  this.callbacks[id] = callback;
  this.indices[id] = this.queue.length - 1;
};

TickerLane.prototype.remove = function (id) {
  var index = this.indices[id];
  if (index === undefined) return;
  this.queue[index] = undefined;
  delete this.callbacks[id];
  delete this.indices[id];
};

export default Ticker;
````

## File: src/utils/addClass.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import elementMatches from './elementMatches';

/**
 * Add class to an element.
 *
 * @param {HTMLElement} element
 * @param {String} className
 */
export default function addClass(element, className) {
  if (!className) return;

  if (element.classList) {
    element.classList.add(className);
  } else {
    if (!elementMatches(element, '.' + className)) {
      element.className += ' ' + className;
    }
  }
}
````

## File: src/utils/arrayInsert.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var tempArray = [];
var numberType = 'number';

/**
 * Insert an item or an array of items to array to a specified index. Mutates
 * the array. The index can be negative in which case the items will be added
 * to the end of the array.
 *
 * @param {Array} array
 * @param {*} items
 * @param {Number} [index=-1]
 */
export default function arrayInsert(array, items, index) {
  var startIndex = typeof index === numberType ? index : -1;
  if (startIndex < 0) startIndex = array.length - startIndex + 1;

  array.splice.apply(array, tempArray.concat(startIndex, 0, items));
  tempArray.length = 0;
}
````

## File: src/utils/arrayMove.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import normalizeArrayIndex from './normalizeArrayIndex';

/**
 * Move array item to another index.
 *
 * @param {Array} array
 * @param {Number} fromIndex
 *   - Index (positive or negative) of the item that will be moved.
 * @param {Number} toIndex
 *   - Index (positive or negative) where the item should be moved to.
 */
export default function arrayMove(array, fromIndex, toIndex) {
  // Make sure the array has two or more items.
  if (array.length < 2) return;

  // Normalize the indices.
  var from = normalizeArrayIndex(array, fromIndex);
  var to = normalizeArrayIndex(array, toIndex);

  // Add target item to the new position.
  if (from !== to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
  }
}
````

## File: src/utils/arraySwap.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import normalizeArrayIndex from './normalizeArrayIndex';

/**
 * Swap array items.
 *
 * @param {Array} array
 * @param {Number} index
 *   - Index (positive or negative) of the item that will be swapped.
 * @param {Number} withIndex
 *   - Index (positive or negative) of the other item that will be swapped.
 */
export default function arraySwap(array, index, withIndex) {
  // Make sure the array has two or more items.
  if (array.length < 2) return;

  // Normalize the indices.
  var indexA = normalizeArrayIndex(array, index);
  var indexB = normalizeArrayIndex(array, withIndex);
  var temp;

  // Swap the items.
  if (indexA !== indexB) {
    temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }
}
````

## File: src/utils/createUid.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var id = 0;

/**
 * Returns a unique numeric id (increments a base value on every call).
 * @returns {Number}
 */
export default function createUid() {
  return ++id;
}
````

## File: src/utils/debounce.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import { addDebounceTick, cancelDebounceTick } from '../ticker';

var debounceId = 0;

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. The returned function accepts one argument which, when
 * being `true`, cancels the debounce function immediately. When the debounce
 * function is canceled it cannot be invoked again.
 *
 * @param {Function} fn
 * @param {Number} durationMs
 * @returns {Function}
 */
export default function debounce(fn, durationMs) {
  var id = ++debounceId;
  var timer = 0;
  var lastTime = 0;
  var isCanceled = false;
  var tick = function (time) {
    if (isCanceled) return;

    if (lastTime) timer -= time - lastTime;
    lastTime = time;

    if (timer > 0) {
      addDebounceTick(id, tick);
    } else {
      timer = lastTime = 0;
      fn();
    }
  };

  return function (cancel) {
    if (isCanceled) return;

    if (durationMs <= 0) {
      if (cancel !== true) fn();
      return;
    }

    if (cancel === true) {
      isCanceled = true;
      timer = lastTime = 0;
      tick = undefined;
      cancelDebounceTick(id);
      return;
    }

    if (timer <= 0) {
      timer = durationMs;
      tick(0);
    } else {
      timer = durationMs;
    }
  };
}
````

## File: src/utils/elementMatches.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var ElProto = window.Element.prototype;
var matchesFn =
  ElProto.matches ||
  ElProto.matchesSelector ||
  ElProto.webkitMatchesSelector ||
  ElProto.mozMatchesSelector ||
  ElProto.msMatchesSelector ||
  ElProto.oMatchesSelector ||
  function () {
    return false;
  };

/**
 * Check if element matches a CSS selector.
 *
 * @param {Element} el
 * @param {String} selector
 * @returns {Boolean}
 */
export default function elementMatches(el, selector) {
  return matchesFn.call(el, selector);
}
````

## File: src/utils/getContainingBlock.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getStyle from './getStyle';
import isTransformed from './isTransformed';

/**
 * Returns an absolute positioned element's containing block, which is
 * considered to be the closest ancestor element that the target element's
 * positioning is relative to. Disclaimer: this only works as intended for
 * absolute positioned elements.
 *
 * @param {HTMLElement} element
 * @returns {(Document|Element)}
 */
export default function getContainingBlock(element) {
  // As long as the containing block is an element, static and not
  // transformed, try to get the element's parent element and fallback to
  // document. https://github.com/niklasramo/mezr/blob/0.6.1/mezr.js#L339
  var doc = document;
  var res = element || doc;
  while (res && res !== doc && getStyle(res, 'position') === 'static' && !isTransformed(res)) {
    res = res.parentElement || doc;
  }
  return res;
}
````

## File: src/utils/getCurrentStyles.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getStyle from './getStyle';
import getStyleName from './getStyleName';

/**
 * Get current values of the provided styles definition object or array.
 *
 * @param {HTMLElement} element
 * @param {(Object|Array} styles
 * @return {Object}
 */
export default function getCurrentStyles(element, styles) {
  var result = {};
  var prop, i;

  if (Array.isArray(styles)) {
    for (i = 0; i < styles.length; i++) {
      prop = styles[i];
      result[prop] = getStyle(element, getStyleName(prop));
    }
  } else {
    for (prop in styles) {
      result[prop] = getStyle(element, getStyleName(prop));
    }
  }

  return result;
}
````

## File: src/utils/getIntersectionArea.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import isOverlapping from './isOverlapping';

/**
 * Calculate intersection area between two rectangle.
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {Number}
 */
export default function getIntersectionArea(a, b) {
  if (!isOverlapping(a, b)) return 0;
  var width = Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left);
  var height = Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top);
  return width * height;
}
````

## File: src/utils/getIntersectionScore.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getIntersectionArea from './getIntersectionArea';

/**
 * Calculate how many percent the intersection area of two rectangles is from
 * the maximum potential intersection area between the rectangles.
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {Number}
 */
export default function getIntersectionScore(a, b) {
  var area = getIntersectionArea(a, b);
  if (!area) return 0;
  var maxArea = Math.min(a.width, b.width) * Math.min(a.height, b.height);
  return (area / maxArea) * 100;
}
````

## File: src/utils/getOffsetDiff.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getContainingBlock from './getContainingBlock';
import getStyleAsFloat from './getStyleAsFloat';

var offsetA = {};
var offsetB = {};
var offsetDiff = {};

/**
 * Returns the element's document offset, which in practice means the vertical
 * and horizontal distance between the element's northwest corner and the
 * document's northwest corner. Note that this function always returns the same
 * object so be sure to read the data from it instead using it as a reference.
 *
 * @param {(Document|Element|Window)} element
 * @param {Object} [offsetData]
 *   - Optional data object where the offset data will be inserted to. If not
 *     provided a new object will be created for the return data.
 * @returns {Object}
 */
function getOffset(element, offsetData) {
  var offset = offsetData || {};
  var rect;

  // Set up return data.
  offset.left = 0;
  offset.top = 0;

  // Document's offsets are always 0.
  if (element === document) return offset;

  // Add viewport scroll left/top to the respective offsets.
  offset.left = window.pageXOffset || 0;
  offset.top = window.pageYOffset || 0;

  // Window's offsets are the viewport scroll left/top values.
  if (element.self === window.self) return offset;

  // Add element's client rects to the offsets.
  rect = element.getBoundingClientRect();
  offset.left += rect.left;
  offset.top += rect.top;

  // Exclude element's borders from the offset.
  offset.left += getStyleAsFloat(element, 'border-left-width');
  offset.top += getStyleAsFloat(element, 'border-top-width');

  return offset;
}

/**
 * Calculate the offset difference two elements.
 *
 * @param {HTMLElement} elemA
 * @param {HTMLElement} elemB
 * @param {Boolean} [compareContainingBlocks=false]
 *   - When this is set to true the containing blocks of the provided elements
 *     will be used for calculating the difference. Otherwise the provided
 *     elements will be compared directly.
 * @returns {Object}
 */
export default function getOffsetDiff(elemA, elemB, compareContainingBlocks) {
  offsetDiff.left = 0;
  offsetDiff.top = 0;

  // If elements are same let's return early.
  if (elemA === elemB) return offsetDiff;

  // Compare containing blocks if necessary.
  if (compareContainingBlocks) {
    elemA = getContainingBlock(elemA);
    elemB = getContainingBlock(elemB);

    // If containing blocks are identical, let's return early.
    if (elemA === elemB) return offsetDiff;
  }

  // Finally, let's calculate the offset diff.
  getOffset(elemA, offsetA);
  getOffset(elemB, offsetB);
  offsetDiff.left = offsetB.left - offsetA.left;
  offsetDiff.top = offsetB.top - offsetA.top;

  return offsetDiff;
}
````

## File: src/utils/getPrefixedPropName.js
````javascript
/**
 * Forked from hammer.js:
 * https://github.com/hammerjs/hammer.js/blob/563b5b1e4bfbb5796798dd286cd57b7c56f1eb9e/src/utils/prefixed.js
 */

// Playing it safe here, test all potential prefixes capitalized and lowercase.
var vendorPrefixes = ['', 'webkit', 'moz', 'ms', 'o', 'Webkit', 'Moz', 'MS', 'O'];
var cache = {};

/**
 * Get prefixed CSS property name when given a non-prefixed CSS property name.
 * Returns null if the property is not supported at all.
 *
 * @param {CSSStyleDeclaration} style
 * @param {String} prop
 * @returns {String}
 */
export default function getPrefixedPropName(style, prop) {
  var prefixedProp = cache[prop] || '';
  if (prefixedProp) return prefixedProp;

  var camelProp = prop[0].toUpperCase() + prop.slice(1);
  var i = 0;
  while (i < vendorPrefixes.length) {
    prefixedProp = vendorPrefixes[i] ? vendorPrefixes[i] + camelProp : prop;
    if (prefixedProp in style) {
      cache[prop] = prefixedProp;
      return prefixedProp;
    }
    ++i;
  }

  return '';
}
````

## File: src/utils/getScrollableAncestors.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import isScrollable from './isScrollable';

/**
 * Collect element's ancestors that are potentially scrollable elements. The
 * provided element is also also included in the check, meaning that if it is
 * scrollable it is added to the result array.
 *
 * @param {HTMLElement} element
 * @param {Array} [result]
 * @returns {Array}
 */
export default function getScrollableAncestors(element, result) {
  result = result || [];

  // Find scroll parents.
  while (element && element !== document) {
    // If element is inside ShadowDOM let's get it's host node from the real
    // DOM and continue looping.
    if (element.getRootNode && element instanceof DocumentFragment) {
      element = element.getRootNode().host;
      continue;
    }

    // If element is scrollable let's add it to the scrollable list.
    if (isScrollable(element)) {
      result.push(element);
    }

    element = element.parentNode;
  }

  // Always add window to the results.
  result.push(window);

  return result;
}
````

## File: src/utils/getStyle.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var cache = typeof WeakMap === 'function' ? new WeakMap() : null;

/**
 * Returns the computed value of an element's style property as a string.
 *
 * @param {HTMLElement} element
 * @param {String} style
 * @returns {String}
 */
export default function getStyle(element, style) {
  var styles = cache && cache.get(element);

  if (!styles) {
    styles = window.getComputedStyle(element, null);
    if (cache) cache.set(element, styles);
  }

  return styles.getPropertyValue(style);
}
````

## File: src/utils/getStyleAsFloat.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getStyle from './getStyle';

/**
 * Returns the computed value of an element's style property transformed into
 * a float value.
 *
 * @param {HTMLElement} el
 * @param {String} style
 * @returns {Number}
 */
export default function getStyleAsFloat(el, style) {
  return parseFloat(getStyle(el, style)) || 0;
}
````

## File: src/utils/getStyleName.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var styleNameRegEx = /([A-Z])/g;
var prefixRegex = /^(webkit-|moz-|ms-|o-)/;
var msPrefixRegex = /^(-m-s-)/;

/**
 * Transforms a camel case style property to kebab case style property. Handles
 * vendor prefixed properties elegantly as well, e.g. "WebkitTransform" and
 * "webkitTransform" are both transformed into "-webkit-transform".
 *
 * @param {String} property
 * @returns {String}
 */
export default function getStyleName(property) {
  // Initial slicing, turns "fooBarProp" into "foo-bar-prop".
  var styleName = property.replace(styleNameRegEx, '-$1').toLowerCase();

  // Handle properties that start with "webkit", "moz", "ms" or "o" prefix (we
  // need to add an extra '-' to the beginnig).
  styleName = styleName.replace(prefixRegex, '-$1');

  // Handle properties that start with "MS" prefix (we need to transform the
  // "-m-s-" into "-ms-").
  styleName = styleName.replace(msPrefixRegex, '-ms-');

  return styleName;
}
````

## File: src/utils/getTranslate.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getStyle from './getStyle';
import transformStyle from './transformStyle';

var translateValue = {};
var transformNone = 'none';
var rxMat3d = /^matrix3d/;
var rxMatTx = /([^,]*,){4}/;
var rxMat3dTx = /([^,]*,){12}/;
var rxNextItem = /[^,]*,/;

/**
 * Returns the element's computed translateX and translateY values as a floats.
 * The returned object is always the same object and updated every time this
 * function is called.
 *
 * @param {HTMLElement} element
 * @returns {Object}
 */
export default function getTranslate(element) {
  translateValue.x = 0;
  translateValue.y = 0;

  var transform = getStyle(element, transformStyle);
  if (!transform || transform === transformNone) {
    return translateValue;
  }

  // Transform style can be in either matrix3d(...) or matrix(...).
  var isMat3d = rxMat3d.test(transform);
  var tX = transform.replace(isMat3d ? rxMat3dTx : rxMatTx, '');
  var tY = tX.replace(rxNextItem, '');

  translateValue.x = parseFloat(tX) || 0;
  translateValue.y = parseFloat(tY) || 0;

  return translateValue;
}
````

## File: src/utils/getTranslateString.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

/**
 * Transform translateX and translateY value into CSS transform style
 * property's value.
 *
 * @param {Number} x
 * @param {Number} y
 * @returns {String}
 */
export default function getTranslateString(x, y) {
  return 'translateX(' + x + 'px) translateY(' + y + 'px)';
}
````

## File: src/utils/getUnprefixedPropName.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var unprefixRegEx = /^(webkit|moz|ms|o|Webkit|Moz|MS|O)(?=[A-Z])/;
var cache = {};

/**
 * Remove any potential vendor prefixes from a property name.
 *
 * @param {String} prop
 * @returns {String}
 */
export default function getUnprefixedPropName(prop) {
  var result = cache[prop];
  if (result) return result;

  result = prop.replace(unprefixRegEx, '');

  if (result !== prop) {
    result = result[0].toLowerCase() + result.slice(1);
  }

  cache[prop] = result;

  return result;
}
````

## File: src/utils/hasPassiveEvents.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

/**
 * Check if passive events are supported.
 * https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 *
 * @returns {Boolean}
 */
export default function hasPassiveEvents() {
  var isPassiveEventsSupported = false;

  try {
    var passiveOpts = Object.defineProperty({}, 'passive', {
      get: function () {
        isPassiveEventsSupported = true;
      },
    });
    window.addEventListener('testPassive', null, passiveOpts);
    window.removeEventListener('testPassive', null, passiveOpts);
  } catch (e) {}

  return isPassiveEventsSupported;
}
````

## File: src/utils/isFunction.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var functionType = 'function';

/**
 * Check if a value is a function.
 *
 * @param {*} val
 * @returns {Boolean}
 */
export default function isFunction(val) {
  return typeof val === functionType;
}
````

## File: src/utils/isNative.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import isFunction from './isFunction';

var nativeCode = '[native code]';

/**
 * Check if a value (e.g. a method or constructor) is native code. Good for
 * detecting when a polyfill is used and when not.
 *
 * @param {*} feat
 * @returns {Boolean}
 */
export default function isNative(feat) {
  var S = window.Symbol;
  return !!(
    feat &&
    isFunction(S) &&
    isFunction(S.toString) &&
    S(feat).toString().indexOf(nativeCode) > -1
  );
}
````

## File: src/utils/isNodeList.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var htmlCollectionType = '[object HTMLCollection]';
var nodeListType = '[object NodeList]';

/**
 * Check if a value is a node list or a html collection.
 *
 * @param {*} val
 * @returns {Boolean}
 */
export default function isNodeList(val) {
  var type = Object.prototype.toString.call(val);
  return type === htmlCollectionType || type === nodeListType;
}
````

## File: src/utils/isOverlapping.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

/**
 * Check if two rectangles are overlapping.
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {Number}
 */
export default function isOverlapping(a, b) {
  return !(
    a.left + a.width <= b.left ||
    b.left + b.width <= a.left ||
    a.top + a.height <= b.top ||
    b.top + b.height <= a.top
  );
}
````

## File: src/utils/isPlainObject.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var objectType = 'object';
var objectToStringType = '[object Object]';
var toString = Object.prototype.toString;

/**
 * Check if a value is a plain object.
 *
 * @param {*} val
 * @returns {Boolean}
 */
export default function isPlainObject(val) {
  return typeof val === objectType && toString.call(val) === objectToStringType;
}
````

## File: src/utils/isScrollable.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getStyle from './getStyle';

/**
 * Check if overflow style value is scrollable.
 *
 * @param {String} value
 * @returns {Boolean}
 */
function isScrollableOverflow(value) {
  return value === 'auto' || value === 'scroll' || value === 'overlay';
}

/**
 * Check if an element is scrollable.
 *
 * @param {HTMLElement} element
 * @returns {Boolean}
 */
export default function isScrollable(element) {
  return (
    isScrollableOverflow(getStyle(element, 'overflow')) ||
    isScrollableOverflow(getStyle(element, 'overflow-x')) ||
    isScrollableOverflow(getStyle(element, 'overflow-y'))
  );
}
````

## File: src/utils/isTransformed.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getStyle from './getStyle';
import transformStyle from './transformStyle';

var transformNone = 'none';
var displayInline = 'inline';
var displayNone = 'none';
var displayStyle = 'display';

/**
 * Returns true if element is transformed, false if not. In practice the
 * element's display value must be anything else than "none" or "inline" as
 * well as have a valid transform value applied in order to be counted as a
 * transformed element.
 *
 * Borrowed from Mezr (v0.6.1):
 * https://github.com/niklasramo/mezr/blob/0.6.1/mezr.js#L661
 *
 * @param {HTMLElement} element
 * @returns {Boolean}
 */
export default function isTransformed(element) {
  var transform = getStyle(element, transformStyle);
  if (!transform || transform === transformNone) return false;

  var display = getStyle(element, displayStyle);
  if (display === displayInline || display === displayNone) return false;

  return true;
}
````

## File: src/utils/noop.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

export default function noop() {}
````

## File: src/utils/normalizeArrayIndex.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

/**
 * Normalize array index. Basically this function makes sure that the provided
 * array index is within the bounds of the provided array and also transforms
 * negative index to the matching positive index. The third (optional) argument
 * allows you to define offset for array's length in case you are adding items
 * to the array or removing items from the array.
 *
 * @param {Array} array
 * @param {Number} index
 * @param {Number} [sizeOffset]
 */
export default function normalizeArrayIndex(array, index, sizeOffset) {
  var maxIndex = Math.max(0, array.length - 1 + (sizeOffset || 0));
  return index > maxIndex ? maxIndex : index < 0 ? Math.max(maxIndex + index + 1, 0) : index;
}
````

## File: src/utils/raf.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

var dt = 1000 / 60;

var raf = (
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    return this.setTimeout(function () {
      callback(Date.now());
    }, dt);
  }
).bind(window);

/**
 * @param {Function} callback
 * @returns {Number}
 */
export default raf;
````

## File: src/utils/removeClass.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import elementMatches from './elementMatches';

/**
 * Remove class from an element.
 *
 * @param {HTMLElement} element
 * @param {String} className
 */
export default function removeClass(element, className) {
  if (!className) return;

  if (element.classList) {
    element.classList.remove(className);
  } else {
    if (elementMatches(element, '.' + className)) {
      element.className = (' ' + element.className + ' ')
        .replace(' ' + className + ' ', ' ')
        .trim();
    }
  }
}
````

## File: src/utils/setStyles.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

/**
 * Set inline styles to an element.
 *
 * @param {HTMLElement} element
 * @param {Object} styles
 */
export default function setStyles(element, styles) {
  for (var prop in styles) {
    element.style[prop] = styles[prop];
  }
}
````

## File: src/utils/toArray.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import isNodeList from './isNodeList';

/**
 * Converts a value to an array or clones an array.
 *
 * @param {*} val
 * @returns {Array}
 */
export default function toArray(val) {
  return isNodeList(val) ? Array.prototype.slice.call(val) : Array.prototype.concat(val);
}
````

## File: src/utils/transformProp.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import getPrefixedPropName from './getPrefixedPropName';

var transformProp = getPrefixedPropName(document.documentElement.style, 'transform') || 'transform';

export default transformProp;
````

## File: src/utils/transformStyle.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import transformProp from './transformProp';
import getStyleName from './getStyleName';

var transformStyle = getStyleName(transformProp);

export default transformStyle;
````

## File: src/constants.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

export var GRID_INSTANCES = {};
export var ITEM_ELEMENT_MAP = typeof Map === 'function' ? new Map() : null;

export var ACTION_SWAP = 'swap';
export var ACTION_MOVE = 'move';

export var EVENT_SYNCHRONIZE = 'synchronize';
export var EVENT_LAYOUT_START = 'layoutStart';
export var EVENT_LAYOUT_END = 'layoutEnd';
export var EVENT_LAYOUT_ABORT = 'layoutAbort';
export var EVENT_ADD = 'add';
export var EVENT_REMOVE = 'remove';
export var EVENT_SHOW_START = 'showStart';
export var EVENT_SHOW_END = 'showEnd';
export var EVENT_HIDE_START = 'hideStart';
export var EVENT_HIDE_END = 'hideEnd';
export var EVENT_FILTER = 'filter';
export var EVENT_SORT = 'sort';
export var EVENT_MOVE = 'move';
export var EVENT_SEND = 'send';
export var EVENT_BEFORE_SEND = 'beforeSend';
export var EVENT_RECEIVE = 'receive';
export var EVENT_BEFORE_RECEIVE = 'beforeReceive';
export var EVENT_DRAG_INIT = 'dragInit';
export var EVENT_DRAG_START = 'dragStart';
export var EVENT_DRAG_MOVE = 'dragMove';
export var EVENT_DRAG_SCROLL = 'dragScroll';
export var EVENT_DRAG_END = 'dragEnd';
export var EVENT_DRAG_RELEASE_START = 'dragReleaseStart';
export var EVENT_DRAG_RELEASE_END = 'dragReleaseEnd';
export var EVENT_DESTROY = 'destroy';

export var HAS_TOUCH_EVENTS = 'ontouchstart' in window;
export var HAS_POINTER_EVENTS = !!window.PointerEvent;
export var HAS_MS_POINTER_EVENTS = !!window.navigator.msPointerEnabled;

export var MAX_SAFE_FLOAT32_INTEGER = 16777216;
````

## File: src/index.d.ts
````typescript
export interface StyleDeclaration {
  [styleProperty: string]: string;
}

export type EventListener = (...args: any[]) => any;

export interface DraggerCssProps {
  touchAction?: string;
  userSelect?: string;
  userDrag?: string;
  tapHighlightColor?: string;
  touchCallout?: string;
  contentZooming?: string;
}

export interface DraggerEvent {
  type: 'start' | 'move' | 'end' | 'cancel';
  srcEvent: PointerEvent | TouchEvent | MouseEvent;
  distance: number;
  deltaX: number;
  deltaY: number;
  deltaTime: number;
  isFirst: boolean;
  isFinal: boolean;
  pointerType: 'mouse' | 'pen' | 'touch';
  identifier: number;
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  target: HTMLElement;
}

export interface DraggerStartEvent extends DraggerEvent {
  type: 'start';
  distance: 0;
  deltaX: 0;
  deltaY: 0;
  deltaTime: 0;
  isFirst: true;
  isFinal: false;
}

export interface DraggerMoveEvent extends DraggerEvent {
  type: 'move';
  isFirst: false;
  isFinal: false;
}

export interface DraggerEndEvent extends DraggerEvent {
  type: 'end';
  isFirst: false;
  isFinal: true;
}

export interface DraggerCancelEvent extends DraggerEvent {
  type: 'cancel';
  isFirst: false;
  isFinal: true;
}

export interface DraggerEvents {
  start(event: DraggerStartEvent): any;
  move(event: DraggerMoveEvent): any;
  end(event: DraggerMoveEvent): any;
  cancel(event: DraggerCancelEvent): any;
}

export interface ScrollEvent extends Event {
  type: 'scroll';
}

export interface GridEvents {
  synchronize(): any;
  layoutStart(items: Item[], isInstant: boolean): any;
  layoutEnd(items: Item[]): any;
  layoutAbort(items: Item[]): any;
  add(items: Item[]): any;
  remove(items: Item[], indices: number[]): any;
  showStart(items: Item[]): any;
  showEnd(items: Item[]): any;
  hideStart(items: Item[]): any;
  hideEnd(items: Item[]): any;
  filter(shownItems: Item[], hiddenItems: Item[]): any;
  sort(currentOrder: Item[], previousOrder: Item[]): any;
  move(data: { item: Item; fromIndex: number; toIndex: number; action: 'move' | 'swap' }): any;
  send(data: { item: Item; fromGrid: Grid; fromIndex: number; toGrid: Grid; toIndex: number }): any;
  beforeSend(data: {
    item: Item;
    fromGrid: Grid;
    fromIndex: number;
    toGrid: Grid;
    toIndex: number;
  }): any;
  receive(data: {
    item: Item;
    fromGrid: Grid;
    fromIndex: number;
    toGrid: Grid;
    toIndex: number;
  }): any;
  beforeReceive(data: {
    item: Item;
    fromGrid: Grid;
    fromIndex: number;
    toGrid: Grid;
    toIndex: number;
  }): any;
  dragInit(item: Item, event: DraggerStartEvent | DraggerMoveEvent): any;
  dragStart(item: Item, event: DraggerStartEvent | DraggerMoveEvent): any;
  dragMove(item: Item, event: DraggerMoveEvent): any;
  dragScroll(item: Item, event: ScrollEvent): any;
  dragEnd(item: Item, event: DraggerEndEvent | DraggerCancelEvent): any;
  dragReleaseStart(item: Item): any;
  dragReleaseEnd(item: Item): any;
  destroy(): any;
}

export interface LayoutData {
  id: number;
  items: Item[];
  slots: number[];
  styles?: StyleDeclaration | null;
  [key: string]: any;
}

export interface LayoutOptions {
  fillGaps?: boolean;
  horizontal?: boolean;
  alignRight?: boolean;
  alignBottom?: boolean;
  rounding?: boolean;
}

export type LayoutOnFinish = (items: Item[], isAborted: boolean) => any;

export type LayoutFunctionCallback = (layout: LayoutData) => any;

export type LayoutFunctionCancel = (...args: any[]) => any;

export type LayoutFunction = (
  grid: Grid,
  id: number,
  items: Item[],
  gridWidth: number,
  gridHeight: number,
  callback: LayoutFunctionCallback
) => void | undefined | LayoutFunctionCancel;

export type SortDataGetter = (item: Item, element: HTMLElement) => any;

export type DragStartPredicate = (
  item: Item,
  event: DraggerStartEvent | DraggerMoveEvent | DraggerEndEvent | DraggerCancelEvent
) => boolean | undefined;

export interface DragStartPredicateOptions {
  distance?: number;
  delay?: number;
}

export type DragSortGetter = (this: Grid, item: Item) => Grid[] | null | void | undefined;

export interface DragSortHeuristics {
  sortInterval?: number;
  minDragDistance?: number;
  minBounceBackAngle?: number;
}

export type DragSortPredicateResult = {
  grid: Grid;
  index: number;
  action: 'move' | 'swap';
} | null;

export type DragSortPredicate = (item: Item, event: DraggerMoveEvent) => DragSortPredicateResult;

export interface DragSortPredicateOptions {
  threshold?: number;
  action?: 'move' | 'swap';
  migrateAction?: 'move' | 'swap';
}

export interface DragReleaseOptions {
  duration?: number;
  easing?: string;
  useDragContainer?: boolean;
}

export type DragPlaceholderCreateElement = (item: Item) => HTMLElement;

export type DragPlaceholderOnCreate = (item: Item, placeholderElement: HTMLElement) => any;

export type DragPlaceholderOnRemove = (item: Item, placeholderElement: HTMLElement) => any;

export interface DragPlaceholderOptions {
  enabled?: boolean;
  createElement?: DragPlaceholderCreateElement | null;
  onCreate?: DragPlaceholderOnCreate | null;
  onRemove?: DragPlaceholderOnRemove | null;
}

export interface DragAutoScrollTarget {
  element: Window | HTMLElement;
  axis?: number;
  priority?: number;
  threshold?: number;
}

export type DragAutoScrollTargets = Array<Window | HTMLElement | DragAutoScrollTarget>;

export type DragAutoScrollTargetsGetter = (item: Item) => DragAutoScrollTargets;

export type DragAutoScrollOnStart = (
  item: Item,
  scrollElement: Window | HTMLElement,
  scrollDirection: number
) => any;

export type DragAutoScrollOnStop = (
  item: Item,
  scrollElement: Window | HTMLElement,
  scrollDirection: number
) => any;

export type DragAutoScrollHandle = (
  item: Item,
  itemClientX: number,
  itemClientY: number,
  itemWidth: number,
  itemHeight: number,
  pointerClientX: number,
  pointerClientY: number
) => {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type DragAutoScrollSpeed = (
  item: Item,
  scrollElement: Window | HTMLElement,
  scrollData: {
    direction: number;
    threshold: number;
    distance: number;
    value: number;
    maxValue: number;
    duration: number;
    speed: number;
    deltaTime: number;
    isEnding: boolean;
  }
) => number;

export interface DragAutoScrollOptions {
  targets?: DragAutoScrollTargets | DragAutoScrollTargetsGetter;
  handle?: DragAutoScrollHandle | null;
  threshold?: number;
  safeZone?: number;
  speed?: number | DragAutoScrollSpeed;
  sortDuringScroll?: boolean;
  smoothStop?: boolean;
  onStart?: DragAutoScrollOnStart | null;
  onStop?: DragAutoScrollOnStop | null;
}

export interface GridOptions {
  items?: HTMLElement[] | NodeList | HTMLCollection | string;
  showDuration?: number;
  showEasing?: string;
  visibleStyles?: StyleDeclaration;
  hideDuration?: number;
  hideEasing?: string;
  hiddenStyles?: StyleDeclaration;
  layout?: LayoutOptions | LayoutFunction;
  layoutOnResize?: boolean | number;
  layoutOnInit?: boolean;
  layoutDuration?: number;
  layoutEasing?: string;
  sortData?: { [key: string]: SortDataGetter } | null;
  dragEnabled?: boolean;
  dragHandle?: string | null;
  dragContainer?: HTMLElement | null;
  dragStartPredicate?: DragStartPredicateOptions | DragStartPredicate;
  dragAxis?: 'x' | 'y' | 'xy';
  dragSort?: boolean | DragSortGetter;
  dragSortHeuristics?: DragSortHeuristics;
  dragSortPredicate?: DragSortPredicateOptions | DragSortPredicate;
  dragRelease?: DragReleaseOptions;
  dragCssProps?: DraggerCssProps;
  dragPlaceholder?: DragPlaceholderOptions;
  dragAutoScroll?: DragAutoScrollOptions;
  containerClass?: string;
  itemClass?: string;
  itemVisibleClass?: string;
  itemHiddenClass?: string;
  itemPositioningClass?: string;
  itemDraggingClass?: string;
  itemReleasingClass?: string;
  itemPlaceholderClass?: string;
}

//
// CLASSES
//

export class Item {
  constructor(grid: Grid, element: HTMLElement, isActive?: boolean);
  getGrid(): Grid | undefined;
  getElement(): HTMLElement | undefined;
  getWidth(): number;
  getHeight(): number;
  getMargin(): { left: number; right: number; top: number; bottom: number };
  getPosition(): { left: number; top: number };
  isActive(): boolean;
  isVisible(): boolean;
  isShowing(): boolean;
  isHiding(): boolean;
  isPositioning(): boolean;
  isDragging(): boolean;
  isReleasing(): boolean;
  isDestroyed(): boolean;
}

export class ItemLayout {
  constructor(item: Item);
  start(instant: boolean, onFinish?: (isInterrupted: boolean, item: Item) => any): void;
  stop(processCallbackQueue: boolean, targetStyles?: StyleDeclaration): void;
  destroy(): void;
}

export class ItemVisibility {
  constructor(item: Item);
  show(instant: boolean, onFinish?: (isInterrupted: boolean, item: Item) => any): void;
  hide(instant: boolean, onFinish?: (isInterrupted: boolean, item: Item) => any): void;
  stop(processCallbackQueue: boolean, applyCurrentStyles?: boolean): void;
  setStyles(styles: StyleDeclaration): void;
  destroy(): void;
}

export class ItemMigrate {
  constructor(item: Item);
  start(targetGrid: Grid, position: HTMLElement | number | Item, container?: HTMLElement): void;
  stop(abort?: boolean, left?: number, top?: number): void;
  destroy(): void;
}

export class ItemDrag {
  constructor(item: Item);
  static autoScroller: AutoScroller;
  static defaultStartPredicate(
    item: Item,
    event: DraggerEvent,
    options?: DragStartPredicateOptions
  ): boolean | undefined;
  static defaultSortPredicate(
    item: Item,
    options?: DragSortPredicateOptions
  ): DragSortPredicateResult;
  stop(): void;
  sort(force?: boolean): void;
  destroy(): void;
}

export class ItemDragRelease {
  constructor(item: Item);
  start(): void;
  stop(abort?: boolean, left?: number, top?: number): void;
  isJustReleased(): boolean;
  destroy(): void;
}

export class ItemDragPlaceholder {
  constructor(item: Item);
  create(): void;
  reset(): void;
  isActive(): boolean;
  getElement(): HTMLElement | null;
  updateDimensions(): void;
  destroy(): void;
}

export class Emitter {
  constructor();
  on(event: string, listener: EventListener): this;
  off(event: string, listener: EventListener): this;
  clear(event: string): this;
  emit(event: string, ...args: any[]): this;
  burst(event: string, ...args: any[]): this;
  countListeners(event: string): number;
  destroy(): this;
}

export class Animator {
  constructor(element: HTMLElement);
  start(
    propsFrom: StyleDeclaration,
    propsTo: StyleDeclaration,
    options?: {
      duration?: number;
      easing?: string;
      onFinish?: (...args: any[]) => any;
    }
  ): void;
  stop(applyCurrentStyles?: boolean): void;
  isAnimating(): boolean;
  destroy(): void;
}

export class Dragger {
  constructor(element: HTMLElement, cssProps?: DraggerCssProps);
  isActive(): boolean;
  setTouchAction(touchAction: string): void;
  setCssProps(props?: DraggerCssProps): void;
  getDeltaX(): number;
  getDeltaY(): number;
  getDistance(): number;
  getDeltaTime(): number;
  on<T extends keyof DraggerEvents>(event: T, listener: DraggerEvents[T]): void;
  off<T extends keyof DraggerEvents>(event: T, listener: DraggerEvents[T]): void;
  destroy(): void;
}

export class AutoScroller {
  constructor();
  static AXIS_X: 1;
  static AXIS_Y: 2;
  static FORWARD: 4;
  static BACKWARD: 8;
  static LEFT: 9;
  static RIGHT: 5;
  static UP: 10;
  static DOWN: 6;
  static smoothSpeed(
    maxSpeed: number,
    acceleration: number,
    deceleration: number
  ): DragAutoScrollSpeed;
  static pointerHandle(pointerSize: number): DragAutoScrollHandle;
  addItem(item: Item): void;
  updateItem(item: Item): void;
  removeItem(item: Item): void;
  isItemScrollingX(item: Item): boolean;
  isItemScrollingY(item: Item): boolean;
  isItemScrolling(item: Item): boolean;
  destroy(): void;
}

export class Packer {
  constructor(numWorkers?: number, options?: LayoutOptions);
  setOptions(options?: LayoutOptions): void;
  createLayout(
    grid: Grid,
    id: number,
    items: Item[],
    width: number,
    height: number,
    callback: LayoutFunctionCallback
  ): LayoutFunctionCancel | void;
  cancelLayout(id: number): void;
  destroy(): void;
}

export default class Grid {
  constructor(element: string | HTMLElement, options?: GridOptions);

  static Item: typeof Item;

  static ItemLayout: typeof ItemLayout;

  static ItemVisibility: typeof ItemVisibility;

  static ItemMigrate: typeof ItemMigrate;

  static ItemDrag: typeof ItemDrag;

  static ItemDragRelease: typeof ItemDragRelease;

  static ItemDragPlaceholder: typeof ItemDragPlaceholder;

  static Emitter: typeof Emitter;

  static Animator: typeof Animator;

  static Dragger: typeof Dragger;

  static Packer: typeof Packer;

  static AutoScroller: typeof AutoScroller;

  static defaultPacker: Packer;

  static defaultOptions: GridOptions;

  on<T extends keyof GridEvents>(event: T, listener: GridEvents[T]): this;

  off<T extends keyof GridEvents>(event: T, listener: GridEvents[T]): this;

  getElement(): HTMLElement;

  getItem(target: HTMLElement | number | Item): Item | null;

  getItems(targets?: HTMLElement | number | Item | Array<HTMLElement | number | Item>): Item[];

  refreshItems(items?: Item[], force?: boolean): this;

  refreshSortData(items?: Item[]): this;

  synchronize(): this;

  layout(instant?: boolean, onFinish?: LayoutOnFinish): this;

  add(
    elements: HTMLElement | HTMLElement[] | NodeList | HTMLCollection,
    options?: {
      index?: number;
      active?: boolean;
      layout?: boolean | 'instant' | LayoutOnFinish;
    }
  ): Item[];

  remove(
    items: Item[],
    options?: {
      removeElements?: boolean;
      layout?: boolean | 'instant' | LayoutOnFinish;
    }
  ): Item[];

  show(
    items: Item[],
    options?: {
      instant?: boolean;
      syncWithLayout?: boolean;
      onFinish?: (items: Item[]) => any;
      layout?: boolean | 'instant' | LayoutOnFinish;
    }
  ): this;

  hide(
    items: Item[],
    options?: {
      instant?: boolean;
      syncWithLayout?: boolean;
      onFinish?: (items: Item[]) => any;
      layout?: boolean | 'instant' | LayoutOnFinish;
    }
  ): this;

  filter(
    predicate: string | ((item: Item) => boolean),
    options?: {
      instant?: boolean;
      syncWithLayout?: boolean;
      onFinish?: (items: Item[]) => any;
      layout?: boolean | 'instant' | LayoutOnFinish;
    }
  ): this;

  sort(
    comparer: ((a: Item, b: Item) => number) | string | Item[],
    options?: {
      descending?: boolean;
      layout?: boolean | 'instant' | LayoutOnFinish;
    }
  ): this;

  move(
    item: HTMLElement | number | Item,
    position: HTMLElement | number | Item,
    options?: {
      action?: 'move' | 'swap';
      layout?: boolean | 'instant' | LayoutOnFinish;
    }
  ): this;

  send(
    item: HTMLElement | number | Item,
    targetGrid: Grid,
    position: HTMLElement | number | Item,
    options?: {
      appendTo?: HTMLElement;
      layoutSender?: boolean | 'instant' | LayoutOnFinish;
      layoutReceiver?: boolean | 'instant' | LayoutOnFinish;
    }
  ): this;

  destroy(removeElements?: boolean): this;
}

export as namespace Muuri;
````

## File: src/index.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

export { default } from './Grid/Grid';
````

## File: src/ticker.js
````javascript
/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

import Ticker from './Ticker/Ticker';

var LAYOUT_READ = 'layoutRead';
var LAYOUT_WRITE = 'layoutWrite';
var VISIBILITY_READ = 'visibilityRead';
var VISIBILITY_WRITE = 'visibilityWrite';
var DRAG_START_READ = 'dragStartRead';
var DRAG_START_WRITE = 'dragStartWrite';
var DRAG_MOVE_READ = 'dragMoveRead';
var DRAG_MOVE_WRITE = 'dragMoveWrite';
var DRAG_SCROLL_READ = 'dragScrollRead';
var DRAG_SCROLL_WRITE = 'dragScrollWrite';
var DRAG_SORT_READ = 'dragSortRead';
var PLACEHOLDER_LAYOUT_READ = 'placeholderLayoutRead';
var PLACEHOLDER_LAYOUT_WRITE = 'placeholderLayoutWrite';
var PLACEHOLDER_RESIZE_WRITE = 'placeholderResizeWrite';
var AUTO_SCROLL_READ = 'autoScrollRead';
var AUTO_SCROLL_WRITE = 'autoScrollWrite';
var DEBOUNCE_READ = 'debounceRead';

var LANE_READ = 0;
var LANE_READ_TAIL = 1;
var LANE_WRITE = 2;

var ticker = new Ticker(3);
export default ticker;

export function addLayoutTick(itemId, read, write) {
  ticker.add(LANE_READ, LAYOUT_READ + itemId, read);
  ticker.add(LANE_WRITE, LAYOUT_WRITE + itemId, write);
}

export function cancelLayoutTick(itemId) {
  ticker.remove(LANE_READ, LAYOUT_READ + itemId);
  ticker.remove(LANE_WRITE, LAYOUT_WRITE + itemId);
}

export function addVisibilityTick(itemId, read, write) {
  ticker.add(LANE_READ, VISIBILITY_READ + itemId, read);
  ticker.add(LANE_WRITE, VISIBILITY_WRITE + itemId, write);
}

export function cancelVisibilityTick(itemId) {
  ticker.remove(LANE_READ, VISIBILITY_READ + itemId);
  ticker.remove(LANE_WRITE, VISIBILITY_WRITE + itemId);
}

export function addDragStartTick(itemId, read, write) {
  ticker.add(LANE_READ, DRAG_START_READ + itemId, read);
  ticker.add(LANE_WRITE, DRAG_START_WRITE + itemId, write);
}

export function cancelDragStartTick(itemId) {
  ticker.remove(LANE_READ, DRAG_START_READ + itemId);
  ticker.remove(LANE_WRITE, DRAG_START_WRITE + itemId);
}

export function addDragMoveTick(itemId, read, write) {
  ticker.add(LANE_READ, DRAG_MOVE_READ + itemId, read);
  ticker.add(LANE_WRITE, DRAG_MOVE_WRITE + itemId, write);
}

export function cancelDragMoveTick(itemId) {
  ticker.remove(LANE_READ, DRAG_MOVE_READ + itemId);
  ticker.remove(LANE_WRITE, DRAG_MOVE_WRITE + itemId);
}

export function addDragScrollTick(itemId, read, write) {
  ticker.add(LANE_READ, DRAG_SCROLL_READ + itemId, read);
  ticker.add(LANE_WRITE, DRAG_SCROLL_WRITE + itemId, write);
}

export function cancelDragScrollTick(itemId) {
  ticker.remove(LANE_READ, DRAG_SCROLL_READ + itemId);
  ticker.remove(LANE_WRITE, DRAG_SCROLL_WRITE + itemId);
}

export function addDragSortTick(itemId, read) {
  ticker.add(LANE_READ_TAIL, DRAG_SORT_READ + itemId, read);
}

export function cancelDragSortTick(itemId) {
  ticker.remove(LANE_READ_TAIL, DRAG_SORT_READ + itemId);
}

export function addPlaceholderLayoutTick(itemId, read, write) {
  ticker.add(LANE_READ, PLACEHOLDER_LAYOUT_READ + itemId, read);
  ticker.add(LANE_WRITE, PLACEHOLDER_LAYOUT_WRITE + itemId, write);
}

export function cancelPlaceholderLayoutTick(itemId) {
  ticker.remove(LANE_READ, PLACEHOLDER_LAYOUT_READ + itemId);
  ticker.remove(LANE_WRITE, PLACEHOLDER_LAYOUT_WRITE + itemId);
}

export function addPlaceholderResizeTick(itemId, write) {
  ticker.add(LANE_WRITE, PLACEHOLDER_RESIZE_WRITE + itemId, write);
}

export function cancelPlaceholderResizeTick(itemId) {
  ticker.remove(LANE_WRITE, PLACEHOLDER_RESIZE_WRITE + itemId);
}

export function addAutoScrollTick(read, write) {
  ticker.add(LANE_READ, AUTO_SCROLL_READ, read);
  ticker.add(LANE_WRITE, AUTO_SCROLL_WRITE, write);
}

export function cancelAutoScrollTick() {
  ticker.remove(LANE_READ, AUTO_SCROLL_READ);
  ticker.remove(LANE_WRITE, AUTO_SCROLL_WRITE);
}

export function addDebounceTick(debounceId, read) {
  ticker.add(LANE_READ, DEBOUNCE_READ + debounceId, read);
}

export function cancelDebounceTick(debounceId) {
  ticker.remove(LANE_READ, DEBOUNCE_READ + debounceId);
}
````

## File: tests/grid-constructor/container.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid instance');

  QUnit.test('Muuri constructor should not accept an invalid container element', function (assert) {
    assert.expect(5);

    assert.throws(function () {
      new Muuri();
    }, 'Should throw an error when no arguments are provided');

    assert.throws(function () {
      new Muuri(document);
    }, 'Should throw an error when document is set as container');

    assert.throws(function () {
      new Muuri(document.documentElement);
    }, 'Should throw an error when documentElement is set as container');

    assert.throws(function () {
      new Muuri(document.createElement('div'));
    }, 'Should throw an error when an element which is not in the DOM is set as the container');

    assert.throws(function () {
      new Muuri('.does-not-exist');
    }, 'Should throw an error when a valid element matching selector query string is not found');
  });

  QUnit.test('Muuri constructor should accept document body as container', function (assert) {
    var muuri = new Muuri(document.body, { items: [] });
    assert.strictEqual(
      muuri instanceof Muuri,
      true,
      'Should initiate succesfully when body element is set as the container'
    );
    muuri.destroy();
  });

  QUnit.test(
    'Muuri constructor should accept any descendant of document body as container',
    function (assert) {
      var element = document.createElement('div');
      document.body.appendChild(element);

      var childElement = document.createElement('div');
      element.appendChild(childElement);

      var muuri = new Muuri(childElement);
      assert.strictEqual(
        muuri instanceof Muuri,
        true,
        'Should initiate succesfully when an element which is not a direct child but a descendant of document body is set as the container'
      );
      muuri.destroy();

      element.parentNode.removeChild(element);
    }
  );

  QUnit.test(
    'Muuri constructor should accept a selector string as container and query it',
    function (assert) {
      var element = document.createElement('div');
      document.body.appendChild(element);

      var childElement = document.createElement('div');
      childElement.classList.add('muuri-grid');
      element.appendChild(childElement);

      var muuri = new Muuri('.muuri-grid');
      assert.strictEqual(
        muuri instanceof Muuri,
        true,
        'Should initiate succesfully when a selector string is passed as the container parameter'
      );
      muuri.destroy();

      element.parentNode.removeChild(element);
    }
  );
})(this);
````

## File: tests/grid-constructor/instance.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid instance');

  QUnit.test('Muuri should be a global function', function (assert) {
    assert.expect(1);
    assert.strictEqual(typeof Muuri, 'function');
  });
})(this);
````

## File: tests/grid-events/add.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('add: should be triggered after grid.add()', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var newElems = [
      document.createElement('div').appendChild(document.createElement('div')).parentNode,
      document.createElement('div').appendChild(document.createElement('div')).parentNode,
    ];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('add', function (items) {
      assert.strictEqual(arguments.length, 1, 'callback: should have one argument');
      assert.deepEqual(
        utils.sortedIdList(items),
        utils.sortedIdList(grid.getItems(newElems)),
        'callback: first argument should be an array of the added items'
      );
    });
    grid.add(newElems);
    teardown();
  });
})(this);
````

## File: tests/grid-events/beforeReceive.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'beforeReceive: should be triggered in the beginning of the send procedure (for the receiving grid)',
    function (assert) {
      assert.expect(11);

      var containerA = utils.createGridElements();
      var containerB = utils.createGridElements();
      var gridA = new Muuri(containerA);
      var gridB = new Muuri(containerB);
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
      };

      gridB.on('beforeReceive', function (data) {
        assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
        assert.strictEqual(
          Object.prototype.toString.call(data),
          '[object Object]',
          'callback: the argument should be a plain object'
        );
        assert.strictEqual(
          Object.keys(data).length,
          5,
          'callback: the argument should have 5 properties'
        );
        assert.strictEqual(
          data.item,
          item,
          'callback: the argument item property should be the moved item'
        );
        assert.strictEqual(
          data.fromGrid,
          gridA,
          'callback: the argument fromGrid property should be the sending grid instance'
        );
        assert.strictEqual(
          data.fromIndex,
          0,
          'callback: the argument fromIndex property should be the index where the item was moved from'
        );
        assert.strictEqual(
          data.toGrid,
          gridB,
          'callback: the argument toGrid property should be the receiving grid instance'
        );
        assert.strictEqual(
          data.toIndex,
          1,
          'callback: the argument toIndex property should be the index where the item was moved to'
        );
        assert.strictEqual(
          data.toGrid.getItems().indexOf(data.item),
          -1,
          'callback: the item should not be included in the target grid'
        );
        assert.strictEqual(
          data.fromGrid.getItems().indexOf(data.item),
          data.fromIndex,
          'callback: the item should be included in the source grid'
        );
        assert.strictEqual(
          data.item.getElement().parentNode,
          containerA,
          'callback: the item element should not be appended to the send container'
        );
      });
      gridA.on('beforeReceive', function () {
        assert.ok(false, 'should not be triggered for the sending grid');
      });
      gridA.send(item, gridB, 1, { layout: false });
      teardown();
    }
  );

  QUnit.test(
    'beforeSend: should be triggered when an item is dragged into another grid (for the receiving grid)',
    function (assert) {
      assert.expect(11);

      var done = assert.async();
      var containerA = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var containerB = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '70px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var grids = [];
      var gridA = new Muuri(containerA, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var gridB = new Muuri(containerB, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
        done();
      };

      grids.push(gridA, gridB);

      gridB.on('beforeReceive', function (data) {
        assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
        assert.strictEqual(
          Object.prototype.toString.call(data),
          '[object Object]',
          'callback: the argument should be a plain object'
        );
        assert.strictEqual(
          Object.keys(data).length,
          5,
          'callback: the argument should have 5 properties'
        );
        assert.strictEqual(
          data.item,
          item,
          'callback: the argument item property should be the dragged item'
        );
        assert.strictEqual(
          data.fromGrid,
          gridA,
          'callback: the argument fromGrid property should be the sending grid instance'
        );
        assert.strictEqual(
          data.fromIndex,
          0,
          'callback: the argument fromIndex property should be the index where the item was moved from'
        );
        assert.strictEqual(
          data.toGrid,
          gridB,
          'callback: the argument toGrid property should be the receiving grid instance'
        );
        assert.strictEqual(
          data.toIndex,
          0,
          'callback: the argument toIndex property should be the index where the item was moved to'
        );
        assert.strictEqual(
          data.toGrid.getItems().indexOf(data.item),
          -1,
          'callback: the item should not be included in the target grid'
        );
        assert.strictEqual(
          data.fromGrid.getItems().indexOf(data.item),
          data.fromIndex,
          'callback: the item should be included in the source grid'
        );
        assert.strictEqual(
          data.item.isDragging(),
          true,
          'callback: the item should be in dragging state'
        );
      });

      utils.dragElement({
        element: item.getElement(),
        x: 70,
        y: 0,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-events/beforeSend.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'beforeSend: should be triggered in the beginning of the send procedure (for the sending grid)',
    function (assert) {
      assert.expect(11);

      var containerA = utils.createGridElements();
      var containerB = utils.createGridElements();
      var gridA = new Muuri(containerA);
      var gridB = new Muuri(containerB);
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
      };

      gridA.on('beforeSend', function (data) {
        assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
        assert.strictEqual(
          Object.prototype.toString.call(data),
          '[object Object]',
          'callback: the argument should be a plain object'
        );
        assert.strictEqual(
          Object.keys(data).length,
          5,
          'callback: the argument should have 5 properties'
        );
        assert.strictEqual(
          data.item,
          item,
          'callback: the argument item property should be the moved item'
        );
        assert.strictEqual(
          data.fromGrid,
          gridA,
          'callback: the argument fromGrid property should be the sending grid instance'
        );
        assert.strictEqual(
          data.fromIndex,
          0,
          'callback: the argument fromIndex property should be the index where the item was moved from'
        );
        assert.strictEqual(
          data.toGrid,
          gridB,
          'callback: the argument toGrid property should be the receiving grid instance'
        );
        assert.strictEqual(
          data.toIndex,
          1,
          'callback: the argument toIndex property should be the index where the item was moved to'
        );
        assert.strictEqual(
          data.toGrid.getItems().indexOf(data.item),
          -1,
          'callback: the item should not be included in the target grid'
        );
        assert.strictEqual(
          data.fromGrid.getItems().indexOf(data.item),
          data.fromIndex,
          'callback: the item should be included in the source grid'
        );
        assert.strictEqual(
          data.item.getElement().parentNode,
          containerA,
          'callback: the item element should not be appended to the send container'
        );
      });
      gridB.on('beforeSend', function () {
        assert.ok(false, 'should not be triggered for the receiving grid');
      });
      gridA.send(item, gridB, 1, { layout: false });
      teardown();
    }
  );

  QUnit.test(
    'beforeSend: should be triggered when an item is dragged into another grid (for the sending grid)',
    function (assert) {
      assert.expect(11);

      var done = assert.async();
      var containerA = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var containerB = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '70px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var grids = [];
      var gridA = new Muuri(containerA, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var gridB = new Muuri(containerB, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
        done();
      };

      grids.push(gridA, gridB);

      gridA.on('beforeSend', function (data) {
        assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
        assert.strictEqual(
          Object.prototype.toString.call(data),
          '[object Object]',
          'callback: the argument should be a plain object'
        );
        assert.strictEqual(
          Object.keys(data).length,
          5,
          'callback: the argument should have 5 properties'
        );
        assert.strictEqual(
          data.item,
          item,
          'callback: the argument item property should be the dragged item'
        );
        assert.strictEqual(
          data.fromGrid,
          gridA,
          'callback: the argument fromGrid property should be the sending grid instance'
        );
        assert.strictEqual(
          data.fromIndex,
          0,
          'callback: the argument fromIndex property should be the index where the item was moved from'
        );
        assert.strictEqual(
          data.toGrid,
          gridB,
          'callback: the argument toGrid property should be the receiving grid instance'
        );
        assert.strictEqual(
          data.toIndex,
          0,
          'callback: the argument toIndex property should be the index where the item was moved to'
        );
        assert.strictEqual(
          data.toGrid.getItems().indexOf(data.item),
          -1,
          'callback: the item should not be included in the target grid'
        );
        assert.strictEqual(
          data.fromGrid.getItems().indexOf(data.item),
          data.fromIndex,
          'callback: the item should be included in the source grid'
        );
        assert.strictEqual(
          data.item.isDragging(),
          true,
          'callback: the item should be in dragging state'
        );
      });

      utils.dragElement({
        element: item.getElement(),
        x: 70,
        y: 0,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-events/destroy.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('destroy: should be triggered after grid.destroy()', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var calls = 0;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('destroy', function () {
      assert.strictEqual(arguments.length, 0, 'callback: should have no arguments');
      ++calls;
    });
    grid.destroy().destroy().destroy();
    assert.strictEqual(
      calls,
      1,
      'should be called only once no matter how many times grid.destroy() is called'
    );
    teardown();
  });
})(this);
````

## File: tests/grid-events/dragEnd.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('dragEnd: should be triggered when item is dragged', function (assert) {
    assert.expect(9);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, { dragEnabled: true });
    var item = grid.getItems()[0];
    var calls = 0;
    var isStartCalled = false;
    var isMoveCalled = false;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragStart', function () {
      isStartCalled = true;
    });

    grid.on('dragMove', function () {
      isMoveCalled = true;
    });

    grid.on('dragEnd', function (draggedItem, ev) {
      assert.strictEqual(arguments.length, 2, 'callback: should receive two arguments');
      assert.strictEqual(draggedItem, item, 'callback: first argument should be the dragged item');
      assert.strictEqual(isStartCalled, true, 'callback: should be called after dragStart');
      assert.strictEqual(isMoveCalled, true, 'callback: should be called after dragMove');

      assert.strictEqual(
        utils.isDraggerEvent(ev),
        true,
        'callback: second argument should be a Dragger event object'
      );
      assert.strictEqual(ev.isFirst, false, 'event.isFirst should be false');
      assert.strictEqual(ev.isFinal, true, 'event.isFinal should be true');
      assert.strictEqual(ev.type, 'end', 'event.type should be "end"');

      ++calls;
    });

    grid.on('dragReleaseEnd', function () {
      assert.strictEqual(calls, 1, 'should be called only once during drag process');
      teardown();
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
    });
  });
})(this);
````

## File: tests/grid-events/draggerEvent.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('draggerEvent interface', function (assert) {
    assert.expect(35);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, { dragEnabled: true });
    var item = grid.getItems()[0];
    var evStart, evMove1, evMove2, evEnd;
    var startClientX, startClientY;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    function assertDraggerEvent(draggerEvent) {
      var srcEvent = draggerEvent.srcEvent;
      var srcInterface;
      if (srcEvent.changedTouches) {
        for (var i = 0; i < srcEvent.changedTouches.length; i++) {
          if (srcEvent.changedTouches[i].identifier === draggerEvent.identifier) {
            srcInterface = srcEvent.changedTouches[i];
            break;
          }
        }
      } else {
        srcInterface = srcEvent;
      }

      if (!srcInterface) {
        assert.strictEqual(
          true,
          false,
          'No matching touch/event interface found from source event'
        );
      }

      var dX = srcInterface.clientX - startClientX;
      var dY = srcInterface.clientY - startClientY;
      var dist = Math.sqrt(dX * dX + dY * dY);

      assert.strictEqual(draggerEvent.screenX, srcInterface.screenX, 'dragger event screenX');
      assert.strictEqual(draggerEvent.screenY, srcInterface.screenY, 'dragger event screenY');
      assert.strictEqual(draggerEvent.pageX, srcInterface.pageX, 'dragger event pageX');
      assert.strictEqual(draggerEvent.pageY, srcInterface.pageY, 'dragger event pageY');
      assert.strictEqual(draggerEvent.clientX, srcInterface.clientX, 'dragger event clientX');
      assert.strictEqual(draggerEvent.clientY, srcInterface.clientY, 'dragger event clientY');
      assert.strictEqual(draggerEvent.target, srcInterface.target, 'dragger event target');
      assert.strictEqual(draggerEvent.deltaX, dX, 'dragger event deltaX');
      assert.strictEqual(draggerEvent.deltaY, dY, 'dragger event deltaY');
      assert.strictEqual(draggerEvent.distance, dist, 'dragger event distance');
      if (draggerEvent.type === 'start') {
        assert.strictEqual(draggerEvent.deltaTime, 0, 'dragger event deltaTime');
      } else {
        assert.strictEqual(draggerEvent.deltaTime > 0, true, 'dragger event deltaTime');
      }
    }

    grid.on('dragStart', function (item, ev) {
      startClientX = ev.clientX;
      startClientY = ev.clientY;
      evStart = ev;
      assertDraggerEvent(ev);
    });

    grid.on('dragMove', function (item, ev) {
      if (!evMove1) {
        evMove1 = ev;
        assertDraggerEvent(ev);
      } else if (!evMove2) {
        evMove2 = ev;
      }
    });

    grid.on('dragEnd', function (item, ev) {
      evEnd = ev;
      assertDraggerEvent(ev);
    });

    grid.on('dragReleaseEnd', function () {
      var hasUniqueEvents =
        evStart !== evMove1 &&
        evStart !== evMove2 &&
        evStart !== evEnd &&
        evMove1 !== evMove2 &&
        evMove1 !== evEnd &&
        evMove2 !== evEnd;

      assert.strictEqual(hasUniqueEvents, true, 'event objects should not be pooled');

      var hasSameId =
        evStart.identifier === evMove1.identifier &&
        evStart.identifier === evMove2.identifier &&
        evStart.identifier === evEnd.identifier;

      assert.strictEqual(hasSameId, true, 'identifier should be same for all events');

      teardown();
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
    });
  });
})(this);
````

## File: tests/grid-events/dragInit.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'dragInit: should be triggered when dragging starts (in the beginning of the drag start process)',
    function (assert) {
      assert.expect(9);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragContainer: document.body,
      });
      var item = grid.getItems()[0];
      var calls = 0;
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.on('dragInit', function (draggedItem, ev) {
        assert.strictEqual(arguments.length, 2, 'callback: should have receive two arguments');
        assert.strictEqual(
          draggedItem,
          item,
          'callback: first argument should be the dragged item'
        );
        assert.strictEqual(
          utils.matches(draggedItem.getElement(), '.muuri-item-dragging'),
          false,
          'should be called before dragging classname is set'
        );
        assert.strictEqual(
          draggedItem.getElement().parentNode,
          container,
          'should be called before dragged element is appended to it`s drag container'
        );

        assert.strictEqual(
          utils.isDraggerEvent(ev),
          true,
          'callback: second argument should be a Dragger event object'
        );
        assert.strictEqual(ev.isFirst, true, 'event.isFirst should be true');
        assert.strictEqual(ev.isFinal, false, 'event.isFinal should be false');
        assert.strictEqual(ev.type, 'start', 'event.type should be "start"');

        ++calls;
      });

      utils.dragElement({
        element: item.getElement(),
        x: 100,
        y: 100,
        onFinished: function () {
          assert.strictEqual(calls, 1, 'should be called only once during drag process');
          teardown();
        },
      });
    }
  );
})(this);
````

## File: tests/grid-events/dragMove.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('dragMove: should be triggered when item is dragged', function (assert) {
    assert.expect(8);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, { dragEnabled: true });
    var item = grid.getItems()[0];
    var calls = 0;
    var isStartCalled = false;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragStart', function () {
      isStartCalled = true;
    });

    grid.on('dragMove', function (draggedItem, ev) {
      if (!calls) {
        assert.strictEqual(arguments.length, 2, 'callback: should have receive two arguments');
        assert.strictEqual(
          draggedItem,
          item,
          'callback: first argument should be the dragged item'
        );
        assert.strictEqual(isStartCalled, true, 'callback: should be called after dragStart');

        assert.strictEqual(
          utils.isDraggerEvent(ev),
          true,
          'callback: second argument should be a Dragger event object'
        );
        assert.strictEqual(ev.isFirst, false, 'event.isFirst should be false');
        assert.strictEqual(ev.isFinal, false, 'event.isFinal should be false');
        assert.strictEqual(ev.type, 'move', 'event.type should be "move"');
      }
      ++calls;
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
      onFinished: function () {
        assert.strictEqual(calls > 1, true, 'should be called many times during drag process');
        teardown();
      },
    });
  });
})(this);
````

## File: tests/grid-events/dragReleaseEnd.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('dragReleaseEnd: should be triggered when item has positioned after drag', function (
    assert
  ) {
    assert.expect(2);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, { dragEnabled: true });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragReleaseEnd', function (draggedItem) {
      assert.strictEqual(arguments.length, 1, 'callback: should have receive one argument');
      assert.strictEqual(draggedItem, item, 'callback: first argument should be the released item');
      teardown();
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
    });
  });
})(this);
````

## File: tests/grid-events/dragReleaseStart.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('dragReleaseStart: should be triggered when item is released after drag', function (
    assert
  ) {
    assert.expect(2);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, { dragEnabled: true });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragReleaseStart', function (draggedItem) {
      assert.strictEqual(arguments.length, 1, 'callback: should have receive one argument');
      assert.strictEqual(draggedItem, item, 'callback: first argument should be the released item');
    });

    grid.on('dragReleaseEnd', function () {
      teardown();
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
    });
  });
})(this);
````

## File: tests/grid-events/dragScroll.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('dragScroll: should be triggered when scroll occurs during drag process', function (
    assert
  ) {
    assert.expect(4);

    var done = assert.async();
    var docElem = document.documentElement;
    var body = document.body;
    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragSortInterval: 100,
      dragSortPredicate: {
        threshold: 50,
        action: 'move',
      },
    });
    var item = grid.getItems()[0];
    var calls = 0;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      utils.setStyles(docElem, { height: '' });
      body.scrollTop = 0;
      done();
    };

    utils.setStyles(docElem, { height: '1000%' });

    grid.on('dragStart', function () {
      body.scrollTop = 100;
      docElem.scrollTop = 100;
    });

    grid.on('dragScroll', function (draggedItem, ev) {
      assert.strictEqual(arguments.length, 2, 'callback: should have receive two arguments');
      assert.strictEqual(draggedItem, item, 'callback: first argument should be the dragged item');
      assert.strictEqual(
        utils.isScrollEvent(ev),
        true,
        'callback: second argument should be a scroll event object'
      );
      ++calls;
    });

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 100,
      onFinished: function () {
        assert.strictEqual(calls, 1, 'should be called only once');
        teardown();
      },
    });
  });
})(this);
````

## File: tests/grid-events/dragStart.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'dragStart: should be triggered when dragging starts (in the end of the drag start process)',
    function (assert) {
      assert.expect(9);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragContainer: document.body,
      });
      var item = grid.getItems()[0];
      var calls = 0;
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.on('dragStart', function (draggedItem, ev) {
        assert.strictEqual(arguments.length, 2, 'callback: should have receive two arguments');
        assert.strictEqual(
          draggedItem,
          item,
          'callback: first argument should be the dragged item'
        );
        assert.strictEqual(
          utils.matches(draggedItem.getElement(), '.muuri-item-dragging'),
          true,
          'should be called after dragging classname is set'
        );
        assert.strictEqual(
          draggedItem.getElement().parentNode,
          document.body,
          'should be called after dragged element is appended to it`s drag container'
        );

        assert.strictEqual(
          utils.isDraggerEvent(ev),
          true,
          'callback: second argument should be a Dragger event object'
        );
        assert.strictEqual(ev.isFirst, true, 'event.isFirst should be true');
        assert.strictEqual(ev.isFinal, false, 'event.isFinal should be false');
        assert.strictEqual(ev.type, 'start', 'event.type should be "start"');

        ++calls;
      });

      utils.dragElement({
        element: item.getElement(),
        x: 100,
        y: 100,
        onFinished: function () {
          assert.strictEqual(calls, 1, 'should be called only once during drag process');
          teardown();
        },
      });
    }
  );
})(this);
````

## File: tests/grid-events/filter.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('filter: should be triggered after grid.filter()', function (assert) {
    assert.expect(3);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var itemsToShow = grid.getItems([0, 1, 2, 3, 4]);
    var itemsToHide = grid.getItems([5, 6, 7, 8, 9]);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('filter', function (shownItems, hiddenItems) {
      assert.strictEqual(arguments.length, 2, 'callback: should have two arguments');
      assert.deepEqual(
        utils.sortedIdList(shownItems),
        utils.sortedIdList(itemsToShow),
        'callback: array of shown items should be the first argument'
      );
      assert.deepEqual(
        utils.sortedIdList(hiddenItems),
        utils.sortedIdList(itemsToHide),
        'callback: array of hidden items should be the second argument'
      );
    });
    grid.filter(function (item) {
      return itemsToShow.indexOf(item) > -1;
    });
    teardown();
  });
})(this);
````

## File: tests/grid-events/hideEnd.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'hideEnd: should be triggered after grid.hide() (after the hiding is finished)',
    function (assert) {
      assert.expect(2);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.hide(grid.getItems(0), { layout: false, instant: true, syncWithLayout: false });
      grid.on('hideEnd', function (items) {
        assert.strictEqual(arguments.length, 1, 'callback: should have one argument');
        assert.deepEqual(
          utils.sortedIdList(items),
          utils.sortedIdList(grid.getItems([0, 1, 2])),
          'callback: first argument should be an array of all the items that are were hidden'
        );
        teardown();
      });
      grid.hide(grid.getItems([0, 1, 2]), { layout: false, syncWithLayout: false });
    }
  );
})(this);
````

## File: tests/grid-events/hideStart.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'hideStart: should be triggered after grid.hide() (before the showing starts)',
    function (assert) {
      assert.expect(2);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      grid.hide(grid.getItems(0), { layout: false, instant: true, syncWithLayout: false });
      grid.on('hideStart', function (items) {
        assert.strictEqual(arguments.length, 1, 'callback: should have one argument');
        assert.deepEqual(
          utils.sortedIdList(items),
          utils.sortedIdList(grid.getItems([0, 1, 2])),
          'callback: first argument should be an array of all the items that are about to be hidden'
        );
      });
      grid.hide(grid.getItems([0, 1, 2]), { layout: false, syncWithLayout: false });
      teardown();
    }
  );
})(this);
````

## File: tests/grid-events/layoutAbort.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'layoutAbort: should be emitted before layoutStart if current layout process is aborted',
    function (assert) {
      assert.expect(8);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var expectedItems = [];
      var firstItem = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.on('layoutAbort', function (items) {
        assert.strictEqual(arguments.length, 1, 'callback: should have a single argument');
        assert.deepEqual(
          utils.idList(items),
          utils.idList(expectedItems),
          'callback: first argument should be an array of items that were active when the layout was triggered'
        );
      });

      grid.move(1, -1);

      // Abort #1
      expectedItems = utils.getActiveItems(grid);
      grid.move(1, -1);

      // Abort #2
      expectedItems = utils.getActiveItems(grid);
      grid.hide([firstItem]);

      // Abort #3
      expectedItems = utils.getActiveItems(grid);
      grid.show([firstItem]);

      // Abort #4
      expectedItems = utils.getActiveItems(grid);
      grid.hide([firstItem]);

      teardown();
    }
  );
})(this);
````

## File: tests/grid-events/layoutEnd.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'layoutEnd: should be triggered after grid.layout() (after the items have positioned)',
    function (assert) {
      assert.expect(3);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var isAnyItemPositioning = false;
      var expectedItems = [];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.on('layoutEnd', function (items) {
        items.forEach(function (item) {
          if (item.isPositioning()) {
            isAnyItemPositioning = true;
          }
        });
        assert.strictEqual(arguments.length, 1, 'callback: should have a single argument');
        assert.deepEqual(
          utils.sortedIdList(items),
          utils.sortedIdList(expectedItems),
          'callback: first argument should be an array of items that were active when the layout was triggered'
        );
        assert.strictEqual(
          isAnyItemPositioning,
          false,
          'callback: none of the items in the first argument should be in positioning state'
        );
        teardown();
      });
      grid.hide(grid.getItems(0), { instant: true, layout: false, syncWithLayout: false });
      expectedItems = utils.getActiveItems(grid);
      grid.move(1, -1);
    }
  );
})(this);
````

## File: tests/grid-events/layoutStart.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'layoutStart: should be triggered after grid.layout() (before the items are positioned)',
    function (assert) {
      assert.expect(6);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var layoutId = grid._layout.id;
      var numEvents = 0;
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      utils.setStyles(container, { height: '' });
      grid.on('layoutStart', function (items, isInstant) {
        ++numEvents;
        if (numEvents === 1) {
          assert.strictEqual(arguments.length, 2, 'should have two arguments');
          assert.deepEqual(
            utils.sortedIdList(items),
            utils.sortedIdList(utils.getActiveItems(grid)),
            'first argument should be an array of the items that are about to be laid out'
          );
          assert.strictEqual(
            isInstant,
            false,
            'second argument should be false when layout was not called with instant flag'
          );
          assert.notStrictEqual(
            grid._layout.id,
            layoutId,
            'should be called after layout is created'
          );
          assert.notStrictEqual(
            container.style.height,
            '',
            'should be called after container dimensions are updated'
          );
        } else if (numEvents === 2) {
          assert.strictEqual(
            isInstant,
            true,
            'second argument should be true when layout was called with instant flag'
          );
        } else {
          assert.strictEqual(
            true,
            false,
            'there should be one event per layout call, even if ongoing layout is aborted'
          );
        }
      });
      grid.move(0, -1);
      grid.layout(true);
      teardown();
    }
  );
})(this);
````

## File: tests/grid-events/move.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('move: should be triggered after grid.move()', function (assert) {
    assert.expect(7);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('move', function (data) {
      assert.strictEqual(arguments.length, 1, 'callback: should have one argument');
      assert.strictEqual(
        Object.prototype.toString.call(data),
        '[object Object]',
        'callback: first argument should be a plain object'
      );
      assert.strictEqual(
        Object.keys(data).length,
        4,
        'callback: first argument should have 4 properties'
      );
      assert.strictEqual(
        data.item,
        item,
        'callback: first argument item property should be the moved item'
      );
      assert.strictEqual(
        data.action,
        'move',
        'callback: first argument action property should be the correct action'
      );
      assert.strictEqual(
        data.fromIndex,
        0,
        'callback: first argument fromIndex property should be the index where the item was moved from'
      );
      assert.strictEqual(
        data.toIndex,
        1,
        'callback: first argument toIndex property should be the index where the item was moved to'
      );
    });
    grid.move(item, 1, { layout: false });
    teardown();
  });

  QUnit.test('move: should be triggered when sorting occurs during drag', function (assert) {
    assert.expect(7);

    var done = assert.async();
    var container = utils.createGridElements({
      containerStyles: {
        position: 'relative',
        width: '70px',
      },
    });
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragSortInterval: 100,
      dragSortPredicate: {
        threshold: 50,
        action: 'move',
      },
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('move', function (data) {
      assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
      assert.strictEqual(
        Object.prototype.toString.call(data),
        '[object Object]',
        'callback: the argument should be a plain object'
      );
      assert.strictEqual(
        Object.keys(data).length,
        4,
        'callback: the argument should have 4 properties'
      );
      assert.strictEqual(
        data.item,
        item,
        'callback: the argument item property should be the moved item'
      );
      assert.strictEqual(
        data.action,
        'move',
        'callback: the argument action property should be the correct action'
      );
      assert.strictEqual(
        data.fromIndex,
        0,
        'callback: the argument fromIndex property should be the index where the item was moved from'
      );
      assert.strictEqual(
        data.toIndex,
        1,
        'callback: the argument toIndex property should be the index where the item was moved to'
      );
    });

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 70,
      onFinished: teardown,
    });
  });
})(this);
````

## File: tests/grid-events/receive.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'receive: should be triggered in the end of the send procedure (for the receiving grid)',
    function (assert) {
      assert.expect(11);

      var containerA = utils.createGridElements();
      var containerB = utils.createGridElements();
      var gridA = new Muuri(containerA);
      var gridB = new Muuri(containerB);
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
      };

      gridB.on('receive', function (data) {
        assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
        assert.strictEqual(
          Object.prototype.toString.call(data),
          '[object Object]',
          'callback: the argument should be a plain object'
        );
        assert.strictEqual(
          Object.keys(data).length,
          5,
          'callback: the argument should have 5 properties'
        );
        assert.strictEqual(
          data.item,
          item,
          'callback: the argument item property should be the moved item'
        );
        assert.strictEqual(
          data.fromGrid,
          gridA,
          'callback: the argument fromGrid property should be the sending grid instance'
        );
        assert.strictEqual(
          data.fromIndex,
          0,
          'callback: the argument fromIndex property should be the index where the item was moved from'
        );
        assert.strictEqual(
          data.toGrid,
          gridB,
          'callback: the argument toGrid property should be the receiving grid instance'
        );
        assert.strictEqual(
          data.toIndex,
          1,
          'callback: the argument toIndex property should be the index where the item was moved to'
        );
        assert.strictEqual(
          data.toGrid.getItems().indexOf(data.item),
          data.toIndex,
          'callback: the item should be included in the target grid in correct position'
        );
        assert.strictEqual(
          data.fromGrid.getItems().indexOf(data.item),
          -1,
          'callback: the item should not be included in the source grid'
        );
        assert.strictEqual(
          data.item.getElement().parentNode,
          document.body,
          'callback: the item element should be appended to the send container'
        );
      });
      gridA.on('receive', function () {
        assert.ok(false, 'should not be triggered for the sending grid');
      });
      gridA.send(item, gridB, 1, { layout: false });
      teardown();
    }
  );

  QUnit.test(
    'receive: should be triggered when an item is dragged into another grid (for the receiving grid)',
    function (assert) {
      assert.expect(11);

      var done = assert.async();
      var containerA = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var containerB = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '70px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var grids = [];
      var gridA = new Muuri(containerA, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var gridB = new Muuri(containerB, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
        done();
      };

      grids.push(gridA, gridB);

      gridB.on('receive', function (data) {
        assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
        assert.strictEqual(
          Object.prototype.toString.call(data),
          '[object Object]',
          'callback: the argument should be a plain object'
        );
        assert.strictEqual(
          Object.keys(data).length,
          5,
          'callback: the argument should have 5 properties'
        );
        assert.strictEqual(
          data.item,
          item,
          'callback: the argument item property should be the dragged item'
        );
        assert.strictEqual(
          data.fromGrid,
          gridA,
          'callback: the argument fromGrid property should be the sending grid instance'
        );
        assert.strictEqual(
          data.fromIndex,
          0,
          'callback: the argument fromIndex property should be the index where the item was moved from'
        );
        assert.strictEqual(
          data.toGrid,
          gridB,
          'callback: the argument toGrid property should be the receiving grid instance'
        );
        assert.strictEqual(
          data.toIndex,
          0,
          'callback: the argument toIndex property should be the index where the item was moved to'
        );
        assert.strictEqual(
          data.toGrid.getItems().indexOf(data.item),
          data.toIndex,
          'callback: the item should be included in the target grid in correct position'
        );
        assert.strictEqual(
          data.fromGrid.getItems().indexOf(data.item),
          -1,
          'callback: the item should not be included in the source grid'
        );
        assert.strictEqual(
          data.item.isDragging(),
          true,
          'callback: the item should be in dragging state'
        );
      });

      utils.dragElement({
        element: item.getElement(),
        x: 70,
        y: 0,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-events/remove.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('remove: should be triggered after grid.remove()', function (assert) {
    assert.expect(3);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var removedIndices = [0, 1];
    var removedItems = grid.getItems(removedIndices);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('remove', function (items, indices) {
      assert.strictEqual(arguments.length, 2, 'callback: should have two arguments');
      assert.deepEqual(
        utils.sortedIdList(items),
        utils.sortedIdList(removedItems),
        'callback: first argument should be an array of the removed items'
      );
      assert.deepEqual(
        indices,
        removedIndices,
        'callback: second argument should be an array of the removed item indices'
      );
    });
    grid.remove(removedItems);
    teardown();
  });
})(this);
````

## File: tests/grid-events/send.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'send: should be triggered in the end of the send procedure (for the sending grid)',
    function (assert) {
      assert.expect(11);

      var containerA = utils.createGridElements();
      var containerB = utils.createGridElements();
      var gridA = new Muuri(containerA);
      var gridB = new Muuri(containerB);
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
      };

      gridA.on('send', function (data) {
        assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
        assert.strictEqual(
          Object.prototype.toString.call(data),
          '[object Object]',
          'callback: the argument should be a plain object'
        );
        assert.strictEqual(
          Object.keys(data).length,
          5,
          'callback: the argument should have 5 properties'
        );
        assert.strictEqual(
          data.item,
          item,
          'callback: the argument item property should be the moved item'
        );
        assert.strictEqual(
          data.fromGrid,
          gridA,
          'callback: the argument fromGrid property should be the sending grid instance'
        );
        assert.strictEqual(
          data.fromIndex,
          0,
          'callback: the argument fromIndex property should be the index where the item was moved from'
        );
        assert.strictEqual(
          data.toGrid,
          gridB,
          'callback: the argument toGrid property should be the receiving grid instance'
        );
        assert.strictEqual(
          data.toIndex,
          1,
          'callback: the argument toIndex property should be the index where the item was moved to'
        );
        assert.strictEqual(
          data.toGrid.getItems().indexOf(data.item),
          data.toIndex,
          'callback: the item should be included in the target grid in correct position'
        );
        assert.strictEqual(
          data.fromGrid.getItems().indexOf(data.item),
          -1,
          'callback: the item should not be included in the source grid'
        );
        assert.strictEqual(
          data.item.getElement().parentNode,
          document.body,
          'callback: the item element should be appended to the send container'
        );
      });
      gridB.on('send', function () {
        assert.ok(false, 'should not be triggered for the receiving grid');
      });
      gridA.send(item, gridB, 1, { layout: false });
      teardown();
    }
  );

  QUnit.test(
    'send: should be triggered when an item is dragged into another grid (for the sending grid)',
    function (assert) {
      assert.expect(11);

      var done = assert.async();
      var containerA = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var containerB = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '70px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var grids = [];
      var gridA = new Muuri(containerA, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var gridB = new Muuri(containerB, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
        done();
      };

      grids.push(gridA, gridB);

      gridA.on('send', function (data) {
        assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
        assert.strictEqual(
          Object.prototype.toString.call(data),
          '[object Object]',
          'callback: the argument should be a plain object'
        );
        assert.strictEqual(
          Object.keys(data).length,
          5,
          'callback: the argument should have 5 properties'
        );
        assert.strictEqual(
          data.item,
          item,
          'callback: the argument item property should be the dragged item'
        );
        assert.strictEqual(
          data.fromGrid,
          gridA,
          'callback: the argument fromGrid property should be the sending grid instance'
        );
        assert.strictEqual(
          data.fromIndex,
          0,
          'callback: the argument fromIndex property should be the index where the item was moved from'
        );
        assert.strictEqual(
          data.toGrid,
          gridB,
          'callback: the argument toGrid property should be the receiving grid instance'
        );
        assert.strictEqual(
          data.toIndex,
          0,
          'callback: the argument toIndex property should be the index where the item was moved to'
        );
        assert.strictEqual(
          data.toGrid.getItems().indexOf(data.item),
          data.toIndex,
          'callback: the item should be included in the target grid in correct position'
        );
        assert.strictEqual(
          data.fromGrid.getItems().indexOf(data.item),
          -1,
          'callback: the item should not be included in the source grid'
        );
        assert.strictEqual(
          data.item.isDragging(),
          true,
          'callback: the item should be in dragging state'
        );
      });

      utils.dragElement({
        element: item.getElement(),
        x: 70,
        y: 0,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-events/showEnd.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'showEnd: should be triggered after grid.show() (after the showing is finished)',
    function (assert) {
      assert.expect(2);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.on('showEnd', function (items) {
        assert.strictEqual(arguments.length, 1, 'callback: should have one argument');
        assert.deepEqual(
          utils.sortedIdList(items),
          utils.sortedIdList(grid.getItems([0, 1, 2])),
          'callback: first argument should be an array of all the items that are were shown'
        );
        teardown();
      });
      grid.hide(grid.getItems([0, 1]), { layout: false, instant: true, syncWithLayout: false });
      grid.show(grid.getItems([0, 1, 2]), { layout: false, syncWithLayout: false });
    }
  );
})(this);
````

## File: tests/grid-events/showStart.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test(
    'showStart: should be triggered after grid.show() (just before the showing starts)',
    function (assert) {
      assert.expect(2);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      grid.on('showStart', function (items) {
        assert.strictEqual(arguments.length, 1, 'callback: should have one argument');
        assert.deepEqual(
          utils.sortedIdList(items),
          utils.sortedIdList(grid.getItems([0, 1, 2])),
          'callback: first argument should be an array of all the items that are about to be shown'
        );
      });
      grid.hide(grid.getItems([0, 1]), { layout: false, instant: true, syncWithLayout: false });
      grid.show(grid.getItems([0, 1, 2]), { layout: false, syncWithLayout: false });
      teardown();
    }
  );
})(this);
````

## File: tests/grid-events/sort.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('sort: should be triggered after grid.sort()', function (assert) {
    assert.expect(3);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var currentOrder = grid.getItems();
    var newOrder = currentOrder.concat().reverse();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('sort', function (itemsNew, itemsPrev) {
      assert.strictEqual(arguments.length, 2, 'callback: should have two arguments');
      assert.deepEqual(
        utils.sortedIdList(itemsNew),
        utils.sortedIdList(newOrder),
        'callback: first argument should be an array of all the items in their new order'
      );
      assert.deepEqual(
        utils.sortedIdList(itemsPrev),
        utils.sortedIdList(currentOrder),
        'callback: second argument should be an array of all the items in their previous order'
      );
    });
    grid.sort(newOrder);
    teardown();
  });
})(this);
````

## File: tests/grid-events/synchronize.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid events');

  QUnit.test('synchronize: should be triggered after grid.synchronize()', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('synchronize', function () {
      assert.strictEqual(arguments.length, 0, 'callback: should have no arguments');
    });
    grid.synchronize();
    teardown();
  });
})(this);
````

## File: tests/grid-methods/add.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('add: should return the added items', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var elem = document.createElement('div').appendChild(document.createElement('div')).parentNode;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(idList(grid.add(elem)), idList(grid.getItems(elem)));
    teardown();
  });

  QUnit.test(
    'add: should accept an element or an array of elements as the first argument',
    function (assert) {
      assert.expect(2);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var elemA = document.createElement('div').appendChild(document.createElement('div'))
        .parentNode;
      var elemB = document.createElement('div').appendChild(document.createElement('div'))
        .parentNode;
      var elemC = document.createElement('div').appendChild(document.createElement('div'))
        .parentNode;
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      assert.deepEqual(idList(grid.add(elemA)), idList(grid.getItems(elemA)));
      assert.deepEqual(idList(grid.add([elemB, elemC])), idList(grid.getItems([elemB, elemC])));
      teardown();
    }
  );

  QUnit.test('add: should add the item to the last index by default', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var elem = document.createElement('div').appendChild(document.createElement('div')).parentNode;
    var item = grid.add(elem)[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.getItems().indexOf(item), 10);
    teardown();
  });

  QUnit.test('add: should allow defining the index where the items are inserted to', function (
    assert
  ) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var elem = document.createElement('div').appendChild(document.createElement('div')).parentNode;
    var item = grid.add(elem, { index: 1 })[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.getItems().indexOf(item), 1);
    teardown();
  });

  QUnit.test('add: should automatically layout the grid after add', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var elem = document.createElement('div').appendChild(document.createElement('div')).parentNode;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('layoutStart', function () {
      assert.strictEqual(true, true);
      teardown();
    });
    grid.add(elem);
  });

  QUnit.test(
    'add: should not trigger layout after add when layout option is set to false',
    function (assert) {
      assert.expect(0);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var elem = document.createElement('div').appendChild(document.createElement('div'))
        .parentNode;
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      grid.on('layoutStart', function () {
        assert.strictEqual(true, false);
      });
      grid.add(elem, { layout: false });
      teardown();
    }
  );

  QUnit.test(
    'add: should trigger unanimated layout after add when layout option is set to "instant"',
    function (assert) {
      assert.expect(1);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var elem = document.createElement('div').appendChild(document.createElement('div'))
        .parentNode;
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      grid.on('layoutEnd', function () {
        assert.strictEqual(true, true);
        teardown();
      });
      grid.add(elem, { layout: 'instant' });
    }
  );

  QUnit.test(
    'add: should trigger layout and call callback function after add when a callback function is provided to the layout option',
    function (assert) {
      assert.expect(2);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var elem = document.createElement('div').appendChild(document.createElement('div'))
        .parentNode;
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };
      var args;

      grid.on('layoutEnd', function (items) {
        assert.notStrictEqual(
          args,
          items,
          'layout callback items argument should not the same object as the layoutEnd event callback`s argument'
        );
        assert.deepEqual(
          idList(args),
          idList(items),
          'layout callback should receive the same items as the layoutEnd event callback'
        );
        teardown();
      });

      grid.add(elem, {
        layout: function (items) {
          args = items;
        },
      });
    }
  );
})(this);
````

## File: tests/grid-methods/destroy.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('destroy: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.destroy(), grid);
    teardown();
  });
})(this);
````

## File: tests/grid-methods/filter.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('filter: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(
      grid.filter(function () {
        return 0;
      }),
      grid
    );

    teardown();
  });

  QUnit.test('filter: should accept a function as the first argument', function (assert) {
    assert.expect(12);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var firstItem = items[0];
    var i = 0;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.filter(function (item) {
      assert.strictEqual(
        item._id,
        items[i]._id,
        'predicate function should be called in ascending order for each item'
      );
      ++i;
      return item === firstItem;
    });

    assert.strictEqual(i, 10, 'predicate function should be called for each item');
    assert.deepEqual(
      idList(utils.getVisibleItems(grid)),
      idList([firstItem]),
      'the items for which true were returned should be shown and others hidden'
    );

    teardown();
  });

  QUnit.test('filter: should accept a selector as the first argument', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var firstItem = items[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    firstItem.getElement().classList.add('foo');
    grid.filter('.foo');

    assert.deepEqual(idList(utils.getVisibleItems(grid)), idList([firstItem]));

    teardown();
  });

  QUnit.test('filter: should not show/hide items instantly by default', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(grid.getItems(0), { instant: true }).filter(function (item) {
      return item === items[0];
    });

    assert.deepEqual(idList(utils.getShowingItems(grid)), idList(items.slice(0, 1)));
    assert.deepEqual(idList(utils.getHidingItems(grid)), idList(items.slice(1)));

    teardown();
  });

  QUnit.test('filter: should show/hide items instantly if instant option is true', function (
    assert
  ) {
    assert.expect(4);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(grid.getItems(0), { instant: true }).filter(
      function (item) {
        return item === items[0];
      },
      { instant: true }
    );

    assert.strictEqual(utils.getShowingItems(grid).length, 0);
    assert.strictEqual(utils.getHidingItems(grid).length, 0);
    assert.deepEqual(idList(utils.getVisibleItems(grid)), idList(items.slice(0, 1)));
    assert.deepEqual(idList(utils.getHiddenItems(grid)), idList(items.slice(1)));

    teardown();
  });

  QUnit.test(
    'filter: should call the onFinish callback once the animations are finished',
    function (assert) {
      assert.expect(5);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var items = grid.getItems();
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.hide(grid.getItems(0), { instant: true }).filter(
        function (item) {
          return item === items[0];
        },
        {
          onFinish: function (itemsToShow, itemsToHide) {
            assert.strictEqual(arguments.length, 2, 'callback: should receive two arguments');
            assert.deepEqual(
              idList(itemsToShow),
              idList(items.slice(0, 1)),
              'callback: should receive the shown items as it`s first argument'
            );
            assert.deepEqual(
              idList(itemsToHide),
              idList(items.slice(1)),
              'callback: should receive the hidden items as it`s second argument'
            );
            assert.strictEqual(
              items[0].isVisible(),
              true,
              'callback: the first argument items should be visible'
            );
            assert.strictEqual(
              items[1].isVisible(),
              false,
              'callback: the second argument items should be hidden'
            );
            teardown();
          },
        }
      );
    }
  );
})(this);
````

## File: tests/grid-methods/getElement.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('getElement: should return the container element', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.getElement(), container);
    teardown();
  });
})(this);
````

## File: tests/grid-methods/getItems.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('getItems: should return the instance`s items', function (assert) {
    assert.expect(6);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    assert.notStrictEqual(
      idList(grid.getItems()),
      idList(grid._items),
      'should return a new array and not a reference to the internal array'
    );
    assert.deepEqual(
      idList(grid.getItems()),
      idList(grid._items),
      'should return all items in correct order if no arguments are provided'
    );
    assert.deepEqual(
      idList(grid.getItems(0)),
      idList([items[0]]),
      'should allow providing an index as the first argument'
    );
    assert.deepEqual(
      idList(grid.getItems(items[0].getElement())),
      idList([items[0]]),
      'should allow providing an element as the first argument'
    );
    assert.deepEqual(
      idList(grid.getItems(items[0])),
      idList([items[0]]),
      'should allow providing an item as the first argument'
    );
    assert.deepEqual(
      idList(grid.getItems([0, items[1].getElement(), items[2]])),
      idList([items[0], items[1], items[2]]),
      'should allow providing an array of indices, elements and items as the first argument'
    );

    teardown();
  });
})(this);
````

## File: tests/grid-methods/hide.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('hide: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.hide(grid.getItems(0)), grid);
    teardown();
  });

  QUnit.test('hide: should accept an array of items as the first argument', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(
      utils.getHiddenItems(grid).length,
      0,
      'there should be no hidden items before the tests start'
    );
    grid.hide(items.slice(0, 3));
    assert.deepEqual(
      idList(utils.getHiddenItems(grid)),
      idList(items.slice(0, 3)),
      'should accept an array of items as the first argument'
    );

    teardown();
  });

  QUnit.test('hide: should not hide instantly by default', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(items.slice(0, 1));
    assert.deepEqual(idList(utils.getHidingItems(grid)), idList(items.slice(0, 1)));

    teardown();
  });

  QUnit.test('hide: should hide instantly if instant option is true', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(items.slice(0, 1), { instant: true });
    assert.strictEqual(items[0].isHiding(), false);
    assert.strictEqual(items[0].isVisible(), false);

    teardown();
  });

  QUnit.test('hide: should call the onFinish callback once the animation is finished', function (
    assert
  ) {
    assert.expect(5);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var argItems = null;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid
      .on('hideEnd', function (completedItems) {
        assert.deepEqual(
          idList(completedItems),
          idList(argItems),
          'callback: the received items should match the items of show event callback'
        );
        teardown();
      })
      .hide(items.slice(0, 1), {
        onFinish: function (completedItems) {
          assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
          assert.deepEqual(
            idList(completedItems),
            idList(items.slice(0, 1)),
            'callback: should receive the hidden items as it`s first argument'
          );
          assert.strictEqual(
            completedItems[0].isVisible(),
            false,
            'callback: the received items should not be in "visible" state'
          );
          assert.strictEqual(
            completedItems[0].isHiding(),
            false,
            'callback: the received items should not be in "hiding" state'
          );
          argItems = completedItems;
        },
      });
  });
})(this);
````

## File: tests/grid-methods/layout.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('layout: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.layout(), grid);
    teardown();
  });

  QUnit.test('layout: should not layout the items instantly by default', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.move(0, -1, { layout: false });
    grid.layout();
    assert.strictEqual(items[0].isPositioning(), true);
    teardown();
  });

  QUnit.test('layout: should layout the items instantly if the first argument is true', function (
    assert
  ) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.move(0, -1, { layout: false });
    grid.layout(true);
    assert.strictEqual(items[0].isPositioning(), false);
    teardown();
  });

  QUnit.test(
    'layout: should call the provided callback function after layout is finished',
    function (assert) {
      assert.expect(4);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.move(0, -1, { layout: false }).layout(function (items, isInterrupted) {
        assert.strictEqual(arguments.length, 2, 'callback: should have two arguments');
        assert.deepEqual(
          idList(items),
          idList(utils.getActiveItems(grid)),
          'callback: first argument should be an array of the positioned items (all active items)'
        );
        assert.strictEqual(
          isInterrupted,
          false,
          'callback: second argument should be a boolean that is true if the layout process was interrupted'
        );
        assert.strictEqual(
          items[0].isPositioning(),
          false,
          'callback: items should not be in positioning state'
        );
        teardown();
      });
    }
  );
})(this);
````

## File: tests/grid-methods/move.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('move: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.move(0, -1), grid);
    teardown();
  });

  QUnit.test(
    'move: should accept elements, items and indices as the first and second arguments',
    function (assert) {
      assert.expect(3);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var items = grid.getItems();
      var move = function (array, fromIndex, toIndex) {
        array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
      };
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      grid.move(0, 1);
      move(items, 0, 1);
      assert.deepEqual(idList(grid.getItems()), idList(items), 'should accept indices');

      grid.move(items[0].getElement(), items[1].getElement());
      move(items, 0, 1);
      assert.deepEqual(idList(grid.getItems()), idList(items), 'should accept elements');

      grid.move(items[0], items[1]);
      move(items, 0, 1);
      assert.deepEqual(idList(grid.getItems()), idList(items), 'should accept items');

      teardown();
    }
  );

  QUnit.test('move: should normalize negative indices to positive indices', function (assert) {
    assert.expect(3);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var move = function (array, fromIndex, toIndex) {
      array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
    };
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.move(0, -1);
    move(items, 0, items.length - 1);
    assert.deepEqual(idList(grid.getItems()), idList(items), 'should normalize -1 to last index');

    grid.move(0, -2);
    move(items, 0, items.length - 2);
    assert.deepEqual(
      idList(grid.getItems()),
      idList(items),
      'should normalize -2 to second last index'
    );

    grid.move(0, -1000);
    assert.deepEqual(
      idList(grid.getItems()),
      idList(items),
      'should normalize too large negative index to 0'
    );

    teardown();
  });

  QUnit.test('move: should not swap items by default', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var move = function (array, fromIndex, toIndex) {
      array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
    };
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.move(0, 2);
    move(items, 0, 2);
    assert.deepEqual(idList(grid.getItems()), idList(items));

    teardown();
  });

  QUnit.test('move: should swap items when action option is set to "swap"', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.move(0, 2, { action: 'swap' });
    assert.strictEqual(grid.getItems().indexOf(items[0]), 2);
    assert.strictEqual(grid.getItems().indexOf(items[2]), 0);

    teardown();
  });
})(this);
````

## File: tests/grid-methods/off.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('off: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(
      grid.off('foo', function () {}),
      grid
    );
    teardown();
  });

  QUnit.test('off: should unbind an event listener', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var calls = 0;
    var callback1 = function () {
      ++calls;
    };
    var callback2 = function () {
      ++calls;
    };
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('synchronize', callback1);
    grid.on('synchronize', callback1);
    grid.on('synchronize', callback2);
    grid.off('synchronize', callback1);
    grid.synchronize();
    assert.strictEqual(
      calls,
      1,
      'should unbind all the listeners from the event that match the provided callback'
    );
    teardown();
  });
})(this);
````

## File: tests/grid-methods/on.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('on: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(
      grid.on('foo', function () {}),
      grid
    );
    teardown();
  });

  QUnit.test('on: should bind an event listener', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var calls = 0;
    var callback = function () {
      ++calls;
    };
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('synchronize', callback);
    grid.synchronize().synchronize().synchronize();
    assert.strictEqual(calls, 3, 'should execute the listeners when event is emitted');
    teardown();
  });
})(this);
````

## File: tests/grid-methods/refreshItems.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('refreshItems: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.refreshItems(), grid);
    teardown();
  });

  QUnit.test('refreshItems: should update the cached dimensions of instance`s items', function (
    assert
  ) {
    assert.expect(7);

    var container = utils.createGridElements({
      itemCount: 5,
      itemStyles: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        padding: '0px',
        border: '0px',
        margin: '10px',
        boxSizing: 'border-box',
        background: '#000',
      },
    });
    var grid = new Muuri(container);
    var items = grid.getItems();
    var updateItemDimensions = function (items) {
      [].concat(items).forEach(function (item) {
        utils.setStyles(item.getElement(), {
          width: '10px',
          height: '20px',
          margin: '30px',
        });
      });
    };
    var assertItemChange = function (items, msg) {
      [].concat(items).forEach(function (item) {
        var result = {
          margin: item.getMargin(),
          width: item.getWidth(),
          height: item.getHeight(),
        };
        assert.deepEqual(
          result,
          {
            width: 10,
            height: 20,
            margin: {
              left: 30,
              right: 30,
              top: 30,
              bottom: 30,
            },
          },
          msg
        );
      });
    };
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    updateItemDimensions(items.slice(0, 2));
    grid.refreshItems(items.slice(0, 2));
    assertItemChange(items.slice(0, 2), 'should accept an array of items');

    updateItemDimensions(items);
    grid.refreshItems();
    assertItemChange(items, 'should refresh all items if no aguments are provided');

    teardown();
  });
})(this);
````

## File: tests/grid-methods/refreshSortData.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('refreshSortData: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.refreshSortData(), grid);
    teardown();
  });
})(this);
````

## File: tests/grid-methods/remove.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('remove: should return the removed items', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var removedItems = grid.getItems([0, 1]);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(grid.remove(removedItems), removedItems);
    teardown();
  });

  QUnit.test('remove: should accept an array of items as the first argument', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.remove(grid.getItems([0, 1]));
    assert.strictEqual(
      grid.getItems().length,
      8,
      'should accept an array of items as the first argument'
    );

    teardown();
  });

  QUnit.test('remove: should not remove the item elements by default', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.remove(grid.getItems([0, 1]));
    assert.strictEqual(container.children.length, 10);
    teardown();
  });

  QUnit.test(
    'remove: should remove the item elements when removeElements option is set to true',
    function (assert) {
      assert.expect(1);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      grid.remove(grid.getItems([0, 1]), { removeElements: true });
      assert.strictEqual(container.children.length, 8);
      teardown();
    }
  );

  QUnit.test('remove: should automatically layout the grid after remove', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.on('layoutStart', function () {
      assert.strictEqual(true, true);
      teardown();
    });
    grid.remove(grid.getItems(0));
  });

  QUnit.test(
    'remove: should not trigger layout after remove when layout option is set to false',
    function (assert) {
      assert.expect(0);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      grid.on('layoutStart', function () {
        assert.strictEqual(true, false);
      });
      grid.remove(grid.getItems(0), { layout: false });
      teardown();
    }
  );

  QUnit.test(
    'remove: should trigger unanimated layout after add when layout option is set to "instant"',
    function (assert) {
      assert.expect(1);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      grid.on('layoutEnd', function () {
        assert.strictEqual(true, true);
        teardown();
      });
      grid.remove(grid.getItems(0), { layout: 'instant' });
    }
  );

  QUnit.test(
    'remove: should trigger layout and call callback function after add when a callback function is provided to the layout option',
    function (assert) {
      assert.expect(2);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };
      var args;

      grid.on('layoutEnd', function (items) {
        assert.notStrictEqual(
          args,
          items,
          'layout callback items argument should not the same object as the layoutEnd event callback`s argument'
        );
        assert.deepEqual(
          idList(args),
          idList(items),
          'layout callback should receive the same items as the layoutEnd event callback'
        );
        teardown();
      });

      grid.remove(grid.getItems(0), {
        layout: function (items) {
          args = items;
        },
      });
    }
  );
})(this);
````

## File: tests/grid-methods/send.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('send: should return the instance', function (assert) {
    assert.expect(1);

    var containerA = utils.createGridElements();
    var containerB = utils.createGridElements();
    var gridA = new Muuri(containerA);
    var gridB = new Muuri(containerB);
    var teardown = function () {
      gridA.destroy();
      gridB.destroy();
      containerA.parentNode.removeChild(containerA);
      containerB.parentNode.removeChild(containerB);
    };

    assert.strictEqual(gridA.send(0, gridB, 0), gridA);
    teardown();
  });

  QUnit.test('send: should move an item from a grid to another to the specified index', function (
    assert
  ) {
    assert.expect(3);

    var containerA = utils.createGridElements();
    var containerB = utils.createGridElements();
    var gridA = new Muuri(containerA);
    var gridB = new Muuri(containerB);
    var item = gridA.getItems()[0];
    var teardown = function () {
      gridA.destroy();
      gridB.destroy();
      containerA.parentNode.removeChild(containerA);
      containerB.parentNode.removeChild(containerB);
    };

    gridA.send(item, gridB, 0);
    assert.strictEqual(gridB.getItems(0)[0], item);

    gridB.send(item, gridA, -1);
    assert.strictEqual(gridA.getItems(-1)[0], item);

    gridA.send(item, gridB, 2);
    assert.strictEqual(gridB.getItems(2)[0], item);

    teardown();
  });

  QUnit.test('send: appendTo option', function (assert) {
    assert.expect(2);

    var containerA = utils.createGridElements();
    var containerB = utils.createGridElements();
    var gridA = new Muuri(containerA);
    var gridB = new Muuri(containerB);
    var item = gridA.getItems()[0];
    var teardown = function () {
      gridA.destroy();
      gridB.destroy();
      containerA.parentNode.removeChild(containerA);
      containerB.parentNode.removeChild(containerB);
    };

    gridA.send(item, gridB, 0);
    assert.strictEqual(
      item.getElement().parentNode,
      document.body,
      'appendTo should be by default document.body'
    );

    gridB.send(item, gridA, 0, { appendTo: containerA });
    assert.strictEqual(
      item.getElement().parentNode,
      containerA,
      'item element is appended to the element that is provided for the appendTo option'
    );

    teardown();
  });

  QUnit.test('send: layoutSender/layoutReceiver options', function (assert) {
    assert.expect(8);

    var containerA = utils.createGridElements();
    var containerB = utils.createGridElements();
    var gridA = new Muuri(containerA);
    var gridB = new Muuri(containerB);
    var gridALayoutId;
    var gridBLayoutId;
    var teardown = function () {
      gridA.destroy();
      gridB.destroy();
      containerA.parentNode.removeChild(containerA);
      containerB.parentNode.removeChild(containerB);
    };

    gridALayoutId = gridA._layout.id;
    gridBLayoutId = gridB._layout.id;
    gridA.send(0, gridB, 0);
    assert.notStrictEqual(
      gridA._layout.id,
      gridALayoutId,
      'The sender grid should be laid out by default.'
    );
    assert.notStrictEqual(
      gridB._layout.id,
      gridBLayoutId,
      'The receiver grid should be laid out by default.'
    );

    gridALayoutId = gridA._layout.id;
    gridBLayoutId = gridB._layout.id;
    gridA.send(0, gridB, 0, {
      layoutSender: false,
      layoutReceiver: false,
    });
    assert.strictEqual(
      gridA._layout.id,
      gridALayoutId,
      'The sender grid should not be laid out when layoutSender is `false`.'
    );
    assert.strictEqual(
      gridB._layout.id,
      gridBLayoutId,
      'The receiver grid should not be laid out when layoutReceiver is `false`.'
    );

    gridALayoutId = gridA._layout.id;
    gridBLayoutId = gridB._layout.id;
    gridA.send(0, gridB, 0, {
      layoutSender: 'instant',
      layoutReceiver: 'instant',
    });
    assert.notStrictEqual(
      gridA._layout.id,
      gridALayoutId,
      'The sender grid should be laid out when layoutSender is `"instant"`.'
    );
    assert.notStrictEqual(
      gridB._layout.id,
      gridBLayoutId,
      'The receiver grid should be laid out when layoutReceiver is `"instant"`.'
    );

    gridALayoutId = gridA._layout.id;
    gridBLayoutId = gridB._layout.id;
    gridA.send(0, gridB, 0, {
      layoutSender: function () {},
      layoutReceiver: function () {},
    });
    assert.notStrictEqual(
      gridA._layout.id,
      gridALayoutId,
      'The sender grid should be laid out when layoutSender is a function.'
    );
    assert.notStrictEqual(
      gridB._layout.id,
      gridBLayoutId,
      'The receiver grid should be laid out when layoutReceiver is a function.'
    );

    // TODO: Test that animations work as supposed to also with all the different options.

    teardown();
  });
})(this);
````

## File: tests/grid-methods/show.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('show: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.show(grid.getItems(0)), grid);
    teardown();
  });

  QUnit.test('show: should accept an array of items as the first argument', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(items, { instant: true });
    assert.strictEqual(
      utils.getVisibleItems(grid).length,
      0,
      'there should be no visible items before the tests start'
    );

    grid.show(items.slice(0, 3));
    assert.deepEqual(
      idList(utils.getVisibleItems(grid)),
      idList(items.slice(0, 3)),
      'should accept an array of items as the first argument'
    );

    teardown();
  });

  QUnit.test('show: should not show instantly by default', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(items, { instant: true }).show(items.slice(0, 1));
    assert.deepEqual(idList(utils.getShowingItems(grid)), idList(items.slice(0, 1)));

    teardown();
  });

  QUnit.test('show: should show instantly if instant option is true', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(items, { instant: true }).show(items.slice(0, 1), { instant: true });
    assert.deepEqual(items[0].isShowing(), false);
    assert.deepEqual(items[0].isVisible(), true);

    teardown();
  });

  QUnit.test('show: should call the onFinish callback once the animation is finished', function (
    assert
  ) {
    assert.expect(5);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var argItems = null;
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid
      .on('showEnd', function (completedItems) {
        assert.deepEqual(
          idList(completedItems),
          idList(argItems),
          'callback: the received items should match the items of show event callback'
        );
        teardown();
      })
      .hide(items, { instant: true })
      .show(grid.getItems(0), {
        onFinish: function (completedItems) {
          assert.strictEqual(arguments.length, 1, 'callback: should receive one argument');
          assert.deepEqual(
            idList(completedItems),
            idList(items.slice(0, 1)),
            'callback: should receive the shown items as it`s first argument'
          );
          assert.strictEqual(
            completedItems[0].isVisible(),
            true,
            'callback: the received items should be in "visible" state'
          );
          assert.strictEqual(
            completedItems[0].isShowing(),
            false,
            'callback: the received items should not be in "showing" state'
          );
          argItems = completedItems;
        },
      });
  });
})(this);
````

## File: tests/grid-methods/sort.js
````javascript
(function (window) {
  var Muuri = window.Muuri;
  var idList = utils.idList;

  QUnit.module('Grid methods');

  QUnit.test('sort: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(
      grid.sort(function () {
        return 0;
      }),
      grid
    );
    teardown();
  });

  QUnit.test('sort: should accept a function as the first argument', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var newIndices = [1, 0, 3, 2, 5, 4, 7, 6, 9, 8];
    var newItems = [];
    var sortByFoo = function (itemA, itemB) {
      var a = parseInt(itemA.getElement().getAttribute('data-foo'));
      var b = parseInt(itemB.getElement().getAttribute('data-foo'));
      return a - b;
    };
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    // Add new indices to item elements.
    items.forEach(function (item, i) {
      item.getElement().setAttribute('data-foo', newIndices[i]);
      newItems[newIndices[i]] = item;
    });

    // Test the default ascending order.
    grid.sort(sortByFoo);
    assert.deepEqual(
      idList(grid.getItems()),
      idList(newItems),
      'the items should be in ascending order by default'
    );

    // Test descending flag.
    grid.sort(sortByFoo, { descending: true });
    assert.deepEqual(
      idList(grid.getItems()),
      idList(newItems.reverse()),
      'the items should be in descending order when descending option is true'
    );

    teardown();
  });

  QUnit.test('sort: should accept a single sort property (string) as the first argument', function (
    assert
  ) {
    assert.expect(3);

    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      sortData: {
        foo: function (item, element) {
          return parseFloat(element.getAttribute('data-foo'));
        },
      },
    });
    var items = grid.getItems();
    var newIndices = [1, 0, 3, 2, 5, 4, 7, 6, 9, 8];
    var newItems = [];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    // Add foo data to elements and refresh sort data.
    items.forEach(function (item, i) {
      item.getElement().setAttribute('data-foo', newIndices[i]);
      newItems[newIndices[i]] = item;
    });
    grid.refreshSortData();

    // Test the default ascending order.
    grid.sort('foo');
    assert.deepEqual(
      idList(grid.getItems()),
      idList(newItems.concat()),
      'the items should be in ascending order by default'
    );

    // Test property's descending flag.
    grid.sort('foo:desc');
    assert.deepEqual(
      idList(grid.getItems()),
      idList(newItems.concat().reverse()),
      'the items should be in descending order when "desc" flag is added to the property'
    );

    // Test property's descending flag.
    grid.sort('foo', { descending: true });
    assert.deepEqual(
      idList(grid.getItems()),
      idList(newItems.concat().reverse()),
      'the items should be in descending order when descending option is true'
    );

    teardown();
  });

  QUnit.test(
    'sort: should accept multiple sort properties (string) as the first argument',
    function (assert) {
      assert.expect(5);

      var container = utils.createGridElements();
      var grid = new Muuri(container, {
        sortData: {
          foo: function (item, element) {
            return parseFloat(element.getAttribute('data-foo'));
          },
          bar: function (item, element) {
            return parseFloat(element.getAttribute('data-bar'));
          },
        },
      });
      var items = grid.getItems();
      var fooData = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9];
      var barData = [2, 2, 2, 2, 2, 1, 1, 1, 1, 1];
      var orderFooBar = [1, 0, 3, 2, 5, 4, 7, 6, 9, 8];
      var orderFooBarDesc = [8, 9, 6, 7, 4, 5, 2, 3, 0, 1];
      var orderBarFoo = [6, 5, 8, 7, 9, 0, 2, 1, 4, 3];
      var orderBarFooDesc = [3, 4, 1, 2, 0, 9, 7, 8, 5, 6];
      var orderBarFooSpecial = [1, 0, 3, 2, 4, 5, 7, 6, 9, 8];
      var itemsFooBar = [];
      var itemsFooBarDesc = [];
      var itemsBarFoo = [];
      var itemsBarFooDesc = [];
      var itemsBarFooSpecial = [];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      // Add foo and bar data to elements and refresh sort data.
      items.forEach(function (item, i) {
        item.getElement().setAttribute('data-foo', fooData[i]);
        item.getElement().setAttribute('data-bar', barData[i]);
        itemsFooBar[orderFooBar[i]] = item;
        itemsFooBarDesc[orderFooBarDesc[i]] = item;
        itemsBarFoo[orderBarFoo[i]] = item;
        itemsBarFooDesc[orderBarFooDesc[i]] = item;
        itemsBarFooSpecial[orderBarFooSpecial[i]] = item;
      });
      grid.refreshSortData();

      grid.sort('foo bar');
      assert.deepEqual(idList(grid.getItems()), idList(itemsFooBar), 'foo bar');

      grid.sort('bar foo');
      assert.deepEqual(idList(grid.getItems()), idList(itemsBarFoo), 'bar foo');

      grid.sort('foo bar', { descending: true });
      assert.deepEqual(idList(grid.getItems()), idList(itemsFooBarDesc), 'foo bar (descending)');

      grid.sort('bar foo', { descending: true });
      assert.deepEqual(idList(grid.getItems()), idList(itemsBarFooDesc), 'bar foo (descending)');

      grid.sort('bar:desc foo');
      assert.deepEqual(idList(grid.getItems()), idList(itemsBarFooSpecial), 'bar:desc foo');

      teardown();
    }
  );

  QUnit.test('sort: should accept an array of items as the first argument', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var items = grid.getItems();
    var newItems = items.concat().reverse();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.sort(newItems);
    assert.deepEqual(idList(grid.getItems()), idList(newItems));

    teardown();
  });
})(this);
````

## File: tests/grid-methods/synchronize.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid methods');

  QUnit.test('synchronize: should return the instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(grid.synchronize(), grid);
    teardown();
  });

  QUnit.test('synchronize: should order the dom elements to match the order of items', function (
    assert
  ) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var elements = [];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.move(0, -1, { layout: false });
    elements = grid.getItems().map(function (item) {
      return item.getElement();
    });
    assert.notDeepEqual(
      [].slice.call(container.children),
      elements,
      'elements should be out of sync after an item is moved'
    );
    grid.synchronize();
    assert.deepEqual(
      [].slice.call(container.children),
      elements,
      'elements should be in sync after grid.synchronize() is called'
    );
    teardown();
  });
})(this);
````

## File: tests/grid-options/containerClass.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('containerClass: should define the classname for the container element', function (
    assert
  ) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      containerClass: 'foo',
    });
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(utils.matches(container, '.foo'), true);
    teardown();
  });
})(this);
````

## File: tests/grid-options/dragAutoScroll.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('dragAutoScroll: should scroll window vertically and horizontally', function (assert) {
    assert.expect(4 + 4 * 6);

    var done = assert.async();
    var container = utils.createGridElements({
      itemCount: 2,
      containerStyles: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '140px',
      },
    });

    // Create fixed drag container.
    var dragContainer = document.createElement('div');
    dragContainer.style.position = 'fixed';
    document.body.appendChild(dragContainer);

    // Make document body large so that window can scroll.
    document.body.style.position = 'relative';
    document.body.style.height = '10000px';
    document.body.style.width = '10000px';

    // Init grid.
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragSort: false,
      dragContainer: dragContainer,
      dragAutoScroll: {
        targets: [window],
        onStart: function (item, element, direction) {
          assert.ok(grid.getItems().indexOf(item) > -1, 'onStart item argument is grid item');
          assert.strictEqual(element, window, 'onStart element argument is window');
          assert.ok(
            [
              Muuri.AutoScroller.LEFT,
              Muuri.AutoScroller.RIGHT,
              Muuri.AutoScroller.UP,
              Muuri.AutoScroller.DOWN,
            ].indexOf(direction) > -1,
            'onStart direction argument is valid direction'
          );
        },
        onStop: function (item, element, direction) {
          assert.ok(grid.getItems().indexOf(item) > -1, 'onStop item argument is grid item');
          assert.strictEqual(element, window, 'onStop element argument is window');
          assert.ok(
            [
              Muuri.AutoScroller.LEFT,
              Muuri.AutoScroller.RIGHT,
              Muuri.AutoScroller.UP,
              Muuri.AutoScroller.DOWN,
            ].indexOf(direction) > -1,
            'onStop direction argument is valid direction'
          );
        },
      },
    });

    // Make sure window is not scrolled on init.
    var scrollX = 0;
    var scrollY = 0;
    window.scrollTo(scrollX, scrollY);
    assert.ok(
      window.pageXOffset === scrollX && window.pageYOffset === scrollY,
      'window should not be scrolled on init'
    );

    // Compute how much we need to drag the item and make sure that it is
    // possible to trigger auto-scroll.
    var item = grid.getItems()[0];
    var itemRect = item.getElement().getBoundingClientRect();
    var leftOffset = window.innerWidth - itemRect.right;
    var topOffset = window.innerHeight - itemRect.bottom;
    assert.ok(leftOffset > 0 && topOffset > 0, 'item can scroll the window');

    // Define teardown procedure.
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      dragContainer.parentNode.removeChild(dragContainer);
      document.body.style.height = '';
      document.body.style.width = '';
      document.body.style.position = '';
      window.scrollTo(0, 0);
      done();
    };

    // Drag down right.
    utils.dragElement({
      element: item.getElement(),
      x: leftOffset,
      y: topOffset,
      holdDuration: 300,
      onFinished: function () {
        assert.ok(
          window.pageXOffset > scrollX && window.pageYOffset > scrollY,
          'window should be scrolled down and right'
        );

        // Place container to the bottom-right corner of the body and scroll
        // window to the max.
        container.style.left = 'auto';
        container.style.top = 'auto';
        container.style.right = '0px';
        container.style.bottom = '0px';
        window.scrollTo(100000, 100000);
        scrollX = window.pageXOffset;
        scrollY = window.pageYOffset;

        // Compute how much we need to drag the item to left and top so that
        // auto-scroll will be triggered.
        item = grid.getItems()[1];
        itemRect = item.getElement().getBoundingClientRect();
        leftOffset = -itemRect.left;
        topOffset = -itemRect.top;

        // Drag up left.
        utils.dragElement({
          element: item.getElement(),
          x: leftOffset,
          y: topOffset,
          holdDuration: 300,
          onFinished: function () {
            assert.ok(
              window.pageXOffset < scrollX && window.pageYOffset < scrollY,
              'window should be scrolled up and left'
            );
            teardown();
          },
        });
      },
    });
  });
})(this);
````

## File: tests/grid-options/dragAxis.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('dragAxis: should allow dragging items on x and y axis by default', function (assert) {
    assert.expect(2);

    var done = assert.async();
    var container = utils.createGridElements({
      containerStyles: {
        position: 'relative',
        width: '70px',
      },
    });
    var grid = new Muuri(container, {
      dragEnabled: true,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };
    var left = parseInt(item.getElement().getBoundingClientRect().left);
    var top = parseInt(item.getElement().getBoundingClientRect().top);

    grid.on('dragEnd', function () {
      var newLeft = parseInt(item.getElement().getBoundingClientRect().left);
      var newTop = parseInt(item.getElement().getBoundingClientRect().top);
      assert.strictEqual(newLeft, left + 70, 'left');
      assert.strictEqual(newTop, top + 70, 'top');
    });

    utils.dragElement({
      element: item.getElement(),
      x: 70,
      y: 70,
      onFinished: teardown,
    });
  });

  QUnit.test(
    'dragAxis: when set to "xy" items should be moved on x-axis and y-axis',
    function (assert) {
      assert.expect(2);

      var done = assert.async();
      var container = utils.createGridElements({
        containerStyles: {
          position: 'relative',
          width: '70px',
        },
      });
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragAxis: 'xy',
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };
      var left = parseInt(item.getElement().getBoundingClientRect().left);
      var top = parseInt(item.getElement().getBoundingClientRect().top);

      grid.on('dragEnd', function () {
        var newLeft = parseInt(item.getElement().getBoundingClientRect().left);
        var newTop = parseInt(item.getElement().getBoundingClientRect().top);
        assert.strictEqual(newLeft, left + 70, 'left');
        assert.strictEqual(newTop, top + 70, 'top');
      });

      utils.dragElement({
        element: item.getElement(),
        x: 70,
        y: 70,
        onFinished: teardown,
      });
    }
  );

  QUnit.test('dragAxis: when set to "x" items should be only moved on x-axis', function (assert) {
    assert.expect(2);

    var done = assert.async();
    var container = utils.createGridElements({
      containerStyles: {
        position: 'relative',
        width: '70px',
      },
    });
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragAxis: 'x',
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };
    var left = parseInt(item.getElement().getBoundingClientRect().left);
    var top = parseInt(item.getElement().getBoundingClientRect().top);

    grid.on('dragEnd', function () {
      var newLeft = parseInt(item.getElement().getBoundingClientRect().left);
      var newTop = parseInt(item.getElement().getBoundingClientRect().top);
      assert.strictEqual(newLeft, left + 70, 'left');
      assert.strictEqual(newTop, top, 'top');
    });

    utils.dragElement({
      element: item.getElement(),
      x: 70,
      y: 70,
      onFinished: teardown,
    });
  });

  QUnit.test('dragAxis: when set to "y" items should be only moved on y-axis', function (assert) {
    assert.expect(2);

    var done = assert.async();
    var container = utils.createGridElements({
      containerStyles: {
        position: 'relative',
        width: '70px',
      },
    });
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragAxis: 'y',
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };
    var left = parseInt(item.getElement().getBoundingClientRect().left);
    var top = parseInt(item.getElement().getBoundingClientRect().top);

    grid.on('dragEnd', function () {
      var newLeft = parseInt(item.getElement().getBoundingClientRect().left);
      var newTop = parseInt(item.getElement().getBoundingClientRect().top);
      assert.strictEqual(newLeft, left, 'left');
      assert.strictEqual(newTop, top + 70, 'top');
    });

    utils.dragElement({
      element: item.getElement(),
      x: 70,
      y: 70,
      onFinished: teardown,
    });
  });
})(this);
````

## File: tests/grid-options/dragContainer.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('dragContainer: should be the grid container by default', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      dragEnabled: true,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragStart', function () {
      assert.strictEqual(item.getElement().parentNode, container);
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
      onFinished: teardown,
    });
  });

  QUnit.test(
    'dragContainer: should define the element the dragged item is appended to during drag',
    function (assert) {
      assert.expect(1);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragContainer: document.body,
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.on('dragStart', function () {
        assert.strictEqual(item.getElement().parentNode, document.body);
      });

      utils.dragElement({
        element: item.getElement(),
        x: 100,
        y: 100,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-options/dragEnabled.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('dragEnabled: drag should be disabled by default', function (assert) {
    assert.expect(0);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragStart', function () {
      assert.strictEqual(true, false, 'drag should not be started');
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
      onFinished: teardown,
    });
  });

  QUnit.test('dragEnabled: drag is enabled when provided true is provided', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      dragEnabled: true,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragStart', function () {
      assert.strictEqual(true, true, 'drag should be started');
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
      onFinished: teardown,
    });
  });
})(this);
````

## File: tests/grid-options/dragPlaceholder.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('dragPlaceholder: should not be enabled by default', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, { dragEnabled: true });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragStart', function () {
      assert.strictEqual(item._dragPlaceholder.isActive(), false, '');
    });

    utils.dragElement({
      element: item.getElement(),
      x: 70,
      y: 70,
      onFinished: teardown,
    });
  });

  QUnit.test('dragPlaceholder: should be enabled when `enabled` is set to true', function (assert) {
    assert.expect(12);

    var done = assert.async();
    var placeholderClassName = 'i-am-placeholder';
    var container = utils.createGridElements();
    var phElem = document.createElement('div');
    var grid = new Muuri(container, {
      itemPlaceholderClass: placeholderClassName,
      dragEnabled: true,
      dragPlaceholder: {
        enabled: true,
        createElement: function (draggedItem) {
          assert.strictEqual(arguments.length, 1, 'createElement should receive one argument');
          assert.strictEqual(
            draggedItem,
            item,
            'createElement first argument should be the dragged item'
          );
          return phElem;
        },
        onCreate: function (draggedItem, placeholderElem) {
          assert.strictEqual(arguments.length, 2, 'onCreate: should receive two arguments');
          assert.strictEqual(
            draggedItem,
            item,
            'onCreate: first argument should be the dragged item'
          );
          assert.strictEqual(
            placeholderElem,
            phElem,
            'onCreate: second argument should be the placeholder element'
          );
          assert.strictEqual(
            placeholderElem.classList.contains(placeholderClassName),
            true,
            'onCreate: placeholder element should have itemPlaceholderClass applied'
          );
        },
        onRemove: function (draggedItem, placeholderElem) {
          assert.strictEqual(arguments.length, 2, 'onRemove: should receive two arguments');
          assert.strictEqual(
            draggedItem,
            item,
            'onRemove: first argument should be the dragged item'
          );
          assert.strictEqual(
            placeholderElem,
            phElem,
            'onRemove: second argument should be the placeholder element'
          );
          assert.strictEqual(
            placeholderElem.classList.contains(placeholderClassName),
            false,
            'onRemove: placeholder element should have itemPlaceholderClass removed'
          );
          teardown();
        },
      },
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('dragStart', function () {
      var ph = item._dragPlaceholder;
      assert.strictEqual(ph.isActive(), true, 'placeholder should be active');
      assert.strictEqual(
        ph.getElement(),
        phElem,
        'placeholder element should be the element returned from createElement method'
      );
    });

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 70,
    });
  });

  QUnit.test(
    'dragPlaceholder: placeholder element dimensions should be kept in sync with item element dimensions',
    function (assert) {
      assert.expect(4);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container, { dragEnabled: true, dragPlaceholder: { enabled: true } });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.on('dragStart', function () {
        var phElem = item._dragPlaceholder.getElement();
        var itemElem = item.getElement();
        var phRect = phElem.getBoundingClientRect();
        var itemRect = itemElem.getBoundingClientRect();

        assert.strictEqual(
          phRect.width,
          itemRect.width,
          'placeholder width should match item width'
        );
        assert.strictEqual(
          phRect.height,
          itemRect.height,
          'placeholder height should match item height'
        );

        itemElem.style.width = '200px';
        itemElem.style.height = '10px';
        grid.refreshItems();
      });

      grid.on('dragEnd', function () {
        var phElem = item._dragPlaceholder.getElement();
        var itemElem = item.getElement();
        var phRect = phElem.getBoundingClientRect();
        var itemRect = itemElem.getBoundingClientRect();

        assert.strictEqual(
          phRect.width,
          itemRect.width,
          'placeholder width should match item width after item is resized and refreshed'
        );
        assert.strictEqual(
          phRect.height,
          itemRect.height,
          'placeholder height should match item height after item is resized and refreshed'
        );
      });

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 70,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-options/dragSort.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('dragSort: should be enabled by default', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var container = utils.createGridElements({
      containerStyles: {
        position: 'relative',
        width: '70px',
      },
    });
    var grid = new Muuri(container, {
      dragEnabled: true,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('move', function () {
      assert.strictEqual(true, true);
    });

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 70,
      onFinished: teardown,
    });
  });

  QUnit.test('dragSort: should be disabled if false is provided', function (assert) {
    assert.expect(0);

    var done = assert.async();
    var container = utils.createGridElements({
      containerStyles: {
        position: 'relative',
        width: '70px',
      },
    });
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragSort: false,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid.on('move', function () {
      assert.strictEqual(true, false, 'items should not be moved');
    });

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 70,
      onFinished: teardown,
    });
  });

  QUnit.test('dragSort: by default items should not be draggable between grids', function (assert) {
    assert.expect(0);

    var done = assert.async();
    var containerA = utils.createGridElements({
      containerStyles: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '50px',
      },
      itemStyles: {
        position: 'absolute',
        height: '50px',
        width: '100%',
        margin: '10px',
        background: '#000',
      },
    });
    var containerB = utils.createGridElements({
      containerStyles: {
        position: 'absolute',
        left: '70px',
        top: '0px',
        width: '50px',
      },
      itemStyles: {
        position: 'absolute',
        height: '50px',
        width: '100%',
        margin: '10px',
        background: '#000',
      },
    });
    var gridA = new Muuri(containerA, {
      dragEnabled: true,
      dragSortInterval: 100,
      dragSortPredicate: {
        threshold: 50,
        action: 'move',
      },
    });
    var gridB = new Muuri(containerB, {
      dragEnabled: true,
      dragSortInterval: 100,
      dragSortPredicate: {
        threshold: 50,
        action: 'move',
      },
    });
    var item = gridA.getItems()[0];
    var teardown = function () {
      gridA.destroy();
      gridB.destroy();
      containerA.parentNode.removeChild(containerA);
      containerB.parentNode.removeChild(containerB);
      done();
    };

    gridB.on('receive', function () {
      assert.strictEqual(true, false);
    });

    utils.dragElement({
      element: item.getElement(),
      x: 70,
      y: 0,
      onFinished: teardown,
    });
  });

  QUnit.test(
    'dragSort: should accept a function that returns an array of grid instances',
    function (assert) {
      assert.expect(1);

      var done = assert.async();
      var containerA = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var containerB = utils.createGridElements({
        containerStyles: {
          position: 'absolute',
          left: '70px',
          top: '0px',
          width: '50px',
        },
        itemStyles: {
          position: 'absolute',
          height: '50px',
          width: '100%',
          margin: '10px',
          background: '#000',
        },
      });
      var grids = [];
      var gridA = new Muuri(containerA, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var gridB = new Muuri(containerB, {
        dragEnabled: true,
        dragSort: function () {
          return grids;
        },
        dragSortInterval: 100,
        dragSortPredicate: {
          threshold: 50,
          action: 'move',
        },
      });
      var item = gridA.getItems()[0];
      var teardown = function () {
        gridA.destroy();
        gridB.destroy();
        containerA.parentNode.removeChild(containerA);
        containerB.parentNode.removeChild(containerB);
        done();
      };

      grids.push(gridA, gridB);

      gridB.on('receive', function () {
        assert.strictEqual(true, true);
      });

      utils.dragElement({
        element: item.getElement(),
        x: 70,
        y: 0,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-options/dragSortPredicate.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('dragSortPredicate: the default action should be "move"', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var container = utils.createGridElements({
      containerStyles: {
        position: 'relative',
        width: '140px',
      },
    });
    var grid = new Muuri(container, {
      dragEnabled: true,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    function onMove(data) {
      grid.off('move', onMove);
      assert.strictEqual(data.action, 'move', 'the movement action should be "move"');
    }

    grid.on('move', onMove);

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 70,
      onFinished: teardown,
    });
  });

  QUnit.test('dragSortPredicate: should allow "swap" as the sort action', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var container = utils.createGridElements({
      containerStyles: {
        position: 'relative',
        width: '140px',
      },
    });
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragSortPredicate: {
        action: 'swap',
      },
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    function onMove(data) {
      grid.off('move', onMove);
      assert.strictEqual(data.action, 'swap', 'the movement action should be "swap"');
    }

    grid.on('move', onMove);

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 70,
      onFinished: teardown,
    });
  });

  QUnit.test(
    'dragSortPredicate: should receive the dragged item and current Dragger event as it`s arguments',
    function (assert) {
      assert.expect(3);

      var done = assert.async();
      var container = utils.createGridElements({
        containerStyles: {
          position: 'relative',
          width: '140px',
        },
      });
      var isChecked = false;
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragSortPredicate: function (draggedItem, ev) {
          if (!isChecked) {
            assert.strictEqual(arguments.length, 2, 'predicate should receive two aguments');
            assert.strictEqual(
              draggedItem,
              item,
              'predicate first argument should be the dragged item'
            );
            assert.strictEqual(
              utils.isDraggerEvent(ev),
              true,
              'predicate second argument should be a Dragger event'
            );
            isChecked = true;
          }
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 70,
        onFinished: teardown,
      });
    }
  );

  QUnit.test(
    'dragSortPredicate: should not trigger sorting if a falsy value is returned',
    function (assert) {
      assert.expect(0);

      var done = assert.async();
      var container = utils.createGridElements({
        containerStyles: {
          position: 'relative',
          width: '140px',
        },
      });
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragSortPredicate: function () {
          return false;
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      function onMove() {
        grid.off('move', onMove);
        assert.strictEqual(true, false, 'move should not be triggered');
      }

      grid.on('move', onMove);

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 70,
        onFinished: teardown,
      });
    }
  );

  QUnit.test(
    'dragSortPredicate: should trigger sorting if an object with index is returned',
    function (assert) {
      assert.expect(2);

      var done = assert.async();
      var container = utils.createGridElements({
        containerStyles: {
          position: 'relative',
          width: '140px',
        },
      });
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragSortPredicate: function () {
          return {
            index: -1,
            action: 'swap',
          };
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      function onMove(data) {
        grid.off('move', onMove);
        assert.strictEqual(data.action, 'swap', 'sort action should be "swap"');
        assert.strictEqual(
          data.toIndex,
          grid.getItems().length - 1,
          'target index should be the last index'
        );
      }

      grid.on('move', onMove);

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 70,
        onFinished: teardown,
      });
    }
  );

  QUnit.test(
    'dragSortPredicate: should allow using Muuri.ItemDrag.defaultSortPredicate manually without options',
    function (assert) {
      assert.expect(1);

      var done = assert.async();
      var container = utils.createGridElements({
        containerStyles: {
          position: 'relative',
          width: '140px',
        },
      });
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragSortPredicate: function (item) {
          return Muuri.ItemDrag.defaultSortPredicate(item);
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      function onMove(data) {
        grid.off('move', onMove);
        assert.strictEqual(data.action, 'move', 'sort action should be "move"');
      }

      grid.on('move', onMove);

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 70,
        onFinished: teardown,
      });
    }
  );

  QUnit.test(
    'dragSortPredicate: should allow using Muuri.ItemDrag.defaultSortPredicate manually with options',
    function (assert) {
      assert.expect(1);

      var done = assert.async();
      var container = utils.createGridElements({
        containerStyles: {
          position: 'relative',
          width: '140px',
        },
      });
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragSortPredicate: function (item) {
          return Muuri.ItemDrag.defaultSortPredicate(item, {
            threshold: 30,
            action: 'swap',
          });
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      function onMove(data) {
        grid.off('move', onMove);
        assert.strictEqual(data.action, 'swap', 'sort action should be "swap"');
      }

      grid.on('move', onMove);

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 70,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-options/dragStartPredicate.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test(
    'dragStartPredicate: should receive the dragged item and current Dragger event as it`s arguments',
    function (assert) {
      assert.expect(3);

      var done = assert.async();
      var container = utils.createGridElements();
      var isChecked = false;
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragStartPredicate: function (draggedItem, ev) {
          if (!isChecked) {
            assert.strictEqual(arguments.length, 2, 'predicate should receive two aguments');
            assert.strictEqual(
              draggedItem,
              item,
              'predicate first argument should be the dragged item'
            );
            assert.strictEqual(
              utils.isDraggerEvent(ev),
              true,
              'predicate second argument should be a Dragger event'
            );
            isChecked = true;
          }
          return true;
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 70,
        onFinished: teardown,
      });
    }
  );

  QUnit.test('dragStartPredicate: returning true should resolve the predicate', function (assert) {
    assert.expect(4);

    var done = assert.async();
    var container = utils.createGridElements();
    var counter = 0;
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragStartPredicate: function () {
        ++counter;
        return true;
      },
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    function onDragStart() {
      grid.off('dragStart', onDragStart);
      assert.strictEqual(
        true,
        true,
        'a resolved predicate should start the dragging procedure and trigger dragStart event'
      );
    }

    function onDragMove() {
      grid.off('dragMove', onDragMove);
      assert.strictEqual(
        true,
        true,
        'a resolved predicate should start the dragging procedure and trigger dragMove event'
      );
    }

    function onDragEnd() {
      grid.off('dragEnd', onDragEnd);
      assert.strictEqual(
        true,
        true,
        'a resolved predicate should start the dragging procedure and trigger dragEnd event'
      );
    }

    function onDragReleaseStart() {
      grid.off('dragReleaseStart', onDragReleaseStart);
      assert.strictEqual(counter, 2, 'predicate should be called twice');
    }

    grid
      .on('dragStart', onDragStart)
      .on('dragMove', onDragMove)
      .on('dragEnd', onDragEnd)
      .on('dragReleaseStart', onDragReleaseStart);

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 70,
      onFinished: teardown,
    });
  });

  QUnit.test('dragStartPredicate: returning false should reject the predicate', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var container = utils.createGridElements();
    var counter = 0;
    var grid = new Muuri(container, {
      dragEnabled: true,
      dragStartPredicate: function () {
        ++counter;
        return false;
      },
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    grid
      .on('dragStart', function () {
        assert.strictEqual(
          true,
          false,
          'a rejected predicate should not start the dragging procedure'
        );
      })
      .on('dragMove', function () {
        assert.strictEqual(
          true,
          false,
          'a rejected predicate should not start the dragging procedure'
        );
      });

    utils.dragElement({
      element: item.getElement(),
      x: 0,
      y: 70,
      onFinished: function () {
        assert.strictEqual(counter, 1, 'predicate should be called once');
        teardown();
      },
    });
  });

  QUnit.test(
    'dragStartPredicate: returning nothing (undefined) should keep calling the predicate and not start the drag procedure',
    function (assert) {
      assert.expect(1);

      var done = assert.async();
      var container = utils.createGridElements();
      var counter = 0;
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragStartPredicate: function () {
          ++counter;
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid
        .on('dragStart', function () {
          assert.strictEqual(
            true,
            false,
            'a rejected predicate should not start the dragging procedure'
          );
        })
        .on('dragMove', function () {
          assert.strictEqual(
            true,
            false,
            'a rejected predicate should not start the dragging procedure'
          );
        });

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 70,
        onFinished: function () {
          assert.strictEqual(counter > 2, true, 'predicate should be called more than twice');
          teardown();
        },
      });
    }
  );

  QUnit.test(
    'dragStartPredicate: delay - drag should start after a delay if delay is defined',
    function (assert) {
      assert.expect(3);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragStartPredicate: {
          delay: 100,
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid
        .on('dragStart', function () {
          assert.ok(
            true,
            'dragStart event should be emitted after the delay even if there was no movement'
          );
        })
        .on('dragMove', function () {
          assert.ok(false, 'dragMove event should not be emitted if there was no movement');
        })
        .on('dragEnd', function () {
          assert.ok(true, 'dragEnd event should be emitted even if there was no movement');
        });

      window.setTimeout(function () {
        assert.strictEqual(
          item.isDragging(),
          false,
          'the item should not be in dragged state before the delay is finished'
        );
      }, 90);

      utils.dragElement({
        element: item.getElement(),
        x: 0,
        y: 0,
        onFinished: teardown,
      });
    }
  );

  QUnit.test(
    'dragStartPredicate: distance - drag should start after a distance if distance is defined',
    function (assert) {
      assert.expect(1);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container, {
        dragEnabled: true,
        dragStartPredicate: {
          distance: 10,
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.on('dragStart', function (item, e) {
        assert.ok(
          e.distance >= 10,
          'dragStart event should be emitted after the specified distance is dragged'
        );
      });

      utils.dragElement({
        element: item.getElement(),
        x: 15,
        y: 15,
        onFinished: teardown,
      });
    }
  );
})(this);
````

## File: tests/grid-options/hideDuration.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('hideDuration: should disable hide animation when set to 0', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      hideDuration: 0,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide([item]);
    assert.strictEqual(item.isVisible(), false, 'item should be hidden');
    assert.strictEqual(item.isHiding(), false, 'item should not be hiding');
    teardown();
  });
})(this);
````

## File: tests/grid-options/itemClass.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('itemClass: should define the classname for the item elements', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      itemClass: 'foo',
    });
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(utils.matches(grid.getItems()[0].getElement(), '.foo'), true);
    teardown();
  });
})(this);
````

## File: tests/grid-options/itemDraggingClass.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('itemDraggingClass: should define the classname for dragged item elements', function (
    assert
  ) {
    assert.expect(3);

    var done = assert.async();
    var container = utils.createGridElements({ itemCount: 3 });
    var grid = new Muuri(container, {
      itemDraggingClass: 'foo',
      dragEnabled: true,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    assert.strictEqual(
      utils.matches(item.getElement(), '.foo'),
      false,
      'the classname should not be applied before dragging starts'
    );

    grid.on('dragStart', function () {
      assert.strictEqual(
        utils.matches(item.getElement(), '.foo'),
        true,
        'the classname should be applied when dragging starts'
      );
    });

    grid.on('dragEnd', function () {
      assert.strictEqual(
        utils.matches(item.getElement(), '.foo'),
        false,
        'the classname should be removed when dragging ends'
      );
    });

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
      onFinished: teardown,
    });
  });
})(this);
````

## File: tests/grid-options/itemHiddenClass.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('itemHiddenClass: should define the classname for hidden item elements', function (
    assert
  ) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      itemHiddenClass: 'foo',
    });
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(grid.getItems(0));
    assert.strictEqual(
      utils.matches(grid.getItems()[0].getElement(), '.foo'),
      true,
      'hidden items should have the classname'
    );
    assert.strictEqual(
      utils.matches(grid.getItems()[1].getElement(), '.foo'),
      false,
      'visible items should not have the classname'
    );
    teardown();
  });
})(this);
````

## File: tests/grid-options/itemPositioningClass.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test(
    'itemPositioningClass: should define the classname for positioning item elements',
    function (assert) {
      assert.expect(3);

      var done = assert.async();
      var container = utils.createGridElements({ itemCount: 3 });
      var grid = new Muuri(container, {
        itemPositioningClass: 'foo',
      });
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.move(0, -1, { action: 'swap' });
      utils.raf(function () {
        assert.strictEqual(
          utils.matches(grid.getItems()[0].getElement(), '.foo'),
          true,
          'first item should be positioning'
        );
        assert.strictEqual(
          utils.matches(grid.getItems()[2].getElement(), '.foo'),
          true,
          'last item should be positioning'
        );
        assert.strictEqual(
          utils.matches(grid.getItems()[1].getElement(), '.foo'),
          false,
          'second item should not be positioning'
        );
        teardown();
      });
    }
  );
})(this);
````

## File: tests/grid-options/itemReleasingClass.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test(
    'itemReleasingClass: should define the classname for released item elements',
    function (assert) {
      assert.expect(3);

      var done = assert.async();
      var container = utils.createGridElements({ itemCount: 3 });
      var grid = new Muuri(container, {
        itemReleasingClass: 'foo',
        dragEnabled: true,
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      assert.strictEqual(
        utils.matches(item.getElement(), '.foo'),
        false,
        'the classname should not be applied before release starts'
      );

      grid.on('dragReleaseStart', function () {
        assert.strictEqual(
          utils.matches(item.getElement(), '.foo'),
          true,
          'the classname should be applied when release starts'
        );
      });

      grid.on('dragReleaseEnd', function () {
        assert.strictEqual(
          utils.matches(item.getElement(), '.foo'),
          false,
          'the classname should be removed when release ends'
        );
        teardown();
      });

      utils.dragElement({
        element: item.getElement(),
        x: 100,
        y: 100,
      });
    }
  );
})(this);
````

## File: tests/grid-options/items.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('items: should fetch all container`s child elements by default', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(
      grid.getItems().map(function (item) {
        return item.getElement();
      }),
      [].slice.call(container.children)
    );
    teardown();
  });

  QUnit.test(
    'items: should fetch all container`s child elements that match the provided selector',
    function (assert) {
      assert.expect(1);

      var container = utils.createGridElements();
      var children = [].slice.call(container.children);
      var targets = [0, 1, 2].map(function (i) {
        children[i].classList.add('foo');
        return children[i];
      });
      container.classList.add('foo');
      var grid = new Muuri(container, {
        items: '.foo',
      });
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      assert.deepEqual(
        grid.getItems().map(function (item) {
          return item.getElement();
        }),
        targets
      );
      teardown();
    }
  );

  QUnit.test('items: should accept a node list', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var children = [].slice.call(container.children);
    var targets = [0, 1, 2].map(function (i) {
      children[i].classList.add('foo');
      return children[i];
    });
    var grid = new Muuri(container, {
      items: document.querySelectorAll('.foo'),
    });
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(
      grid.getItems().map(function (item) {
        return item.getElement();
      }),
      targets
    );
    teardown();
  });

  QUnit.test('items: should accept an array of elements', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var children = [].slice.call(container.children);
    var targets = [0, 1, 2].map(function (i) {
      return children[i];
    });
    var grid = new Muuri(container, {
      items: targets,
    });
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(
      grid.getItems().map(function (item) {
        return item.getElement();
      }),
      targets
    );
    teardown();
  });
})(this);
````

## File: tests/grid-options/itemVisibleClass.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('itemVisibleClass: should define the classname for visible item elements', function (
    assert
  ) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      itemVisibleClass: 'foo',
    });
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide(grid.getItems(0));
    assert.strictEqual(
      utils.matches(grid.getItems()[0].getElement(), '.foo'),
      false,
      'hidden items should not have the classname'
    );
    assert.strictEqual(
      utils.matches(grid.getItems()[1].getElement(), '.foo'),
      true,
      'visible items should have the classname'
    );
    teardown();
  });
})(this);
````

## File: tests/grid-options/layout.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('layout: vertical - left/top', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { width: '140px' });
    utils.setStyles(children[0], { width: '70px' });
    utils.setStyles(children[3], { width: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: false,
        fillGaps: false,
        alignRight: false,
        alignBottom: false,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 0, top: 0 });
    assert.deepEqual(items[1].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 0, top: 140 });

    teardown();
  });

  QUnit.test('layout: vertical - left/top - fill gaps', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { width: '140px' });
    utils.setStyles(children[0], { width: '70px' });
    utils.setStyles(children[3], { width: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: false,
        fillGaps: true,
        alignRight: false,
        alignBottom: false,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 0, top: 0 });
    assert.deepEqual(items[1].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 90, top: 0 });

    teardown();
  });

  QUnit.test('layout: vertical - right/top', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { width: '140px' });
    utils.setStyles(children[0], { width: '70px' });
    utils.setStyles(children[3], { width: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: false,
        fillGaps: false,
        alignRight: true,
        alignBottom: false,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 50, top: 0 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 90, top: 140 });

    teardown();
  });

  QUnit.test('layout: vertical - right/top - fill gaps', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { width: '140px' });
    utils.setStyles(children[0], { width: '70px' });
    utils.setStyles(children[3], { width: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: false,
        fillGaps: true,
        alignRight: true,
        alignBottom: false,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 50, top: 0 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 0, top: 0 });

    teardown();
  });

  QUnit.test('layout: vertical - left/bottom', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { width: '140px' });
    utils.setStyles(children[0], { width: '70px' });
    utils.setStyles(children[3], { width: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: false,
        fillGaps: false,
        alignRight: false,
        alignBottom: true,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 0, top: 140 });
    assert.deepEqual(items[1].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 0, top: 0 });

    teardown();
  });

  QUnit.test('layout: vertical - left/bottom - fill gaps', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { width: '140px' });
    utils.setStyles(children[0], { width: '70px' });
    utils.setStyles(children[3], { width: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: false,
        fillGaps: true,
        alignRight: false,
        alignBottom: true,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[1].getPosition(), { left: 0, top: 0 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[3].getPosition(), { left: 90, top: 70 });

    teardown();
  });

  QUnit.test('layout: vertical - right/bottom', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { width: '140px' });
    utils.setStyles(children[0], { width: '70px' });
    utils.setStyles(children[3], { width: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: false,
        fillGaps: false,
        alignRight: true,
        alignBottom: true,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 50, top: 140 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 90, top: 0 });

    teardown();
  });

  QUnit.test('layout: vertical - right/bottom - fill gaps', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { width: '140px' });
    utils.setStyles(children[0], { width: '70px' });
    utils.setStyles(children[3], { width: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: false,
        fillGaps: true,
        alignRight: true,
        alignBottom: true,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 50, top: 70 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[2].getPosition(), { left: 0, top: 0 });
    assert.deepEqual(items[3].getPosition(), { left: 0, top: 70 });

    teardown();
  });

  QUnit.test('layout: horizontal - left/top', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { height: '140px' });
    utils.setStyles(children[0], { height: '70px' });
    utils.setStyles(children[3], { height: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: true,
        fillGaps: false,
        alignRight: false,
        alignBottom: false,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 0, top: 0 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 140, top: 0 });

    teardown();
  });

  QUnit.test('layout: horizontal - left/top - fill gaps', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { height: '140px' });
    utils.setStyles(children[0], { height: '70px' });
    utils.setStyles(children[3], { height: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: true,
        fillGaps: true,
        alignRight: false,
        alignBottom: false,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 0, top: 0 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 0, top: 90 });

    teardown();
  });

  QUnit.test('layout: horizontal - right/top', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { height: '140px' });
    utils.setStyles(children[0], { height: '70px' });
    utils.setStyles(children[3], { height: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: true,
        fillGaps: false,
        alignRight: true,
        alignBottom: false,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 140, top: 0 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 0, top: 0 });

    teardown();
  });

  QUnit.test('layout: horizontal - right/top - fill gaps', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { height: '140px' });
    utils.setStyles(children[0], { height: '70px' });
    utils.setStyles(children[3], { height: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: true,
        fillGaps: true,
        alignRight: true,
        alignBottom: false,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[1].getPosition(), { left: 0, top: 0 });
    assert.deepEqual(items[2].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[3].getPosition(), { left: 70, top: 90 });

    teardown();
  });

  QUnit.test('layout: horizontal - left/bottom', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { height: '140px' });
    utils.setStyles(children[0], { height: '70px' });
    utils.setStyles(children[3], { height: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: true,
        fillGaps: false,
        alignRight: false,
        alignBottom: true,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 0, top: 50 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[3].getPosition(), { left: 140, top: 90 });

    teardown();
  });

  QUnit.test('layout: horizontal - left/bottom - fill gaps', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { height: '140px' });
    utils.setStyles(children[0], { height: '70px' });
    utils.setStyles(children[3], { height: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: true,
        fillGaps: true,
        alignRight: false,
        alignBottom: true,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 0, top: 50 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[3].getPosition(), { left: 0, top: 0 });

    teardown();
  });

  QUnit.test('layout: horizontal - right/bottom', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { height: '140px' });
    utils.setStyles(children[0], { height: '70px' });
    utils.setStyles(children[3], { height: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: true,
        fillGaps: false,
        alignRight: true,
        alignBottom: true,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 140, top: 50 });
    assert.deepEqual(items[1].getPosition(), { left: 70, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 70, top: 0 });
    assert.deepEqual(items[3].getPosition(), { left: 0, top: 90 });

    teardown();
  });

  QUnit.test('layout: horizontal - right/bottom - fill gaps', function (assert) {
    assert.expect(4);

    var container = utils.createGridElements({ itemCount: 4 });
    var children = [].slice.call(container.children);

    utils.setStyles(container, { height: '140px' });
    utils.setStyles(children[0], { height: '70px' });
    utils.setStyles(children[3], { height: '30px' });

    var grid = new Muuri(container, {
      layout: {
        horizontal: true,
        fillGaps: true,
        alignRight: true,
        alignBottom: true,
      },
    });
    var items = grid.getItems();
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(items[0].getPosition(), { left: 70, top: 50 });
    assert.deepEqual(items[1].getPosition(), { left: 0, top: 70 });
    assert.deepEqual(items[2].getPosition(), { left: 0, top: 0 });
    assert.deepEqual(items[3].getPosition(), { left: 70, top: 0 });

    teardown();
  });

  QUnit.test('layout: percentage widths', function (assert) {
    assert.expect(33);

    for (var i = 1; i < 34; i++) {
      var container = utils.createGridElements({
        itemCount: i,
        itemStyles: {
          position: 'absolute',
          width: 100 / i + '%',
          height: '50px',
          background: '#000',
          border: '1px solid #ff0000',
          boxSizing: 'border-box',
        },
      });
      var grid = new Muuri(container);
      var hasIncorrectPosition = grid.getItems().some(function (item) {
        return item.getPosition().top !== 0;
      });
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };
      assert.strictEqual(hasIncorrectPosition, false, i);
      teardown();
    }
  });
})(this);
````

## File: tests/grid-options/showDuration.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test('showDuration: should disable show animation when set to 0', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container, {
      showDuration: 0,
    });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    grid.hide([item], { instant: true }).show([item]);
    assert.strictEqual(item.isVisible(), true, 'item should be visible');
    assert.strictEqual(item.isShowing(), false, 'item should not be showing');
    teardown();
  });
})(this);
````

## File: tests/grid-options/visibleStyles-hiddenStyles.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Grid options');

  QUnit.test(
    'visibleStyles/hiddenStyles: should change the visible/hidden state styles of items',
    function (assert) {
      assert.expect(2);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container, {
        visibleStyles: {
          fontSize: '30px',
        },
        hiddenStyles: {
          fontSize: '10px',
        },
      });
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      grid.hide([item], {
        onFinish: function () {
          var child = item.getElement().children[0];
          assert.strictEqual(child.style.fontSize, '10px', 'item has correct hidden styles');
          grid.show([item], {
            onFinish: function () {
              assert.strictEqual(child.style.fontSize, '30px', 'item has correct visible styles');
              teardown();
            },
          });
        },
      });
    }
  );
})(this);
````

## File: tests/item-methods/getElement.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test('getElement: should return the instance`s associated DOM element', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var itemElement = container.children[1];
    var grid = new Muuri(container);
    var item = grid.getItems(itemElement)[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(item.getElement(), itemElement);
    teardown();
  });
})(this);
````

## File: tests/item-methods/getGrid.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test('getGrid: should return the instance`s associated Grid instance', function (assert) {
    assert.expect(1);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(item.getGrid(), grid);
    teardown();
  });
})(this);
````

## File: tests/item-methods/getHeight.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test(
    'getHeight: should return the instance element`s cached height that includes paddings and borders',
    function (assert) {
      assert.expect(2);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      assert.strictEqual(
        item.getHeight(),
        50,
        'The returned height is equal to the element`s content height + top/bottom paddings + top/bottom borders size'
      );
      item.getElement().style.padding = '0px';
      assert.strictEqual(
        item.getHeight(),
        50,
        'The returned height is the cached height and not the element`s current height in DOM'
      );
      teardown();
    }
  );
})(this);
````

## File: tests/item-methods/getMargin.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test('getMargin: should return the instance element`s cached margins', function (assert) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.deepEqual(
      item.getMargin(),
      { left: 10, right: 10, top: 10, bottom: 10 },
      'The margins should be retrieved from the DOM on init'
    );
    item.getElement().style.margin = '0px';
    assert.deepEqual(
      item.getMargin(),
      { left: 10, right: 10, top: 10, bottom: 10 },
      'The returned margins are cached and not necessarilly the element`s current margins in DOM'
    );
    teardown();
  });
})(this);
````

## File: tests/item-methods/getPosition.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test(
    'getPosition: should return the instance element`s cached position in the grid',
    function (assert) {
      assert.expect(4);

      var container = utils.createGridElements({
        containerStyles: {
          position: 'relative',
          width: '140px',
        },
      });
      var grid = new Muuri(container);
      var items = grid.getItems();
      var itemA = items[0];
      var itemB = items[1];
      var itemC = items[2];
      var itemD = items[3];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      assert.deepEqual(itemA.getPosition(), { left: 0, top: 0 });
      assert.deepEqual(itemB.getPosition(), { left: 70, top: 0 });
      assert.deepEqual(itemC.getPosition(), { left: 0, top: 70 });
      assert.deepEqual(itemD.getPosition(), { left: 70, top: 70 });
      teardown();
    }
  );
})(this);
````

## File: tests/item-methods/getWidth.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test(
    'getWidth: should return the instance element`s cached width that includes paddings and borders',
    function (assert) {
      assert.expect(2);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      assert.strictEqual(
        item.getWidth(),
        50,
        'The returned width is equal to the element`s content width + left/right paddings + left/right borders size'
      );
      item.getElement().style.padding = '0px';
      assert.strictEqual(
        item.getWidth(),
        50,
        'The returned width is the cached width and not the element`s current width in DOM'
      );
      teardown();
    }
  );
})(this);
````

## File: tests/item-methods/isActive.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test('isActive: should return true if the item is active and otherwise false', function (
    assert
  ) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(
      item.isActive(),
      true,
      'An item should be active when the it`s initiated and it`s display value is set to block'
    );
    grid.hide([item]);
    assert.strictEqual(item.isActive(), false, 'An item should not be active after hide is called');
    teardown();
  });
})(this);
````

## File: tests/item-methods/isDestroyed.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test(
    'isDestroyed: should return true if the item is destroyed and otherwise false',
    function (assert) {
      assert.expect(2);

      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
      };

      assert.strictEqual(
        item.isDestroyed(),
        false,
        'An item should not be destroyed before it is removed from the grid'
      );
      grid.remove([item]);
      assert.strictEqual(
        item.isDestroyed(),
        true,
        'An item should be destroyed after it is removed from the grid'
      );
      teardown();
    }
  );
})(this);
````

## File: tests/item-methods/isDragging.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test('isDragging: should return true if the item is being dragged', function (assert) {
    assert.expect(4);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, { dragEnabled: true });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    function onDragStart() {
      grid.off('dragStart', onDragStart);
      assert.strictEqual(
        item.isDragging(),
        true,
        'An item should be in dragging state when dragging starts'
      );
    }

    function onDragMove() {
      grid.off('dragMove', onDragMove);
      assert.strictEqual(
        item.isDragging(),
        true,
        'An item should be in dragging state when dragging'
      );
    }

    function onDragEnd() {
      grid.off('dragEnd', onDragEnd);
      assert.strictEqual(
        item.isDragging(),
        false,
        'An item should not be in dragging state after dragging has ended'
      );
    }

    grid.on('dragStart', onDragStart).on('dragMove', onDragMove).on('dragEnd', onDragEnd);

    assert.strictEqual(
      item.isDragging(),
      false,
      'An item should not be in dragging state when it`s not being dragged'
    );

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
      onFinished: teardown,
    });
  });
})(this);
````

## File: tests/item-methods/isHiding.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test(
    'isHiding: should return true if the item is animating to hidden and otherwise false',
    function (assert) {
      assert.expect(4);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      assert.strictEqual(
        item.isHiding(),
        false,
        'An item should not be in hiding state when the it`s visible'
      );
      grid.hide([item], {
        onFinish: function () {
          assert.strictEqual(
            item.isHiding(),
            false,
            'An item should not be in hiding state after it has finished the hide animation'
          );
          grid.show([item]);
          assert.strictEqual(
            item.isHiding(),
            false,
            'An item should not be in hiding state when it`s being animated to visible'
          );
          teardown();
        },
      });
      assert.strictEqual(
        item.isHiding(),
        true,
        'An item should be in hiding state when the it`s being animated to hidden'
      );
    }
  );
})(this);
````

## File: tests/item-methods/isPositioning.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test(
    'isPositioning: should return true if the item`s position is being animated',
    function (assert) {
      assert.expect(3);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      assert.strictEqual(
        item.isPositioning(),
        false,
        'An item should not be in positioning state when it`s position is not being animated'
      );

      grid.move(item, -1, {
        layout: function () {
          assert.strictEqual(
            item.isPositioning(),
            false,
            'An item should not be in positioning state after the positioning animation is finished'
          );
          teardown();
        },
      });

      assert.strictEqual(
        item.isPositioning(),
        true,
        'An item should be in positioning state when it`s position is being animated'
      );
    }
  );
})(this);
````

## File: tests/item-methods/isReleasing.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test('isReleasing: should return true if the item is being released', function (assert) {
    assert.expect(6);

    var done = assert.async();
    var container = utils.createGridElements();
    var grid = new Muuri(container, { dragEnabled: true });
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
      done();
    };

    function onDragStart() {
      grid.off('dragStart', onDragStart);
      assert.strictEqual(
        item.isReleasing(),
        false,
        'An item should not be in releasing state when dragging starts'
      );
    }

    function onDragMove() {
      grid.off('dragMove', onDragMove);
      assert.strictEqual(
        item.isReleasing(),
        false,
        'An item should not be in releasing state when dragging'
      );
    }

    function onDragEnd() {
      grid.off('dragEnd', onDragEnd);
      assert.strictEqual(
        item.isReleasing(),
        false,
        'An item should not be in releasing state when drag ends'
      );
    }

    function onDragReleaseStart() {
      grid.off('dragReleaseStart', onDragReleaseStart);
      assert.strictEqual(
        item.isReleasing(),
        true,
        'An item should be in releasing state right after it has been released'
      );
    }

    function onDragReleaseEnd() {
      grid.off('dragReleaseEnd', onDragReleaseEnd);
      assert.strictEqual(
        item.isReleasing(),
        false,
        'An item should not be in releasing state right after releasing has ended'
      );
      teardown();
    }

    grid
      .on('dragStart', onDragStart)
      .on('dragMove', onDragMove)
      .on('dragEnd', onDragEnd)
      .on('dragReleaseStart', onDragReleaseStart)
      .on('dragReleaseEnd', onDragReleaseEnd);

    assert.strictEqual(
      item.isReleasing(),
      false,
      'An item should not be in releasing state when it`s not being released'
    );

    utils.dragElement({
      element: item.getElement(),
      x: 100,
      y: 100,
    });
  });
})(this);
````

## File: tests/item-methods/isShowing.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test(
    'isShowing: should return true if the item is animating to visible and otherwise false',
    function (assert) {
      assert.expect(5);

      var done = assert.async();
      var container = utils.createGridElements();
      var grid = new Muuri(container);
      var item = grid.getItems()[0];
      var teardown = function () {
        grid.destroy();
        container.parentNode.removeChild(container);
        done();
      };

      assert.strictEqual(
        item.isShowing(),
        false,
        'An item should not be in showing state when the it`s visible'
      );
      grid.hide([item], {
        onFinish: function () {
          assert.strictEqual(
            item.isShowing(),
            false,
            'An item should not be in showing state when the it`s hidden'
          );
          grid.show([item], {
            onFinish: function () {
              assert.strictEqual(
                item.isShowing(),
                false,
                'An item should not be in showing state after it has finished the show animation'
              );
              teardown();
            },
          });
          assert.strictEqual(
            item.isShowing(),
            true,
            'An item should be in showing state when it`s being animated to visible'
          );
        },
      });
      assert.strictEqual(
        item.isShowing(),
        false,
        'An item should not be in showing state when the it`s being animated to hidden'
      );
    }
  );
})(this);
````

## File: tests/item-methods/isVisible.js
````javascript
(function (window) {
  var Muuri = window.Muuri;

  QUnit.module('Item methods');

  QUnit.test('isVisible: should return true if the item is visible and otherwise false', function (
    assert
  ) {
    assert.expect(2);

    var container = utils.createGridElements();
    var grid = new Muuri(container);
    var item = grid.getItems()[0];
    var teardown = function () {
      grid.destroy();
      container.parentNode.removeChild(container);
    };

    assert.strictEqual(
      item.isVisible(),
      true,
      'An item should be visible when the it`s initiated and it`s display value is set to block'
    );
    grid.hide([item]);
    assert.strictEqual(
      item.isVisible(),
      false,
      'An item should not be visible after hide is called'
    );
    teardown();
  });
})(this);
````

## File: tests/index.js
````javascript
QUnit.config.reorder = false;

Muuri.syncPacker = new Muuri.Packer();
Muuri.asyncPacker = Muuri.defaultPacker;
Muuri.defaultPacker = Muuri.syncPacker;
````

## File: tests/utils.js
````javascript
(function(window) {
  var utils = (window.utils = {});
  var supportsTouch = !!('TouchEvent' in window);
  var supportsPointer = !!('PointerEvent' in window);

  //
  // Methods
  //

  utils.createGridElements = function(options) {
    var opts = options || {};
    var container = opts.container || document.createElement('div');
    var itemCount = typeof opts.itemCount === 'number' && opts.itemCount >= 0 ? opts.itemCount : 10;
    var itemStyles = opts.itemStyles || {
      position: 'absolute',
      width: '50px',
      height: '50px',
      padding: '5px',
      border: '5px solid #ff0000',
      margin: '10px',
      background: '#000',
      boxSizing: 'border-box'
    };
    var containerStyles = opts.containerStyles || {
      position: 'relative'
    };
    var items = [];
    var item;

    utils.setStyles(container, containerStyles);

    for (var i = 0; i < itemCount; i++) {
      item = document.createElement('div');
      utils.setStyles(item, itemStyles);
      item.appendChild(document.createElement('div'));
      container.appendChild(item);
      items.push(item);
    }

    if (container !== document.body && !document.body.contains(container)) {
      (opts.appendTo || document.body).appendChild(container);
    }

    return container;
  };

  utils.dragElement = function(config) {
    var element = config.element;
    var moveLeft = typeof config.x === 'number' ? config.x : 0;
    var moveTop = typeof config.y === 'number' ? config.y : 0;
    var pressDuration = typeof config.pressDuration === 'number' ? config.pressDuration : 100;
    var moveDuration = typeof config.moveDuration === 'number' ? config.moveDuration : 100;
    var holdDuration = typeof config.holdDuration === 'number' ? config.holdDuration : 200;
    var onFinished = config.onFinished;

    // Calculate start point.
    var from = mezr.offset(element, window);
    from.left += mezr.width(element) / 2;
    from.top += mezr.height(element) / 2;

    // Create the hand istance.
    var hand = new Hand({
      timing: 'fastFrame',
      onStop: function() {
        if (typeof onFinished === 'function') {
          window.setTimeout(onFinished, 100);
        }
      }
    });

    // Create finger instance.
    var finger = hand.growFinger(supportsPointer ? 'pointer' : supportsTouch ? 'touch' : 'mouse', {
      pointerType: supportsTouch ? 'touch' : 'mouse',
      down: false,
      width: 30,
      height: 30,
      x: from.left,
      y: from.top
    });

    // Do the drag if movement is defined.
    if (moveTop || moveLeft) {
      finger
        .down()
        .wait(pressDuration)
        .moveTo(from.left + moveLeft, from.top + moveTop, moveDuration)
        .wait(holdDuration)
        .up();
    }
    // Otherwise do a press.
    else {
      finger
        .down()
        .wait(pressDuration + holdDuration)
        .up();
    }
  };

  utils.idList = function(collection) {
    return collection.map(function(item) {
      return item._id;
    });
  };

  utils.sortedIdList = function(items) {
    return utils.idList(
      items.sort(function(a, b) {
        return a._id - b._id;
      })
    );
  };

  utils.getActiveItems = function(grid) {
    return grid.getItems().filter(function(item) {
      return item.isActive();
    });
  };

  utils.getInactiveItems = function(grid) {
    return grid.getItems().filter(function(item) {
      return !item.isActive();
    });
  };

  utils.getVisibleItems = function(grid) {
    return grid.getItems().filter(function(item) {
      return item.isVisible();
    });
  };

  utils.getHiddenItems = function(grid) {
    return grid.getItems().filter(function(item) {
      return !item.isVisible();
    });
  };

  utils.getShowingItems = function(grid) {
    return grid.getItems().filter(function(item) {
      return item.isShowing();
    });
  };

  utils.getHidingItems = function(grid) {
    return grid.getItems().filter(function(item) {
      return item.isHiding();
    });
  };

  utils.getPositioningItems = function(grid) {
    return grid.getItems().filter(function(item) {
      return item.isPositioning();
    });
  };

  utils.getReleasingItems = function(grid) {
    return grid.getItems().filter(function(item) {
      return item.isReleasing();
    });
  };

  utils.setStyles = function(element, styles) {
    var props = Object.keys(styles);
    for (var i = 0; i < props.length; i++) {
      element.style[props[i]] = styles[props[i]];
    }
  };

  utils.matches = function(el, selector) {
    var p = Element.prototype;
    return (
      p.matches ||
      p.matchesSelector ||
      p.webkitMatchesSelector ||
      p.mozMatchesSelector ||
      p.msMatchesSelector ||
      p.oMatchesSelector
    ).call(el, selector);
  };

  utils.raf = function(cb) {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(cb) {
        return window.setTimeout(cb, 16);
      }
    )(cb);
  };

  utils.isScrollEvent = function(e) {
    return e.type === 'scroll';
  };

  utils.isDraggerEvent = function(e) {
    var ret = true;
    var eventKeys = Object.keys(e);
    var requiredKeys = [
      'type',
      'srcEvent',
      'deltaX',
      'deltaY',
      'deltaTime',
      'distance',
      'isFirst',
      'isFinal',
      'identifier',
      'screenX',
      'screenY',
      'clientX',
      'clientY',
      'pageX',
      'pageY',
      'target'
    ];

    requiredKeys.forEach(function(key) {
      if (eventKeys.indexOf(key) === -1) {
        ret = false;
      }
    });

    return ret;
  };
})(this);
````

## File: .eslintrc.js
````javascript
module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {
    // Possible errors
    'no-duplicate-case': 'error',
    'no-ex-assign': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    // Best practices
    'array-callback-return': 'error',
    eqeqeq: ['error', 'always'],
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-with': 'error',
    radix: ['error', 'as-needed'],
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': 'error'
  }
};
````

## File: .gitignore
````
node_modules
website
/coverage
/website
*.log
*.env
*.DS_Store
docs/.vitepress/dist
````

## File: .prettierrc.json
````json
{
  "printWidth": 100,
  "singleQuote": true
}
````

## File: .travis.yml
````yaml
language: node_js
node_js:
- '12'
env:
  email: false
  global:
  - secure: UcHda6DVxvFcQPscXNG/6jd0pwVJoik0wx7AldoJSr1v5hZGXhdVuPUYpLVK53uhifl6DNxsovzCJF41zAg7QhJSqNaQlDXhoLghAC4iL/6VsVJBu4Jx2KZKrsPeMVJxqA6Q5FLQzF91jpkgV+pWf2g2RnXkDnm81EWIVQDhg83bs4HhrRTzdsND2nkl8iSucO9Nm3tDjC8rNaa9jagGyF3ZVTO+B/L/E0opNxPzZFdxL6UrQYjrplHjF4HEoNyBBLWf4p2Tco49xDFBNoTs8B+pBmI1i6WufuWiBhhMTwCYaKwQ0HGjKldC/v3kgYF3k+pnRQtQZdjlFrP48JI+BLn2lg0KrgU37xyDRatpTpOVD+sZ5rJlVIBYfTxgMBfdr4vQxXdXfQDwydCPl13b76XavJxEiivXvPP12IR1WD7Lpa6Smd8jroROCexwQiE8HKLaXF9uuLikgzqq2rbUNzKb3xxhMoRNNs194V44ez6oq5a2S5i9JLVmYyoGJP/hjCM7lM82mmkGIcbeFIg+V7By7VEBNLBZmWABYpSOdFv3aLPd/ckHrwhkS36wkttCiSyYUIKAKqeZwciCJqM7ibj/ZlHyUHRnXUbwLgJ+YwehJzFxotuF/9bf/7EUhHQYWVo+3+SMhg46B2nmFZW6ANWzXq06aiIoioEqd0RqiXY=
  - secure: UIZsGf28/ZLxTsxrn+AVOOtrc1tBQoIP4Ym0LiaPbL40QZFdmd8EDGpCPKJGVGY673xZ1FD8AnzrpufOUhqzlVDKlH3+CE6fhqBU9ckTnvngCvx3Tr5RkwMMBPEsdugAZA/BF1KpkRboiPXvrp+3z5Mo4CliBQofh/EYZUCkIziGXUrCiJrkO30IojVonLsq9mhiL5Vd6fHeYfQczqxdbW0Xaq9nm68J6yWyva5wlLsnhiDRZPmnb3CWZUkKIDm2YM9AyZROvHW1qfNL70XyAVNLaJ6sRCT5+0A6s0OkIYbfSDB/hhlaFyw7y7sR2lBCG6RpbIaYOKVR673exonKyamuoP5XhqAZ0avXimB6Es0aGBLdXcQusJzw+x3oji7c4r+987nb0vyzuLx9KpaaeHk8PgcNeenEe//1YtRcffp2LvyCaKAflVQurVrDOTfaSmPakvFm1fBH4U4aEqjQA1lk39yqRu+7+9BsWh5yGdIAlluTI1mU9M1TTr2K4Fj3+yaqlvc2pSjrKXBuGZwcF+3kRxUzu8qiPUmEJmjrv2FBdOObLexTba1ScpW83rwqFunkyEzlUGhNvpDq6jWZ3FfTbOqSWGAS6PLYXXbA0s4j3qXgQZrBKzRi2Swf69gqy4BkQ1jspSLi8pP0p6TEodEm5BVzd+A/CsMMUzxDcwY=
````

## File: AUTHORS.txt
````
Authors ordered by first contribution.

Niklas Rämö <inramo@gmail.com>
Indigane <https://github.com/indigane>
Jason Holland <https://github.com/jholland918>
Aslak Hellesøy <https://github.com/aslakhellesoy>
Makhambet Adiyetov <https://github.com/stat92>
Alexis Rouillard <https://github.com/Alexays>
````

## File: CONTRIBUTING.md
````markdown
# Contributing to Muuri

Thanks for the interest in contributing to Muuri! Here you will find some instructions on how to create an issue or a pull request.

## Creating an issue

### Questions

First of all you should check out the existing [questions](https://github.com/haltu/muuri/issues?q=label%3Aquestion%20) and see if your question has been asked/answered already. If not, you can [create a new issue](https://github.com/haltu/muuri/issues/new) and explain the problem you're facing.

### Improvements

Improvement ideas are always welcome! Please check first the existing [ideas](https://github.com/haltu/muuri/issues?utf8=%E2%9C%93&q=label%3Aidea), [features](https://github.com/haltu/muuri/issues?q=label%3Afeature) and [enhancements](https://github.com/haltu/muuri/issues?q=label%3Aenhancement) so that you won't be creating a duplicate issue.

### Bugs

Please [create an issue](https://github.com/haltu/muuri/issues/new) and explain the bug in detail. If possible create a [reduced test case](https://css-tricks.com/reduced-test-cases/) and share a link to it. You can, for example, fork [this CodePen example](https://codepen.io/niklasramo/pen/jyJLGM) and modify it to demonstrate the bug.

## Creating a pull request

1. **Discuss first.**
   * The first step should always be [creating a new issue](https://github.com/haltu/muuri/issues/new) and discussing your pull request suggestion with the authors and the community.
   * After you get green light it's time to get coding.
2. **Fork the repo and create a new branch for your pull request.**
   * [Fork Muuri](https://github.com/haltu/muuri#fork-destination-box).
   * Create a new branch for your pull request from the master branch. The name of the pull request branch should start with the id of the issue you opened for the pull request, e.g. `#123-fix-something`.
3. **Setup the development environment.**
   * Run `npm install` in the repository's directory.
   * You can now run the following commands:
     * `npm run build`
       * Builds `dist/muuri.js` and `dist/muuri.min.js` from `src` directory.
     * `npm run lint`
       * Lints all files in `src` directory with ESLint.
     * `npm run format`
       * Formats all files in `src` directory with Prettier.
     * `npm run test`
       * Runs unit tests for `dist/muuri.js` and `dist/muuri.min.js` files in Sauce Labs. 
       * To make this work you need to create an `.env` file the project root, which should contain `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` variables.
       * Launches chrome, firefox and safari by default.
       * You can provide arguments to launch specific browsers: `npm run test --chrome --firefox --safari --edge`.
4. **Do the updates in `src` folder.**
   * Now is the time to make the actual updates to Muuri.
   * Remember scope. Don't refactor things that are not related to the pull request. 
   * After you're done update unit tests and docs (`README.md`) if necessary.
   * Also, if this is your first pull request to Muuri remember to add yourself to the `AUTHORS.txt` file, e.g. `John Doe <https://github.com/johndoe>`.
5. **Format, build and test changes.**
   * Run `npm run format`, `npm run build` and finally `npm run test`.
6. **Create the pull request.**
   * Do your best to explain what the pull request fixes.
   * Mention which issue(s) will be closed by the pull request, e.g. `Closes #123`.
   * Request a review from [@niklasramo](https://github.com/niklasramo)
   * After your pull request is accepted it will be merged to the [dev branch](https://github.com/haltu/muuri/tree/dev) and released with the next release. If you did only some minor change in the documentation it may be merged directly to the master branch.
7. **You made it! Thank you so much for contributing to Muuri!**
````

## File: gulpfile.js
````javascript
const fs = require('fs');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const karma = require('karma');
const size = require('gulp-size');
const rimraf = require('rimraf');
const dotenv = require('dotenv');
const exec = require('child_process').exec;

const pkg = require('./package.json');
const karmaDefaults = require('./karma.defaults.js');

if (fs.existsSync('./.env')) dotenv.config();

gulp.task('lint', () => {
  return gulp
    .src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('size', () => {
  const mainPath = './' + pkg.main;
  const minifiedPath = mainPath.replace('.js', '.min.js');

  return gulp
    .src([mainPath, minifiedPath])
    .pipe(
      size({
        showFiles: true,
        showTotal: false,
      })
    )
    .pipe(
      size({
        showFiles: true,
        showTotal: false,
        title: 'gzipped',
        gzip: true,
      })
    );
});

gulp.task('clean', (cb) => {
  rimraf('./*.log', cb);
});

gulp.task('test-local', (done) => {
  // Setup browsers.
  const browsers = ['Chrome'];

  new karma.Server(
    {
      configFile: __dirname + '/karma.conf.js',
      action: 'run',
      browsers,
    },
    (exitCode) => {
      done(exitCode);
    }
  ).start();
});

gulp.task('test-local-min', (done) => {
  // Setup browsers.
  const browsers = ['Chrome'];

  // Replace main file with minified version.
  const mainPath = './' + pkg.main;
  const minifiedPath = mainPath.replace('.js', '.min.js');
  const files = karmaDefaults.files.map((path) => {
    if (path === mainPath) return minifiedPath;
    return path;
  });

  new karma.Server(
    {
      configFile: __dirname + '/karma.conf.js',
      action: 'run',
      browsers,
      files,
    },
    (exitCode) => {
      done(exitCode);
    }
  ).start();
});

gulp.task('test-sauce', (done) => {
  // Setup browsers.
  const browsers = ['slChrome', 'slFirefox', 'slSafari'];

  new karma.Server(
    {
      configFile: __dirname + '/karma.conf.js',
      action: 'run',
      browsers,
    },
    (exitCode) => {
      done(exitCode);
    }
  ).start();
});

gulp.task('test-sauce-min', (done) => {
  // Setup browsers.
  const browsers = ['slChrome', 'slFirefox', 'slSafari'];

  // Replace main file with minified version.
  const mainPath = './' + pkg.main;
  const minifiedPath = mainPath.replace('.js', '.min.js');
  const files = karmaDefaults.files.map((path) => {
    if (path === mainPath) return minifiedPath;
    return path;
  });

  new karma.Server(
    {
      configFile: __dirname + '/karma.conf.js',
      action: 'run',
      browsers,
      files,
    },
    (exitCode) => {
      done(exitCode);
    }
  ).start();
});

gulp.task('validate-formatting', (cb) => {
  exec('npm run validate-formatting', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('bundle', (cb) => {
  exec('npm run bundle', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('minify', (cb) => {
  exec('npm run minify', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task(
  'build',
  gulp.series('bundle', 'minify', (done) => {
    done();
  })
);

gulp.task(
  'pre-commit',
  gulp.series('lint', 'validate-formatting', (done) => {
    done();
  })
);

gulp.task(
  'test',
  gulp.series('lint', 'validate-formatting', 'test-sauce', 'test-sauce-min', 'clean', (done) => {
    done();
  })
);
````

## File: karma.conf.js
````javascript
const defaultSettings = require('./karma.defaults.js');

module.exports = function (config) {
  config.set(defaultSettings);
};
````

## File: karma.defaults.js
````javascript
const pkg = require('./package.json');

module.exports = {
  basePath: '',
  frameworks: ['qunit'],
  plugins: ['karma-qunit', 'karma-chrome-launcher', 'karma-sauce-launcher', 'karma-story-reporter'],
  files: [
    './node_modules/web-animations-js/web-animations.min.js',
    './node_modules/prosthetic-hand/dist/prosthetic-hand.js',
    './node_modules/mezr/mezr.js',
    './' + pkg.main,
    './tests/index.js',
    './tests/utils.js',
    './tests/grid-constructor/*.js',
    './tests/grid-options/*.js',
    './tests/grid-methods/*.js',
    './tests/grid-events/*.js',
    './tests/item-methods/*.js',
  ],
  reporters: ['story', 'saucelabs'],
  colors: true,
  autoWatch: false,
  browserDisconnectTolerance: 2,
  singleRun: true,
  hostname: '127.0.0.1',
  sauceLabs: {
    testName: pkg.name + ' - ' + pkg.version + ' - unit tests',
  },
  customLaunchers: {
    slChrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 10',
      version: 'latest',
    },
    slFirefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Windows 10',
      version: 'latest',
    },
    slSafari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'macOS 10.12',
      version: 'latest',
    },
    slEdge: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10',
      version: 'latest',
    },
  },
};
````

## File: LICENSE.md
````markdown
Copyright (c) 2015, Haltu Oy

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: package.json
````json
{
  "name": "muuri",
  "version": "0.9.5",
  "description": "Responsive, sortable, filterable and draggable layouts",
  "keywords": [
    "grid",
    "layout",
    "bin-packing",
    "filter",
    "sort",
    "drag"
  ],
  "homepage": "https://muuri.dev/",
  "license": "MIT",
  "author": {
    "name": "Niklas Rämö",
    "email": "inramo@gmail.com",
    "url": "https://github.com/niklasramo"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:haltu/muuri.git"
  },
  "main": "dist/muuri.js",
  "module": "dist/muuri.module.js",
  "types": "src/index.d.ts",
  "files": [
    "package.json",
    "src",
    "dist",
    "README.md",
    "LICENSE.md",
    "AUTHORS.txt",
    "CONTRIBUTING.md"
  ],
  "scripts": {
    "test": "./node_modules/.bin/gulp test",
    "test-sauce": "./node_modules/.bin/gulp test-sauce",
    "test-sauce-min": "./node_modules/.bin/gulp test-sauce-min",
    "test-local": "./node_modules/.bin/gulp test-local",
    "test-local-min": "./node_modules/.bin/gulp test-local-min",
    "bundle": "./node_modules/.bin/rollup -c",
    "minify": "./node_modules/.bin/terser ./dist/muuri.js -o ./dist/muuri.min.js -c -m --comments",
    "build": "./node_modules/.bin/gulp build",
    "lint": "./node_modules/.bin/gulp lint",
    "format": "./node_modules/.bin/prettier --write ./src/**/*.js",
    "format-tests": "./node_modules/.bin/prettier --write ./tests/**/*.js",
    "validate-formatting": "./node_modules/.bin/prettier --list-different ./src/**/*.js",
    "size": "./node_modules/.bin/gulp size",
    "pre-commit-hook": "./node_modules/.bin/gulp pre-commit",
    "docs-dev": "vitepress dev docs",
    "docs-build": "vitepress build docs",
    "docs-serve": "vitepress serve docs"
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run pre-commit-hook"
    }
  },
  "devDependencies": {
    "dotenv": "10.0.0",
    "gulp": "4.0.2",
    "gulp-eslint": "6.0.0",
    "gulp-size": "4.0.1",
    "husky": "4.3.8",
    "karma": "6.3.4",
    "karma-chrome-launcher": "3.1.0",
    "karma-qunit": "4.1.2",
    "karma-sauce-launcher": "4.3.6",
    "karma-story-reporter": "0.3.1",
    "mezr": "0.6.2",
    "prettier": "2.3.2",
    "prosthetic-hand": "1.3.1",
    "qunit": "2.16.0",
    "rimraf": "3.0.2",
    "rollup": "2.52.8",
    "terser": "5.7.1",
    "web-animations-js": "2.3.2",
    "vitepress": "1.0.0-alpha.14",
    "vue": "3.2.39"
  }
}
````

## File: README.md
````markdown
<h1 align="center">
  <a id="muuri" href="#muuri" aria-hidden="true"><img src="https://muuri.dev/muuri-logo.svg" alt="Muuri" width="400" /></a>
</h1>

Muuri is a JavaScript layout engine that allows you to build all kinds of layouts (no kidding!) and make them responsive, sortable, filterable, draggable and/or animated. Comparing to what's out there Muuri is a combination of [Packery](http://packery.metafizzy.co/), [Masonry](http://masonry.desandro.com/), [Isotope](http://isotope.metafizzy.co/) and [Sortable](https://github.com/RubaXa/Sortable). Wanna see it in action? Check out the [demo](https://muuri.dev/) on the website.

**Features**

- Fully customizable layout
- Asynchronous layout calculations in web workers
- Drag & drop (even between grids)
- Auto-scrolling during drag
- Nested grids
- Fast animations
- Filtering
- Sorting

<h2><a id="table-of-contents" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2>

- [Motivation](#motivation)
- [Getting started](#getting-started)
- [API](#api)
  - [Grid constructor](#grid-constructor)
  - [Grid options](#grid-options)
  - [Grid methods](#grid-methods)
  - [Grid events](#grid-events)
  - [Item methods](#item-methods)
- [Credits](#credits)
- [License](#license)

<h2><a id="motivation" href="#motivation" aria-hidden="true">#</a> Motivation</h2>

You can build pretty amazing layouts without a single line of JavaScript these days. However, sometimes (rarely though) CSS just isn't enough, and that's where Muuri comes along. At it's very core Muuri is a _layout engine_ which is limited only by your imagination. You can seriously build _any_ kind of layout, asynchronously in web workers if you wish.

Custom layouts aside, you might need to sprinkle some flare (animation) and/or interactivity (filtering / sorting / drag & drop) on your layout (be it CSS or JS based). Stuff gets complex pretty fast and most of us probably reach for existing libraries to handle the complexity at that point. This is why most of these extra features are built into Muuri's core, so you don't have to go hunting for additional libraries or re-inventing the wheel for the nth time.

The long-term goal of Muuri is to provide a simple (and as low-level as possible) API for building amazing layouts with unmatched performance and _most_ of the complexity abstracted away.

<h2><a id="getting-started" href="#getting-started" aria-hidden="true">#</a> Getting started</h2>

<h3><a id="getting-started-1" href="#getting-started-1" aria-hidden="true">#</a> 1. Get Muuri</h3>

Install via [npm](https://www.npmjs.com/package/muuri):

```bash
npm install muuri
```

Or download:

- [muuri.js](https://cdn.jsdelivr.net/npm/muuri@0.9.5/dist/muuri.js) - for development (not minified, with comments).
- [muuri.min.js](https://cdn.jsdelivr.net/npm/muuri@0.9.5/dist/muuri.min.js) - for production (minified, no comments).

Or link directly:

```html
<script src="https://cdn.jsdelivr.net/npm/muuri@0.9.5/dist/muuri.min.js"></script>
```

<h3><a id="getting-started-2" href="#getting-started-2" aria-hidden="true">#</a> 2. Get Web Animations Polyfill (if needed)</h3>

Muuri uses [Web Animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) to handle all the animations by default. If you need to use Muuri on a browser that does not support Web Animations you need to use a [polyfill](https://github.com/web-animations/web-animations-js).

Install via [npm](https://www.npmjs.com/package/web-animations-js):

```bash
npm install web-animations-js
```

Or download:

- [web-animations.min.js](https://cdn.jsdelivr.net/npm/web-animations-js@2.3.2/web-animations.min.js)

Or link directly:

```html
<script src="https://cdn.jsdelivr.net/npm/web-animations-js@2.3.2/web-animations.min.js"></script>
```

<h3><a id="getting-started-3" href="#getting-started-3" aria-hidden="true">#</a> 3. Add the markup</h3>

- Every grid must have a container element (referred as the _grid element_ from now on).
- Grid items must always consist of at least two elements. The outer element is used for positioning the item and the inner element (first direct child) is used for animating the item's visibility (show/hide methods). You can insert any markup you wish inside the inner item element.
- Note that the class names in the below example are not required by Muuri at all, they're just there for example's sake.

```html
<div class="grid">
  <div class="item">
    <div class="item-content">
      <!-- Safe zone, enter your custom markup -->
      This can be anything.
      <!-- Safe zone ends -->
    </div>
  </div>

  <div class="item">
    <div class="item-content">
      <!-- Safe zone, enter your custom markup -->
      <div class="my-custom-content">
        Yippee!
      </div>
      <!-- Safe zone ends -->
    </div>
  </div>
</div>
```

<h3><a id="getting-started-4" href="#getting-started-4" aria-hidden="true">#</a> 4. Add the styles</h3>

- The grid element must be "positioned" meaning that it's CSS position property must be set to _relative_, _absolute_ or _fixed_. Also note that Muuri automatically resizes the grid element's width/height depending on the area the items cover and the layout algorithm configuration.
- The item elements must have their CSS position set to _absolute_.
- The item elements must not have any CSS transitions or animations applied to them, because they might conflict with Muuri's internal animation engine. However, the grid element can have transitions applied to it if you want it to animate when it's size changes after the layout operation.
- You can control the gaps between the items by giving some margin to the item elements.
- One last thing. Never ever set `overflow: auto;` or `overflow: scroll;` to the grid element. Muuri's calculation logic does not account for that and you _will_ see some item jumps when dragging starts. Always use a wrapper element for the grid element where you set the `auto`/`scroll` overflow values.

```css
.grid {
  position: relative;
}
.item {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 5px;
  z-index: 1;
  background: #000;
  color: #fff;
}
.item.muuri-item-dragging {
  z-index: 3;
}
.item.muuri-item-releasing {
  z-index: 2;
}
.item.muuri-item-hidden {
  z-index: 0;
}
.item-content {
  position: relative;
  width: 100%;
  height: 100%;
}
```

<h3><a id="getting-started-5" href="#getting-started-5" aria-hidden="true">#</a> 5. Fire it up</h3>

The bare minimum configuration is demonstrated below. You must always provide the grid element (or a selector so Muuri can fetch the element for you), everything else is optional.

```javascript
var grid = new Muuri('.grid');
```

You can view this little tutorial demo [here](https://codepen.io/niklasramo/pen/wpwNjK). After that you might want to check some [other demos](https://codepen.io/collection/AWopag/) as well.

<h2><a id="api" href="#api" aria-hidden="true">#</a> API</h2>

<h3><a id="grid-constructor" href="#grid-constructor" aria-hidden="true">#</a> Grid constructor</h3>

`Muuri` is a constructor function and should be always instantiated with the `new` keyword. For the sake of clarity, we refer to a Muuri instance as _grid_ throughout the documentation.

**Syntax**

`Muuri( element, [options] )`

**Parameters**

- **element** &nbsp;&mdash;&nbsp; _element_ / _string_
  - Default value: `null`.
  - You can provide the element directly or use a selector (string) which uses [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) internally.
- **options** &nbsp;&mdash;&nbsp; _object_
  - Optional. Check out the [detailed options reference](#grid-options).

**Default options**

The default options are stored in `Muuri.defaultOptions` object, which in it's default state contains the following configuration:

```javascript
{
  // Initial item elements
  items: '*',

  // Default show animation
  showDuration: 300,
  showEasing: 'ease',

  // Default hide animation
  hideDuration: 300,
  hideEasing: 'ease',

  // Item's visible/hidden state styles
  visibleStyles: {
    opacity: '1',
    transform: 'scale(1)'
  },
  hiddenStyles: {
    opacity: '0',
    transform: 'scale(0.5)'
  },

  // Layout
  layout: {
    fillGaps: false,
    horizontal: false,
    alignRight: false,
    alignBottom: false,
    rounding: false
  },
  layoutOnResize: 150,
  layoutOnInit: true,
  layoutDuration: 300,
  layoutEasing: 'ease',

  // Sorting
  sortData: null,

  // Drag & Drop
  dragEnabled: false,
  dragContainer: null,
  dragHandle: null,
  dragStartPredicate: {
    distance: 0,
    delay: 0
  },
  dragAxis: 'xy',
  dragSort: true,
  dragSortHeuristics: {
    sortInterval: 100,
    minDragDistance: 10,
    minBounceBackAngle: 1
  },
  dragSortPredicate: {
    threshold: 50,
    action: 'move',
    migrateAction: 'move'
  },
  dragRelease: {
    duration: 300,
    easing: 'ease',
    useDragContainer: true
  },
  dragCssProps: {
    touchAction: 'none',
    userSelect: 'none',
    userDrag: 'none',
    tapHighlightColor: 'rgba(0, 0, 0, 0)',
    touchCallout: 'none',
    contentZooming: 'none'
  },
  dragPlaceholder: {
    enabled: false,
    createElement: null,
    onCreate: null,
    onRemove: null
  },
  dragAutoScroll: {
    targets: [],
    handle: null,
    threshold: 50,
    safeZone: 0.2,
    speed: Muuri.AutoScroller.smoothSpeed(1000, 2000, 2500),
    sortDuringScroll: true,
    smoothStop: false,
    onStart: null,
    onStop: null
  },

  // Classnames
  containerClass: 'muuri',
  itemClass: 'muuri-item',
  itemVisibleClass: 'muuri-item-shown',
  itemHiddenClass: 'muuri-item-hidden',
  itemPositioningClass: 'muuri-item-positioning',
  itemDraggingClass: 'muuri-item-dragging',
  itemReleasingClass: 'muuri-item-releasing',
  itemPlaceholderClass: 'muuri-item-placeholder'
}
```

You can modify the default options easily:

```javascript
Muuri.defaultOptions.showDuration = 400;
Muuri.defaultOptions.dragSortPredicate.action = 'swap';
```

This is how you would use the options:

```javascript
// Minimum configuration.
var gridA = new Muuri('.grid-a');

// Providing some options.
var gridB = new Muuri('.grid-b', {
  items: '.item',
});
```

<h3><a id="grid-options" href="#grid-options" aria-hidden="true">#</a> Grid options</h3>

- [items](#grid-option-items)
- [showDuration](#grid-option-showduration)
- [showEasing](#grid-option-showeasing)
- [hideDuration](#grid-option-hideduration)
- [hideEasing](#grid-option-hideeasing)
- [visibleStyles](#grid-option-visiblestyles)
- [hiddenStyles](#grid-option-hiddenstyles)
- [layout](#grid-option-layout)
- [layoutOnResize](#grid-option-layoutonresize)
- [layoutOnInit](#grid-option-layoutoninit)
- [layoutDuration](#grid-option-layoutduration)
- [layoutEasing](#grid-option-layouteasing)
- [sortData](#grid-option-sortdata)
- [dragEnabled](#grid-option-dragenabled)
- [dragContainer](#grid-option-dragcontainer)
- [dragHandle](#grid-option-draghandle)
- [dragStartPredicate](#grid-option-dragstartpredicate)
- [dragAxis](#grid-option-dragaxis)
- [dragSort](#grid-option-dragsort)
- [dragSortHeuristics](#grid-option-dragsortheuristics)
- [dragSortPredicate](#grid-option-dragsortpredicate)
- [dragRelease](#grid-option-dragrelease)
- [dragCssProps](#grid-option-dragcssprops)
- [dragPlaceholder](#grid-option-dragplaceholder)
- [dragAutoScroll](#grid-option-dragautoscroll)
- [containerClass](#grid-option-containerclass)
- [itemClass](#grid-option-itemclass)
- [itemVisibleClass](#grid-option-itemvisibleclass)
- [itemHiddenClass](#grid-option-itemhiddenclass)
- [itemPositioningClass](#grid-option-itempositioningclass)
- [itemDraggingClass](#grid-option-itemdraggingclass)
- [itemReleasingClass](#grid-option-itemreleasingclass)
- [itemPlaceholderClass](#grid-option-itemplaceholderclass)

<h3><a id="grid-option-items" href="#grid-option-items" aria-hidden="true">#</a> <i>option</i>: items</h3>

The initial item elements, which should be children of the grid element. All elements that are not children of the grid element (e.g. if they are not in the DOM yet) will be appended to the grid element. You can provide an array of elements, [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) or a selector (string). If you provide a selector Muuri uses it to filter the current child elements of the container element and sets them as initial items. By default all current child elements of the provided grid element are used as initial items.

- Default value: `'*'`.
- Accepted types: array (of elements), [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection), string, null.

**Examples**

```javascript
// Use specific items.
var grid = new Muuri(elem, {
  items: [elemA, elemB, elemC],
});

// Use node list.
var grid = new Muuri(elem, {
  items: elem.querySelectorAll('.item'),
});

// Use selector.
var grid = new Muuri(elem, {
  items: '.item',
});
```

<h3><a id="grid-option-showduration" href="#grid-option-showduration" aria-hidden="true">#</a> <i>option</i>: showDuration</h3>

Show animation duration in milliseconds. Set to `0` to disable show animation.

- Default value: `300`.
- Accepted types: number.

**Examples**

```javascript
var grid = new Muuri(elem, {
  showDuration: 600,
});
```

<h3><a id="grid-option-showeasing" href="#grid-option-showeasing" aria-hidden="true">#</a> <i>option</i>: showEasing</h3>

Show animation easing. Accepts any valid [Animation easing](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing) value.

- Default value: `'ease'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
});
```

<h3><a id="grid-option-hideduration" href="#grid-option-hideduration" aria-hidden="true">#</a> <i>option</i>: hideDuration</h3>

Hide animation duration in milliseconds. Set to `0` to disable hide animation.

- Default value: `300`.
- Accepted types: number.

**Examples**

```javascript
var grid = new Muuri(elem, {
  hideDuration: 600,
});
```

<h3><a id="grid-option-hideeasing" href="#grid-option-hideeasing" aria-hidden="true">#</a> <i>option</i>: hideEasing</h3>

Hide animation easing. Accepts any valid [Animation easing](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing) value.

- Default value: `'ease'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
});
```

<h3><a id="grid-option-visiblestyles" href="#grid-option-visiblestyles" aria-hidden="true">#</a> <i>option</i>: visibleStyles</h3>

The styles that will be applied to all visible items. These styles are also used for the show/hide animations which means that you have to have the same style properties in visibleStyles and hiddenStyles options. Be sure to define all style properties camel cased and without vendor prefixes (Muuri prefixes the properties automatically where needed).

- Default value:
  ```javascript
  {
    opacity: 1,
    transform: 'scale(1)'
  }
  ```
- Accepted types: object.

**Examples**

```javascript
var grid = new Muuri(elem, {
  visibleStyles: {
    opacity: 1,
    transform: 'rotate(45deg)',
  },
  hiddenStyles: {
    opacity: 0,
    transform: 'rotate(-45deg)',
  },
});
```

<h3><a id="grid-option-hiddenstyles" href="#grid-option-hiddenstyles" aria-hidden="true">#</a> <i>option</i>: hiddenStyles</h3>

The styles that will be applied to all hidden items. These styles are also used for the show/hide animations which means that you have to have the same style properties in visibleStyles and hiddenStyles options. Be sure to define all style properties camel cased and without vendor prefixes (Muuri prefixes the properties automatically where needed).

- Default value:
  ```javascript
  {
    opacity: 0,
    transform: 'scale(0.5)'
  }
  ```
- Accepted types: object.

**Examples**

```javascript
var grid = new Muuri(elem, {
  visibleStyles: {
    opacity: 1,
    transform: 'rotate(45deg)',
  },
  hiddenStyles: {
    opacity: 0,
    transform: 'rotate(-45deg)',
  },
});
```

<h3><a id="grid-option-layout" href="#grid-option-layout" aria-hidden="true">#</a> <i>option</i>: layout</h3>

Define how the items will be positioned. Muuri ships with a configurable layout algorithm which is used by default. It's pretty flexible and suitable for most common situations (lists, grids and even bin packed grids). If that does not fit the bill you can always provide your own layout algorithm (it's not as scary as it sounds).

Muuri supports calculating the layout both synchronously and asynchronously. By default (if you use the default layout algorithm) Muuri will use two shared web workers to compute the layouts asynchronously. In browsers that do not support web workers Muuri will fallback to synchronous layout calculations.

- Default value:
  ```javascript
  {
    fillGaps: false,
    horizontal: false,
    alignRight: false,
    alignBottom: false,
    rounding: false
  }
  ```
- Accepted types: function, object.

**Provide an _object_ to configure the default layout algorithm with the following properties**

- **fillGaps** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the algorithm goes through every item in order and places each item to the first available free slot, even if the slot happens to be visually _before_ the previous element's slot. Practically this means that the items might not end up visually in order, but there will be less gaps in the grid.
- **horizontal** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the grid works in landscape mode (grid expands to the right). Use for horizontally scrolling sites. When `false` the grid works in "portrait" mode and expands downwards.
- **alignRight** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the items are aligned from right to left.
- **alignBottom** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the items are aligned from the bottom up.
- **rounding** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When `true` the item dimensions are rounded to a precision of two decimals for the duration of layout calculations. This procedure stabilizes the layout calculations quite a lot, but also causes a hit on performance. Use only if you see your layout behaving badly, which might happen sometimes (hopefully never) when using relative dimension values.

**Provide a _function_ to use a custom layout algorithm**

When you provide a custom layout function Muuri calls it whenever calculation of layout is necessary. Before calling the layout function Muuri always calculates the current width and height of the grid element and also creates an array of all the items that are part of the layout currently (all _active_ items).

The layout function always receives the following arguments:

- **grid** &nbsp;&mdash;&nbsp; _Muuri_
  - The grid instance that requested the layout.
- **layoutId** &nbsp;&mdash;&nbsp; _number_
  - Automatically generated unique id for the layout which is used to keep track of the layout requests and to make sure that the correct layout gets applied at correct time.
- **items** &nbsp;&mdash;&nbsp; _array_
  - Array of `Muuri.Item` instances. A new array instance is created for each layout so there's no harm in manipulating this if you need to (or using it as is for the layout data object).
- **width** &nbsp;&mdash;&nbsp; _number_
  - Current width (in pixels) of the grid element (excluding borders, but including padding).
- **height** &nbsp;&mdash;&nbsp; _number_
  - Current height (in pixels) of the grid element (excluding borders, but including padding).
- **callback** &nbsp;&mdash;&nbsp; _function_
  - When the layout is calculated and ready to be applied you need to call this callback function and provide a _layout object_ as it's argument. Note that if another layout is requesteded while the current layout is still being calculated (asynchronously) this layout will be ignored.

If the layout function's calculations are asynchronous you can optionally return a cancel function, which Muuri will call if there is a new layout request before the current layout has finished it's calculations.

The layout object, which needs to be provided to the callback, must include the following properties.

- **id** &nbsp;&mdash;&nbsp; _number_
  - The layout's unique id (must be the `layoutId` provided by Muuri).
- **items** &nbsp;&mdash;&nbsp; _array_
  - Array of the active item instances that are part of the layout. You can pass the same `items` array here which is provided by Muuri (in case you haven't mutated it). This array items must be identical to the array of items provided by Muuri.
- **slots** &nbsp;&mdash;&nbsp; _array_
  - Array of the item positions (numbers). E.g. if the items were `[a, b]` this should be `[aLeft, aTop, bLeft, bTop]`. You have to calculate the `left` and `top` position for each item in the provided _items_ array in the same order the items are provided.
- **styles** &nbsp;&mdash;&nbsp; _object / null_
  - Here you can optionally define all the layout related CSS styles that should be applied to the grid element _just_ before the `layoutStart` event is emitted. E.g. `{width: '100%', height: '200px', minWidth: '200px'}`.
  - It's important to keep in mind here that if the grid element's `box-sizing` CSS property is set to `border-box` the element's borders are included in the dimensions. E.g. if you set `{width: '100px', width: '100px'}` here and the element has a `5px` border and `box-sizing` is set to `border-box`, then the _layout's_ effective `width` and `height` (as perceived by Muuri) will be `90px`. So remember to take that into account and add the borders to the dimensions when necessary. If this sounds complicated then just don't set borders directly to the grid element or make sure that grid element's `box-sizing` is set to `content-box` (which is the default value).

Note that you can add additional properties to the layout object if you wish, e.g. the default layout algorithm also stores the layout's width and height (in pixels) to the layout object.

**Examples**

```javascript
// Customize the default layout algorithm.
var grid = new Muuri(elem, {
  layout: {
    fillGaps: true,
    horizontal: true,
    alignRight: true,
    alignBottom: true,
    rounding: true,
  },
});
```

```javascript
// Build your own layout algorithm.
var grid = new Muuri(elem, {
  layout: function (grid, layoutId, items, width, height, callback) {
    var layout = {
      id: layoutId,
      items: items,
      slots: [],
      styles: {},
    };

    // Calculate the slots asynchronously. Note that the timeout is here only
    // as an example and does not help at all in the calculations. You should
    // offload the calculations to web workers if you want real benefits.
    // Also note that doing asynchronous layout is completely optional and you
    // can call the callback function synchronously also.
    var timerId = window.setTimeout(function () {
      var item,
        m,
        x = 0,
        y = 0,
        w = 0,
        h = 0;

      for (var i = 0; i < items.length; i++) {
        item = items[i];
        x += w;
        y += h;
        m = item.getMargin();
        w = item.getWidth() + m.left + m.right;
        h = item.getHeight() + m.top + m.bottom;
        layout.slots.push(x, y);
      }

      w += x;
      h += y;

      // Set the CSS styles that should be applied to the grid element.
      layout.styles.width = w + 'px';
      layout.styles.height = h + 'px';

      // When the layout is fully computed let's call the callback function and
      // provide the layout object as it's argument.
      callback(layout);
    }, 200);

    // If you are doing an async layout you _can_ (if you want to) return a
    // function that cancels this specific layout calculations if it's still
    // processing/queueing when the next layout is requested.
    return function () {
      window.clearTimeout(timerId);
    };
  },
});
```

<h3><a id="grid-option-layoutonresize" href="#grid-option-layoutonresize" aria-hidden="true">#</a> <i>option</i>: layoutOnResize</h3>

Should Muuri automatically trigger `layout` method on window resize? Set to `false` to disable. When a number or `true` is provided Muuri will automatically position the items every time window is resized. The provided number (`true` is transformed to `0`) equals to the amount of time (in milliseconds) that is waited before items are positioned after each window resize event.

- Default value: `150`.
- Accepted types: boolean, number.

**Examples**

```javascript
// No layout on resize.
var grid = new Muuri(elem, {
  layoutOnResize: false,
});
```

```javascript
// Layout on resize (instantly).
var grid = new Muuri(elem, {
  layoutOnResize: true,
});
```

```javascript
// Layout on resize (with 200ms debounce).
var grid = new Muuri(elem, {
  layoutOnResize: 200,
});
```

<h3><a id="grid-option-layoutoninit" href="#grid-option-layoutoninit" aria-hidden="true">#</a> <i>option</i>: layoutOnInit</h3>

Should Muuri trigger `layout` method automatically on init?

- Default value: `true`.
- Accepted types: boolean.

**Examples**

```javascript
var grid = new Muuri(elem, {
  layoutOnInit: false,
});
```

<h3><a id="grid-option-layoutduration" href="#grid-option-layoutduration" aria-hidden="true">#</a> <i>option</i>: layoutDuration</h3>

The duration for item's layout animation in milliseconds. Set to `0` to disable.

- Default value: `300`.
- Accepted types: number.

**Examples**

```javascript
var grid = new Muuri(elem, {
  layoutDuration: 600,
});
```

<h3><a id="grid-option-layouteasing" href="#grid-option-layouteasing" aria-hidden="true">#</a> <i>option</i>: layoutEasing</h3>

The easing for item's layout animation. Accepts any valid [Animation easing](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing) value.

- Default value: `'ease'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  layoutEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
});
```

<h3><a id="grid-option-sortdata" href="#grid-option-sortdata" aria-hidden="true">#</a> <i>option</i>: sortData</h3>

The sort data getter functions. Provide an object where the key is the name of the sortable attribute and the function returns a value (from the item) by which the items can be sorted.

- Default value: `null`.
- Accepted types: object, null.

**Examples**

```javascript
var grid = new Muuri(elem, {
  sortData: {
    foo: function (item, element) {
      return parseFloat(element.getAttribute('data-foo'));
    },
    bar: function (item, element) {
      return element.getAttribute('data-bar').toUpperCase();
    },
  },
});
// Refresh sort data whenever an item's data-foo or data-bar changes
grid.refreshSortData();
// Sort the grid by foo and bar.
grid.sort('foo bar');
```

<h3><a id="grid-option-dragenabled" href="#grid-option-dragenabled" aria-hidden="true">#</a> <i>option</i>: dragEnabled</h3>

Should items be draggable?

- Default value: `false`.
- Accepted types: boolean.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragEnabled: true,
});
```

<h3><a id="grid-option-dragcontainer" href="#grid-option-dragcontainer" aria-hidden="true">#</a> <i>option</i>: dragContainer</h3>

The element the dragged item should be appended to for the duration of the drag. If set to `null` (which is also the default value) the grid element will be used.

- Default value: `null`.
- Accepted types: element, null.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragContainer: document.body,
});
```

<h3><a id="grid-option-draghandle" href="#grid-option-draghandle" aria-hidden="true">#</a> <i>option</i>: dragHandle</h3>

The element within the item element that should be used as the drag handle. This should be a CSS selector which will be fed to `element.querySelector()` as is to obtain the handle element when the item is instantiated. If no valid element is found or if this is `null` Muuri will use the item element as the handle.

- Default value: `null`.
- Accepted types: string, null.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragHandle: '.handle',
});
```

<h3><a id="grid-option-dragstartpredicate" href="#grid-option-dragstartpredicate" aria-hidden="true">#</a> <i>option</i>: dragStartPredicate</h3>

A function that determines when the item should start moving when the item is being dragged. By default uses the built-in start predicate which has some configurable options.

- Default value:
  ```javascript
  {
    distance: 0,
    delay: 0
  }
  ```
- Accepted types: function, object.

If an object is provided the default start predicate handler will be used. You can define the following properties:

- **distance** &nbsp;&mdash;&nbsp; _number_
  - Default value: `0`.
  - How many pixels the user must drag before the drag procedure starts and the item starts moving.
- **delay** &nbsp;&mdash;&nbsp; _number_
  - Default value: `0`.
  - How long (in milliseconds) the user must drag before the dragging starts.

If you provide a function you can customize the drag start logic as you please. When the user starts to drag an item this predicate function will be called until you return `true` or `false`. If you return `true` the item will begin to move whenever the item is dragged. If you return `false` the item will not be moved at all. Note that after you have returned `true` or `false` this function will not be called until the item is released and dragged again.

The predicate function receives two arguments:

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The item that's being dragged.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
// Configure the default predicate
var grid = new Muuri(elem, {
  dragStartPredicate: {
    distance: 10,
    delay: 100,
  },
});
```

```javascript
// Provide your own predicate
var grid = new Muuri(elem, {
  dragStartPredicate: function (item, e) {
    // Start moving the item after the item has been dragged for one second.
    if (e.deltaTime > 1000) {
      return true;
    }
  },
});
```

```javascript
// Pro tip: provide your own predicate and fall back to the default predicate.
var grid = new Muuri(elem, {
  dragStartPredicate: function (item, e) {
    // If this is final event in the drag process, let's prepare the predicate
    // for the next round (do some resetting/teardown). The default predicate
    // always needs to be called during the final event if there's a chance it
    // has been triggered during the drag process because it does some necessary
    // state resetting.
    if (e.isFinal) {
      Muuri.ItemDrag.defaultStartPredicate(item, e);
      return;
    }

    // Prevent first item from being dragged.
    if (grid.getItems()[0] === item) {
      return false;
    }

    // For other items use the default drag start predicate.
    return Muuri.ItemDrag.defaultStartPredicate(item, e);
  },
});
```

<h3><a id="grid-option-dragaxis" href="#grid-option-dragaxis" aria-hidden="true">#</a> <i>option</i>: dragAxis</h3>

Force items to be moved only vertically or horizontally when dragged. Set to `'x'` for horizontal movement and to `'y'` for vertical movement. By default items can be dragged both vertically and horizontally.

- Default value: `'xy'`.
- Accepted types: string.
- Allowed values: `'x'`, `'y'`, `'xy'`.

**Examples**

```javascript
// Move items only horizontally when dragged.
var grid = new Muuri(elem, {
  dragAxis: 'x',
});
```

```javascript
// Move items only vertically when dragged.
var grid = new Muuri(elem, {
  dragAxis: 'y',
});
```

<h3><a id="grid-option-dragsort" href="#grid-option-dragsort" aria-hidden="true">#</a> <i>option</i>: dragSort</h3>

Should the items be sorted during drag? A simple boolean will do just fine here.

Alternatively you can do some advanced stuff and control within which grids a specific item can be sorted and dragged into. To do that you need to provide a function which receives the dragged item as its first argument and should return an array of grid instances. An important thing to note here is that you need to return _all_ the grid instances you want the dragged item to sort within, even the current grid instance. If you return an empty array the dragged item will not cause sorting at all.

- Default value: `true`.
- Accepted types: boolean, function.

**Examples**

```javascript
// Disable drag sorting.
var grid = new Muuri(elem, {
  dragSort: false,
});
```

```javascript
// Multigrid drag sorting.
var gridA = new Muuri(elemA, { dragSort: getAllGrids });
var gridB = new Muuri(elemB, { dragSort: getAllGrids });
var gridC = new Muuri(elemC, { dragSort: getAllGrids });

function getAllGrids(item) {
  return [gridA, gridB, gridC];
}
```

<h3><a id="grid-option-dragsortheuristics" href="#grid-option-dragsortheuristics" aria-hidden="true">#</a> <i>option</i>: dragSortHeuristics</h3>

Defines various heuristics so that sorting during drag would be smoother and faster.

- Default value:
  ```javascript
  {
    sortInterval: 100,
    minDragDistance: 10,
    minBounceBackAngle: 1
  }
  ```
- Accepted types: object.

You can define the following properties:

- **sortInterval** &nbsp;&mdash;&nbsp; _number_
  - Default value: `100`.
  - Defines the amount of time the dragged item must be still before `dragSortPredicate` function is called.
- **minDragDistance** &nbsp;&mdash;&nbsp; _number_
  - Default value: `10`.
  - Defines how much (in pixels) the item must be dragged before `dragSortPredicate` can be called.
- **minBounceBackAngle** &nbsp;&mdash;&nbsp; _number_
  - Default value: `1`.
  - Defines the minimum angle (in radians) of the delta vector between the last movement vector and the current movement vector that is required for the dragged item to be allowed to be sorted to it's previous index. The problem this heuristic is trying to solve is the scenario where you drag an item over a much bigger item and the bigger item moves, but it's still overlapping the dragged item after repositioning. Now when you move the dragged item again another sort is triggered and the bigger item moves back to it's previous position. This bouncing back and forth can go on for quite a while and it looks quite erratic. The fix we do here is that, by default, we disallow an item to be moved back to it's previous position, unless it's drag direction changes enough. And what is enough? That's what you can define here. Note that this option works in tandem with `minDragDistance` and needs it to be set to `3` at minimum to be enabled at all.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragEnabled: true,
  dragSortHeuristics: {
    sortInterval: 10,
    minDragDistance: 5,
    minBounceBackAngle: Math.PI / 2,
  },
});
```

```javascript
// Pro tip: If you want drag sorting happening only on release set a really
// long sortInterval. A bit of a hack, but works.
var grid = new Muuri(elem, {
  dragEnabled: true,
  dragSortHeuristics: {
    sortInterval: 3600000, // 1 hour
  },
});
```

<h3><a id="grid-option-dragsortpredicate" href="#grid-option-dragsortpredicate" aria-hidden="true">#</a> <i>option</i>: dragSortPredicate</h3>

Defines the logic for the sort procedure during dragging an item.

- Default value:
  ```javascript
  {
    threshold: 50,
    action: 'move',
    migrateAction: 'move'
  }
  ```
- Accepted types: function, object.

If an object is provided the default sort predicate handler will be used. You can define the following properties:

- **threshold** &nbsp;&mdash;&nbsp; _number_
  - Default value: `50`.
  - Allowed values: `1` - `100`.
  - How many percent the intersection area between the dragged item and the compared item should be from the maximum potential intersection area between the items before sorting is triggered.
- **action** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'move'`.
  - Allowed values: `'move'`, `'swap'`.
  - Should the dragged item be _moved_ to the new position or should it _swap_ places with the item it overlaps when the drag occurs within the same grid?
- **migrateAction** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'move'`.
  - Allowed values: `'move'`, `'swap'`.
  - Should the dragged item be _moved_ to the new position or should it _swap_ places with the item it overlaps when the dragged item is moved to another grid?

Alternatively you can provide your own callback function where you can define your own custom sort logic. The callback function receives two arguments:

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The item that's being dragged.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

The callback should return a _falsy_ value if sorting should not occur. If, however, sorting should occur the callback should return an object containing the following properties:

- **index** &nbsp;&mdash;&nbsp; _number_
  - The index where the item should be moved to.
- **grid** &nbsp;&mdash;&nbsp; _Muuri_
  - The grid where the item should be moved to.
  - Defaults to the item's current grid.
  - Optional.
- **action** &nbsp;&mdash;&nbsp; _string_
  - The movement method.
  - Default value: `'move'`.
  - Allowed values: `'move'` or `'swap'`.
  - Optional.

**Examples**

```javascript
// Customize the default predicate.
var grid = new Muuri(elem, {
  dragSortPredicate: {
    threshold: 90,
    action: 'swap',
  },
});
```

```javascript
// Provide your own predicate.
var grid = new Muuri(elem, {
  dragSortPredicate: function (item, e) {
    if (e.deltaTime < 1000) return false;
    return {
      index: Math.round(e.deltaTime / 1000) % 2 === 0 ? -1 : 0,
      action: 'swap',
    };
  },
});
```

```javascript
// Pro tip: use the default predicate as fallback in your custom predicate.
var grid = new Muuri(elem, {
  dragSortPredicate: function (item, e) {
    if (item.classList.contains('no-sort')) return false;
    return Muuri.ItemDrag.defaultSortPredicate(item, {
      action: 'swap',
      threshold: 75,
    });
  },
});
```

<h3><a id="grid-option-dragrelease" href="#grid-option-dragrelease" aria-hidden="true">#</a> <i>option</i>: dragRelease</h3>

- Default value:
  ```javascript
  {
    duration: 300,
    easing: 'ease',
    useDragContainer: true
  }
  ```
- Accepted types: object.

You can define the following properties:

- **duration** &nbsp;&mdash;&nbsp; _number_
  - Default value: `300`.
  - The duration for item's drag release animation. Set to `0` to disable.
- **easing** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'ease'`.
  - The easing for item's drag release animation. Accepts any valid [Animation easing](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing) value.
- **useDragContainer** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `true`.
  - If `true` the item element will remain within the `dragContainer` for the duration of the release process. Otherwise the item element will be inserted within the grid element (if not already inside it) at the beginning of the release process.

**Examples**

```javascript
var grid = new Muuri(elem, {
  dragRelease: {
    duration: 600,
    easing: 'ease-out',
    useDragContainer: false,
  },
});
```

<h3><a id="grid-option-dragcssprops" href="#grid-option-dragcssprops" aria-hidden="true">#</a> <i>option</i>: dragCssProps</h3>

Drag specific CSS properties that Muuri sets to the draggable item elements. Muuri automatically prefixes the properties before applying them to the element. `touchAction` property is required to be always defined, but the other properties are optional and can be omitted by setting their value to an empty string if you want to e.g. define them via CSS only.

- Default value:
  ```javascript
  {
    touchAction: 'none',
    userSelect: 'none',
    userDrag: 'none',
    tapHighlightColor: 'rgba(0, 0, 0, 0)',
    touchCallout: 'none',
    contentZooming: 'none'
  }
  ```
- Accepted types: object.

You can define the following properties:

- **touchAction** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
- **userSelect** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
  - Optional.
- **userDrag** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - http://help.dottoro.com/lcbixvwm.php
  - Optional.
- **tapHighlightColor** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'rgba(0, 0, 0, 0)'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
  - Optional.
- **touchCallout** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout
  - Optional.
- **contentZooming** &nbsp;&mdash;&nbsp; _string_
  - Default value: `'none'`.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-content-zooming
  - Optional.

**Examples**

```javascript
// Only set the required touch-action CSS property via the options if you for
// example want to set the other props via CSS instead.
var grid = new Muuri(elem, {
  dragEnabled: true,
  dragCssProps: {
    touchAction: 'pan-y',
    userSelect: '',
    userDrag: '',
    tapHighlightColor: '',
    touchCallout: '',
    contentZooming: '',
  },
});
```

<h3><a id="grid-option-dragplaceholder" href="#grid-option-dragplaceholder" aria-hidden="true">#</a> <i>option</i>: dragPlaceholder</h3>

If you want a placeholder item to appear for the duration of an item's drag & drop procedure you can enable and configure it here. The placeholder animation duration is fetched from the grid's `layoutDuration` option and easing from the grid's `layoutEasing` option. Note that a special placeholder class is given to all drag placeholders and is customizable via [itemPlaceholderClass](#itemplaceholderclass-) option.

- Default value:
  ```javascript
  {
    enabled: false,
    createElement: null,
    onCreate: null,
    onRemove: null
  }
  ```
- Accepted types: object.

You can define the following properties:

- **enabled** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - Is the placeholder enabled?
- **createElement** &nbsp;&mdash;&nbsp; _function / null_
  - Default value: `null`.
  - If defined, this method will be used to create the DOM element that is used for the placeholder. By default a new `div` element is created when a placeholder is summoned.
- **onCreate** &nbsp;&mdash;&nbsp; _function / null_
  - Default value: `null`.
  - An optional callback that will be called after a placeholder is created for an item.
- **onRemove** &nbsp;&mdash;&nbsp; _function / null_
  - Default value: `null`.
  - An optional callback that will be called after a placeholder is removed from the grid.

**Examples**

```javascript
// This example showcases how to pool placeholder elements
// for better performance and memory efficiency.
var phPool = [];
var phElem = document.createElement('div');

var grid = new Muuri(elem, {
  dragEnabled: true,
  dragPlaceholder: {
    enabled: true,
    createElement(item) {
      return phPool.pop() || phElem.cloneNode();
    },
    onCreate(item, element) {
      // If you want to do something after the
      // placeholder is fully created, here's
      // the place to do it.
    },
    onRemove(item, element) {
      phPool.push(element);
    },
  },
});
```

<h3><a id="grid-option-dragautoscroll" href="#grid-option-dragautoscroll" aria-hidden="true">#</a> <i>option</i>: dragAutoScroll</h3>

If you want to trigger scrolling on any element during dragging you can enable and configure it here. By default this feature is disabled. When you use this feature it is _highly_ recommended that you create a `fixed` positioned element right under `document.body` and use that as the `dragContainer` for all the dragged items. If you don't do this and a dragged item's parent is auto-scrolled, the dragged item will potentially grow the scrolled element's scroll area to infinity unintentionally.

- Default value:
  ```javascript
  {
    targets: [],
    handle: null,
    threshold: 50,
    safeZone: 0.2,
    speed: Muuri.AutoScroller.smoothSpeed(1000, 2000, 2500),
    sortDuringScroll: true,
    smoothStop: false,
    onStart: null,
    onStop: null
  }
  ```
- Accepted types: object.

You can define the following properties:

- **targets** &nbsp;&mdash;&nbsp; _array / function_
  - Default value: `[]`.
  - Define the DOM elements that should be scrolled during drag. As long as this array is empty there will be no scrolling during drag. To keep it simple you can just provide an array of elements here, in which case Muuri attempts to scroll the elements both vertically and horizontally when possible. If you want more fine-grained control, e.g. scroll an element only on specific axis or prioritize some element over another (handy for cases when there are overlapping elements), you can provide an array of scroll targets (objects). Finally, you can also provide a function which receives the dragged `item` instance as it's argument and which should return an array of scroll targets (elements and/or objects). This way you can provide different configurations for different items.
  - **scrollTarget** &nbsp;&mdash;&nbsp; _object_
    - **element** &nbsp;&mdash;&nbsp; _element_ / _window_
      - The DOM element to scroll.
      - Required.
    - **axis** &nbsp;&mdash;&nbsp; _number_
      - Optional. Defaults to scrolling both axes: `Muuri.AutoScroller.AXIS_X | Muuri.AutoScroller.AXIS_Y`.
      - To scroll only x-axis: `Muuri.AutoScroller.AXIS_X`.
      - To scroll only y-axis: `Muuri.AutoScroller.AXIS_Y`.
    - **priority** &nbsp;&mdash;&nbsp; _number_
      - Default: `0`.
      - A dragged item can only scroll one element horizontally and one element vertically simultaneously. This is an artificial limit to fend off unnecesary complexity, and to avoid awkward situations. In the case where the dragged item overlaps multiple scrollable elements simultaneously and exceeds their scroll thresholds we pick the one that the dragged item overlaps most. However, that's not always the best choice. This is where `priority` comes in. Here you can manually tell Muuri which element to prefer over another in these scenarios. The element with highest priority _always_ wins the fight, in matches with equal priority we determine the winner by the amount of overlap.
      - Optional.
    - **threshold** &nbsp;&mdash;&nbsp; _number / null_
      - Default: `null`.
      - If defined (a number is provided), this value will override the default threshold for _this scroll target_. Otherwise the default threshold will be used.
      - Optional.
- **handle** &nbsp;&mdash;&nbsp; _function / null_
  - Default value: `null`.
  - This property defines size and position of the handle (the rectangle that is compared against the scroll element's threshold). By default (when `null`) the dragged element's dimensions and offsets are used. However, you can provide a function which should return an object containing the handle's client offsets in pixels (`left` and `top`) and dimensions in pixels (`width` and `height`). The function receives the following arguments:
    - **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - **itemClientX** &nbsp;&mdash;&nbsp; _number_
    - **itemClientY** &nbsp;&mdash;&nbsp; _number_
    - **itemWidth** &nbsp;&mdash;&nbsp; _number_
    - **itemHeight** &nbsp;&mdash;&nbsp; _number_
    - **pointerClientX** &nbsp;&mdash;&nbsp; _number_
    - **pointerClientY** &nbsp;&mdash;&nbsp; _number_
  - Tip: Use `Muuri.AutoScroller.pointerHandle(pointerSize)` utility method if you want to use the pointer (instead of the element) as the handle.
- **threshold** &nbsp;&mdash;&nbsp; _number_
  - Default value: `50`.
  - Defines the distance (in pixels) from the edge of the scrollable element when scrolling should start, in pixels. If this value is `0` the scrolling will start when the dragged element reaches the scrollable element's edge. Do note that Muuri dynamically adjusts the scroll element's _edge_ for the calculations (when needed).
- **safeZone** &nbsp;&mdash;&nbsp; _number_
  - Default value: `0.2`.
  - Defines the size of the minimum "safe zone" space, an area in the center of the scrollable element that will be guaranteed not trigger scrolling regardless of threshold size and the dragged item's size. This value is a percentage of the scrollable element's size (width and/or height depending on the scroll axes), and should be something between `0` and `1`. So in practice, if you set this to e.g `0.5` the safe zone would be 50% of the scrollable element's width and/or height.
- **speed** &nbsp;&mdash;&nbsp; _number / function_
  - Default value: `Muuri.AutoScroller.smoothSpeed(1000, 2000, 2500)`.
  - Defines the scrolling speed in pixels per second. You can provide either static speed with a `number` or dynamic speed with a `function`. The function is called before every scroll operation and should return the speed (`number`, pixels per second) for the next scroll operation. The function receives three arguments:
    - **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
      - The dragged `Muuri.Item` instance.
    - **scrollElement** &nbsp;&mdash;&nbsp; _element_ / _window_
      - The scrolled element.
    - **data** &nbsp;&mdash;&nbsp; _object_
      - **data.direction** &nbsp;&mdash;&nbsp; _number_
        - The direction of the scroll, one of the following: `Muuri.AutoScroller.LEFT`, `Muuri.AutoScroller.RIGHT`, `Muuri.AutoScroller.UP`, `Muuri.AutoScroller.DOWN`.
      - **data.threshold** &nbsp;&mdash;&nbsp; _number_
        - The current threshold in pixels.
      - **data.distance** &nbsp;&mdash;&nbsp; _number_
        - The handle rectangle's (as defined in `handle` option) current distance from the edge of the scroll element. E.g, if `direction` is `Muuri.AutoScroller.RIGHT` then distance is `scrollElement.getBoundingClientRect().right - handleRect.right`, and if `direction` is `Muuri.AutoScroller.LEFT` then distance is `handleRect.left - scrollElement.getBoundingClientRect().left`. Can be a negative value too.
      - **data.value** &nbsp;&mdash;&nbsp; _number_
        - The scroll element's current scroll value on the scrolled axis.
      - **data.maxValue** &nbsp;&mdash;&nbsp; _number_
        - The scroll element's maximum scroll value on the scrolled axis.
      - **data.duration** &nbsp;&mdash;&nbsp; _number_
        - How long (in milliseconds) this specific auto-scroll operation has lasted so far.
      - **data.speed** &nbsp;&mdash;&nbsp; _number_
        - The current speed as pixels per second.
      - **data.deltaTime** &nbsp;&mdash;&nbsp; _number_
        - `requestAnimationFrame`'s delta time (in milliseconds).
      - **data.isEnding** &nbsp;&mdash;&nbsp; _boolean_
        - Is the scroll process ending? When this is `true` it means that the associated drag item does not satisfy the threshold anymore. You should now start decreasing the speed towards `0` to allow the item to come to rest smoothly.
  - Pro tip: Use `Muuri.AutoScroller.smoothSpeed()` for dynamic speed that provides a smooth scrolling experience. When executed it creates and returns a speed function which you can directly provide for `speed` option. The method _requires_ three arguments (in the following order):
    - **maxSpeed** &nbsp;&mdash;&nbsp; _number_
      - The maximum speed (pixels per second) when the handle's distance to the scroll target's edge is `0` or less.
    - **acceleration** &nbsp;&mdash;&nbsp; _number_
      - How fast the the speed may accelerate (pixels per second).
    - **deceleration** &nbsp;&mdash;&nbsp; _number_
      - How fast the the speed may decelerate (pixels per second).
- **sortDuringScroll** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `true`.
  - Should the grid items be sorted during auto-scroll or not?
- **smoothStop** &nbsp;&mdash;&nbsp; _boolean_
  - Default value: `false`.
  - When a dragged item is moved out of the threshold area the scroll process is set to _ending_ state. However, it's up to you to decide if the actual scrolling motion is stopped gradually or instantly. By default, when this is `false`, scrolling will stop immediately. If you set this to `true` scrolling will continue until speed drops to `0`. When this option is `enabled` you _must_ handle decelerating the speed to `0` manually within `speed` function, so do not enable this option if you use a static speed value. The default `speed` function handles the deceleration automatically.
- **onStart** &nbsp;&mdash;&nbsp; _null / function_
  - Default value: `null`.
  - Optionally, you can provide a callback that will be called when an item starts auto-scrolling a scroll target. The callback function will receive the following arguments:
    - **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
      - The dragged `Muuri.Item` instance.
    - **scrollElement** &nbsp;&mdash;&nbsp; _element_ / _window_
      - The scrolled element.
    - **direction** &nbsp;&mdash;&nbsp; _number_
      - The direction of the scroll, one of the following: `Muuri.AutoScroller.LEFT`, `Muuri.AutoScroller.RIGHT`, `Muuri.AutoScroller.UP`, `Muuri.AutoScroller.DOWN`.
- **onStop** &nbsp;&mdash;&nbsp; _null / function_
  - Default value: `null`.
  - Optionally, you can provide a callback that will be called when an item stops auto-scrolling a scroll target. The callback function will receive the following arguments:
    - **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
      - The dragged `Muuri.Item` instance.
    - **scrollElement** &nbsp;&mdash;&nbsp; _element_ / _window_
      - The scrolled element.
    - **direction** &nbsp;&mdash;&nbsp; _number_
      - The direction of the scroll, one of the following: `Muuri.AutoScroller.LEFT`, `Muuri.AutoScroller.RIGHT`, `Muuri.AutoScroller.UP`, `Muuri.AutoScroller.DOWN`.

**Examples**

```javascript
// Create a fixed drag container for the dragged items, this is done with JS
// just for example's purposes.
var dragContainer = document.createElement('div');
dragContainer.style.position = 'fixed';
dragContainer.style.left = '0px';
dragContainer.style.top = '0px';
dragContainer.style.zIndex = 1000;
document.body.appendChild(dragContainer);

var grid = new Muuri(elem, {
  dragEnabled: true,
  dragContainer: dragContainer,
  dragAutoScroll: {
    targets: [
      // Scroll window on both x-axis and y-axis.
      { element: window, priority: 0 },
      // Scroll scrollElement (can be any scrollable element) on y-axis only,
      // and prefer it over window in conflict scenarios.
      { element: scrollElement, priority: 1, axis: Muuri.AutoScroller.AXIS_Y },
    ],
    // Let's use the dragged item element as the handle.
    handle: null,
    // Start auto-scroll when the distance from scroll target's edge to dragged
    // item is 40px or less.
    threshold: 40,
    // Make sure the inner 10% of the scroll target's area is always "safe zone"
    // which does not trigger auto-scroll.
    safeZone: 0.1,
    // Let's define smooth dynamic speed.
    // Max speed: 2000 pixels per second
    // Acceleration: 2700 pixels per second
    // Deceleration: 3200 pixels per second.
    speed: Muuri.AutoScroller.smoothSpeed(2000, 2700, 3200),
    // Let's not sort during scroll.
    sortDuringScroll: false,
    // Enable smooth stop.
    smoothStop: true,
    // Finally let's log some data when auto-scroll starts and stops.
    onStart: function (item, scrollElement, direction) {
      console.log('AUTOSCROLL STARTED', item, scrollElement, direction);
    },
    onStop: function (item, scrollElement, direction) {
      console.log('AUTOSCROLL STOPPED', item, scrollElement, direction);
    },
  },
});
```

<h3><a id="grid-option-containerclass" href="#grid-option-containerclass" aria-hidden="true">#</a> <i>option</i>: containerClass</h3>

Grid element's class name.

- Default value: `'muuri'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  containerClass: 'foo',
});
```

<h3><a id="grid-option-itemclass" href="#grid-option-itemclass" aria-hidden="true">#</a> <i>option</i>: itemClass</h3>

Item element's class name.

- Default value: `'muuri-item'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemClass: 'foo-item',
});
```

<h3><a id="grid-option-itemvisibleclass" href="#grid-option-itemvisibleclass" aria-hidden="true">#</a> <i>option</i>: itemVisibleClass</h3>

Visible item's class name.

- Default value: `'muuri-item-shown'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemVisibleClass: 'foo-item-shown',
});
```

<h3><a id="grid-option-itemhiddenclass" href="#grid-option-itemhiddenclass" aria-hidden="true">#</a> <i>option</i>: itemHiddenClass</h3>

Hidden item's class name.

- Default value: `'muuri-item-hidden'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemHiddenClass: 'foo-item-hidden',
});
```

<h3><a id="grid-option-itempositioningclass" href="#grid-option-itempositioningclass" aria-hidden="true">#</a> <i>option</i>: itemPositioningClass</h3>

This class name will be added to the item element for the duration of positioning.

- Default value: `'muuri-item-positioning'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemPositioningClass: 'foo-item-positioning',
});
```

<h3><a id="grid-option-itemdraggingclass" href="#grid-option-itemdraggingclass" aria-hidden="true">#</a> <i>option</i>: itemDraggingClass</h3>

This class name will be added to the item element for the duration of drag.

- Default value: `'muuri-item-dragging'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemDraggingClass: 'foo-item-dragging',
});
```

<h3><a id="grid-option-itemreleasingclass" href="#grid-option-itemreleasingclass" aria-hidden="true">#</a> <i>option</i>: itemReleasingClass</h3>

This class name will be added to the item element for the duration of release.

- Default value: `'muuri-item-releasing'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemReleasingClass: 'foo-item-releasing',
});
```

<h3><a id="grid-option-itemplaceholderclass" href="#grid-option-itemplaceholderclass" aria-hidden="true">#</a> <i>option</i>: itemPlaceholderClass</h3>

This class name will be added to the drag placeholder element.

- Default value: `'muuri-item-placeholder'`.
- Accepted types: string.

**Examples**

```javascript
var grid = new Muuri(elem, {
  itemPlaceholderClass: 'foo-item-placeholder',
});
```

<h3><a id="grid-methods" href="#grid-methods" aria-hidden="true">#</a> Grid methods</h3>

- [getElement](#grid-method-getelement)
- [getItem](#grid-method-getitem)
- [getItems](#grid-method-getitems)
- [refreshItems](#grid-method-refreshitems)
- [refreshSortData](#grid-method-refreshsortdata)
- [synchronize](#grid-method-synchronize)
- [layout](#grid-method-layout)
- [add](#grid-method-add)
- [remove](#grid-method-remove)
- [show](#grid-method-show)
- [hide](#grid-method-hide)
- [filter](#grid-method-filter)
- [sort](#grid-method-sort)
- [move](#grid-method-move)
- [send](#grid-method-send)
- [on](#grid-method-on)
- [off](#grid-method-off)
- [destroy](#grid-method-destroy)

<h3><a id="grid-method-getelement" href="#grid-method-getelement" aria-hidden="true">#</a> grid.getElement()</h3>

Get the grid element.

**Returns** &nbsp;&mdash;&nbsp; _element_

**Examples**

```javascript
var elem = grid.getElement();
```

<h3><a id="grid-method-getitem" href="#grid-method-getitem" aria-hidden="true">#</a> grid.getItem( target )</h3>

Get a single grid item by element or by index. Target can also be a `Muuri.Item` instance in which case the function returns the item if it exists within related `Muuri` instance. If nothing is found with the provided target, `null` is returned.

**Parameters**

- **target** &nbsp;&mdash;&nbsp; _element / number / Muuri.Item_

**Returns** &nbsp;&mdash;&nbsp; _Muuri.Item / null_

- Returns the queried item or `null` if no item is found.

**Examples**

```javascript
// Get first item in grid.
var itemA = grid.getItem(0);

// Get item by element reference.
var itemB = grid.getItem(someElement);
```

<h3><a id="grid-method-getitems" href="#grid-method-getitems" aria-hidden="true">#</a> grid.getItems( [targets] )</h3>

Get all items in the grid. Optionally you can provide specific targets (indices or elements).

**Parameters**

- **targets** &nbsp;&mdash;&nbsp; _array / element / Muuri.Item / number_
  - An array of item instances/elements/indices.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _array_

- Returns the queried items.

**Examples**

```javascript
// Get all items, both active and inactive.
var allItems = grid.getItems();

// Get all active items.
var activeItems = grid.getItems().filter(function (item) {
  return item.isActive();
});

// Get all positioning items.
var positioningItems = grid.getItems().filter(function (item) {
  return item.isPositioning();
});

// Get the first item.
var firstItem = grid.getItems(0)[0];

// Get specific items by their elements.
var items = grid.getItems([elemA, elemB]);
```

<h3><a id="grid-method-refreshitems" href="#grid-method-refreshitems" aria-hidden="true">#</a> grid.refreshItems( [items], [force] )</h3>

Update the cached dimensions of the instance's items. By default all the items are refreshed, but you can also provide an array of target items as the first argument if you want to refresh specific items. Note that all hidden items are not refreshed by default since their `display` property is `'none'` and their dimensions are therefore not readable from the DOM. However, if you do want to force update hidden item dimensions too you can provide `true` as the second argument, which makes the elements temporarily visible while their dimensions are being read.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - To target specific items provide an array of item instances. By default all items are targeted.
  - Optional.
- **force** &nbsp;&mdash;&nbsp; _boolean_
  - Set to `true` to read dimensions of hidden items too (and make them visible for the duration of the reading).
  - Default: `false`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Refresh dimensions of all items.
grid.refreshItems();

// Refresh dimensions of specific items.
grid.refreshItems([0, someElem, someItem]);

// Refresh dimensions of specific items and force read their
// dimensions even if they are hidden. Note that this has performance cost.
grid.refreshItems([0, someElem, someHiddenItem], true);
```

<h3><a id="grid-method-refreshsortdata" href="#grid-method-refreshsortdata" aria-hidden="true">#</a> grid.refreshSortData( [items] )</h3>

Refresh the sort data of the grid's items.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - To target specific items provide an array of item instances. By default all items are targeted.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Refresh the sort data for every item.
grid.refreshSortData();

// Refresh the sort data for specific items.
grid.refreshSortData([0, someElem, someItem]);
```

<h3><a id="grid-method-synchronize" href="#grid-method-synchronize" aria-hidden="true">#</a> grid.synchronize()</h3>

Synchronize the item elements in the DOM to match the order of the items in the grid. This comes handy if you need to keep the DOM structure matched with the order of the items. Note that if an item's element is not currently a child of the grid element (if it is dragged for example) it is ignored and left untouched. The reason why item elements are not kept in sync automatically is that there's rarely a need for that as they are absolutely positioned elements.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Let's say we have to move the first item in the grid as the last.
grid.move(0, -1);

// Now the order of the item elements in the DOM is not in sync anymore
// with the order of the items in the grid. We can sync the DOM with
// synchronize method.
grid.synchronize();
```

<h3><a id="grid-method-layout" href="#grid-method-layout" aria-hidden="true">#</a> grid.layout( [instant], [callback] )</h3>

Calculate item positions and move items to their calculated positions, unless they are already positioned correctly. The grid's height/width (depends on the layout algorithm) is also adjusted according to the position of the items.

**Parameters**

- **instant** &nbsp;&mdash;&nbsp; _boolean_
  - Should the items be positioned instantly without any possible animation?
  - Default value: `false`.
  - Optional.
- **callback** &nbsp;&mdash;&nbsp; _function_
  - A callback function that is called after every item in the layout has finished/aborted positioning.
  - Receives two arguments:
    - An array of all the items in the layout.
    - A boolean indicating if the layout has changed or not.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Layout items.
grid.layout();

// Layout items instantly (without animations).
grid.layout(true);

// Layout all items and define a callback that will be called
// after all items have been animated to their positions.
grid.layout(function (items, hasLayoutChanged) {
  // If hasLayoutChanged is `true` it means that there has been another layout
  // call before this layout had time to finish positioning all the items.
  console.log('layout done!');
});
```

<h3><a id="grid-method-add" href="#grid-method-add" aria-hidden="true">#</a> grid.add( elements, [options] )</h3>

Add new items by providing the elements you wish to add to the grid and optionally provide the index where you want the items to be inserted into. All elements that are not already children of the grid element will be automatically appended to the grid element. If an element has it's CSS display property set to none it will be marked as _inactive_ during the initiation process. As long as the item is _inactive_ it will not be part of the layout, but it will retain it's index. You can activate items at any point with `grid.show()` method. This method will automatically call `grid.layout()` if one or more of the added elements are visible. If only hidden items are added no layout will be called. All the new visible items are positioned without animation during their first layout.

**Parameters**

- **elements** &nbsp;&mdash;&nbsp; _array / element_
  - An array of DOM elements.
- **options.active** &nbsp;&mdash;&nbsp; _boolean / undefined_
  - By default (when this option is `undefined`) Muuri will automatically detect from each element's `display` style if the item should be active (visible) or inactive (hidden) on init. If the element's `display` style is `none` then the item will be inactive on init. However, you can also provide a boolean here to force the item to be active (`true`) or inactive (`false`) on init.
  - Default value: `undefined`.
  - Optional.
- **options.index** &nbsp;&mdash;&nbsp; _number_
  - The index where you want the items to be inserted in. A value of `-1` will insert the items to the end of the list while `0` will insert the items to the beginning. Note that the DOM elements are always just appended to the grid element regardless of the index value. You can use the `grid.synchronize()` method to arrange the DOM elements to the same order as the items.
  - Default value: `-1`.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _array_

- Returns the added items.

**Examples**

```javascript
// Add two new items to the end.
var newItemsA = grid.add([elemA, elemB]);

// Add two new items to the beginning.
var newItemsB = grid.add([elemA, elemB], { index: 0 });

// Skip the automatic layout.
var newItemsC = grid.add([elemA, elemB], { layout: false });
```

<h3><a id="grid-method-remove" href="#grid-method-remove" aria-hidden="true">#</a> grid.remove( items, [options] )</h3>

Remove items from the grid.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - An array of item instances.
- **options.removeElements** &nbsp;&mdash;&nbsp; _boolean_
  - Should the associated DOM element be removed from the DOM?
  - Default value: `false`.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _array_

- Returns the removed items. Note that the removal process also _destroys_ the items so they can not be reused e.g. in another grid.

**Examples**

```javascript
// Remove the first item, but keep the element in the DOM.
var removedItemsA = grid.remove(grid.getItems(0));

// Remove items and the associated elements.
var removedItemsB = grid.remove([itemA, itemB], { removeElements: true });

// Skip the layout.
var removedItemsC = grid.remove([itemA, itemB], { layout: false });
```

<h3><a id="grid-method-show" href="#grid-method-show" aria-hidden="true">#</a> grid.show( items, [options] )</h3>

Show the targeted items.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - An array of item instances.
- **options.instant** &nbsp;&mdash;&nbsp; _boolean_
  - Should the items be shown instantly without any possible animation?
  - Default value: `false`.
  - Optional.
- **options.syncWithLayout** &nbsp;&mdash;&nbsp; _boolean_
  - Should we wait for the next layout's calculations (which are potentially async) to finish before starting the show animations? By default this option is enabled so that the show animations are triggered in sync with the layout animations. If that's not needed set this to `false` and the show animations will begin immediately.
  - Default value: `true`.
  - Optional.
- **options.onFinish** &nbsp;&mdash;&nbsp; _function_
  - A callback function that is called after the items are shown.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Show items with animation (if any).
grid.show([itemA, itemB]);

// Show items instantly without animations.
grid.show([itemA, itemB], { instant: true });

// Show items with callback (and with animations if any).
grid.show([itemA, itemB], {
  onFinish: function (items) {
    console.log('items shown!');
  },
});
```

<h3><a id="grid-method-hide" href="#grid-method-hide" aria-hidden="true">#</a> grid.hide( items, [options] )</h3>

Hide the targeted items.

**Parameters**

- **items** &nbsp;&mdash;&nbsp; _array_
  - An array of item instances.
- **options.instant** &nbsp;&mdash;&nbsp; _boolean_
  - Should the items be hidden instantly without any possible animation?
  - Default value: `false`.
  - Optional.
- **options.syncWithLayout** &nbsp;&mdash;&nbsp; _boolean_
  - Should we wait for the next layout's calculations (which are potentially async) to finish before starting the hide animations? By default this option is enabled so that the hide animations are triggered in sync with the layout animations. If that's not needed set this to `false` and the hide animations will begin immediately.
  - Default value: `true`.
  - Optional.
- **options.onFinish** &nbsp;&mdash;&nbsp; _function_
  - A callback function that is called after the items are hidden.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Hide items with animation.
grid.hide([itemA, itemB]);

// Hide items instantly without animations.
grid.hide([itemA, itemB], { instant: true });

// Hide items and call the callback function after
// all items are hidden.
grid.hide([itemA, itemB], {
  onFinish: function (items) {
    console.log('items hidden!');
  },
});
```

<h3><a id="grid-method-filter" href="#grid-method-filter" aria-hidden="true">#</a> grid.filter( predicate, [options] )</h3>

Filter items. Expects at least one argument, a predicate, which should be either a function or a string. The predicate callback is executed for every item in the grid. If the return value of the predicate is truthy the item in question will be shown and otherwise hidden. The predicate callback receives the item instance as it's argument. If the predicate is a string it is considered to be a selector and it is checked against every item element in the grid with the native element.matches() method. All the matching items will be shown and others hidden.

**Parameters**

- **predicate** &nbsp;&mdash;&nbsp; _function / string_
  - A predicate callback or a selector.
- **options.instant** &nbsp;&mdash;&nbsp; _boolean_
  - Should the items be shown/hidden instantly without any possible animation?
  - Default value: `false`.
  - Optional.
- **options.syncWithLayout** &nbsp;&mdash;&nbsp; _boolean_
  - Should we wait for the next layout's calculations (which are potentially async) to finish before starting the visibility animations? By default this option is enabled so that the visibility animations are triggered in sync with the layout animations. If that's not needed set this to `false` and the visibility animations will begin immediately.
  - Default value: `true`.
  - Optional.
- **options.onFinish** &nbsp;&mdash;&nbsp; _function_
  - An optional callback function that is called after all the items are shown/hidden.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Show all items that have the attribute "data-foo".
grid.filter(function (item) {
  return item.getElement().hasAttribute('data-foo');
});

// Or simply just...
grid.filter('[data-foo]');

// Show all items that have a class foo.
grid.filter('.foo');
```

<h3><a id="grid-method-sort" href="#grid-method-sort" aria-hidden="true">#</a> grid.sort( comparer, [options] )</h3>

Sort items. There are three ways to sort the items. The first is simply by providing a function as the comparer which works almost identically to [native array sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). The only difference is that the sort is always stable. Alternatively you can sort by the sort data you have provided in the grid's options. Just provide the sort data key(s) as a string (separated by space) and the items will be sorted based on the provided sort data keys. Lastly you have the opportunity to provide a presorted array of items which will be used to sync the internal items array in the same order.

**Parameters**

- **comparer** &nbsp;&mdash;&nbsp; _array / function / string_
  - Provide a comparer function, sort data keys as a string (separated with space) or a pre-sorted array of items. When you provide a pre-sorted array of items you _must_ make sure that it contains _exactly_ the same item instances as exists currently in `grid._items` (retrievable safely via `grid.getItems()`), only change the order of items. Muuri does not validate the array of items you provide due to performance reasons.
- **options.descending** &nbsp;&mdash;&nbsp; _boolean_
  - By default the items are sorted in ascending order. If you want to sort them in descending order set this to `true`. Note that this option has no effect when you provide a pre-sorted array of items.
  - Default value: `false`.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Sort items by data-id attribute value (ascending).
grid.sort(function (itemA, itemB) {
  var aId = parseInt(itemA.getElement().getAttribute('data-id'));
  var bId = parseInt(itemB.getElement().getAttribute('data-id'));
  return aId - bId;
});

// Sort items with a presorted array of items.
grid.sort(grid.getItems().reverse());

// Sort items using the sort data keys (ascending).
grid.sort('foo bar');

// Sort items using the sort data keys (descending).
grid.sort('foo bar', { descending: true });

// Sort items using the sort data keys. Sort some keys
// ascending and some keys descending.
grid.sort('foo bar:desc');
```

<h3><a id="grid-method-move" href="#grid-method-move" aria-hidden="true">#</a> grid.move( item, position, [options] )</h3>

Move an item to another position in the grid.

**Parameters**

- **item** &nbsp;&mdash;&nbsp; _element / Muuri.Item / number_
  - Item instance, element or index.
- **position** &nbsp;&mdash;&nbsp; _element / Muuri.Item / number_
  - Item instance, element or index.
- **options.action** &nbsp;&mdash;&nbsp; _string_
  - Accepts the following values:
    - `'move'`: moves item in place of another item.
    - `'swap'`: swaps position of items.
  - Default value: `'move'`.
  - Optional.
- **options.layout** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Move elemA to the index of elemB.
grid.move(elemA, elemB);

// Move the first item in the grid as the last.
grid.move(0, -1);

// Swap positions of elemA and elemB.
grid.move(elemA, elemB, { action: 'swap' });

// Swap positions of the first and the last item.
grid.move(0, -1, { action: 'swap' });
```

<h3><a id="grid-method-send" href="#grid-method-send" aria-hidden="true">#</a> grid.send( item, grid, position, [options] )</h3>

Move an item into another grid.

**Parameters**

- **item** &nbsp;&mdash;&nbsp; _element / Muuri.Item / number_
  - The item that should be moved. You can define the item with an item instance, element or index.
- **grid** &nbsp;&mdash;&nbsp; _Muuri_
  - The grid where the item should be moved to.
- **position** &nbsp;&mdash;&nbsp; _element / Muuri.Item / number_
  - To which position should the item be placed to in the new grid? You can define the position with an item instance, element or index.
- **options.appendTo** &nbsp;&mdash;&nbsp; _element_
  - Which element the item element should be appended to for the duration of the layout animation?
  - Default value: `document.body`.
- **options.layoutSender** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called for the sending grid at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.
- **options.layoutReceiver** &nbsp;&mdash;&nbsp; _boolean / function / string_
  - By default `grid.layout()` is called for the receiving grid at the end of this method. With this argument you can control the layout call. You can disable the layout completely with `false`, or provide a callback function for the layout method, or provide the string `'instant'` to make the layout happen instantly without any animations.
  - Default value: `true`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Move the first item of gridA as the last item of gridB.
// The sent item will be appended to document.body.
gridA.send(0, gridB, -1);

// Move the first item of gridA as the last item of gridB.
// The sent item will be appended to someElem.
gridA.send(0, gridB, -1, {
  appendTo: someElem,
});

// Do something after the item has been sent and the layout
// processes have finished.
gridA.send(0, gridB, -1, {
  layoutSender: function (isAborted, items) {
    // Do your thing here...
  },
  layoutReceiver: function (isAborted, items) {
    // Do your other thing here...
  },
});
```

<h3><a id="grid-method-on" href="#grid-method-on" aria-hidden="true">#</a> grid.on( event, listener )</h3>

Bind an event listener.

**Parameters**

- **event** &nbsp;&mdash;&nbsp; _string_
- **listener** &nbsp;&mdash;&nbsp; _function_

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
grid.on('layoutEnd', function (items) {
  console.log(items);
});
```

<h3><a id="grid-method-off" href="#grid-method-off" aria-hidden="true">#</a> grid.off( event, listener )</h3>

Unbind an event listener.

**Parameters**

- **event** &nbsp;&mdash;&nbsp; _string_
- **listener** &nbsp;&mdash;&nbsp; _function_

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
function onLayoutEnd(items) {
  console.log(items);
}

// Start listening to some event.
grid.on('layoutEnd', onLayoutEnd);

/// ...sometime later -> unbind listener.
grid.off('layoutEnd', onLayoutEnd);
```

<h3><a id="grid-method-destroy" href="#grid-method-destroy" aria-hidden="true">#</a> grid.destroy( [removeElements] )</h3>

Destroy the grid.

**Parameters**

- **removeElements** &nbsp;&mdash;&nbsp; _boolean_
  - Should the item elements be removed or not?
  - Default value: `false`.
  - Optional.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

- Returns the grid instance.

**Examples**

```javascript
// Destroy the instance, but keep
// item element in the DOM.
grid.destroy();
```

```javascript
// Destroy the instance and remove
// the item elements from the DOM.
grid.destroy(true);
```

<h3><a id="grid-events" href="#grid-events" aria-hidden="true">#</a> Grid events</h3>

- [synchronize](#grid-event-synchronize)
- [layoutStart](#grid-event-layoutstart)
- [layoutEnd](#grid-event-layoutend)
- [layoutAbort](#grid-event-layoutabort)
- [add](#grid-event-add)
- [remove](#grid-event-remove)
- [showStart](#grid-event-showstart)
- [showEnd](#grid-event-showend)
- [hideStart](#grid-event-hidestart)
- [hideEnd](#grid-event-hideend)
- [filter](#grid-event-filter)
- [sort](#grid-event-sort)
- [move](#grid-event-move)
- [send](#grid-event-send)
- [beforeSend](#grid-event-beforesend)
- [receive](#grid-event-receive)
- [beforeReceive](#grid-event-beforereceive)
- [dragInit](#grid-event-draginit)
- [dragStart](#grid-event-dragstart)
- [dragMove](#grid-event-dragmove)
- [dragScroll](#grid-event-dragscroll)
- [dragEnd](#grid-event-dragend)
- [dragReleaseStart](#grid-event-dragreleasestart)
- [dragReleaseEnd](#grid-event-dragreleaseend)
- [destroy](#grid-event-destroy)

<h3><a id="grid-event-synchronize" href="#grid-event-synchronize" aria-hidden="true">#</a> <i>event</i>: synchronize</h3>

Triggered after item elements are synchronized via `grid.synchronize()`.

**Examples**

```javascript
grid.on('synchronize', function () {
  console.log('Synced!');
});
```

<h3><a id="grid-event-layoutstart" href="#grid-event-layoutstart" aria-hidden="true">#</a> <i>event</i>: layoutStart</h3>

Triggered when the the layout procedure begins. More specifically, this event is emitted right after new _layout_ has been generated, internal item positions updated and grid element's dimensions updated. After this event is emitted the items in the layout will be positioned to their new positions. So if you e.g. want to react to grid element dimension changes this is a good place to do that.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that are about to be positioned.
- **isInstant** &nbsp;&mdash;&nbsp; _boolean_
  - Was the layout called with `instant` flag or not.

**Examples**

```javascript
grid.on('layoutStart', function (items, isInstant) {
  console.log(items, isInstant);
});
```

<h3><a id="grid-event-layoutend" href="#grid-event-layoutend" aria-hidden="true">#</a> <i>event</i>: layoutEnd</h3>

Triggered after the layout procedure has finished, successfully. Note that if you abort a layout procedure by calling `grid.layout()` _before_ items have finished positioning, this event will not be emitted for the aborted layout procedure. In such a case `layoutAbort` will be emitted instead.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were positioned. Note that these items are always identical to what the _layoutStart_ event's callback receives as it's argument.

**Examples**

```javascript
grid.on('layoutEnd', function (items) {
  console.log(items);
  // For good measure you might want to filter out all the non-active items,
  // because it's techniclly possible that some of the items are
  // destroyed/hidden when we receive this event.
  var activeItems = items.filter(function (item) {
    return item.isActive();
  });
});
```

<h3><a id="grid-event-layoutabort" href="#grid-event-layoutabort" aria-hidden="true">#</a> <i>event</i>: layoutAbort</h3>

Triggered if you start a new layout process (`grid.layout()`) while the current layout process is still busy positioning items. Note that this event is not triggered if you start a new layout process while the layout is being computed and the items have not yet started positioning.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were attempted to be positioned. Note that these items are always identical to what the _layoutStart_ event's callback receives as it's argument.

**Examples**

```javascript
grid.on('layoutAbort', function (items) {
  console.log(items);
  // For good measure you might want to filter out all the non-active items,
  // because it's techniclly possible that some of the items are destroyed or
  // hidden when we receive this event.
  var activeItems = items.filter(function (item) {
    return item.isActive();
  });
});
```

<h3><a id="grid-event-add" href="#grid-event-add" aria-hidden="true">#</a> <i>event</i>: add</h3>

Triggered after `grid.add()` is called.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were successfully added.

**Examples**

```javascript
grid.on('add', function (items) {
  console.log(items);
});
```

<h3><a id="grid-event-remove" href="#grid-event-remove" aria-hidden="true">#</a> <i>event</i>: remove</h3>

Triggered after `grid.remove()` is called.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were successfully removed.
- **indices** &nbsp;&mdash;&nbsp; _array_
  - Indices of the items that were successfully removed.

**Examples**

```javascript
grid.on('remove', function (items, indices) {
  console.log(items, indices);
});
```

<h3><a id="grid-event-showstart" href="#grid-event-showstart" aria-hidden="true">#</a> <i>event</i>: showStart</h3>

Triggered after `grid.show()` is called, just before the items are shown.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that are about to be shown.

**Examples**

```javascript
grid.on('showStart', function (items) {
  console.log(items);
});
```

<h3><a id="grid-event-showend" href="#grid-event-showend" aria-hidden="true">#</a> <i>event</i>: showEnd</h3>

Triggered after `grid.show()` is called, after the items are shown.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were successfully shown without interruptions. If you, for example, call `grid.hide()` to some of the items that are currently being shown, those items will be omitted from this argument.

**Examples**

```javascript
grid.on('showEnd', function (items) {
  console.log(items);
});
```

<h3><a id="grid-event-hidestart" href="#grid-event-hidestart" aria-hidden="true">#</a> <i>event</i>: hideStart</h3>

Triggered after `grid.hide()` is called, just before the items are hidden.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that are about to be hidden.

**Examples**

```javascript
grid.on('hideStart', function (items) {
  console.log(items);
});
```

<h3><a id="grid-event-hideend" href="#grid-event-hideend" aria-hidden="true">#</a> <i>event</i>: hideEnd</h3>

Triggered after `grid.hide()` is called, after the items are hidden.

**Arguments**

- **items** &nbsp;&mdash;&nbsp; _array_
  - The items that were successfully hidden without interruptions. If you, for example, call `grid.show()` to some of the items that are currently being hidden, those items will be omitted from this argument.

**Examples**

```javascript
grid.on('hideEnd', function (items) {
  console.log(items);
});
```

<h3><a id="grid-event-filter" href="#grid-event-filter" aria-hidden="true">#</a> <i>event</i>: filter</h3>

Triggered after `grid.filter()` is called.

**Arguments**

- **shownItems** &nbsp;&mdash;&nbsp; _array_
  - The items that are shown.
- **hiddenItems** &nbsp;&mdash;&nbsp; _array_
  - The items that are hidden.

**Examples**

```javascript
grid.on('filter', function (shownItems, hiddenItems) {
  console.log(shownItems);
  console.log(hiddenItems);
});
```

<h3><a id="grid-event-sort" href="#grid-event-sort" aria-hidden="true">#</a> <i>event</i>: sort</h3>

Triggered after `grid.sort()` is called.

**Arguments**

- **currentOrder** &nbsp;&mdash;&nbsp; _array_
  - All items in their current order.
- **previousOrder** &nbsp;&mdash;&nbsp; _array_
  - All items in their previous order.

**Examples**

```javascript
grid.on('sort', function (currentOrder, previousOrder) {
  console.log(currentOrder);
  console.log(previousOrder);
});
```

<h3><a id="grid-event-move" href="#grid-event-move" aria-hidden="true">#</a> <i>event</i>: move</h3>

Triggered after `grid.move()` is called or when the grid is sorted during drag. Note that this is event not triggered when an item is dragged into another grid.

**Arguments**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was moved.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.
  - **data.action** &nbsp;&mdash;&nbsp; _string_
    - "move" or "swap".

**Examples**

```javascript
grid.on('move', function (data) {
  console.log(data);
});
```

<h3><a id="grid-event-send" href="#grid-event-send" aria-hidden="true">#</a> <i>event</i>: send</h3>

Triggered for the originating grid in the end of the _send process_ (after `grid.send()` is called or when an item is dragged into another grid). Note that this event is called _before_ the item's layout starts.

**Arguments**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was sent.
  - **data.fromGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent from.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent to.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.

**Examples**

```javascript
grid.on('send', function (data) {
  console.log(data);
});
```

<h3><a id="grid-event-beforesend" href="#grid-event-beforesend" aria-hidden="true">#</a> <i>event</i>: beforeSend</h3>

Triggered for the originating grid in the beginning of the _send process_ (after `grid.send()` is called or when an item is dragged into another grid). This event is highly useful in situations where you need to manipulate the sent item (freeze it's dimensions for example) before it is appended to it's temporary layout container as defined in [send method options](#gridsend-item-grid-position-options-).

**Arguments**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was sent.
  - **data.fromGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent from.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent to.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.

**Examples**

```javascript
grid.on('beforeSend', function (data) {
  console.log(data);
});
```

<h3><a id="grid-event-receive" href="#grid-event-receive" aria-hidden="true">#</a> <i>event</i>: receive</h3>

Triggered for the receiving grid in the end of the _send process_ (after `grid.send()` is called or when an item is dragged into another grid). Note that this event is called _before_ the item's layout starts.

**Arguments**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was sent.
  - **data.fromGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent from.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent to.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.

**Examples**

```javascript
grid.on('receive', function (data) {
  console.log(data);
});
```

<h3><a id="grid-event-beforereceive" href="#grid-event-beforereceive" aria-hidden="true">#</a> <i>event</i>: beforeReceive</h3>

Triggered for the receiving grid in the beginning of the _send process_ (after `grid.send()` is called or when an item is dragged into another grid). This event is highly useful in situations where you need to manipulate the received item (freeze it's dimensions for example) before it is appended to it's temporary layout container as defined in [send method options](#gridsend-item-grid-position-options-).

**Arguments**

- **data** &nbsp;&mdash;&nbsp; _object_
  - **data.item** &nbsp;&mdash;&nbsp; _Muuri.Item_
    - The item that was sent.
  - **data.fromGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent from.
  - **data.fromIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved from.
  - **data.toGrid** &nbsp;&mdash;&nbsp; _Muuri_
    - The grid the item was sent to.
  - **data.toIndex** &nbsp;&mdash;&nbsp; _number_
    - The index the item was moved to.

**Examples**

```javascript
grid.on('beforeReceive', function (data) {
  console.log(data);
});
```

<h3><a id="grid-event-draginit" href="#grid-event-draginit" aria-hidden="true">#</a> <i>event</i>: dragInit</h3>

Triggered in the beginning of the _drag start_ process when dragging of an item begins. This event is highly useful in situations where you need to manipulate the dragged item (freeze it's dimensions for example) before it is appended to the [dragContainer](#dragcontainer-).

**Arguments**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
grid.on('dragInit', function (item, event) {
  console.log(event);
  console.log(item);
});
```

<h3><a id="grid-event-dragstart" href="#grid-event-dragstart" aria-hidden="true">#</a> <i>event</i>: dragStart</h3>

Triggered in the end of the _drag start_ process when dragging of an item begins.

**Arguments**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
grid.on('dragStart', function (item, event) {
  console.log(event);
  console.log(item);
});
```

<h3><a id="grid-event-dragmove" href="#grid-event-dragmove" aria-hidden="true">#</a> <i>event</i>: dragMove</h3>

Triggered every time a dragged item is _moved_. Note that Muuri has an automatic throttling system which makes sure that this event is triggered at maximum once in an animation frame.

**Arguments**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
grid.on('dragMove', function (item, event) {
  console.log(event);
  console.log(item);
});
```

<h3><a id="grid-event-dragscroll" href="#grid-event-dragscroll" aria-hidden="true">#</a> <i>event</i>: dragScroll</h3>

Triggered when any of the scroll parents of a dragged item is scrolled.

**Arguments**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Scroll event data.

**Examples**

```javascript
grid.on('dragScroll', function (item, event) {
  console.log(event);
  console.log(item);
});
```

<h3><a id="grid-event-dragend" href="#grid-event-dragend" aria-hidden="true">#</a> <i>event</i>: dragEnd</h3>

Triggered when dragged item is released and the drag process ends.

**Arguments**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The dragged item.
- **event** &nbsp;&mdash;&nbsp; _object_
  - Muuri.Dragger event data.

**Examples**

```javascript
grid.on('dragEnd', function (item, event) {
  console.log(event);
  console.log(item);
});
```

<h3><a id="grid-event-dragreleasestart" href="#grid-event-dragreleasestart" aria-hidden="true">#</a> <i>event</i>: dragReleaseStart</h3>

Triggered when a dragged item is released (always after `dragEnd` event).

**Arguments**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The released item.

**Examples**

```javascript
grid.on('dragReleaseStart', function (item) {
  console.log(item);
});
```

<h3><a id="grid-event-dragreleaseend" href="#grid-event-dragreleaseend" aria-hidden="true">#</a> <i>event</i>: dragReleaseEnd</h3>

Triggered after released item has finished it's position animation.

**Arguments**

- **item** &nbsp;&mdash;&nbsp; _Muuri.Item_
  - The released item.

**Examples**

```javascript
grid.on('dragReleaseEnd', function (item) {
  console.log(item);
});
```

<h3><a id="grid-event-destroy" href="#grid-event-destroy" aria-hidden="true">#</a> <i>event</i>: destroy</h3>

Triggered after grid is destroyed.

**Examples**

```javascript
grid.on('destroy', function () {
  console.log('Muuri is no more...');
});
```

<h3><a id="item-methods" href="#item-methods" aria-hidden="true">#</a> Item methods</h3>

- [getGrid](#item-method-getgrid)
- [getElement](#item-method-getelement)
- [getWidth](#item-method-getwidth)
- [getHeight](#item-method-getheight)
- [getMargin](#item-method-getmargin)
- [getPosition](#item-method-getposition)
- [isActive](#item-method-isactive)
- [isVisible](#item-method-isvisible)
- [isShowing](#item-method-isshowing)
- [isHiding](#item-method-ishiding)
- [isPositioning](#item-method-ispositioning)
- [isDragging](#item-method-isdragging)
- [isReleasing](#item-method-isreleasing)
- [isDestroyed](#item-method-isdestroyed)

<h3><a id="item-method-getgrid" href="#item-method-getgrid" aria-hidden="true">#</a> item.getGrid()</h3>

Get the grid instance the item belongs to.

**Returns** &nbsp;&mdash;&nbsp; _Muuri_

**Examples**

```javascript
var grid = item.getGrid();
```

<h3><a id="item-method-getelement" href="#item-method-getelement" aria-hidden="true">#</a> item.getElement()</h3>

Get the item element.

**Returns** &nbsp;&mdash;&nbsp; _element_

**Examples**

```javascript
var elem = item.getElement();
```

<h3><a id="item-method-getwidth" href="#item-method-getwidth" aria-hidden="true">#</a> item.getWidth()</h3>

Get item element's cached width (in pixels). The returned value includes the element's paddings and borders.

**Returns** &nbsp;&mdash;&nbsp; _number_

**Examples**

```javascript
var width = item.getWidth();
```

<h3><a id="item-method-getheight" href="#item-method-getheight" aria-hidden="true">#</a> item.getHeight()</h3>

Get item element's cached height (in pixels). The returned value includes the element's paddings and borders.

**Returns** &nbsp;&mdash;&nbsp; _number_

**Examples**

```javascript
var height = item.getHeight();
```

<h3><a id="item-method-getmargin" href="#item-method-getmargin" aria-hidden="true">#</a> item.getMargin()</h3>

Get item element's cached margins (in pixels).

**Returns** &nbsp;&mdash;&nbsp; _object_

- **obj.left** &nbsp;&mdash;&nbsp; _number_
- **obj.right** &nbsp;&mdash;&nbsp; _number_
- **obj.top** &nbsp;&mdash;&nbsp; _number_
- **obj.bottom** &nbsp;&mdash;&nbsp; _number_

**Examples**

```javascript
var margin = item.getMargin();
```

<h3><a id="item-method-getposition" href="#item-method-getposition" aria-hidden="true">#</a> item.getPosition()</h3>

Get item element's cached position (in pixels, relative to the grid element).

**Returns** &nbsp;&mdash;&nbsp; _object_

- **obj.left** &nbsp;&mdash;&nbsp; _number_
- **obj.top** &nbsp;&mdash;&nbsp; _number_

**Examples**

```javascript
var position = item.getPosition();
```

<h3><a id="item-method-isactive" href="#item-method-isactive" aria-hidden="true">#</a> item.isActive()</h3>

Check if the item is currently _active_. Only active items are considered to be part of the layout.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
var isActive = item.isActive();
```

<h3><a id="item-method-isvisible" href="#item-method-isvisible" aria-hidden="true">#</a> item.isVisible()</h3>

Check if the item is currently _visible_.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
var isVisible = item.isVisible();
```

<h3><a id="item-method-isshowing" href="#item-method-isshowing" aria-hidden="true">#</a> item.isShowing()</h3>

Check if the item is currently animating to visible.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
var isShowing = item.isShowing();
```

<h3><a id="item-method-ishiding" href="#item-method-ishiding" aria-hidden="true">#</a> item.isHiding()</h3>

Check if the item is currently animating to hidden.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
var isHiding = item.isHiding();
```

<h3><a id="item-method-ispositioning" href="#item-method-ispositioning" aria-hidden="true">#</a> item.isPositioning()</h3>

Check if the item is currently being positioned.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
var isPositioning = item.isPositioning();
```

<h3><a id="item-method-isdragging" href="#item-method-isdragging" aria-hidden="true">#</a> item.isDragging()</h3>

Check if the item is currently being dragged.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
var isDragging = item.isDragging();
```

<h3><a id="item-method-isreleasing" href="#item-method-isreleasing" aria-hidden="true">#</a> item.isReleasing()</h3>

Check if the item is currently being released.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
var isReleasing = item.isReleasing();
```

<h3><a id="item-method-isdestroyed" href="#item-method-isdestroyed" aria-hidden="true">#</a> item.isDestroyed()</h3>

Check if the item is destroyed.

**Returns** &nbsp;&mdash;&nbsp; _boolean_

**Examples**

```javascript
var isDestroyed = item.isDestroyed();
```

<h2><a id="credits" href="#credits" aria-hidden="true">#</a> Credits</h2>

**Created and maintained by [Niklas Rämö](https://github.com/niklasramo).**

- This project owes much to David DeSandro's [Masonry](http://masonry.desandro.com/), [Packery](http://packery.metafizzy.co/) and [Isotope](https://isotope.metafizzy.co/) libraries. You should go ahead and check them out right now if you haven't yet. Thanks Dave!
- Jukka Jylänki's [survey](https://github.com/juj/RectangleBinPack) "A Thousand Ways to Pack the Bin - A Practical Approach to Two-Dimensional Rectangle Bin Packing" came in handy when building Muuri's layout algorithms. Thanks Jukka!
- Big thanks to the people behind [Web Animations polyfill](https://github.com/web-animations/web-animations-js) for making it possible to use Web Animations API reliably across browsers today.
- [Haltu Oy](http://www.haltu.fi/) was responsible for initiating this project in the first place and funded the initial development. Thanks Haltu!

<h2><a id="license" href="#license" aria-hidden="true">#</a> License</h2>

Copyright &copy; 2015 Haltu Oy. Licensed under **[the MIT license](LICENSE.md)**.
````

## File: rollup.banner.js
````javascript
const pkg = require('./package.json');

module.exports = `/**
* Muuri v${pkg.version}
* ${pkg.homepage}
* Copyright (c) 2015-present, Haltu Oy
* Released under the MIT license
* https://github.com/haltu/muuri/blob/master/LICENSE.md
* @license MIT
*
* Muuri Packer
* Copyright (c) 2016-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*
* Muuri Ticker / Muuri Emitter / Muuri Dragger
* Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*
* Muuri AutoScroller
* Copyright (c) 2019-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*/
`;
````

## File: rollup.config.js
````javascript
const pkg = require('./package.json');
const banner = require('./rollup.banner.js');

const stripBanner = {
  transform(code) {
    return {
      code: code.replace(/\/\*\*([\s\S]*?)\*\//, ''),
      map: { mappings: '' }
    };
  }
};

module.exports = {
  input: 'src/index.js',
  output: [
    {
      name: 'Muuri',
      file: pkg.main,
      format: 'umd',
      banner: banner
    },
    {
      name: 'Muuri',
      file: pkg.module,
      format: 'es',
      banner: banner
    }
  ],
  plugins: [stripBanner]
};
````
