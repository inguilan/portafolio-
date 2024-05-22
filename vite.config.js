import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: false, // Deshabilitar mapas de fuente en desarrollo
  },
});
