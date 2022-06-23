/*
 * @Author: songyzh
 * @Date: 2022-06-23 09:51:04
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-23 09:53:28
 * @Description:
 */
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isPlainObject (val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
