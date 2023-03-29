<script>
    import { store } from '../store';
    export default {
        name: 'Header',
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <header>
        <label for="name-search"></label>
        <input type="text" id="name-search" placeholder="Inserire il titolo" v-model="store.searchInput">
        <button type="button" @click="$emit('search')">Cerca</button>
    </header>
</template>

<style lang="scss" scoped>

</style>