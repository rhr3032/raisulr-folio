<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useblogGridStore } from "@/store/blogs";

const store = useblogGridStore();

onMounted(() => {
  if (!store.blogGrid.length) store.fetchPosts();
});

const getPosts = computed(() => store.blogGrid);
</script>

<template>
  <section class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <div class="blog-head">
        <SharedSectionLabel number="01" title="Latest articles" />
        <p v-if="getPosts.length" class="blog-head__count">{{ String(getPosts.length).padStart(2, "0") }} articles</p>
      </div>

      <div class="blog-grid">
        <BlogsBlogCard
          v-for="(blog, index) in getPosts"
          :key="blog.id"
          v-reveal="index === 0 ? 0 : ((index - 1) % 3) * 90"
          :blog="blog"
          :featured="index === 0"
          heading-level="h2"
          :class="{ 'blog-grid__featured': index === 0 }"
        />
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.blog-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 24px;
  margin-bottom: clamp(2rem, 1.5rem + 2vw, 3.5rem);
  border-bottom: 1px solid var(--c-border);
}

.blog-head__count {
  margin: 0;
  color: var(--c-text-soft);
  font-weight: 600;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 2rem + 1.5vw, 3.5rem) clamp(20px, 2vw, 32px);
}

@media (min-width: 768px) {
  .blog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .blog-grid__featured {
    grid-column: 1 / -1;
    --blog-ratio: 21 / 9;
  }
}

@media (min-width: 1280px) {
  .blog-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
