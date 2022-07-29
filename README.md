[![npm version](https://badge.fury.io/js/nuxt-jsoneditor.svg)](https://badge.fury.io/js/nuxt-jsoneditor)
![NPM](https://img.shields.io/npm/l/nuxt-jsoneditor)
![npm](https://img.shields.io/npm/dm/nuxt-jsoneditor)

## 🇺🇦🇺🇦🇺🇦 [Stand With Ukraine](https://www.standwithukraine.how/) 🇺🇦🇺🇦🇺🇦

# nuxt-jsoneditor
#### Based on [vanilla-jsoneditor](https://www.npmjs.com/package/svelte-jsoneditor)

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
Read more in [vanilla-jsoneditor](https://www.npmjs.com/package/svelte-jsoneditor) properties
<br>

### 👉 Use in template

```vue
<template>
  <vue-jsoneditor
    height="400"
    :mode="mode"
    :queryLanguagesIds="queryLanguages"
    v-model:json="state.json"
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
    v-model:jsonString="state.jsonString"
  />
</template>

<script setup lang="ts">
import type {QueryLanguageId} from 'nuxt-jsoneditor'

const state = reactive({
  json: {
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  },

  jsonString: JSON.stringify({
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  })
});

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
| json (v-model)            | Object value                                                                                                                                                                                                                                      | <code>object</code>                                                                                   | { }                   |
| jsonString (v-model)      | String value                                                                                                                                                                                                                                      | <code>string</code>                                                                                   | undefined             |
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
    v-model:json="state.json"
  />

  <div>
    <button @click="onCollapse">collapse all</button>

    <button @click="onExpand">expand all</button>
  </div>
</template>

<script setup lang="ts">
const state = reactive({
  json: {
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  }
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


### 🟥🟧🟨🟩🟦🟪️ Styling
The editor can be styled using the available CSS variables. A full list with all variables can be found [here](https://github.com/josdejong/svelte-jsoneditor/blob/main/src/lib/themes/jse-theme-default.css)
```vue
<template>
  <vue-jsoneditor
    class="awesome-json-editor"
    height="400"
    v-model:json="state.json"
  />
</template>

<script setup lang="ts">
const state = reactive({
  json: {
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  }
});

</script>

<style>
.awesome-json-editor {
  /* define a custom theme color */
  --jse-theme-color: #383e42;
  --jse-theme-color-highlight: #687177;
}
</style>
```

<br>

## ❗❗❗️️️ Important
>If you have problems starting Nuxt after updating this package, try removing <code>**yarn.lock**</code> and <code>**node_modules**</code> folder, then reinstall dependencies <code>**yarn install**</code>. If that doesn't help, update the **Nuxt** and **@pinia/nuxt** packages


## 🔨 Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](playground) in development mode.

