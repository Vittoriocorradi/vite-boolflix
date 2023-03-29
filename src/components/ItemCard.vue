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
        data() {
            return {
                flagsList: [
                    'en',
                    'it'
                ]
            }
        }
    }
</script>

<template>
    <article>
        <li>
            <!-- Immagine del poster -->
            <div class="item-poster">
                <div v-if="poster !== null">
                    <img :src="'https://image.tmdb.org/t/p/w342' + poster" :alt="title + ' poster'">
                </div>
                <div v-else>
                    Impossibile trovare l'immagine
                </div>
            </div>
            <!-- Informazioni dell'elemento -->
            <div class="item-info">
                <h3> {{ title }} </h3>
                <h4> {{ ogTitle }} </h4>
                <!-- Condizione presenza dell'immagine della nazionalità -->
                <div class="language">
                    <div v-if="!flagsList.includes(language)"> {{ language }} </div>
                    <div v-else>
                        <img :src="'/flags-imgs/' + language + '.png'" :alt="language + ' flag'">
                    </div>
                </div>
                <div v-for="(star, index) in 5">
                    <i class="fa-star" :class="index < rating ? 'fa-solid' : 'fa-regular'"></i>
                </div>
            </div>
            <hr>
        </li>
    </article>
</template>
