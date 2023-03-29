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
        <MainMovies/>
        <!-- <MainSeries/> -->
    </main>
</template>

<style lang="scss" scoped>

</style>