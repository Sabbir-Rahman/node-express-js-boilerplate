/* eslint-disable import/extensions */
import express from 'express'
import cors from 'cors'

import { productRouter } from './router/index.js'

const app = express()
const PORT = process.env.PORT || 8080

const corsConfig = {
  origin: 'https://localhost:8081',
}

app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products/', productRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Hello' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
