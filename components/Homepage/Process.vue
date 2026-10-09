<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="process bg-surface section-divide">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="04"
        label="Process"
        title="How I work"
        subtitle="A simple, transparent process that keeps you in the loop from the first call to launch day—and beyond."
      />

      <ol class="process__steps mt-10 mt-lg-16">
        <li v-for="(step, index) in processSteps" :key="step.title" v-reveal="index * 90" class="process-step">
          <div class="process-step__top">
            <span class="process-step__icon" aria-hidden="true">
              <Icon :icon="step.icon" width="26" height="26" />
            </span>
            <span class="process-step__num" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</span>
          </div>

          <h3 class="process-step__title">{{ step.title }}</h3>
          <p class="process-step__desc">{{ step.description }}</p>

          <ul class="process-step__tags" aria-label="Deliverables">
            <li v-for="item in step.deliverables" :key="item" class="tag">{{ item }}</li>
          </ul>
        </li>
      </ol>

      <div v-reveal class="process__cta">
        <p class="process__cta-text">Have a project in mind? Let’s map out the first step together.</p>
        <SharedAppButton to="/contact" label="Start a project" />
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.process__steps {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 768px) {
  .process__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 1.4vw, 24px);
  }
}

@media (min-width: 1280px) {
  .process__steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.process-step {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: clamp(24px, 1.2rem + 1vw, 36px);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  background: var(--c-card);
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.5s var(--ease-out),
    border-color var(--dur) var(--ease-out),
    box-shadow var(--dur) var(--ease-out);
}

/* Lime wash that rises from the bottom on hover */
.process-step::before {
  content: "";
  position: absolute;
  inset: auto 0 0;
  z-index: -1;
  height: 4px;
  background: rgb(var(--v-theme-primary));
  transition: height 0.5s var(--ease-out);
}

.process-step:hover {
  transform: translateY(-6px);
  border-color: var(--c-border-strong);
  box-shadow: var(--shadow-md);
}

.process-step:hover::before {
  height: 8px;
}

.process-step__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: clamp(2rem, 1.5rem + 2vw, 3.5rem);
}

.process-step__icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgb(var(--v-theme-secondary));
  color: rgb(var(--v-theme-primary));
  transition: background-color var(--dur) var(--ease-out), color var(--dur) var(--ease-out),
    transform 0.5s var(--ease-out);
}

:global(html.dark .process-step__icon) {
  background: rgba(255, 255, 255, 0.06);
}

.process-step:hover .process-step__icon {
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
  transform: rotate(-8deg);
}

.process-step__num {
  color: transparent;
  font-size: clamp(3rem, 2.4rem + 2vw, 4.5rem);
  font-weight: 800;
  line-height: 0.85;
  letter-spacing: -0.05em;
  font-variant-numeric: tabular-nums;
  -webkit-text-stroke: 1.5px var(--c-border-strong);
  transition: -webkit-text-stroke-color var(--dur) var(--ease-out);
}

.process-step:hover .process-step__num {
  -webkit-text-stroke-color: var(--c-text-faint);
}

.process-step__title {
  margin: 0 0 12px;
  color: var(--c-text);
  font-size: clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.process-step__desc {
  flex: 1;
  margin: 0 0 24px;
  color: var(--c-text-soft);
  line-height: 1.7;
}

.process-step__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.process__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px 32px;
  margin-top: clamp(2rem, 1.5rem + 2vw, 3.5rem);
  padding: clamp(20px, 1rem + 1vw, 28px) clamp(20px, 1rem + 1.5vw, 36px);
  border-radius: var(--radius-pill);
  background: rgb(var(--v-theme-secondary));
  color: #ffffff;
}

:global(html.dark .process__cta) {
  border: 1px solid var(--c-border);
}

.process__cta-text {
  margin: 0;
  font-size: clamp(1.0625rem, 1rem + 0.4vw, 1.375rem);
  font-weight: 600;
  letter-spacing: -0.01em;
}

@media (max-width: 599.98px) {
  .process__cta {
    border-radius: var(--radius-lg);
  }

  .process__cta :deep(.app-btn) {
    width: 100%;
  }
}
</style>
