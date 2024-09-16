import express from 'express'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

import * as routes from './routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors())

app.enable('trust proxy')
app.set('json spaces', 2)

Object.entries(routes).forEach(([key, handler]) => {
  const route = `/api/${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
  app.get(route, handler)
})

app.get('/runtime', (req, res) => {
  const uptime = Date.now() - app.locals.startTime
  const runtime = new Date(uptime).toISOString().substr(11, 8)
  res.send(runtime)
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404/index.html'))
})

app.listen(port, () => {
  app.locals.startTime = Date.now()
  console.log(`Server is running on http://localhost:${port}`)
})
