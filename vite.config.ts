/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts']
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, './src/assets'),
      Components: path.resolve(__dirname, './src/components'),
      Elements: path.resolve(__dirname, './src/elements'),
      Features: path.resolve(__dirname, './src/features'),
      Hooks: path.resolve(__dirname, './src/hooks'),
      Libs: path.resolve(__dirname, './src/libs'),
      Pages: path.resolve(__dirname, './src/pages'),
      Routes: path.resolve(__dirname, './src/routes'),
      Services: path.resolve(__dirname, './src/services'),
      State: path.resolve(__dirname, './src/state'),
      Stories: path.resolve(__dirname, './src/stories'),
      Tests: path.resolve(__dirname, './src/tests'),
      Types: path.resolve(__dirname, './src/types'),
      Utils: path.resolve(__dirname, './src/utils')
    }
  }
});
