<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    subtitle?: string;
    as?: "h1" | "h2" | "h3";
  }>(),
  { as: "h2" }
);
</script>

<template>
  <div class="section-heading">
    <component :is="as" class="section-heading__title text-h2">{{ title }}</component>
    <p v-if="subtitle" class="section-heading__subtitle text-subtitle-1">{{ subtitle }}</p>
    <slot />
  </div>
</template>
