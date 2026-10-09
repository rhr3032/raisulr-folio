<script setup lang="ts">
import { Icon } from "@iconify/vue";
import logo1 from "/images/pricing/partners-1.svg";
import logo2 from "/images/pricing/partners-2.svg";
import logo3 from "/images/pricing/partners-3.svg";
import logo4 from "/images/pricing/partners-4.svg";
import logo5 from "/images/pricing/partners-5.svg";

const plans = [
  {
    title: "Launch",
    price: 699,
    description: "Ideal for startups and small businesses taking their first steps online.",
    features: [
      "Competitive research & insights",
      "Wireframing and prototyping",
      "Basic tracking setup (Google Analytics, etc.)",
      "Standard contact form integration",
    ],
    mostPopular: false,
  },
  {
    title: "Scale",
    strikeprice: 2199,
    price: 1699,
    description: "Perfect for growing brands needing more customization and flexibility.",
    features: [
      "Everything in the Launch Plan",
      "Custom design for up to 10 pages",
      "Seamless social media integration",
      "SEO enhancements for key pages",
    ],
    mostPopular: true,
  },
  {
    title: "Elevate",
    price: 3499,
    description: "Best suited for established businesses wanting a fully tailored experience.",
    features: [
      "Everything in the Scale Plan",
      "E-commerce functionality (if needed)",
      "Branded email template design",
      "Priority support for six months after launch",
    ],
    mostPopular: false,
  },
];

const logos = [logo1, logo2, logo3, logo4, logo5, logo1, logo2, logo3, logo4, logo5];

const formatPrice = (value: number) => value.toLocaleString("en-US");
</script>

<template>
  <section class="pricing bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <SharedSectionIntro
        number="08"
        label="Pricing"
        title="Affordable pricing"
        subtitle="A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences."
      />

      <div class="pricing__grid mt-10 mt-lg-16">
        <article
          v-for="(plan, index) in plans"
          :key="plan.title"
          v-reveal="index * 100"
          class="plan"
          :class="{ 'plan--featured on-ink': plan.mostPopular }"
          :aria-label="`${plan.title} plan`"
        >
          <header class="plan__header">
            <div class="d-flex align-center justify-space-between ga-3 flex-wrap">
              <h3 class="plan__title">{{ plan.title }}</h3>
              <span v-if="plan.mostPopular" class="tag tag--lime">
                <Icon icon="solar:fire-linear" width="16" height="16" aria-hidden="true" />
                Most Popular
              </span>
            </div>

            <p class="plan__price">
              <span v-if="plan.strikeprice" class="plan__strike">
                <span class="visually-hidden">Was </span>${{ formatPrice(plan.strikeprice) }}
              </span>
              <span class="plan__amount">
                <span class="visually-hidden" v-if="plan.strikeprice">now </span>${{ formatPrice(plan.price) }}
              </span>
              <span class="plan__period">/month</span>
            </p>
            <p class="plan__desc">{{ plan.description }}</p>
          </header>

          <div class="plan__body">
            <p class="plan__included">What’s Included:</p>
            <ul class="plan__features">
              <li v-for="(feature, i) in plan.features" :key="i">
                <span class="plan__check" aria-hidden="true">
                  <Icon icon="tabler:check" width="16" height="16" />
                </span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <SharedAppButton
            to="/contact"
            label="Subscribe Now"
            :variant="plan.mostPopular ? 'primary' : 'outline'"
            block
            :aria-label="`Subscribe to the ${plan.title} plan`"
          />
        </article>
      </div>

      <div class="partners mt-16 mt-lg-20">
        <p class="partners__title">More than 320 trusted partners &amp; clients</p>
        <div class="marquee mt-8" aria-label="Partner logos" role="img">
          <div class="marquee__track">
            <div v-for="copy in 2" :key="copy" class="partners__set" :aria-hidden="copy === 2">
              <div v-for="(logo, i) in logos" :key="`${copy}-${i}`" class="marquee-tag">
                <img :src="logo" alt="" width="160" height="48" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SharedSectionSpacer />
  </section>
</template>

<style scoped>
.pricing__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .pricing__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
}

@media (min-width: 768px) and (max-width: 1023.98px) {
  /* Avoid an orphaned third card on tablets */
  .plan:last-child {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1024px) {
  .pricing__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
    gap: clamp(16px, 1.6vw, 24px);
  }
}

.plan {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: clamp(24px, 1.2rem + 1.4vw, 44px);
  border-radius: var(--radius-lg);
  border: 1px solid var(--c-border);
  background: var(--c-card-alt);
}

.plan--featured {
  background: rgb(var(--v-theme-secondary));
  border-color: rgb(var(--v-theme-secondary));
}

:global(html.dark .plan--featured) {
  border-color: rgba(var(--v-theme-primary), 0.6);
}

.plan__title {
  margin: 0;
  color: var(--c-text);
  font-size: 1.125rem;
  font-weight: 700;
}

.plan__price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
  margin: 20px 0 0;
}

.plan__amount {
  color: var(--c-text);
  font-size: clamp(2.5rem, 1.9rem + 2vw, 3.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.045em;
}

.plan__strike {
  color: var(--c-text-faint);
  font-size: clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem);
  font-weight: 600;
  text-decoration: line-through;
}

.plan__period {
  color: var(--c-text-soft);
  font-weight: 500;
}

.plan__desc {
  margin: 14px 0 0;
  color: var(--c-text-soft);
  line-height: 1.6;
}

.plan__body {
  flex: 1;
  padding-top: 28px;
  border-top: 1px solid var(--c-border);
}

.plan__included {
  margin: 0 0 16px;
  color: var(--c-text);
  font-weight: 700;
}

.plan__features {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.plan__features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--c-text);
  line-height: 1.5;
}

.plan__check {
  display: grid;
  place-items: center;
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-secondary));
}

.partners__title {
  margin: 0;
  text-align: center;
  color: var(--c-text-soft);
  font-weight: 600;
}

.partners__set {
  display: flex;
  align-items: center;
}

.marquee-tag {
  flex: none;
  padding: 0 clamp(20px, 3vw, 44px);
}

.marquee-tag img {
  display: block;
  height: clamp(32px, 2.6vw, 44px);
  width: auto;
  opacity: 0.7;
  transition: opacity var(--dur) var(--ease-out);
}

.marquee-tag:hover img {
  opacity: 1;
}

:global(html.dark .marquee-tag img) {
  filter: invert(1);
}
</style>
