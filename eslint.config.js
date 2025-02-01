import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": "off", // Отключение правила no-console
      "import/extensions": "off", // Отключение правила import/extensions
    },
  },
  pluginJs.configs.recommended,
];
