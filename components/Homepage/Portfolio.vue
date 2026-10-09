<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="position-relative bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="02"
        label="Portfolio"
        title="Featured projects"
        subtitle="A glimpse into my creativity—exploring innovative designs, successful collaborations, and transformative digital experiences."
      >
        <div>
          <NuxtLink to="/projects" class="link-arrow">
            View all projects
            <Icon icon="material-symbols:arrow-outward" width="20" height="20" aria-hidden="true" />
          </NuxtLink>
        </div>
      </SharedSectionIntro>

      <div class="mt-10 mt-lg-16">
        <ProjectsProjectGrid />
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>
