/* eslint-disable import/extensions */
import express from 'express'
import cors from 'cors'

import v1Router from './src/api/v1/v1Router.js'

const app = express()
const PORT = process.env.PORT || 8080

const corsConfig = {
  origin: 'https://localhost:8081',
}

app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', v1Router)

app.get('/', (req, res) => {
  res.json({ message: 'Hello' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
