import express, { Request, Response } from 'express'
import { green} from "kolorist"
const app = express()

app.get('/ping', (req: Request, res: Response) => {
  res.json({ msg: 'hello world' })
})

app.listen(3000,() => {
  console.log(green(`Example app listening on port 3000`))
})
