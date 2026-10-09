<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import img1 from "/images/projects/project3.webp";
import img2 from "/images/projects/whychoose.webp";
import img3 from "/images/projects/details/pd-43.webp";
import img4 from "/images/projects/whatwedo.webp";

const items = [
  {
    title: "Brand identity",
    description:
      "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    image: img1,
  },
  {
    title: "Web development",
    description:
      "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    image: img2,
  },
  {
    title: "Content creation",
    description:
      "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    image: img3,
  },
  {
    title: "Motion & 3d modeling",
    description:
      "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    image: img4,
  },
];

const active = ref(0);
</script>

<template>
  <section id="service" class="services-showcase position-relative bg-secondary">
    <SharedSectionSpacer />

    <div class="container-lg">
      <SharedSectionIntro
        number="03"
        label="Services"
        title="What we do"
        subtitle="A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences."
      />

      <v-row class="mt-8 mt-lg-16">
        <!-- Visual (desktop) -->
        <v-col cols="12" lg="4" class="d-none d-lg-block">
          <div class="showcase-visual section-aside" aria-hidden="true">
            <div class="media showcase-visual__frame">
              <img
                v-for="(item, index) in items"
                :key="item.title"
                :src="item.image"
                alt=""
                loading="lazy"
                decoding="async"
                :class="{ 'is-active': index === active }"
              />
            </div>
            <p class="showcase-visual__count">
              <span>{{ String(active + 1).padStart(2, "0") }}</span> / {{ String(items.length).padStart(2, "0") }}
            </p>
          </div>
        </v-col>

        <!-- List -->
        <v-col cols="12" lg="8">
          <ul class="showcase-list">
            <li
              v-for="(item, index) in items"
              :key="item.title"
              class="showcase-item"
              :class="{ 'is-active': index === active }"
              @mouseenter="active = index"
            >
              <h3 class="showcase-item__heading">
                <button
                  :id="`service-tab-${index}`"
                  type="button"
                  class="showcase-item__trigger"
                  :aria-expanded="index === active"
                  :aria-controls="`service-panel-${index}`"
                  @click="active = index"
                  @focus="active = index"
                >
                  <span class="showcase-item__num">{{ String(index + 1).padStart(2, "0") }}</span>
                  <span class="showcase-item__title">{{ item.title }}</span>
                  <span class="showcase-item__icon" aria-hidden="true">
                    <Icon icon="material-symbols:arrow-outward" />
                  </span>
                </button>
              </h3>
              <div
                :id="`service-panel-${index}`"
                class="showcase-item__panel"
                role="region"
                :aria-labelledby="`service-tab-${index}`"
              >
                <div class="showcase-item__panel-inner">
                  <img :src="item.image" alt="" loading="lazy" class="showcase-item__thumb d-lg-none" />
                  <p class="showcase-item__desc">{{ item.description }}</p>
                </div>
              </div>
            </li>
          </ul>

          <div class="mt-10 mt-lg-14">
            <SharedAppButton to="/projects" label="See Our Work" />
          </div>
        </v-col>
      </v-row>
    </div>

    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.showcase-visual__frame {
  aspect-ratio: 4 / 5;
  max-width: 420px;
}

.showcase-visual__frame img {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(1.06);
  transition: opacity 0.6s var(--ease-out), transform 1.2s var(--ease-out);
}

.showcase-visual__frame img.is-active {
  opacity: 1;
  transform: none;
}

.showcase-visual__count {
  margin: 16px 0 0;
  color: var(--c-text-faint);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
}

.showcase-visual__count span {
  color: rgb(var(--v-theme-primary));
}

.showcase-list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid var(--c-border-strong);
}

.showcase-item {
  border-top: 1px solid var(--c-border-strong);
}

.showcase-item__heading {
  margin: 0;
  font: inherit;
}

.showcase-item__trigger {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: clamp(16px, 2vw, 32px);
  width: 100%;
  padding: clamp(1.5rem, 1.1rem + 1.4vw, 2.5rem) 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.showcase-item__trigger:focus-visible {
  outline-offset: 6px;
  border-radius: var(--radius-xs);
}

.showcase-item__num {
  min-width: 2ch;
  color: var(--c-text-faint);
  font-size: 0.875rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  transition: color var(--dur) var(--ease-out);
}

.showcase-item__title {
  display: block;
  color: rgba(255, 255, 255, 0.58);
  font-size: clamp(1.625rem, 1.2rem + 2vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.035em;
  transition: color var(--dur) var(--ease-out), transform 0.5s var(--ease-out);
}

.showcase-item__icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--c-border-strong);
  color: #ffffff;
  transition: background-color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out),
    color var(--dur) var(--ease-out), transform 0.45s var(--ease-out);
}

.showcase-item__icon svg {
  width: 22px;
  height: 22px;
}

.showcase-item.is-active .showcase-item__num {
  color: rgb(var(--v-theme-primary));
}

.showcase-item.is-active .showcase-item__title,
.showcase-item:hover .showcase-item__title {
  color: #ffffff;
}

.showcase-item.is-active .showcase-item__icon {
  background: rgb(var(--v-theme-primary));
  border-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
  transform: rotate(45deg);
}

/* Smooth height animation with CSS grid rows */
.showcase-item__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s var(--ease-out);
}

.showcase-item.is-active .showcase-item__panel {
  grid-template-rows: 1fr;
}

.showcase-item__panel-inner {
  min-height: 0;
  overflow: hidden;
}

.showcase-item__desc {
  max-width: 52ch;
  margin: 0;
  padding: 0 0 clamp(1.5rem, 1.1rem + 1.4vw, 2.5rem) calc(2ch + clamp(16px, 2vw, 32px));
  color: var(--c-text-soft);
  font-size: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  line-height: 1.7;
}

.showcase-item__thumb {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: var(--radius-md);
}

@media (max-width: 599.98px) {
  .showcase-item__desc {
    padding-left: 0;
  }

  .showcase-item__icon {
    width: 40px;
    height: 40px;
  }
}
</style>
