/*
 * @Author: songyzh
 * @Date: 2022-06-20 15:10:51
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-20 15:29:35
 * @Description:
 */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'

const pkg = require('./package.json')

const libraryName = 'mini-axios'

export default {
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      name: libraryName,
      format: 'umd',
      sourcemap: true
    },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],

  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [json(), typescript(), commonjs(), resolve()]
}
