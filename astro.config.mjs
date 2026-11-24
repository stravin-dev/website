import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stravin.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
