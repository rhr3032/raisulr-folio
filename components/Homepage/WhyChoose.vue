<script setup lang="ts">
import { Icon } from "@iconify/vue";
import WhyImg from "/images/projects/whychoose.webp";
import Profile from "/images/profile/user.svg";
import Overlay from "/images/background/bg-ellipse.svg";

import user1 from "/images/profile/avatar_1.jpg";
import user2 from "/images/profile/avatar_2.jpg";
import user3 from "/images/profile/avatar_3.jpg";
import user4 from "/images/profile/avatar_4.jpg";
import Logo from "@/layouts/shared/logo/index.vue";

const users = [
  { src: user1, alt: "User 1" },
  { src: user2, alt: "User 2" },
  { src: user3, alt: "User 3" },
  { src: user4, alt: "User 4" },
];
</script>

<template>
  <section class="why-choose bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" xl="4">
          <div class="section-aside why-choose__intro">
            <SharedSectionLabel number="04" title="About us" />
            <div v-reveal class="mt-8 mt-xl-10">
              <SharedSectionHeading
                title="Why choose us"
                subtitle="We blend creativity with strategy to craft unique digital experiences that make an impact. With a focus on innovation, attention to details."
              />
            </div>
          </div>
        </v-col>

        <v-col cols="12" xl="8">
          <div class="bento">
            <!-- Satisfaction / testimonial -->
            <article v-reveal class="bento__card bento__card--lime bg-primary">
              <div class="position-relative">
                <div class="stars" role="img" aria-label="Rated 4 out of 5">
                  <Icon v-for="n in 4" :key="n" icon="solar:star-bold" width="18" height="18" />
                  <Icon icon="solar:star-linear" width="18" height="18" />
                </div>
                <p class="bento__quote">The team exceeded our expectations with a stunning brand identity.</p>
              </div>

              <div class="position-relative">
                <p class="bento__stat">98.6%</p>
                <p class="bento__label">Customer satisfaction</p>
                <div class="bento__divider"></div>
                <div class="d-flex ga-3 align-center">
                  <img :src="Profile" alt="" width="52" height="52" class="bento__avatar" />
                  <div>
                    <p class="bento__name">Wade Warren</p>
                    <p class="bento__role">Bank of America</p>
                  </div>
                </div>
              </div>
              <img :src="Overlay" alt="" aria-hidden="true" class="bento__ellipse" width="200" height="350" />
            </article>

            <!-- Image + projects -->
            <div class="bento__stack">
              <div v-reveal="90" class="media bento__media">
                <img :src="WhyImg" alt="" loading="lazy" decoding="async" />
              </div>
              <article v-reveal="140" class="bento__card bento__card--ink on-ink">
                <p class="bento__stat">500+</p>
                <p class="bento__label">Successful projects completed</p>
                <div class="avatar-stack mt-5">
                  <img
                    v-for="(user, index) in users"
                    :key="index"
                    :src="user.src"
                    alt=""
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </div>
              </article>
            </div>

            <!-- Reach -->
            <article v-reveal="180" class="bento__card bento__card--outline brand-served">
              <div class="position-relative">
                <p class="bento__stat">238+</p>
                <p class="bento__label">Brands served worldwide</p>
              </div>
              <div class="position-relative">
                <Logo class="bento__logo" />
                <p class="bento__text mt-4">
                  Our global reach allows us to create unique, culturally relevant designs for businesses across
                  different industries.
                </p>
              </div>
              <div class="first-ring" aria-hidden="true"></div>
              <div class="second-ring" aria-hidden="true"></div>
            </article>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.why-choose__intro {
  padding-bottom: 32px;
}

@media (min-width: 1280px) {
  .why-choose__intro {
    padding-right: 32px;
  }
}

.bento {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .bento {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 1.4vw, 24px);
  }

  .bento__card--outline {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1024px) {
  .bento {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .bento__card--outline {
    grid-column: auto;
  }
}

.bento__card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  min-height: 100%;
  padding: clamp(24px, 1.2rem + 1vw, 36px);
  border-radius: var(--radius-lg);
  overflow: hidden;
  isolation: isolate;
}

@media (min-width: 768px) {
  .bento__card--lime,
  .bento__card--outline {
    min-height: 460px;
  }
}

.bento__card--ink {
  min-height: 0;
  gap: 0;
  justify-content: flex-start;
  background: rgb(var(--v-theme-secondary));
}

:global(html.dark .bento__card--ink) {
  border: 1px solid var(--c-border);
}

.bento__card--outline {
  border: 1px solid var(--c-border-strong);
  background: var(--c-card);
}

.bento__stack {
  display: flex;
  flex-direction: column;
  gap: inherit;
}

.bento__media {
  flex: 1;
  min-height: 220px;
}

.stars {
  display: flex;
  gap: 3px;
  color: var(--c-text);
}

.bento__quote {
  margin: 16px 0 0;
  color: var(--c-text);
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.5;
}

.bento__stat {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(2.5rem, 1.9rem + 2.2vw, 3.75rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.045em;
}

.bento__label {
  margin: 8px 0 0;
  color: var(--c-text-soft);
  font-size: 0.9375rem;
  font-weight: 500;
}

.bento__divider {
  height: 1px;
  margin: 24px 0 20px;
  background: var(--c-border-strong);
}

.bento__avatar {
  border-radius: 50%;
  object-fit: cover;
}

.bento__name {
  margin: 0;
  color: var(--c-text);
  font-weight: 700;
}

.bento__role {
  margin: 0;
  color: var(--c-text-soft);
  font-size: 0.875rem;
}

.bento__ellipse {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
}

.bento__text {
  margin-bottom: 0;
  color: var(--c-text-soft);
  line-height: 1.65;
}

.bento__logo :deep(img) {
  height: 44px;
  width: auto;
}

.avatar-stack {
  display: flex;
}

.avatar-stack img {
  width: 40px;
  height: 40px;
  margin-right: -10px;
  border-radius: 50%;
  border: 2px solid rgb(var(--v-theme-secondary));
  object-fit: cover;
}

/* Decorative rings */
.brand-served .first-ring,
.brand-served .second-ring {
  position: absolute;
  z-index: -1;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 1px solid var(--c-border);
  pointer-events: none;
}

.brand-served .first-ring {
  top: -260px;
  left: -140px;
}

.brand-served .second-ring {
  bottom: -300px;
  left: -60px;
}

@media (min-width: 768px) and (max-width: 1023.98px) {
  .bento__card--outline {
    min-height: 300px;
  }
}
</style>
