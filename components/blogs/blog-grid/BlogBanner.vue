<script setup lang="ts">
import ManImage from "/images/background/blog_banner.webp";
</script>

<template>
  <SharedPageHero :image="ManImage" title="Blog" :crumbs="[{ label: 'Blog' }]">
    <template #intro>
      Excited to <em>begin something amazing?</em> Get in touch—we'd love to connect with you!
    </template>
  </SharedPageHero>
</template>
