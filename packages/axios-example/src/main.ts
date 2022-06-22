/*
 * @Author: songyzh
 * @Date: 2022-06-20 17:33:04
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-22 15:49:08
 * @Description:
 */
import express, { Request, Response } from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import WebpackConfig from '../webpack.config.js'

import path from 'path'
import { fileURLToPath } from 'url'
import { blue, green } from 'kolorist'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compiler = webpack(WebpackConfig)
const app = express()

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: 'minimal'
  })
)

app.use(webpackHotMiddleware(compiler))

app.get('/ping', (req: Request, res: Response) => {
  res.json({ msg: 'hello world' })
})
app.use(express.static(path.join(__dirname, 'client')))

app.listen(3000, () => {
  console.log(
    green(`mini-axios dev server listening at `) + blue(`http://localhost:3000`)
  )
})
