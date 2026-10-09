<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useServicesStore } from "@/store/services";
import { Icon } from "@iconify/vue";

const route = useRoute();
const store = useServicesStore();
const slug = String(route.params.id ?? route.path.split("/").pop());

onMounted(async () => {
  await store.fetchService(slug);
  if (!service.value?.service_title) {
    showError({ statusCode: 404, statusMessage: "Service not found" });
  }
});

const service = computed(() => {
  const selected = store.getSelectedService;
  return selected && slugify(selected.service_title) === slug ? selected : null;
});

// Plain-text description → paragraphs (no v-html needed)
const paragraphs = computed(() =>
  (service.value?.description ?? "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
);

const phases = [
  { icon: "mdi:chart-bar", description: "Conduct extensive field studies to understand how your idea think" },
  {
    icon: "mdi:palette-outline",
    description: "Create a well-polished interface prototype that breathes with elegance through design specification",
  },
  { icon: "mdi:cogs", description: "Converting the prototype into a more refined final product" },
  {
    icon: "mdi:rocket-launch",
    description: "Usability testing lets us measure the final product against our usability goals from Phase I",
  },
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

useHead(() => ({ title: service.value?.service_title || "Service" }));
</script>

<template>
  <SharedPageHero
    :image="service?.service_image || '/images/projects/project1.webp'"
    :title="service?.service_title"
    size="lg"
    :crumbs="[{ label: 'Services', to: '/services' }, { label: service?.service_title || '…' }]"
  >
    <template #intro>
      Specialized services for <em>measurable impact</em>—designed and built to elevate your brand.
    </template>
    <template #aside>
      <span v-if="service?.category" class="tag tag--glass">{{ service.category }}</span>
    </template>
  </SharedPageHero>

  <!-- Service facts -->
  <section class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedAppButton to="/services" label="All services" icon="material-symbols:arrow-back" variant="outline" size="md" back />

      <dl class="facts mt-10">
        <div class="facts__item">
          <dt>Scope of work</dt>
          <dd>
            {{ service?.category }}
            <span v-if="service?.deliverables" class="facts__sub">{{ service.deliverables }}</span>
          </dd>
        </div>
        <div class="facts__item">
          <dt>Industry</dt>
          <dd>{{ service?.category || "—" }}</dd>
        </div>
        <div class="facts__item">
          <dt>Duration</dt>
          <dd>{{ service?.duration || "—" }}</dd>
        </div>
        <div class="facts__item">
          <dt>Investment</dt>
          <dd>{{ service?.price_range || "—" }}</dd>
        </div>
      </dl>
    </div>
    <SharedSectionSpacer />
  </section>

  <!-- Overview -->
  <section class="bg-secondary">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <div class="section-aside d-flex flex-column align-start ga-8 mb-8">
            <h2 class="text-60 text-ink mb-0">Overview</h2>
            <SharedAppButton to="/contact" label="Get Started" />
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <div v-reveal class="overview-copy">
            <p v-for="(paragraph, i) in paragraphs" :key="i" :class="{ 'overview-copy__lead': i === 0 }">
              {{ paragraph }}
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </section>

  <!-- Features -->
  <section v-if="service?.features?.length" class="bg-surface section-divide">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <div class="section-aside mb-8">
            <SharedSectionHeading title="Key Features" subtitle="Everything you get with this service" />
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <ol class="features">
            <li v-for="(feature, index) in service.features" :key="index" v-reveal="(index % 2) * 80" class="feature">
              <span class="feature__num">{{ String(index + 1).padStart(2, "0") }}</span>
              <h3 class="feature__title">{{ feature }}</h3>
            </li>
          </ol>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </section>

  <!-- Process -->
  <section v-if="service?.process_steps?.length" class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <div class="process-head">
        <SharedSectionHeading title="Our Process" subtitle="A clear, step-by-step path to deliver your project" />
      </div>

      <ol class="process">
        <li
          v-for="(step, index) in service.process_steps.slice(0, 4)"
          :key="index"
          v-reveal="index * 100"
          class="process__step"
        >
          <div class="process__marker" aria-hidden="true">
            <span class="process__icon">
              <Icon :icon="phases[index]?.icon || 'mdi:circle'" width="24" height="24" />
            </span>
          </div>
          <p class="process__phase">Phase {{ romanNumerals[index] }}</p>
          <h3 class="process__title">{{ step }}</h3>
          <p class="process__desc">{{ phases[index]?.description }}</p>
        </li>
      </ol>
    </div>
    <SharedSectionSpacer />
  </section>

  <!-- Gallery -->
  <section v-if="service?.detail_img_1" class="bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <div class="gallery">
        <div v-reveal class="media gallery__wide">
          <img :src="service.detail_img_1" :alt="`${service.service_title} — detail 1`" loading="lazy" decoding="async" />
        </div>
        <div v-if="service.detail_img_2" v-reveal class="media">
          <img :src="service.detail_img_2" :alt="`${service.service_title} — detail 2`" loading="lazy" decoding="async" />
        </div>
        <div v-if="service.detail_img_3" v-reveal="100" class="media">
          <img :src="service.detail_img_3" :alt="`${service.service_title} — detail 3`" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
    <SharedSectionSpacer />
  </section>

  <!-- CTA -->
  <section class="cta bg-primary">
    <div class="container-lg cta__inner">
      <div>
        <h2 class="cta__title">Ready to get started?</h2>
        <p class="cta__text">Let's discuss how we can help bring your project to life</p>
      </div>
      <SharedAppButton to="/contact" label="Contact Us" variant="ink" />
    </div>
  </section>
</template>

<style scoped>
/* Facts */
.facts {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  border-top: 1px solid var(--c-border-strong);
}

@media (min-width: 600px) {
  .facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .facts {
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
  }
}

.facts__item {
  padding: 22px 24px 22px 0;
  border-bottom: 1px solid var(--c-border-strong);
}

@media (min-width: 1024px) {
  .facts__item {
    border-bottom: 0;
  }

  .facts__item + .facts__item {
    padding-left: 24px;
    border-left: 1px solid var(--c-border-strong);
  }
}

.facts dt {
  margin-bottom: 8px;
  color: var(--c-text-faint);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.facts dd {
  margin: 0;
  color: var(--c-text);
  font-size: 1.0625rem;
  font-weight: 600;
}

.facts__sub {
  display: block;
  margin-top: 4px;
  color: var(--c-text-soft);
  font-size: 0.9375rem;
  font-weight: 500;
}

/* Overview */
.overview-copy p {
  max-width: 64ch;
  margin: 0 0 1.25em;
  color: var(--c-text-soft);
  font-size: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  line-height: 1.8;
}

.overview-copy .overview-copy__lead {
  color: var(--c-text);
  font-size: clamp(1.25rem, 1.05rem + 0.9vw, 1.75rem);
  font-weight: 600;
  line-height: 1.45;
  letter-spacing: -0.015em;
}

/* Features */
.features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 600px) {
  .features {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.feature {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: clamp(20px, 1rem + 1vw, 28px);
  border-radius: var(--radius-lg);
  border: 1px solid var(--c-border);
  background: var(--c-card);
  transition: border-color var(--dur) var(--ease-out), transform var(--dur) var(--ease-out);
}

.feature:hover {
  border-color: var(--c-border-strong);
  transform: translateY(-3px);
}

.feature__num {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
  font-size: 0.8125rem;
  font-weight: 700;
}

.feature__title {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem);
  font-weight: 700;
  line-height: 1.3;
}

/* Process timeline */
.process-head {
  max-width: 640px;
  margin-bottom: clamp(2.5rem, 2rem + 2vw, 4rem);
}

.process {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 640px) {
  .process {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px 24px;
  }
}

@media (min-width: 1024px) {
  .process {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
  }
}

.process__step {
  position: relative;
  padding: 0 0 36px 76px;
}

@media (min-width: 640px) {
  .process__step {
    padding: 0;
  }
}

.process__marker {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 56px;
}

@media (min-width: 640px) {
  .process__marker {
    position: relative;
    width: auto;
    height: 56px;
    margin-bottom: 28px;
  }
}

/* Connector line */
.process__marker::before {
  content: "";
  position: absolute;
  left: 27px;
  top: 56px;
  bottom: 0;
  width: 1px;
  background: var(--c-border-strong);
}

@media (min-width: 640px) {
  .process__marker::before {
    left: 72px;
    right: -24px;
    top: 27px;
    bottom: auto;
    width: auto;
    height: 1px;
  }
}

.process__step:last-child .process__marker::before {
  display: none;
}

@media (min-width: 640px) and (max-width: 1023.98px) {
  .process__step:nth-child(2n) .process__marker::before {
    display: none;
  }
}

.process__icon {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.process__phase {
  margin: 0 0 8px;
  color: var(--c-text-faint);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.process__title {
  margin: 0 0 10px;
  color: var(--c-text);
  font-size: clamp(1.1875rem, 1.1rem + 0.4vw, 1.4375rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.015em;
}

.process__desc {
  max-width: 34ch;
  margin: 0;
  color: var(--c-text-soft);
  line-height: 1.6;
}

/* Gallery */
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 2vw, 32px);
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
  }
}

.gallery__wide {
  grid-column: 1 / -1;
}

/* CTA */
.cta__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 28px 48px;
  padding-block: clamp(3.5rem, 2.5rem + 4vw, 6.5rem);
}

.cta__title {
  margin: 0;
  color: rgb(var(--v-theme-secondary));
  font-size: clamp(2.25rem, 1.5rem + 3.2vw, 4.5rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.cta__text {
  margin: 14px 0 0;
  color: rgba(var(--v-theme-secondary), 0.78);
  font-size: clamp(1rem, 0.96rem + 0.3vw, 1.25rem);
}
</style>
