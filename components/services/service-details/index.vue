<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useServicesStore } from "@/store/services";
import { Icon } from "@iconify/vue";
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";

const route = useRoute();
const store = useServicesStore();
const slug = route.path.split("/").pop();

onMounted(() => {
  if (slug) {
    store.fetchService(slug);
  }
});

const service = computed(() => store.getSelectedService);

const formattedDescription = computed(() => {
  if (!service.value?.description) return "";
  return service.value.description.replace(/\n/g, "<br>");
});

// Helper functions for circular process design
const getRomanNumeral = (num: number): string => {
  const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
  return numerals[num - 1] || num.toString();
};

const getPhaseIcon = (index: number): string => {
  const icons = [
    'mdi:chart-bar',           // Analysis
    'mdi:palette-outline',     // Design
    'mdi:cogs',               // Implementation
    'mdi:rocket-launch'       // Deployment
  ];
  return icons[index] || 'mdi:circle';
};

const getPhaseDescription = (index: number): string => {
  const descriptions = [
    'Conduct extensive field studies to understand how your idea think',
    'Create a well-polished interface prototype that breathes with elegance through design specification',
    'Converting the prototype into a more refined final product',
    'Usability testing lets us measure the final product against our usability goals from Phase I'
  ];
  return descriptions[index] || '';
};
</script>

