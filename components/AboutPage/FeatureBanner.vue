<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Bg from "/images/background/feature-img.jpg";

const items = ["Branding", "Web development", "Agency", "Content creation", "SaaS", "Motion & 3d modeling", "Photography"];
</script>

<template>
  <section aria-label="What we do">
    <div class="feature-media">
      <img :src="Bg" alt="" loading="lazy" decoding="async" width="1920" height="854" />
    </div>
    <div class="marquee feature-marquee bg-primary" style="--marquee-duration: 50s">
      <div class="marquee__track">
        <div v-for="copy in 2" :key="copy" class="feature-marquee__set" :aria-hidden="copy === 2">
          <template v-for="round in 2" :key="round">
            <span v-for="item in items" :key="`${round}-${item}`" class="feature-marquee__item">
              {{ item }}
              <Icon icon="ci:dot-05-xl" width="22" height="22" aria-hidden="true" />
            </span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-media {
  line-height: 0;
  background: rgb(var(--v-theme-secondary));
}

.feature-media img {
  width: 100%;
  height: clamp(320px, 45vw, 760px);
  object-fit: cover;
}

.feature-marquee {
  -webkit-mask-image: none;
  mask-image: none;
  padding-block: clamp(18px, 1rem + 1vw, 30px);
}

.feature-marquee__set {
  display: flex;
  align-items: center;
}

.feature-marquee__item {
  display: inline-flex;
  align-items: center;
  gap: clamp(20px, 2vw, 32px);
  padding-right: clamp(20px, 2vw, 32px);
  color: rgb(var(--v-theme-secondary));
  font-size: clamp(1.375rem, 1.1rem + 1.2vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  white-space: nowrap;
}

.feature-marquee__item svg {
  opacity: 0.3;
}
</style>
