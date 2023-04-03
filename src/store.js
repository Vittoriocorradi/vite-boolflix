import { reactive } from "vue";

export const store = reactive({
    searchInput: '',
    moviesList: [],
    seriesList: [],
    config: {
        movieUri: 'https://api.themoviedb.org/3/search/movie',
        serieUri: 'https://api.themoviedb.org/3/search/tv',
        genreList: 'https://api.themoviedb.org/3/genre/movie/list',
        apiKey: 'db1561322e6865ee4c309a2e3399df31'
    }
})