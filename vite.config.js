import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can choose your desired port for the React dev server
    // proxy: { // Optional: if you want to proxy API requests to your Node.js server
    //   '/api': {
    //     target: 'http://localhost:8080', // Your Node.js server
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  publicDir: 'public', // Ensures Vite serves files from the 'public' directory
}); 