<template>
  <!-- mostramos todos los post, con las propiedades de la consulta -->
  <div class="card text-center m-2">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <h4 class="card-title mx-auto">{{ post.user.userName }}</h4>
        <div class="ml-auto">
          <DropOption />
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text opacity-25">
        <!-- se llama a la función truncateText para acortar el contenido de la descripción en la tarjeta -->
        {{ truncateText(post.description, 100) }}
      </p>
      <!-- botón para ver el post por id -->
      <nuxt-link
        :to="{
          name: 'posts-userId-id',
          params: { id: post.id, userId: post.userId },
        }"
        class="btn btn-primary"
        >Read more</nuxt-link
      >
    </div>
    <div class="card-footer text-body-secondary">
      <!-- se usa la librería dayjs para humanizar la fecha y mostrarla de manera simple -->
      {{ dayjs(post.createdAt).fromNow() }}
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DropOption from '../../components/postComponents/DropOption.vue'

// inicializamos la librería dayjs
dayjs.extend(relativeTime);

// Recibimos las props
defineProps({
  post: {
    type: Object,
    required: true,
  },
})

// función para truncar el texto de la descipción
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
</script>
