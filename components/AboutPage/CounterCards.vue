<script setup lang="ts">
import { ref } from "vue";
import Logo from "@/layouts/shared/logo/index.vue";

type CounterItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  title: string;
  description: string;
};

const counters: CounterItem[] = [
  {
    value: 45,
    suffix: "+",
    title: "Presence in global markets",
    description: "Expanding reach across international regions with localized expertise and worldwide impact.",
  },
  {
    value: 15,
    prefix: "$",
    suffix: "M",
    title: "In strategic investments",
    description: "Driving growth with curated partnerships and high-performing, audience-driven initiatives.",
  },
  {
    value: 158,
    suffix: "+",
    title: "Trusted brand collaborations",
    description: "Shaping industry conversations through innovation, creativity, and lasting influence.",
  },
];

const counterEl = ref<HTMLElement | null>(null);
const animated = useCountUp(
  counterEl,
  counters.map((c) => c.value)
);
</script>

<template>
  <section class="about-intro bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <div class="section-aside d-flex flex-column ga-8">
            <SharedSectionLabel number="01" title="Who we are" />
            <Logo class="about-intro__logo" />
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8 pt-6 pt-lg-0">
            <p v-reveal class="about-intro__lead">
              It’s a canvas for your creativity. It’s your opportunity to transform bold ideas into dynamic,
              interactive experiences. Your work can shape identities, tell compelling stories, or spark meaningful
              change. As the digital landscape grows, so do the possibilities. And whether you thrive working
              remotely or in a buzzing agency space, the thrill of seeing your vision come to life is unmatched.
            </p>
            <p v-reveal="100" class="about-intro__body">
              At nuysdev, we bring ideas to life through a range of services: branding, web development, agency
              solutions, content creation, SaaS, and motion &amp; 3D modeling. As a web designer, you merge artistry
              and technology to craft "digital experiences" that inform, captivate, and inspire. Every day brings
              something new — one moment you’re sketching innovative concepts, the next you’re turning them into
              seamless, responsive designs. Web design keeps you pushing boundaries and creating at every turn!
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Counter Blocks -->
      <div ref="counterEl" class="counters">
        <div v-for="(item, index) in counters" :key="index" v-reveal="index * 100" class="counter">
          <p class="counter__value">
            {{ item.prefix || "" }}{{ animated[index] }}<span>{{ item.suffix || "" }}</span>
          </p>
          <h3 class="counter__title">{{ item.title }}</h3>
          <p class="counter__desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.about-intro__logo :deep(img) {
  height: clamp(44px, 4vw, 60px);
  width: auto;
}

.about-intro__lead {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(1.25rem, 1.05rem + 0.9vw, 1.875rem);
  font-weight: 600;
  line-height: 1.45;
  letter-spacing: -0.015em;
}

.about-intro__body {
  max-width: 68ch;
  margin: 0;
  color: var(--c-text-soft);
  font-size: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  line-height: 1.8;
}

.counters {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 clamp(24px, 3vw, 48px);
  margin-top: var(--section-space);
}

@media (min-width: 768px) {
  .counters {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.counter {
  padding: 28px 0 32px;
  border-top: 1px solid var(--c-border-strong);
}

.counter__value {
  margin: 0 0 clamp(1.25rem, 1rem + 1vw, 2rem);
  color: var(--c-text);
  font-size: clamp(3rem, 2rem + 4vw, 5.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
  font-variant-numeric: tabular-nums;
}

.counter__value span {
  color: var(--c-text-faint);
}

.counter__title {
  margin: 0 0 10px;
  color: var(--c-text);
  font-size: clamp(1.125rem, 1rem + 0.5vw, 1.5rem);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.015em;
}

.counter__desc {
  max-width: 36ch;
  margin: 0;
  color: var(--c-text-soft);
  line-height: 1.65;
}
</style>
