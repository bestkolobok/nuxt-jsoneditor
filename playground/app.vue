<template>
  <div>
    <vue-json-editor expand-on-init height="400" :options="options" v-model:json="json" />
  </div>
</template>

<script setup lang="ts">
import type {JSONEditorOptions} from '../src/module';

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
</script>
