import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "app",
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: "%s | NurTani",
      title: "NurTani",
      meta: [
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "msapplication-TileColor", content: "#2fb380" },
      ],
      link: [{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
    },
  },

  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss() as any],
  },

  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
    {
      path: "~/components/atoms",
      pathPrefix: false,
      extensions: [".vue"],
    },
    {
      path: "~/components/molecules",
      pathPrefix: true,
      extensions: [".vue"],
    },
    {
      path: "~/components/organisms",
      pathPrefix: true,
      extensions: [".vue"],
    },
    {
      path: "~/components/layout",
      pathPrefix: false,
      extensions: [".vue"],
    },
  ],

  modules: [
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxthub/core",
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "NurTani",
      short_name: "NurTani",
      description: "Digital farming management and agricultural solutions.",
      theme_color: "#2fb380",
      background_color: "#ffffff",
      display: "standalone",
      orientation: "portrait",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "maskable-icon.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico,webp,json}"],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  i18n: {
    locales: [
      { code: "id", name: "Bahasa Indonesia", file: "id.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    defaultLocale: "id",
    langDir: "locales",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: false,
      fallbackLocale: "id",
    },
    vueI18n: "i18n.config.ts",
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "~/components/ui"
     */
    componentDir: "~/components/atoms",
  },

  colorMode: {
    preference: "light",
    classSuffix: "",
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700, 800],
    },
    families: [
      { name: "Poppins", provider: "google" },
      { name: "Baskervville", provider: "google" },
    ],
  },

  imports: {
    dirs: ["./lib"],
  },

  compatibilityDate: "2026-03-13",
});
