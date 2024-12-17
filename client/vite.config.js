
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // Proxy API requests to backend
        changeOrigin: true,
        /*optimizeDeps: {
          include: ['redux-thunk'],
        },*/
        // rewrite: (path) => path.replace(/^\/api/, '')  // This should rewrite /api to empty, keeping the rest of the path
      }
    }
  },
  plugins: [react()],
});
