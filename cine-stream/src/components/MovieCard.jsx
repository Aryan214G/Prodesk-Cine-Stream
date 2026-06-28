import React from 'react'

const MovieCard = ({ movie, favorites, setFavorites }) => {

    const base_url = "https://image.tmdb.org/t/p/w500";

    let isFavorite = favorites.some(
        favorite => favorite.id === movie.id
    );

    for (let i = 0; i < favorites.length; i++) {

        if (favorites[i].id === movie.id) {
            isFavorite = true;
            break;
        }
    }

    function toggleFavorite() {

        if (!isFavorite) {

            setFavorites([
                ...favorites,
                movie
            ]);

        } else {

            setFavorites(
                favorites.filter(favorite =>
                    favorite.id !== movie.id)
            );
        }
    }


    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path ? (
                    <img
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.title}
                    />
                ) : (
                    <div className="no-poster">
                        No Poster
                    </div>
                )}
            </div>

            <div className="movie-content">
                <h3>{movie.title}</h3>

                <div className="movie-meta">
                    <span>{movie.release_date.substring(0, 4)}</span>
                    <span>⭐ {movie.vote_average.toFixed(1)}</span>
                </div>

                <button
                    className="favorite-btn"
                    onClick={toggleFavorite}
                >
                    {isFavorite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
    )
}

export default MovieCard