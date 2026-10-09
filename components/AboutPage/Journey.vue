<template>
  <section class="journey bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <div class="section-aside journey__aside">
            <SharedSectionLabel number="02" title="Experience" />
            <div v-reveal class="mt-8 mt-lg-10">
              <SharedSectionHeading
                title="My journey"
                subtitle="From building small sites for friends to designing and shipping full products—here’s how I got here."
              />
            </div>
          </div>
        </v-col>

        <v-col cols="12" lg="8">
          <ol class="timeline">
            <li
              v-for="(item, index) in journey"
              :key="item.period"
              v-reveal="index * 80"
              class="timeline__item"
              :class="{ 'is-current': item.current }"
            >
              <span class="timeline__node" aria-hidden="true"></span>

              <p class="timeline__period">
                {{ item.period }}
                <span v-if="item.current" class="tag tag--lime">Now</span>
              </p>

              <div class="timeline__card">
                <h3 class="timeline__role">{{ item.role }}</h3>
                <p class="timeline__place">{{ item.place }}</p>
                <p class="timeline__desc">{{ item.description }}</p>
                <ul class="timeline__tags">
                  <li v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</li>
                </ul>
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
.journey__aside {
  padding-bottom: 32px;
}

@media (min-width: 1280px) {
  .journey__aside {
    padding-right: 32px;
  }
}

.timeline {
  --node: 14px;
  --rail-x: 6px;

  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Vertical rail */
.timeline::before {
  content: "";
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: var(--rail-x);
  width: 2px;
  background: linear-gradient(180deg, rgb(var(--v-theme-primary)) 0%, var(--c-border-strong) 30%, var(--c-border) 100%);
}

.timeline__item {
  position: relative;
  display: grid;
  gap: 12px;
  padding-left: clamp(36px, 2rem + 1vw, 52px);
}

.timeline__item + .timeline__item {
  margin-top: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);
}

@media (min-width: 768px) {
  .timeline__item {
    grid-template-columns: 170px minmax(0, 1fr);
    gap: 32px;
  }
}

.timeline__node {
  position: absolute;
  top: 6px;
  left: calc(var(--rail-x) + 1px - var(--node) / 2);
  width: var(--node);
  height: var(--node);
  border-radius: 50%;
  border: 2px solid var(--c-border-strong);
  background: var(--c-page);
}

.is-current .timeline__node {
  border-color: rgb(var(--v-theme-primary));
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 0 0 6px rgba(193, 255, 114, 0.25);
}

.timeline__period {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding-top: 2px;
  color: var(--c-text-soft);
  font-size: 0.9375rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

@media (min-width: 768px) {
  .timeline__period {
    flex-direction: column;
    align-items: flex-start;
  }
}

.timeline__card {
  padding: clamp(22px, 1.1rem + 1vw, 32px);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  background: var(--c-card);
  transition: border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out),
    transform 0.5s var(--ease-out);
}

.timeline__item:hover .timeline__card {
  border-color: var(--c-border-strong);
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
}

.timeline__role {
  margin: 0;
  color: var(--c-text);
  font-size: clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.timeline__place {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0 0;
  color: var(--c-text-faint);
  font-weight: 600;
}

.timeline__place::before {
  content: "";
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: rgb(var(--v-theme-primary));
}

.timeline__desc {
  margin: 16px 0 20px;
  color: var(--c-text-soft);
  line-height: 1.7;
}

.timeline__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
