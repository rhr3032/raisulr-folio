<script setup lang="ts">
import BannerImage from "/images/background/projects-banner.webp";
</script>

<template>
  <SharedPageHero :image="BannerImage" title="Services" :crumbs="[{ label: 'Services' }]">
    <template #intro>
      From design to development, <em>branding to marketing</em>—we offer comprehensive digital solutions tailored to
      elevate your business.
    </template>
  </SharedPageHero>
</template>
