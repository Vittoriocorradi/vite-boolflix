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
            :rating="movie.vote_average"
            :poster="movie.poster_path"
            :overview="movie.overview"
            />
        </ul>
        <div class="info-box center-flex" v-else-if="store.searchInput === ''">
            Cerca i film che vuoi!
        </div>
        <div class="info-box center-flex" v-else-if="store.searchInput.length > 1">
            Impossibile trovare risultati
        </div>
    </section>
</template>