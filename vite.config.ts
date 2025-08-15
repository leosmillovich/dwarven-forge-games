// vite.config.ts (o .js)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname en ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    // '::' (IPv6) funciona, pero si tenés problemas de acceso usa '0.0.0.0'
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Alternativa sin path/dirname en ESM:
      // '@': new URL('./src', import.meta.url).pathname,
    },
  },
});
