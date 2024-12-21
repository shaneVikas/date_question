const express = require('express')
const {format} = require('date-fns')
const app = express()

app.get('/', (request, response) => {
  const date = new Date()
  const formattedDate = format(date, 'dd-MM-yyyy')
  response.send(formattedDate)
})
app.listen(3000)
module.exports = app
