/*
 * @Description:
 * @Version: 1.0
 * @Autor: songyzh
 * @Date: 2022-06-20 22:23:25
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-21 17:33:57
 */

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

const pkg = require('./package.json')

const libraryName = 'mini-axios'

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, name: libraryName, format: 'umd' },
    { file: pkg.module, format: 'es' }
  ],
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    json(),
    ts({
      useTsconfigDeclarationDir: true
    }),
    commonjs(),
    resolve()
  ]
}
