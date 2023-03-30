<script>
  import { store } from './store';
  import axios from 'axios'
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
      AppFooter
    },
    data() {
      return {
        store
      }
    },
    methods: {
      // Richiamo l'api dei film
      search() {
        axios.get(store.config.movieUri, {
          params: {
            api_key: store.config.apiKey,
            query: store.searchInput
          }
        })
        .then((response) => {
          store.moviesList = response.data.results;
        })
        axios.get(store.config.serieUri, {
          params: {
            api_key: store.config.apiKey,
            query: store.searchInput
          }
        })
        .then((response) => {
          store.seriesList = response.data.results;
        })
      }
    }
  }
</script>

<template>
  <AppHeader @search="search"/>
  <AppMain/>
  <AppFooter/>
</template>

<style lang="scss">
  body {
    height: 100%;

    #app {
      height: 100%;
    };
  }
</style>
