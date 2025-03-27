import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore all 404s
        if (message.includes('Not found')) {
          return;
        }
        throw new Error(message);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;