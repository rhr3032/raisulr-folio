<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useProjectsGridStore } from "@/store/project";

// Homepage "Featured projects" – an editorial, alternating grid of the first
// four projects. The full list lives on /projects.
const FEATURED_COUNT = 4;

const store = useProjectsGridStore();

onMounted(() => {
  if (!store.projectGrid.length) store.fetchPosts();
});

const featured = computed(() => store.projectGrid.slice(0, FEATURED_COUNT));
</script>

<template>
  <div class="featured-grid">
    <ProjectsProjectCard
      v-for="(project, index) in featured"
      :key="project.id"
      v-reveal="(index % 2) * 120"
      :project="project"
      :index="index"
      class="featured-grid__item"
      :class="`featured-grid__item--${index % 4}`"
    />
  </div>
</template>

<style scoped>
.featured-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 2rem + 2vw, 4rem) 24px;
}

@media (min-width: 768px) {
  .featured-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: clamp(20px, 2vw, 32px);
  }

  .featured-grid__item {
    --card-ratio: auto;
    --card-height: clamp(280px, 34vw, 600px);
  }

  .featured-grid__item--0,
  .featured-grid__item--3 {
    grid-column: span 7;
  }

  .featured-grid__item--1,
  .featured-grid__item--2 {
    grid-column: span 5;
  }

  /* Gentle stagger so the grid reads as an editorial layout */
  .featured-grid__item--1 {
    margin-top: clamp(40px, 6vw, 120px);
  }

  .featured-grid__item--3 {
    margin-top: clamp(40px, 6vw, 120px);
  }
}
</style>
