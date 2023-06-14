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
      fileName: (format, entryName) => {
        if (format === "es") {
          return `${entryName}.js`;
        }

        return `${entryName}.${format}.js`;
      },
      name: "QuarkUiRate",
    },
    rollupOptions: {
      external: ['quarkc'],
      output: {
        dir: "lib",
        globals: {
          quarkc: "Quarkc",
        },
      },
      plugins: [
        typescript()
      ],
    },
  },
});
