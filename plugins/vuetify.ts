import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
// Vuetify base styles are compiled (with the project's settings) inside style.scss
import "@/assets/scss/style.scss";

//Mock Api data
import "../_mockApis";

import { LIGHT_THEME } from "@/theme/LightTheme";
import { DARK_THEME } from "@/theme/DarkTheme";

export default defineNuxtPlugin((app) => {
  // The inline head script (nuxt.config.ts) has already resolved the visitor's
  // preference and set `html.dark` – start Vuetify in the same theme to avoid a flash.
  const startDark = document.documentElement.classList.contains("dark");

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: startDark ? "DARK_THEME" : "LIGHT_THEME",
      themes: {
        LIGHT_THEME,
        DARK_THEME,
      },
    },
  });
  app.vueApp.use(vuetify);
});
