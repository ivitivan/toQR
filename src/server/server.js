import express from 'express'
import {resolve} from 'path'

const app = express()

app.use(express.static(resolve(__dirname, '../main/')))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile(resolve(__dirname, '../main/index.html'))
})

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`)
})

