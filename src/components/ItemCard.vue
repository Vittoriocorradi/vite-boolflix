<script>


export default {
    name: 'Item',
    props: {
        title: String,
        ogTitle: String,
        language: String,
        rating: Number,
        poster: String
    },
    computed: {
        getLanguage() {
            switch (this.language) {
                case 'en':
                    return 'gb'

                default:
                    return this.language
            }
        },
        getRating() {
            return Math.ceil(this.rating / 2)
        }
    }
}
</script>

<template>
    <li>
        <!-- Informazioni dell'elemento -->
        <div class="item-info">
            <h3> {{ title }} </h3>
            <h4> {{ ogTitle }} </h4>
            <div class="language">
                <span :class="'flag-icon flag-icon-' + getLanguage"></span>
            </div>
            <font-awesome-icon v-for="n in getRating" icon="fa-star fa-solid" />
            <font-awesome-icon v-for="n in 5 - getRating" icon="fa-star fa-regular" />
            
        </div>
        <!-- Immagine del poster -->
        <div class="item-poster">
            <div v-if="poster !== null" class="img">
                <img :src="'https://image.tmdb.org/t/p/w342' + poster" :alt="title + ' poster'">
            </div>
            <div v-else class="img not-found center-flex">
                <font-awesome-icon class="not-found-icon" :icon="['far', 'circle-xmark']" />
                <span class="not-found-text">Impossibile trovare l'immagine</span>
                <div> Title : {{ title }} </div>
            </div>
        </div>
        
    </li>
</template>

<style lang="scss">
li {
    margin: .625rem;
    width: calc(100% / 5 - 20px);
    position: relative;
    height: 24.375rem;

    &:hover .item-info {
        z-index: 1;
        border: .0625rem solid var(--secondary-color);
    }

    .item-poster {
        position: relative;
        height: 100%;

        .not-found {
            padding: .625rem;
            flex-direction: column;
            background-color: #141414;

            .not-found-icon {
                font-size: 2em;
                margin-bottom: .9375rem;
            }

            .not-found-text {
                margin-bottom: .9375rem;
            }
        }
    }

    .item-info {
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: #141414;
    }
}
</style>
