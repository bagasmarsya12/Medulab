import path from 'path';
import { defineConfig } from 'vite'; // loadEnv tidak perlu di-import jika tidak dipakai
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    // Bagian 'define' dihapus karena kita tidak pakai env var
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});