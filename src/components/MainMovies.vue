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
            :vote="movie.vote_average"
            :poster="movie.poster_path"
            />
        </ul>
        <div v-else-if="store.searchInput === '' | store.researchActive === false">
            Cerca i film che vuoi!
        </div>
        <div v-else-if="store.researchActive === true">
            Impossibile trovare risultati
        </div>
    </section>
</template>