<script setup lang="ts">
import ManImage from "/images/background/projects-banner.webp";
</script>

<template>
  <SharedPageHero :image="ManImage" title="Projects" :crumbs="[{ label: 'Projects' }]">
    <template #intro>
      A <em>showcase of creativity</em>, strategy, and results explore the projects that define us.
    </template>
  </SharedPageHero>
</template>
