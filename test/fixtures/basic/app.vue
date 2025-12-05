<template>
  <div>
    <h1>JsonEditor Test</h1>
    <JsonEditor v-model:json="jsonData" mode="tree" :height="400" />
  </div>
</template>

<script setup lang="ts">
const jsonData = ref({
  name: 'Test',
  value: 123,
  items: [1, 2, 3],
});
</script>
