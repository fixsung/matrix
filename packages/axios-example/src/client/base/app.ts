/*
 * @Author: songyzh
 * @Date: 2022-06-23 09:20:16
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-23 15:30:26
 * @Description:
 */

import axios from '@mini/axios'
const PARAMHASH = {
  simple: { a: 1, b: 2 },
  array: { foo: ['bar', 'baz'] },
  object: { foo: { bar: 'baz' } },
  date: { foo: new Date() },
  special: { foo: '@:$, ' },
  empty: { foo: 'bar', baz: null },
  hash: '',
  reserve: { bar: 'baz' }
}

const BODYHASH = {
  'body-buffer': new Int32Array([21, 31]),
  'body-json': { a: 1, b: 2 },
  header: '',
  'res-raw': '',
  'res-json': ''
}
const operEle = document.getElementById('oper')

operEle?.addEventListener('click', (evt: MouseEvent) => {
  let targetEle = <HTMLElement | null>evt.target
  targetEle = getTargetEle(targetEle)
  if (targetEle) {
    let url: string
    const paramKey = targetEle.dataset['paramKey']
    if (Object.prototype.hasOwnProperty.call(PARAMHASH, paramKey)) {
      url = '/base/get'
      if (paramKey === 'hash') {
        url = '/base/get#hash'
      }
      if (paramKey === 'reserve') {
        url = '/base/get?foo=bar'
      }
      const params = PARAMHASH[paramKey!]
      axios({
        method: 'get',
        url,
        params
      })
    } else if (Object.prototype.hasOwnProperty.call(BODYHASH, paramKey)) {
      url = '/base/post'
      const data = BODYHASH[paramKey!]
      if (paramKey === 'body-buffer') {
        url = '/base/buffer'
      }
      axios({
        method: 'post',
        url,
        data
      })
    }
  }
})

function getTargetEle(ele: HTMLElement | null): HTMLElement | null {
  if (!ele) {
    return null
  }
  if (ele.classList.contains('item')) {
    return ele
  } else {
    return getTargetEle(ele.parentElement)
  }
}
