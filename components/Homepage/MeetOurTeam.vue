<script setup lang="ts">
import { Icon } from "@iconify/vue";
import img1 from "/images/team/team-img-1.png";
import img2 from "/images/team/team-img-2.png";
import img3 from "/images/team/team-img-3.png";
import img4 from "/images/team/team-img-4.png";

const items = [
  {
    name: "Martha Finley",
    role: "Creative Director",
    image: img1,
  },
  {
    name: "Floyd Miles",
    role: "Marketing Strategist",
    image: img2,
  },
  {
    name: "Glenna Snyder",
    role: "Lead Designer",
    image: img3,
  },
  {
    name: "Albert Flores",
    role: "UX/UI Developer",
    image: img4,
  },
];
</script>

<template>
  <section class="meet-team bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="06"
        label="The team"
        title="Meet our team"
        subtitle="Our team is committed to redefining digital experiences through innovative web solutions while fostering a diverse and collaborative environment."
      />

      <div class="team-grid mt-10 mt-lg-16">
        <article v-for="(item, index) in items" :key="item.name" v-reveal="(index % 4) * 80" class="team-member">
          <div class="media team-member__media">
            <img :src="item.image" :alt="item.name" loading="lazy" decoding="async" />
            <div class="team-member__social">
              <a href="#" class="team-member__icon" :aria-label="`${item.name} on Twitter`">
                <Icon icon="garden:twitter-stroke-12" height="18" />
              </a>
              <a href="#" class="team-member__icon" :aria-label="`${item.name} on Behance`">
                <Icon icon="simple-icons:behance" height="18" />
              </a>
              <a href="#" class="team-member__icon" :aria-label="`${item.name} on LinkedIn`">
                <Icon icon="entypo-social:linkedin" height="18" />
              </a>
            </div>
          </div>
          <h3 class="team-member__name">{{ item.name }}</h3>
          <p class="team-member__role">{{ item.role }}</p>
        </article>
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px 24px;
}

@media (min-width: 600px) {
  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .team-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.team-member__media {
  aspect-ratio: 4 / 5;
}

.team-member__social {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity var(--dur) var(--ease-out), transform var(--dur) var(--ease-out);
}

.team-member:hover .team-member__social,
.team-member:focus-within .team-member__social {
  opacity: 1;
  transform: none;
}

.team-member__icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff;
  color: rgb(var(--v-theme-secondary));
  transition: background-color var(--dur-fast) ease;
}

.team-member__icon:hover {
  background: rgb(var(--v-theme-primary));
}

.team-member__name {
  margin: 18px 0 4px;
  color: var(--c-text);
  font-size: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
  font-weight: 700;
}

.team-member__role {
  margin: 0;
  color: var(--c-text-soft);
}
</style>
