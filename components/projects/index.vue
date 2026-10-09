<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useProjectsGridStore } from "@/store/project";

const store = useProjectsGridStore();

onMounted(() => {
  if (!store.projectGrid.length) store.fetchPosts();
});

const getPosts = computed(() => store.projectGrid);
</script>

<template>
  <section class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <div class="projects-head">
        <SharedSectionLabel number="01" title="Selected work" />
        <p v-if="getPosts.length" class="projects-head__count">
          {{ String(getPosts.length).padStart(2, "0") }} projects
        </p>
      </div>

      <div class="projects-grid">
        <ProjectsProjectCard
          v-for="(project, index) in getPosts"
          :key="project.id"
          v-reveal="(index % 2) * 120"
          :project="project"
          :index="index"
          heading-level="h2"
          class="projects-grid__item"
        />
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.projects-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 24px;
  margin-bottom: clamp(2rem, 1.5rem + 2vw, 3.5rem);
  border-bottom: 1px solid var(--c-border);
}

.projects-head__count {
  margin: 0;
  color: var(--c-text-soft);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 2rem + 2vw, 4rem) clamp(20px, 2.4vw, 40px);
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* Staggered second column for an editorial rhythm */
  .projects-grid__item:nth-child(even) {
    transform: translateY(clamp(48px, 8vw, 140px));
  }

  .projects-grid {
    padding-bottom: clamp(48px, 8vw, 140px);
  }

  .projects-grid__item {
    --card-ratio: 5 / 4;
  }
}
</style>
