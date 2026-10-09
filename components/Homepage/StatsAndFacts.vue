<script setup lang="ts">
import { ref } from "vue";
import BgImage from "/images/background/bg-astrisk-icon.png";
import BgImageWhite from "/images/background/bg-astrisk-icon-white.png";

interface CounterItem {
  value: number;
  suffix: string;
  caption: string;
}

const items: CounterItem[] = [
  {
    value: 4000,
    suffix: "K",
    caption: "People who have launched their products",
  },
  {
    value: 10,
    suffix: "+",
    caption: "Experienced professionals ready to assist",
  },
  {
    value: 22000,
    suffix: "K",
    caption: "Support through messages and live consultations",
  },
];

const statsEl = ref<HTMLElement | null>(null);
const animatedValues = useCountUp(
  statsEl,
  items.map((item) => item.value)
);

function formatNumber(value: number, suffix: string) {
  if (suffix === "K") {
    return `${Math.floor(value / 1000)}K`;
  } else if (suffix === "M") {
    const millions = value / 1_000_000;
    return Number.isInteger(millions) ? `${millions}M` : `${millions.toFixed(1)}M`;
  } else {
    return `${value}`;
  }
}
</script>

<template>
  <section id="stats" class="stats position-relative bg-surface overflow-hidden">
    <SharedSectionSpacer />
    <div class="container-lg position-relative">
      <SharedSectionIntro
        number="01"
        label="Stats & facts"
        title="Over 6+ years of expertise as a Product Designer and Developer."
        subtitle="I design and build clean, user-focused digital products by turning ideas into intuitive, high-performing experiences through thoughtful UX and modern development."
      />

      <v-row class="mt-6 mt-lg-12">
        <v-col cols="12" lg="8" offset-lg="4">
          <dl ref="statsEl" class="stats__grid">
            <div v-for="(item, index) in items" :key="index" v-reveal="index * 90" class="stats__item">
              <dt class="stats__caption">{{ item.caption }}</dt>
              <dd class="stats__value">
                {{ formatNumber(animatedValues[index] ?? 0, item.suffix) }}<span>+</span>
              </dd>
            </div>
          </dl>

          <div class="mt-10 mt-lg-14">
            <SharedAppButton to="/about" label="Who am I" />
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="stats__decor" aria-hidden="true">
      <img :src="BgImage" alt="" class="icon-rotate only-light" />
      <img :src="BgImageWhite" alt="" class="icon-rotate only-dark" />
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.stats__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 32px;
  margin: 0;
}

@media (min-width: 600px) {
  .stats__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.stats__item {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 10px;
  padding: 24px 0;
  border-top: 1px solid var(--c-border-strong);
}

.stats__value {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(2.75rem, 1.9rem + 3.4vw, 4.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.045em;
  font-variant-numeric: tabular-nums;
}

.stats__value span {
  color: var(--c-text-faint);
}

.stats__caption {
  max-width: 26ch;
  color: var(--c-text-soft);
  font-size: 0.9375rem;
  line-height: 1.55;
}

.stats__decor {
  position: absolute;
  top: 38%;
  left: -90px;
  width: clamp(220px, 22vw, 360px);
  opacity: 0.7;
  pointer-events: none;
}

.stats__decor img {
  width: 100%;
  height: auto;
}

@media (max-width: 1279.98px) {
  .stats__decor {
    display: none;
  }
}
</style>
