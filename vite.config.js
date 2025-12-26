import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base path - cambiar esto si tu repo no está en la raíz
  // Por ejemplo, si tu repo se llama "aura-agency", usa: base: '/aura-agency/'
  base: './',
  
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


