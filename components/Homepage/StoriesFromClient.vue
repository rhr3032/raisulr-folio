<script setup lang="ts">
import { Icon } from "@iconify/vue";
import testimonial1 from "/images/profile/testimonial_1.webp";
import testimonial2 from "/images/profile/testimonial_2.webp";
import testimonial3 from "/images/profile/testimonial_3.webp";

const testimonials = [
  {
    quote: "Our website redesign was flawless. They understood our vision perfectly!",
    name: "Albert Flores",
    company: "MasterCard",
    avatar: testimonial1,
    tone: "lime",
  },
  {
    quote: "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
    name: "Robert Fox",
    company: "Mitsubishi",
    avatar: testimonial2,
    tone: "ink",
    rating: 4,
  },
  {
    quote: "Super smooth process with incredible results. highly recommend!",
    name: "Jenny Wilson",
    company: "Pizza Hut",
    avatar: testimonial3,
    tone: "card",
  },
];
</script>

<template>
  <section class="stories bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="07"
        label="Testimonial"
        title="Stories from clients"
        subtitle="Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses."
      />

      <div class="stories__grid mt-10 mt-lg-16">
        <figure
          v-for="(item, index) in testimonials"
          :key="item.name"
          v-reveal="index * 100"
          class="quote-card"
          :class="[`quote-card--${item.tone}`, { 'bg-primary': item.tone === 'lime', 'on-ink': item.tone === 'ink' }]"
        >
          <div class="quote-card__top">
            <p class="quote-card__eyebrow">Hear from them</p>
            <Icon icon="tabler:quote" class="quote-card__mark" aria-hidden="true" />
          </div>

          <blockquote class="quote-card__text">{{ item.quote }}</blockquote>

          <div v-if="item.rating" class="quote-card__rating">
            <span class="stars" role="img" :aria-label="`Rated ${item.rating} out of 5`">
              <Icon
                v-for="n in 5"
                :key="n"
                :icon="n <= item.rating ? 'solar:star-bold' : 'solar:star-linear'"
                width="18"
                height="18"
              />
            </span>
            <span aria-hidden="true">{{ item.rating.toFixed(1) }}</span>
          </div>

          <figcaption class="quote-card__author">
            <img :src="item.avatar" alt="" width="52" height="52" loading="lazy" />
            <span>
              <span class="quote-card__name">{{ item.name }}</span>
              <span class="quote-card__company">{{ item.company }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.stories__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .stories__grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .quote-card {
    min-height: 400px;
  }

  /* Wide statement card leads on tablet */
  .quote-card--ink {
    grid-column: 1 / -1;
    order: -1;
  }
}

@media (min-width: 1280px) {
  .stories__grid {
    grid-template-columns: 1fr 1.6fr 1fr;
    gap: 24px;
  }

  .quote-card--ink {
    grid-column: auto;
    order: 0;
  }
}

.quote-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
  padding: clamp(24px, 1.2rem + 1vw, 36px);
  border-radius: var(--radius-lg);
}

.quote-card--ink {
  background: rgb(var(--v-theme-secondary));
}

:global(html.dark .quote-card--ink) {
  border: 1px solid var(--c-border);
}

.quote-card--card {
  background: var(--c-card);
  border: 1px solid var(--c-border);
}

:global(html.dark .quote-card--card) {
  background: rgb(var(--v-theme-accent));
}

.quote-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quote-card__eyebrow {
  margin: 0;
  color: var(--c-text-soft);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.quote-card__mark {
  width: 36px;
  height: 36px;
  color: var(--c-text);
  opacity: 0.2;
}

.quote-card__text {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(1.375rem, 1.15rem + 0.9vw, 1.875rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.quote-card--ink .quote-card__text {
  font-size: clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem);
}

.quote-card__rating {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--c-text);
  font-weight: 700;
}

.stars {
  display: inline-flex;
  gap: 3px;
  color: rgb(var(--v-theme-primary));
}

.quote-card__author {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--c-border);
}

.quote-card__author img {
  border-radius: 50%;
  object-fit: cover;
}

.quote-card__name {
  display: block;
  color: var(--c-text);
  font-weight: 700;
}

.quote-card__company {
  display: block;
  color: var(--c-text-soft);
  font-size: 0.875rem;
}
</style>
