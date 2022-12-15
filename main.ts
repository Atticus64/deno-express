import { Request, Response } from 'npm:express@4.18.2';
import express from 'npm:express@4.18.2';


const app = express()
const port = 8000

app.get('/', (_req: Request, res: Response) => {
  res.send('Hola express desde Deno!! 🐱‍🐉')
})

app.listen(port)
