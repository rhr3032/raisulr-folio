<script setup lang="ts">
import ManImage from "/images/background/aboutus-banner.webp";
</script>

<template>
  <SharedPageHero :image="ManImage" title="About us" :crumbs="[{ label: 'About' }]">
    <template #intro>
      We craft <em>innovative digital</em> designs that amplify brand identity and drive meaningful results
    </template>
  </SharedPageHero>
</template>
