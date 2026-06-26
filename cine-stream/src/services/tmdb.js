import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {

    try {

        const response = await axios.get(
            `${BASE_URL}/movie/popular`,
            {
                params: {
                    api_key: API_KEY
                }
            }
        );

        return response.data.results;

    } catch (error) {

        console.error(error);

        return [];
    }
}