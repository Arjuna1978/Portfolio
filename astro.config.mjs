// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// Get the public base URL from an environment variable,
// or use an empty string as the default for local development.
// This makes the configuration dynamic for different deployment environments.
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL || '';

// https://astro.build/config
export default defineConfig({
  // The full URL of your deployed site
  site: 'https://arjuna1978.github.io',
  
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
