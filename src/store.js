import { reactive } from "vue";

export const store = reactive({
    searchInput: '',
    config: {
        movieUri: 'https://api.themoviedb.org/3/search/movie',
        serieUri: 'https://api.themoviedb.org/3/search/tv',
        apiKey: 'db1561322e6865ee4c309a2e3399df31'
    }
})