import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from network devices (optional)
    port: 5173, // Ensures your app runs on port 5173 (optional)
  },
  build: {
    // Redirect all unknown routes to index.html
    rollupOptions: {
      output: {
        entryFileNames: 'index.ts',
      },
    },
  },
});
``










