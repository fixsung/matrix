/*
 * @Author: songyzh
 * @Date: 2022-06-23 10:05:20
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-23 10:09:30
 * @Description:
 */
let params = '12',
  parts = []
Object.keys(params).forEach((key) => {
  let val = params[key]
  if (val === null || typeof val === 'undefined') {
    return
  }
  let values
  if (Array.isArray(val)) {
    values = val
    key += '[]'
  } else {
    values = [val]
  }
  values.forEach((val) => {
    parts.push(`${key}=${val}`)
  })
  console.log(parts)
})
