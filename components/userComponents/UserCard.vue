<template>
  <div class="card mt-3 d-flex align-items-center p-3">
    <!-- componente para mostrar los usuarios -->
    <div class="d-flex align-items-center w-100">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
        class="rounded-circle me-3"
        alt="Foto de perfil"
        width="80"
        height="80"
      />
      <div class="card-body flex-grow-1">
        <h4>
          {{ user.userName }}
        </h4>
      </div>
      <!-- botón para redireccionar hacía los posts del usuario -->
      <nuxt-link 
        :to="{ 
            name: 'posts-userId-userName',
            params: {userId: user.id, userName: user.userName}}"
        class="btn btn-primary">
        Ver Posts
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
// props que recibe la tarjeta usuarios
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
