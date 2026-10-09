/**
 * v-reveal – gentle fade/slide-in when an element first enters the viewport.
 * Usage: v-reveal or v-reveal="120" (delay in ms).
 * Disabled for visitors who prefer reduced motion.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supported = "IntersectionObserver" in window;
  let observer: IntersectionObserver | null = null;

  const getObserver = () =>
    (observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    ));

  nuxtApp.vueApp.directive<HTMLElement, number | string | undefined>("reveal", {
    mounted(el, binding) {
      if (reduceMotion || !supported) return;
      if (binding.value) el.style.setProperty("--reveal-delay", `${binding.value}ms`);
      el.classList.add("reveal");
      getObserver().observe(el);
    },
    unmounted(el) {
      observer?.unobserve(el);
    },
  });
});
