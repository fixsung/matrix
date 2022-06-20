/*
 * @Author: songyzh
 * @Date: 2022-06-20 16:00:48
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-20 16:00:49
 * @Description:
 */
import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
