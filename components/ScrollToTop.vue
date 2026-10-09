<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Icon } from "@iconify/vue";

const show = ref(false);

const scrollToTop = () => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
};

const onScroll = () => {
  show.value = window.scrollY > 600;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <Transition name="fade">
    <button v-if="show" type="button" class="scroll-to-top" aria-label="Back to top" @click="scrollToTop">
      <Icon icon="ic:round-arrow-upward" width="24" height="24" />
    </button>
  </Transition>
</template>
