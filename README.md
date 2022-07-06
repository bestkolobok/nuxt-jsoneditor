## 🇺🇦🇺🇦🇺🇦 [Stand With Ukraine](https://www.standwithukraine.how/) 🇺🇦🇺🇦🇺🇦

# nuxt-jsoneditor

## ☑️ Installation

```bash
npm install nuxt-jsoneditor
```

## ✅ Using

### 👉 Add module

```javascript
import { defineNuxtConfig } from 'nuxt'
import JsonEditor from 'nuxt-jsoneditor';

export default defineNuxtConfig({
  modules: [
    JsonEditor
  ],
  jsoneditor: {
    componentName: 'JsonEditor',
    includeCss: true,
    options: {
        /**
        *
        * SET GLOBAL OPTIONS
        * Jsoneditor options, You can look at the detailed  https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options?blank
        * 
        * */
    }
  }
})
```

### 👉 Use in template

```html
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
    :options="{modes}" 
    v-model:jsonString="jsonString"
  />
</template>

<script setup>
  import {reactive} from 'vue';

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

  const modes = reactive(['tree', 'view', 'form', 'code', 'text', 'preview']);
  
  const onError = (error) => {
    //
  }
</script>
```
### ☑️ Props
| Name                  | Description                                                                                                                                                     | type            | default             |
| --------------        | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------:   | :----------------:  |
| options               | Jsoneditor options, You can look at the detailed  [configuration](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options?blank)  | Object          | { mode: 'tree' }    |
| json (v-model)        | Object value                                                                                                                                                    | Object          | { }                 |
| jsonString (v-model)  | String value                                                                                                                                                    | String          | undefined           |
| fullWidthButton       | Whether full screen switching is added                                                                                                                          | Boolean         | true                |
| height                | Default height                                                                                                                                                  | String / Number | undefined           |
| expandOnInit          | Expand all fields. Only applicable for mode 'tree', 'view', and 'form'                                                                                          | Boolean         | false               | 

### ☑️ Events
| Name  | Description      |
| ----- | --------------   |
| error | Wrong data error |

## 🔨 Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](playground) in development mode.

