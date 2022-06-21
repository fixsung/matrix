/*
 * @Author: songyzh
 * @Date: 2022-06-20 15:29:04
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-21 10:11:28
 * @Description:
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
