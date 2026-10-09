<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useServicesStore } from "@/store/services";

const store = useServicesStore();

onMounted(() => {
  if (!store.services.length) store.fetchServices();
});

const services = computed(() => store.getServices);
</script>

<template>
  <section class="bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="01"
        label="What We Offer"
        title="Comprehensive digital solutions for modern businesses"
        subtitle="We combine creativity, strategy, and technology to deliver exceptional results that drive growth and innovation."
      />

      <div class="services-grid mt-10 mt-lg-16">
        <ServicesServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          v-reveal="(index % 3) * 90"
          :service="service"
          :index="index"
        />
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 1.6vw, 24px);
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .services-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
