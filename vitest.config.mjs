import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
      include: ['js/**/*.js'],
    },
    exclude: [
      'e2e/**',
      'playwright.config.*',
      'node_modules/**',
      'dist/**',
      'coverage/**',
    ],
  },
});
