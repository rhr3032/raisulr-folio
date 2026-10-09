<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { ProjectsTypes } from "@/types/projects/ProjectsType";

withDefaults(
  defineProps<{
    project: ProjectsTypes;
    index?: number;
    headingLevel?: "h2" | "h3";
  }>(),
  { headingLevel: "h3" }
);
</script>

<template>
  <NuxtLink :to="`/projects/${slugify(project.project_title)}`" class="hover-card project-card">
    <div class="media project-card__media">
      <img :src="project.project_image" alt="" loading="lazy" decoding="async" />
      <span class="media-arrow" aria-hidden="true">
        <Icon icon="material-symbols:arrow-outward" />
      </span>
      <span v-if="project.industry" class="tag tag--glass project-card__industry">{{ project.industry }}</span>
    </div>

    <div class="project-card__body">
      <div class="project-card__head">
        <component :is="headingLevel" class="project-card__title hover-card__title">
          {{ project.project_title }}
        </component>
        <span v-if="index !== undefined" class="project-card__index" aria-hidden="true">
          {{ String(index + 1).padStart(2, "0") }}
        </span>
      </div>
      <ul class="project-card__tags">
        <li v-if="project.tag1" class="tag">{{ project.tag1 }}</li>
        <li v-if="project.tag2" class="tag">{{ project.tag2 }}</li>
      </ul>
    </div>
  </NuxtLink>
</template>

<style scoped>
.project-card__media {
  aspect-ratio: var(--card-ratio, 4 / 3);
  height: var(--card-height, auto);
}

.project-card__industry {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 2;
}

.project-card__body {
  padding-top: clamp(1rem, 0.8rem + 0.6vw, 1.5rem);
}

.project-card__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}

.project-card__title {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(1.375rem, 1.15rem + 0.9vw, 2rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
}

.project-card__index {
  color: var(--c-text-faint);
  font-size: 0.875rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}
</style>
