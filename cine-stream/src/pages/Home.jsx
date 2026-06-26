import React, { useEffect, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);

    const loadPopularMovies = async () => {

        const data = await getPopularMovies(page);

        setMovies(previousMovies => {

            if (page === 1) {
                return data;
            }

            return [
                ...previousMovies,
                ...data
            ]
        })
    }

    async function searchForMovies() {

        const results = await searchMovies(searchText);

        setMovies(previousMovies => {

            if (page === 1) {

                return results;

            }

            return [

                ...previousMovies,

                ...results

            ];

        });


    }

    useEffect(() => {

        setPage(1);

    }, [searchText]);

    useEffect(() => {

        const timer = setTimeout(() => {

            if (searchText.trim() === "") {

                loadPopularMovies();

            } else {
                searchForMovies();
            }

        }, 500);

        return () => {
            clearTimeout(timer);
        };

    }, [searchText, page]);

    return (
        <div>
            <SearchBar

                searchText={searchText}

                setSearchText={setSearchText}

            />

            <button onClick={() => setPage(page + 1)} >
                more </button>

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