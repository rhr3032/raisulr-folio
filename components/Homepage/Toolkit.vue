<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(defineProps<{ number?: string }>(), { number: "06" });

const allTools = toolGroups.flatMap((group) => group.tools);
</script>

<template>
  <section class="toolkit bg-secondary">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        :number="number"
        label="Toolkit"
        title="Tools & technologies"
        subtitle="The design tools and tech stack I reach for every day to take products from a rough idea to a polished launch."
      />
    </div>

    <!-- Running strip of every tool -->
    <div class="marquee toolkit__marquee mt-10 mt-lg-16" style="--marquee-duration: 45s" aria-hidden="true">
      <div class="marquee__track">
        <div v-for="copy in 2" :key="copy" class="toolkit__marquee-set">
          <span v-for="tool in allTools" :key="`${copy}-${tool.name}`" class="toolkit__marquee-item">
            <Icon :icon="tool.icon" width="28" height="28" />
            {{ tool.name }}
          </span>
        </div>
      </div>
    </div>

    <div class="container-lg">
      <div class="toolkit__groups mt-10 mt-lg-16">
        <article
          v-for="(group, index) in toolGroups"
          :key="group.title"
          v-reveal="index * 100"
          class="toolkit-group"
        >
          <header class="toolkit-group__head">
            <span class="toolkit-group__num" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</span>
            <h3 class="toolkit-group__title">{{ group.title }}</h3>
            <p class="toolkit-group__desc">{{ group.description }}</p>
          </header>

          <ul class="toolkit-group__tools">
            <li v-for="tool in group.tools" :key="tool.name" class="tool">
              <span class="tool__icon" aria-hidden="true">
                <Icon :icon="tool.icon" width="22" height="22" />
              </span>
              <span class="tool__name">{{ tool.name }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.toolkit__marquee {
  padding-block: clamp(18px, 1rem + 1vw, 28px);
  border-block: 1px solid var(--c-border);
}

.toolkit__marquee-set {
  display: flex;
  align-items: center;
}

.toolkit__marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding-right: clamp(40px, 4vw, 72px);
  color: rgba(255, 255, 255, 0.5);
  font-size: clamp(1.25rem, 1rem + 1vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  white-space: nowrap;
  transition: color var(--dur) var(--ease-out);
}

.toolkit__marquee-item:hover {
  color: rgb(var(--v-theme-primary));
}

.toolkit__groups {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 1024px) {
  .toolkit__groups {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(16px, 1.4vw, 24px);
  }
}

.toolkit-group {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: clamp(24px, 1.2rem + 1vw, 36px);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  transition: border-color var(--dur) var(--ease-out);
}

.toolkit-group:hover {
  border-color: var(--c-border-strong);
}

.toolkit-group__num {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
  font-size: 0.8125rem;
  font-weight: 700;
}

.toolkit-group__title {
  margin: 0 0 8px;
  color: #ffffff;
  font-size: clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem);
  font-weight: 700;
  letter-spacing: -0.025em;
}

.toolkit-group__desc {
  margin: 0;
  color: var(--c-text-soft);
  line-height: 1.65;
}

.toolkit-group__tools {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  margin: auto 0 0;
  padding: 0;
  list-style: none;
}

.tool {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px 10px 10px;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.03);
  transition: background-color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out),
    transform var(--dur) var(--ease-out);
}

.tool:hover {
  border-color: rgba(193, 255, 114, 0.4);
  background: rgba(193, 255, 114, 0.06);
  transform: translateY(-2px);
}

.tool__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.07);
  color: #ffffff;
  transition: background-color var(--dur) var(--ease-out), color var(--dur) var(--ease-out);
}

.tool:hover .tool__icon {
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.tool__name {
  min-width: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.25;
}

@media (max-width: 599.98px) {
  .toolkit-group {
    padding: 20px;
  }

  .toolkit-group__tools {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .tool {
    gap: 10px;
    padding: 8px 10px 8px 8px;
  }

  .tool__icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  .tool__name {
    font-size: 0.875rem;
  }
}
</style>
