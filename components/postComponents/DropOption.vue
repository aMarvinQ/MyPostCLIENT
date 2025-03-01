<template>
<!-- componente para mostrar más opciones de los post -->
<div class="btn-group dropstart">
    <button type="button" class="btn" data-bs-toggle="dropdown">
        <ion-icon name="reorder-three-outline"></ion-icon>
    </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">See user profile</a></li>
    <li><a class="dropdown-item" href="#">Delete Post</a></li>
    <li class="dropdown-item" data-bs-toggle="modal"
    data-bs-target="#exampleModal">Update Post</li>
  </ul>
</div>
</template>

<script>
// exportamos hacía cardPosts
export default {
  name: 'DropOption'
}
</script>