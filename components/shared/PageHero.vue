<script setup lang="ts">
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";

interface Crumb {
  label: string;
  to?: string;
}

withDefaults(
  defineProps<{
    image?: string;
    title?: string;
    /** "xl" for short display titles, "lg" for longer titles (articles, projects) */
    size?: "xl" | "lg";
    crumbs?: Crumb[];
    badgeLabel?: string;
    showBadge?: boolean;
  }>(),
  { size: "xl", crumbs: () => [], badgeLabel: "Explore", showBadge: true }
);
</script>

<template>
  <section class="page-hero on-ink">
    <img
      v-if="image"
      :src="image"
      alt=""
      class="page-hero__img"
      fetchpriority="high"
      decoding="async"
    />
    <div class="page-hero__shade" aria-hidden="true"></div>

    <div class="container-lg page-hero__inner">
      <nav v-if="crumbs.length" class="page-hero__crumbs" aria-label="Breadcrumb">
        <ol>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li v-for="(crumb, i) in crumbs" :key="i">
            <NuxtLink v-if="crumb.to && i < crumbs.length - 1" :to="crumb.to">{{ crumb.label }}</NuxtLink>
            <span v-else aria-current="page">{{ crumb.label }}</span>
          </li>
        </ol>
      </nav>

      <div class="page-hero__content">
        <div v-if="$slots.intro" class="page-hero__intro">
          <img :src="AnimatedIcon" alt="" aria-hidden="true" width="40" height="42" class="icon-rotate" />
          <p class="text-subtitle-1 mb-0">
            <slot name="intro" />
          </p>
        </div>

        <div class="page-hero__bottom">
          <h1 class="page-hero__title" :class="`page-hero__title--${size}`">
            <slot name="title">{{ title }}</slot>
          </h1>
          <div class="page-hero__aside">
            <slot name="aside" />
            <SharedBigBadge v-if="showBadge" :label="badgeLabel" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="page-content" class="page-hero__anchor"></div>
</template>

<style scoped>
.page-hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: clamp(480px, 76svh, 760px);
  padding-top: calc(var(--header-h) + 24px);
  overflow: hidden;
  background: rgb(var(--v-theme-secondary));
  color: #ffffff;
}

.page-hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Legibility: darker at top (header) and bottom (title), image breathes in the middle */
.page-hero__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(31, 42, 46, 0.6) 0%, rgba(31, 42, 46, 0.12) 32%, rgba(31, 42, 46, 0.25) 55%, rgba(31, 42, 46, 0.86) 100%);
}

.page-hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  align-self: stretch;
  padding-bottom: clamp(2rem, 1.25rem + 3vw, 4rem);
}

.page-hero__crumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.875rem;
  font-weight: 600;
}

.page-hero__crumbs li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.92);
}

.page-hero__crumbs li + li::before {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
}

.page-hero__crumbs a {
  color: rgba(255, 255, 255, 0.74);
  text-decoration: none;
  transition: color var(--dur-fast) ease;
}

.page-hero__crumbs a:hover {
  color: #ffffff;
}

.page-hero__content {
  margin-top: auto;
}

.page-hero__intro {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  max-width: 520px;
  margin-bottom: clamp(1.25rem, 1rem + 1vw, 2rem);
  color: rgba(255, 255, 255, 0.82);
}

.page-hero__intro img {
  flex: none;
  margin-top: 2px;
}

.page-hero__intro :deep(em) {
  font-style: normal;
  color: rgb(var(--v-theme-primary));
}

.page-hero__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px 40px;
}

.page-hero__title {
  margin: 0;
  color: #ffffff;
  font-weight: 700;
  min-width: 0;
  overflow-wrap: anywhere;
}

.page-hero__title--xl {
  font-size: clamp(3.25rem, 1.6rem + 7.6vw, 9rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.page-hero__title--lg {
  max-width: 18ch;
  font-size: clamp(2.25rem, 1.4rem + 3.8vw, 5.25rem);
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.page-hero__aside {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding-bottom: 6px;
}

.page-hero__anchor {
  scroll-margin-top: var(--header-h);
}
</style>
