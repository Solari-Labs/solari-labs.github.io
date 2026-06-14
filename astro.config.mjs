import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://solari-labs.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
