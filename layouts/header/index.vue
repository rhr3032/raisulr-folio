<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { Icon } from "@iconify/vue";
import DarkLogo from "/images/logos/DarkLogo.svg";
import WhiteLogo from "/images/logos/WhiteLogo.svg";
import MobileMenu from "./MobileMenu.vue";

const route = useRoute();
const { isDark, toggleTheme } = useAppTheme();

const scrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  }
);

// Over hero imagery the header is transparent with white ink; once the page
// scrolls it becomes a solid, theme-aware bar.
const logo = computed(() => (scrolled.value && !isDark.value ? DarkLogo : WhiteLogo));
</script>

<template>
  <header class="site-header" :class="{ 'is-solid': scrolled }">
    <div class="container-lg site-header__inner">
      <NuxtLink to="/" class="site-header__brand" aria-label="Raisul R. — Home">
        <img :src="logo" alt="" width="121" height="36" />
      </NuxtLink>

      <nav class="site-nav" aria-label="Primary">
        <ul>
          <li v-for="item in primaryNav" :key="item.url">
            <NuxtLink
              :to="item.url"
              class="site-nav__link"
              :class="{ 'is-active': isActiveRoute(route.path, item.url) }"
              :aria-current="isActiveRoute(route.path, item.url) ? 'page' : undefined"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="site-header__actions">
        <button
          type="button"
          class="header-icon-btn"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
          @click="toggleTheme"
        >
          <Icon :icon="isDark ? 'solar:moon-stars-bold' : 'solar:sun-bold'" width="20" height="20" />
        </button>

        <SharedAppButton
          to="/contact"
          label="Let's talk"
          size="sm"
          class="site-header__cta"
        />

        <button
          type="button"
          class="header-icon-btn site-header__menu-btn"
          aria-label="Open menu"
          aria-haspopup="dialog"
          :aria-expanded="menuOpen"
          @click="menuOpen = true"
        >
          <Icon icon="tabler:menu-2" width="22" height="22" />
        </button>
      </div>
    </div>

    <MobileMenu v-model="menuOpen" />
  </header>
</template>

<style scoped>
.site-header {
  --hdr-ink: #ffffff;
  --hdr-ink-soft: rgba(255, 255, 255, 0.78);
  --hdr-line: rgba(255, 255, 255, 0.22);
  --hdr-pill: rgba(255, 255, 255, 0.08);
  --hdr-hover: rgba(255, 255, 255, 0.12);
  --c-focus: rgb(var(--v-theme-primary));

  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  height: var(--header-h);
  display: flex;
  align-items: center;
  color: var(--hdr-ink);
  border-bottom: 1px solid transparent;
  transition: background-color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out),
    box-shadow var(--dur) var(--ease-out);
}

/* Subtle top shade keeps white nav legible over bright photos */
.site-header::before {
  content: "";
  position: absolute;
  inset: 0 0 -40px;
  z-index: -1;
  background: linear-gradient(180deg, rgba(31, 42, 46, 0.35), rgba(31, 42, 46, 0));
  pointer-events: none;
  transition: opacity var(--dur) var(--ease-out);
}

.site-header.is-solid {
  --hdr-ink: var(--c-text);
  --hdr-ink-soft: var(--c-text-soft);
  --hdr-line: var(--c-border-strong);
  --hdr-pill: transparent;
  --hdr-hover: rgba(var(--v-theme-dark), 0.06);
  --c-focus: var(--c-text);

  background: rgba(var(--v-theme-white), 0.86);
  border-bottom-color: var(--c-border);
  backdrop-filter: saturate(160%) blur(16px);
  -webkit-backdrop-filter: saturate(160%) blur(16px);
}

:global(html.dark .site-header.is-solid) {
  --c-focus: rgb(var(--v-theme-primary));
  background: rgba(var(--v-theme-surface), 0.86);
}

.site-header.is-solid::before {
  opacity: 0;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.site-header__brand {
  display: inline-flex;
  flex: none;
  border-radius: var(--radius-xs);
}

.site-header__brand img {
  display: block;
  height: 36px;
  width: auto;
}

/* Desktop navigation */
.site-nav ul {
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 0;
  padding: 5px;
  list-style: none;
  border: 1px solid var(--hdr-line);
  border-radius: var(--radius-pill);
  background: var(--hdr-pill);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color var(--dur) var(--ease-out), background-color var(--dur) var(--ease-out);
}

.site-nav__link {
  display: inline-flex;
  align-items: center;
  height: 38px;
  padding: 0 16px;
  border-radius: var(--radius-pill);
  color: var(--hdr-ink-soft);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: color var(--dur-fast) ease, background-color var(--dur-fast) ease;
}

.site-nav__link:hover {
  color: var(--hdr-ink);
  background: var(--hdr-hover);
}

.site-nav__link.is-active {
  color: rgb(var(--v-theme-secondary));
  background: rgb(var(--v-theme-primary));
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-icon-btn {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--hdr-line);
  background: var(--hdr-pill);
  color: var(--hdr-ink);
  cursor: pointer;
  transition: background-color var(--dur-fast) ease, border-color var(--dur-fast) ease, color var(--dur-fast) ease;
}

.header-icon-btn:hover {
  background: rgb(var(--v-theme-primary));
  border-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.site-header__menu-btn {
  display: none;
}

@media (max-width: 1023.98px) {
  .site-nav {
    display: none;
  }

  .site-header__menu-btn {
    display: grid;
  }
}

@media (max-width: 599.98px) {
  .site-header__cta {
    display: none;
  }

  .site-header__brand img {
    height: 32px;
  }
}
</style>
