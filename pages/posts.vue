<template>
    <div class="container">
        <div class="d-grid gap-2 m-3">
            <NuxtPage />

            <div class="d-flex justify-content-end">
                <FilterPosts />
            </div>
        </div>
        <div>
            <!-- recorremos todos los posts y los mostramos, pasamos los props hacía el componente -->
            <CardPosts v-for="post in data?.posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script setup>
import CardPosts from '~/components/postComponents/CardPosts.vue';
import { getPosts } from '../graphql/postQueries.gql'


const { data } = await useAsyncQuery(getPosts)
</script>