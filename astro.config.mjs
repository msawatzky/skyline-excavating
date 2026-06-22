// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://skylineexcavating.ca',
  integrations: [sitemap()],
  image: {
    domains: ['images.unsplash.com', 'images.pexels.com']
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
