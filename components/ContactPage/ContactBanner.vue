<script setup lang="ts">
import ManImage from "/images/background/contact-banner.webp";
</script>

<template>
  <SharedPageHero :image="ManImage" title="Contact" :crumbs="[{ label: 'Contact' }]">
    <template #intro>
      Ready to <em>start something</em> great? Reach out we’d love to hear from you.
    </template>
  </SharedPageHero>
</template>
