<script>
    export default {
        name: 'Item',
        props: {
            title: String,
            ogTitle: String,
            language: String,
            vote: Number
        }
    }
</script>

<template>
    <article>
        <li>
            <h1> {{ title }} </h1>
            <h2> {{ ogTitle }} </h2>
            <div> {{ language }} </div>
            <div> {{ vote }} </div>
            <hr>
        </li>
    </article>
</template>