import React, {useEffect, useState} from 'react'
import { getPopularMovies } from '../services/tmdb';

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(getPopularMovies());
    }, []);

  return (
    <div>Home</div>
  )
}

export default Home