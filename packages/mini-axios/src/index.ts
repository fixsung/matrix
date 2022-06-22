import { AxiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  return xhr(config)
}

export default axios
