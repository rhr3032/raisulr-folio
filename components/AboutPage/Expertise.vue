<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="expertise bg-secondary section-divide">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="03"
        label="Expertise"
        title="What I bring to the table"
        subtitle="Design thinking and engineering in one person—so ideas don’t get lost between the mockup and the browser."
      />

      <div class="expertise__grid mt-10 mt-lg-16">
        <article
          v-for="(item, index) in expertise"
          :key="item.title"
          v-reveal="index * 90"
          class="skill-card"
          :class="{ 'skill-card--lime bg-primary': index === 0 }"
        >
          <span class="skill-card__icon" aria-hidden="true">
            <Icon :icon="item.icon" width="28" height="28" />
          </span>

          <div>
            <h3 class="skill-card__title">{{ item.title }}</h3>
            <p class="skill-card__desc">{{ item.description }}</p>
          </div>

          <ul class="skill-card__list">
            <li v-for="skill in item.skills" :key="skill">
              <Icon icon="tabler:check" width="18" height="18" aria-hidden="true" />
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.expertise__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .expertise__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 1.4vw, 24px);
  }
}

@media (min-width: 1280px) {
  .expertise__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.skill-card {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: clamp(24px, 1.2rem + 1vw, 36px);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.04);
  transition: transform 0.5s var(--ease-out), border-color var(--dur) var(--ease-out);
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: var(--c-border-strong);
}

.skill-card__icon {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.skill-card__title {
  margin: 0 0 8px;
  color: var(--c-text);
  font-size: clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.skill-card__desc {
  margin: 0;
  color: var(--c-text-soft);
  line-height: 1.65;
}

.skill-card__list {
  display: grid;
  gap: 12px;
  margin: auto 0 0;
  padding: 20px 0 0;
  border-top: 1px solid var(--c-border-strong);
  list-style: none;
  color: var(--c-text);
  font-weight: 600;
}

.skill-card__list li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.skill-card__list svg {
  flex: none;
  color: rgb(var(--v-theme-primary));
}

/* Highlighted first card */
.skill-card--lime {
  border-color: transparent;
}

.skill-card--lime .skill-card__icon {
  background: rgb(var(--v-theme-secondary));
  color: rgb(var(--v-theme-primary));
}

.skill-card--lime .skill-card__list svg {
  color: rgb(var(--v-theme-secondary));
}
</style>
