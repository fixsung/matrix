/*
 * @Author: songyzh
 * @Date: 2022-06-20 15:29:04
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-23 15:18:29
 * @Description:
 */
import { transformRequest } from './helper/data'
import { buildURL } from './helper/url'
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  return xhr(config)
}
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  let { url, params } = config
  return buildURL(url, params)
}
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
export default axios
