import React, { useEffect, useState } from 'react'
import { getPopularMovies } from '../services/tmdb';

const Home = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {

        const data = await getPopularMovies();
        setMovies(data);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>

            <div>

                {
                    movies.map(movie =>
                        <p> {movie.title} </p>
                    )
                }
            </div>
        </div>
    )
}

export default Home