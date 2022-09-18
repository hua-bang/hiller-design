import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import externals from 'rollup-plugin-node-externals';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    externals({ deps: true }),
    nodeResolve({
      extensions: ['.js', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json'
    }),
    babel({
      runtimeHelpers: true,
      exclude: '**/node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    postcss({
      extensions: ['.css', '.scss'],
      extract: path.resolve('./dist/style/index.css')
    }),
  ],
};