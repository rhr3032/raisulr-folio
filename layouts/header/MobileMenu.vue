<script setup lang="ts">
import { Icon } from "@iconify/vue";
import WhiteLogo from "/images/logos/WhiteLogo.svg";

const open = defineModel<boolean>({ default: false });

const route = useRoute();
const { isDark, toggleTheme } = useAppTheme();
</script>

<template>
  <v-dialog
    v-model="open"
    fullscreen
    transition="fade-transition"
    scroll-strategy="block"
    aria-label="Site menu"
    content-class="mobile-menu-dialog"
  >
    <div class="mobile-menu on-ink">
      <div class="container-lg mobile-menu__bar">
        <NuxtLink to="/" class="mobile-menu__brand" aria-label="Raisul R. — Home">
          <img :src="WhiteLogo" alt="" width="108" height="32" />
        </NuxtLink>
        <div class="d-flex align-center ga-2">
          <button
            type="button"
            class="icon-btn"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <Icon :icon="isDark ? 'solar:moon-stars-bold' : 'solar:sun-bold'" width="20" height="20" />
          </button>
          <button type="button" class="icon-btn" aria-label="Close menu" @click="open = false">
            <Icon icon="tabler:x" width="22" height="22" />
          </button>
        </div>
      </div>

      <nav class="container-lg mobile-menu__nav" aria-label="Mobile">
        <ul>
          <li v-for="(item, index) in primaryNav" :key="item.url" :style="{ '--i': index }">
            <NuxtLink
              :to="item.url"
              class="mobile-menu__link"
              :class="{ 'is-active': isActiveRoute(route.path, item.url) }"
              :aria-current="isActiveRoute(route.path, item.url) ? 'page' : undefined"
              @click="open = false"
            >
              <span class="mobile-menu__index">{{ String(index + 1).padStart(2, "0") }}</span>
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="container-lg mobile-menu__footer">
        <p class="eyebrow d-flex mb-2">Get in touch</p>
        <a :href="`mailto:${contactInfo.email}`" class="mobile-menu__email">{{ contactInfo.email }}</a>
        <div class="d-flex flex-wrap ga-2 mt-5">
          <a
            v-for="social in socialLinks"
            :key="social.title"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-btn"
            :aria-label="social.title"
          >
            <Icon :icon="social.icon" width="20" height="20" />
          </a>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<style scoped>
.mobile-menu {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  overflow-y: auto;
  background: rgb(var(--v-theme-secondary));
  color: #ffffff;
}

.mobile-menu__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--header-h);
  border-bottom: 1px solid var(--c-border);
}

.mobile-menu__brand img {
  display: block;
  height: 32px;
  width: auto;
}

.mobile-menu__nav {
  flex: 1;
  padding-top: clamp(1.5rem, 4vh, 3rem);
  padding-bottom: 2rem;
}

.mobile-menu__nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.mobile-menu__nav li {
  border-bottom: 1px solid var(--c-border);
  animation: menu-in 0.5s var(--ease-out) both;
  animation-delay: calc(var(--i) * 40ms + 60ms);
}

.mobile-menu__link {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 14px 0;
  color: #ffffff;
  font-size: clamp(1.75rem, 1.2rem + 3vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  text-decoration: none;
  transition: color var(--dur-fast) ease, padding var(--dur) var(--ease-out);
}

.mobile-menu__link:hover,
.mobile-menu__link.is-active {
  color: rgb(var(--v-theme-primary));
}

.mobile-menu__link:hover {
  padding-left: 6px;
}

.mobile-menu__index {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--c-text-faint);
  font-variant-numeric: tabular-nums;
}

.mobile-menu__footer {
  padding-bottom: max(2rem, env(safe-area-inset-bottom));
}

.mobile-menu__email {
  color: #ffffff;
  font-size: clamp(1.125rem, 1rem + 1vw, 1.5rem);
  font-weight: 700;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.mobile-menu__email:hover {
  color: rgb(var(--v-theme-primary));
}

.icon-btn {
  --c-text: #ffffff;
}

@keyframes menu-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
}
</style>
