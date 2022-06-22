/*
 * @Author: songyzh
 * @Date: 2022-06-22 15:05:50
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-22 15:41:28
 * @Description:
 */
import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootPath = path.join(__dirname, 'src/client')

const config = {
  mode: 'development',
  entry: fs.readdirSync(rootPath).reduce((entries, dir) => {
    const fullDir = path.join(rootPath, dir)
    const entry = path.join(fullDir, 'app.ts')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  }, {}),

  /**
   * 根据不同的目录名称，打包生成目标 js，名称和目录名一致
   */
  output: {
    path: path.join(rootPath, '__build__'),
    filename: '[name].js',
    publicPath: '/__build__/'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
export default config
