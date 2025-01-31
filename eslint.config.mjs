import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      semi: ['error', 'always'], // Require semicolons
      'no-extra-semi': 'error', // Disallow unnecessary semicolons
      quotes: ['error', 'single'], // Enforce double quotes
      indent: ['error', 2], // Enforce 2-space indentation
      'no-trailing-spaces': 'error', // Disallow trailing spaces
    },
  },
  { languageOptions: { globals: [ globals.node, globals.browser ] } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
