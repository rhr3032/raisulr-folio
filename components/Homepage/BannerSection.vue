<script setup lang="ts">
import { Icon } from "@iconify/vue";
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";

// Add the path/URL of your resume (e.g. "/resume.pdf") to make "View Resume" open it.
const resumeUrl = "";
</script>

<template>
  <section class="hero on-ink" aria-labelledby="hero-title">
    <!-- Ambient backdrop: a blurred copy of the portrait plus a soft lime glow -->
    <div class="hero__backdrop" aria-hidden="true">
      <img src="/banner/banner.jpg" alt="" class="hero__backdrop-img" width="1184" height="806" decoding="async" />
      <span class="hero__glow hero__glow--a"></span>
      <span class="hero__glow hero__glow--b"></span>
      <span class="hero__grid-lines"></span>
    </div>

    <div class="container-lg hero__inner">
      <div class="hero__layout">
        <div class="hero__copy">
          <p class="hero__eyebrow hero-in" style="--d: 0ms">
            <span class="hero__pulse" aria-hidden="true"></span>
            Product Designer &amp; Developer
          </p>

          <h1 id="hero-title" class="hero__title hero-in" style="--d: 80ms">
            Raisul <span>R.</span>
          </h1>

          <div class="hero__intro hero-in" style="--d: 160ms">
            <img :src="AnimatedIcon" alt="" aria-hidden="true" width="36" height="38" class="icon-rotate" />
            <p class="mb-0">
              I don’t just build screens, I craft <em>user experiences</em> that strongly connect with users.
            </p>
          </div>

          <div class="hero__actions hero-in" style="--d: 220ms">
            <SharedAppButton
              label="View Resume"
              :href="resumeUrl || undefined"
              icon="material-symbols:arrow-cool-down"
              static-icon
            />
            <SharedAppButton to="/projects" label="See my work" variant="glass" />
          </div>
        </div>

        <figure class="hero__media hero-in" style="--d: 140ms">
          <div class="hero__frame">
            <img
              src="/banner/banner.jpg"
              alt="Raisul R. at a desk workstation"
              class="hero__img"
              width="1184"
              height="806"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          <figcaption class="hero__chip hero__chip--location">
            <Icon icon="uil:map-marker" width="18" height="18" aria-hidden="true" />
            {{ contactInfo.location }}
          </figcaption>

          <span class="hero__chip hero__chip--tag" aria-hidden="true">
            <Icon icon="solar:pen-new-square-linear" width="16" height="16" />
            Design
            <span class="hero__chip-sep">×</span>
            <Icon icon="solar:code-linear" width="16" height="16" />
            Code
          </span>
        </figure>
      </div>

      <div class="hero__meta hero-in" style="--d: 300ms">
        <span class="hero__meta-note">Crafting digital products end to end</span>
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
  --hero-pad-top: calc(var(--header-h) + clamp(1.25rem, 0.5rem + 2vw, 2.5rem));
  --hero-pad-bottom: clamp(1.25rem, 1rem + 1vw, 2rem);
  /* Space reserved under the photo for the meta row, so everything fits in one screen */
  --hero-meta-h: 76px;

  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 100svh;
  overflow: hidden;
  background: rgb(var(--v-theme-secondary));
  color: #ffffff;
}

/* ---------- Backdrop ---------- */
.hero__backdrop {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.hero__backdrop-img {
  position: absolute;
  inset: -10%;
  width: 120%;
  height: 120%;
  max-width: none;
  object-fit: cover;
  filter: blur(70px) saturate(120%);
  opacity: 0.32;
  transform: scale(1.1);
}

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
}

.hero__glow--a {
  top: -18%;
  right: -8%;
  width: 46vw;
  height: 46vw;
  background: rgba(193, 255, 114, 0.16);
}

.hero__glow--b {
  bottom: -30%;
  left: -12%;
  width: 40vw;
  height: 40vw;
  background: rgba(193, 255, 114, 0.08);
}

