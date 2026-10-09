<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(defineProps<{ number?: string }>(), { number: "11" });

const { isDark } = useAppTheme();
</script>

<template>
  <section class="contact bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <div class="section-aside contact__aside">
            <SharedSectionLabel :number="number" title="Contact us" />
            <p class="contact__lead mt-8 mt-lg-10">
              Let’s collaborate and create something amazing! Tell me about your project—I’m all ears.
            </p>

            <ul class="contact__details">
              <li>
                <span class="contact__icon" aria-hidden="true">
                  <Icon icon="tabler:mail" width="20" height="20" />
                </span>
                <span>
                  <span class="contact__label">Email</span>
                  <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
                </span>
              </li>
              <li>
                <span class="contact__icon" aria-hidden="true">
                  <Icon icon="uil:map-marker" width="20" height="20" />
                </span>
                <span>
                  <span class="contact__label">Location</span>
                  <a :href="contactInfo.mapUrl" target="_blank" rel="noopener noreferrer">{{ contactInfo.location }}</a>
                </span>
              </li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" lg="8">
          <SharedSectionHeading v-reveal title="Get in touch" />

          <form
            v-reveal="100"
            class="contact__form surface-card"
            action="https://formsubmit.co/bhainirav772@gmail.com"
            method="POST"
          >
            <div class="contact__fields">
              <v-text-field
                name="name"
                label="Name"
                variant="underlined"
                autocomplete="name"
                :color="isDark ? 'primary' : 'secondary'"
                class="form-field"
                hide-details="auto"
                required
              ></v-text-field>

              <v-text-field
                name="email"
                label="Email"
                type="email"
                variant="underlined"
                autocomplete="email"
                :color="isDark ? 'primary' : 'secondary'"
                class="form-field"
                hide-details="auto"
                required
              ></v-text-field>
            </div>

            <v-textarea
              name="message"
              label="Tell us about your project"
              variant="underlined"
              rows="4"
              auto-grow
              :color="isDark ? 'primary' : 'secondary'"
              class="form-field mt-2"
              hide-details="auto"
            ></v-textarea>

            <div class="contact__submit">
              <SharedAppButton type="submit" label="Submit Message" />
            </div>
          </form>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.contact__lead {
  max-width: 36ch;
  margin-bottom: 0;
  color: var(--c-text-soft);
  font-size: clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);
  line-height: 1.6;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 32px 0 40px;
  padding: 0;
  list-style: none;
}

.contact__details li {
  display: flex;
  align-items: center;
  gap: 14px;
}

.contact__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.contact__label {
  display: block;
  color: var(--c-text-faint);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact__details a {
  color: var(--c-text);
  font-weight: 600;
  text-decoration: none;
  word-break: break-word;
}

.contact__details a:hover {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.contact__form {
  margin-top: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  padding: clamp(20px, 1rem + 2vw, 48px);
}

.contact__fields {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 32px;
}

@media (min-width: 768px) {
  .contact__fields {
    grid-template-columns: 1fr 1fr;
  }
}

.contact__submit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
}

@media (max-width: 599.98px) {
  .contact__submit :deep(.app-btn) {
    width: 100%;
  }
}
</style>
