<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import BgImage from "/images/background/bg-astrisk-icon.png";
import BgImageWhite from "/images/background/bg-astrisk-icon-white.png";

interface CounterItem {
  value: number;
  suffix: string;
  caption: string;
}

const items = ref<CounterItem[]>([
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
]);

// Animated values
const animatedValues = ref<number[]>(items.value.map(() => 0));

onMounted(() => {
  items.value.forEach((item, index) => {
    animateCounter(item.value, index);
  });
});

function animateCounter(target: number, index: number) {
  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;

  const counterInterval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const current = Math.floor(target * progress);
    animatedValues.value[index] = current;

    if (frame === totalFrames) {
      animatedValues.value[index] = target;
      clearInterval(counterInterval);
    }
  }, frameDuration);
}

function formatNumber(value: number, suffix: string) {
  if (suffix === "K") {
    return `${Math.floor(value / 1000)}K`;
  } else if (suffix === "M") {
    const millions = value / 1_000_000;
    return Number.isInteger(millions)
      ? `${millions}M`
      : `${millions.toFixed(1)}M`;
  } else {
    return `${value}`;
  }
}
</script>

<template>
  <div class="position-relative bg-surface overflow-hidden">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="01" title="Stats & facts" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-md-575"
              title="Over 6+ years of expertise as a Product Designer and Developer."
              subtitle="I design and build clean, user-focused digital products by turning ideas into intuitive, high-performing experiences through thoughtful UX and modern development."
            />

            <div class="d-flex flex-sm-row flex-column ga-8">
              <div
                class="d-flex flex-column ga-3 flex-grow-1 border-t "
                v-for="(item, index) in items"
                :key="index"
              >
                <h3 class="text-60 text-dark pt-6">
                  {{ formatNumber(animatedValues[index] ?? 0, item.suffix) }}+
                </h3>
                <p
                  class="text-subtitle-2 text-dark opacity-70 font-weight-regular"
                >
                  {{ item.caption }}
                </p>
              </div>
            </div>

            <v-btn class="interactive-button" to="/about" size="lg" flat>
              <span class="label">Who am I</span>
              <v-avatar size="45" class="icon bg-white">
                <Icon icon="material-symbols:arrow-outward" height="20" />
              </v-avatar>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <img :src="BgImage" alt="icon" class="bg-icon icon-rotate d-md-block d-none" />
    <img :src="BgImageWhite" alt="icon" class="bg-icon icon-rotate d-md-block d-none" />

    <SharedSectionSpacer />
  </div>
</template>
