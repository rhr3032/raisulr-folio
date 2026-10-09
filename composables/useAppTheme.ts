import { computed } from "vue";
import { useTheme } from "vuetify";

export const LIGHT_THEME_NAME = "LIGHT_THEME";
export const DARK_THEME_NAME = "DARK_THEME";
export const THEME_STORAGE_KEY = "rr-theme";

/**
 * Single source of truth for light/dark mode.
 * Wraps Vuetify's theme, mirrors it on <html class="dark"> (used by the SCSS
 * layer) and remembers the visitor's choice.
 */
export function useAppTheme() {
  const theme = useTheme();

  const isDark = computed(() => theme.global.name.value === DARK_THEME_NAME);

  function setTheme(dark: boolean) {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotion) {
      root.classList.add("theme-switching");
      window.setTimeout(() => root.classList.remove("theme-switching"), 400);
    }

    theme.change(dark ? DARK_THEME_NAME : LIGHT_THEME_NAME);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode) – the toggle still works.
    }
  }

  const toggleTheme = () => setTheme(!isDark.value);

  return { isDark, setTheme, toggleTheme };
}
