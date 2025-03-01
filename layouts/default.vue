<!-- layout para usuarios loggeados -->
<template>
    <div class="container">
        <Navbar />
        <slot></slot>
    </div>
</template>

<script>
import Navbar from '~/components/layoutsComponents/Navbar.vue';

export default {
    components: {
        Navbar
    }
}
</script>