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
      fileName: "index",
      name: 'QuarkUiRate',
    },
    rollupOptions: {
      external: ['quarkc', 'lodash-es'],
      output: {
        dir: "lib",
        globals: {
          quarkc: 'Quarkc',
          'lodash-es': '_',
        },
      },
      plugins: [
        typescript()
      ],
    },
  },
});
