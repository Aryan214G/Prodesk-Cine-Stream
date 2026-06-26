import React from 'react'

const MovieCard = ({ movie, favorites, setFavorites }) => {

    const base_url = "https://image.tmdb.org/t/p/w500";

    let isFavorite = false;

    for (let i = 0; i < favorites.length; i++) {

        if (favorites[i].id === movie.id) {

            isFavorite = true;
            break;

        }

    }

    return (
        <div className="movie-card">

            {
                movie.poster_path ? (

                    <img
                        src={`${base_url}${movie.poster_path}`}
                    />

                )
                    : (
                        <div className="no-poster">
                            No Poster
                        </div>

                    )
            }

            <h3 className='movie-info'>{movie.title}</h3>

            <p>{movie.release_date.substring(0, 4)}</p>

            <p>⭐ {movie.vote_average.toFixed(1)}</p>

            <button>

                {isFavorite ? "❤️" : "🤍"}

            </button>
        </div>
    )
}

export default MovieCard