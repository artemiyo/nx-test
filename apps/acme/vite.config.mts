// Add this to your imports
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [
    //...
    svelte(),
  ],
  resolve: {
    alias: {
      '@acme/counter': fileURLToPath(
        new URL('/libs/counter/src/index.ts', import.meta.url)
      ),
    },
  },

  server: {
    port: 4200,
    host: 'localhost',
  },
});