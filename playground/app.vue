<template>
  <div class="module-playground">
    <vue-json-editor height="400" v-model="jsonData" />
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
</script>

<style>
.module-playground {
  padding: 80px;
}
</style>
