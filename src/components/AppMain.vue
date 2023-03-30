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
                margin: 0 -.625rem;

                li {
                    margin: .625rem;
                    width: calc(100% / 5 - 20px);

                    .item-poster {
                        height: 24.375rem;

                        .not-found {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            padding: .625rem;
                        }
                    }
                }
            }
        }
    }
</style>