<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="10"
        label="Resources"
        title="Recent news"
        subtitle="Explore the latest trends, bold projects, and creative insights from our agency—shaping the future of branding, digital experiences, and storytelling."
      >
        <div>
          <NuxtLink to="/blog" class="link-arrow">
            View all articles
            <Icon icon="material-symbols:arrow-outward" width="20" height="20" aria-hidden="true" />
          </NuxtLink>
        </div>
      </SharedSectionIntro>

      <div class="mt-10 mt-lg-16">
        <BlogsBlogGridRecentBlogGrid />
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>
