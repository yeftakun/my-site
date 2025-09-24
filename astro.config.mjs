import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yeftakun.github.io/my-site/', // penting untuk GitHub Pages prod
  base: '/my-site/', // penting untuk GitHub Pages prod
  outDir: 'dist',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: true })
  ]
});