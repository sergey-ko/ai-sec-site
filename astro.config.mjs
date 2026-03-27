// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sergey-ko.github.io',
  base: '/ai-sec-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
