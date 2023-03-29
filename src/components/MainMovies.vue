<script>
    import { store } from '../store';
    import ItemCard from './ItemCard.vue';

    export default {
        name: 'Movies',
        components: {
            ItemCard
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <section>
        <h2>Movies</h2>
        <ul v-if="store.moviesList.length !== 0">
            <ItemCard
            v-for="movie in store.moviesList"
            :title="movie.title"
            :ogTitle="movie.original_title"
            :language="movie.original_language"
            :rating="Math.ceil(movie.vote_average / 2)"
            :poster="movie.poster_path"
            />
        </ul>
        <div v-else-if="store.searchInput === ''">
            Cerca i film che vuoi!
        </div>
        <div v-else-if="store.searchInput.length > 1">
            Impossibile trovare risultati
        </div>
    </section>
</template>