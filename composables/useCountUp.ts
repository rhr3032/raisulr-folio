import { ref, onMounted, onBeforeUnmount, type Ref } from "vue";

/**
 * Animates numbers from 0 → target the first time `target` scrolls into view.
 * Honours prefers-reduced-motion (jumps straight to the final values).
 */
export function useCountUp(target: Ref<HTMLElement | null>, values: number[], duration = 1600) {
  const current = ref<number[]>(values.map(() => 0));
  let observer: IntersectionObserver | null = null;
  let frame = 0;

  const finish = () => {
    current.value = [...values];
  };

  const run = () => {
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      current.value = values.map((v) => Math.round(v * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
  };

  onMounted(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window) || !target.value) return finish();

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer?.disconnect();
        run();
      },
      { threshold: 0.35 }
    );
    observer.observe(target.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    cancelAnimationFrame(frame);
  });

  return current;
}
