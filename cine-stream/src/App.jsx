import React from 'react'
import { getPopularMovies } from './services/tmdb'

const App = () => {

  const movies = getPopularMovies();

  return (
    <div>App</div>
  )
}

export default App