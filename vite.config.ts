/// <reference types="vitest" />
import { defineConfig, ViteUserConfig } from 'vitest/config'
import path, { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts(
    {
      insertTypesEntry: true,
      include: ['lib'],
      tsconfigPath: './tsconfig.app.json',
    }
  )] as ViteUserConfig['plugins'],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
