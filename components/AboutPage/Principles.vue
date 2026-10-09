<template>
  <section class="principles bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <div class="section-aside principles__aside">
            <SharedSectionLabel number="04" title="Principles" />
            <div v-reveal class="mt-8 mt-lg-10">
              <SharedSectionHeading
                title="What I believe in"
                subtitle="A few principles that guide every project I take on, big or small."
              />
            </div>

            <figure v-reveal="100" class="principles__portrait d-none d-lg-block">
              <div class="media principles__photo">
                <img src="/banner/banner.jpg" alt="Raisul R. at his desk" loading="lazy" decoding="async" />
              </div>
              <figcaption class="principles__caption">
                <span class="principles__name">Raisul R.</span>
                <span class="principles__role">Product Designer &amp; Developer</span>
              </figcaption>
            </figure>
          </div>
        </v-col>

        <v-col cols="12" lg="8">
          <ol class="principles__grid">
            <li
              v-for="(item, index) in principles"
              :key="item.title"
              v-reveal="index * 90"
              class="principle"
              :class="{ 'principle--ink on-ink': index === 1 }"
            >
              <span class="principle__num" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</span>
              <div>
                <h3 class="principle__title">{{ item.title }}</h3>
                <p class="principle__desc">{{ item.description }}</p>
              </div>
            </li>
          </ol>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.principles__aside {
  padding-bottom: 32px;
}

@media (min-width: 1280px) {
  .principles__aside {
    padding-right: 32px;
  }
}

.principles__portrait {
  margin: clamp(2rem, 1.5rem + 2vw, 3rem) 0 0;
}

.principles__photo {
  aspect-ratio: 4 / 3;
  max-width: 380px;
}

.principles__photo img {
  object-position: 80% 40%;
}

.principles__caption {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 16px;
}

.principles__name {
  color: var(--c-text);
  font-weight: 700;
}

.principles__role {
  color: var(--c-text-soft);
  font-size: 0.9375rem;
}

.principles__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 768px) {
  .principles__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 1.4vw, 24px);
  }
}

.principle {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: clamp(3rem, 2rem + 4vw, 6rem);
  min-height: 100%;
  padding: clamp(24px, 1.2rem + 1vw, 36px);
  border: 1px solid var(--c-border-strong);
  border-radius: var(--radius-lg);
  background: var(--c-card);
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.5s var(--ease-out), box-shadow var(--dur) var(--ease-out);
}

.principle:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}

/* Soft lime glow in the corner */
.principle::after {
  content: "";
  position: absolute;
  top: -80px;
  right: -80px;
  z-index: -1;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(193, 255, 114, 0.18);
  filter: blur(40px);
  opacity: 0;
  transition: opacity 0.5s var(--ease-out);
}

.principle:hover::after {
  opacity: 1;
}

.principle--ink {
  border-color: transparent;
  background: rgb(var(--v-theme-secondary));
}

:global(html.dark .principle--ink) {
  border-color: var(--c-border);
}

.principle__num {
  color: rgb(var(--v-theme-secondary));
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  font-size: 0.9375rem;
  font-weight: 800;
}

.principle__title {
  margin: 0 0 10px;
  color: var(--c-text);
  font-size: clamp(1.5rem, 1.25rem + 1vw, 2.125rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.principle__desc {
  max-width: 40ch;
  margin: 0;
  color: var(--c-text-soft);
  line-height: 1.7;
}
</style>
