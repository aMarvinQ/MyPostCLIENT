<template>
  <!-- mostramos el post individual -->
  <div class="card mt-3">
    <div class="card-body">
      <h3>{{ data.title  }}</h3>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-body">
      <div class="row justify-content-start">
        <div class="col-12 size overflow-auto">{{ data.description }}</div>
      </div>
    </div>
    <div class="card-footer">
      <div class="row justify-content-between">
        <div class="col-4">Author: {{ data.user.userName }}</div>
        <div class="col-4">Date: {{ new Date(data.updatedAt).toLocaleDateString() }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// recibimos los props dentro del script setup
defineProps({
  data: {
    type: Object,
    required: true,
  }
})
</script>

<style>
.size {
  height: 50vh;
}
</style>
