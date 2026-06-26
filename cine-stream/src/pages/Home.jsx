import React, { useEffect, useState } from 'react'
import { getPopularMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';

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

                        <MovieCard

                            key={movie.id}
                            movie={movie}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Home