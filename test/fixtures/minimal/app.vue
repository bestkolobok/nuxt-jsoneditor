<template>
  <div>
    <h1>Minimal Test</h1>
    <JsonEditor v-model:json="data" />
  </div>
</template>

<script setup lang="ts">
const data = ref({test: true});
</script>
