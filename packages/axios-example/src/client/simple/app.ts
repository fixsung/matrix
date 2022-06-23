/*
 * @Author: songyzh
 * @Date: 2022-06-21 09:20:46
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-23 10:43:52
 * @Description:
 */
import axios from '@mini/axios'

const btn = document.getElementById('simple-btn')

btn?.addEventListener('click', () => {
  axios({
    method: 'get',
    url: '/simple/get',
    params: {
      a: 1,
      b: 2
    }
  })
})
