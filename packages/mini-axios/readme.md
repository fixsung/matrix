<!--
 * @Author: songyzh
 * @Date: 2022-06-23 09:40:04
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-23 09:41:58
 * @Description:
-->

## Mini-Axios

### 1、处理 URL 参数

本质把 params 对象的 key 和 value 拼接到 url 上，有几种情况需要考虑

- 参数值为数组

    ```js
    axios({
      method: 'get',
      url: '/base/get',
      params: {
        foo: ['bar','baz']
      }
    })
    ```
    最终请求url为：`/base/get?foo[]=bar&foo[]:baz`

- 参数值为对象

  ```js
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      foo: {
        bar: 'baz'
      }
    }
  })
  ```

  最终请求的 `url` 是 `/base/get?foo=%7B%22bar%22:%22baz%22%7D`，`foo` 后面拼接的是 `{"bar":"baz"}` encode 后的结果。

- 参数值为Date类型

  ```js
  const date = new Date()
  
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      date
    }
  })
  ```

  最终请求的 `url` 是 `/base/get?date=2019-04-01T05:55:39.030Z`，`date` 后面拼接的是 `date.toISOString()` 的结果

- 特殊字符

  ```js
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      foo: '@:$, '
    }
  })
  ```

  最终请求的 `url` 是 `/base/get?foo=@:$+`，注意，空格 ``会转换成 `+`。对于字符 `@`、`:`、`$`、`,`、``、`[`、`]`，允许出现在 `url` 中的，不能被 encode。

- 空值忽略

  ```js
  axios({
    method: 'get',
    url: '/base/get',
    params: {
      foo: 'bar',
      baz: null
    }
  })
  ```

  

  最终请求的 `url` 是 `/base/get?foo=bar`.对于值为 `null` 或者 `undefined` 的属性，不能添加到 url 参数中。

- 丢弃 url 中的哈希标记

    ```js
    axios({
      method: 'get',
      url: '/base/get#hash',
      params: {
        foo: 'bar'
      }
    })
    ```

    最终请求的 `url` 是 `/base/get?foo=bar`

- 保留 url 中已存在的参数

    ```js
    axios({
      method: 'get',
      url: '/base/get?foo=bar',
      params: {
        bar: 'baz'
      }
    })
    ```

    最终请求的 `url` 是 `/base/get?foo=bar&bar=baz`

