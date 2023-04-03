<script>
import { store } from '../store';

export default {
    name: 'Item',
    props: {
        title: String,
        ogTitle: String,
        language: String,
        rating: Number,
        poster: String,
        overview: String,
        genreList: Array,
        movieGenres: Array
    },
    data() {
        return {
            store
        }
    },
    computed: {
        getLanguage() {
            switch (this.language) {
                case 'en':
                    return 'gb';
                case 'ja':
                    return 'jp';
                case 'ko':
                    return 'kr';
                case 'zh':
                    return 'cn';
                case 'da':
                    return 'dk';
                case 'hi':
                    return 'in';
                case 'te':
                    return 'in';
                case 'ur':
                    return 'pk';

                default:
                    return this.language
            }
        },
        getRating() {
            return Math.ceil(this.rating / 2)
        },
        getGenres() {
            let itemGenres = []
            this.genreList.forEach(el => {
                for (let i = 0; i < this.movieGenres.length; i++) {
                    if (el.id === this.movieGenres[i]) {
                        itemGenres.push(el);
                    }
                }
            })
            return itemGenres;
        }
    }
}
</script>

<template>
    <li>
        <!-- Informazioni dell'elemento -->
        <div class="item-info">
            <div class="title">
                <strong>Title: </strong>
                <span> {{ title }} </span> 
            </div>
            <div class="og-title" v-show="title !== ogTitle">
                <strong>Original Title: </strong>
                <span> {{ ogTitle }} </span> 
            </div>
            <div class="language">
                <span :class="'flag-icon flag-icon-' + getLanguage"></span>
            </div>
            <div class="rating">
                <font-awesome-icon class="rated" v-for="n in getRating" icon="fa-star fa-solid" />
                <font-awesome-icon v-for="n in 5 - getRating" icon="fa-star fa-regular" />
            </div>
            <div class="overview">
                <strong>Overview: </strong>
                <span> {{ overview }} </span> 
            </div>
            <div class="genres">
                <strong>Genres: </strong>
                <span class="genre" v-for="genre in getGenres"> {{ genre.name }} </span>
            </div>
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
    margin: 1.25rem .625rem;
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
            border: .0625rem solid #888;

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
        overflow: hidden;
        padding: .4375rem;

        .title {
            margin-bottom: .25rem;
        }

        .og-title {
            margin-bottom: .3125rem;
        }

        .language {
            margin: .625rem 0;
        }

        .rating {
            margin-bottom: .75rem;

            .rated {
                color: #f9e666;
            }
        }

        .genres {
            margin-top: .3125rem;
            overflow-wrap: break-word;
            
            .genre:not(:last-child)::after {
                content: '\25cf';
                margin: 0 .3125rem;
            }
        }
    }
}
</style>
