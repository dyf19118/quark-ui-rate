import { resolve } from 'path'
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  build: {
    lib: {
      entry: resolve("./src/index.tsx"),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ['quarkc'],
      output: {
        dir: "lib",
      },
      plugins: [
        typescript()
      ],
    },
  },
});
