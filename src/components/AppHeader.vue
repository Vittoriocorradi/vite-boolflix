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
        <div class="search-bar">
            <label for="name-search"><i class="fa-solid fa-magnifying-glass"></i></label>
            <input type="text" id="name-search" placeholder="Inserire un titolo" @keyup="$emit('type')" v-model="store.searchInput">
            <!-- <button type="button" @click="$emit('search')">Cerca</button> -->
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
        padding: .625rem 1.875rem;

        h1 {
            color: var(--primary-color);
            text-transform: uppercase;
        }

        .search-bar {
            border: .0625rem solid #fff;
            color: var(--secondary-color);
            width: 18.75rem;
            display: flex;
            align-items: center;
            
            label {
                padding: .75rem;
                display: inline-block;
                height: 100%;
            }

            input {
                padding: .625rem 0;
                background-color: inherit;
                color: inherit;
                border: none;
                display: inline-block;
                width: max-content;
                flex-grow: 1;

                &:focus {
                    outline: none;
                }
            
            
            }
        }
    }
</style>