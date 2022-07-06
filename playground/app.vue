<template>
  <div>
    <vue-json-editor expand-on-init height="400" :options="{modes}" v-model:json="json" />
  </div>
</template>

<script setup>
const json = reactive({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  object: {a: 'b', c: 'd'},
  string: 'Hello World',
});

const modes = reactive(['tree', 'view', 'form', 'code', 'text', 'preview']);
</script>
