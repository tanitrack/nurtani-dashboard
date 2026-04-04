import tailwindcss from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "app",
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: "%s | NurTani",
      title: "NurTani",
    },
  },

  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
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
  ],

  i18n: {
    locales: [
      { code: "id", name: "Bahasa Indonesia", file: "id.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    defaultLocale: "id",
    langDir: "locales",
    strategy: "no_prefix",
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
})
