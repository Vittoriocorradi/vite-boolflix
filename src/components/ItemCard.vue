<script>
    

    export default {
        name: 'Item',
        props: {
            title: String,
            ogTitle: String,
            language: String,
            vote: Number
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
            <h1> {{ title }} </h1>
            <h2> {{ ogTitle }} </h2>
            <div v-if="!flagsList.includes(language)"> {{ language }} </div>
            <div v-else>
                <img :src="'/flags-imgs/' + language + '.png'" alt="">
            </div>
            <div> {{ vote }} </div>
            <hr>
        </li>
    </article>
</template>