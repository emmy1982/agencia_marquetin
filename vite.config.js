import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base path para GitHub Pages
  base: '/agencia_marquetin/',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        equipo: resolve(__dirname, 'views/equipo.html'),
        portfolio: resolve(__dirname, 'views/portfolio.html'),
      },
    },
  },
  
  server: {
    port: 3000,
    open: true,
  },
});


