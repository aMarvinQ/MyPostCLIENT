<!-- ruta anidada muestra el botón para abrir el formulario de creación de un nuevo post -->
<template>
  <button
    type="button"
    class="btn active"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Create a new Post
  </button>
  <!-- pasamos los props al componente -->
  <CardMutationPost :titleCard="titleCard"/>
</template>

<script>
import CardMutationPost from "~/components/postComponents/CardMutationPost.vue";

export default {
  components: {
    CardMutationPost,
  },
  // definimos los props
  props: {
    titleCard: 'New Post'
  } 
};

</script>
