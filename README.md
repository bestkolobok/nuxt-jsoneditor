[![npm version](https://badge.fury.io/js/nuxt-jsoneditor.svg)](https://badge.fury.io/js/nuxt-jsoneditor)
![NPM](https://img.shields.io/npm/l/nuxt-jsoneditor)
![npm](https://img.shields.io/npm/dm/nuxt-jsoneditor)

## 🇺🇦🇺🇦🇺🇦 [Stand With Ukraine](https://www.standwithukraine.how/) 🇺🇦🇺🇦🇺🇦

# nuxt-jsoneditor

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
        * Jsoneditor options, You can look at the detailed 
        * https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options?blank
        * 
        * */
    }
  }
})
```

### 👉 Use in template

```vue
<template>
  <json-editor 
    expand-on-init 
    height="400" 
    :options="{modes}" 
    v-model:json="json" 
    @error="onError" 
  />
</template>

// or

<template>
  <json-editor
    height="400" 
    :options="options" 
    v-model:jsonString="jsonString"
  />
</template>

<script setup lang="ts">
  import type {JSONEditorOptions} from 'nuxt-jsoneditor';
  
  const json = reactive({
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  });

  const jsonString = reactive(JSON.stringify({
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  }));

  const options: JSONEditorOptions = reactive({
    modes: ['tree', 'view', 'form', 'code', 'text', 'preview']
  });
  
  const onError = (error) => {
    //
  }
</script>
```
### ☑️ Props
| Name                  | Description                                                                                                                                                     | type            | default             |
| --------------        | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------:   | :----------------:  |
| options               | Local Jsoneditor options, You can look at the detailed  [configuration](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options?blank)  | Object          | { mode: 'tree' }    |
| json (v-model)        | Object value                                                                                                                                                    | Object          | { }                 |
| jsonString (v-model)  | String value                                                                                                                                                    | String          | undefined           |
| fullWidthButton       | Whether full screen switching is added                                                                                                                          | Boolean         | true                |
| height                | Default height                                                                                                                                                  | String / Number | undefined           |
| expandOnInit          | Expand all fields. Only applicable for mode 'tree', 'view', and 'form'                                                                                          | Boolean         | false               | 
<br>

### ☑️ Events
| Name  | Description      |
| ----- | --------------   |
| error | Wrong data error |
<br>

### ☑️ Use expose functions
- <b>$collapseAll</b> - collapse all nodes
- <b>$expandAll</b> - expand all nodes
- <b>$getNodesByRange</b> - get nodes from <i>start</i> to <i>end</i> range

```vue
<template>
  <json-editor
    height="400" 
    :options="options" 
    ref="editor"
    v-model:json="json"
  />

  <div>
    <button @click="onCollapse">collapse all</button>

    <button @click="onExpand">expand all</button>

    <button @click="onGetNodesByRange">get node by range</button>
  </div>
</template>

<script setup lang="ts">
  import type {
    JSONEditorOptions, 
    SerializableNode
  } from 'nuxt-jsoneditor';

  const json = reactive({
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  });

  const options: JSONEditorOptions = reactive({
    modes: ['tree', 'view', 'form', 'code', 'text', 'preview']
  });

  const editor = ref();

  const onCollapse = () => {
    editor.value.$collapseAll();
  };

  const onExpand = () => {
    editor.value.$expandAll();
  };

  const onGetNodesByRange = () => {
    const node: SerializableNode = editor.value.$getNodesByRange(
      {path: ['boolean']}, 
      {path: ['object']}
    );

    console.log('NODE: ', node);
  };
</script>
```
<br>

## 🔨 Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](playground) in development mode.

