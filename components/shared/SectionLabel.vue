<script setup lang="ts">
defineProps<{
  number?: string;
  title: string;
}>();
</script>

<template>
  <div class="section-label">
    <span v-if="number" class="section-label__num" aria-hidden="true">{{ number }}</span>
    <span class="section-label__line" aria-hidden="true"></span>
    <span class="section-label__text">{{ title }}</span>
  </div>
</template>
