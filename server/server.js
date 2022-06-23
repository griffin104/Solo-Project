import express from 'express'

import apiRoutes from './routes/apiRoutes.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded())

app.use('/api', apiRoutes)

app.use((req, res) => res.sendStatus(404))

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err)
  return res.status(400).json({err: err})
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})