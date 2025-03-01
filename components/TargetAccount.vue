<template>
  <!-- componente para mostrar el usuario loggeado, (usuario 2 en este caso) -->
  <div class="container mt-3">
    <ul class="list-group list-group-flush d-grid gap-2">
      <li class="list-group-item">
        <h4>Welcome {{ data.userById.userName }}</h4>
      </li>
      <!-- opciones del usuario, ver posts, editar perfil y cerrar sesión -->
      <nuxt-link
      :to="{
        name: 'posts-userId-userName',
        params: { userId: data.userById.id, userName: data.userById.userName}
      }"
        class="list-group-item d-flex justify-content-between btn btn-outline-primary text-start"
      >
        View my posts
        <span class="badge text-bg-primary rounded-pill">14</span>
    </nuxt-link>
      <nuxt-link 
        :to="{
            name: 'account-userName-update',
            params: { userName: data.userById.userName }
        }" 
        class="list-group-item btn btn-outline-info text-start"
        >
        Edit profile
      </nuxt-link>
      <nuxt-link
        to="/"
        class="list-group-item btn btn-outline-danger text-start"
      >
        Logout
      </nuxt-link>
    </ul>
  </div>
</template>

<script setup>
// props
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
