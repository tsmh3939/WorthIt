import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";
import sortKeysFix from "eslint-plugin-sort-keys-fix";

const eslintConfig = defineConfig([
  // ESLint recommended rules
  js.configs.all,
  stylistic.configs.all,
  stylistic.configs.customize({
    semi: true,
    quotes: "double",
  }),

  ...nextVitals,
  ...nextTs,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    plugins: {
      "import": importPlugin,
      "sort-keys-fix": sortKeysFix,
    },
    rules: {
      // Import plugin rules
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            [
              "parent",
              "sibling",
            ],
            "index",
            "object",
            "type",
          ],
          "pathGroups": [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
          ],
          "pathGroupsExcludedImportTypes": [
            "react",
            "next",
          ],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-named-as-default-member": "off",

      // Disable conflicting rules
      "sort-imports": "off",
      // Key sorting
      "sort-keys": [
        "off",
        "asc",
        { caseSensitive: true,
          natural: true },
      ],
      "one-var": [
        "error",
        "never",
      ],
      "camelcase": [
        "error",
        { ignoreImports: true },
      ],
      "new-cap": [
        "error",
        { newIsCap: true,
          capIsNew: false },
      ],
      "max-lines-per-function": [
        "warn",
        { max: 100,
          skipBlankLines: false,
          skipComments: true },
      ],

      /*
       * ==========================================
       * TypeScript推奨ルール
       * ==========================================
       */
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],

      /*
       * ==========================================
       * React推奨ルール
       * ==========================================
       */
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "error",
      "react/self-closing-comp": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /*
       * ==========================================
       * Next.js特有
       * ==========================================
       */
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",
    },
  },
]);

export default eslintConfig;
