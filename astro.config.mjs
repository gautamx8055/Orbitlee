// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.orbitlee.com',
  trailingSlash: 'always',
  adapter: node({
    mode: 'standalone'
  }),
});