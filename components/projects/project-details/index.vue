<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { useProjectsGridStore } from "@/store/project";
import type { ProjectsTypes } from "@/types/projects/ProjectsType";

const route = useRoute();
const slug = String(route.params.id ?? route.path.split("/").pop());
const store = useProjectsGridStore();
const loaded = ref(false);

onMounted(async () => {
  await Promise.all([store.fetchPost(slug), store.projectGrid.length ? null : store.fetchPosts()]);
  loaded.value = true;
  if (!post.value?.project_title) {
    showError({ statusCode: 404, statusMessage: "Project not found" });
  }
});

const post = computed<ProjectsTypes>(() => {
  const selected = store.selectedProjects as ProjectsTypes;
  return slugify(selected?.project_title) === slug ? selected : {};
});

const nextProject = computed(() => {
  const list = store.projectGrid;
  const index = list.findIndex((p) => slugify(p.project_title) === slug);
  return index === -1 || list.length < 2 ? null : list[(index + 1) % list.length];
});

const website = "https://nuysdev.netlify.app/";

useHead(() => ({ title: post.value.project_title || "Project" }));
</script>

<template>
  <SharedPageHero
    :image="post.project_image"
    :title="post.project_title"
    size="lg"
    :crumbs="[{ label: 'Projects', to: '/projects' }, { label: post.project_title || '…' }]"
  >
    <template #intro>
      A <em>showcase of creativity</em>, strategy, and results explore the projects that define us.
    </template>
  </SharedPageHero>

  <!-- Project facts -->
  <section class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedAppButton to="/projects" label="All projects" icon="material-symbols:arrow-back" variant="outline" size="md" back />

      <dl class="facts mt-10">
        <div class="facts__item">
          <dt>Scope of work</dt>
          <dd>{{ [post.tag1, post.tag2].filter(Boolean).join(", ") || "—" }}</dd>
        </div>
        <div class="facts__item">
          <dt>Industry</dt>
          <dd>{{ post.industry || "—" }}</dd>
        </div>
        <div class="facts__item">
          <dt>Raised</dt>
          <dd>{{ post.raised || "—" }}</dd>
        </div>
        <div class="facts__item">
          <dt>Website</dt>
          <dd>
            <a :href="website" target="_blank" rel="noopener noreferrer" class="facts__link">{{ website }}</a>
          </dd>
        </div>
      </dl>

      <v-row class="mt-16 mt-lg-20">
        <v-col cols="12" lg="4">
          <h2 class="text-60 text-ink section-aside mb-6">Description</h2>
        </v-col>
        <v-col cols="12" lg="8">
          <div v-reveal class="project-desciption prose" v-html="post.description"></div>
        </v-col>
      </v-row>

      <div v-if="post.detail_img_1" class="gallery mt-12 mt-lg-20">
        <div v-reveal class="media gallery__wide">
          <img :src="post.detail_img_1" :alt="`${post.project_title} — project detail 1`" loading="lazy" decoding="async" />
        </div>
        <div v-if="post.detail_img_2" v-reveal class="media">
          <img :src="post.detail_img_2" :alt="`${post.project_title} — project detail 2`" loading="lazy" decoding="async" />
        </div>
        <div v-if="post.detail_img_3" v-reveal="100" class="media">
          <img :src="post.detail_img_3" :alt="`${post.project_title} — project detail 3`" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
    <SharedSectionSpacer />
  </section>

  <!-- Next project -->
  <section v-if="loaded && nextProject" class="next-project bg-surface">
    <div class="container-lg">
      <NuxtLink :to="`/projects/${slugify(nextProject.project_title)}`" class="hover-card next-project__link">
        <div>
          <p class="eyebrow mb-3">Next project</p>
          <p class="next-project__title hover-card__title">{{ nextProject.project_title }}</p>
        </div>
        <div class="media next-project__media">
          <img :src="nextProject.project_image" alt="" loading="lazy" />
          <span class="media-arrow" aria-hidden="true"><Icon icon="material-symbols:arrow-outward" /></span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
  overflow-wrap: anywhere;
}

.facts__link {
  color: var(--c-text);
  text-decoration: underline;
  text-decoration-color: rgb(var(--v-theme-primary));
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
}

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

.gallery .media img {
  height: auto;
}

.next-project {
  padding-block: clamp(3rem, 2rem + 4vw, 6rem);
}

.next-project__link {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 24px;
}

@media (min-width: 768px) {
  .next-project__link {
    grid-template-columns: 1fr minmax(260px, 420px);
    gap: 48px;
  }
}

.next-project__title {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(2.25rem, 1.4rem + 4vw, 5.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.045em;
}

.next-project__media {
  aspect-ratio: 16 / 10;
}
</style>
