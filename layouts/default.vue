<script setup lang="ts">
import Header from "@/layouts/header/index.vue";
import Footer from "@/layouts/footer/index.vue";
</script>

<template>
  <div class="site-shell">
    <a href="#main" class="skip-link">Skip to content</a>
    <Header />
    <main id="main" tabindex="-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
