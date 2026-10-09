<script setup lang="ts">
import { Icon } from "@iconify/vue";
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";

// Add the path/URL of your resume (e.g. "/resume.pdf") to make "View Resume" open it.
const resumeUrl = "";
</script>

<template>
  <section class="hero on-ink" aria-labelledby="hero-title">
    <img
      src="/banner/banner.jpg"
      alt="Raisul R. at a desk workstation"
      class="hero__img"
      width="1184"
      height="806"
      fetchpriority="high"
      decoding="async"
    />
    <div class="hero__shade" aria-hidden="true"></div>

    <div class="container-lg hero__inner">
      <div class="hero__grid">
        <div class="hero__main">
          <p class="hero__eyebrow hero-in" style="--d: 0ms">
            <span class="hero__pulse" aria-hidden="true"></span>
            Product Designer &amp; Developer
          </p>
          <h1 id="hero-title" class="hero__title hero-in" style="--d: 80ms">
            Raisul <span>R.</span>
          </h1>
        </div>

        <div class="hero__side hero-in" style="--d: 180ms">
          <div class="hero__intro">
            <img :src="AnimatedIcon" alt="" aria-hidden="true" width="40" height="42" class="icon-rotate" />
            <p class="mb-0">
              I don’t just build screens, I craft <em>user experiences</em> that strongly connect with users.
            </p>
          </div>
          <div class="hero__actions">
            <SharedAppButton
              label="View Resume"
              :href="resumeUrl || undefined"
              icon="material-symbols:arrow-cool-down"
              static-icon
            />
            <SharedAppButton to="/projects" label="See my work" variant="glass" />
          </div>
        </div>
      </div>

      <div class="hero__meta hero-in" style="--d: 260ms">
        <span class="d-inline-flex align-center ga-2">
          <Icon icon="uil:map-marker" width="18" height="18" aria-hidden="true" />
          Based in {{ contactInfo.location }}
        </span>
        <a href="#stats" class="hero__scroll">
          Scroll to explore
          <span class="hero__scroll-line" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  min-height: max(640px, 100svh);
  overflow: hidden;
  background: rgb(var(--v-theme-secondary));
  color: #ffffff;
}

.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 62% 30%;
}

.hero__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(31, 42, 46, 0.7) 0%, rgba(31, 42, 46, 0.2) 55%, rgba(31, 42, 46, 0) 80%),
    linear-gradient(180deg, rgba(31, 42, 46, 0.45) 0%, rgba(31, 42, 46, 0) 30%, rgba(31, 42, 46, 0.35) 60%, rgba(31, 42, 46, 0.9) 100%);
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: clamp(2rem, 1.5rem + 2vw, 3.5rem);
  padding-top: calc(var(--header-h) + 40px);
  padding-bottom: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);
}

/* All copy stays in the left ~60% so the portrait on the right stays clear */
.hero__grid {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);
  max-width: 880px;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 clamp(0.75rem, 0.5rem + 1vw, 1.5rem);
  padding: 8px 16px 8px 12px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.hero__pulse {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
}

.hero__title {
  margin: 0;
  color: #ffffff;
  font-size: clamp(3.75rem, 1.4rem + 10.5vw, 12.5rem);
  font-weight: 700;
  line-height: 0.88;
  letter-spacing: -0.055em;
}

.hero__title span {
  color: rgb(var(--v-theme-primary));
}

.hero__side {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 1024px) {
  .hero__side {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
}

.hero__intro {
  display: flex;
  gap: 18px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.84);
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.1875rem);
  line-height: 1.6;
}

.hero__intro img {
  flex: none;
  margin-top: 3px;
}

.hero__intro em {
  font-style: normal;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  flex: none;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 600;
}

.hero__scroll {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
  transition: color var(--dur-fast) ease;
}

.hero__scroll:hover {
  color: #ffffff;
}

.hero__scroll-line {
  position: relative;
  width: 48px;
  height: 1px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.3);
}

.hero__scroll-line::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgb(var(--v-theme-primary));
  transform: translateX(-100%);
  animation: scroll-cue 2.4s var(--ease-out) infinite;
}

@keyframes scroll-cue {
  60%,
  100% {
    transform: translateX(100%);
  }
}

/* Entrance – short, once, and skipped for reduced motion (global rule) */
.hero-in {
  animation: hero-in 0.9s var(--ease-out) both;
  animation-delay: var(--d, 0ms);
}

@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
}

@media (max-width: 599.98px) {
  .hero__img {
    object-position: 70% 30%;
  }

  .hero__actions :deep(.app-btn) {
    flex: 1 1 auto;
  }
}
</style>
