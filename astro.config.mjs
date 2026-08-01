// @ts-check
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://andyromero.dev',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  server: { port: 4325 },
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
