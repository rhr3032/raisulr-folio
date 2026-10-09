// https://nuxt.com/docs/api/configuration/nuxt-config

const siteDescription =
  "Raisul R. — Product Designer & Developer crafting clean, user-focused digital products through thoughtful UX and modern development.";

// Resolve the visitor's theme before first paint (stored choice → OS preference)
// so dark-mode visitors never see a white flash. Mirrors composables/useAppTheme.ts.
const themeInitScript = `(function(){try{var s=localStorage.getItem('rr-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;if(d){r.classList.add('dark')}r.style.colorScheme=d?'dark':'light'}catch(e){}})();`;

export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false,
  },

  // Vuetify build configuration
  build: {
    transpile: ["vuetify"],
  },

  modules: ["@pinia/nuxt"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Raisul R. | Portfolio",
      htmlAttrs: { lang: "en" },
      meta: [
        { name: "description", content: siteDescription },
        { name: "theme-color", content: "#ffffff" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Raisul R. | Portfolio" },
        { property: "og:description", content: siteDescription },
        { property: "og:image", content: "/banner/banner.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&display=swap",
        },
      ],
      style: [
        // Page background before the app CSS arrives (existing palette colours).
        { innerHTML: "html{background:#ffffff}html.dark{background:#1F2A2E}" },
      ],
      script: [{ innerHTML: themeInitScript, tagPosition: "head" }],
    },
  },

  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],
  compatibilityDate: "2025-05-15",
});
