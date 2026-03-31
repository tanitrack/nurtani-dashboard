import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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
  ],

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
  },

  imports: {
    dirs: ["./lib"],
  },

  compatibilityDate: "2026-03-13",
});
