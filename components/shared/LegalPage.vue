<script setup lang="ts">
import MainImage from "/images/background/privacy-policy.webp";

defineProps<{ title: string }>();

const route = useRoute();
const legalLinks = [
  { title: "Terms & Conditions", url: "/terms-conditions" },
  { title: "Privacy Policy", url: "/privacy-policy" },
];
</script>

<template>
  <SharedPageHero :image="MainImage" :title="title" :crumbs="[{ label: title }]" size="lg">
    <template #intro>
      Understand the <em>Rules &amp; Guidelines</em> Before Using Our Services
    </template>
  </SharedPageHero>

  <section class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <nav class="section-aside legal-nav" aria-label="Legal pages">
            <SharedSectionLabel title="Legal" />
            <ul>
              <li v-for="link in legalLinks" :key="link.url">
                <NuxtLink :to="link.url" :class="{ 'is-active': route.path === link.url }">{{ link.title }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </v-col>
        <v-col cols="12" lg="8">
          <div class="prose legal">
            <slot />
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.legal-nav {
  margin-bottom: 32px;
}

.legal-nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 1280px) {
  .legal-nav ul {
    flex-direction: column;
    align-items: flex-start;
  }
}

.legal-nav a {
  display: inline-flex;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--c-border-strong);
  color: var(--c-text-soft);
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--dur-fast) ease, color var(--dur-fast) ease, border-color var(--dur-fast) ease;
}

.legal-nav a:hover {
  color: var(--c-text);
  border-color: var(--c-text);
}

.legal-nav a.is-active {
  background: rgb(var(--v-theme-primary));
  border-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.legal {
  max-width: 72ch;
}

.legal :deep(h2) {
  padding-top: 2em;
  border-top: 1px solid var(--c-border);
}

.legal :deep(dl) {
  margin: 0;
}

.legal :deep(dt) {
  color: var(--c-text);
  font-weight: 700;
}

.legal :deep(dd) {
  margin: 0.25em 0 1.25em;
}
</style>
