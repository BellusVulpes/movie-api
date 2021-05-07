const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies.js')
const { getAllData, movieData, addNewMovie } = require('./controller/movie')

const app = express()

app.get('/', getAllData)

app.get('/movies/:movieData', movieData)

app.use(bodyParser.json())

app.post('/movies', addNewMovie)

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})
