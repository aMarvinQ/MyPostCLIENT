<template>
  <div>
    <!-- componente donde si data.postById existe mostrarlo y pasar los props -->
    <CardPost v-if="data?.postById" :data="data.postById" />
  </div>
</template>

<script setup>
import { getPostById } from '../../graphql/postQueries.gql'
import CardPost from '../../components/postComponents/CardPost.vue'

// usamos useRoute para obtener el id de los parametros de la ruta
const route = useRoute();

// llamamos a los datos de la query pasandole como variable del Id el id de la ruta
const { data } = await useAsyncQuery(getPostById, {
  id: Number(route.params.id),
});
</script>
