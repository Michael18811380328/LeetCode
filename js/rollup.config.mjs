import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const terserConfig = {
  compress: {
    defaults: false,
    drop_console: false,
    drop_debugger: true,
    keep_classnames: false,
    keep_fnames: false,
    passes: 2
  },
  mangle: {
    properties: false,
    keep_classnames: false,
    keep_fnames: false
  },
  format: {
    comments: false
  }
};

const plugins = [terser(terserConfig)];

export default {
  input: './src/leetcode.js',
  output: [
    {
      file: './dist/leetcode.js',
      format: 'cjs',
      plugins,
    },
    {
      format: 'cjs',
      dir: './lib',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      plugins,
    },
    {
      format: 'es',
      dir: './es',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      plugins,
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
