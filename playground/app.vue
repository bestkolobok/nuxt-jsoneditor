<template>
  <div class="module-playground">
    <vue-json-editor height="400" v-model:json="state.json" />
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
  },
});
</script>

<style>
.module-playground {
  padding: 80px;
}
</style>
