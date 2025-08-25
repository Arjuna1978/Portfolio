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
  // Use the environment variable for the base path.
  // This ensures all internal links are correctly prefixed for your GitHub Pages deployment.
  base: PUBLIC_BASE_URL,
  
  // The site property is optional but good practice for GitHub Pages.
  // It should point to the root of your live domain.
  site: 'https://arjuna1978.github.io',

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
