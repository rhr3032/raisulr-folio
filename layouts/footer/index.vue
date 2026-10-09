<script setup lang="ts">
import { Icon } from "@iconify/vue";
import WhiteLogo from "/images/logos/WhiteLogo.svg";
</script>

<template>
  <footer class="site-footer bg-secondary">
    <div class="container-lg">
      <!-- Closing call to action -->
      <div class="site-footer__cta">
        <h2 v-reveal class="site-footer__title">Build something <span>together?</span></h2>
        <div v-reveal="100" class="site-footer__cta-actions">
          <SharedAppButton to="/contact" label="Get in touch" />
          <a :href="`mailto:${contactInfo.email}`" class="link-arrow site-footer__email">
            {{ contactInfo.email }}
            <Icon icon="material-symbols:arrow-outward" width="20" height="20" aria-hidden="true" />
          </a>
        </div>
      </div>

      <!-- Link columns -->
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          <NuxtLink to="/" aria-label="Raisul R. — Home" class="d-inline-flex">
            <img :src="WhiteLogo" alt="" width="135" height="40" />
          </NuxtLink>
          <a :href="contactInfo.mapUrl" target="_blank" rel="noopener noreferrer" class="site-footer__meta">
            <Icon icon="uil:map-marker" width="20" height="20" aria-hidden="true" />
            {{ contactInfo.location }}
          </a>
        </div>

        <nav aria-label="Footer">
          <p class="site-footer__heading">Pages</p>
          <ul class="site-footer__list">
            <li v-for="item in footerNav" :key="item.url">
              <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p class="site-footer__heading">Legal</p>
          <ul class="site-footer__list">
            <li v-for="item in legalNav" :key="item.url">
              <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <p class="site-footer__heading">Social</p>
          <ul class="site-footer__list">
            <li v-for="item in socialLinks" :key="item.url">
              <a :href="item.url" target="_blank" rel="noopener noreferrer">
                {{ item.title }}
                <Icon icon="material-symbols:arrow-outward" width="14" height="14" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p class="mb-0">© NUYsDev 2026 | All Rights Reserved.</p>
        <a href="#main" class="site-footer__top">
          Back to top
          <Icon icon="ic:round-arrow-upward" width="16" height="16" aria-hidden="true" />
        </a>
      </div>
    </div>

    <ScrollToTop />
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  color: #ffffff;
}

:global(html.dark .site-footer) {
  border-top: 1px solid var(--c-border);
}

.site-footer__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px 48px;
  padding-block: var(--section-space) clamp(3rem, 2rem + 4vw, 5.5rem);
}

.site-footer__title {
  margin: 0;
  max-width: 12ch;
  color: #ffffff;
  font-size: clamp(2.5rem, 1.5rem + 4.6vw, 6.25rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.045em;
}

.site-footer__title span {
  color: rgb(var(--v-theme-primary));
}

.site-footer__cta-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.site-footer__email {
  --c-text: #ffffff;
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  overflow-wrap: anywhere;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px 32px;
  padding-block: clamp(2.5rem, 2rem + 2vw, 3.5rem);
  border-top: 1px solid var(--c-border);
}

@media (min-width: 600px) {
  .site-footer__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .site-footer__brand {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1024px) {
  .site-footer__grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }

  .site-footer__brand {
    grid-column: auto;
  }
}

.site-footer__brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.site-footer__brand img {
  display: block;
  height: 40px;
  width: auto;
}

.site-footer__meta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--c-text-soft);
  text-decoration: none;
  transition: color var(--dur-fast) ease;
}

.site-footer__meta svg {
  color: rgb(var(--v-theme-primary));
}

.site-footer__meta:hover {
  color: #ffffff;
}

.site-footer__heading {
  margin: 0 0 16px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-text-faint);
}

.site-footer__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-footer__list a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.86);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--dur-fast) ease;
}

.site-footer__list a:hover,
.site-footer__list a.router-link-exact-active {
  color: rgb(var(--v-theme-primary));
}

.site-footer__top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  color: var(--c-text-soft);
  font-weight: 600;
  text-decoration: none;
}

.site-footer__top:hover {
  color: rgb(var(--v-theme-primary));
}

.site-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 24px;
  padding-block: 16px 24px;
  border-top: 1px solid var(--c-border);
  color: var(--c-text-faint);
  font-size: 0.875rem;
}
</style>
