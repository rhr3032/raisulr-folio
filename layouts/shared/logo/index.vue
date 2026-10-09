<script setup lang="ts">
import LightLogo from "./LightLogo.vue";
import DarkLogo from "./DarkLogo.vue";

const { isDark } = useAppTheme();
</script>

<template>
  <div>
    <LightLogo v-if="isDark" />
    <DarkLogo v-else />
  </div>
</template>
