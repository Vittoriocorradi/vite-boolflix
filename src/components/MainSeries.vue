<script>
    import { store } from '../store';
    import ItemCard from './ItemCard.vue';

    export default {
        name: 'Series',
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
        <h2>Series</h2>
        <ul v-if="store.seriesList.length !== 0">
            <ItemCard
            v-for="series in store.seriesList"
            :title="series.name"
            :ogTitle="series.original_name"
            :language="series.original_language"
            :rating="series.vote_average"
            :poster="series.poster_path"
            :overview="series.overview"
            :genreList="store.genreList"
            :movieGenres="series.genre_ids"
            />
        </ul>
        <div class="info-box center-flex" v-else-if="store.searchInput === '' | store.researchActive === false">
            Cerca le serie che vuoi!
        </div>
        <div class="info-box center-flex" v-else-if="store.searchInput.length > 1">
            Impossibile trovare risultati
        </div>
    </section>
</template>