<script>
    import MainMovies from './MainMovies.vue';
    import MainSeries from './MainSeries.vue';

    export default {
        name: 'Main',
        components: {
            MainMovies,
            MainSeries
        }
    }
</script>

<template>
    <main>
        <div class="container">
            <MainMovies/>
            <MainSeries/>
        </div>
    </main>
</template>

<style lang="scss" scoped>

    main {
        height: 100%;
        background-color: #141414;

        :deep(section) {
            color: var(--secondary-color);

            ul {
                display: flex;
                flex-wrap: wrap;
                width: 100%;

                li {
                    // margin: .625rem;
                }
            }
        }
    }
</style>