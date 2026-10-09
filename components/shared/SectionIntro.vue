<script setup lang="ts">
// Shared editorial header used by most sections:
//   [01 —— LABEL]   |  Heading
//                   |  Supporting copy
withDefaults(
  defineProps<{
    number?: string;
    label: string;
    title: string;
    subtitle?: string;
    as?: "h1" | "h2";
  }>(),
  { as: "h2" }
);
</script>

<template>
  <v-row class="section-intro">
    <v-col cols="12" lg="4" class="pb-2 pb-lg-3">
      <SharedSectionLabel :number="number" :title="label" class="pt-lg-3" />
    </v-col>
    <v-col cols="12" lg="8">
      <SharedSectionHeading v-reveal :as="as" :title="title" :subtitle="subtitle">
        <slot />
      </SharedSectionHeading>
    </v-col>
  </v-row>
</template>
