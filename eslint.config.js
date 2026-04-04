import antfu from "@antfu/eslint-config"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  antfu(
    {
      rules: {
        "style/quotes": "off", // 👈 disable it
        "style/semi": "off",
        "style/member-delimiter-style": "off", // 👈 Allow semicolons in TS interfaces/types
        "vue/singleline-html-element-content-newline": "off", // 👈 Allow tags on single lines
        "vue/multiline-html-element-content-newline": "off", // 👈 Allow tags on single lines even if multiline content
        "vue/html-self-closing": "off", // 👈 Allow self-closing tags (<img/>)

        // Allow trailing space in comments, for possible JSDoc formattings
        "style/no-trailing-spaces": ["error", { ignoreComments: true }],
        // Relaxes inline statements a bit
        "style/max-statements-per-line": ["error", { max: 2 }],
        // Enforce strict TypeScript usage across the project
        "ts/no-explicit-any": "off",
      },
    },
    // Enforce architecture data-flow boundaries in UI layers
    {
      files: [
        "app/components/**/*.{vue,ts}",
        "app/pages/**/*.{vue,ts}",
        "app/layouts/**/*.{vue,ts}",
        "app/middleware/**/*.{ts,js}",
      ],
      rules: {
        "no-restricted-syntax": [
          "error",
          {
            selector: "CallExpression[callee.name='$fetch']",
            message:
              "Direct API calls are forbidden here. Use Page -> Composable -> Service -> API flow.",
          },
          {
            selector: "CallExpression[callee.name='useFetch']",
            message:
              "useFetch is forbidden in UI/page/layout layers. Move data access to service via composable.",
          },
          {
            selector: "CallExpression[callee.name='useLazyFetch']",
            message:
              "useLazyFetch is forbidden in UI/page/layout layers. Move data access to service via composable.",
          },
        ],
      },
    },
    // Allow trailing space for markdown formatting
    {
      files: ["**/*.md"],
      rules: {
        "style/no-trailing-spaces": "off",
      },
    },
  ),
)
