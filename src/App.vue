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
      searching() {
        store.researchActive = false;
      },
      // Richiamo l'api dei film
      search() {
        store.researchActive = true;
        axios.get(store.config.movieUri, {
          params: {
            api_key: store.config.apiKey,
            query: store.searchInput
          }
        })
        .then((response) => {
          console.log(response.data.results);
          store.moviesList = response.data.results;
        })
      }
    }
  }
</script>

<template>
  <AppHeader @search="search" @type="searching"/>
  <AppMain/>
  <AppFooter/>
</template>

<style lang="scss">

</style>