<template>
  <div>
    <!-- Hero Banner (matches projects/blog layout) -->
    <div class="common-banner position-relative">
      <v-img
        :src="service?.service_image || '/images/projects/project1.webp'"
        cover
        height="650"
        class="w-100"
      ></v-img>
      <div class="banner-overlay"></div>

      <div class="container-lg">
        <div class="common-banner-content">
          <div class="mw-460">
            <div class="d-flex ga-6">
              <img
                :src="AnimatedIcon"
                alt="icon"
                height="44"
                width="44"
                class="icon-rotate"
              />
              <p class="text-white text-subtitle-1 mb-0">
                <span class="opacity-70">Specialized services for</span>
                <span class="text-primary opacity-100"> measurable impact</span>
                <span class="opacity-70">—designed and built to elevate your brand.</span>
              </p>
            </div>
          </div>

          <div class="d-flex flex-md-row flex-column ga-5 align-md-end align-start mt-md-6 mt-3">
            <h1 class="text-white text-h1 font-weight-bold mb-0">
              {{ service?.service_title }}
            </h1>
            <div class="d-flex ga-3 align-center" v-if="service?.category">
              <v-chip
                color="primary"
                variant="tonal"
                class="text-white"
              >
                {{ service.category }}
              </v-chip>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Overview -->
    <div class="bg-darkgray">
      <SharedSectionSpacer />

      <div class="container-lg">
        <v-btn class="interactive-button-small" to="/services" size="lg" flat>
          <v-avatar size="30" class="icon bg-white">
            <Icon icon="material-symbols-light:arrow-back-rounded" height="20" />
          </v-avatar>
          <span class="label">Back</span>
        </v-btn>

        <div class="d-flex flex-md-row flex-column ga-10 mt-10">
          <div class="pr-md-10 pr-4 border-e">
            <p class="text-subtitle-2 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">Scope of work</p>
            <div class="d-flex ga-2 mt-2 flex-wrap">
              <span class="text-subtitle-1 font-weight-medium">{{ service?.category }}</span>
              <span
                v-if="service?.deliverables"
                class="text-subtitle-1 font-weight-medium"
              >
                {{ service.deliverables }}
              </span>
            </div>
          </div>
          <div class="pr-md-10 pr-4 border-e">
            <p class="text-subtitle-2 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">Industry</p>
            <div class="d-flex ga-2 mt-2">
              <span class="text-subtitle-1 font-weight-medium">{{ service?.category || '—' }}</span>
            </div>
          </div>
          <div class="pr-md-10 pr-4 border-e">
            <p class="text-subtitle-2 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">Duration</p>
            <div class="d-flex ga-2 mt-2">
              <span class="text-subtitle-1 font-weight-medium">{{ service?.duration }}</span>
            </div>
          </div>
          <div class="">
            <p class="text-subtitle-2 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">Investment</p>
            <div class="d-flex ga-2 mt-2">
              <span class="text-subtitle-1 font-weight-medium">{{ service?.price_range }}</span>
            </div>
          </div>
        </div>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- Description Section -->
    <div class="bg-dark-section">
      <SharedSectionSpacer />
      <div class="container-lg">
        <v-row>
          <v-col cols="12" lg="4">
            <h2 class="text-60 text-white mb-6">Overview</h2>

            <v-btn class="interactive-button" to="/contact" size="lg" flat>
              <span class="label">Get Started</span>
              <v-avatar size="45" class="icon bg-white">
                <Icon icon="material-symbols:arrow-outward" height="20" />
              </v-avatar>
            </v-btn>
          </v-col>

          <v-col cols="12" lg="8">
            <div class="service-description text-h6 text-white" v-html="formattedDescription"></div>
          </v-col>
        </v-row>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- Features Section -->
    <div class="bg-darkgray" v-if="service?.features && service.features.length > 0">
      <SharedSectionSpacer />
      <div class="container-lg">
        <v-row>
          <v-col cols="12" lg="4">
            <h2 class="text-60 text-dark mb-4">Key Features</h2>
            <p class="text-subtitle-1 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">
              Everything you get with this service
            </p>
          </v-col>

          <v-col cols="12" lg="8">
            <v-row>
              <v-col
                v-for="(feature, index) in service.features"
                :key="index"
                cols="12"
                sm="6"
              >
                <div class="feature-item">
                  <div class="feature-number">{{ String(index + 1).padStart(2, '0') }}</div>
                  <h4 class="text-h6 font-weight-bold text-dark">{{ feature }}</h4>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- Process Section -->
    <div class="bg-dark-section" v-if="service?.process_steps && service.process_steps.length > 0">
      <SharedSectionSpacer />
      <div class="container-lg">
        <div class="text-center mb-12">
          <h2 class="text-60 text-white mb-4">Our Process</h2>
          <p 
            class="text-h6 text-white opacity-70" 
          >
            A clear, step-by-step path to deliver your project
          </p>
        </div>

        <div class="circular-process">
          <!-- Center Circle -->
          <div class="process-center">
            <div class="center-icon">
              <Icon icon="mdi:cog-outline" height="40" />
            </div>
            <h3 class="center-title">Service</h3>
            <p class="center-subtitle">Design & Development</p>
          </div>

          <!-- Process Items (4 steps) -->
          <div
            v-for="(step, index) in service.process_steps.slice(0, 4)"
            :key="index"
            :class="['process-phase', `phase-${index + 1}`]"
          >
            <div class="phase-connector"></div>
            <div class="phase-node"></div>

            <div class="phase-content">
              <div class="phase-icon">
                <Icon
                  :icon="getPhaseIcon(index)"
                  height="32"
                  class="text-primary"
                />
              </div>

              <div class="phase-text">
                <span class="phase-number">Phase {{ getRomanNumeral(index + 1) }}</span>
                <h4 class="phase-title">{{ step }}</h4>
                <p class="phase-desc">{{ getPhaseDescription(index) }}</p>
              </div>
            </div>
          </div>

          <!-- Decorative Connection Lines -->
          <svg class="connection-svg" viewBox="0 0 600 600">
            <circle
              cx="300"
              cy="300"
              r="200"
              fill="none"
              stroke="url(#gradient)"
              stroke-width="4"
              stroke-dasharray="8 8"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:rgb(197,255,114);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(255,165,0);stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- Gallery Section -->
    <div class="bg-white" v-if="service?.detail_img_1">
      <SharedSectionSpacer />
      <div class="container-lg">
        <v-row>
          <v-col cols="12">
            <div class="gallery-image mb-8">
              <img :src="service.detail_img_1" alt="service detail" class="w-100" />
            </div>
          </v-col>

          <v-col cols="12" md="6" v-if="service?.detail_img_2">
            <div class="gallery-image">
              <img :src="service.detail_img_2" alt="service detail" class="w-100" />
            </div>
          </v-col>

          <v-col cols="12" md="6" v-if="service?.detail_img_3">
            <div class="gallery-image">
              <img :src="service.detail_img_3" alt="service detail" class="w-100" />
            </div>
          </v-col>
        </v-row>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- CTA Section -->
    <div class="cta-section bg-primary">
      <div class="container-lg">
        <div class="text-center py-16">
          <h2 class="text-60 text-dark mb-4">Ready to get started?</h2>
          <p 
            class="text-h6 text-dark mb-8" 
            :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-80' : 'opacity-90'"
          >
            Let's discuss how we can help bring your project to life
          </p>

          <v-btn class="interactive-button-dark" to="/contact" size="lg" flat>
            <span class="label">Contact Us</span>
            <v-avatar size="45" class="icon bg-dark">
              <Icon icon="material-symbols:arrow-outward" class="text-white" height="20" />
            </v-avatar>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: rgb(var(--v-theme-primary));
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.service-description {
  line-height: 1.8;
}

.service-description :deep(p) {
  margin-bottom: 1.5rem;
}

.feature-item {
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 28px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  overflow: hidden;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(var(--v-theme-primary), 0.2);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.feature-number {
  display: inline-flex;
  width: 40px;
  height: 40px;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 14px;
  color: rgb(var(--v-theme-primary));
  margin-bottom: 14px;
  border: none;
  box-shadow: none;
}

/* Circular Process Design */
.circular-process {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 700px;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.connection-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.3;
}

/* Center Circle */
.process-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 3px solid rgba(var(--v-theme-primary), 0.3);
  z-index: 2;
  gap: 8px;
}

.center-icon {
  width: 60px;
  height: 60px;
  background: rgba(var(--v-theme-primary), 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--v-theme-primary));
  margin-bottom: 8px;
}

.center-title {
  font-size: 28px;
  font-weight: 800;
  color: #111;
  margin: 0;
}

.center-subtitle {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
}

/* Process Phase Positioning */
.process-phase {
  position: absolute;
  z-index: 1;
}

