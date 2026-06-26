import React, { useEffect, useRef, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = ({ favorites, setFavorites }) => {

    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    const loadPopularMovies = async (page) => {

        setLoading(true);

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

        setLoading(false);
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

                loadPopularMovies(page);

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
            const entry = entries[0];

            console.log(
                "Intersecting:", entry.isIntersecting,
                "Page:", page,
                "Loading:", loading
            );

            if (movies.length === 0 || loading) return;

            if (entry.isIntersecting && !loading) {
                setPage(prev => prev + 1);
            }
        });

        observer.observe(loaderRef.current);

        return () => {
            observer.disconnect();
        };

    }, [loading]);


    return (
        <div>
            <SearchBar

                searchText={searchText}

                setSearchText={setSearchText}

            />

            <button onClick={() => setPage(page + 1)} >
                more </button>

            <div className="grid">

                {
                    movies.map(movie =>

                        <MovieCard

                            key={movie.id}
                            movie={movie}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    )
                }
            </div>
            <div ref={loaderRef}></div>
        </div>
    )
}

export default Home