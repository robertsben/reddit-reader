import path from 'path'
import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info(`Listening on port ${PORT}`)
  }
})