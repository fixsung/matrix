/*
 * @Author: songyzh
 * @Date: 2022-06-20 17:33:04
 * @LastEditors: songyzh
 * @LastEditTime: 2022-06-20 17:33:04
 * @Description:
 */
import express, { Request, Response } from 'express'

const app = express()

app.get('/ping', (req: Request, res: Response) => {
  res.json({ msg: 'hello world' })
})

app.listen(3000)
