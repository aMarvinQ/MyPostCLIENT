<template>
    <!-- control para verificar que hayan posts -->
    <div v-if="data?.posts?.length">
        <!-- enviamos los props al componente, recorriendola para mostrar todos los posts -->
        <CardPosts v-for="post in data?.posts" :key="post.id" :post="post"/>
    </div>
    <div v-else>
        <p>No hay posts disponibles</p>
    </div>
</template>

<script setup>
import CardPosts from '../../components/postComponents/CardPosts.vue'
import { getPostsByUsername } from '../../graphql/postQueries.gql'

// usamos useRoute para extraer el parametro de la ruta
const route = useRoute()

// llamamos la query, pasando la variable de la ruta [userID]
const { data} = await useAsyncQuery(getPostsByUsername, {
    id: Number(route.params.userId), 
})

console.log(data)
</script>