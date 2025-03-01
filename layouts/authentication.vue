<!-- layout para usuarios no loggeados -->
<template>
    <div  class="container">
        <NavbarLogin />
        <slot></slot>
    </div>
</template>

<script>
import NavbarLogin from '~/components/layoutsComponents/NavbarLogin.vue';

export default {
    components: {
        NavbarLogin
    }
}
</script>