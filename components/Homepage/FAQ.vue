<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const faqItems = [
  {
    question: "What services does your agency offer?",
    answer:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    question: "Do you offer custom designs, or do you use templates?",
    answer:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    question: "What’s the cost of a project?",
    answer:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
];

const open = ref<number | undefined>(0);
</script>

<template>
  <section class="faq bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="09"
        label="FAQs"
        title="Frequently asked questions"
        subtitle="Discover how we tailor our solutions to meet unique needs, delivering impactful strategies, personalized branding, and exceptional customer experiences."
      />

      <v-row class="mt-8 mt-lg-14">
        <v-col cols="12" lg="8" offset-lg="4">
          <v-expansion-panels v-model="open" variant="accordion" flat static class="faq-panels">
            <v-expansion-panel v-for="(item, i) in faqItems" :key="i" class="faq-item" :value="i">
              <v-expansion-panel-title hide-actions :ripple="false" class="faq-item__title">
                <template #default="{ expanded }">
                  <span class="faq-item__num" aria-hidden="true">{{ String(i + 1).padStart(2, "0") }}</span>
                  <span class="faq-item__question">{{ item.question }}</span>
                  <span class="faq-item__toggle" :class="{ 'is-open': expanded }" aria-hidden="true">
                    <Icon icon="tabler:plus" width="20" height="20" />
                  </span>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="faq-item__answer">
                {{ item.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.faq-panels {
  border-top: 1px solid var(--c-border-strong);
}

.faq-item {
  color: var(--c-text) !important;
  border-bottom: 1px solid var(--c-border-strong);
  border-radius: 0 !important;
}

.faq-item::after {
  display: none;
}

.faq-item :deep(.v-expansion-panel__shadow) {
  display: none;
}

.faq-item__title {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: clamp(12px, 2vw, 28px);
  min-height: 0 !important;
  padding: clamp(1.25rem, 1rem + 0.8vw, 1.875rem) 0 !important;
  color: inherit;
  text-align: left;
}

.faq-item__title :deep(.v-expansion-panel-title__overlay) {
  display: none;
}

.faq-item__title:focus-visible {
  outline: 2px solid var(--c-focus);
  outline-offset: 4px;
  border-radius: var(--radius-xs);
}

.faq-item__num {
  min-width: 2ch;
  color: var(--c-text-faint);
  font-size: 0.875rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.faq-item__question {
  color: var(--c-text);
  font-size: clamp(1.125rem, 1rem + 0.6vw, 1.5rem);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.015em;
}

.faq-item__toggle {
  display: grid;
  place-items: center;
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--c-border-strong);
  color: var(--c-text);
  transition: transform 0.4s var(--ease-out), background-color var(--dur) var(--ease-out),
    border-color var(--dur) var(--ease-out);
}

.faq-item__title:hover .faq-item__toggle {
  border-color: var(--c-text);
}

.faq-item__toggle.is-open {
  transform: rotate(45deg);
  background: rgb(var(--v-theme-primary));
  border-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.faq-item__answer :deep(.v-expansion-panel-text__wrapper) {
  max-width: 64ch;
  padding: 0 0 clamp(1.25rem, 1rem + 0.8vw, 1.875rem) calc(2ch + clamp(12px, 2vw, 28px));
  color: var(--c-text-soft);
  font-size: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  line-height: 1.7;
}

@media (max-width: 599.98px) {
  .faq-item__answer :deep(.v-expansion-panel-text__wrapper) {
    padding-left: 0;
  }
}
</style>
