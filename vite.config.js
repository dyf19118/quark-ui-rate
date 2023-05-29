import { resolve } from 'node:path'
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from '@quarkd/rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';

const extensions = ['.js', '.ts', '.tsx']

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    },
  },
  build: {
    lib: {
      entry: resolve('./src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        dir: 'lib',
      },
      // treeshake: false,
      plugins: [
        postcss({
          inject: false,
          extensions: ['.css'],
        }),
        typescript(),
        commonjs(),
        nodeResolve({
          extensions,
          modulesOnly: true,
        }),
        babel({
          babelHelpers: 'runtime',
          exclude: 'node_modules/**',
          extensions,
        }),
        filesize()
      ],
    },
  }
});
