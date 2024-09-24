import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: './src/leetcode.js',
  output: [
    {
      file: './dist/leetcode.js',
      format: 'cjs',
      plugins: [terser()],
    },
    {
      format: 'cjs',
      dir: './lib',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      plugins: [terser()],
    },
    {
      format: 'es',
      dir: './es',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      plugins: [terser()],
    },
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
};
