import React from 'react'

const MovieCard = ({ movie }) => {

    const base_url = "https://image.tmdb.org/t/p/w500";

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

        </div>
    )
}

export default MovieCard