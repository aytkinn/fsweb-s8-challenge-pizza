import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import cypressPlugin from "eslint-plugin-cypress";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  {
    files: ["**/*.cy.js"],
    plugins: { cypress: cypressPlugin },
    languageOptions: {
      globals: { cy: true, Cypress: true },
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    },
  },

  prettier,
];
