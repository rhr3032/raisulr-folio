<script setup lang="ts">
import { watch } from "vue";

const { isDark } = useAppTheme();

useHead({
  titleTemplate: (title?: string) =>
    title && title !== "Raisul R. | Portfolio" ? `${title} — Raisul R.` : "Raisul R. | Portfolio",
});

// Keep <html> in sync with the Vuetify theme (SCSS tokens key off `html.dark`).
watch(
  isDark,
  (dark) => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#1F2A2E" : "#ffffff");
  },
  { immediate: true }
);
</script>

<template>
  <NuxtLoadingIndicator color="#C1FF72" :height="3" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
