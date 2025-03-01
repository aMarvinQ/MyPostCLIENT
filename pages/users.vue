<template>
  <div class="container">
    <div class="d-grid gap-2 m-3">
      <NuxtPage />
    </div>
    <div>
      <!-- recorremos los usuarios, mostrandolos y pasando sus props -->
      <UserCard v-for="user in data?.users" :key="user.id" :user="user"/>
    </div>
  </div>
</template>

<script setup>
import UserCard from '../components/userComponents/UserCard.vue'
import { getUsers } from '../graphql/userQueries.gql'

const { data } = await useAsyncQuery(getUsers)
</script>