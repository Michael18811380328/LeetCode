import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  input: [
    './src/leetcode.js',
  ],
  output: [
    {
      format: 'cjs',
      file: './dist/leetcode.js',
      plugins: [
        terser(),
      ],
    },
    {
      format: 'cjs',
      dir: './lib',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    {
      format: 'es',
      dir: './es',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
  ],
  external: [
    /@babel\/runtime/,
  ],
  plugins: [
    // resolve third-party modules
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    // support JSON files
    json(),
    commonjs(),
  ],
});
