<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const is404 = computed(() => props.error?.statusCode === 404);

useHead({ title: is404.value ? "Page Not Found" : "Something went wrong" });

// Leaving the error page must clear Nuxt's error state.
const handleHome = () => clearError();
</script>

<template>
  <v-app>
    <SharedNotFound
      :status-code="error?.statusCode || 500"
      :title="is404 ? 'Oops! Page Not Found' : 'Something went wrong'"
      :message="is404 ? undefined : 'An unexpected error occurred. Please try again in a moment.'"
      @home="handleHome"
    />
  </v-app>
</template>
