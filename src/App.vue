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
        setTimeout(() => {
          this.store.moviesList.forEach(el => {
            if (el.original_language === 'en') {
              el.original_language = 'gb';
            }
          });
          this.store.seriesList.forEach(el => {
            if (el.original_language === 'en') {
              el.original_language = 'gb';
            }
          });
        }, 500);
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
