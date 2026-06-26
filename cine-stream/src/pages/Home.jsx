import React, { useEffect, useRef, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);

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

    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            entries[0].isIntersecting &&
                setPage(previousPage => previousPage + 1);
        });

        observer.observe(loaderRef.current);

        return () => {
            observer.disconnect();
        };

    }, []);

    
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
            <div ref={loaderRef}></div>
        </div>
    )
}

export default Home