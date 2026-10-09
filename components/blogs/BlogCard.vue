<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { BlogTypes } from "@/types/blog/BlogTypes";

withDefaults(
  defineProps<{
    blog: BlogTypes;
    featured?: boolean;
    headingLevel?: "h2" | "h3";
  }>(),
  { headingLevel: "h3" }
);
</script>

<template>
  <NuxtLink :to="`/blog/${slugify(blog.blog_title)}`" class="hover-card blog-card" :class="{ 'blog-card--featured': featured }">
    <div class="media blog-card__media">
      <img :src="blog.blog_image" alt="" loading="lazy" decoding="async" />
      <span class="media-arrow" aria-hidden="true">
        <Icon icon="material-symbols:arrow-outward" />
      </span>
    </div>
    <div class="blog-card__body">
      <p class="blog-card__date">
        <Icon icon="tabler:calendar" width="16" height="16" aria-hidden="true" />
        <time>{{ blog.blog_date }}</time>
      </p>
      <component :is="headingLevel" class="blog-card__title hover-card__title">{{ blog.blog_title }}</component>
      <span class="blog-card__more">
        Read article
        <Icon icon="material-symbols:arrow-outward" width="18" height="18" aria-hidden="true" />
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card__media {
  aspect-ratio: var(--blog-ratio, 4 / 3);
  height: var(--blog-height, auto);
}

.blog-card__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: clamp(1rem, 0.8rem + 0.6vw, 1.5rem);
}

.blog-card__date {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: var(--c-text-soft);
  font-size: 0.875rem;
  font-weight: 600;
}

.blog-card__title {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.blog-card--featured .blog-card__title {
  font-size: clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.blog-card__more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  color: var(--c-text);
  font-size: 0.9375rem;
  font-weight: 700;
}

.blog-card__more svg {
  transition: transform var(--dur) var(--ease-out);
}

.blog-card:hover .blog-card__more svg {
  transform: rotate(45deg);
}
</style>
