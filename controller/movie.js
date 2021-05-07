const movies = require('../movies')

const getAllData = (request, response) => {
  return response.send(movies)
}

const movieData = (request, response) => {
  const { movieData } = request.params

  const findMovie = movies.filter((movie) => movie.title.toLowerCase().includes(movieData) ||
    movie.directors.toString().toLowerCase().includes(movieData))

  return response.send(findMovie)
}

const addNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(404).send('Your data is missing either: title, directors, releaseDate, rating, runTime, or genres')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllData, movieData, addNewMovie }
