<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    label?: string;
    href?: string;
    ariaLabel?: string;
  }>(),
  {
    label: "",
    href: "#page-content",
    ariaLabel: "Scroll to content",
  }
);
</script>

<template>
  <a :href="href" class="big-badge" :aria-label="label ? undefined : ariaLabel">
    <span v-if="label" class="big-badge__label">{{ label }}</span>
    <span class="big-badge__icon" aria-hidden="true">
      <Icon icon="material-symbols:arrow-cool-down" />
    </span>
  </a>
</template>

<style scoped>
.big-badge {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  flex: none;
  height: 60px;
  padding: 4px 4px 4px 28px;
  border-radius: var(--radius-pill);
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9375rem;
  border: 1px solid transparent;
  transition: background-color var(--dur) var(--ease-out), color var(--dur) var(--ease-out),
    border-color var(--dur) var(--ease-out);
}

.big-badge:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.big-badge:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

.big-badge__icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #ffffff;
  color: rgb(var(--v-theme-secondary));
  transition: transform 0.45s var(--ease-out);
}

.big-badge__icon svg {
  width: 22px;
  height: 22px;
}

.big-badge:hover .big-badge__icon {
  transform: translateY(3px);
}
</style>