/* Phase 1 - Top Left */
.phase-1 {
  top: 10%;
  left: 8%;
}

/* Phase 2 - Top Right */
.phase-2 {
  top: 10%;
  right: 8%;
}

/* Phase 3 - Bottom Right */
.phase-3 {
  bottom: 10%;
  right: 8%;
}

/* Phase 4 - Bottom Left */
.phase-4 {
  bottom: 10%;
  left: 8%;
}

/* Phase Node */
.phase-node {
  position: absolute;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), rgba(255, 140, 0, 0.8));
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 6px rgba(var(--v-theme-primary), 0.15);
  z-index: 3;
}

/* Phase 1 & 2 - nodes on top */
.phase-1 .phase-node {
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
}

.phase-2 .phase-node {
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
}

/* Phase 3 & 4 - nodes on bottom */
.phase-3 .phase-node {
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
}

.phase-4 .phase-node {
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
}

/* Phase Connector Line */
.phase-connector {
  position: absolute;
  width: 3px;
  height: 80px;
  background: linear-gradient(to bottom, rgba(var(--v-theme-primary), 0.8), transparent);
  z-index: 1;
}

.phase-1 .phase-connector,
.phase-2 .phase-connector {
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
}

.phase-3 .phase-connector,
.phase-4 .phase-connector {
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
}

/* Phase Content */
.phase-content {
  background: linear-gradient(135deg, #ffffff, #fafbfc);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(0, 0, 0, 0.05);
  max-width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.phase-content:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(var(--v-theme-primary), 0.3);
}

.phase-icon {
  width: 64px;
  height: 64px;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border: 2px solid rgba(var(--v-theme-primary), 0.2);
}

.phase-text {
  text-align: left;
}

.phase-number {
  font-size: 12px;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 8px;
}

.phase-title {
  font-size: 20px;
  font-weight: 800;
  color: #111;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.phase-desc {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
  line-height: 1.6;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .circular-process {
    height: auto;
    min-height: 1200px;
    padding: 20px;
  }

  .process-center {
    width: 200px;
    height: 200px;
  }

  .center-icon {
    width: 50px;
    height: 50px;
  }

  .center-title {
    font-size: 22px;
  }

  .center-subtitle {
    font-size: 12px;
  }

  .phase-content {
    max-width: 240px;
    padding: 18px;
  }

  .phase-icon {
    width: 52px;
    height: 52px;
  }

  .phase-title {
    font-size: 18px;
  }

  .phase-desc {
    font-size: 13px;
  }

  .phase-node {
    width: 20px;
    height: 20px;
  }

  .phase-connector {
    height: 60px;
  }
}

.process-label {
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0,0,0,0.5);
  margin-bottom: 6px;
}

.process-title {
  font-size: 18px;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.gallery-image {
  border-radius: 16px;
  overflow: hidden;
  line-height: 0;
}

.gallery-image img {
  transition: transform 0.6s ease;
}

.gallery-image:hover img {
  transform: scale(1.05);
}

.cta-section {
  position: relative;
  overflow: hidden;
  background-color: rgb(var(--v-theme-primary)) !important;
}

.cta-section::before,
.cta-section::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.cta-section::before {
  background: radial-gradient(60% 60% at 30% 20%, rgba(255,255,255,0.28), transparent 65%);
}

.cta-section::after {
  background: linear-gradient(135deg, rgba(0,0,0,0.08), transparent 35%, rgba(0,0,0,0.12));
}

.cta-section h2,
.cta-section p {
  color: rgb(var(--v-theme-secondary)) !important;
}

.mw-600 {
  max-width: 600px;
}

.bg-dark-section {
  background-color: #1F2A2E;
  color: white;
}

.bg-dark-section .service-description :deep(p) {
  color: white;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .service-detail-banner-content {
    padding: 60px 0;
  }
}

/* Dark mode - style cards only, rely on global text fixes */
:deep(.dark) {
  .process-center {
    background: linear-gradient(135deg, rgba(39, 51, 56, 0.9), rgba(31, 42, 46, 1));
    border-color: rgba(var(--v-theme-primary), 0.4);
  }

  .center-title {
    color: rgb(var(--v-theme-white));
  }

  .center-subtitle {
    color: rgba(255, 255, 255, 0.7);
  }

  .phase-content {
    background: linear-gradient(135deg, rgba(39, 51, 56, 0.9), rgba(31, 42, 46, 1));
    border-color: rgba(255, 255, 255, 0.1);
  }

  .phase-title {
    color: rgb(var(--v-theme-white));
  }

  .phase-desc {
    color: rgba(255, 255, 255, 0.7);
  }

  .feature-item {
    background: linear-gradient(135deg, rgba(39, 51, 56, 0.8), rgba(31, 42, 46, 0.9)) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  .feature-item h4,
  .feature-item .feature-number {
    visibility: hidden;
    opacity: 0;
  }

  .process-card {
    background: linear-gradient(135deg, rgba(39, 51, 56, 0.9), rgba(31, 42, 46, 1)) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }
}
</style>
