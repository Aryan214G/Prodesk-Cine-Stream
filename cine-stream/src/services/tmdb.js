import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies(page) {

    try {

        const response = await axios.get(
            `${BASE_URL}/movie/popular`,
            {
                params: {
                    api_key: API_KEY,
                    page: page
                }
            }
        );

        return response.data.results;

    } catch (error) {

        console.error(error);

        return [];
    }
}

export async function searchMovies(query) {

    console.log("Query:", query);

    const response = await axios.get(
        `${BASE_URL}/search/movie`,
        {
            params: {
                api_key: API_KEY,
                query: query,
                page: 1
            }
        }
    );

    console.log(response);

    return response.data.results;
}