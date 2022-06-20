/*
 * @Author: songyzh
 * @Date: 2022-06-20 15:58:34
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-20 15:59:44
 * @Description:
 */
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
