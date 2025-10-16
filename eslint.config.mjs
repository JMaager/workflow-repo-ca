import js from '@eslint/js';
import globals from 'globals';
import vitest from 'eslint-plugin-vitest';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['js/**/*.js'],
    languageOptions: {
      globals: globals.browser,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },

  {
    files: ['tests/**/*.{js,ts}', 'e2e/**/*.{js,ts}'],
    plugins: { vitest },
    rules: { ...vitest.configs.recommended.rules },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: { ...vitest.environments.env.globals },
    },
  },

  {
    files: [
      '**/*.config.{js,ts,mjs,cjs}',
      'tailwind.config.js',
      'playwright.config.ts',
      'vitest.config.mjs',
      'eslint.config.mjs',
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
