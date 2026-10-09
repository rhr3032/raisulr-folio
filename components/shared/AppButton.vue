<script setup lang="ts">
import { computed, resolveComponent } from "vue";
import { Icon } from "@iconify/vue";

type Variant = "primary" | "ink" | "outline" | "glass";
type Size = "lg" | "md" | "sm";

const props = withDefaults(
  defineProps<{
    label: string;
    to?: string;
    href?: string;
    target?: string;
    type?: "button" | "submit" | "reset";
    icon?: string;
    variant?: Variant;
    size?: Size;
    block?: boolean;
    /** Icon sits on the left and nudges left on hover (for "Back" actions) */
    back?: boolean;
    /** Icon nudges instead of rotating (for downward arrows) */
    staticIcon?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
  }>(),
  {
    icon: "material-symbols:arrow-outward",
    variant: "primary",
    size: "lg",
    type: "button",
  }
);

const NuxtLink = resolveComponent("NuxtLink");

const tag = computed(() => (props.to ? NuxtLink : props.href ? "a" : "button"));

const isExternal = computed(() => !!props.href && /^https?:\/\//.test(props.href));

const attrs = computed(() => {
  if (props.to) return { to: props.to };
  if (props.href)
    return {
      href: props.href,
      target: props.target ?? (isExternal.value ? "_blank" : undefined),
      rel: isExternal.value ? "noopener noreferrer" : undefined,
    };
  return { type: props.type, disabled: props.disabled || undefined };
});

const classes = computed(() => [
  "app-btn",
  props.variant !== "primary" && `app-btn--${props.variant}`,
  props.size !== "lg" && `app-btn--${props.size}`,
  props.block && "app-btn--block",
  props.back && "app-btn--back",
  props.staticIcon && "app-btn--static-icon",
  props.disabled && "is-disabled",
]);
</script>

<template>
  <component :is="tag" v-bind="attrs" :class="classes" :aria-label="ariaLabel">
    <span class="app-btn__label">{{ label }}</span>
    <span class="app-btn__icon" aria-hidden="true">
      <Icon :icon="icon" />
    </span>
  </component>
</template>
