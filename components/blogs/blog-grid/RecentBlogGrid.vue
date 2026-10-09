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
  <div class="recent-grid">
    <BlogsBlogCard
      v-if="getPosts[0]"
      v-reveal
      :blog="getPosts[0]"
      featured
      class="recent-grid__featured"
    />
    <BlogsBlogCard
      v-for="(blog, index) in getPosts.slice(1, 3)"
      :key="blog.id"
      v-reveal="(index + 1) * 100"
      :blog="blog"
      class="recent-grid__item"
    />
  </div>
</template>

<style scoped>
.recent-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 2rem + 1.5vw, 3rem) 24px;
}

@media (min-width: 768px) {
  .recent-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .recent-grid__featured {
    grid-column: 1 / -1;
    --blog-ratio: 16 / 8;
  }
}

@media (min-width: 1280px) {
  .recent-grid {
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: clamp(20px, 2vw, 32px);
  }

  .recent-grid__featured {
    grid-column: auto;
  }

  .recent-grid__featured,
  .recent-grid__item {
    --blog-ratio: auto;
    --blog-height: clamp(360px, 30vw, 540px);
  }
}
</style>
