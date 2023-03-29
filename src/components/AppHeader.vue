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
        <h1>
            boolflix
        </h1>
        <div>
            <label for="name-search"></label>
            <input type="text" id="name-search" placeholder="Inserire il titolo" @keyup="$emit('type')" v-model="store.searchInput">
            <button type="button" @click="$emit('search')">Cerca</button>
        </div>
        
    </header>
</template>

<style lang="scss" scoped>
    header {
        position: sticky;
        top: 0;
        left: 0;
        background-color: #0b0b0b;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 3.75rem;

        h1 {
            color: var(--primary-color);
            text-transform: uppercase;
        }

        input {
            
        }
    }
</style>