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
      search() {
        console.log('Ho letto il bottone');
        axios.get(store.config.movieUri, {
          params: {
            api_key: store.config.apiKey,
            query: store.searchInput
          }
        })
        .then((response) => {
          console.log(response.data);
          console.log(response);
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

</style>
