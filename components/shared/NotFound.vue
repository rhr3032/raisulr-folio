<script setup lang="ts">
withDefaults(
  defineProps<{
    statusCode?: number;
    title?: string;
    message?: string;
  }>(),
  {
    statusCode: 404,
    title: "Oops! Page Not Found",
    message: "The page you’re looking for doesn’t exist or may have been moved.",
  }
);

const emit = defineEmits<{ home: [] }>();
</script>

<template>
  <section class="not-found">
    <div class="container-lg not-found__inner">
      <!-- Inline (theme-aware) version of /images/background/404.svg -->
      <svg class="not-found__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 88" width="320" height="116" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M46.024 84.5V67.34H3.784v-9.36L39.304.5h18.6v56.4h12v10.44h-12V84.5h-11.88Zm-29.16-27.6h29.76V8.42h-.48L16.864 56.9Zm150.912-7.61c-3.052 21.319-21.25 36.735-42.147 36.917l-1.427-6.937-.717-3.486-1.196-5.813 5.914-8.537 6.363-9.184L116.9 32.844l13.496-11.595 2.668-2.292-2.301-7.918-1.06-3.649-2.074-7.14c1.217.07 2.439.193 3.668.369 23.513 3.366 39.846 25.156 36.479 48.67Z"/><path fill="rgb(var(--v-theme-primary))" d="m119.905 70.651 5.724 15.557a43.416 43.416 0 0 1-6.515.54c-23.752.177-43.15-18.934-43.329-42.686C75.617 21.55 92.774 2.948 114.788.915l8.164 17.687-13.912 16.142 20.362 16.553-9.497 19.354Z"/><path fill="rgb(var(--v-theme-primary))" d="M160.106 34.001a35.97 35.97 0 0 0-6.029-12.45 35.963 35.963 0 0 0-10.258-9.28 35.87 35.87 0 0 0-14.115-4.88l1.06 3.648a32.36 32.36 0 0 1 11.273 4.19 32.543 32.543 0 0 1 9.277 8.394 32.512 32.512 0 0 1 5.453 11.259 32.418 32.418 0 0 1 .738 12.937 32.522 32.522 0 0 1-12.732 21.487 32.533 32.533 0 0 1-11.259 5.453 32.283 32.283 0 0 1-10.029 1.024l.717 3.487a35.72 35.72 0 0 0 10.193-1.172 35.95 35.95 0 0 0 12.45-6.03 35.974 35.974 0 0 0 14.078-23.76 35.86 35.86 0 0 0-.817-14.307Z"/><path fill="currentColor" d="M123.184 79.56a36.471 36.471 0 0 1-4.121.263 35.867 35.867 0 0 1-14.067-2.73 35.964 35.964 0 0 1-11.528-7.648 35.966 35.966 0 0 1-7.818-11.41 35.863 35.863 0 0 1-2.942-14.026 35.86 35.86 0 0 1 2.732-14.067 35.967 35.967 0 0 1 7.646-11.527 35.961 35.961 0 0 1 11.412-7.82 35.806 35.806 0 0 1 13.406-2.93l1.593 3.45a32.422 32.422 0 0 0-13.63 2.652 32.525 32.525 0 0 0-10.321 7.071 32.535 32.535 0 0 0-6.917 10.425 32.43 32.43 0 0 0-2.467 12.72 32.43 32.43 0 0 0 2.658 12.683 32.536 32.536 0 0 0 7.072 10.32 32.53 32.53 0 0 0 23.145 9.385c.98-.008 1.953-.058 2.918-.151l1.229 3.34Zm92.272 4.94V67.34h-42.24v-9.36L208.736.5h18.6v56.4h12v10.44h-12V84.5h-11.88Zm-29.16-27.6h29.76V8.42h-.48l-29.28 48.48Z"/></svg>
      <p class="eyebrow mb-0">Error {{ statusCode }}</p>
      <h1 class="not-found__title">{{ title }}</h1>
      <p class="not-found__text">{{ message }}</p>
      <div class="not-found__actions">
        <SharedAppButton label="Back To Home" to="/" @click="emit('home')" />
        <SharedAppButton label="Contact" to="/contact" variant="outline" @click="emit('home')" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  display: grid;
  place-items: center;
  min-height: 100svh;
  padding-block: 64px;
  background: var(--c-page);
  color: var(--c-text);
}

.not-found__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
}

.not-found__img {
  color: var(--c-text);
  width: min(320px, 70vw);
  height: auto;
  margin-bottom: 12px;
}

.not-found__title {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(2rem, 1.45rem + 2.4vw, 3.5rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.not-found__text {
  max-width: 44ch;
  margin: 0;
  color: var(--c-text-soft);
}

.not-found__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
}
</style>
