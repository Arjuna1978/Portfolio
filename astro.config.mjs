// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';


const SITE_URL = process.env.SITE_URL || 'https://arjuna1978.github.io';
const PUBLIC_BASE_URL = process.env.NODE_ENV === 'production' ? '/Portfolio' : '/';

// https://astro.build/config
export default defineConfig({
  // The full URL of your deployed site
  site: SITE_URL,
  // The base path of your site on GitHub Pages.
  // This must match your repository name and is used as the prefix for all internal links.
  base: PUBLIC_BASE_URL,
  // This is the key change. We tell Astro to handle trailing slashes
  // to ensure consistent routing between local and deployed environments.
  trailingSlash: "always",

  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components'
      }
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  server: {
    host: true,
    port: 4321,
  }
});
