import React, { useEffect, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");

    const loadPopularMovies = async () => {

        const data = await getPopularMovies();
        setMovies(data);
    }

    async function searchForMovies() {

        const results = await searchMovies(searchText);

        setMovies(results);

    }

    useEffect(() => {

        if (searchText.trim() === "") {

            loadPopularMovies();
        } else {
            searchForMovies();
        }

    }, [searchText]);

    return (
        <div>
            <SearchBar

                searchText={searchText}

                setSearchText={setSearchText}

            />

            <div className="movie-grid">

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