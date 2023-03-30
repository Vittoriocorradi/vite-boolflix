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
        min-height: 100%;
        background-color: #141414;

        .container {
            padding: 7.5rem 0 2.5rem;

            :deep(section) {
                color: var(--secondary-color);
                margin-bottom: 3.125rem;
    
                h2 {
                    margin-bottom: 2.5rem;
                }
    
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    margin: 0 -.625rem;
                }

                .info-box {
                    height: 12.5rem;
                    background: radial-gradient(closest-side, #444, #141414);
                    font-size: 2em;
                }
            }
        }

    }
</style>