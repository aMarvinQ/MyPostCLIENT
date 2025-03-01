<template>
    <!-- anidar la página para crear un nuevo usuario -->
    <button class="btn active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
        Create a new User
    </button>
    <CardMutationUsers />
</template>

<script>
import CardMutationUsers from '../../components/userComponents/CardMutationUsers.vue'

export default {
    components: {
        CardMutationUsers
    }
}
</script>