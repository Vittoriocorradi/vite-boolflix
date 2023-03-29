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
            :vote="series.vote_average"
            />
        </ul>
        <div v-else-if="store.searchInput === '' | store.researchActive === false">
            Cerca le serie che vuoi!
        </div>
        <div v-else-if="store.researchActive === true">
            Impossibile trovare risultati
        </div>
    </section>
</template>