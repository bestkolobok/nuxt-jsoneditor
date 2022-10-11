[![npm version](https://badge.fury.io/js/nuxt-jsoneditor.svg)](https://badge.fury.io/js/nuxt-jsoneditor)
![NPM](https://img.shields.io/npm/l/nuxt-jsoneditor)
![npm](https://img.shields.io/npm/dm/nuxt-jsoneditor)
<br>
[![npm](https://img.shields.io/github/stars/bestkolobok/nuxt-jsoneditor?style=social)](https://github.com/bestkolobok/nuxt-jsoneditor)


## 🇺🇦🇺🇦🇺🇦 [Stand With Ukraine](https://www.standwithukraine.how/) 🇺🇦🇺🇦🇺🇦

# nuxt-jsoneditor
#### Powered by [svelte-jsoneditor](https://www.npmjs.com/package/svelte-jsoneditor)

## 🕹 Demo

> you can 👀 a live demo [here](https://bestkolobok.github.io/vue3-jsoneditor/)

## ❗️️️ Compatibility with nuxt versions

- Nuxt 3 - full support
- Nuxt bridge - not tested
- Nuxt 2 - currently not support
<br>

## ☑️ Installation

```bash
npm install nuxt-jsoneditor
```
<br>

## ✅ Using

### 👉 Add module

```javascript
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: [
    'nuxt-jsoneditor'
  ],
  jsoneditor: {
    componentName: 'JsonEditor',
    includeCss: true,
    options: {
        /**
        *
        * SET GLOBAL OPTIONS
        * 
        * */
    }
  }
})
```

### 🌎 Global options
```typescript
interface JSONEditorOptions {
  readOnly?: boolean;
  indentation?: number | string;
  tabSize?: number;
  mode?: Mode;
  mainMenuBar?: boolean;
  navigationBar?: boolean;
  statusBar?: boolean;
  escapeControlCharacters?: boolean;
  escapeUnicodeCharacters?: boolean;
  validator?: Validator;
  queryLanguagesIds?: QueryLanguageId[];
  queryLanguageId?: QueryLanguageId;
  onRenderValue?: OnRenderValue;
  onClassName?: OnClassName;
  onRenderMenu?: OnRenderMenu;
  height?: string | number;
  fullWidthButton?: boolean;
  darkTheme?: boolean;
}

type Mode = "text" | "tree";

type QueryLanguageId = 'javascript' | 'lodash' | 'jmespath';
```
Read more in [svelte-jsoneditor](https://www.npmjs.com/package/svelte-jsoneditor) properties
<br>

### 👉 Use in template

```vue
<template>
  <vue-jsoneditor
    height="400"
    :mode="mode"
    :queryLanguagesIds="queryLanguages"
    v-model="jsonData"
    @error="onError"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

// or

<template>
  <vue-jsoneditor
    height="400"
    :mode="mode"
    v-model="jsonText"
  />
</template>

<script setup lang="ts">
import type {QueryLanguageId} from 'nuxt-jsoneditor'

const jsonData = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: {a: 'b', c: 'd'},
  string: 'Hello World',
});

const jsonText = ref('{"array": [1, 2, 3]}');

const mode = ref('tree');

const queryLanguages = ref<QueryLanguageId[]>(['javascript', 'lodash', 'jmespath']);

const onError = (error) => {
  //
}

const onFocus = () => {
  //
}

const onBlur = () => {
  //
}
</script>
```
<br>

### ☑️ Slots
| Slot          | Description                                                           |
| ----------    | ------------------                                                    |
| default       | Slot content displayed before the editor is rendered. Useful for SSR  | 

<br>

### ☑️ Props
| Name                      | Description                                                                                                                                                                                                                                       | type                                                                                                  | default               |
| :----------------------   | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                           | :------------:                                                                                        | :-----------------:   |
| modelValue (v-model)      | Json or string value                                                                                                                                                                                                                              | <code>object &vert; string</code>                                                                     | undefined             |
| value                     | Same as modelValue                                                                                                                                                                                                                                | <code>object &vert; string</code>                                                                     | undefined             |
| mode                      | Open the editor in 'tree' mode or 'text' mode (formerly: code mode).                                                                                                                                                                              | <code>string</code>                                                                                   | 'tree'                |
| mainMenuBar               | Show the main menu bar. Default value is true.                                                                                                                                                                                                    | <code>boolean</code>                                                                                  | true                  |
| navigationBar             | Show the navigation bar with, where you can see the selected path and navigate through your document from there.                                                                                                                                  | <code>boolean</code>                                                                                  | true                  |
| statusBar                 | Show a status bar at the bottom of the 'text' editor, showing information about the cursor location and selected contents.                                                                                                                        | <code>boolean</code>                                                                                  | true                  |
| readOnly                  | Open the editor in read-only mode: no changes can be made, non-relevant buttons are hidden from the menu, and the context menu is not enabled.                                                                                                    | <code>boolean</code>                                                                                  | false                 |
| indentation               | Number of spaces use for indentation when stringifying JSON, or a string to be used as indentation like '\t' to use a tab as indentation, or ' ' to use 4 spaces (which is equivalent to configuring indentation: 4). See also property tabSize.  | <code>number &vert; string</code>                                                                     | 4                     |
| tabSize                   | When indentation is configured as a tab character (indentation: '\t'), tabSize configures how large a tab character is rendered. Default value is 4. Only applicable to text mode.                                                                | <code>number</code>                                                                                   | 4                     |
| escapeControlCharacters   | When true, control characters like newline and tab are rendered as escaped characters \n and \t. Only applicable for 'tree' mode, in 'text' mode control characters are always escaped.                                                           | <code>boolean</code>                                                                                  | false                 |
| escapeUnicodeCharacters   | When true, unicode characters like ☎ and 😀 are rendered escaped like \u260e and \ud83d\ude00                                                                                                                                                      | <code>boolean</code>                                                                                  | false                 |
| validator                 | Validate the JSON document. Details in [vanilla-jsoneditor](https://www.npmjs.com/package/svelte-jsoneditor)                                                                                                                                      | <code>function (json: JSONData): ValidationError[]</code>                                             |                       |
| queryLanguagesIds         | Configure one or multiple query language that can be used in the Transform modal. The library comes with three languages: <code>javascript</code>, <code>lodash</code> or <code>jmespath</code>                                                   | <code>QueryLanguage[]</code>                                                                          | [javascript]          |
| queryLanguageId           | The id of the currently selected query language <code>javascript</code>, <code>lodash</code> or <code>jmespath</code>                                                                                                                             | <code>string</code>                                                                                   |                       |
| onClassName               | Add a custom class name to specific nodes, based on their path and/or value.                                                                                                                                                                      | <code>function (path: Path, value: any): string &vert; undefined</code>                               |                       |
| onRenderValue             | Details in [vanilla-jsoneditor](https://www.npmjs.com/package/svelte-jsoneditor)                                                                                                                                                                  | <code>function (props: RenderValueProps) : RenderValueComponentDescription[]</code>                   |                       |
| onRenderMenu              | Details in [vanilla-jsoneditor](https://www.npmjs.com/package/svelte-jsoneditor)                                                                                                                                                                  | <code>function (mode: 'tree' &vert; 'text', items: MenuItem[]) : MenuItem[] &vert; undefined</code>   |                       |
| fullWidthButton           | Whether full screen switching is added                                                                                                                                                                                                            | <code>boolean</code>                                                                                  | true                  |
| height                    | Default height                                                                                                                                                                                                                                    | <code>string &vert; number</code>                                                                     | undefined             |
| darkTheme                 | Switch to dark theme                                                                                                                                                                                                                              | <code>boolean</code>                                                                                  | false                 | 

<br>

### ☑️ Events
| Name                  | Description                                                                                                                                                                                                               | Arguments                                                                                 |
| -------------         | --------------------------------------------------------------------                                                                                                                                                      | ----------------------------------------------------------------------------              |
| change                | Which is invoked on every change made in the JSON document. The parameter patchResult is only available in tree mode, and not in text mode, since a change in arbitrary text cannot be expressed as a JSON Patch document.| (content: Content, previousContent: Content, patchResult: JSONPatchResult &vert; null)    |
| error                 | Event fired when an error occurs. Default implementation is to log an error in the console and show a simple alert message to the user.                                                                                   | (err: Error)                                                                              |
| change-mode           | Invoked when the mode is changed.                                                                                                                                                                                         | (mode: 'tree' &vert; 'text')                                                              |
| change-query-language | Invoked when the user changes the selected query language in the TransformModal via the configuration button top right.                                                                                                   | (queryLanguageId: string)                                                                 |
| focus                 | Fired when the editor got focus.                                                                                                                                                                                          | ()                                                                                        |
| blur                  | Fired when the editor lost focus.                                                                                                                                                                                         | ()                                                                                        |

<br>

### ☑️ Use expose functions
- <b>$collapseAll</b> - collapse all nodes
- <b>$expandAll</b> - expand all nodes
- <b>$expand</b> - Expand or collapse paths in the editor. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>expand()</code>
- <b>$get</b> - Get the current JSON document. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>get()</code>
- <b>$set</b> - Replace the current content. Will reset the state of the editor. See also method <code>update()</code>. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>set()</code>
- <b>$update</b> - Update the loaded content, keeping the state of the editor (like expanded objects). [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>update()</code>
- <b>$updateProps</b> - Update some or all of the properties [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>updateProps()</code>
- <b>$refresh</b> - Refresh rendering of the contents, for example after changing the font size. This is only available in text mode. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>refresh()</code>
- <b>$focus</b> - Give the editor focus. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>focus()</code>
- <b>$patch</b> - Apply a JSON patch document to update the contents of the JSON document. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>patch()</code>
- <b>$transform</b> - Programmatically trigger clicking of the transform button in the main menu, opening the transform model.  [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>transform()</code>
- <b>$scrollTo</b> - Scroll the editor vertically such that the specified path comes into view. The path will be expanded when needed. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>scrollTo()</code>
- <b>$findElement</b> - Find the DOM element of a given path. Returns null when not found. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>findElement()</code>
- <b>$acceptAutoRepair</b> - In tree mode, invalid JSON is automatically repaired when loaded. [See more](https://www.npmjs.com/package/svelte-jsoneditor) about <code>acceptAutoRepair()</code>

<br>


```vue
<template>
  <vue-jsoneditor
    height="400"
    ref="editor"
    v-model="jsonData"
  />

  <div>
    <button @click="onCollapse">collapse all</button>

    <button @click="onExpand">expand all</button>
  </div>
</template>

<script setup lang="ts">
const jsonData = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: {a: 'b', c: 'd'},
  string: 'Hello World',
});

const editor = ref();

const onCollapse = () => {
  editor.value.$collapseAll();
};

const onExpand = () => {
  editor.value.$expandAll();
};
</script>
```

<br>

### ⚡️ Types

```ts
import type JSONEditorOptions from "nuxt-jsoneditor/types";
import type { 
    Content, 
    JSONContent,
    JSONValue, 
    JSONEditor, 
    JSONNodeItem, 
    JSONNodeProp, 
    JSONPatchDocument, 
    JSONPatchResult, 
    MenuItem, 
    Mode, 
    OnClassName, 
    OnRenderMenu, 
    OnRenderValue, 
    Path, 
    QueryLanguage, 
    QueryLanguageId, 
    QueryLanguageOptions, 
    RenderValueComponentDescription, 
    RenderValueProps, 
    RenderValuePropsOptional, 
    SearchResultItem, 
    TextContent, 
    ValidationError, 
    Validator, 
    ValueNormalization 
} from "nuxt-jsoneditor/module";
```

<br>

### 🟥🟧🟨🟩🟦🟪️ Styling
The editor can be styled using the available CSS variables. A full list with all variables can be found [here](https://github.com/josdejong/svelte-jsoneditor/blob/main/src/lib/themes/jse-theme-default.css)
```vue
<template>
  <vue-jsoneditor
    class="awesome-json-editor"
    height="400"
    v-model="jsonData"
  />
</template>

<script setup lang="ts">
const jsonData = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: {a: 'b', c: 'd'},
  string: 'Hello World',
});

</script>

<style>
.awesome-json-editor {
  /* define a custom theme color */
  /* over all fonts, sizes, and colors */
  --jse-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
  Cantarell, 'Helvetica Neue', sans-serif;
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  --jse-font-family-mono: consolas, menlo, monaco, 'Ubuntu Mono', 'source-code-pro', monospace;
  --jse-font-size-mono: 14px;
  --jse-font-size: 16px;
  --jse-font-size-text-mode-search: 80%;
  --jse-line-height: calc(1em + 4px);
  --jse-indent-size: calc(1em + 4px);
  --jse-color-picker-button-size: 1em;
  --jse-padding: 10px;
  --jse-theme-color: #3883fa;
  --jse-theme-color-highlight: #5f9dff;
  --jse-background-color: #fff;
  --jse-text-color: #4d4d4d;
  --jse-text-color-inverse: #fff;
  --jse-error-color: #ee5341;
  --jse-warning-color: #fdc539;

  /* main, menu, modal */
  --jse-main-border: 1px solid #d7d7d7;
  --jse-menu-color: var(--jse-text-color-inverse);
  --jse-menu-button-size: 32px;
  --jse-modal-background: #f5f5f5;
  --jse-modal-overlay-background: rgba(0, 0, 0, 0.3);
  --jse-modal-code-background: rgba(0, 0, 0, 0.05);

  /* panels: navigation bar, gutter, search box */
  --jse-panel-background: #ebebeb;
  --jse-panel-color: var(--jse-text-color);
  --jse-panel-color-readonly: #b2b2b2;
  --jse-panel-border: var(--jse-main-border);
  --jse-panel-button-color: inherit;
  --jse-panel-button-background: transparent;
  --jse-panel-button-color-highlight: var(--jse-text-color);
  --jse-panel-button-background-highlight: #e0e0e0;

  /* navigation-bar */
  --jse-navigation-bar-color: #656565;
  --jse-navigation-bar-background: var(--jse-background-color);
  --jse-navigation-bar-background-highlight: #e5e5e5;
  --jse-navigation-bar-dropdown-color: #656565;

  /* context menu */
  --jse-context-menu-background: #656565;
  --jse-context-menu-background-highlight: #7a7a7a;
  --jse-context-menu-color: var(--jse-text-color-inverse);
  --jse-context-menu-color-disabled: #9d9d9d;
  --jse-context-menu-separator-color: #7a7a7a;
  --jse-context-menu-button-background: var(--jse-context-menu-background);
  --jse-context-menu-button-background-highlight: var(--jse-context-menu-background-highlight);
  --jse-context-menu-button-color: var(--jse-context-menu-color);
  --jse-context-menu-button-size: calc(1em + 4px);
  --jse-context-menu-tip-background: rgba(255, 255, 255, 0.2);
  --jse-context-menu-tip-color: inherit;

  /* contents: json key and values */
  --jse-key-color: #1a1a1a;
  --jse-value-color: #1a1a1a;
  --jse-value-color-number: #ee422e;
  --jse-value-color-boolean: #ff8c00;
  --jse-value-color-null: #004ed0;
  --jse-value-color-string: #008000;
  --jse-value-color-url: #008000;
  --jse-delimiter-color: rgba(0, 0, 0, 0.38);
  --jse-edit-outline: 2px solid #656565;

  /* contents: selected or hovered */
  --jse-hover-background-color: rgba(0, 0, 0, 0.06);
  --jse-selection-background-color: #d3d3d3;
  --jse-selection-background-light-color: #e8e8e8;

  /* contents: section of collapsed items in an array */
  --jse-collapsed-items-background-color: #f5f5f5;
  --jse-collapsed-items-selected-background-color: #c2c2c2;
  --jse-collapsed-items-link-color: rgba(0, 0, 0, 0.38);
  --jse-collapsed-items-link-color-highlight: #ee5341;

  /* contents: highlighting of search matches */
  --jse-search-match-color: #ffe665;
  --jse-search-match-outline: 1px solid #ffd700;
  --jse-search-match-active-color: #ffd700;
  --jse-search-match-active-outline: 1px solid #e1be00;

  /* contents: inline tags inside the JSON document */
  --jse-tag-background: rgba(0, 0, 0, 0.2);
  --jse-tag-color: var(--jse-text-color-inverse);

  /* controls in modals: inputs, buttons, and `a` */
  --jse-controls-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.24);
  --jse-input-background: var(--jse-background-color);
  --jse-input-background-readonly: transparent;
  --jse-input-border: 1px solid #d8dbdf;
  --jse-input-border-focus: 1px solid var(--jse-theme-color);
  --jse-input-radius: 3px;
  --jse-button-background: #e0e0e0;
  --jse-button-background-highlight: #e7e7e7;
  --jse-button-color: var(--jse-text-color);
  --jse-button-primary-background: var(--jse-theme-color);
  --jse-button-primary-background-highlight: var(--jse-theme-color-highlight);
  --jse-button-primary-background-disabled: #9d9d9d;
  --jse-button-primary-color: var(--jse-text-color-inverse);
  --jse-a-color: #156fc5;
  --jse-a-color-highlight: #0f508d;

  /* messages */
  --jse-message-error-background: var(--jse-error-color);
  --jse-message-error-color: var(--jse-text-color-inverse);
  --jse-message-warning-background: #ffde5c;
  --jse-message-warning-color: var(--jse-text-color);
  --jse-message-success-background: #9ac45d;
  --jse-message-success-color: var(--jse-text-color-inverse);
  --jse-message-info-background: #9d9d9d;
  --jse-message-info-color: var(--jse-text-color-inverse);
  --jse-message-action-background: rgba(255, 255, 255, 0.2);
  --jse-message-action-background-highlight: rgba(255, 255, 255, 0.3);

  /* svelte-select */
  --itemIsActiveBG: #3883fa;
  --border: 1px solid #d8dbdf;
  --borderRadius: 3px;
  --background: #fff;

  /* color picker */
  --jse-color-picker-background: var(--jse-panel-background);
  --jse-color-picker-border-box-shadow: #cbcbcb 0 0 0 1px;
}
</style>
```

<br>

## ❗❗❗️️️ Important
>If you have problems starting Nuxt after updating this package, try removing <code>**yarn.lock**</code> and <code>**node_modules**</code> folder, then reinstall dependencies <code>**yarn install**</code>.


## 🔨 Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](playground) in development mode.

