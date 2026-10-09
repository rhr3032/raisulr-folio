<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useblogGridStore } from "@/store/blogs";
import type { BlogTypes } from "@/types/blog/BlogTypes";

const route = useRoute();
const slug = String(route.params.id ?? route.path.split("/").pop());
const store = useblogGridStore();

onMounted(async () => {
  await Promise.all([store.fetchPost(slug), store.blogGrid.length ? null : store.fetchPosts()]);
  if (!post.value?.blog_title) {
    showError({ statusCode: 404, statusMessage: "Article not found" });
  }
});

const post = computed<BlogTypes>(() => {
  const selected = store.selectedblog as BlogTypes;
  return slugify(selected?.blog_title) === slug ? selected : {};
});

const morePosts = computed(() => store.blogGrid.filter((b) => slugify(b.blog_title) !== slug).slice(0, 3));

useHead(() => ({ title: post.value.blog_title || "Article" }));
</script>

<template>
  <SharedPageHero
    :image="post.blog_image"
    :title="post.blog_title"
    size="lg"
    badge-label="Read"
    :crumbs="[{ label: 'Blog', to: '/blog' }, { label: post.blog_title || '…' }]"
  >
    <template #intro>
      In a world where standing still means falling behind, we knew it was time for a bold transformation..
    </template>
    <template #aside>
      <span v-if="post.blog_date" class="tag tag--glass">
        <time>{{ post.blog_date }}</time>
      </span>
    </template>
  </SharedPageHero>

  <article class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedAppButton to="/blog" label="All articles" icon="material-symbols:arrow-back" variant="outline" size="md" back />

      <v-row class="mt-10 mt-lg-14">
        <v-col cols="12" lg="4">
          <p class="eyebrow section-aside">Scroll to read</p>
        </v-col>
        <v-col cols="12" lg="8">
          <p v-reveal class="article__lead">
            At nuysdev, we're always evolving, and our latest brand redesign is a bold step forward. This
            transformation reflects our commitment to innovation and growth, both in how we look and how we connect
            with you.
          </p>
        </v-col>
      </v-row>

      <div v-if="post.blog_inner_image" v-reveal class="media article__media mt-10 mt-lg-16">
        <img :src="post.blog_inner_image" :alt="post.blog_title" loading="lazy" decoding="async" />
      </div>

      <v-row class="mt-10 mt-lg-16">
        <v-col cols="12" lg="8" offset-lg="4">
          <div v-reveal class="project-desciption prose" v-html="post.blog_description"></div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </article>

  <section v-if="morePosts.length" class="bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <div class="more-head">
        <h2 class="text-h2 text-ink mb-0">More articles</h2>
        <NuxtLink to="/blog" class="link-arrow">View all articles</NuxtLink>
      </div>
      <div class="more-grid">
        <BlogsBlogCard v-for="(blog, index) in morePosts" :key="blog.id" v-reveal="index * 90" :blog="blog" />
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.article__lead {
  max-width: 40ch;
  margin: 0;
  color: var(--c-text);
  font-size: clamp(1.375rem, 1.1rem + 1.2vw, 2.125rem);
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.article__media {
  aspect-ratio: 16 / 9;
}

@media (max-width: 599.98px) {
  .article__media {
    aspect-ratio: 4 / 3;
  }
}

.more-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: clamp(2rem, 1.5rem + 2vw, 3.5rem);
}

.more-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 2rem + 1.5vw, 3rem) clamp(20px, 2vw, 32px);
}

@media (min-width: 768px) {
  .more-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