/* Faint architectural grid, faded towards the edges */
.hero__grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse at 60% 40%, #000 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 60% 40%, #000 0%, transparent 70%);
}

/* ---------- Layout ---------- */
.hero__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  padding-top: var(--hero-pad-top);
  padding-bottom: var(--hero-pad-bottom);
}

.hero__layout {
  flex: 1;
  display: grid;
  align-items: center;
  gap: clamp(2rem, 1rem + 3vw, 4.5rem);
}

@media (min-width: 960px) {
  .hero__layout {
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  }
}

/* ---------- Copy ---------- */
.hero__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 clamp(1rem, 0.6rem + 1vw, 1.75rem);
  padding: 8px 16px 8px 12px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
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

.hero__pulse::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: inherit;
  animation: pulse 2s ease-out infinite;
}

@keyframes pulse {
  to {
    opacity: 0;
    transform: scale(3);
  }
}

.hero__title {
  margin: 0;
  color: #ffffff;
  font-size: clamp(3.5rem, 1.25rem + 7.5vw, 9rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.055em;
}

.hero__title span {
  color: rgb(var(--v-theme-primary));
}

/* Stack the name on two lines beside the photo */
@media (min-width: 960px) {
  .hero__title span {
    display: block;
  }
}

.hero__intro {
  display: flex;
  gap: 16px;
  max-width: 440px;
  margin-top: clamp(1.25rem, 0.75rem + 1.5vw, 2.25rem);
  color: rgba(255, 255, 255, 0.8);
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
  margin-top: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);
}

/* ---------- Media ---------- */
.hero__media {
  position: relative;
  justify-self: center;
  /* Full photo, never cropped: width is capped so its height fits the viewport */
  width: min(100%, calc((100svh - var(--hero-pad-top) - var(--hero-pad-bottom) - var(--hero-meta-h)) * 1184 / 806));
  margin: 0;
}

@media (min-width: 960px) {
  .hero__media {
    justify-self: end;
  }
}

.hero__frame {
  position: relative;
  padding: clamp(6px, 0.25rem + 0.4vw, 10px);
  border-radius: calc(var(--radius-lg) + 10px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03));
  box-shadow:
    0 40px 80px -30px rgba(0, 0, 0, 0.65),
    0 0 0 1px rgba(0, 0, 0, 0.15) inset;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.hero__img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1184 / 806;
  border-radius: var(--radius-lg);
  object-fit: cover;
}

/* Floating glass chips */
.hero__chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(31, 42, 46, 0.55);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow: 0 16px 32px -16px rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  animation: float 6s ease-in-out infinite;
}

.hero__chip svg {
  color: rgb(var(--v-theme-primary));
}

.hero__chip--location {
  left: clamp(-24px, -1.5vw, -8px);
  bottom: 14%;
}

.hero__chip--tag {
  top: 10%;
  right: clamp(-24px, -1.5vw, -8px);
  background: rgb(var(--v-theme-primary));
  border-color: transparent;
  color: rgb(var(--v-theme-secondary));
  animation-delay: -3s;
}

.hero__chip--tag svg {
  color: inherit;
}

.hero__chip-sep {
  opacity: 0.55;
}

@keyframes float {
  50% {
    transform: translateY(-8px);
  }
}

/* ---------- Meta row ---------- */
.hero__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.7);
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

/* ---------- Small screens ---------- */
@media (max-width: 959.98px) {
  .hero__inner {
    justify-content: flex-start;
  }

  .hero__meta-note {
    display: none;
  }
}

@media (max-width: 599.98px) {
  .hero__actions {
    width: 100%;
  }

  .hero__actions :deep(.app-btn) {
    flex: 1 1 auto;
  }

  .hero__chip {
    padding: 8px 12px;
    font-size: 0.8125rem;
  }

  .hero__chip--location {
    left: 10px;
    bottom: 10px;
  }

  .hero__chip--tag {
    top: 10px;
    right: 10px;
  }
}
</style>
