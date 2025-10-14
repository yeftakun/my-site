import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yeftaasyel.my.id', // penting untuk GitHub Pages prod
  base: '/', // penting untuk GitHub Pages prod
  outDir: 'dist',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: true })
  ]
});