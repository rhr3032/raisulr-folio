<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { ServiceType } from "@/types/services/ServiceTypes";

defineProps<{
  service: ServiceType;
  index: number;
}>();
</script>

<template>
  <NuxtLink :to="`/services/${slugify(service.service_title)}`" class="hover-card service-card">
    <div class="service-card__top">
      <span class="service-card__icon" aria-hidden="true">
        <Icon :icon="service.service_icon || 'mdi:circle'" width="24" height="24" />
      </span>
      <span class="service-card__num" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</span>
    </div>

    <h2 class="service-card__title hover-card__title">{{ service.service_title }}</h2>
    <p v-if="service.service_subtitle" class="service-card__subtitle">{{ service.service_subtitle }}</p>

    <div class="media service-card__media">
      <img :src="service.service_image || '/images/projects/project1.webp'" alt="" loading="lazy" decoding="async" />
      <span class="media-arrow" aria-hidden="true">
        <Icon icon="material-symbols:arrow-outward" />
      </span>
    </div>

    <ul class="service-card__meta">
      <li v-if="service.category" class="tag">{{ service.category }}</li>
      <li v-if="service.duration" class="tag">
        <Icon icon="tabler:clock" width="14" height="14" aria-hidden="true" />
        {{ service.duration }}
      </li>
    </ul>
  </NuxtLink>
</template>

<style scoped>
.service-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: clamp(20px, 1rem + 1vw, 32px);
  border-radius: var(--radius-lg);
  border: 1px solid var(--c-border);
  background: var(--c-card);
  transition: border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out),
    transform var(--dur) var(--ease-out);
}

.service-card:hover {
  border-color: var(--c-border-strong);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.service-card:focus-visible {
  outline: 2px solid var(--c-focus);
  outline-offset: 4px;
}

.service-card:focus-visible .media {
  outline: none;
}

.service-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.service-card__icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.service-card__num {
  color: var(--c-text-faint);
  font-size: 0.875rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.service-card__title {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(1.375rem, 1.2rem + 0.8vw, 1.875rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
}

.service-card__subtitle {
  margin: 10px 0 0;
  color: var(--c-text-soft);
  line-height: 1.55;
}

.service-card__media {
  aspect-ratio: 16 / 10;
  margin-top: 24px;
  border-radius: var(--radius-md);
}

.service-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}
</style>
